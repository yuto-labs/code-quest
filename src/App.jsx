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

const PROGRESS_KEY = 'cq_progress';
const QUIZ_KEY     = 'cq_quiz';
const SCORE_KEY    = 'cq_scores';

function load(key) {
  try { return JSON.parse(localStorage.getItem(key) || '{}'); }
  catch { return {}; }
}
function save(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

export default function App() {
  const [screen, setScreen]       = useState('title');
  const [country, setCountry]     = useState(null);
  const [language, setLanguage]   = useState(null);
  const [progress, setProgress]   = useState(() => load(PROGRESS_KEY));
  const [quizProgress, setQuizProgress] = useState(() => load(QUIZ_KEY));
  const [scores, setScores]       = useState(() => load(SCORE_KEY));
  const [syncing, setSyncing]     = useState(false);
  const syncTimer = useRef(null);

  const { user, loading: authLoading, sendOtp, verifyOtp, signOut } = useAuth();

  useEffect(() => {
    if (!user) return;
    (async () => {
      setSyncing(true);
      const cloud = await loadCloudProgress(user.id);
      if (cloud) {
        const merged = mergeProgressData({ progress, quizProgress, scores }, cloud);
        setProgress(merged.progress);
        setQuizProgress(merged.quizProgress);
        setScores(merged.scores);
        save(PROGRESS_KEY, merged.progress);
        save(QUIZ_KEY, merged.quizProgress);
        save(SCORE_KEY, merged.scores);
        await saveCloudProgress(user.id, merged.progress, merged.quizProgress, merged.scores);
      } else {
        await saveCloudProgress(user.id, progress, quizProgress, scores);
      }
      setSyncing(false);
    })();
  }, [user?.id]);

  const syncToCloud = (p, qp, sc) => {
    if (!user) return;
    clearTimeout(syncTimer.current);
    syncTimer.current = setTimeout(async () => {
      setSyncing(true);
      await saveCloudProgress(user.id, p, qp, sc);
      setSyncing(false);
    }, 1000);
  };

  const saveScore = (countryId, langId, newScore) => {
    const key = `${countryId}_${langId}`;
    if (newScore > (scores[key] || 0)) {
      const next = { ...scores, [key]: newScore };
      setScores(next);
      save(SCORE_KEY, next);
      syncToCloud(progress, quizProgress, next);
    }
  };

  const saveQuizIdx = (countryId, langId, idx) => {
    const key = `${countryId}_${langId}`;
    const next = { ...quizProgress, [key]: idx };
    setQuizProgress(next);
    save(QUIZ_KEY, next);
  };

  const handleComplete = (countryId, langId) => {
    const nextProgress = { ...progress, [`${countryId}_${langId}`]: true };
    setProgress(nextProgress);
    save(PROGRESS_KEY, nextProgress);

    const key = `${countryId}_${langId}`;
    const nextQuiz = { ...quizProgress };
    delete nextQuiz[key];
    setQuizProgress(nextQuiz);
    save(QUIZ_KEY, nextQuiz);

    syncToCloud(nextProgress, nextQuiz, scores);
    setScreen('map');
  };

  if (authLoading) {
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
