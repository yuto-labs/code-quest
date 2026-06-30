import { useEffect, useMemo, useRef, useState } from 'react';
import { SQL_QUESTIONS_BY_ID } from '../data/sql/questions';
import { SQL_GLOBAL_FACTS_BY_ID } from '../data/sql/global_facts';
import { SqlExplanation, SqlQueryView, SqlResultTable, SqlTableView } from '../components/SqlComponents';
import { SQL_MAX_HEARTS } from '../utils/sqlProgress';
import { buildCompletedSql, buildSqlHint, buildSqlOptionBreakdown, evaluateSqlResult, normalizeSqlOptionLabel, SQL_MODE_LABELS } from '../utils/sqlDisplay';
import BackButton from '../components/BackButton';
import { triggerFeedback } from '../utils/feedback';

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
  const [showHint, setShowHint] = useState(false);
  const resultBodyRef = useRef(null);
  const onSaveResumeRef = useRef(onSaveResume);
  const navigatingRef = useRef(false);
  const fact = useMemo(() => SQL_GLOBAL_FACTS_BY_ID[question?.globalFactIds?.[0]], [question]);
  const chapterQuestions = useMemo(() => {
    if (!question) return [];
    return Object.values(SQL_QUESTIONS_BY_ID)
      .filter(item => item.chapterId === question.chapterId)
      .sort((a, b) => a.order - b.order);
  }, [question]);

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


  const isDecode = question?.mode === 'decode';
  const isDebug = question?.mode === 'debug';
  const currentDebug = isDebug ? question.debugSteps?.[debugStep] : null;
  const currentCorrect = isDebug ? currentDebug?.answer : question?.answer;
  const canSubmit = Boolean(question) && (isDecode ? answer.trim().length > 0 : selected !== null);
  const completedQuery = question ? buildCompletedSql(question.query, currentCorrect) : '';
  const displayedQuery = question ? (isDebug && debugStep === 1 ? question.explanation?.completedQuery : question.query) : '';
  const expectedResult = question ? (isDecode ? evaluateSqlResult(question, completedQuery) : question.expectedResult) : null;
  const currentHint = question ? buildSqlHint(question, currentDebug) : '';
  const correctOption = question && !isDecode && !isDebug ? question.options?.find(option => option.id === currentCorrect) : null;
  const displayCorrectAnswer = correctOption ? normalizeSqlOptionLabel(correctOption) : currentCorrect;

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
    setShowHint(false);
    onRetry?.(question);
  };

  const handleSubmit = () => {
    const value = isDecode ? answer.trim() : selected;
    const correct = value === currentCorrect;
    setSubmittedAnswer(value);
    if (correct) {
      triggerFeedback('correct');
      if (isDebug && debugStep < 2) {
        const nextAnswers = [...debugAnswers.slice(0, debugStep), value];
        setDebugAnswers(nextAnswers);
        setDebugStep(debugStep + 1);
        setSelected(null);
        setShowHint(false);
        setStatus('idle');
        return;
      }
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
  };

  const handleNext = () => {
    if (navigatingRef.current || !question) return;
    navigatingRef.current = true;
    onComplete?.(question);
  };

  useEffect(() => {
    const handler = (event) => {
      if (event.key !== 'Enter') return;
      if (event.isComposing) return;
      event.preventDefault();
      if (status === 'correct') {
        handleNext();
      } else if (status === 'idle' && canSubmit) {
        handleSubmit();
      }
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

  const explanation = {
    ...question.explanation,
    correctAnswer: isDebug ? currentCorrect : (question.explanation?.correctAnswer || currentCorrect),
    completedQuery: isDecode ? completedQuery : question.explanation?.completedQuery,
    optionBreakdown: isDebug
      ? buildSqlOptionBreakdown({ options: currentDebug?.options, answer: currentDebug?.answer, optionExplanations: currentDebug?.optionExplanations })
      : buildSqlOptionBreakdown({ options: question.options, answer: question.answer, optionExplanations: question.optionExplanations }),
  };

  const renderChapterRoute = () => {
    const completed = new Set(progress?.chapters?.[question.chapterId]?.completedQuestionIds || []);
    const missionDone = Boolean(progress?.chapters?.[question.chapterId]?.missionCompleted);
    return (
      <div
        className={`sql-step-route ${status === 'correct' ? 'sql-step-route-advance' : ''}`}
        aria-label={`SQL chapter progress ${question.order} of 10`}
      >
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
              title={`${item.order}. ${SQL_MODE_LABELS[item.mode] || item.mode}`}
            >
              {item.order}
            </div>
          );
        })}
      </div>
    );
  };

  const renderCorrectFeedback = () => {
    if (isDecode || String(question.query || '').includes('___BLANK___')) {
      const [beforeBlank, afterBlank = ''] = String(question.query || '').split('___BLANK___');
      return (
        <div style={styles.feedbackCorrect} className="sql-feedback-query">
          <div style={styles.feedbackTitle}>QUERY COMPLETED</div>
          <pre style={styles.completedQuery}>
            <span>{beforeBlank}</span>
            <mark style={styles.answerMark}>{currentCorrect}</mark>
            <span>{afterBlank}</span>
          </pre>
        </div>
      );
    }

    if (question.mode === 'execute') {
      return (
        <div style={styles.feedbackCorrect} className="sql-feedback-result">
          <div style={styles.feedbackTitle}>RESULT VERIFIED</div>
          <SqlResultTable title="VERIFIED RESULT" result={expectedResult} animateRows />
        </div>
      );
    }

    if (isDebug) {
      return (
        <div style={styles.feedbackCorrect} className="sql-feedback-fix">
          <div style={styles.feedbackTitle}>FIX APPLIED</div>
          <div style={styles.fixSwap}>
            <code style={styles.fixBad}>{submittedAnswer || 'incorrect fragment'}</code>
            <span style={styles.fixArrow}>→</span>
            <code style={styles.fixGood}>{displayCorrectAnswer}</code>
          </div>
        </div>
      );
    }

    return (
      <div style={styles.feedbackCorrect}>
        <div style={styles.feedbackTitle}>CORRECT!</div>
        <div style={styles.answerLine}>
          <span>ANSWER</span>
          <code>{displayCorrectAnswer}</code>
        </div>
      </div>
    );
  };

  const renderDecodeQuery = () => {
    const [beforeBlank, afterBlank = ''] = String(question.query || '').split('___BLANK___');
    return (
      <section style={styles.querySection}>
        <div style={styles.queryLabel}>QUERY</div>
        <pre style={styles.queryFill}>
          <span>{beforeBlank}</span>
          <input
            style={styles.inlineBlank}
            value={status === 'correct' ? currentCorrect : answer}
            onChange={event => {
              if (status === 'correct') return;
              setAnswer(event.target.value);
              if (status === 'wrong') setStatus('idle');
            }}
            disabled={status === 'correct' || gameOver}
            placeholder="ここに入力"
            autoFocus
          />
          <span>{afterBlank}</span>
        </pre>
      </section>
    );
  };

  const renderOptions = () => (
    <div style={styles.options}>
      {(isDebug ? currentDebug?.options : question.options)?.map(option => {
        const value = typeof option === 'string' ? option : option.id;
        const selectedNow = selected === value;
        const optionResult = !isDebug && question.options?.find(item => item.id === value)?.result;
        return (
          <button
            key={value}
            style={{ ...styles.option, borderColor: selectedNow ? 'var(--accent2)' : 'var(--border2)' }}
            onClick={() => {
              if (status === 'correct' || gameOver) return;
              setSelected(value);
              if (status === 'wrong') setStatus('idle');
            }}
            disabled={status === 'correct' || gameOver}
          >
            <span>{normalizeSqlOptionLabel(option)}</span>
            {optionResult && <SqlResultTable result={optionResult} />}
          </button>
        );
      })}
    </div>
  );

  const renderActionButtons = () => (
    <div style={styles.actionInner}>
      {status === 'correct' ? (
        <button className="pixel-btn" onClick={handleNext}>NEXT</button>
      ) : (
        <>
          <button
            className="pixel-btn"
            style={{ fontSize: 9, color: 'var(--text-dim)', borderColor: 'var(--text-dim)' }}
            onClick={() => setShowHint(value => !value)}
          >
            HINT
          </button>
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
            <div style={styles.sub}>SQL PATH FAILED</div>
            <div style={styles.answerBox}>
              <span>YOUR ANSWER</span>
              <code>{submittedAnswer || 'No answer'}</code>
            </div>
            {question.tables.map(table => <SqlTableView key={table.id} table={table} />)}
            <SqlQueryView query={isDecode ? completedQuery : question.query} />
            <SqlResultTable title="EXPECTED RESULT" result={expectedResult} />
            <SqlExplanation explanation={explanation} fact={fact} />
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
          <div style={styles.kicker}>{question.chapterId} / {SQL_MODE_LABELS[question.mode] || question.mode.toUpperCase()} / Q{question.order}/10</div>
        </div>
        <main style={styles.resultBody}>
          {renderChapterRoute()}
          {renderCorrectFeedback()}
          <SqlExplanation explanation={explanation} fact={fact} />
        </main>
        <div style={styles.activeFooter}>
          {renderActionButtons()}
        </div>
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
            <div style={styles.kicker}>{question.chapterId} / {SQL_MODE_LABELS[question.mode] || question.mode.toUpperCase()} / Q{question.order}/10</div>
            <div style={styles.hearts} aria-label={`hearts ${hearts} of ${SQL_MAX_HEARTS}`}>
              {Array.from({ length: SQL_MAX_HEARTS }).map((_, index) => (
                <span key={index} style={{ opacity: index < hearts ? 1 : 0.2 }}>
                  {index < hearts ? '♥' : '·'}
                </span>
              ))}
            </div>
          </div>
          {renderChapterRoute()}
          <h1 style={styles.title}>{question.title}</h1>
          <p style={styles.prompt}>{isDebug ? currentDebug?.question : question.prompt}</p>
        </header>

        <div style={styles.tables}>
          {question.tables.map(table => <SqlTableView key={table.id} table={table} />)}
        </div>

        {isDecode ? renderDecodeQuery() : <SqlQueryView query={displayedQuery} />}
        {isDecode && <SqlResultTable title="EXPECTED RESULT" result={expectedResult} />}
        {!isDecode && renderOptions()}

        {showHint && currentHint && <div style={styles.hint}>HINT: {currentHint}</div>}

        {status === 'wrong' && (
          <div style={styles.wrong}>
            Incorrect. TABLE、QUERY、EXPECTED RESULT をもう一度見比べてください。
          </div>
        )}
      </main>
      <div style={styles.activeFooter}>
        {renderActionButtons()}
      </div>
    </div>
  );
}

const styles = {
  wrap: { height: '100dvh', background: 'var(--bg)', display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' },
  top: { flex: '0 0 auto', display: 'flex', gap: 10, justifyContent: 'space-between', padding: 'calc(env(safe-area-inset-top, 0px) + 14px) 14px 14px', borderBottom: '1px solid rgba(0,255,136,0.18)' },
  smallBtn: { fontSize: 8, padding: '10px 12px' },
  main: { flex: 1, minHeight: 0, overflowY: 'auto', padding: '18px 16px 28px', display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 980, margin: '0 auto' },
  header: { display: 'flex', flexDirection: 'column', gap: 10 },
  statusBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 },
  kicker: { color: 'var(--accent2)', fontSize: 9 },
  hearts: { display: 'flex', gap: 5, color: 'var(--danger)', fontSize: 18, textShadow: '0 0 8px rgba(255,68,68,0.45)' },
  progressBar: { height: 10, width: '100%' },
  title: { margin: 0, color: 'var(--accent)', fontSize: 'clamp(18px, 5vw, 30px)', lineHeight: 1.5 },
  sub: { color: 'var(--text-dim)', fontSize: 11 },
  prompt: { margin: 0, color: 'var(--text)', fontSize: 12, lineHeight: 2 },
  tables: { display: 'flex', flexDirection: 'column', gap: 12, minWidth: 0 },
  querySection: { display: 'flex', flexDirection: 'column', gap: 7, minWidth: 0 },
  queryLabel: { fontFamily: 'var(--pixel-font)', fontSize: 9, color: 'var(--accent2)', lineHeight: 1.8 },
  queryFill: { margin: 0, padding: '16px 18px', width: '100%', minWidth: 0, overflowX: 'auto', background: 'rgba(0,5,25,0.95)', border: '1px solid rgba(0,102,255,0.45)', color: '#b6f7d2', fontSize: 13, lineHeight: 1.9, whiteSpace: 'pre', fontFamily: 'var(--mono-font, ui-monospace, SFMono-Regular, Consolas, monospace)' },
  inlineBlank: { minWidth: 110, maxWidth: 'min(420px, 80vw)', background: 'rgba(255,221,0,0.08)', border: '2px solid var(--accent2)', color: 'var(--accent2)', fontFamily: 'inherit', fontSize: 13, padding: '4px 7px', margin: '0 4px', outline: 'none' },
  options: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 12, minWidth: 0 },
  option: { fontFamily: 'var(--pixel-font)', background: 'rgba(0,5,25,0.8)', color: 'var(--text)', border: '2px solid', padding: 12, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 10, cursor: 'pointer', minWidth: 0 },
  activeFooter: { flex: '0 0 auto', padding: '10px 14px calc(env(safe-area-inset-bottom, 0px) + 10px)', background: 'rgba(13,13,26,0.96)', borderTop: '1px solid rgba(0,255,136,0.22)' },
  actionInner: { width: '100%', maxWidth: 980, margin: '0 auto', display: 'flex', justifyContent: 'flex-end', gap: 10 },
  feedbackCorrect: { border: '2px solid rgba(0,255,136,0.45)', background: 'rgba(0,255,136,0.07)', color: 'var(--accent)', padding: 14, display: 'flex', flexDirection: 'column', gap: 10 },
  feedbackTitle: { fontFamily: 'var(--pixel-font)', fontSize: 12, textShadow: '0 0 10px rgba(0,255,136,0.45)' },
  completedQuery: { margin: 0, overflowX: 'auto', color: '#b6f7d2', fontSize: 12, lineHeight: 1.9, whiteSpace: 'pre', fontFamily: 'var(--mono-font, ui-monospace, SFMono-Regular, Consolas, monospace)' },
  answerMark: { background: 'rgba(255,221,0,0.18)', color: 'var(--accent2)', border: '1px solid rgba(255,221,0,0.45)', padding: '2px 5px' },
  answerLine: { display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', fontSize: 10, color: 'var(--text)' },
  fixSwap: { display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', fontSize: 11, lineHeight: 1.8 },
  fixBad: { color: 'var(--danger)', textDecoration: 'line-through' },
  fixArrow: { color: 'var(--accent2)' },
  fixGood: { color: 'var(--accent)', textShadow: '0 0 8px rgba(0,255,136,0.35)' },
  hint: { border: '1px solid rgba(255,221,0,0.35)', background: 'rgba(255,221,0,0.06)', color: 'var(--accent2)', padding: 12, fontSize: 11, lineHeight: 1.9 },
  wrong: { color: 'var(--danger)', border: '1px solid rgba(255,68,68,0.35)', padding: 12, fontSize: 11, lineHeight: 1.8 },
  resultShell: { height: '100%', minHeight: 0, display: 'flex', flexDirection: 'column' },
  resultBody: { flex: 1, minHeight: 0, overflowY: 'auto', padding: 18, display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 980, width: '100%', margin: '0 auto' },
  footer: { flex: '0 0 auto', display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', padding: '12px 14px calc(env(safe-area-inset-bottom, 0px) + 12px)', background: 'rgba(13,13,26,0.96)', borderTop: '1px solid rgba(0,255,136,0.22)' },
  gameOver: { color: 'var(--danger)', fontSize: 'clamp(24px, 8vw, 46px)', textAlign: 'center' },
  answerBox: { display: 'flex', flexDirection: 'column', gap: 8, border: '1px solid rgba(255,221,0,0.3)', padding: 12, color: 'var(--accent2)', fontSize: 10 },
  empty: { margin: 'auto', color: 'var(--text-dim)' },
};
