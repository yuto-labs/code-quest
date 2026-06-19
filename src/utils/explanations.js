import { COUNTRY_FACTS_BY_ID } from '../data/country_facts';
import { QUESTION_ASSIGNMENTS } from '../data/question_assignments';

const assignmentByQuestionId = new Map(
  QUESTION_ASSIGNMENTS.map(record => [record.questionId, record]),
);

// Optional detailed explanation contract for all current and future question types:
// {
//   correctAnswer, completedCode, executionSteps, commonMistakes,
//   programmingExplanation, countryNote,
//   debugExplanation: { cause, fix, why, impact, correctedCode },
//   sourceRefs
// }
// Legacy questions can keep a simple `explanation`; the normalizer renders only
// the sections that exist and never fabricates missing details.

function asText(value) {
  if (value === undefined || value === null) return '';
  if (Array.isArray(value)) return value.filter(Boolean).join('\n');
  return String(value);
}

function validHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

function domainOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

export function normalizeSourceRef(ref) {
  if (typeof ref === 'string') {
    if (!validHttpUrl(ref)) return null;
    const domain = domainOf(ref);
    return { title: domain || ref, organization: domain, url: ref };
  }
  if (!ref || typeof ref !== 'object' || Array.isArray(ref)) return null;
  const url = ref.url || ref.href;
  if (!validHttpUrl(url)) return null;
  const domain = domainOf(url);
  return {
    title: ref.title || ref.name || domain || url,
    organization: ref.organization || ref.org || ref.publisher || domain,
    url,
  };
}

function uniqueSources(refs = []) {
  const seen = new Set();
  const sources = [];
  for (const ref of refs) {
    const source = normalizeSourceRef(ref);
    if (!source || seen.has(source.url)) continue;
    seen.add(source.url);
    sources.push(source);
  }
  return sources;
}

function factsForQuestion(q) {
  const assignment = assignmentByQuestionId.get(q?.id);
  const factIds = Array.isArray(q?.factIds)
    ? q.factIds
    : Array.isArray(assignment?.factIds)
      ? assignment.factIds
      : [];
  return factIds.map(factId => COUNTRY_FACTS_BY_ID[factId]).filter(Boolean);
}

function completedCodeFor(q, qType, correctAnswer) {
  if (q?.completedCode) return asText(q.completedCode);
  if (!q?.code) return '';
  if (qType === 'fill-blank') {
    return q.code.replaceAll('___BLANK___', correctAnswer || '');
  }
  if (qType === 'multiple-blanks' && Array.isArray(q.blanks)) {
    return q.code.replace(/___BLANK_(\d+)___/g, (_, index) => q.blanks[Number(index)] ?? '');
  }
  return '';
}

function correctOutputFor(q, qType, correctAnswer) {
  if (q?.correctOutput) return asText(q.correctOutput);
  if (q?.output) return asText(q.output);
  if (qType === 'output-predict' || qType === 'multiple-choice' || qType === 'implementation-selection') {
    return correctAnswer || '';
  }
  return '';
}

function stepsText(q, qType) {
  if (q?.executionSteps) return asText(q.executionSteps);
  if (qType === 'code-ordering' && Array.isArray(q?.answer) && Array.isArray(q?.blocks)) {
    return q.answer.map((blockIndex, index) => `${index + 1}. ${q.blocks[blockIndex] ?? `block ${blockIndex + 1}`}`).join('\n');
  }
  return '';
}

function debugDetails(q, currentStep) {
  const explicit = q?.debugExplanation || {};
  const steps = Array.isArray(q?.steps) ? q.steps : [];
  return {
    originalCode: q?.code || '',
    cause: explicit.cause || steps[0]?.answer || (currentStep?.stepNum === 1 ? currentStep?.answer : ''),
    fix: explicit.fix || steps[1]?.answer || (currentStep?.stepNum === 2 ? currentStep?.answer : ''),
    why: explicit.why || steps[2]?.answer || explicit.reason || '',
    impact: explicit.impact || steps[2]?.explanation || '',
    correctedCode: explicit.correctedCode || q?.correctedCode || '',
  };
}

function countryNoteText(q, facts) {
  const labels = facts
    .filter(fact => fact.factStatus === 'traditional' || fact.factStatus === 'disputed')
    .map(fact => `[${fact.factStatus}] ${fact.statement || fact.detail}`)
    .filter(Boolean);
  const notes = [
    q?.countryNote,
    q?.factNote,
    q?.detail,
    ...labels,
  ].filter(Boolean);
  return notes.join('\n');
}

export function normalizeExplanation({
  q,
  qType,
  correctAnswer,
  currentStep = null,
  userAnswer = '',
  fallbackExplanation = '',
} = {}) {
  const facts = factsForQuestion(q);
  const isDebug = qType === 'debug-step';
  const finalAnswer = asText(correctAnswer ?? q?.correctAnswer ?? q?.answer ?? q?.blank);
  const programmingExplanation = asText(
    currentStep?.programmingExplanation ||
    q?.programmingExplanation ||
    currentStep?.explanation ||
    q?.explanation ||
    fallbackExplanation,
  );
  const debugExplanation = isDebug ? debugDetails(q, currentStep) : null;
  const countryNote = countryNoteText(q, facts);
  const sources = uniqueSources([
    ...(Array.isArray(q?.sourceRefs) ? q.sourceRefs : []),
    ...facts.flatMap(fact => Array.isArray(fact.sourceRefs) ? fact.sourceRefs : []),
  ]);

  return {
    correctAnswer: finalAnswer,
    userAnswer: asText(userAnswer),
    completedCode: isDebug ? '' : completedCodeFor(q, qType, finalAnswer),
    correctOutput: isDebug ? '' : correctOutputFor(q, qType, finalAnswer),
    executionSteps: isDebug ? '' : stepsText(q, qType),
    commonMistakes: asText(currentStep?.commonMistakes || q?.commonMistakes),
    programmingExplanation,
    countryNote,
    debugExplanation,
    sourceRefs: sources,
  };
}
