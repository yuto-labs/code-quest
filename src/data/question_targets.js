export const DEFAULT_QUESTION_COUNT_TARGETS = Object.freeze({
  regular: Object.freeze({
    decode: 5,
    execute: 4,
    debug: 3,
  }),
  final: Object.freeze({
    decode: 3,
    execute: 2,
    debug: 1,
  }),
});

export const COUNTRY_QUESTION_COUNT_OVERRIDES = Object.freeze({
  JP: Object.freeze({
    regular: Object.freeze({ decode: 10, execute: 7, debug: 5 }),
    final: Object.freeze({ decode: 3, execute: 3, debug: 3 }),
  }),
  US: Object.freeze({
    regular: Object.freeze({ decode: 10, execute: 7, debug: 5 }),
    final: Object.freeze({ decode: 3, execute: 3, debug: 3 }),
  }),
});

function mergeTargets(base, override) {
  return Object.freeze({
    regular: Object.freeze({ ...base.regular, ...(override?.regular || {}) }),
    final: Object.freeze({ ...base.final, ...(override?.final || {}) }),
  });
}

export function getQuestionCountTargets(countryId, languageId) {
  const countryOverride = COUNTRY_QUESTION_COUNT_OVERRIDES[countryId];
  const languageOverride = countryOverride?.languages?.[languageId];
  return mergeTargets(mergeTargets(DEFAULT_QUESTION_COUNT_TARGETS, countryOverride), languageOverride);
}

export function getQuestionCountTarget({ countryId, languageId, worldId, kind = 'regular' }) {
  return getQuestionCountTargets(countryId, languageId)[kind]?.[worldId] || 0;
}

export const QUESTION_COUNT_TARGETS = DEFAULT_QUESTION_COUNT_TARGETS;
export const FINAL_CHILD_COUNT = null;
