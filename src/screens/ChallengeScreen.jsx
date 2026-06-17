import { useState, useEffect, useRef } from 'react';
import { CHALLENGES } from '../data/challenges';

const MAX_HEARTS = 3;
const BASE_SCORE = 100;

export default function ChallengeScreen({
  country, language, onBack, onComplete,
  initialIdx = 0, onSaveIdx, onSaveScore,
}) {
  const questions = CHALLENGES[country.id]?.[language.id] || [];
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

  // fix: track all timers so we can cancel them on unmount / retry
  const timersRef = useRef([]);
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
  }, [idx]);

  const resetGame = () => {
    clearTimers();
    setIdx(0);
    setHearts(MAX_HEARTS);
    setScore(0);
    setCombo(0);
    setComboDisplay(0);
    setGameOver(false);
    setStatus('idle');
    setAnswer('');
    setScreenEffect(null);
    setShakingHeartIdx(-1);
    onSaveIdx?.(0);
  };

  const handleBack = () => {
    clearTimers();
    onBack();
  };

  // ── ゲームオーバー画面 ────────────────────────
  if (gameOver) {
    return (
      <div style={styles.wrap} className="fade-in">
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
    return (
      <div style={styles.wrap} className="fade-in">
        <div style={styles.complete}>
          <div style={{ fontSize: 'clamp(48px, 12vw, 72px)' }}>🎉</div>
          <div style={styles.completeTitle}>QUEST CLEAR!</div>
          <div style={styles.completeSub}>{country.name} の {language.name} クエスト完了！</div>
          <div style={styles.finalScore}>
            <div style={{ fontSize: 7, color: 'var(--text-dim)' }}>FINAL SCORE</div>
            <div style={{ fontSize: 'clamp(20px, 6vw, 32px)', color: 'var(--accent2)' }}>
              {score.toLocaleString()}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6, margin: '4px 0 8px' }}>
            {Array.from({ length: MAX_HEARTS }).map((_, i) => (
              <span key={i} style={{ fontSize: 22, opacity: i < hearts ? 1 : 0.2 }}>
                {i < hearts ? '❤️' : '🖤'}
              </span>
            ))}
          </div>
          <button
            className="pixel-btn"
            style={{ marginTop: 16 }}
            onClick={() => { onSaveScore?.(score); onComplete(country.id); }}
          >
            ワールドマップへ戻る
          </button>
        </div>
      </div>
    );
  }

  // ── 通常クイズ ────────────────────────────────
  const q = questions[idx];
  const codeLines = q.code.split('\n');
  // fix: (idx+1)/length so Q1 shows 20% not 0%
  const progress = Math.round(((idx + 1) / questions.length) * 100);
  const comboMultiplier = Math.min(combo + 1, 5);

  const handleSubmit = () => {
    const correct = answer.trim() === q.blank.trim();
    setStatus(correct ? 'correct' : 'wrong');

    if (correct) {
      const newCombo = combo + 1;
      const mult     = Math.min(newCombo, 5);
      const earned   = BASE_SCORE * mult;
      setCombo(newCombo);
      setScore(s => s + earned);
      setShowExplanation(true);

      setFloatText(`+${earned}${mult >= 2 ? ` \xd7${mult}` : ''}`);
      setFloatKey(k => k + 1);

      if (newCombo >= 2) {
        setComboDisplay(newCombo); // fix: store actual newCombo for popup display
        setShowCombo(true);
        schedule(() => setShowCombo(false), 1300);
      }
      setScorePop(true);
      schedule(() => setScorePop(false), 400);
      setScreenEffect('correct');
      schedule(() => setScreenEffect(null), 400);

    } else {
      const newHearts = hearts - 1;
      setCombo(0);

      // fix: animate heart BEFORE reducing count so it's still visible during animation
      // hearts-1 is still visible right now (i < hearts is still true for hearts-1)
      setShakingHeartIdx(newHearts);
      setScreenEffect('wrong');
      schedule(() => setScreenEffect(null), 400);

      // Delay heart count reduction until after heartBreak animation (~0.5s)
      schedule(() => {
        setHearts(newHearts);
        setShakingHeartIdx(-1);
      }, 400);

      // fix: game over timeout stored in ref, cancelled on retry/back
      if (newHearts <= 0) {
        schedule(() => setGameOver(true), 750);
      }
    }
  };

  const handleNext = () => {
    const nextIdx = idx + 1;
    setIdx(nextIdx);
    onSaveIdx?.(nextIdx);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && status === 'idle') handleSubmit();
    if (e.key === 'Enter' && status === 'correct') handleNext();
    // fix: Enter key retries after wrong answer
    if (e.key === 'Enter' && status === 'wrong') { setStatus('idle'); setAnswer(''); }
  };

  return (
    <div
      style={{
        ...styles.wrap,
        animation: screenEffect === 'wrong' ? 'shake 0.4s ease' : 'none',
      }}
      className={screenEffect !== 'wrong' ? 'fade-in' : undefined}
    >
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

      {/* コンボポップアップ - fix: comboDisplay instead of combo */}
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

        {/* ハート（ライフ） */}
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

        {/* 国・言語バッジ */}
        <div style={styles.info}>
          <span style={styles.flag}>{country.emoji}</span>
          <span style={styles.langBadge}>{language.emoji} {language.name}</span>
        </div>

        {/* スコア表示 */}
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

        {/* 問題数プログレス */}
        <div style={styles.progress}>
          <span style={styles.progressLabel}>{idx + 1} / {questions.length}</span>
          <div className="xp-bar" style={{ width: 80 }}>
            <div className="xp-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div style={styles.content}>
        <div style={styles.questionNum}>QUESTION {idx + 1}</div>
        <div style={styles.title}>{q.title}</div>
        <div style={styles.description}>{q.description}</div>

        {/* コードブロック */}
        <div style={styles.codeBlock}>
          {codeLines.map((line, i) => (
            <div key={i} style={styles.codeLine}>
              <span style={styles.lineNum}>{i + 1}</span>
              {line.includes('___BLANK___') ? (
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
                    onKeyDown={handleKeyDown}
                    placeholder="???"
                    disabled={status !== 'idle'}
                    autoFocus
                  />
                  {line.split('___BLANK___')[1]}
                </span>
              ) : (
                <span style={styles.codeText}>{line}</span>
              )}
            </div>
          ))}
        </div>

        {/* ヒント */}
        {showHint && (
          <div style={styles.hint}>
            💡 HINT: {q.hint}
          </div>
        )}

        {/* フィードバック */}
        {status === 'correct' && (
          <div style={styles.feedbackCorrect} className="fade-in">
            ✅ CORRECT! &nbsp; 答え: <code style={styles.answerCode}>{q.blank}</code>
          </div>
        )}
        {status === 'wrong' && (
          <div style={styles.feedbackWrong} className="fade-in">
            ❌ WRONG! &nbsp; 残りライフ: {hearts} / {MAX_HEARTS}
          </div>
        )}

        {/* 解説 */}
        {showExplanation && (
          <div style={styles.explanation} className="fade-in">
            <div style={styles.explanationTitle}>📖 解説</div>
            <div style={styles.explanationText}>{q.explanation}</div>
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
              <button className="pixel-btn" onClick={handleSubmit}>
                ▶ ANSWER
              </button>
            </>
          )}
          {status === 'wrong' && (
            <button
              className="pixel-btn"
              style={{ borderColor: 'var(--danger)', color: 'var(--danger)' }}
              onClick={() => { setStatus('idle'); setAnswer(''); }}
            >
              🔄 RETRY
            </button>
          )}
          {status === 'correct' && (
            <button className="pixel-btn" onClick={handleNext}>
              NEXT ▶
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    width: '100%',
    minHeight: '100dvh',
    background: 'var(--bg)',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '10px 16px',
    borderBottom: '2px solid var(--border)',
    flexWrap: 'wrap',
    rowGap: 8,
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
    padding: '20px 16px',
    maxWidth: 700,
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  questionNum: {
    fontSize: 8,
    color: 'var(--text-dim)',
  },
  title: {
    fontSize: 'clamp(11px, 3vw, 15px)',
    color: 'var(--accent2)',
  },
  description: {
    fontSize: 'clamp(9px, 2.5vw, 11px)',
    color: 'var(--text)',
    lineHeight: 2.2,
  },
  codeBlock: {
    background: '#0a0f1a',
    border: '2px solid var(--border2)',
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
    fontSize: 8,
    color: 'var(--accent2)',
    background: 'rgba(255,221,0,0.08)',
    border: '1px solid var(--accent2)',
    padding: '10px 14px',
    lineHeight: 2,
  },
  feedbackCorrect: {
    fontSize: 9,
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
    fontSize: 9,
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
    fontSize: 8,
    color: 'var(--border2)',
  },
  explanationText: {
    fontSize: 8,
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
    height: 'calc(100dvh - env(safe-area-inset-top, 0px))',
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
