export default function BottomNav({ current, onNavigate }) {
  const items = [
    { id: 'home',      emoji: '🏠', label: 'HOME' },
    { id: 'map',       emoji: '🌍', label: 'MAP' },
    { id: 'reference', emoji: '📚', label: 'REF' },
    { id: 'progress',  emoji: '📊', label: 'STATS' },
  ];

  return (
    <div style={styles.wrap}>
      {items.map((item) => (
        <button
          key={item.id}
          style={{
            ...styles.btn,
            borderTop: current === item.id
              ? '3px solid var(--accent)'
              : '3px solid transparent',
            color: current === item.id ? 'var(--accent)' : 'var(--text-dim)',
          }}
          onClick={() => onNavigate(item.id)}
        >
          <span style={styles.emoji}>{item.emoji}</span>
          <span style={styles.label}>{item.label}</span>
        </button>
      ))}
    </div>
  );
}

const styles = {
  wrap: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: 'calc(56px + env(safe-area-inset-bottom, 0px))',
    paddingBottom: 'env(safe-area-inset-bottom, 0px)',
    background: 'var(--bg2)',
    borderTop: '1px solid #222',
    display: 'flex',
    zIndex: 100,
  },
  btn: {
    flex: 1,
    fontFamily: 'var(--pixel-font)',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    transition: 'color 0.15s, border-color 0.15s',
    paddingTop: 4,
  },
  emoji: { fontSize: 18 },
  label: { fontSize: 8, letterSpacing: 1 },
};
