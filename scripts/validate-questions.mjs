#!/usr/bin/env node
/**
 * Question validator for Code Quest.
 * Checks all challenge data for structural errors and emits warnings.
 * Exit 0 = clean (warnings only). Exit 1 = structural errors found.
 *
 * Usage: node scripts/validate-questions.mjs
 */

import { fileURLToPath, pathToFileURL } from 'url';
import path from 'path';

// ---------------------------------------------------------------------------
// Load data files
// ---------------------------------------------------------------------------
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

let CHALLENGES, LANGUAGES, EXECUTE_CHALLENGES, EXECUTE_LANGUAGES,
    DEBUG_CHALLENGES, DEBUG_LANGUAGES, COUNTRIES, CONCEPTS,
    COUNTRY_FACTS, COUNTRY_FACTS_BY_ID, validateCountryFacts,
    QUESTION_ASSIGNMENTS, COGNITIVE_TASKS, listFinalMissions,
    META_KEY, packProgress, unpackProgress;

function dataUrl(rel) {
  return pathToFileURL(path.join(ROOT, rel)).href;
}

try {
  ({ CHALLENGES, LANGUAGES } = await import(dataUrl('src/data/challenges.js')));
  ({ EXECUTE_CHALLENGES, EXECUTE_LANGUAGES } = await import(dataUrl('src/data/execute_challenges.js')));
  ({ DEBUG_CHALLENGES, DEBUG_LANGUAGES } = await import(dataUrl('src/data/debug_challenges.js')));
  ({ COUNTRIES } = await import(dataUrl('src/data/countries.js')));
  ({ CONCEPTS } = await import(dataUrl('src/data/worlds.js')));
  ({ COUNTRY_FACTS, COUNTRY_FACTS_BY_ID, validateCountryFacts } = await import(dataUrl('src/data/country_facts.js')));
  ({ QUESTION_ASSIGNMENTS, COGNITIVE_TASKS } = await import(dataUrl('src/data/question_assignments.js')));
  ({ listFinalMissions } = await import(dataUrl('src/data/final_missions.js')));
  ({ META_KEY, packProgress, unpackProgress } = await import(dataUrl('src/utils/metadata.js')));
} catch (err) {
  console.error('Failed to import data files:', err.message);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const SUPPORTED_TYPES = new Set([
  'fill-blank', 'multiple-choice', 'output-predict', 'multiple-blanks',
  'code-ordering', 'implementation-selection', 'debug-step',
]);

const WORLD_SOURCES = [
  { worldId: 'decode',  challenges: CHALLENGES,         languages: LANGUAGES,         sourceFile: 'challenges.js' },
  { worldId: 'execute', challenges: EXECUTE_CHALLENGES, languages: EXECUTE_LANGUAGES, sourceFile: 'execute_challenges.js' },
  { worldId: 'debug',   challenges: DEBUG_CHALLENGES,   languages: DEBUG_LANGUAGES,   sourceFile: 'debug_challenges.js' },
];

const VALID_COUNTRY_IDS = new Set(COUNTRIES.map(c => c.id));
const VALID_COGNITIVE_TASKS = new Set(COGNITIVE_TASKS);
const QUESTION_METADATA_FIELDS = [
  'factIds',
  'entityKeys',
  'learningObjectiveId',
  'programmingConceptIds',
  'cognitiveTask',
  'progressionGroupId',
];

// Build conceptId → languages map from CONCEPTS
const VALID_CONCEPTS = {};
for (const [lang, conceptList] of Object.entries(CONCEPTS)) {
  VALID_CONCEPTS[lang] = new Set(conceptList.map(c => c.id));
}

function normalizeKey(value) {
  return String(value ?? '').trim().toLowerCase();
}

function normalizeText(value) {
  return normalizeKey(value)
    .replace(/\b(japan|usa|france|brazil|australia|egypt|india|russia|china|germany|uk|korea|canada|italy|mexico|saudi arabia|argentina|turkey|indonesia|south africa)\b/g, '{country}')
    .replace(/\b(tokyo|washington d\.c\.|paris|canberra|cairo|new delhi|moscow|beijing|berlin|london|seoul|ottawa|rome|mexico city|riyadh|buenos aires|ankara|jakarta|pretoria)\b/g, '{capital}')
    .replace(/\d+/g, '{number}')
    .replace(/["'`]/g, '')
    .replace(/\s+/g, ' ');
}

function tokenSet(value) {
  return new Set(normalizeText(value).split(/[^a-z0-9_{}]+/).filter(Boolean));
}

function jaccardSimilarity(a, b) {
  const left = tokenSet(a);
  const right = tokenSet(b);
  if (left.size === 0 && right.size === 0) return 1;
  let intersection = 0;
  for (const token of left) {
    if (right.has(token)) intersection++;
  }
  return intersection / (left.size + right.size - intersection || 1);
}

export function buildFactLookups(facts = COUNTRY_FACTS) {
  const factsById = Object.fromEntries(facts.map(fact => [fact.factId, fact]));
  const entityKeys = new Set();
  const aliasToEntityKey = new Map();

  for (const fact of facts) {
    const primary = fact.entityKeys?.[0];
    for (const key of fact.entityKeys ?? []) {
      entityKeys.add(key);
      aliasToEntityKey.set(normalizeKey(key), key);
    }
    for (const alias of fact.aliases ?? []) {
      if (primary) aliasToEntityKey.set(normalizeKey(alias), primary);
    }
  }

  return { factsById, entityKeys, aliasToEntityKey };
}

function canonicalEntityKey(value, lookups) {
  const key = normalizeKey(value);
  return lookups.aliasToEntityKey.get(key) ?? value;
}

function questionTextSignature(q) {
  return normalizeText([
    q.title,
    q.description,
    q.prompt,
    q.code,
    Array.isArray(q.options) ? q.options.join(' ') : '',
  ].filter(Boolean).join(' '));
}

function hasQuestionMetadata(q, assignment) {
  if (assignment) return true;
  return QUESTION_METADATA_FIELDS.some(field => q[field] !== undefined);
}

// ---------------------------------------------------------------------------
// Core validation logic (exported for tests)
// ---------------------------------------------------------------------------

/** Validate a single question object. Returns { errors, warnings }. */
export function validateQuestion(q, ctx) {
  const { worldId, countryId, languageId, allIds } = ctx;
  const errors = [];
  const warnings = [];
  const loc = `[${ctx.sourceFile}] ${countryId}/${languageId} id=${q.id ?? '(no id)'}`;
  const factLookups = ctx.factLookups ?? buildFactLookups();
  const factsById = ctx.factsById ?? factLookups.factsById ?? COUNTRY_FACTS_BY_ID;
  const assignment = ctx.assignment ?? null;
  const metadata = { ...assignment, ...q };

  // --- Identity ---
  if (!q.id || String(q.id).trim() === '') {
    errors.push({ loc, rule: 'missing-or-empty-id', msg: 'Question is missing an id' });
  } else {
    if (allIds.has(q.id)) {
      errors.push({ loc, rule: 'global-duplicate-id', msg: `Duplicate id "${q.id}"` });
    } else {
      allIds.add(q.id);
    }
  }

  if (!q.title || String(q.title).trim() === '') {
    errors.push({ loc, rule: 'missing-title', msg: 'Question is missing a title' });
  }

  // --- Explicit worldId mismatch ---
  if (q.worldId && q.worldId !== worldId) {
    errors.push({ loc, rule: 'explicit-world-source-mismatch', msg: `q.worldId="${q.worldId}" but source is "${worldId}"` });
  }

  if (!hasQuestionMetadata(q, assignment)) {
    warnings.push({ loc, rule: 'legacy-missing-question-metadata', msg: 'Question has no fact/task assignment metadata yet' });
  }

  if (metadata.factIds !== undefined) {
    if (!Array.isArray(metadata.factIds)) {
      errors.push({ loc, rule: 'factIds-not-array', msg: 'factIds must be an array when present' });
    } else {
      const seenFactIds = new Set();
      for (const factId of metadata.factIds) {
        if (seenFactIds.has(factId)) {
          errors.push({ loc, rule: 'duplicate-factId', msg: `factId "${factId}" is listed more than once` });
        }
        seenFactIds.add(factId);
        const fact = factsById[factId];
        if (!fact) {
          errors.push({ loc, rule: 'unknown-factId', msg: `factId "${factId}" is not registered` });
          continue;
        }
        if (fact.factStatus === 'avoid') {
          errors.push({ loc, rule: 'avoid-fact-used', msg: `factId "${factId}" is marked avoid and cannot be used` });
        }
        if (fact.countryId !== countryId) {
          errors.push({ loc, rule: 'fact-country-mismatch', msg: `factId "${factId}" belongs to ${fact.countryId}, not ${countryId}` });
        }
        if (fact.allowedWorlds.length > 0 && !fact.allowedWorlds.includes(worldId)) {
          errors.push({ loc, rule: 'fact-world-not-allowed', msg: `factId "${factId}" is not allowed for ${worldId}` });
        }
        if (fact.allowedLanguageIds.length > 0 && !fact.allowedLanguageIds.includes(languageId)) {
          errors.push({ loc, rule: 'fact-language-not-allowed', msg: `factId "${factId}" is not allowed for ${languageId}` });
        }
      }
    }
  }

  if (metadata.entityKeys !== undefined) {
    if (!Array.isArray(metadata.entityKeys)) {
      errors.push({ loc, rule: 'entityKeys-not-array', msg: 'entityKeys must be an array when present' });
    } else {
      for (const rawKey of metadata.entityKeys) {
        const canonical = canonicalEntityKey(rawKey, factLookups);
        if (!factLookups.entityKeys.has(canonical)) {
          errors.push({ loc, rule: 'unknown-entityKey', msg: `entityKey "${rawKey}" is not registered` });
        }
      }
    }
  }

  if (metadata.programmingConceptIds !== undefined && !Array.isArray(metadata.programmingConceptIds)) {
    errors.push({ loc, rule: 'programmingConceptIds-not-array', msg: 'programmingConceptIds must be an array when present' });
  }

  if (metadata.cognitiveTask !== undefined && !VALID_COGNITIVE_TASKS.has(metadata.cognitiveTask)) {
    errors.push({ loc, rule: 'invalid-cognitiveTask', msg: `Unknown cognitiveTask "${metadata.cognitiveTask}"` });
  }

  // --- Explicit conceptId validation ---
  if (q.conceptId !== undefined) {
    const validSet = VALID_CONCEPTS[languageId];
    if (validSet && !validSet.has(q.conceptId)) {
      errors.push({ loc, rule: 'invalid-explicit-concept', msg: `conceptId="${q.conceptId}" not in CONCEPTS["${languageId}"]` });
    }
  } else {
    warnings.push({ loc, rule: 'missing-nonderivable-conceptId', msg: 'No conceptId set' });
  }

  // --- Hints / explanations ---
  if (!q.hint && !q.steps) {
    warnings.push({ loc, rule: 'missing-hint', msg: 'No hint provided' });
  }
  if (!q.explanation && !q.steps) {
    warnings.push({ loc, rule: 'missing-explanation', msg: 'No explanation provided' });
  }

  const qType = q.questionType || 'fill-blank';

  // --- Unknown type ---
  if (!SUPPORTED_TYPES.has(qType)) {
    errors.push({ loc, rule: 'unsupported-type', msg: `Unknown questionType "${qType}"` });
    return { errors, warnings };
  }

  // --- Type-specific validation ---
  if (qType === 'fill-blank') {
    validateFillBlank(q, loc, errors, warnings);
  } else if (qType === 'multiple-choice' || qType === 'output-predict') {
    validateChoiceType(q, loc, errors, warnings);
  } else if (qType === 'multiple-blanks') {
    validateMultipleBlanks(q, loc, errors, warnings);
  } else if (qType === 'code-ordering') {
    validateCodeOrdering(q, loc, errors, warnings);
  } else if (qType === 'implementation-selection') {
    validateChoiceType(q, loc, errors, warnings);
  } else if (qType === 'debug-step') {
    validateDebugStep(q, loc, errors, warnings);
  }

  return { errors, warnings };
}

function validateFillBlank(q, loc, errors, warnings) {
  const answer = q.answer ?? q.blank;
  if (answer === undefined || answer === null || String(answer).trim() === '') {
    errors.push({ loc, rule: 'fill-blank:missing-answer-or-blank', msg: 'fill-blank must have answer or blank' });
  }
  if (!q.code) {
    errors.push({ loc, rule: 'malformed-render-or-grading-data', msg: 'fill-blank is missing code' });
    return;
  }
  const count = (q.code.match(/___BLANK___/g) || []).length;
  if (count === 0) {
    errors.push({ loc, rule: 'fill-blank:missing-single-placeholder', msg: `No ___BLANK___ placeholder found in code (found ${count})` });
  }
  // count > 1 is allowed: same answer renders in multiple positions (e.g. bracket-wrap questions)
  if (q.code.length > 600) {
    warnings.push({ loc, rule: 'long-decode-code', msg: 'Code block exceeds 600 chars' });
  }
}

function validateChoiceType(q, loc, errors, warnings) {
  if (!q.options || !Array.isArray(q.options)) {
    errors.push({ loc, rule: 'choice-types:missing-options', msg: 'Missing options array' });
    return;
  }
  if (q.options.length < 2) {
    errors.push({ loc, rule: 'choice-types:options<2', msg: `options has ${q.options.length} element(s), need at least 2` });
  }
  const seen = new Set();
  for (const opt of q.options) {
    if (seen.has(opt)) {
      errors.push({ loc, rule: 'choice-types:duplicate-options', msg: `Duplicate option "${opt}"` });
    }
    seen.add(opt);
  }
  const answer = q.answer;
  if (answer === undefined || answer === null || String(answer).trim() === '') {
    errors.push({ loc, rule: 'choice-types:missing-answer', msg: 'Missing answer' });
  } else if (!q.options.includes(answer)) {
    errors.push({ loc, rule: 'choice-types:answer-not-in-options', msg: `answer "${answer}" is not in options` });
  }
}

function validateMultipleBlanks(q, loc, errors, warnings) {
  if (!q.blanks || !Array.isArray(q.blanks) || q.blanks.length === 0) {
    errors.push({ loc, rule: 'multiple-blanks:missing-answers', msg: 'Missing blanks array' });
    return;
  }
  if (!q.code) {
    errors.push({ loc, rule: 'malformed-render-or-grading-data', msg: 'multiple-blanks is missing code' });
    return;
  }
  const placeholderCount = (q.code.match(/___BLANK_\d+___/g) || []).length;
  if (placeholderCount !== q.blanks.length) {
    errors.push({ loc, rule: 'multiple-blanks:placeholder-answer-count-mismatch',
      msg: `${placeholderCount} placeholder(s) vs ${q.blanks.length} answer(s)` });
  }
}

function validateCodeOrdering(q, loc, errors, warnings) {
  if (!q.blocks || !Array.isArray(q.blocks) || q.blocks.length < 2) {
    errors.push({ loc, rule: 'code-ordering:missing-blocks', msg: 'blocks must be an array with at least 2 elements' });
    return;
  }
  if (!q.answer || !Array.isArray(q.answer)) {
    errors.push({ loc, rule: 'code-ordering:missing-order', msg: 'Missing answer array' });
    return;
  }
  if (q.answer.length !== q.blocks.length) {
    errors.push({ loc, rule: 'code-ordering:order-length-mismatch',
      msg: `blocks.length=${q.blocks.length} but answer.length=${q.answer.length}` });
    return;
  }
  const sorted = [...q.answer].sort((a, b) => a - b);
  const expected = q.blocks.map((_, i) => i);
  const isPermutation = sorted.every((v, i) => v === expected[i]);
  if (!isPermutation) {
    errors.push({ loc, rule: 'code-ordering:invalid-permutation',
      msg: `answer ${JSON.stringify(q.answer)} is not a valid permutation of 0..${q.blocks.length - 1}` });
  }
}

function validateDebugStep(q, loc, errors, warnings) {
  if (!q.steps || !Array.isArray(q.steps)) {
    errors.push({ loc, rule: 'debug-step:missing-steps', msg: 'Missing steps array' });
    return;
  }
  if (q.steps.length !== 3) {
    errors.push({ loc, rule: 'debug-step:steps-count!=3',
      msg: `Expected exactly 3 steps, found ${q.steps.length}` });
  }
  const stepNums = q.steps.map(s => s.stepNum);
  if (JSON.stringify(stepNums.sort((a, b) => a - b)) !== '[1,2,3]') {
    errors.push({ loc, rule: 'debug-step:step-numbers-not-1-2-3',
      msg: `stepNums are ${JSON.stringify(q.steps.map(s => s.stepNum))}` });
  }

  const firstContextStep = q.steps.find(step => step.code || step.prompt || step.context || step.description);
  const resolvedScenario = q.description || q.prompt || q.context || firstContextStep?.prompt || firstContextStep?.context || firstContextStep?.description;
  const resolvedCode = q.code || firstContextStep?.code;
  if (!resolvedScenario || !resolvedCode) {
    errors.push({ loc, rule: 'debug-step:missing-original-context',
      msg: 'DEBUG steps must resolve original scenario and code from the parent question or first context-bearing step' });
  }
  if (q.steps.length >= 2 && (!resolvedScenario || !resolvedCode)) {
    errors.push({ loc, rule: 'debug-step:later-step-context-unresolved',
      msg: 'DEBUG Step 2/3 cannot restore original scenario/code context' });
  }

  const distinctQuestions = new Set(q.steps.map(step => normalizeText(step.question))).size;
  const distinctAnswers = new Set(q.steps.map(step => normalizeText(step.answer))).size;
  if (q.steps.length === 3 && distinctQuestions <= 1 && distinctAnswers <= 1) {
    warnings.push({ loc, rule: 'debug-step:simple-one-stage-choice',
      msg: 'DEBUG appears to repeat one simple choice instead of cause -> fix -> impact progression' });
  }

  for (const step of q.steps) {
    const sloc = `${loc} step#${step.stepNum}`;
    if (![1, 2, 3].includes(step.stepNum)) {
      errors.push({ loc: sloc, rule: 'debug-step:invalid-step-number',
        msg: `DEBUG stepNum must be 1, 2, or 3; found ${step.stepNum}` });
    }
    if (!step.question || !step.options || !step.answer) {
      errors.push({ loc: sloc, rule: 'debug-step:missing-step-question-options-answer',
        msg: 'Step must have question, options, and answer' });
      continue;
    }
    if (!Array.isArray(step.options) || step.options.length < 2) {
      errors.push({ loc: sloc, rule: 'debug-step:missing-step-question-options-answer',
        msg: `Step options must be array with ≥2 items, found ${step.options?.length}` });
      continue;
    }
    if (!step.options.includes(step.answer)) {
      errors.push({ loc: sloc, rule: 'debug-step:answer-not-in-step-options',
        msg: `answer "${step.answer}" not in options` });
    }
    const seen = new Set();
    for (const opt of step.options) {
      if (seen.has(opt)) {
        errors.push({ loc: sloc, rule: 'debug-step:duplicate-step-options', msg: `Duplicate option "${opt}"` });
      }
      seen.add(opt);
    }
  }
}

export function validateCloudMetadata(meta, ctx = {}) {
  const errors = [];
  const warnings = [];
  const loc = ctx.loc || '[cloud-meta]';
  if (!meta || typeof meta !== 'object' || Array.isArray(meta)) {
    errors.push({ loc, rule: 'malformed-review-metadata', msg: 'metadata must be an object' });
    return { errors, warnings };
  }
  const resume = meta.resume || {};
  if (Object.keys(resume).length > 0) {
    for (const field of ['worldId', 'countryId', 'languageId', 'screen', 'updatedAt']) {
      if (!resume[field]) errors.push({ loc, rule: 'invalid-resume-metadata', msg: `resume missing ${field}` });
    }
    if (resume.questionId === undefined && resume.questionIndexFallback !== undefined) {
      warnings.push({ loc, rule: 'resume-index-only-fallback', msg: 'resume uses index fallback without questionId' });
    }
    if (resume.worldId && !WORLD_SOURCES.some(w => w.worldId === resume.worldId)) {
      errors.push({ loc, rule: 'unknown-resume-target', msg: `unknown resume world "${resume.worldId}"` });
    }
    if (resume.countryId && !VALID_COUNTRY_IDS.has(resume.countryId)) {
      errors.push({ loc, rule: 'unknown-resume-target', msg: `unknown resume country "${resume.countryId}"` });
    }
  }
  for (const [questionId, item] of Object.entries(meta.review || {})) {
    if (!item || typeof item !== 'object' || Array.isArray(item)) {
      errors.push({ loc, rule: 'malformed-review-metadata', msg: `review item ${questionId} must be an object` });
      continue;
    }
    for (const countKey of ['wrongCount', 'hintCount']) {
      if (item[countKey] !== undefined && (!Number.isInteger(item[countKey]) || item[countKey] < 0)) {
        errors.push({ loc, rule: 'malformed-review-metadata', msg: `${questionId}.${countKey} must be a non-negative integer` });
      }
    }
    if (item.mistakeTags !== undefined && !Array.isArray(item.mistakeTags)) {
      errors.push({ loc, rule: 'malformed-review-metadata', msg: `${questionId}.mistakeTags must be an array` });
    }
  }
  return { errors, warnings };
}

export function validateProgressPayload(progress) {
  const errors = [];
  const warnings = [];
  const unpacked = unpackProgress(progress || {});
  for (const [key, value] of Object.entries(progress || {})) {
    if (key === META_KEY && value === true) {
      errors.push({ loc: '[progress]', rule: 'reserved-metadata-treated-as-stage-progress', msg: `${META_KEY} cannot be a stage progress boolean` });
    }
  }
  const metaIssues = validateCloudMetadata(unpacked.meta, { loc: '[progress.__cq_meta]' });
  return { errors: [...errors, ...metaIssues.errors], warnings: [...warnings, ...metaIssues.warnings] };
}

export function validateFinalMission(mission) {
  const errors = [];
  const warnings = [];
  const loc = `[final_missions.js] ${mission?.id ?? '(missing id)'}`;
  if (!mission?.id || !mission.id.startsWith(`final_${mission.worldId}*${mission.countryId}*${mission.languageId}`)) {
    errors.push({ loc, rule: 'final-mission-missing-stable-ids', msg: 'Final mission id must be final_{worldId}*{countryId}*{languageId}' });
  }
  if (!['DECODE_FINAL', 'EXECUTE_FINAL', 'DEBUG_FINAL'].includes(mission?.type)) {
    errors.push({ loc, rule: 'invalid-final-mission-type', msg: `Invalid final mission type "${mission?.type}"` });
  }
  if (!mission?.worldId || !mission?.countryId || !mission?.languageId) {
    errors.push({ loc, rule: 'invalid-final-mission-link', msg: 'Final mission must include worldId, countryId, and languageId' });
  }
  if (!mission?.unlock || mission.unlock.requiresStageClear !== true) {
    errors.push({ loc, rule: 'invalid-final-mission-unlock-config', msg: 'Final mission must declare unlock.requiresStageClear=true' });
  }
  if (!Array.isArray(mission?.questions) || mission.questions.length === 0) {
    warnings.push({ loc, rule: 'final-mission-no-verification-content', msg: 'Final mission has no verification content' });
    return { errors, warnings };
  }
  if (mission.type === 'DEBUG_FINAL') {
    const q = mission.questions.find(item => item.questionType === 'debug-step');
    if (!q) {
      errors.push({ loc, rule: 'debug-final-missing-shared-context', msg: 'DEBUG final must include a debug-step question' });
    } else {
      validateDebugStep(q, loc, errors, warnings);
      if (errors.some(e => e.rule.startsWith('debug-step:'))) {
        errors.push({ loc, rule: 'debug-final-missing-shared-context', msg: 'DEBUG final must have valid 3-step shared context' });
      }
    }
  }
  return { errors, warnings };
}

export function validateAssignmentRecord(record, ctx = {}) {
  const errors = [];
  const warnings = [];
  const loc = `[question_assignments.js] ${record?.questionId ?? '(missing questionId)'}`;
  const factLookups = ctx.factLookups ?? buildFactLookups(ctx.countryFacts ?? COUNTRY_FACTS);
  const factsById = factLookups.factsById;

  if (!record || typeof record !== 'object' || Array.isArray(record)) {
    return { errors: [{ loc, rule: 'invalid-assignment-record', msg: 'Assignment record must be an object' }], warnings };
  }

  for (const field of ['questionId', 'countryId', 'worldId', 'languageId', 'learningObjectiveId', 'cognitiveTask']) {
    if (!record[field] || String(record[field]).trim() === '') {
      errors.push({ loc, rule: 'invalid-assignment-record', msg: `Missing required assignment field ${field}` });
    }
  }

  for (const field of ['factIds', 'entityKeys', 'programmingConceptIds']) {
    if (!Array.isArray(record[field])) {
      errors.push({ loc, rule: 'invalid-assignment-record', msg: `${field} must be an array` });
    }
  }

  if (record.cognitiveTask && !VALID_COGNITIVE_TASKS.has(record.cognitiveTask)) {
    errors.push({ loc, rule: 'invalid-cognitiveTask', msg: `Unknown cognitiveTask "${record.cognitiveTask}"` });
  }

  for (const factId of record.factIds ?? []) {
    const fact = factsById[factId];
    if (!fact) {
      errors.push({ loc, rule: 'unknown-factId', msg: `factId "${factId}" is not registered` });
    } else if (fact.factStatus === 'avoid') {
      errors.push({ loc, rule: 'avoid-fact-used', msg: `factId "${factId}" is marked avoid and cannot be used` });
    }
  }

  for (const rawKey of record.entityKeys ?? []) {
    const canonical = canonicalEntityKey(rawKey, factLookups);
    if (!factLookups.entityKeys.has(canonical)) {
      errors.push({ loc, rule: 'unknown-entityKey', msg: `entityKey "${rawKey}" is not registered` });
    } else if (canonical !== rawKey) {
      warnings.push({ loc, rule: 'alias-entityKey-used', msg: `entityKey "${rawKey}" is an alias of "${canonical}"` });
    }
  }

  return { errors, warnings };
}

function buildAssignmentMap(records, errors, warnings, factLookups) {
  const map = new Map();
  for (const record of records) {
    const { errors: recordErrors, warnings: recordWarnings } = validateAssignmentRecord(record, { factLookups });
    errors.push(...recordErrors);
    warnings.push(...recordWarnings);
    if (!record?.questionId) continue;
    if (map.has(record.questionId)) {
      errors.push({ loc: `[question_assignments.js] ${record.questionId}`, rule: 'duplicate-assignment-questionId',
        msg: `Multiple assignment records for questionId "${record.questionId}"` });
    }
    map.set(record.questionId, record);
  }
  return map;
}

function mergedMetadata(q, assignment) {
  return { ...(assignment ?? {}), ...q };
}

function metadataKeyList(values = []) {
  return values.map(value => String(value)).sort().join('|');
}

export function analyzeQuestionSet(records, allErrors, allWarnings, factLookups) {
  const byFact = new Map();
  const byEntity = new Map();
  const byLearningObjective = new Map();
  const byCompositeTask = new Map();
  const byCrossWorldTheme = new Map();

  const pushMap = (map, key, record) => {
    if (!key) return;
    map.set(key, [...(map.get(key) ?? []), record]);
  };

  for (const record of records) {
    const { q, metadata, loc, worldId, countryId, languageId } = record;
    const factIds = Array.isArray(metadata.factIds) ? metadata.factIds : [];
    const entityKeys = Array.isArray(metadata.entityKeys)
      ? metadata.entityKeys.map(key => canonicalEntityKey(key, factLookups))
      : [];
    const concepts = Array.isArray(metadata.programmingConceptIds) ? metadata.programmingConceptIds : [];

    for (const factId of factIds) pushMap(byFact, `${countryId}:${factId}`, record);
    for (const entityKey of entityKeys) pushMap(byEntity, `${countryId}:${entityKey}`, record);
    pushMap(byLearningObjective, metadata.learningObjectiveId, record);
    pushMap(
      byCompositeTask,
      `${metadataKeyList(factIds)}::${metadataKeyList(concepts)}::${metadata.cognitiveTask ?? ''}`,
      record
    );

    const themeKey = `${countryId}:${metadataKeyList(factIds)}:${metadataKeyList(entityKeys)}:${metadata.learningObjectiveId ?? ''}`;
    if (factIds.length > 0 || entityKeys.length > 0 || metadata.learningObjectiveId) {
      pushMap(byCrossWorldTheme, themeKey, record);
    }

    if (worldId === 'execute' && q.questionType === 'multiple-choice' && !q.code) {
      allWarnings.push({ loc, rule: 'execute-decode-level-difficulty',
        msg: 'EXECUTE question has no code to run/trace and may be DECODE-level difficulty' });
    }
  }

  for (const [key, matches] of byFact.entries()) {
    if (matches.length > 1) {
      allWarnings.push({ loc: matches.map(m => m.loc).join(' | '), rule: 'factId-reused',
        msg: `factId reuse detected for ${key}` });
    }
  }

  for (const [key, matches] of byEntity.entries()) {
    if (matches.length > 1) {
      const aliasUsed = matches.some(m => (m.metadata.entityKeys ?? []).some(raw => canonicalEntityKey(raw, factLookups) !== raw));
      allWarnings.push({ loc: matches.map(m => m.loc).join(' | '), rule: aliasUsed ? 'alias-entity-reused' : 'entityKey-reused',
        msg: `entityKey reuse detected for ${key}` });
    }
  }

  for (const [key, matches] of byLearningObjective.entries()) {
    if (key && matches.length > 1) {
      allWarnings.push({ loc: matches.map(m => m.loc).join(' | '), rule: 'learningObjective-reused',
        msg: `learningObjectiveId "${key}" is used by ${matches.length} questions` });
    }
  }

  for (const [key, matches] of byCompositeTask.entries()) {
    if (key !== '::::' && matches.length > 1) {
      allWarnings.push({ loc: matches.map(m => m.loc).join(' | '), rule: 'same-facts-concepts-cognitiveTask',
        msg: 'Same factIds + programmingConceptIds + cognitiveTask combination is reused' });
    }
  }

  for (const matches of byCrossWorldTheme.values()) {
    const worlds = new Set(matches.map(m => m.worldId));
    const missingProgression = matches.filter(m => !m.metadata.progressionGroupId);
    if (worlds.size > 1 && missingProgression.length > 0) {
      allErrors.push({ loc: missingProgression.map(m => m.loc).join(' | '), rule: 'invalid-progression',
        msg: 'Related themes used across worlds must declare progressionGroupId' });
    }
    const byProgression = new Map();
    for (const match of matches.filter(m => m.metadata.progressionGroupId)) {
      pushMap(byProgression, match.metadata.progressionGroupId, match);
    }
    for (const [progressionGroupId, group] of byProgression.entries()) {
      if (new Set(group.map(m => m.metadata.learningObjectiveId)).size <= 1 &&
          new Set(group.map(m => m.metadata.cognitiveTask)).size <= 1 &&
          new Set(group.map(m => normalizeText(m.q.code))).size <= 1 &&
          group.length > 1) {
        allErrors.push({ loc: group.map(m => m.loc).join(' | '), rule: 'invalid-progression',
          msg: `progressionGroupId "${progressionGroupId}" must vary learning objective, cognitive task, or code requirements` });
      }
    }
  }

  for (let i = 0; i < records.length; i++) {
    for (let j = i + 1; j < records.length; j++) {
      const a = records[i];
      const b = records[j];
      if (a.q.id === b.q.id) continue;
      const textSimilarity = jaccardSimilarity(questionTextSignature(a.q), questionTextSignature(b.q));
      const codeSimilarity = jaccardSimilarity(a.q.code ?? '', b.q.code ?? '');
      const optionSimilarity = jaccardSimilarity((a.q.options ?? []).join(' '), (b.q.options ?? []).join(' '));
      if (textSimilarity >= 0.92) {
        allWarnings.push({ loc: `${a.loc} | ${b.loc}`, rule: 'country-name-only-template',
          msg: 'Questions look like the same template with only country/value substitutions' });
      } else if (textSimilarity >= 0.82 || (codeSimilarity >= 0.92 && optionSimilarity >= 0.92 && codeSimilarity < 1)) {
        allWarnings.push({ loc: `${a.loc} | ${b.loc}`, rule: 'high-similarity-prompt-code-options',
          msg: 'prompt/code/options are highly similar' });
      }

      const sameFacts = metadataKeyList(a.metadata.factIds ?? []) === metadataKeyList(b.metadata.factIds ?? []);
      const sameTask = a.metadata.cognitiveTask && a.metadata.cognitiveTask === b.metadata.cognitiveTask;
      if (sameFacts && sameTask && a.languageId !== b.languageId && (a.metadata.factIds ?? []).length > 0) {
        allWarnings.push({ loc: `${a.loc} | ${b.loc}`, rule: 'same-trivia-task-different-language',
          msg: 'Same trivia and cognitive task is reused with only language changed' });
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Main runner
// ---------------------------------------------------------------------------
export function runValidation() {
  const allIds = new Set();
  const allErrors = [];
  const allWarnings = [];
  const counts = {}; // worldId → countryId → langId → type → count
  const factLookups = buildFactLookups(COUNTRY_FACTS);
  const assignmentMap = buildAssignmentMap(QUESTION_ASSIGNMENTS, allErrors, allWarnings, factLookups);
  const seenQuestionIds = new Set();
  const questionRecords = [];

  for (const { worldId, challenges, languages, sourceFile } of WORLD_SOURCES) {
    const availLangs = new Set(languages.filter(l => l.available).map(l => l.id));

    for (const [countryId, langMap] of Object.entries(challenges)) {
      if (!VALID_COUNTRY_IDS.has(countryId)) {
        allErrors.push({ loc: `[${sourceFile}] ${countryId}`, rule: 'unknown-parent-country',
          msg: `"${countryId}" not in COUNTRIES list` });
        continue;
      }
      for (const [languageId, questions] of Object.entries(langMap)) {
        if (!availLangs.has(languageId)) {
          allWarnings.push({ loc: `[${sourceFile}] ${countryId}/${languageId}`, rule: 'unknown-parent-language',
            msg: `"${languageId}" is not an available language for ${worldId}` });
        }
        if (!Array.isArray(questions) || questions.length === 0) continue;

        // Update counts
        counts[worldId] ??= {};
        counts[worldId][countryId] ??= {};
        counts[worldId][countryId][languageId] ??= {};

        for (const q of questions) {
          const loc = `[${sourceFile}] ${countryId}/${languageId} id=${q.id ?? '(no id)'}`;
          seenQuestionIds.add(q.id);
          const assignment = assignmentMap.get(q.id);
          const ctx = { worldId, countryId, languageId, sourceFile, allIds, assignment, factLookups };
          const { errors, warnings } = validateQuestion(q, ctx);
          allErrors.push(...errors);
          allWarnings.push(...warnings);
          questionRecords.push({
            q,
            loc,
            worldId,
            countryId,
            languageId,
            metadata: mergedMetadata(q, assignment),
          });

          const qType = q.questionType || 'fill-blank';
          counts[worldId][countryId][languageId][qType] =
            (counts[worldId][countryId][languageId][qType] || 0) + 1;
        }
      }
    }
  }

  for (const assignment of QUESTION_ASSIGNMENTS) {
    if (assignment?.questionId && !seenQuestionIds.has(assignment.questionId)) {
      allErrors.push({ loc: `[question_assignments.js] ${assignment.questionId}`, rule: 'unknown-assignment-questionId',
        msg: `No question exists with questionId "${assignment.questionId}"` });
    }
  }

  analyzeQuestionSet(questionRecords, allErrors, allWarnings, factLookups);

  for (const issue of validateCountryFacts(COUNTRY_FACTS)) {
    allErrors.push({
      loc: `[country_facts.js] ${issue.factId}`,
      rule: `country-fact:${issue.rule}`,
      msg: issue.msg,
    });
  }

  const finalMissions = listFinalMissions();
  const finalMissionKeys = new Set(finalMissions.map(m => `${m.worldId}_${m.countryId}_${m.languageId}`));
  for (const mission of finalMissions) {
    const { errors, warnings } = validateFinalMission(mission);
    allErrors.push(...errors);
    allWarnings.push(...warnings);
  }
  for (const { worldId, challenges } of WORLD_SOURCES) {
    for (const [countryId, langMap] of Object.entries(challenges)) {
      for (const [languageId, questions] of Object.entries(langMap)) {
        if (Array.isArray(questions) && questions.length > 0 && !finalMissionKeys.has(`${worldId}_${countryId}_${languageId}`)) {
          allWarnings.push({ loc: `[${worldId}] ${countryId}/${languageId}`, rule: 'content-world-language-no-final-mission',
            msg: 'Content path has no final mission yet' });
        }
      }
    }
  }

  const reservedCheck = validateProgressPayload(packProgress({}, { version: 1, resume: {}, review: {}, finalMissions: {} }));
  allErrors.push(...reservedCheck.errors);
  allWarnings.push(...reservedCheck.warnings);

  return { errors: allErrors, warnings: allWarnings, counts };
}

// ---------------------------------------------------------------------------
// Output helpers
// ---------------------------------------------------------------------------
function printIssues(label, issues, color) {
  if (issues.length === 0) return;
  console.log(`\n${color}${label} (${issues.length})${RESET}`);
  for (const issue of issues) {
    console.log(`  ${issue.rule}\n    ${issue.loc}\n    ${issue.msg}`);
  }
}

function printCounts(counts) {
  console.log('\n📊 QUESTION COUNTS BY WORLD × COUNTRY × LANGUAGE × TYPE\n');
  const totals = {};
  for (const [worldId, countries] of Object.entries(counts)) {
    let worldTotal = 0;
    console.log(`  [${worldId.toUpperCase()}]`);
    for (const [countryId, langs] of Object.entries(countries)) {
      for (const [langId, types] of Object.entries(langs)) {
        const typeStr = Object.entries(types).map(([t, n]) => `${t}:${n}`).join(' ');
        const total = Object.values(types).reduce((a, b) => a + b, 0);
        console.log(`    ${countryId}/${langId}  ${total}q  [${typeStr}]`);
        worldTotal += total;
      }
    }
    totals[worldId] = worldTotal;
    console.log(`    ── total: ${worldTotal}\n`);
  }
  console.log(`  TOTALS: ${Object.entries(totals).map(([w, n]) => `${w}=${n}`).join('  ')}`);
  const grand = Object.values(totals).reduce((a, b) => a + b, 0);
  console.log(`  GRAND TOTAL: ${grand} questions`);
}

const RED   = '\x1b[31m';
const YELLOW= '\x1b[33m';
const GREEN = '\x1b[32m';
const BOLD  = '\x1b[1m';
const RESET = '\x1b[0m';

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------
const isMain = process.argv[1] === fileURLToPath(import.meta.url);

if (isMain) {
  console.log(`${BOLD}🔍 Code Quest — Question Validator${RESET}`);
  const { errors, warnings, counts } = runValidation();
  printCounts(counts);
  printIssues('⚠️  WARNINGS', warnings, YELLOW);
  printIssues('❌ ERRORS',   errors,   RED);

  if (errors.length === 0) {
    console.log(`\n${GREEN}${BOLD}✅ All structural checks passed.${RESET} (${warnings.length} warning(s))\n`);
    process.exit(0);
  } else {
    console.log(`\n${RED}${BOLD}Build blocked: ${errors.length} error(s).${RESET}\n`);
    process.exit(1);
  }
}
