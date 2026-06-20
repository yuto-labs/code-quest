/* eslint-disable react-hooks/refs */
import { useState, useEffect, useRef, useCallback } from 'react';
import TitleScreen from './screens/TitleScreen';
import HomeScreen from './screens/HomeScreen';
import WorldScreen from './screens/WorldScreen';
import MapScreen from './screens/MapScreen';
import LanguageScreen from './screens/LanguageScreen';
import ChallengeScreen from './screens/ChallengeScreen';
import ReferenceScreen from './screens/ReferenceScreen';
import ProgressScreen from './screens/ProgressScreen';
import CodePathsScreen from './screens/CodePathsScreen';
import SqlPathScreen from './screens/SqlPathScreen';
import SqlChapterScreen from './screens/SqlChapterScreen';
import SqlChallengeScreen from './screens/SqlChallengeScreen';
import RewardToast from './components/RewardToast';
import { COUNTRIES } from './data/countries';
import { CHALLENGES } from './data/challenges';
import { EXECUTE_CHALLENGES } from './data/execute_challenges';
import { DEBUG_CHALLENGES } from './data/debug_challenges';
import { useAuth } from './hooks/useAuth';
import { loadCloudProgress, saveCloudProgress, mergeProgressData } from './lib/sync';
import { buildProgressKey, migrateProgressKeys } from './utils/progress';
import { emptyMeta, sanitizeMeta, MAX_LIVES, resolveStageEntry, isFinalMissionCleared } from './utils/metadata';
import { completeSqlQuestion, emptySqlProgress, saveSqlResume, sanitizeSqlProgress, SQL_MAX_HEARTS } from './utils/sqlProgress';
import { getFinalMission } from './data/final_missions';
import { SQL_QUESTIONS_BY_ID, getSqlQuestionsForChapter } from './data/sql/questions';

const WORLD_CHALLENGES = { decode: CHALLENGES, execute: EXECUTE_CHALLENGES, debug: DEBUG_CHALLENGES };

const getStorageKey = (uid, type) => {
  const prefix = uid ? `cq_${uid}` : 'cq_guest';
  return `${prefix}_${type}`;
};

function loadFromLocal(key) {
  try { return JSON.parse(localStorage.getItem(key) || '{}'); }
  catch { return {}; }
}
function saveToLocal(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

// ── Attempt helpers (BUG_D) ──────────────────────────────────────────────────

function buildAttemptId(worldId, countryId, langId, missionId = null) {
  return missionId
    ? `${worldId}_${countryId}_${langId}_m_${missionId}`
    : `${worldId}_${countryId}_${langId}`;
}

function getInitialLives(meta, attemptId) {
  const attempt = meta?.attempts?.[attemptId];
  if (!attempt || attempt.status === 'completed') return MAX_LIVES;
  if (attempt.status === 'failed') return 0;
  return typeof attempt.remainingLives === 'number' ? attempt.remainingLives : MAX_LIVES;
}

function updateAttempt(meta, attemptId, patch, worldId, countryId, langId, missionId = null) {
  const now = new Date().toISOString();
  const existing = meta?.attempts?.[attemptId] || {};
  const remainingLives = Number.isInteger(patch.remainingLives)
    ? patch.remainingLives
    : (Number.isInteger(existing.remainingLives) ? existing.remainingLives : MAX_LIVES);
  const nextStatus = patch.status || (remainingLives <= 0 ? 'failed' : 'active');
  return {
    ...meta,
    attempts: {
      ...(meta.attempts || {}),
      [attemptId]: {
        ...existing,
        ...patch,
        worldId,
        countryId,
        languageId: langId,
        missionId: missionId || null,
        remainingLives,
        maxLives: MAX_LIVES,
        startedAt: existing.startedAt || now,
        updatedAt: now,
        status: nextStatus,
        revision: (existing.revision || 0) + 1,
      },
    },
  };
}

function updateAttemptLives(meta, attemptId, remainingLives, worldId, countryId, langId, missionId = null, patch = {}) {
  return updateAttempt(meta, attemptId, { ...patch, remainingLives }, worldId, countryId, langId, missionId);
}

function resetAttemptLives(meta, attemptId) {
  const now = new Date().toISOString();
  const existing = meta?.attempts?.[attemptId] || {};
  return {
    ...meta,
    attempts: {
      ...(meta.attempts || {}),
      [attemptId]: {
        ...existing,
        questionIndex: 0,
        questionId: '',
        debugStepIndex: 0,
        debugAnswers: [],
        failedQuestion: null,
        remainingLives: MAX_LIVES,
        status: 'active',
        startedAt: now,
        updatedAt: now,
        revision: (existing.revision || 0) + 1,
      },
    },
  };
}

function completeAttempt(meta, attemptId) {
  const now = new Date().toISOString();
  const existing = meta?.attempts?.[attemptId] || {};
  return {
    ...meta,
    attempts: {
      ...(meta.attempts || {}),
      [attemptId]: {
        ...existing,
        remainingLives: MAX_LIVES,
        status: 'completed',
        updatedAt: now,
        revision: (existing.revision || 0) + 1,
      },
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────

export default function App() {
  const [screen, setScreen]       = useState('title');
  const [world, setWorld]         = useState('decode');
  const [country, setCountry]     = useState(null);
  const [language, setLanguage]   = useState(null);
  const [progress, setProgress]   = useState({});
  const [quizProgress, setQuizProgress] = useState({});
  const [scores, setScores]       = useState({});
  const [mistakes, setMistakes]   = useState({});
  const [meta, setMeta]           = useState(emptyMeta);
  const [syncing, setSyncing]     = useState(false);
  const [syncError, setSyncError] = useState('');
  const [savedToast, setSavedToast] = useState(false);
  const [cloudStats, setCloudStats] = useState(null); // null = 未確認, 0 = データなし, N = N件
  const [reward, setReward] = useState(null);
  const [isUserDataLoading, setIsUserDataLoading] = useState(true);
  const [migrationDone, setMigrationDone] = useState(() => localStorage.getItem('cq_migrated') === 'true');
  const [sqlChapterId, setSqlChapterId] = useState('01_select');
  const [sqlQuestionId, setSqlQuestionId] = useState('');
  const [referenceOrigin, setReferenceOrigin] = useState(null);

  const saveDebounceTimerRef = useRef(null);
  const saveRevisionRef      = useRef(0);   // monotonic revision for BUG_C
  const syncIntervalRef      = useRef(null);
  const rewardTimerRef       = useRef(null);

  const showReward = (type, message) => {
    clearTimeout(rewardTimerRef.current);
    setReward({ type, message });
    rewardTimerRef.current = setTimeout(() => setReward(null), 1200);
  };

  // iOS keyboard: track visualViewport offset to prevent fixed screens jumping
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    let raf;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--vv-offset', `${vv.offsetTop}px`);
        document.documentElement.style.setProperty('--vv-height', `${vv.height}px`);
      });
    };
    vv.addEventListener('resize', update);
    vv.addEventListener('scroll', update);
    update();
    return () => {
      vv.removeEventListener('resize', update);
      vv.removeEventListener('scroll', update);
      cancelAnimationFrame(raf);
    };
  }, []);

  const { user, loading: authLoading, sendOtp, verifyOtp, signOut } = useAuth();

  // latestRef always reflects current render values — safe to read in async callbacks
  const latestRef = useRef({ progress, quizProgress, scores, meta, mistakes, user, isUserDataLoading });
  useEffect(() => {
    latestRef.current = { progress, quizProgress, scores, meta, mistakes, user, isUserDataLoading };
  });

  // クラウドから pull して merge する（常に最新の ref 経由で state を読む）
  const pullFromCloudRef = useRef(null);
  useEffect(() => {
    pullFromCloudRef.current = async (uid) => {
      if (latestRef.current.isUserDataLoading) return;
      const cloud = await loadCloudProgress(uid);
      if (latestRef.current.user?.id !== uid) return;

      const { progress: lp, quizProgress: lqp, scores: ls, meta: lm } = latestRef.current;

      if (!cloud) {
        // クラウドにデータなし → ローカルデータを初回アップロード
        await saveCloudProgress(uid, lp, lqp, ls, lm);
        if (latestRef.current.user?.id !== uid) return;
        setCloudStats(Object.keys(lp).length);
        return;
      }

      const cloudCount = Object.keys(cloud.progress || {}).length;
      setCloudStats(cloudCount);
      const merged = mergeProgressData({ progress: lp, quizProgress: lqp, scores: ls, meta: lm }, cloud);
      setProgress(merged.progress);
      setQuizProgress(merged.quizProgress);
      setScores(merged.scores);
      setMeta(merged.meta);
      saveToLocal(getStorageKey(uid, 'progress'), merged.progress);
      saveToLocal(getStorageKey(uid, 'quiz'), merged.quizProgress);
      saveToLocal(getStorageKey(uid, 'scores'), merged.scores);
      saveToLocal(getStorageKey(uid, 'meta'), merged.meta);
      await saveCloudProgress(uid, merged.progress, merged.quizProgress, merged.scores, merged.meta);
    };
  });

  const triggerSync = async () => {
    const { user: u, isUserDataLoading: loading } = latestRef.current;
    if (!u || loading) return;
    setSyncing(true);
    setSyncError('');
    try {
      await pullFromCloudRef.current(u.id);
    } catch (e) {
      setSyncError(e?.message || '同期エラー');
    } finally {
      setSyncing(false);
    }
  };

  // ユーザー切替とデータロード管理
  useEffect(() => {
    if (authLoading) return;

    const uid = user?.id;
    const initData = async () => {
      try {
        setIsUserDataLoading(true);
        clearTimeout(saveDebounceTimerRef.current);

        const pKey = getStorageKey(uid, 'progress');
        const qKey = getStorageKey(uid, 'quiz');
        const sKey = getStorageKey(uid, 'scores');
        const mKey = getStorageKey(uid, 'meta');
        setMistakes(loadFromLocal(getStorageKey(uid, 'mistakes')));

        // マイグレーション (ログイン時かつ未完了のみ)
        if (uid && !migrationDone) {
          const oldP = localStorage.getItem('cq_progress');
          const oldQ = localStorage.getItem('cq_quiz');
          const oldS = localStorage.getItem('cq_scores');
          if (oldP || oldQ || oldS) {
            if (!localStorage.getItem(pKey)) saveToLocal(pKey, loadFromLocal('cq_progress'));
            if (!localStorage.getItem(qKey)) saveToLocal(qKey, loadFromLocal('cq_quiz'));
            if (!localStorage.getItem(sKey)) saveToLocal(sKey, loadFromLocal('cq_scores'));

            if (localStorage.getItem(pKey) && localStorage.getItem(qKey) && localStorage.getItem(sKey)) {
              localStorage.removeItem('cq_progress');
              localStorage.removeItem('cq_quiz');
              localStorage.removeItem('cq_scores');
            }
          }
          localStorage.setItem('cq_migrated', 'true');
          setMigrationDone(true);
        }

        // Migrate old 'JP_python' keys → 'decode_JP_python'
        const rawP = loadFromLocal(pKey);
        const rawQ = loadFromLocal(qKey);
        const rawS = loadFromLocal(sKey);
        const localMeta = sanitizeMeta(loadFromLocal(mKey));
        const localP = migrateProgressKeys(rawP);
        const localQ = migrateProgressKeys(rawQ);
        const localS = migrateProgressKeys(rawS);
        if (JSON.stringify(rawP) !== JSON.stringify(localP)) saveToLocal(pKey, localP);
        if (JSON.stringify(rawQ) !== JSON.stringify(localQ)) saveToLocal(qKey, localQ);
        if (JSON.stringify(rawS) !== JSON.stringify(localS)) saveToLocal(sKey, localS);

        if (uid) {
          const cloud = await loadCloudProgress(uid);
          if (latestRef.current.user?.id !== uid) return;

          if (cloud) {
            const merged = mergeProgressData({ progress: localP, quizProgress: localQ, scores: localS, meta: localMeta }, cloud);
            saveToLocal(pKey, merged.progress);
            saveToLocal(qKey, merged.quizProgress);
            saveToLocal(sKey, merged.scores);
            saveToLocal(mKey, merged.meta);
            await saveCloudProgress(uid, merged.progress, merged.quizProgress, merged.scores, merged.meta);
            if (latestRef.current.user?.id !== uid) return;
            setProgress(merged.progress); setQuizProgress(merged.quizProgress); setScores(merged.scores); setMeta(merged.meta);
            setCloudStats(Object.keys(merged.progress || {}).length);
          } else {
            await saveCloudProgress(uid, localP, localQ, localS, localMeta);
            if (latestRef.current.user?.id !== uid) return;
            setProgress(localP); setQuizProgress(localQ); setScores(localS); setMeta(localMeta);
          }
        } else {
          setProgress(localP); setQuizProgress(localQ); setScores(localS); setMeta(localMeta);
        }
      } catch (e) {
        console.error("InitData Error:", e);
        const pKey = getStorageKey(uid, 'progress');
        const qKey = getStorageKey(uid, 'quiz');
        const sKey = getStorageKey(uid, 'scores');
        const mKey = getStorageKey(uid, 'meta');
        if (latestRef.current.user?.id === uid) {
          setProgress(loadFromLocal(pKey)); setQuizProgress(loadFromLocal(qKey)); setScores(loadFromLocal(sKey));
          setMeta(sanitizeMeta(loadFromLocal(mKey)));
        }
      } finally {
        if (latestRef.current.user?.id === uid) {
          setIsUserDataLoading(false);
        }
      }
    };

    initData();
  }, [user?.id, authLoading]);

  // アプリがフォアグラウンドに戻ったとき（別デバイスでの変更を取得）
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') triggerSync();
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  // 30秒ごとにポーリング（visibilitychange が発火しない環境での補完）
  useEffect(() => {
    clearInterval(syncIntervalRef.current);
    if (user) {
      syncIntervalRef.current = setInterval(triggerSync, 30000);
    }
    return () => clearInterval(syncIntervalRef.current);
  }, [user?.id]);

  // BUG_C: syncToCloud reads from latestRef in the 1s callback so it always
  // saves the most recent state, not the closure-captured state at call time.
  // The monotonic revision counter ensures a superseded debounce never wins.
  const syncToCloud = () => {
    const targetUid = latestRef.current.user?.id;
    if (!targetUid || latestRef.current.isUserDataLoading) return;

    const revision = ++saveRevisionRef.current;
    clearTimeout(saveDebounceTimerRef.current);
    saveDebounceTimerRef.current = setTimeout(async () => {
      if (revision < saveRevisionRef.current) return; // superseded by a newer call
      const { progress: p, quizProgress: qp, scores: sc, meta: mt, user: u } = latestRef.current;
      if (u?.id !== targetUid) return;

      setSyncing(true);
      showReward('saving', 'SAVING...');
      setSyncError('');
      try {
        await saveCloudProgress(targetUid, p, qp, sc, mt);
        setSavedToast(true);
        showReward('saved', 'SAVED');
        setTimeout(() => setSavedToast(false), 1500);
      } catch (e) {
        setSyncError(e?.message || '保存エラー');
        showReward('error', 'SYNC ERROR');
      } finally {
        setSyncing(false);
      }
    }, 1000);
  };

  const saveScore = (worldId, countryId, langId, newScore) => {
    const key = `${worldId}_${countryId}_${langId}`;
    const uid = latestRef.current.user?.id;
    const { scores: sc } = latestRef.current;
    if (newScore > (sc[key] || 0)) {
      const next = { ...sc, [key]: newScore };
      setScores(next);
      saveToLocal(getStorageKey(uid, 'scores'), next);
      syncToCloud();
    }
  };

  const resolveResume = () => {
    const resume = meta.resume || {};
    if (!resume.worldId || !resume.countryId || !resume.languageId) return null;
    const countryObj = COUNTRIES.find(c => c.id === resume.countryId);
    if (!countryObj) return null;
    const mission = resume.screen === 'finalMission'
      ? getFinalMission(resume.worldId, resume.countryId, resume.languageId)
      : null;
    const questions = mission?.questions || (WORLD_CHALLENGES[resume.worldId] || {})[resume.countryId]?.[resume.languageId] || [];
    if (resume.screen === 'map' || questions.length === 0) {
      return { ...resume, countryObj, questionIndex: 0, screen: 'map' };
    }
    const byId = questions.findIndex(q => q.id === resume.questionId);
    const fallback = Number.isInteger(resume.questionIndexFallback) ? resume.questionIndexFallback : 0;
    const questionIndex = byId >= 0 ? byId : Math.min(Math.max(fallback, 0), Math.max(questions.length - 1, 0));
    return { ...resume, countryObj, questionIndex, questions, mission, screen: resume.screen === 'finalMission' ? 'finalMission' : 'challenge' };
  };

  const resolveAttemptIndex = (attempt, questions = []) => {
    if (!attempt || questions.length === 0) return 0;
    const byId = attempt.questionId ? questions.findIndex(q => q.id === attempt.questionId) : -1;
    if (byId >= 0) return byId;
    const fallback = Number.isInteger(attempt.questionIndex) ? attempt.questionIndex : 0;
    return Math.min(Math.max(fallback, 0), questions.length - 1);
  };

  const handleContinue = () => {
    const target = resolveResume();
    if (!target) return;
    setWorld(target.worldId);
    setCountry(target.countryObj);
    setLanguage({ id: target.languageId, name: target.languageId.toUpperCase(), emoji: target.languageId === 'javascript' ? '笞｡' : '錐' });
    if (target.screen === 'map') {
      setScreen('map');
      return;
    }
    const key = buildProgressKey(target.worldId, target.countryId, target.languageId);
    const nextQuiz = { ...quizProgress, [key]: target.questionIndex };
    setQuizProgress(nextQuiz);
    saveToLocal(getStorageKey(user?.id, 'quiz'), nextQuiz);
    setScreen(target.screen === 'finalMission' ? 'finalMission' : 'challenge');
  };

  const getSqlMeta = (mt = latestRef.current.meta) => sanitizeSqlProgress(mt?.codePaths?.sql || emptySqlProgress());

  const saveSqlMeta = (nextSql) => {
    const uid = latestRef.current.user?.id;
    const nextMeta = {
      ...latestRef.current.meta,
      codePaths: {
        ...(latestRef.current.meta.codePaths || {}),
        sql: sanitizeSqlProgress(nextSql),
      },
    };
    setMeta(nextMeta);
    saveToLocal(getStorageKey(uid, 'meta'), nextMeta);
    syncToCloud();
  };

  const openSqlResume = () => {
    const sql = getSqlMeta();
    const resume = sql.resume || {};
    if (resume.questionId && SQL_QUESTIONS_BY_ID[resume.questionId]) {
      setSqlChapterId(resume.chapterId || SQL_QUESTIONS_BY_ID[resume.questionId].chapterId);
      setSqlQuestionId(resume.questionId);
      setScreen('sqlChallenge');
      return;
    }
    setSqlChapterId(sql.activeChapterId || '01_select');
    setScreen('sqlChapter');
  };

  const completeSql = (question) => {
    const current = getSqlMeta();
    const next = completeSqlQuestion(current, question.id);
    saveSqlMeta(next);
    const chapterQuestions = getSqlQuestionsForChapter(question.chapterId);
    const nextQuestion = chapterQuestions.find(q => q.order > question.order);
    if (nextQuestion) {
      setSqlQuestionId(nextQuestion.id);
      setScreen('sqlChallenge');
    } else {
      setSqlChapterId(question.chapterId);
      setScreen('sqlChapter');
    }
  };

  const saveSqlChallengeResume = (patch) => {
    saveSqlMeta(saveSqlResume(getSqlMeta(), patch));
  };

  const saveQuizIdx = (worldId, countryId, langId, idx, resumePatch = {}) => {
    const key = `${worldId}_${countryId}_${langId}`;
    const uid = latestRef.current.user?.id;
    const { quizProgress: qp, meta: mt } = latestRef.current;
    const next = { ...qp, [key]: idx };
    setQuizProgress(next);
    saveToLocal(getStorageKey(uid, 'quiz'), next);
    const attemptId = buildAttemptId(worldId, countryId, langId);
    const existingAttempt = mt.attempts?.[attemptId];
    const baseMeta = updateAttempt(
      mt,
      attemptId,
      {
        questionIndex: idx,
        questionId: resumePatch.questionId || '',
        debugStepIndex: Number.isInteger(resumePatch.debugStepIndex) ? resumePatch.debugStepIndex : 0,
        debugAnswers: Array.isArray(resumePatch.debugAnswers) ? resumePatch.debugAnswers : [],
        failedQuestion: null,
        remainingLives: !existingAttempt || existingAttempt.status === 'failed' || existingAttempt.status === 'completed'
          ? MAX_LIVES
          : existingAttempt.remainingLives,
        status: 'active',
      },
      worldId,
      countryId,
      langId,
    );
    const nextMeta = {
      ...baseMeta,
      resume: {
        worldId,
        countryId,
        languageId: langId,
        questionIndexFallback: idx,
        screen: 'challenge',
        ...resumePatch,
        updatedAt: new Date().toISOString(),
      },
    };
    setMeta(nextMeta);
    saveToLocal(getStorageKey(uid, 'meta'), nextMeta);
    syncToCloud();
  };

  const handleResetData = async () => {
    const uid = user?.id;
    clearTimeout(saveDebounceTimerRef.current);
    localStorage.removeItem(getStorageKey(uid, 'progress'));
    localStorage.removeItem(getStorageKey(uid, 'quiz'));
    localStorage.removeItem(getStorageKey(uid, 'scores'));
    localStorage.removeItem(getStorageKey(uid, 'mistakes'));
    localStorage.removeItem(getStorageKey(uid, 'meta'));
    setProgress({});
    setQuizProgress({});
    setScores({});
    setMistakes({});
    setMeta(emptyMeta());
    setCloudStats(0);
    if (uid) {
      try { await saveCloudProgress(uid, {}, {}, {}, emptyMeta()); } catch { /* silent */ }
    }
  };

  const handleComplete = (worldId, countryId, langId) => {
    const uid = latestRef.current.user?.id;
    const { progress: p, quizProgress: qp, meta: mt } = latestRef.current;
    const key = `${worldId}_${countryId}_${langId}`;
    const nextProgress = { ...p, [key]: true };
    setProgress(nextProgress);
    saveToLocal(getStorageKey(uid, 'progress'), nextProgress);

    const nextQuiz = { ...qp };
    delete nextQuiz[key];
    setQuizProgress(nextQuiz);
    saveToLocal(getStorageKey(uid, 'quiz'), nextQuiz);

    const attemptId = buildAttemptId(worldId, countryId, langId);
    const nextMeta = completeAttempt(
      {
        ...mt,
        resume: {
          worldId,
          countryId,
          languageId: langId,
          screen: 'map',
          updatedAt: new Date().toISOString(),
        },
      },
      attemptId,
    );
    setMeta(nextMeta);
    saveToLocal(getStorageKey(uid, 'meta'), nextMeta);
    syncToCloud();
    showReward('stage-unlocked', 'STAGE CLEARED');
    setScreen('map');
  };

  const saveFinalMissionProgress = (mission, childIndex, resumePatch = {}) => {
    const { meta: mt } = latestRef.current;
    const uid = latestRef.current.user?.id;
    const existing = mt.finalMissions?.[mission.id] || {};
    const targetChildCount = mission.targetChildCount || mission.childQuestionIds?.length || 3;
    const attemptId = buildAttemptId(mission.worldId, mission.countryId, mission.languageId, mission.id);
    const existingAttempt = mt.attempts?.[attemptId];
    const baseMeta = updateAttempt(
      mt,
      attemptId,
      {
        questionIndex: childIndex,
        questionId: resumePatch.questionId || '',
        debugStepIndex: Number.isInteger(resumePatch.debugStepIndex) ? resumePatch.debugStepIndex : 0,
        debugAnswers: Array.isArray(resumePatch.debugAnswers) ? resumePatch.debugAnswers : [],
        failedQuestion: null,
        remainingLives: !existingAttempt || existingAttempt.status === 'failed' || existingAttempt.status === 'completed'
          ? MAX_LIVES
          : existingAttempt.remainingLives,
        status: 'active',
      },
      mission.worldId,
      mission.countryId,
      mission.languageId,
      mission.id,
    );
    const nextMeta = {
      ...baseMeta,
      finalMissions: {
        ...(baseMeta.finalMissions || {}),
        [mission.id]: {
          ...existing,
          missionId: mission.id,
          worldId: mission.worldId,
          countryId: mission.countryId,
          languageId: mission.languageId,
          currentChildIndex: childIndex,
          completedChildCount: Math.max(existing.completedChildCount || 0, Math.min(childIndex, targetChildCount)),
          targetChildCount,
          updatedAt: new Date().toISOString(),
        },
      },
      resume: {
        worldId: mission.worldId,
        countryId: mission.countryId,
        languageId: mission.languageId,
        questionIndexFallback: childIndex,
        screen: 'finalMission',
        ...resumePatch,
        updatedAt: new Date().toISOString(),
      },
    };
    setMeta(nextMeta);
    saveToLocal(getStorageKey(uid, 'meta'), nextMeta);
    syncToCloud();
  };

  const handleFinalMissionComplete = (mission, completion = {}) => {
    const uid = latestRef.current.user?.id;
    const { meta: mt } = latestRef.current;
    const attemptId = buildAttemptId(mission.worldId, mission.countryId, mission.languageId, mission.id);
    const targetChildCount = mission.targetChildCount || mission.childQuestionIds?.length || 3;
    const completedChildCount = Math.min(completion.completedChildCount || mission.questions?.length || 0, targetChildCount);
    const isComplete = completedChildCount >= targetChildCount;
    const existingFinal = mt.finalMissions?.[mission.id] || {};
    const nextMeta = completeAttempt(
      {
        ...mt,
        finalMissions: {
          ...(mt.finalMissions || {}),
          [mission.id]: {
            ...existingFinal,
            missionId: mission.id,
            worldId: mission.worldId,
            countryId: mission.countryId,
            languageId: mission.languageId,
            completedAt: isComplete ? (existingFinal.completedAt || new Date().toISOString()) : existingFinal.completedAt,
            completedChildCount,
            targetChildCount,
            currentChildIndex: completedChildCount,
            updatedAt: new Date().toISOString(),
          },
        },
        resume: {
          worldId: mission.worldId,
          countryId: mission.countryId,
          languageId: mission.languageId,
          screen: 'language',
          updatedAt: new Date().toISOString(),
        },
      },
      attemptId,
    );
    setMeta(nextMeta);
    saveToLocal(getStorageKey(uid, 'meta'), nextMeta);
    syncToCloud();
    showReward(isComplete ? 'language-emblem' : 'final-mission-progress', isComplete ? 'FINAL MISSION CLEARED' : `FINAL ${completedChildCount}/${targetChildCount}`);
    setScreen('language');
  };

  const saveMistake = (worldId, countryId, langId, questionId) => {
    const key = `${worldId}_${countryId}_${langId}`;
    const uid = latestRef.current.user?.id;
    const { mistakes: mk, meta: mt } = latestRef.current;
    const existing = mk[key] || [];
    const nextMistakes = existing.includes(questionId) ? mk : { ...mk, [key]: [...existing, questionId] };
    const currentReview = mt.review?.[questionId] || {};
    const now = new Date().toISOString();
    const nextMeta = {
      ...mt,
      review: {
        ...(mt.review || {}),
        [questionId]: {
          ...currentReview,
          wrongCount: (currentReview.wrongCount || 0) + 1,
          hintCount: currentReview.hintCount || 0,
          lastWrongAt: now,
          lastReviewedAt: currentReview.lastReviewedAt || '',
          reviewDue: true,
          mistakeTags: [...new Set([...(currentReview.mistakeTags || []), worldId])].sort(),
          resolvedAt: currentReview.resolvedAt || '',
        },
      },
    };
    setMistakes(nextMistakes);
    setMeta(nextMeta);
    saveToLocal(getStorageKey(uid, 'mistakes'), nextMistakes);
    saveToLocal(getStorageKey(uid, 'meta'), nextMeta);
    syncToCloud();
  };

  // Stable callback identities for ChallengeScreen's onSaveIdx prop.
  // ChallengeScreen's debug-step save effect lists onSaveIdx as a dependency;
  // an inline arrow function here would get a new identity on every App
  // render, re-firing that effect every render and creating an infinite
  // save -> setMeta -> re-render -> save loop, which visibly flickers the
  // debug-step options and "answer" text.
  const handleChallengeSaveIdx = useCallback((idx, resumePatch) => {
    if (!country || !language) return;
    saveQuizIdx(world, country.id, language.id, idx, resumePatch);
  }, [world, country?.id, language?.id]);

  const handleFinalMissionSaveIdx = useCallback((idx, resumePatch) => {
    if (!country || !language) return;
    const m = getFinalMission(world, country.id, language.id);
    if (m) saveFinalMissionProgress({ ...m, worldId: world, countryId: country.id, languageId: language.id }, idx, resumePatch);
  }, [world, country?.id, language?.id]);

  if (authLoading || isUserDataLoading) {
    return (
      <div style={{ width: '100%', height: '100dvh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 9, color: 'var(--accent)', fontFamily: 'var(--pixel-font)' }}>LOADING...</span>
      </div>
    );
  }

  return (
    <>
      <div className="scanlines" />
      <RewardToast reward={reward} />

      {/* Saved toast */}
      {savedToast && (
        <div style={{
          position: 'fixed',
          bottom: 'calc(env(safe-area-inset-bottom, 0px) + 72px)',
          right: 16,
          zIndex: 9999,
          background: '#001a0d',
          border: '1px solid #00ff8866',
          color: '#00ff88',
          fontFamily: 'var(--pixel-font)',
          fontSize: 8,
          padding: '8px 14px',
          letterSpacing: 1,
          pointerEvents: 'none',
          animation: 'fadeIn 0.2s ease',
        }}>
          ✓ SAVED
        </div>
      )}

      {screen === 'title' && (
        <TitleScreen onStart={() => setScreen('home')} />
      )}

      {screen === 'home' && (
        <HomeScreen
          progress={progress}
          resume={resolveResume()}
          onContinue={handleContinue}
          onNavigate={(s) => {
            setReferenceOrigin(null);
            setScreen(s === 'map' ? 'world' : s);
          }}
          user={user}
          syncing={syncing}
          onSendOtp={sendOtp}
          onVerifyOtp={verifyOtp}
          onSignOut={signOut}
          onRefreshSync={triggerSync}
          onResetData={handleResetData}
          syncError={syncError}
          cloudStats={cloudStats}
        />
      )}

      {screen === 'codePaths' && (
        <CodePathsScreen
          onBack={() => setScreen('home')}
          onOpenSql={() => setScreen('sqlPath')}
        />
      )}

      {screen === 'sqlPath' && (
        <SqlPathScreen
          meta={meta}
          onBack={() => setScreen('home')}
          onContinue={openSqlResume}
          onOpenChapter={(chapterId) => { setSqlChapterId(chapterId); setScreen('sqlChapter'); }}
        />
      )}

      {screen === 'sqlChapter' && (
        <SqlChapterScreen
          chapterId={sqlChapterId}
          meta={meta}
          onBack={() => setScreen('sqlPath')}
          onOpenQuestion={(questionId) => { setSqlQuestionId(questionId); setScreen('sqlChallenge'); }}
        />
      )}

      {screen === 'sqlChallenge' && (
        <SqlChallengeScreen
          key={sqlQuestionId}
          questionId={sqlQuestionId}
          meta={meta}
          onBack={() => setScreen('sqlChapter')}
          onOpenReference={() => {
            setReferenceOrigin({ type: 'sql', chapterId: sqlChapterId, questionId: sqlQuestionId });
            setScreen('reference');
          }}
          onSaveResume={saveSqlChallengeResume}
          onRetry={(question) => saveSqlChallengeResume({ screen: 'sqlChallenge', chapterId: question.chapterId, questionId: question.id, hearts: SQL_MAX_HEARTS, debugStepIndex: 0, debugAnswers: [] })}
          onFail={(question) => saveSqlChallengeResume({ screen: 'sqlChallenge', chapterId: question.chapterId, questionId: question.id, hearts: 0 })}
          onComplete={completeSql}
        />
      )}

      {screen === 'world' && (
        <WorldScreen
          onSelectWorld={(w) => { setWorld(w); setScreen('map'); }}
          onBack={() => setScreen('home')}
        />
      )}

      {screen === 'map' && (
        <MapScreen
          world={world}
          progress={progress}
          quizProgress={quizProgress}
          onSelectCountry={(c) => { setCountry(c); setScreen('language'); }}
          onBack={() => setScreen('world')}
        />
      )}

      {screen === 'reference' && (
        <ReferenceScreen
          onBack={() => {
            setReferenceOrigin(null);
            setScreen('home');
          }}
          progress={progress}
          scores={scores}
          meta={meta}
          review={meta.review}
          onNavigate={(worldId) => { setWorld(worldId); setScreen('map'); }}
          originContext={referenceOrigin}
          onReturnToOrigin={() => {
            if (referenceOrigin?.type === 'sql') {
              setSqlChapterId(referenceOrigin.chapterId || '01_select');
              setSqlQuestionId(referenceOrigin.questionId || '');
              setScreen('sqlChallenge');
              return;
            }
            setReferenceOrigin(null);
            setScreen('home');
          }}
        />
      )}

      {screen === 'progress' && (
        <ProgressScreen
          progress={progress}
          quizProgress={quizProgress}
          scores={scores}
          mistakes={mistakes}
          meta={meta}
          onBack={() => setScreen('home')}
        />
      )}

      {screen === 'language' && country && (
        <LanguageScreen
          country={country}
          world={world}
          progress={progress}
          meta={meta}
          onSelectLanguage={(l) => { setLanguage(l); setScreen('challenge'); }}
          onSelectFinalMission={(mission, lang) => { setLanguage(lang); setScreen('finalMission'); }}
          onBack={() => setScreen('map')}
        />
      )}

      {screen === 'challenge' && country && language && (() => {
        const attemptId = buildAttemptId(world, country.id, language.id);
        const progressKey = buildProgressKey(world, country.id, language.id);
        const questions = (WORLD_CHALLENGES[world] || {})[country.id]?.[language.id] || [];
        const entryState = resolveStageEntry(meta, attemptId, !!progress[progressKey]);
        const entryIdx = entryState.mode === 'active'
          ? resolveAttemptIndex(entryState.attempt, questions)
          : 0;
        return (
          <ChallengeScreen
            key={`${world}_${country.id}_${language.id}`}
            country={country}
            language={language}
            world={world}
            initialIdx={entryIdx}
            initialDebugStepIndex={entryState.attempt?.debugStepIndex || 0}
            initialDebugAnswers={entryState.attempt?.debugAnswers}
            initialLives={entryState.mode === 'fresh' || entryState.mode === 'cleared' ? MAX_LIVES : getInitialLives(meta, attemptId)}
            entryState={entryState}
            onSaveIdx={handleChallengeSaveIdx}
            onSaveScore={(s) => saveScore(world, country.id, language.id, s)}
            onMistake={(qId) => saveMistake(world, country.id, language.id, qId)}
            onLivesChange={(lives, patch = {}) => {
              const { meta: mt } = latestRef.current;
              const nextMeta = updateAttemptLives(mt, attemptId, lives, world, country.id, language.id, null, patch);
              setMeta(nextMeta);
              saveToLocal(getStorageKey(latestRef.current.user?.id, 'meta'), nextMeta);
              syncToCloud();
            }}
            onRestart={() => {
              const { meta: mt } = latestRef.current;
              const nextMeta = resetAttemptLives(mt, attemptId);
              setMeta(nextMeta);
              saveToLocal(getStorageKey(latestRef.current.user?.id, 'meta'), nextMeta);
              syncToCloud();
            }}
            onBack={() => setScreen('language')}
            onWorldMap={() => setScreen('map')}
            onComplete={(cId) => handleComplete(world, cId, language.id)}
          />
        );
      })()}

      {screen === 'finalMission' && country && language && (() => {
        const mission = getFinalMission(world, country.id, language.id);
        const attemptId = buildAttemptId(world, country.id, language.id, mission?.id);
        const isCleared = mission ? isFinalMissionCleared(meta, mission.id) : false;
        const entryState = resolveStageEntry(meta, attemptId, isCleared);
        const entryIdx = entryState.mode === 'active'
          ? resolveAttemptIndex(entryState.attempt, mission?.questions || [])
          : 0;
        return (
          <ChallengeScreen
            key={`${world}_${country.id}_${language.id}_final`}
            country={country}
            language={language}
            world={world}
            mission={mission}
            initialIdx={entryIdx}
            initialDebugStepIndex={entryState.attempt?.debugStepIndex || 0}
            initialDebugAnswers={entryState.attempt?.debugAnswers}
            initialLives={entryState.mode === 'fresh' || entryState.mode === 'cleared' ? MAX_LIVES : getInitialLives(meta, attemptId)}
            entryState={entryState}
            onSaveScore={(s) => saveScore(world, country.id, language.id, s)}
            onMistake={(qId) => saveMistake(world, country.id, language.id, qId)}
            onLivesChange={(lives, patch = {}) => {
              const { meta: mt } = latestRef.current;
              const nextMeta = updateAttemptLives(mt, attemptId, lives, world, country.id, language.id, mission?.id, patch);
              setMeta(nextMeta);
              saveToLocal(getStorageKey(latestRef.current.user?.id, 'meta'), nextMeta);
              syncToCloud();
            }}
            onRestart={() => {
              const { meta: mt } = latestRef.current;
              const nextMeta = resetAttemptLives(mt, attemptId);
              setMeta(nextMeta);
              saveToLocal(getStorageKey(latestRef.current.user?.id, 'meta'), nextMeta);
              syncToCloud();
            }}
            onBack={() => setScreen('language')}
            onWorldMap={() => setScreen('map')}
            onSaveIdx={handleFinalMissionSaveIdx}
            onComplete={(_, completion) => {
              if (mission) handleFinalMissionComplete({ ...mission, worldId: world, countryId: country.id, languageId: language.id }, completion);
            }}
          />
        );
      })()}
    </>
  );
}
