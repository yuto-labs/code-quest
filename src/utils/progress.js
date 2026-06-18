import { COUNTRIES } from '../data/countries.js';
import { AVAILABLE_STAGES } from './stageData.js';
import { COUNTRY_CONCEPT_MAP } from '../data/worlds.js';
import { buildFinalMissionId } from '../data/final_missions.js';
import { META_KEY, isFinalMissionCleared, stripMeta } from './metadata.js';

// Key formats:
//   legacy:  'JP_python'            (2-part: country_lang)
//   current: 'decode_JP_python'     (3-part: world_country_lang)

export function buildProgressKey(worldId, countryId, languageId) {
  return `${worldId}_${countryId}_${languageId}`;
}

export function parseProgressKey(key) {
  if (key === META_KEY) return { worldId: '', countryId: '', languageId: '' };
  const parts = key.split('_');
  if (parts.length >= 3) {
    // current format: world_country_lang (lang may itself contain underscores)
    return { worldId: parts[0], countryId: parts[1], languageId: parts.slice(2).join('_') };
  }
  // legacy format: country_lang → treat as decode world
  return { worldId: 'decode', countryId: parts[0], languageId: parts.slice(1).join('_') };
}

// Idempotent. Converts legacy 2-part keys to 3-part, deduplicates aliases.
// Prefers truthy value when the same normalized key appears twice.
export function migrateProgressKeys(data) {
  const seen = new Map();
  for (const [k, v] of Object.entries(data || {})) {
    if (k === META_KEY) continue;
    const { worldId, countryId, languageId } = parseProgressKey(k);
    const norm = buildProgressKey(worldId, countryId, languageId);
    if (!seen.has(norm) || v) seen.set(norm, v);
  }
  return Object.fromEntries(seen);
}

// Returns Set of countryIds cleared for the given world (at least one language stage cleared).
function getClearedCountrySet(progress, world) {
  const cleared = new Set();
  for (const [key, val] of Object.entries(stripMeta(progress) || {})) {
    if (!val) continue;
    const { worldId, countryId } = parseProgressKey(key);
    if (worldId === world) cleared.add(countryId);
  }
  return cleared;
}

// Returns Set of countryIds where at least one language stage is cleared for that world.
// "Cleared" means the country shows as done on map/home; individual language bars
// in ProgressScreen show the per-language completion detail.
export function getClearedCountryIds(progress, world) {
  const stages = AVAILABLE_STAGES[world] || {};
  const anyCleared = getClearedCountrySet(progress, world); // already "any language" rule
  const result = new Set();
  for (const countryId of Object.keys(stages)) {
    if (anyCleared.has(countryId)) result.add(countryId);
  }
  return result;
}

// Returns Set of unlocked countryIds for the given world.
// Unlock chain skips countries with no content in the current world.
// First country-with-content is always unlocked.
export function getUnlockedIds(progress, world = 'decode') {
  const stages = AVAILABLE_STAGES[world] || {};
  const worldCountries = COUNTRIES.filter(c => (stages[c.id] || []).length > 0);
  const cleared = getClearedCountrySet(progress, world);

  const unlocked = new Set();
  worldCountries.forEach((c, i) => {
    if (i === 0) { unlocked.add(c.id); return; }
    if (cleared.has(worldCountries[i - 1].id)) unlocked.add(c.id);
  });
  return unlocked;
}

// { worldId: { cleared: N, available: M } }
// cleared = countries where at least one language stage is cleared
// available = countries that have at least one question
export function getWorldStats(progress) {
  const result = {};
  for (const [worldId, countryLangMap] of Object.entries(AVAILABLE_STAGES)) {
    const availableCountries = new Set(Object.keys(countryLangMap));
    const anyCleared = getClearedCountrySet(progress, worldId);
    const clearedCount = [...availableCountries].filter(id => anyCleared.has(id)).length;
    result[worldId] = { cleared: clearedCount, available: availableCountries.size };
  }
  return result;
}

// Concept Core status for a given concept + language.
// Returns { decode: bool|null, execute: bool|null, debug: bool|null }
//   true  = all countries teaching this concept in that world are cleared
//   false = content exists but not yet cleared
//   null  = no content for that concept+world combination
export function getConceptCoreStatus(progress, conceptId, languageId = 'python') {
  const countryMap = COUNTRY_CONCEPT_MAP[languageId] || {};
  const related = Object.entries(countryMap)
    .filter(([, cid]) => cid === conceptId)
    .map(([countryId]) => countryId);
  if (related.length === 0) return null;

  const result = {};
  for (const worldId of ['decode', 'execute', 'debug']) {
    const stages = AVAILABLE_STAGES[worldId] || {};
    const relevant = related.filter(c => (stages[c] || []).includes(languageId));
    if (relevant.length === 0) {
      result[worldId] = null;
    } else {
      result[worldId] = relevant.every(c => !!progress[buildProgressKey(worldId, c, languageId)]);
    }
  }
  return result;
}

// Best scores for a concept across worlds.
// Returns { decode: number, execute: number, debug: number }
export function getConceptBestScores(scores, conceptId, languageId = 'python') {
  const countryMap = COUNTRY_CONCEPT_MAP[languageId] || {};
  const related = Object.entries(countryMap)
    .filter(([, cid]) => cid === conceptId)
    .map(([countryId]) => countryId);

  const result = {};
  for (const worldId of ['decode', 'execute', 'debug']) {
    const worldScores = related.map(c => scores[buildProgressKey(worldId, c, languageId)] || 0);
    result[worldId] = worldScores.length > 0 ? Math.max(...worldScores) : 0;
  }
  return result;
}

// Language Emblem tier for a given language.
// Tier = highest world where at least one country is cleared.
// 'none' | 'bronze' (any decode) | 'silver' (any execute) | 'gold' (any debug)
export function getLanguageEmblemTier(progress, languageId, meta = {}) {
  const worldTiers = [
    { worldId: 'debug',   tier: 'gold'   },
    { worldId: 'execute', tier: 'silver' },
    { worldId: 'decode',  tier: 'bronze' },
  ];
  for (const { worldId, tier } of worldTiers) {
    const stages = AVAILABLE_STAGES[worldId] || {};
    const hasAnyCleared = Object.keys(stages).some(countryId => {
      if (!(stages[countryId] || []).includes(languageId)) return false;
      if (!progress[buildProgressKey(worldId, countryId, languageId)]) return false;
      return isFinalMissionCleared(meta, buildFinalMissionId(worldId, countryId, languageId));
    });
    if (hasAnyCleared) return tier;
  }
  return 'none';
}

// Country Seal tier for a given country.
// Tier = highest world where all available languages for that country are cleared.
// 'none' | 'bronze' | 'silver' | 'gold'
export function getCountrySealTier(progress, countryId) {
  const worldTiers = [
    { worldId: 'debug',   tier: 'gold'   },
    { worldId: 'execute', tier: 'silver' },
    { worldId: 'decode',  tier: 'bronze' },
  ];
  for (const { worldId, tier } of worldTiers) {
    const langs = (AVAILABLE_STAGES[worldId] || {})[countryId] || [];
    if (langs.length > 0 && langs.every(
      langId => !!progress[buildProgressKey(worldId, countryId, langId)]
    )) return tier;
  }
  return 'none';
}
