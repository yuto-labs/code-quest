import { COUNTRY_FACTS } from '../data/country_facts.js';
import { COUNTRIES } from '../data/countries.js';
import { QUESTION_ASSIGNMENTS } from '../data/question_assignments.js';
import { SQL_GLOBAL_FACTS } from '../data/sql/global_facts.js';
import { SQL_QUESTIONS } from '../data/sql/questions.js';
import { SQL_COURSE } from '../data/sql/course.js';
import { TYPESCRIPT_QUESTIONS } from '../data/typescript/questions.js';
import { TYPESCRIPT_COURSE } from '../data/typescript/course.js';
import { C_QUESTIONS } from '../data/c/questions.js';
import { C_COURSE } from '../data/c/course.js';
import { buildProgressKey } from './progress.js';
import { getStageMedal } from './medals.js';

const COUNTRY_BY_ID = Object.fromEntries(COUNTRIES.map(country => [country.id, country]));

function compact(value) {
  return Array.isArray(value) ? value.filter(Boolean) : [];
}

function sourceRefs(value) {
  return compact(value).map(ref => {
    if (typeof ref === 'string') return { title: ref, organization: '', url: ref };
    return ref;
  }).filter(ref => ref?.url || ref?.title);
}

function textFromParts(parts) {
  return parts.flatMap(part => Array.isArray(part) ? part : [part]).filter(Boolean).join(' ').toLowerCase();
}

function questStateForFact(factId, progress = {}, meta = {}) {
  const related = QUESTION_ASSIGNMENTS.filter(item => (item.factIds || []).includes(factId));
  let cleared = false;
  let mastered = false;
  for (const assignment of related) {
    const key = buildProgressKey(assignment.worldId, assignment.countryId, assignment.languageId);
    if (progress?.[key]) cleared = true;
    const medal = getStageMedal(meta, assignment.worldId, assignment.countryId, assignment.languageId, progress);
    if (medal.mastery || (medal.masteredQuestionIds || []).includes(assignment.questionId)) mastered = true;
  }
  if (mastered) return 'mastered';
  if (cleared) return 'cleared';
  return 'available';
}

export function collectCountryKnowledge({ progress = {}, meta = {} } = {}) {
  return COUNTRY_FACTS
    .filter(fact => fact?.factId && fact.factStatus !== 'avoid')
    .map(fact => {
      const country = COUNTRY_BY_ID[fact.countryId] || {};
      const title = fact.titleJa || fact.statement || fact.factId;
      const summary = fact.summaryJa || fact.detailJa || fact.detail || fact.statement || '';
      const detail = fact.detailJa || fact.detail || '';
      const background = fact.backgroundJa || '';
      const history = fact.historyJa || '';
      const episode = fact.episodeJa || '';
      const keyPoints = compact(fact.keyPointsJa);
      const searchText = textFromParts([
        title,
        summary,
        detail,
        background,
        history,
        episode,
        keyPoints,
        fact.aliases,
        fact.category,
        country.name,
        country.nameJa,
        country.capital,
      ]);
      return {
        id: fact.factId,
        type: 'country',
        title,
        countryId: fact.countryId,
        countryName: country.name || fact.countryId,
        countryNameJa: country.nameJa || country.name || fact.countryId,
        category: fact.category || 'uncategorized',
        summary,
        detail,
        background,
        history,
        episode,
        keyPoints,
        aliases: compact(fact.aliases),
        status: fact.factStatus || 'verified',
        sourceRefs: sourceRefs(fact.sourceRefs),
        questState: questStateForFact(fact.factId, progress, meta),
        searchText,
      };
    })
    .sort((a, b) => `${a.countryName}:${a.category}:${a.title}`.localeCompare(`${b.countryName}:${b.category}:${b.title}`));
}

function chapterTitle(course, chapterId) {
  return course?.chapters?.find(chapter => chapter.id === chapterId)?.title || chapterId;
}

function worldDataFromQuestion(pathId, pathTitle, course, question) {
  const explanation = question.explanation || {};
  const title = question.title || question.id;
  const summary = explanation.themeExplanation || question.prompt || question.title || '';
  const detail = explanation.themeExplanation || explanation.sqlExplanation || explanation.programmingExplanation || '';
  return {
    id: `${pathId}:${question.id}`,
    type: 'world-data',
    pathId,
    pathTitle,
    title,
    category: question.mode || question.difficulty || 'question',
    chapterId: question.chapterId,
    chapterTitle: chapterTitle(course, question.chapterId),
    summary,
    detail,
    keyPoints: compact(explanation.executionSteps).slice(0, 4),
    sourceRefs: sourceRefs(explanation.sourceRefs || question.sourceRefs),
    questionId: question.id,
    searchText: textFromParts([pathId, pathTitle, title, summary, detail, question.chapterId, chapterTitle(course, question.chapterId), question.mode, question.category]),
  };
}

export function collectWorldDataKnowledge() {
  const sqlFactItems = SQL_GLOBAL_FACTS.map(fact => {
    const title = fact.titleJa || fact.globalFactId;
    const summary = fact.summaryJa || '';
    const background = fact.backgroundJa || '';
    const history = fact.historyJa || '';
    const episode = fact.episodeJa || '';
    const keyPoints = compact(fact.keyPointsJa);
    return {
      id: `sql:${fact.globalFactId}`,
      type: 'world-data',
      pathId: 'sql',
      pathTitle: 'SQL PATH',
      title,
      category: fact.category || 'sql',
      chapterId: '',
      chapterTitle: 'SQL GLOBAL FACTS',
      summary,
      detail: [background, history, episode].filter(Boolean).join('\n\n'),
      background,
      history,
      episode,
      keyPoints,
      sourceRefs: sourceRefs(fact.sourceRefs),
      usedBy: compact(fact.usedBy),
      searchText: textFromParts([title, summary, background, history, episode, keyPoints, fact.aliases, fact.category, 'sql', 'SQL PATH']),
    };
  });

  const fallbackByFact = new Set(sqlFactItems.map(item => item.id.replace('sql:', '')));
  const sqlQuestionFallback = SQL_QUESTIONS
    .filter(question => !(question.globalFactIds || []).some(id => fallbackByFact.has(id)))
    .map(question => worldDataFromQuestion('sql', 'SQL PATH', SQL_COURSE, question));
  const typeScriptItems = TYPESCRIPT_QUESTIONS.map(question => worldDataFromQuestion('typescript', 'TypeScript PATH', TYPESCRIPT_COURSE, question));
  const cItems = C_QUESTIONS.map(question => worldDataFromQuestion('c', 'C PATH', C_COURSE, question));

  return [...sqlFactItems, ...sqlQuestionFallback, ...typeScriptItems, ...cItems]
    .filter(item => item.title && (item.summary || item.detail))
    .sort((a, b) => `${a.pathId}:${a.chapterTitle}:${a.title}`.localeCompare(`${b.pathId}:${b.chapterTitle}:${b.title}`));
}

export function filterKnowledge(items, { query = '', countryId = 'all', category = 'all', pathId = 'all' } = {}) {
  const normalized = query.trim().toLowerCase();
  return items.filter(item => {
    if (countryId !== 'all' && item.countryId !== countryId) return false;
    if (category !== 'all' && item.category !== category) return false;
    if (pathId !== 'all' && item.pathId !== pathId) return false;
    if (!normalized) return true;
    return item.searchText.includes(normalized);
  });
}
