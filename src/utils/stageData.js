import { CHALLENGES, LANGUAGES } from '../data/challenges';
import { EXECUTE_CHALLENGES, EXECUTE_LANGUAGES } from '../data/execute_challenges';
import { DEBUG_CHALLENGES, DEBUG_LANGUAGES } from '../data/debug_challenges';

function deriveStages(challenges, languages) {
  const availLangs = languages.filter(l => l.available).map(l => l.id);
  const result = {};
  for (const [countryId, langMap] of Object.entries(challenges)) {
    for (const langId of availLangs) {
      if ((langMap[langId] || []).length > 0) {
        if (!result[countryId]) result[countryId] = [];
        result[countryId].push(langId);
      }
    }
  }
  return result;
}

// AVAILABLE_STAGES[worldId][countryId] = [langId, ...]
// Only includes country×language pairs with at least one question.
export const AVAILABLE_STAGES = {
  decode:  deriveStages(CHALLENGES, LANGUAGES),
  execute: deriveStages(EXECUTE_CHALLENGES, EXECUTE_LANGUAGES),
  debug:   deriveStages(DEBUG_CHALLENGES, DEBUG_LANGUAGES),
};

export const WORLD_IDS = ['decode', 'execute', 'debug'];

export const WORLD_META = {
  decode:  { label: 'DECODE',  color: '#00ff88' },
  execute: { label: 'EXECUTE', color: '#ffdd00' },
  debug:   { label: 'DEBUG',   color: '#ff4466' },
};
