import { useState, useEffect } from 'react';

export default function TitleScreen({ onStart }) {
  const [showPress, setShowPress] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setShowPress(p => !p), 800);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={styles.wrap}>
      <div style={styles.stars} />

      <div style={styles.center}>
        <div style={styles.logo}>
          <div style={styles.logoSub}>- PIXEL RPG CODING ADVENTURE -</div>
          <div style={styles.logoMain}>CODE</div>
          <div style={styles.logoMain2}>QUEST</div>
        </div>

        <div style={styles.desc}>
          🌍 世界を旅しながら<br />
          プログラミングを学ぼう
        </div>

        <button
          style={{ ...styles.startBtn, opacity: showPress ? 1 : 0.3 }}
          onClick={onStart}
        >
          ▶ PRESS START
        </button>

        <div style={styles.version}>v0.1.0 &nbsp;|&nbsp; PYTHON EDITION</div>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    width: '100%',
    height: 'calc(100dvh - env(safe-area-inset-top, 0px))',
    background: 'var(--bg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  stars: {
    position: 'absolute',
    inset: 0,
    background: `
      radial-gradient(1px 1px at 10% 20%, #fff 0%, transparent 100%),
      radial-gradient(1px 1px at 30% 60%, #fff 0%, transparent 100%),
      radial-gradient(1px 1px at 50% 10%, #fff 0%, transparent 100%),
      radial-gradient(1px 1px at 70% 80%, #fff 0%, transparent 100%),
      radial-gradient(1px 1px at 85% 35%, #fff 0%, transparent 100%),
      radial-gradient(1px 1px at 20% 85%, #fff 0%, transparent 100%),
      radial-gradient(1px 1px at 60% 50%, #fff 0%, transparent 100%),
      radial-gradient(1px 1px at 90% 15%, #fff 0%, transparent 100%),
      radial-gradient(2px 2px at 45% 70%, rgba(0,255,136,0.4) 0%, transparent 100%),
      radial-gradient(2px 2px at 15% 45%, rgba(0,102,255,0.4) 0%, transparent 100%)
    `,
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 32,
    zIndex: 1,
    padding: '0 20px',
    textAlign: 'center',
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  logoSub: {
    fontSize: 8,
    color: 'var(--text-dim)',
    letterSpacing: 2,
    marginBottom: 8,
  },
  logoMain: {
    fontSize: 'clamp(40px, 12vw, 80px)',
    color: 'var(--accent)',
    textShadow: '4px 4px 0 #003322, 0 0 30px var(--accent)',
    lineHeight: 1,
  },
  logoMain2: {
    fontSize: 'clamp(40px, 12vw, 80px)',
    color: 'var(--accent2)',
    textShadow: '4px 4px 0 #332200, 0 0 30px var(--accent2)',
    lineHeight: 1,
    marginTop: -8,
  },
  desc: {
    fontSize: 'clamp(8px, 2vw, 11px)',
    color: 'var(--text)',
    lineHeight: 2.2,
  },
  startBtn: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 'clamp(10px, 3vw, 14px)',
    background: 'transparent',
    color: 'var(--accent2)',
    border: 'none',
    cursor: 'pointer',
    transition: 'opacity 0.1s',
    letterSpacing: 2,
  },
  version: {
    fontSize: 8,
    color: 'var(--text-dim)',
    marginTop: 16,
  },
};
