import { COUNTRIES } from '../data/countries';

// Key formats:
//   old: 'JP_python'           (2 parts, country_lang)
//   new: 'decode_JP_python'    (3 parts, world_country_lang)

function extractCountryId(key) {
  const parts = key.split('_');
  return parts.length >= 3 ? parts[1] : parts[0];
}

// Convert old 'JP_python' keys to 'decode_JP_python'. Idempotent for new keys.
export function migrateProgressKeys(data) {
  const result = {};
  for (const [k, v] of Object.entries(data)) {
    const parts = k.split('_');
    result[parts.length === 2 ? `decode_${k}` : k] = v;
  }
  return result;
}

// Returns Set of countryIds that are unlocked (cleared = completed in any world/lang).
export function getUnlockedIds(progress) {
  const cleared = new Set(Object.keys(progress).map(extractCountryId));
  const unlocked = new Set();
  COUNTRIES.forEach((c, i) => {
    if (i === 0) { unlocked.add(c.id); return; }
    if (cleared.has(COUNTRIES[i - 1].id)) unlocked.add(c.id);
  });
  return unlocked;
}
