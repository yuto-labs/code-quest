import { useState, useEffect, useRef } from 'react';
import TitleScreen from './screens/TitleScreen';
import HomeScreen from './screens/HomeScreen';
import WorldScreen from './screens/WorldScreen';
import MapScreen from './screens/MapScreen';
import LanguageScreen from './screens/LanguageScreen';
import ChallengeScreen from './screens/ChallengeScreen';
import ReferenceScreen from './screens/ReferenceScreen';
import ProgressScreen from './screens/ProgressScreen';
import RewardToast from './components/RewardToast';
import { COUNTRIES } from './data/countries';
import { CHALLENGES } from './data/challenges';
import { EXECUTE_CHALLENGES } from './data/execute_challenges';
import { DEBUG_CHALLENGES } from './data/debug_challenges';
import { useAuth } from './hooks/useAuth';
import { loadCloudProgress, saveCloudProgress, mergeProgressData } from './lib/sync';
import { buildProgressKey, migrateProgressKeys } from './utils/progress';
import { emptyMeta, sanitizeMeta } from './utils/metadata';
import { getFinalMission } from './data/final_missions';

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

  const saveDebounceTimerRef = useRef(null);
  const syncIntervalRef = useRef(null);
  const rewardTimerRef = useRef(null);

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

  const latestRef = useRef({ progress, quizProgress, scores, meta, user, isUserDataLoading });
  useEffect(() => {
    latestRef.current = { progress, quizProgress, scores, meta, user, isUserDataLoading };
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

  const syncToCloud = (p, qp, sc, mt = meta) => {
    const targetUid = user?.id;
    if (!targetUid || latestRef.current.isUserDataLoading) return;

    clearTimeout(saveDebounceTimerRef.current);
    saveDebounceTimerRef.current = setTimeout(async () => {
      if (latestRef.current.user?.id !== targetUid) return;

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
    const uid = user?.id;
    if (newScore > (scores[key] || 0)) {
      const next = { ...scores, [key]: newScore };
      setScores(next);
      saveToLocal(getStorageKey(uid, 'scores'), next);
      syncToCloud(progress, quizProgress, next);
    }
  };

  const saveMeta = (nextMeta, p = progress, qp = quizProgress, sc = scores) => {
    const uid = user?.id;
    const clean = sanitizeMeta(nextMeta);
    setMeta(clean);
    saveToLocal(getStorageKey(uid, 'meta'), clean);
    syncToCloud(p, qp, sc, clean);
  };

  const saveResume = (patch) => {
    const nextMeta = {
      ...meta,
      resume: {
        ...(meta.resume || {}),
        ...patch,
        updatedAt: new Date().toISOString(),
      },
    };
    saveMeta(nextMeta);
  };

  const resolveResume = () => {
    const resume = meta.resume || {};
    if (!resume.worldId || !resume.countryId || !resume.languageId) return null;
    const countryObj = COUNTRIES.find(c => c.id === resume.countryId);
    const questions = (WORLD_CHALLENGES[resume.worldId] || {})[resume.countryId]?.[resume.languageId] || [];
    if (!countryObj) return null;
    if (resume.screen === 'map' || questions.length === 0) {
      return { ...resume, countryObj, questionIndex: 0, screen: 'map' };
    }
    const byId = questions.findIndex(q => q.id === resume.questionId);
    const fallback = Number.isInteger(resume.questionIndexFallback) ? resume.questionIndexFallback : 0;
    const questionIndex = byId >= 0 ? byId : Math.min(Math.max(fallback, 0), Math.max(questions.length - 1, 0));
    return { ...resume, countryObj, questionIndex, questions, screen: resume.screen === 'finalMission' ? 'finalMission' : 'challenge' };
  };

  const handleContinue = () => {
    const target = resolveResume();
    if (!target) return;
    setWorld(target.worldId);
    setCountry(target.countryObj);
    setLanguage({ id: target.languageId, name: target.languageId.toUpperCase(), emoji: target.languageId === 'javascript' ? '笞｡' : '錐' });
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

  const saveQuizIdx = (worldId, countryId, langId, idx, resumePatch = {}) => {
    const key = `${worldId}_${countryId}_${langId}`;
    const uid = user?.id;
    const next = { ...quizProgress, [key]: idx };
    setQuizProgress(next);
    saveToLocal(getStorageKey(uid, 'quiz'), next);
    const nextMeta = {
      ...meta,
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
    syncToCloud(progress, next, scores, nextMeta);
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
    const uid = user?.id;
    const key = `${worldId}_${countryId}_${langId}`;
    const nextProgress = { ...progress, [key]: true };
    setProgress(nextProgress);
    saveToLocal(getStorageKey(uid, 'progress'), nextProgress);

    const nextQuiz = { ...quizProgress };
    delete nextQuiz[key];
    setQuizProgress(nextQuiz);
    saveToLocal(getStorageKey(uid, 'quiz'), nextQuiz);

    const nextMeta = {
      ...meta,
      resume: {
        worldId,
        countryId,
        languageId: langId,
        screen: 'map',
        updatedAt: new Date().toISOString(),
      },
    };
    setMeta(nextMeta);
    saveToLocal(getStorageKey(uid, 'meta'), nextMeta);
    syncToCloud(nextProgress, nextQuiz, scores, nextMeta);
    showReward('stage-unlocked', 'STAGE CLEARED');
    setScreen('map');
  };

  const handleFinalMissionComplete = (mission) => {
    const uid = user?.id;
    const nextMeta = {
      ...meta,
      finalMissions: {
        ...(meta.finalMissions || {}),
        [mission.id]: {
          completedAt: new Date().toISOString(),
          worldId: mission.worldId,
          countryId: mission.countryId,
          languageId: mission.languageId,
        },
      },
      resume: {
        worldId: mission.worldId,
        countryId: mission.countryId,
        languageId: mission.languageId,
        screen: 'language',
        updatedAt: new Date().toISOString(),
      },
    };
    setMeta(nextMeta);
    saveToLocal(getStorageKey(uid, 'meta'), nextMeta);
    syncToCloud(progress, quizProgress, scores, nextMeta);
    showReward('language-emblem', 'FINAL MISSION CLEARED');
    setScreen('language');
  };

  const saveMistake = (worldId, countryId, langId, questionId) => {
    const key = `${worldId}_${countryId}_${langId}`;
    const uid = user?.id;
    const existing = mistakes[key] || [];
    const next = existing.includes(questionId) ? mistakes : { ...mistakes, [key]: [...existing, questionId] };
    const currentReview = meta.review?.[questionId] || {};
    const now = new Date().toISOString();
    const nextMeta = {
      ...meta,
      review: {
        ...(meta.review || {}),
        [questionId]: {
          ...currentReview,
          wrongCount: Math.max((currentReview.wrongCount || 0) + 1, currentReview.wrongCount || 0),
          hintCount: currentReview.hintCount || 0,
          lastWrongAt: now,
          lastReviewedAt: currentReview.lastReviewedAt || '',
          reviewDue: true,
          mistakeTags: [...new Set([...(currentReview.mistakeTags || []), worldId])].sort(),
          resolvedAt: currentReview.resolvedAt || '',
        },
      },
    };
    setMistakes(next);
    setMeta(nextMeta);
    saveToLocal(getStorageKey(uid, 'mistakes'), next);
    saveToLocal(getStorageKey(uid, 'meta'), nextMeta);
    syncToCloud(progress, quizProgress, scores, nextMeta);
  };

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
          onNavigate={(s) => setScreen(s === 'map' ? 'world' : s)}
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
          onBack={() => setScreen('home')}
          progress={progress}
          scores={scores}
          meta={meta}
          review={meta.review}
          onNavigate={(worldId) => { setWorld(worldId); setScreen('map'); }}
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

      {screen === 'challenge' && country && language && (
        <ChallengeScreen
          country={country}
          language={language}
          world={world}
          initialIdx={quizProgress[`${world}_${country.id}_${language.id}`] || 0}
          onSaveIdx={(idx, resumePatch) => saveQuizIdx(world, country.id, language.id, idx, resumePatch)}
          onSaveScore={(s) => saveScore(world, country.id, language.id, s)}
          onMistake={(qId) => saveMistake(world, country.id, language.id, qId)}
          onBack={() => setScreen('language')}
          onComplete={(cId) => handleComplete(world, cId, language.id)}
        />
      )}

      {screen === 'finalMission' && country && language && (
        <ChallengeScreen
          country={country}
          language={language}
          world={world}
          mission={getFinalMission(world, country.id, language.id)}
          initialIdx={meta.resume?.screen === 'finalMission' && meta.resume?.missionId === getFinalMission(world, country.id, language.id)?.id
            ? (meta.resume.questionIndexFallback || 0)
            : 0}
          onSaveIdx={(idx, resumePatch) => saveResume({
            worldId: world,
            countryId: country.id,
            languageId: language.id,
            questionIndexFallback: idx,
            screen: 'finalMission',
            ...resumePatch,
          })}
          onSaveScore={(s) => saveScore(world, country.id, language.id, s)}
          onMistake={(qId) => saveMistake(world, country.id, language.id, qId)}
          onBack={() => setScreen('language')}
          onComplete={() => {
            const mission = getFinalMission(world, country.id, language.id);
            if (mission) handleFinalMissionComplete({ ...mission, worldId: world, countryId: country.id, languageId: language.id });
          }}
        />
      )}
    </>
  );
}
