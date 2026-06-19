import { CODE_PATHS } from '../data/sql/course';

export default function CodePathsScreen({ onBack, onOpenSql }) {
  return (
    <div style={styles.wrap} className="fade-in">
      <div style={styles.header}>
        <button className="pixel-btn" style={styles.back} onClick={onBack}>[ &lt; BACK ]</button>
        <div>
          <div style={styles.title}>CODE PATHS</div>
          <div style={styles.sub}>学びたい言語のパスを選択</div>
        </div>
      </div>
      <div style={styles.grid}>
        {CODE_PATHS.map(path => {
          const active = path.status === 'active';
          return (
            <button
              key={path.id}
              style={{ ...styles.card, opacity: active ? 1 : 0.55, borderColor: active ? 'var(--accent)' : 'var(--text-dim)' }}
              onClick={active ? onOpenSql : undefined}
              disabled={!active}
            >
              <div style={styles.cardTitle}>{path.title}</div>
              <div style={styles.cardSub}>{active ? path.subtitle : 'COMING SOON'}</div>
              <div style={styles.cardStatus}>{active ? 'ACTIVE' : 'LOCKED'}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  wrap: { minHeight: '100dvh', background: 'var(--bg)', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 24, overflowY: 'auto' },
  header: { display: 'flex', gap: 16, alignItems: 'center', maxWidth: 980, width: '100%', margin: '0 auto' },
  back: { fontSize: 8, padding: '10px 12px' },
  title: { color: 'var(--accent)', fontSize: 'clamp(22px, 6vw, 40px)', textShadow: '0 0 18px rgba(0,255,136,0.35)' },
  sub: { color: 'var(--text-dim)', fontSize: 12, marginTop: 8 },
  grid: { width: '100%', maxWidth: 980, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 },
  card: { fontFamily: 'var(--pixel-font)', minHeight: 150, padding: 18, textAlign: 'left', background: 'var(--panel)', border: '2px solid var(--accent)', color: 'var(--text)', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 12 },
  cardTitle: { color: 'var(--accent)', fontSize: 14 },
  cardSub: { color: 'var(--text)', fontSize: 11, lineHeight: 1.8 },
  cardStatus: { marginTop: 'auto', color: 'var(--accent2)', fontSize: 9 },
};
