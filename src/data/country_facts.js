export const FACT_STATUS = Object.freeze({
  VERIFIED: 'verified',
  TRADITIONAL: 'traditional',
  DISPUTED: 'disputed',
  AVOID: 'avoid',
});

export const COUNTRY_FACTS = [
  {
    factId: 'jp_sakura_traditional',
    countryId: 'JP',
    category: 'culture',
    entityKeys: ['sakura'],
    aliases: ['桜', 'sakura', 'cherry blossom'],
    statement: 'Sakura is commonly associated with springtime cultural imagery in Japan.',
    detail: 'Traditional or cultural facts should be phrased as associations, not universal claims.',
    factStatus: FACT_STATUS.TRADITIONAL,
    sourceRefs: [],
    allowedWorlds: ['decode', 'execute', 'debug'],
    allowedLanguageIds: ['python', 'javascript'],
    relatedFactIds: [],
  },
  {
    factId: 'jp_broad_national_stereotype_avoid',
    countryId: 'JP',
    category: 'safety',
    entityKeys: ['stereotype:national'],
    aliases: ['national stereotype'],
    statement: '',
    detail: 'Do not generate questions from broad claims about people by nationality.',
    factStatus: FACT_STATUS.AVOID,
    sourceRefs: [],
    allowedWorlds: [],
    allowedLanguageIds: [],
    relatedFactIds: [],
  },
];

export const COUNTRY_FACTS_BY_ID = Object.freeze(
  Object.fromEntries(COUNTRY_FACTS.map(fact => [fact.factId, fact]))
);

export function getCountryFacts({ countryId, worldId, languageId, includeAvoid = false } = {}) {
  return COUNTRY_FACTS.filter(fact => {
    if (!includeAvoid && fact.factStatus === FACT_STATUS.AVOID) return false;
    if (countryId && fact.countryId !== countryId) return false;
    if (worldId && fact.allowedWorlds.length > 0 && !fact.allowedWorlds.includes(worldId)) return false;
    if (languageId && fact.allowedLanguageIds.length > 0 && !fact.allowedLanguageIds.includes(languageId)) return false;
    return true;
  });
}

export function validateCountryFacts(facts = COUNTRY_FACTS) {
  const issues = [];
  const ids = new Set();
  const validStatuses = new Set(Object.values(FACT_STATUS));

  for (const fact of facts) {
    const factId = fact?.factId || '(missing factId)';
    if (!fact?.factId) {
      issues.push({ factId, rule: 'missing-factId', msg: 'Country fact is missing factId' });
    } else if (ids.has(fact.factId)) {
      issues.push({ factId, rule: 'duplicate-factId', msg: `Duplicate factId "${fact.factId}"` });
    } else {
      ids.add(fact.factId);
    }

    for (const key of ['countryId', 'category', 'statement', 'detail', 'factStatus']) {
      if (key === 'statement' && fact?.factStatus === FACT_STATUS.AVOID) continue;
      if (!fact?.[key]) {
        issues.push({ factId, rule: `missing-${key}`, msg: `Country fact is missing ${key}` });
      }
    }

    for (const key of ['entityKeys', 'aliases', 'sourceRefs', 'allowedWorlds', 'allowedLanguageIds', 'relatedFactIds']) {
      if (!Array.isArray(fact?.[key])) {
        issues.push({ factId, rule: `${key}-not-array`, msg: `${key} must be an array` });
      }
    }

    if (!validStatuses.has(fact?.factStatus)) {
      issues.push({ factId, rule: 'invalid-factStatus', msg: `Invalid factStatus "${fact?.factStatus}"` });
    }

    if (fact?.factStatus === FACT_STATUS.VERIFIED && (!Array.isArray(fact.sourceRefs) || fact.sourceRefs.length === 0)) {
      issues.push({ factId, rule: 'verified-missing-sourceRefs', msg: 'verified facts must include sourceRefs' });
    }

    if (fact?.factStatus === FACT_STATUS.AVOID) {
      if ((fact.allowedWorlds?.length ?? 0) > 0 || (fact.allowedLanguageIds?.length ?? 0) > 0) {
        issues.push({ factId, rule: 'avoid-is-usable', msg: 'avoid facts must not be allowed for question generation' });
      }
    }
  }

  return issues;
}
