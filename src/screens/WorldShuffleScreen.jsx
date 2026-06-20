import { useEffect, useMemo, useRef, useState } from 'react';
import BackButton from '../components/BackButton';
import ExplanationPanel from '../components/ExplanationPanel';
import { resolveShuffleQuestion, summarizeShuffleRun } from '../utils/worldShuffle';
import { normalizeExplanation } from '../utils/explanations';
import { WORLD_META } from '../utils/stageData';

function getType(question) {
  return question?.questionType || 'fill-blank';
}

function getCorrectAnswer(question, currentStep) {
  const type = getType(question);
  if (type === 'fill-blank') return question.blank ?? question.answer ?? '';
  if (type === 'multiple-blanks') return (question.blanks || []).join(' / ');
  if (type === 'code-ordering') return (question.answer || []).map(index => question.blocks?.[index] || `block ${index + 1}`).join(' -> ');
  if (type === 'debug-step') return currentStep?.answer;
  return question.answer;
}

export default function WorldShuffleScreen({
  run,
  onBack,
  onSaveRun,
  onRecordOutcome,
  onShuffleAgain,
  onChangeSettings,
}) {
  const currentEntry = run?.queue?.[run.currentIndex];
  const resolved = useMemo(() => currentEntry ? resolveShuffleQuestion(currentEntry) : null, [currentEntry]);
  const question = resolved?.question;
  const country = resolved?.country;
  const type = getType(question);
  const existingOutcome = run?.outcomes?.[question?.id];
  const [answer, setAnswer] = useState(run?.temp?.answer || '');
  const [selected, setSelected] = useState(run?.temp?.selected ?? null);
  const [blankAnswers, setBlankAnswers] = useState(run?.temp?.blankAnswers || []);
  const [orderingSelection, setOrderingSelection] = useState(run?.temp?.orderingSelection || []);
  const [debugStep, setDebugStep] = useState(run?.temp?.debugStep || 0);
  const [debugAnswers, setDebugAnswers] = useState(run?.temp?.debugAnswers || []);
  const [wrongCount, setWrongCount] = useState(run?.temp?.wrongCount || 0);
  const [status, setStatus] = useState(existingOutcome ? 'done' : 'idle');
  const [revealed, setRevealed] = useState(existingOutcome?.status === 'revealed');
  const recordedRef = useRef(Boolean(existingOutcome));
  const onSaveRunRef = useRef(onSaveRun);

  const isDebug = type === 'debug-step';
  const currentStep = isDebug ? question?.steps?.[debugStep] : null;
  const correctAnswer = getCorrectAnswer(question, currentStep);
  const modeMeta = WORLD_META[resolved?.worldId] || {};
  const finished = run?.status === 'completed' || !currentEntry;

  useEffect(() => {
    onSaveRunRef.current = onSaveRun;
  }, [onSaveRun]);

  useEffect(() => {
    if (!question || status === 'done') return;
    onSaveRunRef.current?.({
      temp: { answer, selected, blankAnswers, orderingSelection, debugStep, debugAnswers, wrongCount },
    });
  }, [answer, selected, blankAnswers, orderingSelection, debugStep, debugAnswers, wrongCount, status, question]);

  if (finished) {
    const summary = summarizeShuffleRun(run || {});
    return (
      <div style={styles.wrap}>
        <div style={styles.top}><BackButton onClick={onBack} /></div>
        <main style={styles.result}>
          <h1 style={styles.title}>WORLD SHUFFLE RESULT</h1>
          <div style={styles.resultGrid}>
            <Stat label="LANGUAGE" value={run?.languageId?.toUpperCase() || '-'} />
            <Stat label="MODE" value={(run?.mode || 'all').toUpperCase()} />
            <Stat label="QUESTIONS" value={summary.total} />
            <Stat label="SOLVED" value={summary.solved} />
            <Stat label="RETRIED" value={summary.retried} />
            <Stat label="REVEALED" value={summary.revealed} />
            <Stat label="COUNTRIES" value={summary.countries.join(', ') || '-'} />
            <Stat label="MASTERY GAINED" value={summary.masteryGained} />
            <Stat label="REVIEW CHANGES" value={summary.reviewChanged} />
            <Stat label="NEW MASTERY MEDALS" value={summary.masteryMedals.length} />
          </div>
          <div style={styles.actions}>
            <button className="pixel-btn" onClick={onShuffleAgain}>SHUFFLE AGAIN</button>
            <button className="pixel-btn" onClick={onChangeSettings}>CHANGE SETTINGS</button>
            <button className="pixel-btn" onClick={onBack}>BACK TO CODE PATHS</button>
          </div>
        </main>
      </div>
    );
  }

  if (!resolved) {
    return (
      <div style={styles.wrap}>
        <div style={styles.top}><BackButton onClick={onBack} /></div>
        <main style={styles.main}><div style={styles.empty}>No playable question.</div></main>
      </div>
    );
  }

  const canSubmit = type === 'fill-blank'
    ? answer.trim().length > 0
    : type === 'multiple-blanks'
      ? (question.blanks || []).every((_, index) => (blankAnswers[index] || '').trim())
      : type === 'code-ordering'
        ? orderingSelection.length === (question.answer || []).length
        : selected !== null;

  const explanation = normalizeExplanation({
    q: question,
    qType: type,
    correctAnswer: formatCorrectAnswer(question, currentStep),
    currentStep,
    userAnswer: formatUserAnswer(),
    fallbackExplanation: currentStep?.explanation || question.explanation,
  });

  function formatUserAnswer() {
    if (type === 'fill-blank') return answer;
    if (type === 'multiple-blanks') return blankAnswers.join(' / ');
    if (type === 'code-ordering') return orderingSelection.map(index => question.blocks?.[index]).join(' -> ');
    return selected || '';
  }

  // record() persists progress (mastery/review tracking) as a side effect.
  // It must never block the UI from advancing: if the side effect throws for
  // any reason, the question would otherwise get stuck with no NEXT button
  // (status would never reach 'done'). setStatus runs first and the side
  // effect is wrapped so a failure there can't prevent moving on.
  function record(statusValue) {
    if (recordedRef.current) return;
    recordedRef.current = true;
    try {
      onRecordOutcome?.(resolved, {
        status: statusValue,
        wrongCount,
        revealed: statusValue === 'revealed',
      });
    } catch (e) {
      console.error('Failed to record shuffle outcome', e);
    }
  }

  function submit() {
    if (!canSubmit || status === 'done') return;
    let correct;
    if (type === 'fill-blank') correct = answer.trim() === String(question.blank ?? question.answer ?? '').trim();
    else if (type === 'multiple-blanks') correct = (question.blanks || []).every((item, index) => (blankAnswers[index] || '').trim() === item.trim());
    else if (type === 'code-ordering') correct = orderingSelection.every((item, index) => item === question.answer?.[index]);
    else correct = selected === correctAnswer;

    if (!correct) {
      setWrongCount(value => value + 1);
      setStatus('wrong');
      return;
    }

    if (isDebug && debugStep < 2) {
      const nextAnswers = debugAnswers.slice(0, debugStep);
      nextAnswers[debugStep] = selected;
      setDebugAnswers(nextAnswers);
      setDebugStep(debugStep + 1);
      setSelected(null);
      setStatus('idle');
      return;
    }
    const outcome = wrongCount > 0 ? 'retried' : 'solved';
    setStatus('done');
    record(outcome);
  }

  function showAnswer() {
    setRevealed(true);
    setStatus('done');
    record('revealed');
  }

  function next() {
    const queueLength = run.queue?.length || 0;
    const isLast = run.currentIndex + 1 >= queueLength;
    try {
      onSaveRun?.({
        currentIndex: run.currentIndex + 1,
        status: isLast ? 'completed' : 'active',
        temp: {},
        completedAt: isLast ? new Date().toISOString() : run.completedAt,
      });
    } catch (e) {
      console.error('Failed to advance shuffle run', e);
    }
  }

  return (
    <div style={styles.wrap}>
      <div style={styles.top}>
        <BackButton onClick={onBack} />
        <div style={styles.kicker}>WORLD SHUFFLE / {run.languageId?.toUpperCase()} / {run.currentIndex + 1} / {run.queue.length}</div>
      </div>
      <main style={styles.main}>
        <div style={styles.metaLine}>
          <span>{country.emoji} {country.name}</span>
          <span style={{ color: modeMeta.color }}>{modeMeta.label || resolved.worldId.toUpperCase()}</span>
        </div>
        <h1 style={styles.title}>{question.title}</h1>
        <p style={styles.prompt}>{isDebug ? currentStep?.question : (question.description || question.prompt)}</p>
        {question.code && <pre style={styles.code}>{question.code}</pre>}
        {isDebug && <pre style={styles.code}>{question.code || currentStep?.code}</pre>}
        {renderAnswerInput()}
        {(status === 'done' || revealed) && (
          <>
            <div style={styles.correctBox}>
              <span>{revealed ? 'REVEALED ANSWER' : 'CORRECT ANSWER'}</span>
              <code>{formatCorrectAnswer(question, currentStep)}</code>
            </div>
            <ExplanationPanel data={explanation} title="EXPLANATION" />
          </>
        )}
        {status === 'wrong' && <div style={styles.wrong}>TRY AGAIN or SHOW ANSWER.</div>}
      </main>
      <footer style={styles.footer}>
        {status !== 'done' && <button className="pixel-btn" onClick={showAnswer}>SHOW ANSWER</button>}
        {status !== 'done' ? (
          <button className="pixel-btn" disabled={!canSubmit} onClick={submit}>ANSWER</button>
        ) : (
          <button className="pixel-btn" onClick={next}>NEXT</button>
        )}
      </footer>
    </div>
  );

  function renderAnswerInput() {
    if (type === 'fill-blank') {
      return <input style={styles.input} value={answer} onChange={event => setAnswer(event.target.value)} placeholder="answer" />;
    }
    if (type === 'multiple-blanks') {
      return (
        <div style={styles.stack}>
          {(question.blanks || []).map((_, index) => (
            <input key={index} style={styles.input} value={blankAnswers[index] || ''} onChange={event => {
              const next = [...blankAnswers];
              next[index] = event.target.value;
              setBlankAnswers(next);
            }} placeholder={`blank ${index + 1}`} />
          ))}
        </div>
      );
    }
    if (type === 'code-ordering') {
      return (
        <div style={styles.options}>
          {(question.blocks || []).map((block, index) => (
            <button key={index} style={styles.option} onClick={() => {
              if (orderingSelection.includes(index)) setOrderingSelection(orderingSelection.filter(item => item !== index));
              else setOrderingSelection([...orderingSelection, index]);
            }}>
              {orderingSelection.includes(index) ? `${orderingSelection.indexOf(index) + 1}. ` : ''}{block}
            </button>
          ))}
        </div>
      );
    }
    const options = isDebug ? currentStep?.options : question.options;
    return (
      <div style={styles.options}>
        {(options || []).map(option => (
          <button
            key={option}
            style={{ ...styles.option, borderColor: selected === option ? 'var(--accent2)' : 'rgba(0,255,136,0.25)' }}
            onClick={() => setSelected(option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

function formatCorrectAnswer(question, currentStep) {
  const type = getType(question);
  if (type === 'code-ordering') return (question.answer || []).map(index => question.blocks?.[index] || `block ${index + 1}`).join('\n');
  if (type === 'multiple-blanks') return (question.blanks || []).join(' / ');
  return String(getCorrectAnswer(question, currentStep) || '');
}

function Stat({ label, value }) {
  return (
    <div style={styles.stat}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

const styles = {
  wrap: { height: '100dvh', background: 'var(--bg)', display: 'flex', flexDirection: 'column', overflow: 'hidden' },
  top: { flex: '0 0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: 14, borderBottom: '1px solid rgba(0,255,136,0.18)' },
  kicker: { color: 'var(--accent2)', fontSize: 8, lineHeight: 1.8 },
  main: { flex: 1, minHeight: 0, overflowY: 'auto', width: '100%', maxWidth: 980, margin: '0 auto', padding: '18px 16px 28px', display: 'flex', flexDirection: 'column', gap: 14 },
  result: { flex: 1, minHeight: 0, overflowY: 'auto', width: '100%', maxWidth: 980, margin: '0 auto', padding: 18, display: 'flex', flexDirection: 'column', gap: 16 },
  metaLine: { display: 'flex', justifyContent: 'space-between', gap: 12, color: 'var(--text-dim)', fontSize: 9 },
  title: { color: 'var(--accent)', fontSize: 'clamp(18px, 5vw, 30px)', lineHeight: 1.5, margin: 0 },
  prompt: { color: 'var(--text)', fontSize: 12, lineHeight: 2, margin: 0 },
  code: { margin: 0, padding: 14, overflowX: 'auto', background: 'rgba(0,5,25,0.95)', border: '1px solid rgba(0,102,255,0.45)', color: '#b6f7d2', fontSize: 12, lineHeight: 1.8, whiteSpace: 'pre' },
  input: { width: '100%', background: 'rgba(255,221,0,0.08)', border: '2px solid var(--accent2)', color: 'var(--accent2)', fontFamily: 'var(--pixel-font)', padding: 12 },
  stack: { display: 'flex', flexDirection: 'column', gap: 10 },
  options: { display: 'grid', gap: 10 },
  option: { fontFamily: 'var(--pixel-font)', background: 'rgba(0,5,25,0.8)', color: 'var(--text)', border: '2px solid', padding: 12, textAlign: 'left', cursor: 'pointer', lineHeight: 1.7 },
  correctBox: { border: '2px solid var(--accent)', color: 'var(--accent)', padding: 12, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 10 },
  wrong: { color: 'var(--danger)', border: '1px solid rgba(255,68,68,0.35)', padding: 12, fontSize: 11 },
  footer: { flex: '0 0 auto', display: 'flex', justifyContent: 'flex-end', gap: 10, padding: '10px 14px calc(env(safe-area-inset-bottom, 0px) + 10px)', borderTop: '1px solid rgba(0,255,136,0.22)', background: 'rgba(13,13,26,0.96)' },
  resultGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 10 },
  stat: { border: '1px solid rgba(0,255,136,0.25)', padding: 12, display: 'flex', flexDirection: 'column', gap: 8, color: 'var(--text-dim)', fontSize: 8 },
  actions: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  empty: { color: 'var(--text-dim)', margin: 'auto' },
};
