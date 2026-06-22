import { useMemo, useState } from 'react';
import { CODE_PATHS } from '../data/sql/course';
import BackButton from '../components/BackButton';
import { getShuffleEligibleQuestions, SHUFFLE_COUNTS, SHUFFLE_FILTERS } from '../utils/worldShuffle';

const SHUFFLE_MODES = [
  { id: 'all', label: 'ALL' },
  { id: 'decode', label: 'DECODE' },
  { id: 'execute', label: 'EXECUTE' },
  { id: 'debug', label: 'DEBUG' },
];

const LANGUAGES = [
  { id: 'python', label: 'PYTHON' },
  { id: 'javascript', label: 'JAVASCRIPT' },
];

export default function CodePathsScreen({ onBack, onOpenSql, onOpenTypeScript, onOpenC, progress, meta, worldShuffleRun, onStartShuffle, onContinueShuffle }) {
  const [languageId, setLanguageId] = useState('python');
  const [mode, setMode] = useState('all');
  const [filter, setFilter] = useState('all');
  const [requestedCount, setRequestedCount] = useState(5);
  const available = useMemo(
    () => getShuffleEligibleQuestions(progress || {}, { languageId, mode, filter, meta }).length,
    [progress, languageId, mode, filter, meta],
  );
  const hasActiveRun = worldShuffleRun?.status === 'active' && (worldShuffleRun.queue?.length || 0) > 0;
  return (
    <div style={styles.wrap} className="fade-in">
      <div style={styles.header}>
        <BackButton onClick={onBack} />
        <div>
          <div style={styles.title}>CODE PATHS</div>
          <div style={styles.sub}>学びたい言語のパスを選択</div>
        </div>
      </div>
      <div style={styles.grid}>
        {CODE_PATHS.map(path => {
          const active = path.status === 'active';
          const openHandlers = { sql: onOpenSql, typescript: onOpenTypeScript, c: onOpenC };
          return (
            <button
              key={path.id}
              style={{ ...styles.card, opacity: active ? 1 : 0.55, borderColor: active ? 'var(--accent)' : 'var(--text-dim)' }}
              onClick={active ? () => openHandlers[path.id]?.() : undefined}
              disabled={!active}
            >
              <div style={styles.cardTitle}>{path.title}</div>
              <div style={styles.cardSub}>{active ? path.subtitle : 'COMING SOON'}</div>
              <div style={styles.cardStatus}>{active ? 'ACTIVE' : 'LOCKED'}</div>
            </button>
          );
        })}
      </div>
      <section style={styles.shuffle}>
        <div style={styles.shuffleTitle}>WORLD SHUFFLE</div>
        <div style={styles.shuffleSub}>Unlocked WORLD QUEST questions only. No stage clear medals are awarded here.</div>
        {hasActiveRun && (
          <div style={styles.resumeBox}>
            <div style={styles.resumeText}>
              続きがあります： {(worldShuffleRun.currentIndex || 0) + 1} / {worldShuffleRun.queue.length} 問
            </div>
            <button className="pixel-btn" style={styles.resumeBtn} onClick={onContinueShuffle}>
              CONTINUE
            </button>
          </div>
        )}
        <div style={styles.controls}>
          <Segment label="LANGUAGE" items={LANGUAGES} value={languageId} onChange={setLanguageId} />
          <Segment label="MODE" items={SHUFFLE_MODES} value={mode} onChange={setMode} />
          <Segment label="QUESTION POOL" items={SHUFFLE_FILTERS} value={filter} onChange={setFilter} />
          <Segment label="QUESTION COUNT" items={SHUFFLE_COUNTS.map(count => ({ id: count, label: String(count) }))} value={requestedCount} onChange={setRequestedCount} />
        </div>
        <div style={styles.available}>AVAILABLE: {available}</div>
        <button
          className="pixel-btn"
          style={styles.startBtn}
          disabled={available === 0}
          onClick={() => onStartShuffle?.({ languageId, mode, filter, requestedCount })}
        >
          START RANDOM SHUFFLE
        </button>
        {hasActiveRun && (
          <div style={styles.resumeHint}>※ 新しく始めると、現在進行中のシャッフルは上書きされます。</div>
        )}
      </section>
    </div>
  );
}

function Segment({ label, items, value, onChange }) {
  return (
    <div style={styles.segment}>
      <div style={styles.segmentLabel}>{label}</div>
      <div style={styles.segmentOptions}>
        {items.map(item => (
          <button
            key={item.id}
            type="button"
            style={{
              ...styles.segmentBtn,
              borderColor: item.id === value ? 'var(--accent2)' : 'rgba(0,255,136,0.28)',
              color: item.id === value ? 'var(--accent2)' : 'var(--text)',
            }}
            onClick={() => onChange(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    position: 'fixed',
    inset: 0,
    background: 'var(--bg)',
    padding: '24px 20px calc(env(safe-area-inset-bottom, 0px) + 24px)',
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
  },
  header: { display: 'flex', gap: 16, alignItems: 'center', maxWidth: 980, width: '100%', margin: '0 auto' },
  title: { color: 'var(--accent)', fontSize: 'clamp(22px, 6vw, 40px)', textShadow: '0 0 18px rgba(0,255,136,0.35)' },
  sub: { color: 'var(--text-dim)', fontSize: 12, marginTop: 8 },
  grid: { width: '100%', maxWidth: 980, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 },
  card: { fontFamily: 'var(--pixel-font)', minHeight: 150, padding: 18, textAlign: 'left', background: 'var(--panel)', border: '2px solid var(--accent)', color: 'var(--text)', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 12 },
  cardTitle: { color: 'var(--accent)', fontSize: 14 },
  cardSub: { color: 'var(--text)', fontSize: 11, lineHeight: 1.8 },
  cardStatus: { marginTop: 'auto', color: 'var(--accent2)', fontSize: 9 },
  shuffle: { width: '100%', maxWidth: 980, margin: '10px auto 0', background: 'rgba(0,5,25,0.55)', border: '2px solid var(--border2)', padding: 16, display: 'flex', flexDirection: 'column', gap: 14 },
  shuffleTitle: { color: 'var(--accent2)', fontSize: 15 },
  shuffleSub: { color: 'var(--text-dim)', fontSize: 10, lineHeight: 1.8 },
  controls: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 12 },
  segment: { display: 'flex', flexDirection: 'column', gap: 8 },
  segmentLabel: { color: 'var(--text-dim)', fontSize: 8 },
  segmentOptions: { display: 'flex', flexWrap: 'wrap', gap: 6 },
  segmentBtn: { fontFamily: 'var(--pixel-font)', fontSize: 8, padding: '8px 9px', background: 'var(--bg)', border: '2px solid', cursor: 'pointer' },
  available: { color: 'var(--accent)', fontSize: 10 },
  startBtn: { alignSelf: 'flex-start', fontSize: 9 },
  resumeBox: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, padding: 12, border: '2px solid var(--accent2)', background: 'rgba(255,221,0,0.06)' },
  resumeText: { color: 'var(--accent2)', fontSize: 10, flex: 1, minWidth: 160 },
  resumeBtn: { fontSize: 9, borderColor: 'var(--accent2)', color: 'var(--accent2)' },
  resumeHint: { color: 'var(--text-dim)', fontSize: 8, lineHeight: 1.7 },
};
