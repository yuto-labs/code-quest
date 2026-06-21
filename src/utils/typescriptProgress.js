import { TYPESCRIPT_COURSE, TYPESCRIPT_CHAPTER_IDS } from '../data/typescript/course.js';
import { getTypeScriptQuestionsForChapter, TYPESCRIPT_QUESTIONS_BY_ID } from '../data/typescript/questions.js';

export const TYPESCRIPT_MAX_HEARTS = 3;

export function emptyTypeScriptProgress() {
  return {
    version: 1,
    activeChapterId: TYPESCRIPT_CHAPTER_IDS[0],
    resume: {},
    chapters: {},
  };
}

function isObject(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

export function sanitizeTypeScriptProgress(value) {
  const input = isObject(value) ? value : {};
  const chapters = {};
  for (const chapter of TYPESCRIPT_COURSE.chapters) {
    const raw = isObject(input.chapters?.[chapter.id]) ? input.chapters[chapter.id] : {};
    chapters[chapter.id] = {
      completedQuestionIds: Array.isArray(raw.completedQuestionIds) ? [...new Set(raw.completedQuestionIds)] : [],
      missionCompleted: Boolean(raw.missionCompleted),
      completed: Boolean(raw.completed),
      attempts: isObject(raw.attempts) ? raw.attempts : {},
      hearts: Number.isInteger(raw.hearts) ? Math.max(0, Math.min(raw.hearts, TYPESCRIPT_MAX_HEARTS)) : TYPESCRIPT_MAX_HEARTS,
    };
  }
  const activeChapterId = TYPESCRIPT_CHAPTER_IDS.includes(input.activeChapterId) ? input.activeChapterId : TYPESCRIPT_CHAPTER_IDS[0];
  return {
    version: Number.isInteger(input.version) ? input.version : 1,
    activeChapterId,
    resume: isObject(input.resume) ? input.resume : {},
    chapters,
  };
}

function mergeAttempts(localAttempts = {}, cloudAttempts = {}) {
  const merged = {};
  for (const key of new Set([...Object.keys(localAttempts), ...Object.keys(cloudAttempts)])) {
    const local = localAttempts[key];
    const cloud = cloudAttempts[key];
    const localTime = new Date(local?.updatedAt || 0).getTime();
    const cloudTime = new Date(cloud?.updatedAt || 0).getTime();
    merged[key] = localTime >= cloudTime ? { ...cloud, ...local } : { ...local, ...cloud };
  }
  return merged;
}

function resolveActiveChapterId(chapters) {
  let active = TYPESCRIPT_CHAPTER_IDS[0];
  for (let index = 1; index < TYPESCRIPT_CHAPTER_IDS.length; index += 1) {
    if (!chapters[TYPESCRIPT_CHAPTER_IDS[index - 1]]?.missionCompleted) break;
    active = TYPESCRIPT_CHAPTER_IDS[index];
  }
  return active;
}

export function mergeTypeScriptProgress(localValue, cloudValue) {
  const local = sanitizeTypeScriptProgress(localValue);
  const cloud = sanitizeTypeScriptProgress(cloudValue);
  const chapters = {};
  for (const chapter of TYPESCRIPT_COURSE.chapters) {
    const a = local.chapters[chapter.id];
    const b = cloud.chapters[chapter.id];
    const completedQuestionIds = [...new Set([...a.completedQuestionIds, ...b.completedQuestionIds])];
    chapters[chapter.id] = {
      completedQuestionIds,
      missionCompleted: a.missionCompleted || b.missionCompleted,
      completed: a.completed || b.completed || (completedQuestionIds.length >= 9 && (a.missionCompleted || b.missionCompleted)),
      attempts: mergeAttempts(a.attempts, b.attempts),
      hearts: Math.min(a.hearts ?? TYPESCRIPT_MAX_HEARTS, b.hearts ?? TYPESCRIPT_MAX_HEARTS),
    };
  }
  const localTime = new Date(local.resume?.updatedAt || 0).getTime();
  const cloudTime = new Date(cloud.resume?.updatedAt || 0).getTime();
  return {
    version: Math.max(local.version, cloud.version),
    activeChapterId: resolveActiveChapterId(chapters),
    resume: localTime >= cloudTime ? { ...cloud.resume, ...local.resume } : { ...local.resume, ...cloud.resume },
    chapters,
  };
}

export function getTypeScriptChapterStatus(progressValue, chapterId) {
  const ts = sanitizeTypeScriptProgress(progressValue);
  const index = TYPESCRIPT_CHAPTER_IDS.indexOf(chapterId);
  const chapter = ts.chapters[chapterId];
  if (index === 0) return chapter.completed ? 'CLEARED' : 'ACTIVE';
  const prev = ts.chapters[TYPESCRIPT_CHAPTER_IDS[index - 1]];
  if (prev?.missionCompleted) return chapter.completed ? 'CLEARED' : 'ACTIVE';
  return 'LOCKED';
}

export function getTypeScriptQuestionState(progressValue, chapterId) {
  const ts = sanitizeTypeScriptProgress(progressValue);
  const chapter = ts.chapters[chapterId];
  const questions = getTypeScriptQuestionsForChapter(chapterId);
  const completed = new Set(chapter.completedQuestionIds);
  const regular = questions.filter(q => q.mode !== 'mission');
  const mission = questions.find(q => q.mode === 'mission');
  const regularCleared = regular.filter(q => completed.has(q.id)).length;
  const missionUnlocked = regularCleared >= regular.length;
  const nextRegular = regular.find(q => !completed.has(q.id));
  const currentId = nextRegular?.id || (missionUnlocked && !chapter.missionCompleted ? mission?.id : null);
  return { questions, completed, regularCleared, mission, missionUnlocked, currentId, chapter };
}

export function isTypeScriptQuestionUnlocked(progressValue, question) {
  const status = getTypeScriptChapterStatus(progressValue, question.chapterId);
  if (status === 'LOCKED') return false;
  const state = getTypeScriptQuestionState(progressValue, question.chapterId);
  if (question.mode === 'mission') return state.missionUnlocked;
  const regular = state.questions.filter(q => q.mode !== 'mission');
  const index = regular.findIndex(q => q.id === question.id);
  if (index <= 0) return true;
  return state.completed.has(regular[index - 1].id);
}

export function completeTypeScriptQuestion(progressValue, questionId) {
  const ts = sanitizeTypeScriptProgress(progressValue);
  const question = TYPESCRIPT_QUESTIONS_BY_ID[questionId];
  if (!question) return ts;
  const chapter = ts.chapters[question.chapterId];
  const completedQuestionIds = question.mode === 'mission'
    ? chapter.completedQuestionIds
    : [...new Set([...chapter.completedQuestionIds, questionId])];
  const missionCompleted = chapter.missionCompleted || question.mode === 'mission';
  const completed = missionCompleted && completedQuestionIds.length >= 9;
  const nextChapterIndex = Math.min(TYPESCRIPT_CHAPTER_IDS.indexOf(question.chapterId) + 1, TYPESCRIPT_CHAPTER_IDS.length - 1);
  return {
    ...ts,
    activeChapterId: completed ? TYPESCRIPT_CHAPTER_IDS[nextChapterIndex] : question.chapterId,
    resume: {},
    chapters: {
      ...ts.chapters,
      [question.chapterId]: {
        ...chapter,
        completedQuestionIds,
        missionCompleted,
        completed,
        hearts: TYPESCRIPT_MAX_HEARTS,
      },
    },
  };
}

export function saveTypeScriptResume(progressValue, patch) {
  const ts = sanitizeTypeScriptProgress(progressValue);
  return {
    ...ts,
    activeChapterId: patch.chapterId || ts.activeChapterId,
    resume: { ...patch, updatedAt: new Date().toISOString() },
  };
}

export function getTypeScriptCourseCounts(progressValue) {
  const ts = sanitizeTypeScriptProgress(progressValue);
  let completed = 0;
  for (const chapter of TYPESCRIPT_COURSE.chapters) {
    const state = ts.chapters[chapter.id];
    completed += (state.completedQuestionIds || []).length + (state.missionCompleted ? 1 : 0);
  }
  return { completed, total: TYPESCRIPT_COURSE.totalQuestions };
}
