import { CHALLENGES } from '../data/challenges.js';
import { EXECUTE_CHALLENGES } from '../data/execute_challenges.js';
import { DEBUG_CHALLENGES } from '../data/debug_challenges.js';
import { COUNTRIES } from '../data/countries.js';
import { buildProgressKey, getUnlockedIds } from './progress.js';
import { sanitizeMedals } from './medals.js';

export const SHUFFLE_MODES = ['all', 'decode', 'execute', 'debug'];
export const SHUFFLE_COUNTS = [5, 10, 20];
export const SHUFFLE_LANGUAGES = ['python', 'javascript'];
export const SHUFFLE_FILTERS = [
  { id: 'all', label: 'ALL QUESTIONS' },
  { id: 'review', label: 'WRONG / REVEALED' },
  { id: 'mastery-unmet', label: 'MASTERY UNMET' },
];

const WORLD_CHALLENGES = { decode: CHALLENGES, execute: EXECUTE_CHALLENGES, debug: DEBUG_CHALLENGES };

function isObject(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

function isPlayableQuestion(question) {
  if (!question?.id) return false;
  if (question.placeholder || question.todo) return false;
  const type = question.questionType || 'fill-blank';
  if (type === 'fill-blank') return Boolean(question.blank ?? question.answer);
  if (type === 'multiple-blanks') return Array.isArray(question.blanks) && question.blanks.length > 0;
  if (type === 'code-ordering') return Array.isArray(question.answer) && question.answer.length > 0;
  if (type === 'debug-step') return Array.isArray(question.steps) && question.steps.length === 3;
  return Array.isArray(question.options) && question.options.length > 0 && question.answer !== undefined;
}

function matchesShuffleFilter(question, entry, progress, meta, filter) {
  if (filter === 'review') return Boolean(meta?.review?.[question.id]?.reviewDue);
  if (filter === 'mastery-unmet') {
    const medalKey = buildProgressKey(entry.worldId, entry.countryId, entry.languageId);
    const medal = sanitizeMedals(meta?.medals).stageMedals[medalKey] || {};
    const isCleared = Boolean(progress?.[medalKey] || medal.clear);
    if (!isCleared) return false;
    return !(medal.masteredQuestionIds || []).includes(question.id);
  }
  return true;
}

export function getShuffleEligibleQuestions(progress = {}, { languageId = 'python', mode = 'all', filter = 'all', meta = {} } = {}) {
  if (!SHUFFLE_LANGUAGES.includes(languageId)) return [];
  const modes = mode === 'all' ? ['decode', 'execute', 'debug'] : [mode];
  const filterId = SHUFFLE_FILTERS.some(item => item.id === filter) ? filter : 'all';
  const items = [];
  for (const worldId of modes) {
    const unlocked = getUnlockedIds(progress, worldId);
    const byCountry = WORLD_CHALLENGES[worldId] || {};
    for (const country of COUNTRIES) {
      if (!unlocked.has(country.id)) continue;
      const questions = byCountry[country.id]?.[languageId] || [];
      for (const question of questions) {
        if (!isPlayableQuestion(question)) continue;
        const entry = {
          questionId: question.id,
          worldId,
          countryId: country.id,
          languageId,
        };
        if (!matchesShuffleFilter(question, entry, progress, meta, filterId)) continue;
        items.push(entry);
      }
    }
  }
  return items;
}

export function resolveShuffleQuestion(entry) {
  const question = (WORLD_CHALLENGES[entry.worldId] || {})[entry.countryId]?.[entry.languageId]?.find(q => q.id === entry.questionId);
  const country = COUNTRIES.find(item => item.id === entry.countryId);
  return question && country ? { ...entry, question, country } : null;
}

export function createShuffleRun(progress = {}, settings = {}) {
  const languageId = settings.languageId ? String(settings.languageId) : 'python';
  const mode = SHUFFLE_MODES.includes(settings.mode) ? settings.mode : 'all';
  const requestedCount = SHUFFLE_COUNTS.includes(settings.requestedCount) ? settings.requestedCount : 5;
  const filter = SHUFFLE_FILTERS.some(item => item.id === settings.filter) ? settings.filter : 'all';
  const eligible = SHUFFLE_LANGUAGES.includes(languageId)
    ? getShuffleEligibleQuestions(progress, { languageId, mode, filter, meta: settings.meta })
    : [];
  const queue = shuffle(eligible).slice(0, requestedCount);
  return {
    version: 1,
    status: 'active',
    languageId,
    mode,
    filter,
    requestedCount,
    queue,
    currentIndex: 0,
    outcomes: {},
    temp: {},
    startedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const other = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[other]] = [copy[other], copy[index]];
  }
  return copy;
}

export function sanitizeWorldShuffle(value) {
  if (!isObject(value)) return {};
  const queue = Array.isArray(value.queue)
    ? value.queue.filter(item => item?.questionId && item?.worldId && item?.countryId && item?.languageId)
    : [];
  const outcomes = isObject(value.outcomes) ? value.outcomes : {};
  return {
    version: Number.isInteger(value.version) ? value.version : 1,
    status: ['active', 'completed'].includes(value.status) ? value.status : 'active',
    languageId: value.languageId || 'python',
    mode: SHUFFLE_MODES.includes(value.mode) ? value.mode : 'all',
    filter: SHUFFLE_FILTERS.some(item => item.id === value.filter) ? value.filter : 'all',
    requestedCount: SHUFFLE_COUNTS.includes(value.requestedCount) ? value.requestedCount : 5,
    queue,
    currentIndex: Number.isInteger(value.currentIndex) ? Math.max(0, Math.min(value.currentIndex, Math.max(queue.length - 1, 0))) : 0,
    outcomes,
    temp: isObject(value.temp) ? value.temp : {},
    startedAt: value.startedAt || '',
    updatedAt: value.updatedAt || '',
    completedAt: value.completedAt || '',
  };
}

export function mergeWorldShuffle(localValue, cloudValue) {
  const local = sanitizeWorldShuffle(localValue);
  const cloud = sanitizeWorldShuffle(cloudValue);
  const localTime = new Date(local.updatedAt || 0).getTime();
  const cloudTime = new Date(cloud.updatedAt || 0).getTime();
  return localTime >= cloudTime ? local : cloud;
}

export function summarizeShuffleRun(run = {}) {
  const outcomes = Object.values(run.outcomes || {});
  const countries = new Set((run.queue || []).map(item => item.countryId));
  return {
    total: run.queue?.length || 0,
    solved: outcomes.filter(item => item.status === 'solved').length,
    retried: outcomes.filter(item => item.status === 'retried').length,
    revealed: outcomes.filter(item => item.status === 'revealed').length,
    countries: [...countries].sort(),
    masteryGained: outcomes.filter(item => item.masteryGained).length,
    reviewChanged: outcomes.filter(item => item.reviewChanged).length,
    masteryMedals: [...new Set(outcomes.flatMap(item => item.masteryMedals || []))],
  };
}
