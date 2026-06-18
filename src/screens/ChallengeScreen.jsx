/* eslint-disable react-hooks/refs, react-hooks/set-state-in-effect */
import { useState, useEffect, useMemo, useRef } from 'react';
import { CHALLENGES } from '../data/challenges';
import { EXECUTE_CHALLENGES } from '../data/execute_challenges';
import { DEBUG_CHALLENGES } from '../data/debug_challenges';
import WireframeBackground from '../components/WireframeBackground';
import { getColorForCountry } from '../utils/mapColors';

const WORLD_CHALLENGES = {
  decode:  CHALLENGES,
  execute: EXECUTE_CHALLENGES,
  debug:   DEBUG_CHALLENGES,
};

const MAX_HEARTS = 3;
const BASE_SCORE = 100;

export default function ChallengeScreen({
  country, language, world = 'decode', onBack, onComplete,
  initialIdx = 0, onSaveIdx, onSaveScore, onMistake, mission = null,
}) {
  const isPC = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const questions = useMemo(
    () => mission?.questions || (WORLD_CHALLENGES[world] ?? CHALLENGES)[country.id]?.[language.id] || [],
    [country.id, language.id, mission?.questions, world],
  );
  const [idx, setIdx]       = useState(initialIdx);
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState('idle');
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // Game state
  const [hearts, setHearts]     = useState(MAX_HEARTS);
  const [score, setScore]       = useState(0);
  const [combo, setCombo]       = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Effect triggers
  const [screenEffect, setScreenEffect]         = useState(null);
  const [floatKey, setFloatKey]                 = useState(0);
  const [floatText, setFloatText]               = useState('');
  const [showCombo, setShowCombo]               = useState(false);
  const [comboDisplay, setComboDisplay]         = useState(0); // fix: use separate state so popup shows correct value
  const [shakingHeartIdx, setShakingHeartIdx]   = useState(-1);
  const [scorePop, setScorePop]                 = useState(false);
  const [showCorrectOverlay, setShowCorrectOverlay] = useState(false);

  // new question types
  const [selectedOption,    setSelectedOption]    = useState(null);
  const [blankAnswers,      setBlankAnswers]      = useState([]);
  const [debugStepIdx,      setDebugStepIdx]      = useState(0);
  const [debugStepAnswers,  setDebugStepAnswers]  = useState([]);
  const [orderingSelection, setOrderingSelection] = useState([]);

  // Track whether clear was earned this session (vs reload with initialIdx >= questions.length)
  const clearedJustNow = useRef(false);
  // Track which question indices have already shown the CORRECT overlay this session
  const correctShownForIdx = useRef(new Set());
  // Continent color for this country — used on clear panel and effects
  const continentColor = getColorForCountry(country.id);

  // fix: track all timers so we can cancel them on unmount / retry
  const timersRef = useRef([]);
  const debugSkipPersistRef = useRef(null);
  const schedule = (fn, delay) => {
    const id = setTimeout(fn, delay);
    timersRef.current.push(id);
    return id;
  };
  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  useEffect(() => () => clearTimers(), []);

  useEffect(() => {
    setAnswer('');
    setStatus('idle');
    setShowHint(false);
    setShowExplanation(false);
    setSelectedOption(null);
    setBlankAnswers([]);
    setDebugStepIdx(0);
    setDebugStepAnswers([]);
    setOrderingSelection([]);
  }, [idx]);

  useEffect(() => {
    const q = questions[idx];
    if (q?.questionType !== 'debug-step') return;

    const storageKey = `cq_debug_step_${world}_${country.id}_${language.id}_${q.id}`;
    debugSkipPersistRef.current = storageKey;
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
      const nextAnswers = Array.isArray(saved.answers) ? saved.answers : [];
      const nextStep = Number.isInteger(saved.stepIdx)
        ? Math.min(Math.max(saved.stepIdx, 0), Math.max((q.steps?.length || 1) - 1, 0))
        : 0;
      setDebugStepAnswers(nextAnswers);
      setDebugStepIdx(nextStep);
      setSelectedOption(nextAnswers[nextStep] ?? null);
    } catch {
      setDebugStepAnswers([]);
      setDebugStepIdx(0);
      setSelectedOption(null);
    }
  }, [world, country.id, language.id, idx, questions]);

  useEffect(() => {
    const q = questions[idx];
    if (q?.questionType !== 'debug-step') return;

    const storageKey = `cq_debug_step_${world}_${country.id}_${language.id}_${q.id}`;
    if (debugSkipPersistRef.current === storageKey) {
      debugSkipPersistRef.current = null;
      return;
    }

    localStorage.setItem(storageKey, JSON.stringify({
      stepIdx: debugStepIdx,
      answers: debugStepAnswers,
    }));
  }, [world, country.id, language.id, idx, questions, debugStepIdx, debugStepAnswers]);

  useEffect(() => {
    const q = questions[idx];
    if (!q) return;
    onSaveIdx?.(idx, {
      questionId: q.id,
      debugStepIndex: q.questionType === 'debug-step' ? debugStepIdx : undefined,
      debugAnswers: q.questionType === 'debug-step' ? debugStepAnswers : undefined,
      screen: mission ? 'finalMission' : 'challenge',
      missionId: mission?.id,
    });
  }, [idx, debugStepIdx, debugStepAnswers, mission, onSaveIdx, questions]);

  // Enterキーを document レベルで捕捉（input が disabled でも発火）
  const enterActionRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (e.key !== 'Enter') return;
      e.preventDefault();
      enterActionRef.current?.();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const resetGame = () => {
    clearTimers();
    clearedJustNow.current = false;
    correctShownForIdx.current = new Set();
    setIdx(0);
    setHearts(MAX_HEARTS);
    setScore(0);
    setCombo(0);
    setComboDisplay(0);
    setGameOver(false);
    setStatus('idle');
    setAnswer('');
    setScreenEffect(null);
    setShowCorrectOverlay(false);
    setShakingHeartIdx(-1);
    setSelectedOption(null);
    setBlankAnswers([]);
    setDebugStepIdx(0);
    setDebugStepAnswers([]);
    setOrderingSelection([]);
    onSaveIdx?.(0, { questionId: questions[0]?.id, debugStepIndex: 0, debugAnswers: [] });
  };

  const handleBack = () => {
    clearTimers();
    onBack();
  };

  // ── ゲームオーバー画面 ────────────────────────
  if (gameOver) {
    enterActionRef.current = resetGame;
    return (
      <div style={styles.wrap} className="fade-in">
        <WireframeBackground countryId={country.id} />
        <div style={styles.complete}>
          <div style={{ fontSize: 'clamp(48px, 12vw, 72px)' }}>💀</div>
          <div style={{ ...styles.completeTitle, color: 'var(--danger)' }}>GAME OVER</div>
          <div style={styles.completeSub}>ライフがなくなりました</div>
          <div style={styles.finalScore}>
            <span style={{ fontSize: 7, color: 'var(--text-dim)' }}>SCORE</span>
            <span style={{ fontSize: 'clamp(18px, 5vw, 28px)', color: 'var(--accent2)' }}>
              {score.toLocaleString()}
            </span>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
            <button
              className="pixel-btn"
              style={{ borderColor: 'var(--danger)', color: 'var(--danger)', fontSize: 8 }}
              onClick={resetGame}
            >
              🔄 RETRY
            </button>
            <button className="pixel-btn" style={{ fontSize: 8 }} onClick={handleBack}>
              ◀ BACK
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── クリア画面 ────────────────────────────────
  if (!questions[idx]) {
    const isNewClear = clearedJustNow.current;
    const handleReturn = () => { onSaveScore?.(score); onComplete(country.id); };
    enterActionRef.current = handleReturn;

    const STARS = [
      { top: '18%', left: '12%',  delay: '0s',    char: '✦' },
      { top: '14%', right: '14%', delay: '0.12s', char: '★' },
      { top: '38%', left: '6%',   delay: '0.22s', char: '✧' },
      { top: '35%', right: '8%',  delay: '0.08s', char: '✦' },
      { top: '62%', left: '10%',  delay: '0.18s', char: '✴' },
      { top: '60%', right: '10%', delay: '0.30s', char: '✧' },
    ];

    return (
      <div style={{ ...styles.wrap, overflowY: 'auto' }} className="fade-in">
        <WireframeBackground countryId={country.id} />

        {/* Stars — only on fresh clear */}
        {isNewClear && STARS.map((s, i) => (
          <div
            key={i}
            className="clear-star"
            style={{
              position: 'fixed',
              top: s.top,
              left: s.left,
              right: s.right,
              fontSize: 18,
              color: continentColor,
              pointerEvents: 'none',
              zIndex: 5,
              animationDelay: s.delay,
            }}
          >
            {s.char}
          </div>
        ))}

        <div style={{
          ...styles.complete,
          justifyContent: 'flex-start',
          paddingTop: 'clamp(32px, 10vh, 72px)',
        }}>
          {/* Country emoji */}
          <div style={{
            fontSize: 'clamp(40px, 10vw, 60px)',
            animation: isNewClear ? 'clearCountryIn 0.45s 0.05s ease both' : 'none',
          }}>
            {country.emoji}
          </div>

          {/* Localized country name */}
          <div style={{
            fontSize: 'clamp(16px, 4.5vw, 26px)',
            color: continentColor,
            textShadow: `0 0 10px ${continentColor}aa, 0 0 24px ${continentColor}55, 2px 2px 0 #110011`,
            letterSpacing: 3,
            animation: isNewClear ? 'clearCountryIn 0.45s 0.18s ease both' : 'none',
          }}>
            {country.nameJa || country.name}
          </div>

          {/* CLEAR */}
          <div style={{
            fontSize: 'clamp(28px, 8vw, 52px)',
            color: continentColor,
            textShadow: `0 0 14px ${continentColor}, 0 0 32px ${continentColor}bb, 0 0 60px ${continentColor}55, 3px 3px 0 #110011`,
            letterSpacing: 6,
            animation: isNewClear
              ? 'clearCountryIn 0.5s 0.35s ease both, clearTextGlow 2s 0.85s ease-in-out infinite'
              : 'clearTextGlow 2s 0s ease-in-out infinite',
          }}>
            CLEAR
          </div>

          {/* Border accent line */}
          <div style={{
            width: 'clamp(140px, 40vw, 260px)',
            height: 2,
            background: `linear-gradient(90deg, transparent, ${continentColor}88, transparent)`,
            margin: '4px 0',
            animation: isNewClear ? 'clearCountryIn 0.4s 0.5s ease both' : 'none',
          }} />

          {/* Score */}
          <div style={{
            ...styles.finalScore,
            border: `2px solid ${continentColor}55`,
            animation: isNewClear ? 'clearCountryIn 0.4s 0.55s ease both' : 'none',
          }}>
            <div style={{ fontSize: 7, color: 'var(--text-dim)' }}>FINAL SCORE</div>
            <div style={{ fontSize: 'clamp(20px, 6vw, 32px)', color: 'var(--accent2)' }}>
              {score.toLocaleString()}
            </div>
          </div>

          {/* Hearts */}
          <div style={{
            display: 'flex',
            gap: 6,
            margin: '4px 0 8px',
            animation: isNewClear ? 'clearCountryIn 0.4s 0.65s ease both' : 'none',
          }}>
            {Array.from({ length: MAX_HEARTS }).map((_, i) => (
              <span key={i} style={{ fontSize: 22, opacity: i < hearts ? 1 : 0.2 }}>
                {i < hearts ? '❤️' : '🖤'}
              </span>
            ))}
          </div>

          {/* Button — always visible and interactive immediately */}
          <button
            className="pixel-btn"
            style={{
              marginTop: 16,
              borderColor: continentColor,
              color: continentColor,
              boxShadow: `0 0 12px ${continentColor}44`,
            }}
            onClick={handleReturn}
          >
            ワールドマップへ戻る
          </button>
        </div>
      </div>
    );
  }

  // ── 通常クイズ ────────────────────────────────
  const q = questions[idx];
  const qType        = q.questionType || 'fill-blank';
  const isDebugStep  = qType === 'debug-step';

  // debug-step: resolve current step
  const currentStep  = isDebugStep ? (q.steps?.[debugStepIdx] ?? null) : null;
  const stepCount    = isDebugStep ? (q.steps?.length ?? 0) : 0;
  const firstContextStep = isDebugStep
    ? (q.steps?.find(step => step.code || step.prompt || step.context || step.description) ?? null)
    : null;

  // DEBUG uses the parent question as the canonical scenario/code.
  // If old data lacks parent fields, fall back to the first step that has them.
  const debugScenario = q.description || q.prompt || q.context || firstContextStep?.prompt || firstContextStep?.context || firstContextStep?.description || '';
  const debugCode     = q.code || firstContextStep?.code || '';

  const codeSource   = isDebugStep ? debugCode : (q.code ?? '');
  const codeLines    = codeSource ? codeSource.split('\n') : [];

  // text fields, normalised across decode/execute/debug schemas
  // debug-step: situationText = step.prompt (context), questionLabel = step.question (what to answer)
  const situationText      = isDebugStep ? debugScenario : (q.description || q.prompt || '');
  const questionLabel      = isDebugStep ? (currentStep?.question ?? null) : null;
  const currentHint        = isDebugStep ? (currentStep?.hint ?? q.hint ?? '') : (q.hint ?? '');
  const currentExplanation = isDebugStep ? (currentStep?.explanation ?? q.explanation ?? '') : (q.explanation ?? '');
  const currentOptions     = isDebugStep ? (currentStep?.options ?? []) : (q.options ?? []);
  const correctAnswer      = isDebugStep ? (currentStep?.answer ?? '') : (q.answer ?? q.blank ?? '');
  const priorDebugAnswers  = isDebugStep ? debugStepAnswers.slice(0, debugStepIdx) : [];

  // fix: (idx+1)/length so Q1 shows > 0%
  const progress        = Math.round(((idx + 1) / questions.length) * 100);
  const comboMultiplier = Math.min(combo + 1, 5);

  const canSubmit = (() => {
    if (qType === 'fill-blank')        return answer.trim().length > 0;
    if (qType === 'multiple-blanks')   return blankAnswers.length > 0 && blankAnswers.every(a => a.trim().length > 0);
    if (qType === 'code-ordering')     return orderingSelection.length === (q.blocks?.length ?? 0);
    return selectedOption !== null; // multiple-choice, output-predict, implementation-selection, debug-step
  })();

  const fireCorrect = () => {
    const newCombo = combo + 1;
    const mult     = Math.min(newCombo, 5);
    const earned   = BASE_SCORE * mult;
    setCombo(newCombo);
    setScore(s => s + earned);
    setShowExplanation(true);
    setFloatText(`+${earned}${mult >= 2 ? ` \xd7${mult}` : ''}`);
    setFloatKey(k => k + 1);
    if (newCombo >= 2) {
      setComboDisplay(newCombo);
      setShowCombo(true);
      schedule(() => setShowCombo(false), 1300);
    }
    setScorePop(true);
    schedule(() => setScorePop(false), 400);
    setScreenEffect('correct');
    schedule(() => setScreenEffect(null), 400);

    // CORRECT overlay — once per question index per session
    if (!correctShownForIdx.current.has(idx)) {
      correctShownForIdx.current.add(idx);
      setShowCorrectOverlay(true);
      schedule(() => setShowCorrectOverlay(false), 950);
    }
  };

  const fireWrong = () => {
    const newHearts = hearts - 1;
    setCombo(0);
    setHearts(newHearts);
    setShakingHeartIdx(newHearts);
    setScreenEffect('wrong');
    schedule(() => setScreenEffect(null), 400);
    schedule(() => setShakingHeartIdx(-1), 500);
    if (newHearts <= 0) schedule(() => setGameOver(true), 750);
    if (q?.id) onMistake?.(q.id);
  };

  const handleSubmit = () => {
    let correct;
    if (qType === 'fill-blank') {
      correct = answer.trim() === (q.blank ?? q.answer ?? '').trim();
    } else if (qType === 'multiple-blanks') {
      correct = (q.blanks ?? []).every((b, i) => (blankAnswers[i] ?? '').trim() === b.trim());
    } else if (qType === 'code-ordering') {
      const expected = q.answer ?? [];
      correct = orderingSelection.length === expected.length &&
                orderingSelection.every((b, i) => b === expected[i]);
    } else {
      correct = selectedOption === correctAnswer;
    }
    if (isDebugStep && selectedOption !== null) {
      setDebugStepAnswers(prev => {
        const next = prev.slice(0, debugStepIdx);
        next[debugStepIdx] = selectedOption;
        return next;
      });
    }
    setStatus(correct ? 'correct' : 'wrong');
    if (correct) fireCorrect(); else fireWrong();
  };

  const handleNext = () => {
    // debug-step: step-by-step advance before moving to next question
    if (isDebugStep && status === 'correct' && debugStepIdx < stepCount - 1) {
      const nextStepIdx = debugStepIdx + 1;
      setDebugStepIdx(nextStepIdx);
      setSelectedOption(debugStepAnswers[nextStepIdx] ?? null);
      setStatus('idle');
      setShowHint(false);
      setShowExplanation(false);
      return;
    }
    const nextIdx = idx + 1;
    if (nextIdx >= questions.length) {
      clearedJustNow.current = true;
    }
    setIdx(nextIdx);
    onSaveIdx?.(nextIdx, { questionId: questions[nextIdx]?.id });
  };

  const handleRetry = () => {
    setStatus('idle');
    setAnswer('');
    if (qType === 'code-ordering') setOrderingSelection([]);
  };

  // Enter key bindings
  if (status === 'idle' && canSubmit) enterActionRef.current = handleSubmit;
  else if (status === 'correct')      enterActionRef.current = handleNext;
  else if (status === 'wrong')        enterActionRef.current = handleRetry;
  else                                enterActionRef.current = null;

  // helper: render a code line that may contain ___BLANK_N___ placeholders
  const renderBlankLine = (line) => {
    const parts = line.split(/(___BLANK_\d+___)/);
    return parts.map((part, j) => {
      const m = part.match(/___BLANK_(\d+)___/);
      if (!m) return <span key={j}>{part}</span>;
      const bi = parseInt(m[1]);
      return (
        <input
          key={j}
          style={{
            ...styles.blankInput,
            borderColor: status === 'correct' ? 'var(--accent)'
                        : status === 'wrong'   ? 'var(--danger)'
                        : 'var(--accent2)',
            color: status === 'correct' ? 'var(--accent)'
                 : status === 'wrong'   ? 'var(--danger)'
                 : 'var(--accent2)',
          }}
          value={blankAnswers[bi] ?? ''}
          onChange={e => {
            if (status !== 'idle') return;
            setBlankAnswers(prev => { const n = [...prev]; n[bi] = e.target.value; return n; });
          }}
          placeholder={`?${bi}`}
          disabled={status !== 'idle'}
          autoFocus={isPC && bi === 0}
        />
      );
    });
  };

  const showMCOptions   = qType === 'multiple-choice' || qType === 'output-predict' || isDebugStep || qType === 'implementation-selection';
  const optionsUseCode  = qType === 'implementation-selection';

  return (
    <div
      style={{
        ...styles.wrap,
        animation: screenEffect === 'wrong' ? 'shake 0.4s ease' : 'none',
      }}
      className={screenEffect !== 'wrong' ? 'fade-in' : undefined}
    >
      <WireframeBackground countryId={country.id} />
      {/* スクリーンフラッシュオーバーレイ */}
      {screenEffect && (
        <div style={{
          position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 200,
          background: screenEffect === 'correct'
            ? 'rgba(0,255,136,0.18)'
            : 'rgba(255,68,68,0.22)',
          animation: 'flashFade 0.4s ease forwards',
        }} />
      )}

      {/* CORRECT overlay — neon LED dot-matrix style, non-blocking */}
      {showCorrectOverlay && (
        <div style={{
          position: 'fixed', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 400, pointerEvents: 'none',
          animation: 'correctFade 0.95s ease forwards',
        }}>
          <div style={{ position: 'relative', textAlign: 'center', animation: 'correctScale 0.95s ease forwards' }}>
            {/* Sparkle stars — absolute inside scaled container */}
            {[
              { top: -28, left:  6,  char: '✦', delay: '0s'    },
              { top: -24, right: 8,  char: '★', delay: '0.08s' },
              { top:  6,  left: -30, char: '✧', delay: '0.15s' },
              { top:  6,  right:-30, char: '✴', delay: '0.06s' },
              { bottom:-24, left: 18, char: '✦', delay: '0.20s' },
              { bottom:-20, right:14, char: '✧', delay: '0.28s' },
            ].map((s, i) => (
              <div
                key={i}
                className="correct-star"
                style={{
                  position: 'absolute',
                  fontSize: 11,
                  color: '#00ff88',
                  top: s.top,
                  left: s.left,
                  right: s.right,
                  bottom: s.bottom,
                  animationDelay: s.delay,
                }}
              >
                {s.char}
              </div>
            ))}
            <div style={{
              fontFamily: 'var(--pixel-font)',
              fontSize: 'clamp(18px, 4.5vw, 26px)',
              color: '#00ff88',
              textShadow: '0 0 8px #00ff88, 0 0 18px #00ff88, 0 0 36px #00ff8866, 2px 2px 0 #002211',
              letterSpacing: 4,
              background: 'rgba(0,6,3,0.90)',
              border: '2px solid #00ff8833',
              padding: '12px 24px',
              boxShadow: '0 0 24px #00ff8818, inset 0 0 16px rgba(0,255,136,0.04)',
              whiteSpace: 'nowrap',
            }}>
              CORRECT
            </div>
          </div>
        </div>
      )}

      {/* コンボポップアップ */}
      {showCombo && (
        <div style={{
          position: 'fixed', top: '28%', left: '50%',
          zIndex: 300, textAlign: 'center', pointerEvents: 'none',
          animation: 'comboPopup 1.3s ease forwards',
        }}>
          <div style={{
            fontSize: 'clamp(16px, 4.5vw, 24px)',
            color: 'var(--accent2)',
            textShadow: '3px 3px 0 #332200, 0 0 20px #ff8800',
          }}>
            🔥 {comboDisplay} COMBO!
          </div>
          <div style={{ fontSize: 8, color: 'var(--accent)', marginTop: 4 }}>
            ×{Math.min(comboDisplay, 5)} BONUS
          </div>
        </div>
      )}

      {/* フローティングスコアテキスト */}
      {floatKey > 0 && (
        <div
          key={floatKey}
          style={{
            position: 'fixed', top: 72, right: 20,
            fontFamily: 'var(--pixel-font)',
            fontSize: 'clamp(11px, 3vw, 15px)',
            color: 'var(--accent)',
            textShadow: '2px 2px 0 #003322, 0 0 10px var(--accent)',
            pointerEvents: 'none', zIndex: 300,
            animation: 'floatUp 1s ease forwards',
          }}
        >
          {floatText}
        </div>
      )}

      {/* 途中再開バナー */}
      {initialIdx > 0 && idx === initialIdx && (
        <div style={styles.resumeBanner}>
          ▶ Q{initialIdx + 1}から再開しました
        </div>
      )}

      {/* ヘッダー */}
      <div style={styles.header}>
        <button style={styles.back} onClick={handleBack}>◀ BACK</button>

        <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
          {Array.from({ length: MAX_HEARTS }).map((_, i) => (
            <span
              key={i}
              style={{
                fontSize: 17,
                opacity: i < hearts ? 1 : 0.2,
                display: 'inline-block',
                animation: shakingHeartIdx === i ? 'heartBreak 0.5s ease' : 'none',
                transition: 'opacity 0.4s',
              }}
            >
              {i < hearts ? '❤️' : '🖤'}
            </span>
          ))}
        </div>

        <div style={styles.info}>
          <span style={styles.flag}>{country.emoji}</span>
          <span style={styles.langBadge}>{language.emoji} {language.name}</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
          <div style={{ fontSize: 6, color: 'var(--text-dim)' }}>SCORE</div>
          <div style={{
            fontSize: 'clamp(10px, 2.5vw, 13px)',
            color: 'var(--accent2)',
            display: 'inline-block',
            animation: scorePop ? 'scorePop 0.4s ease' : 'none',
          }}>
            {score.toLocaleString()}
          </div>
          {combo >= 2 && (
            <div style={{ fontSize: 6, color: '#ff8800' }}>×{comboMultiplier}</div>
          )}
        </div>

        <div style={styles.progress}>
          <span style={styles.progressLabel}>{idx + 1} / {questions.length}</span>
          <div className="xp-bar" style={{ width: 80 }}>
            <div className="xp-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div style={styles.content}>
        <div style={styles.questionNum}>{mission ? 'FINAL MISSION' : `QUESTION ${idx + 1}`}</div>
        <div style={styles.title}>{mission?.title || q.title}</div>
        {mission && <div style={styles.missionBadge}>{mission.type}</div>}

        {/* debug-step ステップ進捗ヘッダー */}
        {isDebugStep && (
          <div style={styles.debugStepHeader}>
            <span style={styles.debugStepNum}>STEP {debugStepIdx + 1} / {stepCount}</span>
            {currentStep?.stepTitle && (
              <span style={styles.debugStepTitle}>{currentStep.stepTitle}</span>
            )}
          </div>
        )}

        {isDebugStep && (
          <div style={styles.debugSectionLabel}>ORIGINAL SCENARIO</div>
        )}
        <div style={styles.description}>{situationText}</div>

        {/* コードブロック（コードがある場合のみ） */}
        {codeLines.length > 0 && (
          <>
            {isDebugStep && (
              <div style={styles.debugSectionLabel}>ORIGINAL CODE</div>
            )}
            <div style={styles.codeBlock}>
            {codeLines.map((line, i) => (
              <div key={i} style={styles.codeLine}>
                <span style={styles.lineNum}>{i + 1}</span>
                {qType === 'fill-blank' && line.includes('___BLANK___') ? (
                  <span style={styles.codeText}>
                    {line.split('___BLANK___')[0]}
                    <input
                      style={{
                        ...styles.blankInput,
                        borderColor: status === 'correct' ? 'var(--accent)'
                                   : status === 'wrong'   ? 'var(--danger)'
                                   : 'var(--accent2)',
                        color: status === 'correct' ? 'var(--accent)'
                             : status === 'wrong'   ? 'var(--danger)'
                             : 'var(--accent2)',
                      }}
                      value={answer}
                      onChange={e => setAnswer(e.target.value)}
                      placeholder="???"
                      disabled={status !== 'idle'}
                      autoFocus={isPC}
                    />
                    {line.split('___BLANK___')[1]}
                  </span>
                ) : qType === 'multiple-blanks' && line.includes('___BLANK_') ? (
                  <span style={styles.codeText}>{renderBlankLine(line)}</span>
                ) : (
                  <span style={styles.codeText}>{line}</span>
                )}
              </div>
            ))}
            </div>
          </>
        )}

        {priorDebugAnswers.length > 0 && (
          <div style={styles.debugPriorList}>
            {priorDebugAnswers.map((priorAnswer, priorIdx) => (
              <div key={`${priorIdx}-${priorAnswer}`} style={styles.debugPriorItem}>
                <div style={styles.debugPriorLabel}>
                  STEP {priorIdx + 1} SELECTED
                </div>
                <div style={styles.debugPriorText}>{priorAnswer}</div>
              </div>
            ))}
          </div>
        )}

        {/* debug-step: 実際の質問ラベル（prompt の後、選択肢の前） */}
        {questionLabel && (
          <div style={styles.debugQuestion}>{questionLabel}</div>
        )}

        {/* コードブロック並び替え (code-ordering) */}
        {qType === 'code-ordering' && (
          <div style={styles.orderingList}>
            <div style={styles.orderingInstr}>クリックして正しい順序に選択（再クリックで解除）</div>
            {(q.blocks || []).map((block, i) => {
              const pos     = orderingSelection.indexOf(i);
              const chosen  = pos !== -1;
              const revealed = status !== 'idle';
              const isOk    = revealed && status === 'correct';
              const isErr   = revealed && status === 'wrong' && chosen;
              return (
                <button
                  key={i}
                  style={{
                    ...styles.orderingBlock,
                    borderColor: isOk  ? 'var(--accent)'
                               : isErr ? 'var(--danger)'
                               : chosen ? 'var(--accent2)'
                               : 'rgba(0,102,255,0.3)',
                    background: isOk  ? 'rgba(0,255,136,0.06)'
                              : isErr ? 'rgba(255,68,68,0.06)'
                              : chosen ? 'rgba(255,221,0,0.05)'
                              : 'transparent',
                  }}
                  onClick={() => {
                    if (status !== 'idle') return;
                    setOrderingSelection(prev =>
                      chosen ? prev.filter(x => x !== i) : [...prev, i]
                    );
                  }}
                  disabled={status !== 'idle'}
                >
                  <span style={{
                    ...styles.orderingNum,
                    color: isOk ? 'var(--accent)' : isErr ? 'var(--danger)' : chosen ? 'var(--accent2)' : '#555',
                  }}>
                    {chosen ? `${pos + 1}` : '?'}
                  </span>
                  <pre style={styles.orderingCode}>{block}</pre>
                </button>
              );
            })}
          </div>
        )}

        {/* 選択肢（multiple-choice / output-predict / implementation-selection / debug-step） */}
        {showMCOptions && (
          <div style={styles.optionsList}>
            {currentOptions.map((opt, i) => {
              const isSelected = opt === selectedOption;
              const revealed   = status !== 'idle';
              const isCorrect  = revealed && opt === correctAnswer;
              const isWrong    = revealed && isSelected && opt !== correctAnswer;
              return (
                <button
                  key={i}
                  style={{
                    ...styles.optionBtn,
                    borderColor: isCorrect ? 'var(--accent)'
                               : isWrong   ? 'var(--danger)'
                               : isSelected ? 'var(--accent2)'
                               : 'rgba(0,102,255,0.3)',
                    color: isCorrect ? 'var(--accent)'
                         : isWrong   ? 'var(--danger)'
                         : isSelected ? 'var(--accent2)'
                         : 'var(--text)',
                    background: isCorrect ? 'rgba(0,255,136,0.08)'
                              : isWrong   ? 'rgba(255,68,68,0.08)'
                              : isSelected ? 'rgba(255,221,0,0.06)'
                              : 'transparent',
                  }}
                  onClick={() => {
                    if (status !== 'idle') return;
                    setSelectedOption(opt);
                    if (isDebugStep) {
                      setDebugStepAnswers(prev => {
                        const next = prev.slice(0, debugStepIdx);
                        next[debugStepIdx] = opt;
                        return next;
                      });
                    }
                  }}
                  disabled={status !== 'idle'}
                >
                  <span style={styles.optionKey}>{String.fromCharCode(65 + i)}.</span>
                  <span style={optionsUseCode ? styles.optionCodeText : styles.optionText}>{opt}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* ヒント */}
        {showHint && currentHint && (
          <div style={styles.hint}>💡 HINT: {currentHint}</div>
        )}

        {/* フィードバック */}
        {status === 'correct' && (
          <div style={styles.feedbackCorrect} className="fade-in">
            ✅ CORRECT!
            {qType === 'fill-blank' && (
              <> &nbsp; 答え: <code style={styles.answerCode}>{q.blank ?? q.answer}</code></>
            )}
            {qType === 'multiple-blanks' && (
              <> &nbsp; 答え: {(q.blanks ?? []).map((b, i) => (
                <code key={i} style={{ ...styles.answerCode, marginRight: 4 }}>{b}</code>
              ))}</>
            )}
            {isDebugStep && debugStepIdx < stepCount - 1 && (
              <span style={{ color: 'var(--text-dim)', fontSize: 9, marginLeft: 8 }}>→ 次のステップへ</span>
            )}
          </div>
        )}
        {status === 'wrong' && (
          <div style={styles.feedbackWrong} className="fade-in">
            ❌ WRONG! &nbsp; 残りライフ: {hearts} / {MAX_HEARTS}
          </div>
        )}

        {/* 解説 */}
        {showExplanation && currentExplanation && (
          <div style={styles.explanation} className="fade-in">
            <div style={styles.explanationTitle}>📖 解説</div>
            <div style={styles.explanationText}>{currentExplanation}</div>
          </div>
        )}

        {/* ボタン群 */}
        <div style={styles.btnRow}>
          {status === 'idle' && (
            <>
              <button
                className="pixel-btn"
                style={{ fontSize: 9, color: 'var(--text-dim)', borderColor: 'var(--text-dim)' }}
                onClick={() => setShowHint(h => !h)}
              >
                💡 HINT
              </button>
              <button
                className="pixel-btn"
                onClick={handleSubmit}
                disabled={!canSubmit}
                style={!canSubmit ? { opacity: 0.4 } : undefined}
              >
                ▶ ANSWER
              </button>
            </>
          )}
          {status === 'wrong' && (
            <button
              className="pixel-btn"
              style={{ borderColor: 'var(--danger)', color: 'var(--danger)' }}
              onClick={handleRetry}
            >
              🔄 RETRY
            </button>
          )}
          {status === 'correct' && (
            <button className="pixel-btn" onClick={handleNext}>
              {isDebugStep && debugStepIdx < stepCount - 1 ? 'NEXT STEP ▶' : 'NEXT ▶'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    position: 'fixed',
    top: 'calc(var(--vv-offset, 0px) + env(safe-area-inset-top, 0px))',
    left: 0,
    right: 0,
    bottom: 0,
    background: '#000010',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '14px 16px',
    borderBottom: '2px solid rgba(0,255,136,0.35)',
    flexWrap: 'wrap',
    rowGap: 8,
    flexShrink: 0,
    background: 'rgba(0,0,10,0.88)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    position: 'relative',
    zIndex: 1,
  },
  back: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
    background: 'transparent',
    color: 'var(--text-dim)',
    border: '2px solid var(--text-dim)',
    padding: '8px 12px',
    cursor: 'pointer',
    minHeight: 40,
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    flex: 1,
    minWidth: 80,
  },
  flag: { fontSize: 18 },
  langBadge: {
    fontSize: 7,
    color: 'var(--accent)',
    border: '1px solid var(--accent)',
    padding: '3px 7px',
  },
  progress: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  progressLabel: {
    fontSize: 7,
    color: 'var(--text-dim)',
    whiteSpace: 'nowrap',
  },
  content: {
    flex: 1,
    padding: '16px',
    maxWidth: 700,
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    zIndex: 1,
    background: 'rgba(0,2,18,0.38)',
  },
  questionNum: {
    fontSize: 10,
    color: 'var(--text-dim)',
  },
  title: {
    fontSize: 'clamp(13px, 3.5vw, 17px)',
    color: 'var(--accent2)',
  },
  missionBadge: {
    alignSelf: 'flex-start',
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
    color: 'var(--accent)',
    border: '1px solid var(--accent)',
    padding: '4px 8px',
    letterSpacing: 1,
  },
  description: {
    fontSize: 'clamp(11px, 3vw, 13px)',
    color: 'var(--text)',
    lineHeight: 2.2,
  },
  codeBlock: {
    background: 'rgba(0,5,25,0.92)',
    border: '2px solid rgba(0,102,255,0.45)',
    padding: '14px 12px',
    fontFamily: 'monospace',
    fontSize: 'clamp(12px, 3.5vw, 15px)',
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch',
  },
  codeLine: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    minHeight: 32,
    whiteSpace: 'nowrap',
  },
  lineNum: {
    color: '#444',
    fontSize: 10,
    minWidth: 20,
    textAlign: 'right',
    userSelect: 'none',
  },
  codeText: {
    color: '#a8d8a8',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 4,
  },
  blankInput: {
    fontFamily: 'monospace',
    fontSize: 'clamp(13px, 3.5vw, 15px)',
    background: 'rgba(255,221,0,0.05)',
    border: 'none',
    borderBottom: '3px solid',
    color: 'var(--accent2)',
    outline: 'none',
    minWidth: 90,
    maxWidth: 220,
    textAlign: 'center',
    padding: '4px 8px',
    minHeight: 36,
    borderRadius: 0,
    WebkitAppearance: 'none',
  },
  hint: {
    fontSize: 10,
    color: 'var(--accent2)',
    background: 'rgba(255,221,0,0.08)',
    border: '1px solid var(--accent2)',
    padding: '10px 14px',
    lineHeight: 2,
  },
  feedbackCorrect: {
    fontSize: 11,
    color: 'var(--accent)',
    background: 'rgba(0,255,136,0.08)',
    border: '2px solid var(--accent)',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  feedbackWrong: {
    fontSize: 11,
    color: 'var(--danger)',
    background: 'rgba(255,68,68,0.08)',
    border: '2px solid var(--danger)',
    padding: '12px 16px',
  },
  answerCode: {
    fontFamily: 'monospace',
    background: 'rgba(0,255,136,0.15)',
    padding: '2px 8px',
    color: 'var(--accent)',
    fontSize: 12,
  },
  explanation: {
    background: 'var(--panel)',
    border: '2px solid var(--border2)',
    padding: '14px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  explanationTitle: {
    fontSize: 10,
    color: 'var(--border2)',
  },
  explanationText: {
    fontSize: 10,
    color: 'var(--text)',
    lineHeight: 2.2,
  },
  btnRow: {
    display: 'flex',
    gap: 12,
    marginTop: 8,
    flexWrap: 'wrap',
    paddingBottom: 24,
  },
  debugQuestion: {
    fontSize: 'clamp(10px, 2.8vw, 12px)',
    color: 'var(--accent2)',
    background: 'rgba(255,221,0,0.06)',
    border: '1px solid rgba(255,221,0,0.2)',
    padding: '8px 12px',
  },
  debugSectionLabel: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
    color: '#ff4466',
    letterSpacing: 1,
    marginTop: 2,
  },
  debugPriorList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    background: 'rgba(255,68,68,0.06)',
    border: '1px solid rgba(255,68,68,0.25)',
    padding: '10px 12px',
  },
  debugPriorItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  debugPriorLabel: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
    color: '#ff4466',
  },
  debugPriorText: {
    fontSize: 'clamp(10px, 2.8vw, 12px)',
    color: 'var(--text)',
    lineHeight: 1.8,
    wordBreak: 'break-word',
  },
  orderingList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  orderingInstr: {
    fontSize: 8,
    color: 'var(--text-dim)',
    marginBottom: 2,
  },
  orderingBlock: {
    background: 'transparent',
    border: '2px solid',
    padding: '10px 12px',
    cursor: 'pointer',
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start',
    transition: 'border-color 0.15s, background 0.15s',
    width: '100%',
    textAlign: 'left',
  },
  orderingNum: {
    flexShrink: 0,
    minWidth: 20,
    fontSize: 11,
    fontFamily: 'var(--pixel-font)',
    textAlign: 'center',
  },
  orderingCode: {
    flex: 1,
    fontFamily: 'monospace',
    fontSize: 'clamp(11px, 3vw, 13px)',
    color: '#a8d8a8',
    margin: 0,
    whiteSpace: 'pre',
    overflow: 'auto',
    textAlign: 'left',
  },
  optionCodeText: {
    flex: 1,
    wordBreak: 'break-word',
    whiteSpace: 'pre-wrap',
    fontFamily: 'monospace',
    fontSize: 'clamp(9px, 2.5vw, 11px)',
    background: 'rgba(0,5,25,0.6)',
    padding: '6px 8px',
    border: '1px solid rgba(0,102,255,0.15)',
    lineHeight: 1.6,
  },
  debugStepHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '8px 12px',
    background: 'rgba(255,68,68,0.07)',
    border: '1px solid rgba(255,68,68,0.3)',
  },
  debugStepNum: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 9,
    color: '#ff4466',
    flexShrink: 0,
  },
  debugStepTitle: {
    fontSize: 10,
    color: 'var(--text)',
    lineHeight: 1.6,
  },
  optionsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  optionBtn: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 'clamp(9px, 2.5vw, 11px)',
    background: 'transparent',
    border: '2px solid',
    padding: '10px 14px',
    cursor: 'pointer',
    textAlign: 'left',
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start',
    transition: 'border-color 0.15s, color 0.15s, background 0.15s',
    lineHeight: 1.7,
    width: '100%',
  },
  optionKey: {
    flexShrink: 0,
    minWidth: 18,
  },
  optionText: {
    flex: 1,
    wordBreak: 'break-word',
    whiteSpace: 'pre-wrap',
    fontFamily: 'monospace',
    fontSize: 'clamp(10px, 2.8vw, 12px)',
  },
  resumeBanner: {
    background: 'rgba(0,102,255,0.12)',
    borderBottom: '2px solid var(--border2)',
    padding: '8px 20px',
    fontSize: 8,
    color: 'var(--border2)',
    textAlign: 'center',
  },
  complete: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
    flex: 1,
    textAlign: 'center',
    padding: 20,
  },
  completeTitle: {
    fontSize: 'clamp(18px, 5vw, 32px)',
    color: 'var(--accent2)',
    textShadow: '3px 3px 0 #332200',
  },
  completeSub: {
    fontSize: 9,
    color: 'var(--text)',
  },
  finalScore: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
    background: 'var(--panel)',
    border: '2px solid var(--accent2)',
    padding: '16px 32px',
    marginTop: 4,
  },
};
