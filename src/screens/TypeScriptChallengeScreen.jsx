import { useEffect, useMemo, useRef, useState } from 'react';
import { TYPESCRIPT_QUESTIONS_BY_ID, TYPESCRIPT_MODE_LABELS } from '../data/typescript/questions';
import { TYPESCRIPT_MAX_HEARTS } from '../utils/typescriptProgress';
import { CodeBlock } from '../components/ExplanationPanel';
import BackButton from '../components/BackButton';
import { triggerFeedback } from '../utils/feedback';

function buildCompletedCode(question, answer) {
  return String(question?.code || '').replace('___BLANK___', answer ?? '');
}

export default function TypeScriptChallengeScreen({
  questionId,
  meta,
  onBack,
  onComplete,
  onFail,
  onRetry,
  onSaveResume,
  onOpenReference,
}) {
  const question = TYPESCRIPT_QUESTIONS_BY_ID[questionId];
  const progress = meta?.codePaths?.typescript;
  const saved = progress?.resume?.questionId === questionId ? progress.resume : {};
  const [answer, setAnswer] = useState(saved.answer || '');
  const [selected, setSelected] = useState(saved.selected ?? null);
  const [hearts, setHearts] = useState(saved.hearts ?? TYPESCRIPT_MAX_HEARTS);
  const [status, setStatus] = useState('idle');
  const [submittedAnswer, setSubmittedAnswer] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const onSaveResumeRef = useRef(onSaveResume);
  const navigatingRef = useRef(false);
  const resultBodyRef = useRef(null);

  const chapterQuestions = useMemo(() => {
    if (!question) return [];
    return Object.values(TYPESCRIPT_QUESTIONS_BY_ID)
      .filter(item => item.chapterId === question.chapterId)
      .sort((a, b) => a.order - b.order);
  }, [question]);

  const isWrite = question?.mode === 'write';
  const canSubmit = Boolean(question) && (isWrite ? answer.trim().length > 0 : selected !== null);
  const displayAnswer = isWrite ? answer.trim() : selected;
  const completedCode = question ? buildCompletedCode(question, question.answer) : '';

  useEffect(() => {
    onSaveResumeRef.current = onSaveResume;
  }, [onSaveResume]);

  useEffect(() => {
    if (!question || status === 'correct') return;
    onSaveResumeRef.current?.({
      screen: 'typescriptChallenge',
      chapterId: question.chapterId,
      questionId: question.id,
      mode: question.mode,
      hearts,
      answer,
      selected,
    });
  }, [question, hearts, answer, selected, status]);

  useEffect(() => {
    if (gameOver && resultBodyRef.current) resultBodyRef.current.scrollTop = 0;
  }, [gameOver]);

  useEffect(() => {
    const handler = (event) => {
      if (event.key !== 'Enter' || event.isComposing) return;
      event.preventDefault();
      if (status === 'correct') handleNext();
      else if (status === 'idle' && canSubmit) handleSubmit();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  });

  if (!question) {
    return (
      <div style={styles.wrap}>
        <div style={styles.empty}>読み込み中</div>
        <BackButton onClick={onBack} />
      </div>
    );
  }

  function clearTemp() {
    setAnswer('');
    setSelected(null);
    document.activeElement?.blur?.();
  }

  function handleSubmit() {
    const value = displayAnswer;
    const correct = value === question.answer;
    setSubmittedAnswer(value);
    if (correct) {
      triggerFeedback('correct');
      setStatus('correct');
      clearTemp();
      return;
    }
    const nextHearts = hearts - 1;
    triggerFeedback('wrong');
    setHearts(nextHearts);
    setStatus('wrong');
    clearTemp();
    if (nextHearts <= 0) {
      setGameOver(true);
      onFail?.(question, value);
    }
  }

  function handleRetry() {
    setAnswer('');
    setSelected(null);
    setHearts(TYPESCRIPT_MAX_HEARTS);
    setStatus('idle');
    setSubmittedAnswer('');
    setGameOver(false);
    setShowHint(false);
    navigatingRef.current = false;
    onRetry?.(question);
  }

  function handleNext() {
    if (navigatingRef.current || !question) return;
    navigatingRef.current = true;
    onComplete?.(question);
  }

  const renderRoute = () => {
    const completed = new Set(progress?.chapters?.[question.chapterId]?.completedQuestionIds || []);
    const missionDone = Boolean(progress?.chapters?.[question.chapterId]?.missionCompleted);
    return (
      <div className={`sql-step-route ${status === 'correct' ? 'sql-step-route-advance' : ''}`} aria-label={`TypeScript chapter progress ${question.order} of 10`}>
        {chapterQuestions.map(item => {
          const isMission = item.mode === 'mission';
          const isCompleted = isMission ? missionDone : completed.has(item.id) || (status === 'correct' && item.id === question.id);
          const isCurrent = item.id === question.id;
          return (
            <div
              key={item.id}
              className={[
                'sql-step-node',
                isCompleted ? 'sql-step-node-done' : '',
                isCurrent ? 'sql-step-node-current' : '',
                isMission ? 'sql-step-node-mission' : '',
              ].filter(Boolean).join(' ')}
              title={`${item.order}. ${TYPESCRIPT_MODE_LABELS[item.mode] || item.mode}`}
            >
              {item.order}
            </div>
          );
        })}
      </div>
    );
  };

  const renderCode = () => {
    if (!isWrite) return <CodeBlock label="CODE">{question.code}</CodeBlock>;
    const [before, after = ''] = String(question.code).split('___BLANK___');
    return (
      <section style={styles.codeBox}>
        <div style={styles.queryLabel}>CODE</div>
        <pre style={styles.queryFill}>
          <span>{before}</span>
          <input
            style={styles.inlineBlank}
            value={status === 'correct' ? question.answer : answer}
            onChange={event => {
              if (status === 'correct') return;
              setAnswer(event.target.value);
              if (status === 'wrong') setStatus('idle');
            }}
            disabled={status === 'correct' || gameOver}
            placeholder="ここに入力"
            autoFocus
          />
          <span>{after}</span>
        </pre>
      </section>
    );
  };

  const renderOptions = () => (
    <div style={styles.options}>
      {(question.options || []).map(option => {
        const selectedNow = selected === option.id;
        return (
          <button
            key={option.id}
            type="button"
            style={{ ...styles.option, borderColor: selectedNow ? 'var(--accent2)' : 'var(--border2)' }}
            onClick={() => {
              if (status === 'correct' || gameOver) return;
              setSelected(option.id);
              if (status === 'wrong') setStatus('idle');
            }}
            disabled={status === 'correct' || gameOver}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );

  const renderExplanation = () => (
    <section style={styles.explanation}>
      <div style={styles.feedbackTitle}>ANSWER</div>
      <div style={styles.answerLine}><span>正解</span><code>{question.answer}</code></div>
      <CodeBlock label="COMPLETED CODE">{completedCode}</CodeBlock>
      <div style={styles.explainSection}>
        <div style={styles.sectionTitle}>処理の流れ</div>
        <ol style={styles.list}>{question.explanation.executionSteps.map(step => <li key={step}>{step}</li>)}</ol>
      </div>
      <div style={styles.explainSection}>
        <div style={styles.sectionTitle}>間違えやすいポイント</div>
        {question.explanation.commonMistakes.map(item => (
          <div key={`${item.wrong}-${item.correct}`} style={styles.mistake}>
            <div><strong>NG:</strong> {item.wrong}</div>
            <div><strong>理由:</strong> {item.reason}</div>
            <div><strong>修正:</strong> {item.correct}</div>
          </div>
        ))}
      </div>
      <div style={styles.explainSection}>
        <div style={styles.sectionTitle}>TypeScript 解説</div>
        <p style={styles.paragraph}>{question.explanation.programmingExplanation}</p>
      </div>
      <div style={styles.explainSection}>
        <div style={styles.sectionTitle}>テーマ</div>
        <p style={styles.paragraph}>{question.explanation.themeExplanation}</p>
      </div>
    </section>
  );

  const renderActions = () => (
    <div style={styles.actionInner}>
      {status === 'correct' ? (
        <button className="pixel-btn" onClick={handleNext}>NEXT</button>
      ) : (
        <>
          <button className="pixel-btn" style={styles.hintBtn} onClick={() => setShowHint(value => !value)}>HINT</button>
          <button className="pixel-btn" data-feedback="none" disabled={!canSubmit} onClick={handleSubmit}>ANSWER</button>
        </>
      )}
    </div>
  );

  if (gameOver) {
    return (
      <div style={styles.wrap}>
        <div style={styles.resultShell}>
          <div ref={resultBodyRef} style={styles.resultBody}>
            <div style={styles.gameOver}>GAME OVER</div>
            <div style={styles.sub}>TypeScript PATH FAILED</div>
            <div style={styles.answerBox}><span>YOUR ANSWER</span><code>{submittedAnswer || 'No answer'}</code></div>
            {renderExplanation()}
          </div>
          <div style={styles.footer}>
            <button className="pixel-btn" onClick={handleRetry}>RETRY THIS QUESTION</button>
            <BackButton onClick={onBack} />
          </div>
        </div>
      </div>
    );
  }

  if (status === 'correct') {
    return (
      <div style={styles.wrap} className="fade-in">
        <div style={styles.top}>
          <BackButton onClick={onBack} />
          <div style={styles.kicker}>{question.chapterId} / {TYPESCRIPT_MODE_LABELS[question.mode]} / Q{question.order}/10</div>
        </div>
        <main style={styles.resultBody}>
          {renderRoute()}
          <div style={styles.feedbackCorrect}>
            <div style={styles.feedbackTitle}>{isWrite ? 'TYPE COMPLETED' : question.mode === 'fix' ? 'FIX APPLIED' : 'RESULT VERIFIED'}</div>
            <div style={styles.answerLine}><span>ANSWER</span><code>{question.answer}</code></div>
          </div>
          {renderExplanation()}
        </main>
        <div style={styles.activeFooter}>{renderActions()}</div>
      </div>
    );
  }

  return (
    <div style={styles.wrap} className="fade-in">
      <div style={styles.top}>
        <BackButton onClick={onBack} />
        <button className="pixel-btn" style={styles.smallBtn} onClick={onOpenReference}>REFERENCE</button>
      </div>
      <main style={styles.main}>
        <header style={styles.header}>
          <div style={styles.statusBar}>
            <div style={styles.kicker}>{question.chapterId} / {TYPESCRIPT_MODE_LABELS[question.mode]} / Q{question.order}/10</div>
            <div style={styles.hearts} aria-label={`hearts ${hearts} of ${TYPESCRIPT_MAX_HEARTS}`}>
              {Array.from({ length: TYPESCRIPT_MAX_HEARTS }).map((_, index) => (
                <span key={index} style={{ opacity: index < hearts ? 1 : 0.2 }}>{index < hearts ? '♥' : '·'}</span>
              ))}
            </div>
          </div>
          {renderRoute()}
          <h1 style={styles.title}>{question.title}</h1>
          <p style={styles.prompt}>{question.prompt}</p>
        </header>
        {renderCode()}
        <div style={styles.outputBox}>
          <span style={styles.outputLabel}>EXPECTED OUTPUT</span>
          <code style={styles.outputValue}>{question.expectedOutput}</code>
        </div>
        {!isWrite && renderOptions()}
        {showHint && <div style={styles.hint}>HINT: {question.hint}</div>}
        {status === 'wrong' && <div style={styles.wrong}>Incorrect. 型、値、EXPECTED OUTPUT をもう一度見比べてください。</div>}
      </main>
      <div style={styles.activeFooter}>{renderActions()}</div>
    </div>
  );
}

const styles = {
  wrap: { height: '100dvh', background: 'var(--bg)', display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' },
  top: { flex: '0 0 auto', display: 'flex', gap: 10, justifyContent: 'space-between', padding: 'calc(env(safe-area-inset-top, 0px) + 14px) 14px 14px', borderBottom: '1px solid rgba(127,183,255,0.22)' },
  smallBtn: { fontSize: 8, padding: '10px 12px' },
  main: { flex: 1, minHeight: 0, overflowY: 'auto', padding: '18px 16px 28px', display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 980, margin: '0 auto' },
  header: { display: 'flex', flexDirection: 'column', gap: 10 },
  statusBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 },
  kicker: { color: 'var(--accent2)', fontSize: 9 },
  hearts: { display: 'flex', gap: 5, color: 'var(--danger)', fontSize: 18, textShadow: '0 0 8px rgba(255,68,68,0.45)' },
  title: { margin: 0, color: '#7fb7ff', fontSize: 'clamp(18px, 5vw, 30px)', lineHeight: 1.5 },
  sub: { color: 'var(--text-dim)', fontSize: 11 },
  prompt: { margin: 0, color: 'var(--text)', fontSize: 12, lineHeight: 2 },
  codeBox: { display: 'flex', flexDirection: 'column', gap: 7, minWidth: 0 },
  queryLabel: { fontFamily: 'var(--pixel-font)', fontSize: 9, color: 'var(--accent2)', lineHeight: 1.8 },
  queryFill: { margin: 0, padding: '16px 18px', width: '100%', minWidth: 0, overflowX: 'auto', background: 'rgba(0,5,25,0.95)', border: '1px solid rgba(127,183,255,0.45)', color: '#d8eaff', fontSize: 'clamp(13px, 3.5vw, 17px)', lineHeight: 1.9, whiteSpace: 'pre', fontFamily: 'var(--mono-font, ui-monospace, SFMono-Regular, Consolas, monospace)' },
  inlineBlank: { minWidth: 110, maxWidth: 'min(420px, 80vw)', background: 'rgba(49,120,198,0.14)', border: '2px solid #7fb7ff', color: '#d8eaff', fontFamily: 'inherit', fontSize: 'clamp(13px, 3.5vw, 15px)', padding: '4px 7px', margin: '0 4px', outline: 'none' },
  options: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 12, minWidth: 0 },
  option: { fontFamily: 'var(--pixel-font)', background: 'rgba(0,5,25,0.8)', color: 'var(--text)', border: '2px solid', padding: 12, textAlign: 'left', cursor: 'pointer', minWidth: 0, lineHeight: 1.7 },
  outputBox: { display: 'flex', flexDirection: 'column', gap: 8, border: '1px solid rgba(255,221,0,0.3)', padding: 12, color: 'var(--accent2)' },
  outputLabel: { fontFamily: 'var(--pixel-font)', fontSize: 9, letterSpacing: 1 },
  outputValue: { fontFamily: 'monospace', fontSize: 'clamp(12px, 3.5vw, 15px)', whiteSpace: 'pre-wrap', wordBreak: 'break-word' },
  activeFooter: { flex: '0 0 auto', padding: '10px 14px calc(env(safe-area-inset-bottom, 0px) + 10px)', background: 'rgba(13,13,26,0.96)', borderTop: '1px solid rgba(127,183,255,0.22)' },
  actionInner: { width: '100%', maxWidth: 980, margin: '0 auto', display: 'flex', justifyContent: 'flex-end', gap: 10 },
  hintBtn: { fontSize: 9, color: 'var(--text-dim)', borderColor: 'var(--text-dim)' },
  hint: { border: '1px solid rgba(255,221,0,0.35)', background: 'rgba(255,221,0,0.06)', color: 'var(--accent2)', padding: 12, fontSize: 11, lineHeight: 1.9 },
  wrong: { color: 'var(--danger)', border: '1px solid rgba(255,68,68,0.35)', padding: 12, fontSize: 11, lineHeight: 1.8 },
  feedbackCorrect: { border: '2px solid rgba(127,183,255,0.5)', background: 'rgba(49,120,198,0.12)', color: '#7fb7ff', padding: 14, display: 'flex', flexDirection: 'column', gap: 10 },
  feedbackTitle: { fontFamily: 'var(--pixel-font)', fontSize: 12, textShadow: '0 0 10px rgba(127,183,255,0.45)' },
  answerLine: { display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', fontSize: 10, color: 'var(--text)' },
  explanation: { display: 'flex', flexDirection: 'column', gap: 14, border: '1px solid rgba(127,183,255,0.28)', background: 'rgba(49,120,198,0.07)', padding: 14 },
  explainSection: { display: 'flex', flexDirection: 'column', gap: 8 },
  sectionTitle: { color: '#7fb7ff', fontSize: 10, fontFamily: 'var(--pixel-font)' },
  paragraph: { margin: 0, color: 'var(--text)', fontSize: 12, lineHeight: 1.9 },
  list: { margin: 0, paddingLeft: 18, color: 'var(--text)', fontSize: 12, lineHeight: 1.9 },
  mistake: { border: '1px solid rgba(255,255,255,0.12)', padding: 10, color: 'var(--text)', fontSize: 11, lineHeight: 1.8 },
  resultShell: { height: '100%', minHeight: 0, display: 'flex', flexDirection: 'column' },
  resultBody: { flex: 1, minHeight: 0, overflowY: 'auto', padding: 18, display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 980, width: '100%', margin: '0 auto' },
  footer: { flex: '0 0 auto', display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', padding: '12px 14px calc(env(safe-area-inset-bottom, 0px) + 12px)', background: 'rgba(13,13,26,0.96)', borderTop: '1px solid rgba(127,183,255,0.22)' },
  gameOver: { color: 'var(--danger)', fontSize: 'clamp(24px, 8vw, 46px)', textAlign: 'center' },
  answerBox: { display: 'flex', flexDirection: 'column', gap: 8, border: '1px solid rgba(255,221,0,0.3)', padding: 12, color: 'var(--accent2)', fontSize: 10 },
  empty: { margin: 'auto', color: 'var(--text-dim)' },
};
