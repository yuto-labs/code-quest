import { buildProgressKey } from './progress.js';

export const MEDAL_TYPES = ['clear', 'perfect', 'mastery'];

export function stageMedalKey(worldId, countryId, languageId) {
  return buildProgressKey(worldId, countryId, languageId);
}

function cleanStageMedal(value = {}) {
  return {
    clear: Boolean(value.clear),
    perfect: Boolean(value.perfect),
    mastery: Boolean(value.mastery),
    masteredQuestionIds: Array.isArray(value.masteredQuestionIds)
      ? [...new Set(value.masteredQuestionIds.filter(Boolean))].sort()
      : [],
    updatedAt: value.updatedAt || '',
  };
}

export function sanitizeMedals(value) {
  const input = value && typeof value === 'object' && !Array.isArray(value) ? value : {};
  const stageMedals = {};
  const rawStageMedals = input.stageMedals && typeof input.stageMedals === 'object' ? input.stageMedals : {};
  for (const [key, item] of Object.entries(rawStageMedals)) {
    stageMedals[key] = cleanStageMedal(item);
  }
  return { stageMedals };
}

export function mergeMedals(localValue, cloudValue) {
  const local = sanitizeMedals(localValue);
  const cloud = sanitizeMedals(cloudValue);
  const stageMedals = {};
  const keys = new Set([...Object.keys(local.stageMedals), ...Object.keys(cloud.stageMedals)]);
  for (const key of keys) {
    const a = local.stageMedals[key] || {};
    const b = cloud.stageMedals[key] || {};
    stageMedals[key] = {
      clear: Boolean(a.clear || b.clear),
      perfect: Boolean(a.perfect || b.perfect),
      mastery: Boolean(a.mastery || b.mastery),
      masteredQuestionIds: [...new Set([...(a.masteredQuestionIds || []), ...(b.masteredQuestionIds || [])])].sort(),
      updatedAt: latestTime(a.updatedAt, b.updatedAt),
    };
  }
  return { stageMedals };
}

function latestTime(a, b) {
  if (!a) return b || '';
  if (!b) return a || '';
  return new Date(a).getTime() >= new Date(b).getTime() ? a : b;
}

export function migrateClearMedals(meta, progress = {}) {
  const medals = sanitizeMedals(meta?.medals);
  let changed = false;
  const now = new Date().toISOString();
  for (const [key, cleared] of Object.entries(progress || {})) {
    if (!cleared || key === '__cq_meta') continue;
    const current = medals.stageMedals[key] || cleanStageMedal();
    if (!current.clear) {
      medals.stageMedals[key] = { ...current, clear: true, updatedAt: now };
      changed = true;
    }
  }
  return changed ? { ...meta, medals } : meta;
}

export function awardStageClear(meta, worldId, countryId, languageId, { perfect = false } = {}) {
  const medals = sanitizeMedals(meta?.medals);
  const key = stageMedalKey(worldId, countryId, languageId);
  const current = medals.stageMedals[key] || cleanStageMedal();
  medals.stageMedals[key] = {
    ...current,
    clear: true,
    perfect: Boolean(current.perfect || perfect),
    updatedAt: new Date().toISOString(),
  };
  return { ...meta, medals };
}

export function recordQuestionMastery(meta, worldId, countryId, languageId, questionId, allQuestionIds = []) {
  if (!questionId) return { meta, newlyMastered: false, questionNewlyMastered: false };
  const medals = sanitizeMedals(meta?.medals);
  const key = stageMedalKey(worldId, countryId, languageId);
  const current = medals.stageMedals[key] || cleanStageMedal();
  if (!current.clear) return { meta, newlyMastered: false, questionNewlyMastered: false };
  const alreadyHadQuestion = (current.masteredQuestionIds || []).includes(questionId);
  const masteredQuestionIds = [...new Set([...(current.masteredQuestionIds || []), questionId])].sort();
  const eligible = allQuestionIds.filter(Boolean);
  const mastery = eligible.length > 0 && eligible.every(id => masteredQuestionIds.includes(id));
  const newlyMastered = mastery && !current.mastery;
  medals.stageMedals[key] = {
    ...current,
    masteredQuestionIds,
    mastery,
    updatedAt: new Date().toISOString(),
  };
  // questionNewlyMastered: this specific question was just added to the
  // mastered set on this call -- the "+1 progress" signal, distinct from
  // newlyMastered which only fires once the whole stage is fully mastered.
  return { meta: { ...meta, medals }, newlyMastered, questionNewlyMastered: !alreadyHadQuestion };
}

export function getStageMedal(meta, worldId, countryId, languageId, progress = {}) {
  const key = stageMedalKey(worldId, countryId, languageId);
  const saved = sanitizeMedals(meta?.medals).stageMedals[key] || cleanStageMedal();
  return {
    ...saved,
    clear: Boolean(saved.clear || progress?.[key]),
  };
}

export function getMedalSummary(meta, progress = {}) {
  const medals = sanitizeMedals(meta?.medals);
  const mergedKeys = new Set([...Object.keys(progress || {}).filter(key => progress[key]), ...Object.keys(medals.stageMedals)]);
  let earned = 0;
  let possible = 0;
  let mastered = 0;
  for (const key of mergedKeys) {
    if (key === '__cq_meta') continue;
    const item = medals.stageMedals[key] || {};
    possible += 3;
    if (progress[key] || item.clear) earned += 1;
    if (item.perfect) earned += 1;
    if (item.mastery) {
      earned += 1;
      mastered += 1;
    }
  }
  return { earned, possible, masteredStages: mastered, stageCount: mergedKeys.size };
}
