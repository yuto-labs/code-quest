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
  validateQuestion,
} from './validate-questions.mjs';
import { validateCountryFacts } from '../src/data/country_facts.js';

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
    factIds: ['jp_sakura_traditional'],
    entityKeys: ['cherry blossom'],
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
