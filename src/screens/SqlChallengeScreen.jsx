import { useMemo, useRef, useState, useEffect } from 'react';
import { SQL_QUESTIONS_BY_ID } from '../data/sql/questions';
import { SQL_GLOBAL_FACTS_BY_ID } from '../data/sql/global_facts';
import { SqlExplanation, SqlQueryView, SqlResultTable, SqlTableView } from '../components/SqlComponents';
import { SQL_MAX_HEARTS } from '../utils/sqlProgress';

export default function SqlChallengeScreen({
  questionId,
  meta,
  onBack,
  onComplete,
  onFail,
  onRetry,
  onSaveResume,
  onOpenReference,
}) {
  const question = SQL_QUESTIONS_BY_ID[questionId];
  const progress = meta?.codePaths?.sql;
  const saved = progress?.resume?.questionId === questionId ? progress.resume : {};
  const [answer, setAnswer] = useState(saved.answer || '');
  const [selected, setSelected] = useState(saved.selected ?? null);
  const [debugStep, setDebugStep] = useState(saved.debugStepIndex || 0);
  const [debugAnswers, setDebugAnswers] = useState(saved.debugAnswers || []);
  const [hearts, setHearts] = useState(saved.hearts ?? SQL_MAX_HEARTS);
  const [status, setStatus] = useState('idle');
  const [submittedAnswer, setSubmittedAnswer] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const resultBodyRef = useRef(null);
  const onSaveResumeRef = useRef(onSaveResume);
  const fact = useMemo(() => SQL_GLOBAL_FACTS_BY_ID[question?.globalFactIds?.[0]], [question]);

  useEffect(() => {
    onSaveResumeRef.current = onSaveResume;
  }, [onSaveResume]);

  useEffect(() => {
    if (!question) return;
    onSaveResumeRef.current?.({
      screen: 'sqlChallenge',
      chapterId: question.chapterId,
      questionId: question.id,
      mode: question.mode,
      hearts,
      answer,
      selected,
      debugStepIndex: debugStep,
      debugAnswers,
    });
  }, [question, hearts, answer, selected, debugStep, debugAnswers]);

  useEffect(() => {
    if (gameOver && resultBodyRef.current) resultBodyRef.current.scrollTop = 0;
  }, [gameOver]);

  if (!question) {
    return (
      <div style={styles.wrap}>
        <div style={styles.empty}>準備中</div>
        <button className="pixel-btn" onClick={onBack}>BACK</button>
      </div>
    );
  }

  const isDecode = question.mode === 'decode';
  const isDebug = question.mode === 'debug';
  const currentDebug = isDebug ? question.debugSteps?.[debugStep] : null;
  const currentCorrect = isDebug ? currentDebug?.answer : question.answer;
  const canSubmit = isDecode ? answer.trim().length > 0 : isDebug ? selected !== null : selected !== null;

  const clearTemp = () => {
    setAnswer('');
    setSelected(null);
    document.activeElement?.blur?.();
  };

  const handleRetry = () => {
    setAnswer('');
    setSelected(null);
    setDebugStep(0);
    setDebugAnswers([]);
    setHearts(SQL_MAX_HEARTS);
    setStatus('idle');
    setSubmittedAnswer('');
    setGameOver(false);
    onRetry?.(question);
  };

  const handleSubmit = () => {
    const value = isDecode ? answer.trim() : selected;
    const correct = value === currentCorrect;
    setSubmittedAnswer(value);
    if (correct) {
      if (isDebug && debugStep < 2) {
        const nextAnswers = [...debugAnswers.slice(0, debugStep), value];
        setDebugAnswers(nextAnswers);
        setDebugStep(debugStep + 1);
        setSelected(null);
        setStatus('idle');
        return;
      }
      setStatus('correct');
      clearTemp();
      return;
    }
    const nextHearts = hearts - 1;
    setHearts(nextHearts);
    setStatus('wrong');
    clearTemp();
    if (nextHearts <= 0) {
      setGameOver(true);
      onFail?.(question, value);
    }
  };

  const handleNext = () => onComplete?.(question);

  const explanation = {
    ...question.explanation,
    correctAnswer: isDebug ? currentCorrect : question.explanation?.correctAnswer,
  };

  if (gameOver) {
    return (
      <div style={styles.wrap}>
        <div style={styles.resultShell}>
          <div ref={resultBodyRef} style={styles.resultBody}>
            <div style={styles.gameOver}>GAME OVER</div>
            <div style={styles.sub}>SQL PATH FAILED</div>
            <div style={styles.answerBox}>
              <span>YOUR ANSWER</span>
              <code>{submittedAnswer || 'No answer'}</code>
            </div>
            {question.tables.map(table => <SqlTableView key={table.id} table={table} />)}
            <SqlQueryView query={question.query} />
            <SqlResultTable result={question.expectedResult} />
            <SqlExplanation explanation={explanation} fact={fact} />
          </div>
          <div style={styles.footer}>
            <button className="pixel-btn" onClick={handleRetry}>RETRY FROM START</button>
            <button className="pixel-btn" onClick={onBack}>REVIEW LATER</button>
            <button className="pixel-btn" onClick={onBack}>SQL PATH</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.wrap} className="fade-in">
      <div style={styles.top}>
        <button className="pixel-btn" style={styles.smallBtn} onClick={onBack}>[ &lt; CHAPTER ]</button>
        <button className="pixel-btn" style={styles.smallBtn} onClick={onOpenReference}>REFERENCE</button>
      </div>
      <main style={styles.main}>
        <header style={styles.header}>
          <div style={styles.kicker}>{question.chapterId} / {question.mode.toUpperCase()} / HEARTS {hearts}</div>
          <h1 style={styles.title}>{question.title}</h1>
          <p style={styles.prompt}>{isDebug ? currentDebug?.question : question.prompt}</p>
        </header>
        <div style={styles.tables}>{question.tables.map(table => <SqlTableView key={table.id} table={table} />)}</div>
        <SqlQueryView query={isDebug && debugStep === 1 ? question.explanation.completedQuery : question.query} />
        {isDecode && <SqlResultTable title="EXPECTED RESULT" result={question.expectedResult} />}

        {isDecode ? (
          <input
            style={styles.input}
            value={answer}
            onChange={event => setAnswer(event.target.value)}
            placeholder="空欄に入るSQLを入力"
          />
        ) : (
          <div style={styles.options}>
            {(isDebug ? currentDebug?.options : question.options)?.map(option => {
              const value = typeof option === 'string' ? option : option.id;
              const label = typeof option === 'string' ? option : (option.label || option.id);
              return (
                <button key={value} style={{ ...styles.option, borderColor: selected === value ? 'var(--accent2)' : 'var(--border2)' }} onClick={() => setSelected(value)}>
                  {label}
                  {!isDebug && question.options?.find(item => item.id === value)?.result && (
                    <SqlResultTable result={question.options.find(item => item.id === value).result} />
                  )}
                </button>
              );
            })}
          </div>
        )}

        <div style={styles.actions}>
          {status === 'correct' ? (
            <button className="pixel-btn" onClick={handleNext}>NEXT</button>
          ) : (
            <button className="pixel-btn" disabled={!canSubmit} onClick={handleSubmit}>ANSWER</button>
          )}
        </div>
        {status === 'correct' && (
          <SqlExplanation explanation={explanation} fact={fact} />
        )}
        {status === 'wrong' && <div style={styles.wrong}>Incorrect. 残りハートを確認して、列名・条件・結果表をもう一度見てください。</div>}
      </main>
    </div>
  );
}

const styles = {
  wrap: { height: '100dvh', background: 'var(--bg)', display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' },
  top: { flex: '0 0 auto', display: 'flex', gap: 10, justifyContent: 'space-between', padding: 14, borderBottom: '1px solid rgba(0,255,136,0.18)' },
  smallBtn: { fontSize: 8, padding: '10px 12px' },
  main: { flex: 1, minHeight: 0, overflowY: 'auto', padding: '18px 16px 28px', display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 980, margin: '0 auto' },
  header: { display: 'flex', flexDirection: 'column', gap: 10 },
  kicker: { color: 'var(--accent2)', fontSize: 9 },
  title: { margin: 0, color: 'var(--accent)', fontSize: 'clamp(18px, 5vw, 30px)', lineHeight: 1.5 },
  sub: { color: 'var(--text-dim)', fontSize: 11 },
  prompt: { margin: 0, color: 'var(--text)', fontSize: 12, lineHeight: 2 },
  tables: { display: 'flex', flexDirection: 'column', gap: 12, minWidth: 0 },
  input: { width: '100%', background: 'rgba(0,5,25,0.92)', border: '2px solid var(--accent)', color: 'var(--text)', fontFamily: 'var(--pixel-font)', padding: 14, minHeight: 54 },
  options: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 12, minWidth: 0 },
  option: { fontFamily: 'var(--pixel-font)', background: 'rgba(0,5,25,0.8)', color: 'var(--text)', border: '2px solid', padding: 12, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 10, cursor: 'pointer', minWidth: 0 },
  actions: { display: 'flex', justifyContent: 'flex-end', gap: 10 },
  wrong: { color: 'var(--danger)', border: '1px solid rgba(255,68,68,0.35)', padding: 12, fontSize: 11, lineHeight: 1.8 },
  resultShell: { height: '100%', minHeight: 0, display: 'flex', flexDirection: 'column' },
  resultBody: { flex: 1, minHeight: 0, overflowY: 'auto', padding: 18, display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 980, width: '100%', margin: '0 auto' },
  footer: { flex: '0 0 auto', display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', padding: '12px 14px calc(env(safe-area-inset-bottom, 0px) + 12px)', background: 'rgba(13,13,26,0.96)', borderTop: '1px solid rgba(0,255,136,0.22)' },
  gameOver: { color: 'var(--danger)', fontSize: 'clamp(24px, 8vw, 46px)', textAlign: 'center' },
  answerBox: { display: 'flex', flexDirection: 'column', gap: 8, border: '1px solid rgba(255,221,0,0.3)', padding: 12, color: 'var(--accent2)', fontSize: 10 },
  empty: { margin: 'auto', color: 'var(--text-dim)' },
};
