import { useState, useEffect, useRef } from 'react';
import TitleScreen from './screens/TitleScreen';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import LanguageScreen from './screens/LanguageScreen';
import ChallengeScreen from './screens/ChallengeScreen';
import ReferenceScreen from './screens/ReferenceScreen';
import ProgressScreen from './screens/ProgressScreen';
import { useAuth } from './hooks/useAuth';
import { loadCloudProgress, saveCloudProgress, mergeProgressData } from './lib/sync';

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
  const [country, setCountry]     = useState(null);
  const [language, setLanguage]   = useState(null);
  const [progress, setProgress]   = useState({});
  const [quizProgress, setQuizProgress] = useState({});
  const [scores, setScores]       = useState({});
  const [syncing, setSyncing]     = useState(false);
  const [syncError, setSyncError] = useState('');
  const [cloudStats, setCloudStats] = useState(null); // null = 未確認, 0 = データなし, N = N件
  const [isUserDataLoading, setIsUserDataLoading] = useState(true);
  const [migrationDone, setMigrationDone] = useState(() => localStorage.getItem('cq_migrated') === 'true');

  const saveDebounceTimerRef = useRef(null);
  const syncIntervalRef = useRef(null);

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

  const latestRef = useRef(null);
  latestRef.current = { progress, quizProgress, scores, user, isUserDataLoading };

  // クラウドから pull して merge する（常に最新の ref 経由で state を読む）
  const pullFromCloudRef = useRef(null);
  pullFromCloudRef.current = async (uid) => {
    if (latestRef.current.isUserDataLoading) return;
    const cloud = await loadCloudProgress(uid);
    if (latestRef.current.user?.id !== uid) return;

    const { progress: lp, quizProgress: lqp, scores: ls } = latestRef.current;

    if (!cloud) {
      // クラウドにデータなし → ローカルデータを初回アップロード
      await saveCloudProgress(uid, lp, lqp, ls);
      if (latestRef.current.user?.id !== uid) return;
      setCloudStats(Object.keys(lp).length);
      return;
    }

    const cloudCount = Object.keys(cloud.progress || {}).length;
    setCloudStats(cloudCount);
    const merged = mergeProgressData({ progress: lp, quizProgress: lqp, scores: ls }, cloud);
    setProgress(merged.progress);
    setQuizProgress(merged.quizProgress);
    setScores(merged.scores);
    saveToLocal(getStorageKey(uid, 'progress'), merged.progress);
    saveToLocal(getStorageKey(uid, 'quiz'), merged.quizProgress);
    saveToLocal(getStorageKey(uid, 'scores'), merged.scores);
    await saveCloudProgress(uid, merged.progress, merged.quizProgress, merged.scores);
  };

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

        const localP = loadFromLocal(pKey);
        const localQ = loadFromLocal(qKey);
        const localS = loadFromLocal(sKey);

        if (uid) {
          const cloud = await loadCloudProgress(uid);
          if (latestRef.current.user?.id !== uid) return;

          if (cloud) {
            const merged = mergeProgressData({ progress: localP, quizProgress: localQ, scores: localS }, cloud);
            saveToLocal(pKey, merged.progress);
            saveToLocal(qKey, merged.quizProgress);
            saveToLocal(sKey, merged.scores);
            await saveCloudProgress(uid, merged.progress, merged.quizProgress, merged.scores);
            if (latestRef.current.user?.id !== uid) return;
            setProgress(merged.progress); setQuizProgress(merged.quizProgress); setScores(merged.scores);
            setCloudStats(Object.keys(merged.progress || {}).length);
          } else {
            await saveCloudProgress(uid, localP, localQ, localS);
            if (latestRef.current.user?.id !== uid) return;
            setProgress(localP); setQuizProgress(localQ); setScores(localS);
          }
        } else {
          setProgress(localP); setQuizProgress(localQ); setScores(localS);
        }
      } catch (e) {
        console.error("InitData Error:", e);
        const pKey = getStorageKey(uid, 'progress');
        const qKey = getStorageKey(uid, 'quiz');
        const sKey = getStorageKey(uid, 'scores');
        if (latestRef.current.user?.id === uid) {
          setProgress(loadFromLocal(pKey)); setQuizProgress(loadFromLocal(qKey)); setScores(loadFromLocal(sKey));
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

  const syncToCloud = (p, qp, sc) => {
    const targetUid = user?.id;
    if (!targetUid || latestRef.current.isUserDataLoading) return;

    clearTimeout(saveDebounceTimerRef.current);
    saveDebounceTimerRef.current = setTimeout(async () => {
      if (latestRef.current.user?.id !== targetUid) return;

      setSyncing(true);
      setSyncError('');
      try {
        await saveCloudProgress(targetUid, p, qp, sc);
      } catch (e) {
        setSyncError(e?.message || '保存エラー');
      } finally {
        setSyncing(false);
      }
    }, 1000);
  };

  const saveScore = (countryId, langId, newScore) => {
    const key = `${countryId}_${langId}`;
    const uid = user?.id;
    if (newScore > (scores[key] || 0)) {
      const next = { ...scores, [key]: newScore };
      setScores(next);
      saveToLocal(getStorageKey(uid, 'scores'), next);
      syncToCloud(progress, quizProgress, next);
    }
  };

  const saveQuizIdx = (countryId, langId, idx) => {
    const key = `${countryId}_${langId}`;
    const uid = user?.id;
    const next = { ...quizProgress, [key]: idx };
    setQuizProgress(next);
    saveToLocal(getStorageKey(uid, 'quiz'), next);
    syncToCloud(progress, next, scores);
  };

  const handleResetData = async () => {
    const uid = user?.id;
    clearTimeout(saveDebounceTimerRef.current);
    localStorage.removeItem(getStorageKey(uid, 'progress'));
    localStorage.removeItem(getStorageKey(uid, 'quiz'));
    localStorage.removeItem(getStorageKey(uid, 'scores'));
    setProgress({});
    setQuizProgress({});
    setScores({});
    setCloudStats(0);
    if (uid) {
      try { await saveCloudProgress(uid, {}, {}, {}); } catch (_) { /* silent */ }
    }
  };

  const handleComplete = (countryId, langId) => {
    const uid = user?.id;
    const nextProgress = { ...progress, [`${countryId}_${langId}`]: true };
    setProgress(nextProgress);
    saveToLocal(getStorageKey(uid, 'progress'), nextProgress);

    const key = `${countryId}_${langId}`;
    const nextQuiz = { ...quizProgress };
    delete nextQuiz[key];
    setQuizProgress(nextQuiz);
    saveToLocal(getStorageKey(uid, 'quiz'), nextQuiz);

    syncToCloud(nextProgress, nextQuiz, scores);
    setScreen('map');
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

      {screen === 'title' && (
        <TitleScreen onStart={() => setScreen('home')} />
      )}

      {screen === 'home' && (
        <HomeScreen
          progress={progress}
          onNavigate={setScreen}
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

      {screen === 'map' && (
        <MapScreen
          progress={progress}
          quizProgress={quizProgress}
          onSelectCountry={(c) => { setCountry(c); setScreen('language'); }}
          onBack={() => setScreen('home')}
        />
      )}

      {screen === 'reference' && (
        <ReferenceScreen onBack={() => setScreen('home')} />
      )}

      {screen === 'progress' && (
        <ProgressScreen
          progress={progress}
          quizProgress={quizProgress}
          scores={scores}
          onBack={() => setScreen('home')}
        />
      )}

      {screen === 'language' && country && (
        <LanguageScreen
          country={country}
          onSelectLanguage={(l) => { setLanguage(l); setScreen('challenge'); }}
          onBack={() => setScreen('map')}
        />
      )}

      {screen === 'challenge' && country && language && (
        <ChallengeScreen
          country={country}
          language={language}
          initialIdx={quizProgress[`${country.id}_${language.id}`] || 0}
          onSaveIdx={(idx) => saveQuizIdx(country.id, language.id, idx)}
          onSaveScore={(s) => saveScore(country.id, language.id, s)}
          onBack={() => setScreen('language')}
          onComplete={(cId) => handleComplete(cId, language.id)}
        />
      )}
    </>
  );
}
