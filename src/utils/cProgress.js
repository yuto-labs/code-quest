import { C_COURSE, C_CHAPTER_IDS } from '../data/c/course.js';
import { getCQuestionsForChapter, C_QUESTIONS_BY_ID } from '../data/c/questions.js';

export const C_MAX_HEARTS = 3;

export function emptyCProgress() {
  return {
    version: 1,
    activeChapterId: C_CHAPTER_IDS[0],
    resume: {},
    chapters: {},
  };
}

function isObject(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

export function sanitizeCProgress(value) {
  const input = isObject(value) ? value : {};
  const chapters = {};
  for (const chapter of C_COURSE.chapters) {
    const raw = isObject(input.chapters?.[chapter.id]) ? input.chapters[chapter.id] : {};
    chapters[chapter.id] = {
      completedQuestionIds: Array.isArray(raw.completedQuestionIds) ? [...new Set(raw.completedQuestionIds)] : [],
      missionCompleted: Boolean(raw.missionCompleted),
      completed: Boolean(raw.completed),
      attempts: isObject(raw.attempts) ? raw.attempts : {},
      hearts: Number.isInteger(raw.hearts) ? Math.max(0, Math.min(raw.hearts, C_MAX_HEARTS)) : C_MAX_HEARTS,
    };
  }
  const activeChapterId = C_CHAPTER_IDS.includes(input.activeChapterId) ? input.activeChapterId : C_CHAPTER_IDS[0];
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
  let active = C_CHAPTER_IDS[0];
  for (let index = 1; index < C_CHAPTER_IDS.length; index += 1) {
    if (!chapters[C_CHAPTER_IDS[index - 1]]?.missionCompleted) break;
    active = C_CHAPTER_IDS[index];
  }
  return active;
}

export function mergeCProgress(localValue, cloudValue) {
  const local = sanitizeCProgress(localValue);
  const cloud = sanitizeCProgress(cloudValue);
  const chapters = {};
  for (const chapter of C_COURSE.chapters) {
    const a = local.chapters[chapter.id];
    const b = cloud.chapters[chapter.id];
    const completedQuestionIds = [...new Set([...a.completedQuestionIds, ...b.completedQuestionIds])];
    chapters[chapter.id] = {
      completedQuestionIds,
      missionCompleted: a.missionCompleted || b.missionCompleted,
      completed: a.completed || b.completed || (completedQuestionIds.length >= 9 && (a.missionCompleted || b.missionCompleted)),
      attempts: mergeAttempts(a.attempts, b.attempts),
      hearts: Math.min(a.hearts ?? C_MAX_HEARTS, b.hearts ?? C_MAX_HEARTS),
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

export function getCChapterStatus(progressValue, chapterId) {
  const c = sanitizeCProgress(progressValue);
  const index = C_CHAPTER_IDS.indexOf(chapterId);
  const chapter = c.chapters[chapterId];
  if (index === 0) return chapter.completed ? 'CLEARED' : 'ACTIVE';
  const prev = c.chapters[C_CHAPTER_IDS[index - 1]];
  if (prev?.missionCompleted) return chapter.completed ? 'CLEARED' : 'ACTIVE';
  return 'LOCKED';
}

export function getCQuestionState(progressValue, chapterId) {
  const c = sanitizeCProgress(progressValue);
  const chapter = c.chapters[chapterId];
  const questions = getCQuestionsForChapter(chapterId);
  const completed = new Set(chapter.completedQuestionIds);
  const regular = questions.filter(q => q.mode !== 'mission');
  const mission = questions.find(q => q.mode === 'mission');
  const regularCleared = regular.filter(q => completed.has(q.id)).length;
  const missionUnlocked = regular.length > 0 && regularCleared >= regular.length;
  const nextRegular = regular.find(q => !completed.has(q.id));
  const currentId = nextRegular?.id || (missionUnlocked && !chapter.missionCompleted ? mission?.id : null);
  return { questions, completed, regularCleared, mission, missionUnlocked, currentId, chapter };
}

export function isCQuestionUnlocked(progressValue, question) {
  const status = getCChapterStatus(progressValue, question.chapterId);
  if (status === 'LOCKED') return false;
  const state = getCQuestionState(progressValue, question.chapterId);
  if (question.mode === 'mission') return state.missionUnlocked;
  const regular = state.questions.filter(q => q.mode !== 'mission');
  const index = regular.findIndex(q => q.id === question.id);
  if (index <= 0) return true;
  return state.completed.has(regular[index - 1].id);
}

export function completeCQuestion(progressValue, questionId) {
  const c = sanitizeCProgress(progressValue);
  const question = C_QUESTIONS_BY_ID[questionId];
  if (!question) return c;
  const chapter = c.chapters[question.chapterId];
  const completedQuestionIds = question.mode === 'mission'
    ? chapter.completedQuestionIds
    : [...new Set([...chapter.completedQuestionIds, questionId])];
  const missionCompleted = chapter.missionCompleted || question.mode === 'mission';
  const completed = missionCompleted && completedQuestionIds.length >= 9;
  const nextChapterIndex = Math.min(C_CHAPTER_IDS.indexOf(question.chapterId) + 1, C_CHAPTER_IDS.length - 1);
  return {
    ...c,
    activeChapterId: completed ? C_CHAPTER_IDS[nextChapterIndex] : question.chapterId,
    resume: {},
    chapters: {
      ...c.chapters,
      [question.chapterId]: {
        ...chapter,
        completedQuestionIds,
        missionCompleted,
        completed,
        hearts: C_MAX_HEARTS,
      },
    },
  };
}

export function saveCResume(progressValue, patch) {
  const c = sanitizeCProgress(progressValue);
  return {
    ...c,
    activeChapterId: patch.chapterId || c.activeChapterId,
    resume: { ...patch, updatedAt: new Date().toISOString() },
  };
}

export function getCCourseCounts(progressValue) {
  const c = sanitizeCProgress(progressValue);
  let completed = 0;
  for (const chapter of C_COURSE.chapters) {
    const state = c.chapters[chapter.id];
    completed += (state.completedQuestionIds || []).length + (state.missionCompleted ? 1 : 0);
  }
  return { completed, total: C_COURSE.totalQuestions };
}
