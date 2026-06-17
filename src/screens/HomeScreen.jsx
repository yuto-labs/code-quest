import { useState } from 'react';
import { COUNTRIES } from '../data/countries';
import SettingsModal from '../components/SettingsModal';

export default function HomeScreen({ onNavigate, progress, user, syncing, onSendOtp, onVerifyOtp, onSignOut, onRefreshSync, onResetData, syncError, cloudStats }) {
  const [showSettings, setShowSettings] = useState(false);

  const cleared = Object.keys(progress || {}).length;
  const total = COUNTRIES.length;
  const pct = Math.round((cleared / total) * 100);

  const menuItems = [
    { id: 'map',       emoji: '🌍', label: 'WORLD MAP',  sub: '国を選んでクエストへ',   color: 'var(--accent)'  },
    { id: 'reference', emoji: '📚', label: 'REFERENCE',  sub: 'Python基礎を学ぶ',       color: 'var(--accent2)' },
    { id: 'progress',  emoji: '📊', label: 'PROGRESS',   sub: '達成状況を確認する',     color: 'var(--border2)' },
  ];

  return (
    <div style={styles.wrap} className="fade-in">

      {/* 設定ボタン（右上の丸） */}
      <button
        style={styles.settingsBtn}
        onClick={() => setShowSettings(true)}
        title="設定"
      >
        {user ? (syncing ? '⬆' : '☁') : '⚙'}
      </button>

      {/* ロゴ */}
      <div style={styles.logoArea}>
        <div style={styles.logoSmall} className="pip-blink">CODE</div>
        <div style={styles.logoSmall2} className="pip-blink">QUEST</div>
      </div>

      {/* 進捗サマリー */}
      <div style={styles.progressCard}>
        <div style={styles.progressTop}>
          <span style={styles.progressLabel}>WORLD PROGRESS</span>
          <span style={styles.progressPct}>{pct}%</span>
        </div>
        <div className="xp-bar" style={{ width: '100%', height: 14 }}>
          <div className="xp-fill" style={{ width: `${pct}%` }} />
        </div>
        <div style={styles.progressSub}>{cleared} / {total} カ国クリア</div>
      </div>

      {/* メニュー */}
      <div style={styles.menu}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            style={{ ...styles.menuBtn, borderColor: item.color }}
            onClick={() => onNavigate(item.id)}
          >
            <span style={styles.menuEmoji}>{item.emoji}</span>
            <div style={styles.menuText}>
              <div style={{ ...styles.menuLabel, color: item.color }}>{item.label}</div>
              <div style={styles.menuSub}>{item.sub}</div>
            </div>
            <span style={{ ...styles.arrow, color: item.color }}>▶</span>
          </button>
        ))}
      </div>


      {showSettings && (
        <SettingsModal
          user={user}
          syncing={syncing}
          onSendOtp={onSendOtp}
          onVerifyOtp={onVerifyOtp}
          onSignOut={onSignOut}
          onRefreshSync={onRefreshSync}
          onResetData={onResetData}
          syncError={syncError}
          cloudStats={cloudStats}
          localStats={Object.keys(progress || {}).length}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
}

const styles = {
  wrap: {
    width: '100%',
    minHeight: 'calc(100dvh - env(safe-area-inset-top, 0px))',
    background: 'var(--bg)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px 20px',
    gap: 24,
    position: 'relative',
  },
  settingsBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 44,
    height: 44,
    borderRadius: '50%',
    background: 'var(--panel)',
    border: '2px solid var(--border2)',
    color: 'var(--accent)',
    fontSize: 16,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  logoArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    lineHeight: 1,
  },
  logoSmall: {
    fontSize: 'clamp(28px, 8vw, 48px)',
    color: 'var(--accent)',
    textShadow: '3px 3px 0 #003322, 0 0 20px var(--accent)',
  },
  logoSmall2: {
    fontSize: 'clamp(28px, 8vw, 48px)',
    color: 'var(--accent2)',
    textShadow: '3px 3px 0 #332200, 0 0 20px var(--accent2)',
    marginTop: -6,
  },
  progressCard: {
    width: '100%',
    maxWidth: 480,
    background: 'var(--panel)',
    border: '2px solid var(--border2)',
    padding: '14px 18px',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  progressTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressLabel: { fontSize: 11, color: 'var(--text-dim)' },
  progressPct: { fontSize: 13, color: 'var(--accent)' },
  progressSub: { fontSize: 11, color: 'var(--text-dim)', textAlign: 'right' },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: '100%',
    maxWidth: 480,
  },
  menuBtn: {
    fontFamily: 'var(--pixel-font)',
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    padding: '18px 20px',
    background: 'var(--panel)',
    border: '2px solid',
    cursor: 'pointer',
    width: '100%',
    minHeight: 70,
    textAlign: 'left',
  },
  menuEmoji: { fontSize: 34, flexShrink: 0 },
  menuText: { flex: 1, display: 'flex', flexDirection: 'column', gap: 6 },
  menuLabel: { fontSize: 'clamp(12px, 3.5vw, 15px)' },
  menuSub: { fontSize: 11, color: 'var(--text-dim)' },
  arrow: { fontSize: 12, flexShrink: 0 },
};
