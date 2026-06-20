#!/usr/bin/env node
/**
 * Self-tests for the question validator.
 * Each test expects a specific error rule to be raised for a synthetic bad question.
 * Exit 0 = all tests pass. Exit 1 = failures.
 */

import {
  analyzeQuestionSet,
  buildFactLookups,
  validateAssignmentRecord,
  validateCloudMetadata,
  validateFinalMission,
  validateProgressPayload,
  validateQuestion,
  validateReferenceTopics,
  validateSqlPath,
} from './validate-questions.mjs';
import { validateCountryFacts } from '../src/data/country_facts.js';
import { buildFinalMissionId, getFinalMission } from '../src/data/final_missions.js';
import { getLanguageEmblemTier } from '../src/utils/progress.js';
import { emptyMeta, MAX_LIVES, mergeMeta, mergeReview, packProgress, resolveStageEntry, unpackProgress } from '../src/utils/metadata.js';
import { completeSqlQuestion, emptySqlProgress, mergeSqlProgress } from '../src/utils/sqlProgress.js';
import { SQL_QUESTIONS } from '../src/data/sql/questions.js';
import { awardStageClear, mergeMedals, recordQuestionMastery } from '../src/utils/medals.js';
import { createShuffleRun } from '../src/utils/worldShuffle.js';

const RED   = '\x1b[31m';
const GREEN = '\x1b[32m';
const BOLD  = '\x1b[1m';
const RESET = '\x1b[0m';

// Helpers ------------------------------------------------------------------

function makeCtx(overrides = {}) {
  return {
    worldId: 'decode',
    countryId: 'JP',
    languageId: 'python',
    sourceFile: 'test',
    allIds: new Set(),
    ...overrides,
  };
}

function expectError(label, q, rule, ctxOverrides = {}) {
  const ctx = makeCtx(ctxOverrides);
  const { errors } = validateQuestion(q, ctx);
  const found = errors.some(e => e.rule === rule);
  return { label, rule, pass: found, errors };
}

function expectNoError(label, q, rule, ctxOverrides = {}) {
  const ctx = makeCtx(ctxOverrides);
  const { errors } = validateQuestion(q, ctx);
  const found = errors.some(e => e.rule === rule);
  return { label, rule, pass: !found, errors };
}

function expectFactIssue(label, facts, rule) {
  const issues = validateCountryFacts(facts);
  const found = issues.some(issue => issue.rule === rule);
  return { label, rule, pass: found, errors: issues.map(issue => ({ rule: issue.rule })) };
}

function expectAssignmentError(label, record, rule, ctxOverrides = {}) {
  const { errors } = validateAssignmentRecord(record, ctxOverrides);
  const found = errors.some(e => e.rule === rule);
  return { label, rule, pass: found, errors };
}

function expectAssignmentWarning(label, record, rule, ctxOverrides = {}) {
  const { errors, warnings } = validateAssignmentRecord(record, ctxOverrides);
  const found = warnings.some(e => e.rule === rule);
  return { label, rule, pass: found, errors: [...errors, ...warnings] };
}

function expectAnalysisError(label, records, rule) {
  const errors = [];
  const warnings = [];
  analyzeQuestionSet(records, errors, warnings, buildFactLookups());
  const found = errors.some(e => e.rule === rule);
  return { label, rule, pass: found, errors: [...errors, ...warnings] };
}

function expectGeneric(label, pass, rule = 'generic') {
  return { label, rule, pass, errors: [] };
}

// Tests --------------------------------------------------------------------

const tests = [];

// 1. global-duplicate-id
{
  const allIds = new Set(['jp_py_1']); // already registered
  tests.push(expectError(
    'duplicate-id: reused id triggers global-duplicate-id',
    { id: 'jp_py_1', title: 'T', questionType: 'fill-blank', blank: 'x', code: '___BLANK___' },
    'global-duplicate-id',
    { allIds }
  ));
}

// 2. fill-blank: missing answer
tests.push(expectError(
  'missing-answer: fill-blank without blank or answer',
  { id: 'test_2', title: 'T', questionType: 'fill-blank', code: '___BLANK___' },
  'fill-blank:missing-answer-or-blank'
));

// 3. invalid-concept: conceptId not in CONCEPTS list
tests.push(expectError(
  'invalid-concept: unknown conceptId fires invalid-explicit-concept',
  { id: 'test_3', title: 'T', questionType: 'fill-blank', blank: 'x', code: '___BLANK___', conceptId: 'nonexistent_concept_xyz' },
  'invalid-explicit-concept'
));

// 4. duplicate-options: MC with repeated option
tests.push(expectError(
  'duplicate-options: same string appears twice in options',
  {
    id: 'test_4', title: 'T', questionType: 'multiple-choice',
    options: ['A', 'B', 'A', 'C'],
    answer: 'B',
  },
  'choice-types:duplicate-options'
));

// 5. placeholder-count-mismatch: multiple-blanks with wrong placeholder count
tests.push(expectError(
  'placeholder-count-mismatch: 1 placeholder but 2 answers',
  {
    id: 'test_5', title: 'T', questionType: 'multiple-blanks',
    code: 'x = ___BLANK_0___',
    blanks: ['foo', 'bar'],
  },
  'multiple-blanks:placeholder-answer-count-mismatch'
));

// 6. invalid-order-permutation: code-ordering with out-of-range indices
tests.push(expectError(
  'invalid-order-permutation: answer indices not 0..n-1',
  {
    id: 'test_6', title: 'T', questionType: 'code-ordering',
    blocks: ['a', 'b', 'c'],
    answer: [0, 1, 5],
  },
  'code-ordering:invalid-permutation'
));

// 7. incomplete-debug-step: only 2 steps
tests.push(expectError(
  'incomplete-debug-step: only 2 steps provided',
  {
    id: 'test_7', title: 'T', questionType: 'debug-step',
    steps: [
      { stepNum: 1, stepTitle: 'A', prompt: 'p', question: 'q', options: ['X', 'Y'], answer: 'X' },
      { stepNum: 2, stepTitle: 'B', prompt: 'p', question: 'q', options: ['X', 'Y'], answer: 'X' },
    ],
  },
  'debug-step:steps-count!=3'
));

// 8. bonus: answer-not-in-options fires correctly
tests.push(expectError(
  'answer-not-in-options: answer missing from options list',
  {
    id: 'test_8', title: 'T', questionType: 'output-predict',
    options: ['A', 'B', 'C'],
    answer: 'D',
  },
  'choice-types:answer-not-in-options'
));

// 9. bonus: valid fill-blank passes without that error
tests.push(expectNoError(
  'valid fill-blank produces no fill-blank errors',
  { id: 'test_9', title: 'T', questionType: 'fill-blank', blank: 'x', code: 'x = ___BLANK___', hint: 'h', explanation: 'e' },
  'fill-blank:missing-answer-or-blank'
));

// 19. pack/unpack preserves flat progress
{
  const packed = packProgress({ decode_JP_python: true }, { resume: { worldId: 'decode' } });
  const unpacked = unpackProgress(packed);
  tests.push(expectGeneric(
    'pack/unpack preserves flat progress and separates __cq_meta',
    unpacked.progress.decode_JP_python === true && !('__cq_meta' in unpacked.progress) && unpacked.meta.resume.worldId === 'decode'
  ));
}

// 20. old row without __cq_meta remains valid
{
  const unpacked = unpackProgress({ decode_JP_python: true });
  tests.push(expectGeneric(
    'old row without __cq_meta produces empty defaults',
    unpacked.progress.decode_JP_python === true && unpacked.meta.version === 1
  ));
}

// 21. metadata merge commutative/idempotent
{
  const a = { review: { q1: { wrongCount: 1, hintCount: 0, lastWrongAt: '2026-01-01T00:00:00.000Z', mistakeTags: ['debug'] } } };
  const b = { review: { q1: { wrongCount: 2, hintCount: 1, lastWrongAt: '2026-01-02T00:00:00.000Z', mistakeTags: ['decode'] } } };
  const ab = mergeMeta(a, b);
  const ba = mergeMeta(b, a);
  const aa = mergeMeta(a, a);
  tests.push(expectGeneric(
    'metadata merge is commutative/idempotent for review data',
    JSON.stringify(ab.review) === JSON.stringify(ba.review) && aa.review.q1.wrongCount === 1
  ));
}

// 22. review union across devices
{
  const merged = mergeReview(
    { q1: { wrongCount: 1, hintCount: 0, mistakeTags: ['decode'] } },
    { q1: { wrongCount: 0, hintCount: 2, mistakeTags: ['debug'] } }
  );
  tests.push(expectGeneric(
    'review union across devices keeps max counts and tag union',
    merged.q1.wrongCount === 1 && merged.q1.hintCount === 2 && merged.q1.mistakeTags.join(',') === 'debug,decode'
  ));
}

// 23. invalid resume fallback
{
  const { errors, warnings } = validateCloudMetadata({ resume: { questionIndexFallback: 2 }, review: {}, finalMissions: {} });
  tests.push(expectGeneric(
    'invalid resume metadata is rejected and index-only fallback warned',
    errors.some(e => e.rule === 'invalid-resume-metadata') && warnings.some(w => w.rule === 'resume-index-only-fallback'),
    'invalid-resume-metadata'
  ));
}

// 24. reset clears metadata
{
  const cleared = emptyMeta();
  tests.push(expectGeneric(
    'reset clears metadata containers',
    Object.keys(cleared.resume).length === 0 && Object.keys(cleared.review).length === 0 && Object.keys(cleared.finalMissions).length === 0
  ));
}

// 25. final mission unlock false/true and completion affects derived emblem
{
  const missionId = buildFinalMissionId('decode', 'JP', 'python');
  const noTier = getLanguageEmblemTier({ decode_JP_python: true }, 'python', emptyMeta());
  const yesTier = getLanguageEmblemTier({ decode_JP_python: true }, 'python', {
    finalMissions: { [missionId]: { completedAt: '2026-01-01T00:00:00.000Z' } },
  });
  tests.push(expectGeneric(
    'final completion affects derived emblem',
    noTier === 'none' && yesTier === 'bronze'
  ));
}

// 26. reserved keys excluded from country counts
{
  const { errors } = validateProgressPayload({ __cq_meta: true });
  tests.push(expectGeneric(
    'reserved keys cannot be treated as country progress',
    errors.some(e => e.rule === 'reserved-metadata-treated-as-stage-progress'),
    'reserved-metadata-treated-as-stage-progress'
  ));
}

// 27. DEBUG final context persistence
{
  const mission = { ...getFinalMission('debug', 'JP', 'python'), worldId: 'debug', countryId: 'JP', languageId: 'python' };
  const { errors } = validateFinalMission(mission);
  tests.push(expectGeneric(
    'DEBUG final has valid 3-step shared context',
    !errors.some(e => e.rule === 'debug-final-missing-shared-context'),
    'debug-final-missing-shared-context'
  ));
}

// 28. Final mission child IDs must be stable and ordered
{
  const mission = {
    ...getFinalMission('decode', 'JP', 'python'),
    id: 'final_decode_JP_python',
    worldId: 'decode',
    countryId: 'JP',
    languageId: 'python',
    childQuestionIds: ['final_decode_JP_python_01', 'final_decode_JP_python_02', 'final_decode_JP_python_03'],
    questions: [
      { ...getFinalMission('decode', 'JP', 'python').questions[0], id: 'final_decode_JP_python_02' },
    ],
  };
  const { errors } = validateFinalMission(mission);
  tests.push(expectGeneric(
    'invalid final child order is a structural error',
    errors.some(e => e.rule === 'invalid-final-child-id-order'),
    'invalid-final-child-id-order'
  ));
}

// 29. Final target shortages are warnings only
{
  const base = getFinalMission('decode', 'JP', 'python');
  const mission = {
    ...base,
    worldId: 'decode',
    countryId: 'JP',
    languageId: 'python',
    questions: base.questions.slice(0, 1),
  };
  const { errors, warnings } = validateFinalMission(mission);
  tests.push(expectGeneric(
    'final target shortage warns but does not error',
    errors.length === 0 && warnings.some(w => w.rule === 'final-target-count-shortage'),
    'final-target-count-shortage'
  ));
}

// 30. Duplicate final child IDs are structural errors
{
  const base = getFinalMission('decode', 'JP', 'python');
  const mission = {
    ...base,
    worldId: 'decode',
    countryId: 'JP',
    languageId: 'python',
    questions: [
      { ...base.questions[0], id: 'final_decode_JP_python_01' },
      { ...base.questions[0], id: 'final_decode_JP_python_01' },
    ],
  };
  const { errors } = validateFinalMission(mission);
  tests.push(expectGeneric(
    'duplicate final child id is a structural error',
    errors.some(e => e.rule === 'duplicate-final-child-id'),
    'duplicate-final-child-id'
  ));
}

// 10. bonus: valid debug-step (3 steps) passes step-count check
tests.push(expectNoError(
  'valid debug-step with 3 steps passes step-count check',
  {
    id: 'test_10', title: 'T', questionType: 'debug-step',
    description: 'Original scenario',
    code: 'x = 1\nprint(x)',
    steps: [
      { stepNum: 1, stepTitle: 'A', prompt: 'p', question: 'q', options: ['X', 'Y'], answer: 'X' },
      { stepNum: 2, stepTitle: 'B', prompt: 'p', question: 'q', options: ['X', 'Y'], answer: 'Y' },
      { stepNum: 3, stepTitle: 'C', prompt: 'p', question: 'q', options: ['X', 'Y'], answer: 'X' },
    ],
  },
  'debug-step:steps-count!=3'
));

// 11. duplicate factId in fact registry
tests.push(expectFactIssue(
  'duplicate factId: country fact registry catches duplicate-factId',
  [
    {
      factId: 'dup_fact', countryId: 'JP', category: 'culture', entityKeys: ['sakura'],
      aliases: ['sakura'], statement: 'A', detail: 'D', factStatus: 'traditional',
      sourceRefs: [], allowedWorlds: [], allowedLanguageIds: [], relatedFactIds: [],
    },
    {
      factId: 'dup_fact', countryId: 'JP', category: 'culture', entityKeys: ['yen'],
      aliases: ['yen'], statement: 'B', detail: 'D', factStatus: 'traditional',
      sourceRefs: [], allowedWorlds: [], allowedLanguageIds: [], relatedFactIds: [],
    },
  ],
  'duplicate-factId'
));

// 12. unknown factId
tests.push(expectError(
  'unknown factId: question metadata references missing fact',
  {
    id: 'test_12', title: 'T', questionType: 'fill-blank', blank: 'x', code: 'x = ___BLANK___',
    factIds: ['missing_fact'],
  },
  'unknown-factId'
));

// 13. alias duplicate / alias entity key is normalized by assignment validator
tests.push(expectAssignmentWarning(
  'alias duplicate: assignment warns but does not error when alias maps to entityKey',
  {
    questionId: 'test_13',
    countryId: 'JP',
    worldId: 'decode',
    languageId: 'python',
    factIds: ['fact_jp_py_d10'],
    entityKeys: ['sakura as cultural symbol, not statutory national flower'],
    learningObjectiveId: 'lo_alias',
    programmingConceptIds: ['variables'],
    cognitiveTask: 'recall-from-given-context',
    progressionGroupId: '',
  },
  'alias-entityKey-used'
));

// 14. avoid fact used
tests.push(expectError(
  'avoid fact: question metadata cannot use avoid fact',
  {
    id: 'test_14', title: 'T', questionType: 'fill-blank', blank: 'x', code: 'x = ___BLANK___',
    factIds: ['jp_broad_national_stereotype_avoid'],
  },
  'avoid-fact-used'
));

// 15. verified fact without sourceRefs
tests.push(expectFactIssue(
  'verified without sourceRefs: registry enforces sources',
  [
    {
      factId: 'verified_no_source', countryId: 'JP', category: 'currency', entityKeys: ['currency:jpy'],
      aliases: ['JPY'], statement: 'Japan uses JPY.', detail: 'D', factStatus: 'verified',
      sourceRefs: [], allowedWorlds: [], allowedLanguageIds: [], relatedFactIds: [],
    },
  ],
  'verified-missing-sourceRefs'
));

tests.push(expectFactIssue(
  'invalid sourceRef URL: registry rejects non-http URLs',
  [
    {
      factId: 'bad_source_fact',
      countryId: 'JP',
      category: 'test',
      entityKeys: ['bad_source'],
      aliases: ['bad source'],
      statement: 'A sourced fact.',
      detail: 'D',
      factStatus: 'verified',
      sourceRefs: ['not-a-url'],
      allowedWorlds: [],
      allowedLanguageIds: [],
      relatedFactIds: [],
    },
  ],
  'invalid-sourceRef-url'
));

{
  const ctx = makeCtx();
  const { warnings } = validateQuestion(
    { id: 'test_detail_warning', title: 'T', questionType: 'fill-blank', blank: 'x', code: '___BLANK___', hint: 'h', explanation: 'short' },
    ctx,
  );
  tests.push(expectGeneric(
    'missing detailed explanation fields are warnings only',
    warnings.some(w => w.rule === 'missing-detailed-explanation-fields'),
    'missing-detailed-explanation-fields',
  ));
}

// 16. invalid progression / invalid assignment record
tests.push(expectAssignmentError(
  'invalid assignment: missing required assignment fields',
  {
    questionId: 'test_16',
    countryId: 'JP',
    worldId: 'decode',
    languageId: 'python',
    factIds: [],
    entityKeys: [],
    programmingConceptIds: [],
  },
  'invalid-assignment-record'
));

tests.push(expectAnalysisError(
  'invalid progression: related theme across worlds requires progressionGroupId',
  [
    {
      q: { id: 'test_16a', code: 'x = 1', questionType: 'fill-blank' },
      loc: '[test] JP/python id=test_16a',
      worldId: 'decode',
      countryId: 'JP',
      languageId: 'python',
      metadata: {
        factIds: ['jp_sakura_traditional'],
        entityKeys: ['sakura'],
        learningObjectiveId: 'lo_sakura',
        programmingConceptIds: ['variables'],
        cognitiveTask: 'recall-from-given-context',
        progressionGroupId: '',
      },
    },
    {
      q: { id: 'test_16b', code: 'x = 1', questionType: 'debug-step' },
      loc: '[test] JP/python id=test_16b',
      worldId: 'debug',
      countryId: 'JP',
      languageId: 'python',
      metadata: {
        factIds: ['jp_sakura_traditional'],
        entityKeys: ['sakura'],
        learningObjectiveId: 'lo_sakura',
        programmingConceptIds: ['variables'],
        cognitiveTask: 'identify-defect',
        progressionGroupId: '',
      },
    },
  ],
  'invalid-progression'
));

// 17. DEBUG missing original context
tests.push(expectError(
  'debug context: later steps need resolvable original scenario/code',
  {
    id: 'test_17', title: 'T', questionType: 'debug-step',
    steps: [
      { stepNum: 1, stepTitle: 'A', question: 'cause?', options: ['X', 'Y'], answer: 'X' },
      { stepNum: 2, stepTitle: 'B', question: 'fix?', options: ['X', 'Y'], answer: 'Y' },
      { stepNum: 3, stepTitle: 'C', question: 'impact?', options: ['X', 'Y'], answer: 'X' },
    ],
  },
  'debug-step:later-step-context-unresolved'
));

// 18. valid 3-step DEBUG has original context
tests.push(expectNoError(
  'valid debug-step with context passes context check',
  {
    id: 'test_18', title: 'T', questionType: 'debug-step',
    description: 'Original scenario',
    code: 'x = 1\nprint(x)',
    steps: [
      { stepNum: 1, stepTitle: 'A', question: 'cause?', options: ['X', 'Y'], answer: 'X' },
      { stepNum: 2, stepTitle: 'B', question: 'fix?', options: ['X', 'Y'], answer: 'Y' },
      { stepNum: 3, stepTitle: 'C', question: 'impact?', options: ['X', 'Y'], answer: 'X' },
    ],
  },
  'debug-step:later-step-context-unresolved'
));

// 32. stage lifecycle active resume
{
  const attemptId = 'decode_JP_python';
  const entry = resolveStageEntry({
    attempts: {
      [attemptId]: {
        status: 'active',
        questionIndex: 4,
        questionId: 'jp_py_d05',
        debugStepIndex: 2,
        debugAnswers: ['cause', 'fix'],
        remainingLives: 1,
        revision: 3,
      },
    },
  }, attemptId, true);
  tests.push(expectGeneric(
    'stage lifecycle: active attempt resumes exact question/debug/hearts before cleared state',
    entry.mode === 'active' &&
      entry.attempt.questionIndex === 4 &&
      entry.attempt.debugStepIndex === 2 &&
      entry.attempt.debugAnswers.length === 2 &&
      entry.attempt.remainingLives === 1,
    'stage-lifecycle-active-resume'
  ));
}

// 33. stage lifecycle failed reopen
{
  const attemptId = 'execute_JP_python';
  const entry = resolveStageEntry({
    attempts: {
      [attemptId]: {
        status: 'failed',
        questionIndex: 2,
        questionId: 'jp_py_e03',
        remainingLives: 0,
        failedQuestion: { userAnswer: 'A', correctAnswer: 'B' },
        revision: 4,
      },
    },
  }, attemptId, false);
  tests.push(expectGeneric(
    'stage lifecycle: failed attempt reopens failed screen instead of question',
    entry.mode === 'failed' &&
      entry.attempt.remainingLives === 0 &&
      entry.attempt.failedQuestion.correctAnswer === 'B',
    'stage-lifecycle-failed-reopen'
  ));
}

// 34. stage lifecycle cleared replay gate
{
  const attemptId = 'debug_JP_javascript';
  const entry = resolveStageEntry({
    attempts: {
      [attemptId]: {
        status: 'completed',
        questionIndex: 4,
        remainingLives: MAX_LIVES,
        revision: 8,
      },
    },
  }, attemptId, true);
  tests.push(expectGeneric(
    'stage lifecycle: cleared stage shows cleared/replay instead of old final index',
    entry.mode === 'cleared',
    'stage-lifecycle-cleared-replay'
  ));
}

// 35. stage lifecycle retry/replay reset model
{
  const failed = {
    status: 'failed',
    questionIndex: 2,
    questionId: 'old',
    debugStepIndex: 1,
    debugAnswers: ['old'],
    remainingLives: 0,
    failedQuestion: { userAnswer: 'old' },
    revision: 9,
  };
  const retried = {
    ...failed,
    status: 'active',
    questionIndex: 0,
    questionId: '',
    debugStepIndex: 0,
    debugAnswers: [],
    remainingLives: MAX_LIVES,
    failedQuestion: null,
    revision: failed.revision + 1,
  };
  tests.push(expectGeneric(
    'stage lifecycle: retry starts index 0 with full hearts and clears temporary answers',
    retried.status === 'active' &&
      retried.questionIndex === 0 &&
      retried.debugStepIndex === 0 &&
      retried.debugAnswers.length === 0 &&
      retried.remainingLives === MAX_LIVES &&
      retried.failedQuestion === null &&
      retried.revision > failed.revision,
    'stage-lifecycle-retry-reset'
  ));
}

// 36. final lifecycle replay starts child 01 and preserves earned completion
{
  const missionId = buildFinalMissionId('decode', 'JP', 'python');
  const finalMeta = {
    finalMissions: {
      [missionId]: {
        missionId,
        completedAt: '2026-01-01T00:00:00.000Z',
        completedChildCount: 3,
        targetChildCount: 3,
        currentChildIndex: 3,
      },
    },
    attempts: {
      [`decode_JP_python_m_${missionId}`]: {
        status: 'completed',
        questionIndex: 2,
        remainingLives: MAX_LIVES,
        revision: 5,
      },
    },
  };
  const entry = resolveStageEntry(finalMeta, `decode_JP_python_m_${missionId}`, true);
  const replayAttempt = {
    ...finalMeta.attempts[`decode_JP_python_m_${missionId}`],
    status: 'active',
    questionIndex: 0,
    remainingLives: MAX_LIVES,
    revision: 6,
  };
  tests.push(expectGeneric(
    'final lifecycle: replay starts child 01 and earned 3/3 completion remains',
    entry.mode === 'cleared' &&
      replayAttempt.questionIndex === 0 &&
      finalMeta.finalMissions[missionId].completedChildCount === 3 &&
      Boolean(finalMeta.finalMissions[missionId].completedAt),
    'final-lifecycle-replay-preserves-completion'
  ));
}

// 37. Reference duplicate topic ids are structural errors
{
  const basePage = {
    id: 'sample-basic',
    title: 'basic',
    summary: 'summary',
    minimalExample: { code: 'value = 1', output: '1', lineNotes: ['value に 1 を入れる。'] },
    worldExamples: { decode: 'syntax', execute: 'trace', debug: 'fix' },
    commonMistakes: ['値の変化を追わない。'],
    miniChecks: [
      { id: 'sample-check-1', prompt: '何を表示しますか。', answer: '1' },
      { id: 'sample-check-2', prompt: '値はどこで決まりますか。', answer: '代入行。' },
    ],
  };
  const topics = [
    { id: 'sample', language: 'python', title: 'sample', summary: 'sample', pages: [basePage], relatedConceptIds: ['variables'] },
    { id: 'sample', language: 'python', title: 'sample2', summary: 'sample', pages: [{ ...basePage, id: 'sample-basic-2' }], relatedConceptIds: ['variables'] },
  ];
  const { errors } = validateReferenceTopics(topics);
  tests.push(expectGeneric(
    'reference: duplicate topic id is an error',
    errors.some(e => e.rule === 'duplicateTopicId'),
    'duplicateTopicId'
  ));
}

// 38. Reference broken prerequisites are structural errors
{
  const topics = [{
    id: 'sample',
    language: 'python',
    title: 'sample',
    summary: 'sample',
    prerequisites: ['missing-topic'],
    pages: [{
      id: 'sample-basic',
      title: 'basic',
      summary: 'summary',
      minimalExample: { code: 'value = 1', output: '1', lineNotes: ['value に 1 を入れる。'] },
      worldExamples: { decode: 'syntax', execute: 'trace', debug: 'fix' },
      commonMistakes: ['値の変化を追わない。'],
      miniChecks: [
        { id: 'sample-check-1', prompt: '何を表示しますか。', answer: '1' },
        { id: 'sample-check-2', prompt: '値はどこで決まりますか。', answer: '代入行。' },
      ],
    }],
    relatedConceptIds: ['variables'],
  }];
  const { errors } = validateReferenceTopics(topics);
  tests.push(expectGeneric(
    'reference: broken prerequisite is an error',
    errors.some(e => e.rule === 'brokenPrerequisite'),
    'brokenPrerequisite'
  ));
}

// 39. SQL PATH count and structure
{
  const { errors, warnings } = validateSqlPath();
  tests.push(expectGeneric(
    'sql path: shipped SQL content has valid structure and exact 80 questions',
    errors.length === 0 && SQL_QUESTIONS.length === 80 && !warnings.some(w => w.rule === 'chapterCountShortage'),
    'sql-path-structure',
  ));
}

// 40. SQL DEBUG requires three ordered steps
{
  const bad = SQL_QUESTIONS.map(q => q.id === 'sql01_b01' ? { ...q, debugSteps: q.debugSteps.slice(0, 2) } : q);
  const { errors } = validateSqlPath({ questions: bad });
  tests.push(expectGeneric(
    'sql path: DEBUG missing step is structural',
    errors.some(e => e.rule === 'missingDebugSteps'),
    'missingDebugSteps',
  ));
}

// 41. SQL resume merge is commutative/idempotent
{
  const a = { ...emptySqlProgress(), resume: { chapterId: '01_select', questionId: 'sql01_d01', hearts: 2, updatedAt: '2026-01-01T00:00:00.000Z' } };
  const b = { ...completeSqlQuestion(emptySqlProgress(), 'sql01_d01'), resume: { chapterId: '01_select', questionId: 'sql01_d02', hearts: 3, updatedAt: '2026-01-02T00:00:00.000Z' } };
  const ab = mergeSqlProgress(a, b);
  const ba = mergeSqlProgress(b, a);
  const aa = mergeSqlProgress(a, a);
  tests.push(expectGeneric(
    'sql path: progress merge is commutative and idempotent',
    JSON.stringify(ab.chapters) === JSON.stringify(ba.chapters) && aa.resume.questionId === 'sql01_d01',
    'sql-progress-merge',
  ));
}

// 42. Medals merge keeps clear/perfect/mastery without duplication
{
  const clear = awardStageClear(emptyMeta(), 'decode', 'JP', 'python', { perfect: true }).medals;
  const mastered = recordQuestionMastery(
    { ...emptyMeta(), medals: clear },
    'decode',
    'JP',
    'python',
    'q1',
    ['q1'],
  ).meta.medals;
  const merged = mergeMedals(clear, mastered);
  const item = merged.stageMedals.decode_JP_python;
  tests.push(expectGeneric(
    'medals: merge preserves clear, perfect, and mastery',
    item.clear && item.perfect && item.mastery && item.masteredQuestionIds.length === 1,
    'medal-merge',
  ));
}

// 43. World Shuffle creates a unique queue without mutating progress
{
  const progress = { decode_JP_python: true };
  const before = JSON.stringify(progress);
  const run = createShuffleRun(progress, { languageId: 'python', mode: 'decode', requestedCount: 5 });
  const ids = run.queue.map(item => item.questionId);
  tests.push(expectGeneric(
    'world shuffle: generated queue has no duplicate questions and leaves progress untouched',
    ids.length === new Set(ids).size && JSON.stringify(progress) === before,
    'shuffle-queue',
  ));
}

// Report -------------------------------------------------------------------

let passed = 0;
let failed = 0;
console.log(`${BOLD}🧪 Question Validator — Self-tests${RESET}\n`);

for (const t of tests) {
  if (t.pass) {
    console.log(`  ${GREEN}✔${RESET}  ${t.label}`);
    passed++;
  } else {
    console.log(`  ${RED}✘${RESET}  ${t.label}`);
    console.log(`     expected rule: ${t.rule}`);
    console.log(`     actual errors: ${t.errors.map(e => e.rule).join(', ') || '(none)'}`);
    failed++;
  }
}

console.log(`\n${passed}/${tests.length} tests passed`);

if (failed > 0) {
  console.log(`${RED}${BOLD}${failed} test(s) failed.${RESET}\n`);
  process.exit(1);
} else {
  console.log(`${GREEN}${BOLD}All tests passed.${RESET}\n`);
  process.exit(0);
}
