import { WORLDS } from '../data/worlds';

export default function WorldScreen({ onSelectWorld, onBack }) {
  return (
    <div style={s.wrap} className="fade-in">
      <div style={s.crtScanlines} />

      <div style={s.header}>
        <button style={s.backBtn} onClick={onBack}>{'[ < BACK ]'}</button>
        <span style={s.title}>{'> SELECT_WORLD'}<span style={s.cursor}>_</span></span>
      </div>

      <div style={s.body}>
        <p style={s.sub}>// プレイするワールドを選択してください</p>

        <div style={s.cards}>
          {WORLDS.map((w) => (
            <button key={w.id} style={{ ...s.card, borderColor: w.color + '55' }}
              onClick={() => onSelectWorld(w.id)}
            >
              <div style={s.cardTop}>
                <span style={s.cardIcon}>{w.icon}</span>
                <div style={s.cardTitles}>
                  <div style={{ ...s.cardName, color: w.color, textShadow: `0 0 8px ${w.color}` }}>
                    {w.name}
                  </div>
                  <div style={s.cardSub}>{w.subtitle}</div>
                </div>
                <div style={{ ...s.diffBadge, borderColor: w.color + '88', color: w.color }}>
                  {w.difficulty}
                </div>
              </div>

              <p style={s.cardDesc}>{w.description}</p>

              <div style={s.cardFooter}>
                <span style={s.recommendLabel}>// おすすめ:</span>
                <span style={s.recommendText}>{w.recommendedFor}</span>
              </div>

              <div style={{ ...s.cardArrow, color: w.color }}>{'[ > START ]'}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const s = {
  wrap: {
    position: 'fixed',
    top: 'calc(var(--vv-offset, 0px) + env(safe-area-inset-top, 0px))',
    left: 0,
    right: 0,
    bottom: 0,
    background: '#04050e',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    zIndex: 1,
  },
  crtScanlines: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.12) 2px,rgba(0,0,0,0.12) 4px)`,
    pointerEvents: 'none',
    zIndex: 20,
  },
  header: {
    position: 'relative',
    zIndex: 25,
    padding: '16px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    borderBottom: '1px solid rgba(0,255,136,0.15)',
  },
  backBtn: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 'clamp(9px, 2.5vw, 11px)',
    background: 'transparent',
    color: '#00ffcc',
    border: 'none',
    cursor: 'pointer',
    letterSpacing: 1,
    textShadow: '0 0 5px #00ffcc, 0 0 12px #00ffaa',
    padding: 0,
  },
  title: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 'clamp(11px, 3vw, 14px)',
    color: '#00ffdd',
    letterSpacing: 2,
    textShadow: '0 0 8px #00ffaa',
  },
  cursor: { animation: 'blink 1s step-end infinite', color: '#00ff88' },
  body: {
    flex: 1,
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 680,
    margin: '0 auto',
    width: '100%',
    position: 'relative',
    zIndex: 5,
  },
  sub: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 'clamp(9px, 2.5vw, 11px)',
    color: '#445566',
    margin: 0,
  },
  cards: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  card: {
    fontFamily: 'var(--pixel-font)',
    background: 'rgba(4,8,20,0.90)',
    border: '1px solid',
    padding: '20px 22px',
    cursor: 'pointer',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    transition: 'border-color 0.15s, background 0.15s',
    width: '100%',
  },
  cardTop: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    flexWrap: 'wrap',
  },
  cardIcon: { fontSize: 36, flexShrink: 0 },
  cardTitles: { flex: 1, display: 'flex', flexDirection: 'column', gap: 5 },
  cardName: {
    fontSize: 'clamp(14px, 3.8vw, 18px)',
    letterSpacing: 3,
  },
  cardSub: {
    fontSize: 'clamp(9px, 2.4vw, 11px)',
    color: '#556677',
    letterSpacing: 1,
  },
  diffBadge: {
    fontSize: 'clamp(9px, 2.5vw, 11px)',
    border: '1px solid',
    padding: '4px 9px',
    flexShrink: 0,
  },
  cardDesc: {
    fontSize: 'clamp(10px, 2.6vw, 12px)',
    color: '#8899aa',
    margin: 0,
    lineHeight: 2,
  },
  cardFooter: {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
  },
  recommendLabel: { fontSize: 'clamp(9px, 2.5vw, 10px)', color: '#445566' },
  recommendText: { fontSize: 'clamp(10px, 2.8vw, 11px)', color: '#667788' },
  cardArrow: {
    fontSize: 'clamp(10px, 2.8vw, 12px)',
    letterSpacing: 2,
    marginTop: 4,
    textAlign: 'right',
  },
};
