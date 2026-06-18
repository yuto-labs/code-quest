export const META_KEY = '__cq_meta';

export const DEFAULT_META = Object.freeze({
  version: 1,
  resume: {},
  review: {},
  finalMissions: {},
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
  };
}

export function sanitizeMeta(meta) {
  const input = isObj(meta) ? meta : {};
  return {
    version: Number.isInteger(input.version) ? input.version : 1,
    resume: isObj(input.resume) ? input.resume : {},
    review: isObj(input.review) ? input.review : {},
    finalMissions: isObj(input.finalMissions) ? input.finalMissions : {},
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
  };
}

export function isFinalMissionCleared(meta, missionId) {
  return Boolean(sanitizeMeta(meta).finalMissions?.[missionId]?.completedAt);
}
