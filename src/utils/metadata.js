import { mergeSqlProgress } from './sqlProgress.js';

export const META_KEY = '__cq_meta';

export const MAX_LIVES = 3;

export const DEFAULT_META = Object.freeze({
  version: 1,
  resume: {},
  review: {},
  finalMissions: {},
  attempts: {},
  codePaths: {},
});

function isObj(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

export function emptyMeta() {
  return {
    version: 1,
    resume: {},
    review: {},
    finalMissions: {},
    attempts: {},
    codePaths: {},
  };
}

function sanitizeAttempt(a) {
  if (!isObj(a)) return null;
  return {
    worldId:          a.worldId     || '',
    countryId:        a.countryId   || '',
    languageId:       a.languageId  || '',
    missionId:        a.missionId   || null,
    questionIndex:    Number.isInteger(a.questionIndex) ? Math.max(0, a.questionIndex) : 0,
    questionId:       a.questionId || '',
    debugStepIndex:   Number.isInteger(a.debugStepIndex) ? Math.max(0, a.debugStepIndex) : 0,
    debugAnswers:     Array.isArray(a.debugAnswers) ? a.debugAnswers : [],
    remainingLives:   Number.isInteger(a.remainingLives)
                        ? Math.max(0, Math.min(a.remainingLives, MAX_LIVES))
                        : MAX_LIVES,
    maxLives:         Number.isInteger(a.maxLives) ? a.maxLives : MAX_LIVES,
    wrongQuestionIds: Array.isArray(a.wrongQuestionIds) ? a.wrongQuestionIds : [],
    failedQuestion:   isObj(a.failedQuestion) ? a.failedQuestion : null,
    startedAt:        a.startedAt   || '',
    updatedAt:        a.updatedAt   || '',
    status:           ['active', 'completed', 'failed'].includes(a.status) ? a.status : 'active',
    revision:         Number.isInteger(a.revision) ? Math.max(0, a.revision) : 0,
  };
}

export function resolveStageEntry(meta, attemptId, isCleared = false) {
  const attempt = sanitizeMeta(meta).attempts?.[attemptId] || null;
  if (attempt?.status === 'active') return { mode: 'active', attempt };
  if (attempt?.status === 'failed') return { mode: 'failed', attempt };
  if (isCleared) return { mode: 'cleared', attempt };
  return { mode: 'fresh', attempt: null };
}

function normalizeLegacyFinalMissionId(id) {
  return typeof id === 'string' && id.startsWith('final_') && id.includes('*')
    ? id.replaceAll('*', '_')
    : id;
}

function sanitizeFinalMissions(finalMissions) {
  if (!isObj(finalMissions)) return {};
  const clean = {};
  for (const [rawId, rawValue] of Object.entries(finalMissions)) {
    const value = isObj(rawValue) ? rawValue : {};
    const id = normalizeLegacyFinalMissionId(rawId);
    clean[id] = {
      ...value,
      missionId: value.missionId || id,
      completedChildCount: Number.isInteger(value.completedChildCount)
        ? Math.max(0, value.completedChildCount)
        : value.completedAt ? 3 : 0,
      targetChildCount: Number.isInteger(value.targetChildCount)
        ? Math.max(1, value.targetChildCount)
        : 3,
      currentChildIndex: Number.isInteger(value.currentChildIndex)
        ? Math.max(0, value.currentChildIndex)
        : 0,
      migratedFromMissionId: rawId !== id ? rawId : value.migratedFromMissionId,
    };
  }
  return clean;
}

export function sanitizeMeta(meta) {
  const input = isObj(meta) ? meta : {};

  const rawAttempts = isObj(input.attempts) ? input.attempts : {};
  const attempts = {};
  for (const [id, a] of Object.entries(rawAttempts)) {
    const s = sanitizeAttempt(a);
    if (s) attempts[id] = s;
  }

  return {
    version:       Number.isInteger(input.version) ? input.version : 1,
    resume:        isObj(input.resume)        ? input.resume        : {},
    review:        isObj(input.review)        ? input.review        : {},
    finalMissions: sanitizeFinalMissions(input.finalMissions),
    attempts,
    codePaths:     isObj(input.codePaths)     ? input.codePaths     : {},
  };
}

export function stripMeta(progress) {
  const clean = {};
  for (const [key, value] of Object.entries(progress || {})) {
    if (key !== META_KEY) clean[key] = value;
  }
  return clean;
}

export function unpackProgress(progress) {
  return {
    progress: stripMeta(progress),
    meta: sanitizeMeta(progress?.[META_KEY]),
  };
}

export function packProgress(progress, meta) {
  return {
    ...stripMeta(progress),
    [META_KEY]: sanitizeMeta(meta),
  };
}

function latestTime(a, b) {
  if (!a) return b || '';
  if (!b) return a || '';
  return new Date(a).getTime() >= new Date(b).getTime() ? a : b;
}

function mergeResume(local = {}, cloud = {}) {
  const lt = new Date(local.updatedAt || 0).getTime();
  const ct = new Date(cloud.updatedAt || 0).getTime();
  return lt >= ct ? { ...cloud, ...local } : { ...local, ...cloud };
}

export function mergeReview(local = {}, cloud = {}) {
  const merged = {};
  const ids = new Set([...Object.keys(local || {}), ...Object.keys(cloud || {})]);
  for (const id of ids) {
    const a = local[id] || {};
    const b = cloud[id] || {};
    const lastWrongAt = latestTime(a.lastWrongAt, b.lastWrongAt);
    const resolvedAt = latestTime(a.resolvedAt, b.resolvedAt);
    merged[id] = {
      wrongCount: Math.max(a.wrongCount || 0, b.wrongCount || 0),
      hintCount: Math.max(a.hintCount || 0, b.hintCount || 0),
      lastWrongAt,
      lastReviewedAt: latestTime(a.lastReviewedAt, b.lastReviewedAt),
      reviewDue: Boolean(a.reviewDue || b.reviewDue || (lastWrongAt && (!resolvedAt || new Date(lastWrongAt) > new Date(resolvedAt)))),
      mistakeTags: [...new Set([...(a.mistakeTags || []), ...(b.mistakeTags || [])])].sort(),
      resolvedAt,
    };
  }
  return merged;
}

// Merge rule: higher revision wins; same revision → newer updatedAt wins, lives can only decrease
function mergeAttempts(local = {}, cloud = {}) {
  const merged = {};
  const ids = new Set([...Object.keys(local), ...Object.keys(cloud)]);
  for (const id of ids) {
    const a = sanitizeAttempt(local[id]);
    const b = sanitizeAttempt(cloud[id]);
    if (!a) { if (b) merged[id] = b; continue; }
    if (!b) { merged[id] = a; continue; }
    if (a.revision > b.revision) { merged[id] = a; continue; }
    if (b.revision > a.revision) { merged[id] = b; continue; }
    // Same revision: newer timestamp wins, but remaining lives can only decrease
    const aTime = new Date(a.updatedAt || 0).getTime();
    const bTime = new Date(b.updatedAt || 0).getTime();
    const winner = aTime >= bTime ? a : b;
    merged[id] = {
      ...winner,
      remainingLives: Math.min(a.remainingLives, b.remainingLives),
    };
  }
  return merged;
}

function mergeCodePaths(local = {}, cloud = {}) {
  return {
    ...cloud,
    ...local,
    sql: mergeSqlProgress(local.sql, cloud.sql),
  };
}

export function mergeMeta(localMeta, cloudMeta) {
  const local = sanitizeMeta(localMeta);
  const cloud = sanitizeMeta(cloudMeta);
  return {
    version: Math.max(local.version || 1, cloud.version || 1),
    resume: mergeResume(local.resume, cloud.resume),
    review: mergeReview(local.review, cloud.review),
    finalMissions: {
      ...cloud.finalMissions,
      ...local.finalMissions,
    },
    attempts: mergeAttempts(local.attempts, cloud.attempts),
    codePaths: mergeCodePaths(local.codePaths, cloud.codePaths),
  };
}

export function isFinalMissionCleared(meta, missionId) {
  const item = sanitizeMeta(meta).finalMissions?.[missionId];
  return Boolean(item?.completedAt && (item.completedChildCount || 0) >= (item.targetChildCount || 3));
}
