import { useState } from 'react';
import SettingsModal from '../components/SettingsModal';
import { getWorldStats } from '../utils/progress';
import { WORLD_META, WORLD_IDS } from '../utils/stageData';

export default function HomeScreen({ onNavigate, progress, resume, onContinue, user, syncing, onSendOtp, onVerifyOtp, onSignOut, onRefreshSync, onResetData, syncError, cloudStats }) {
  const [showSettings, setShowSettings] = useState(false);

  const worldStats = getWorldStats(progress || {});

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
        <span style={styles.progressLabel}>WORLD PROGRESS</span>
        {WORLD_IDS.map(wid => {
          const meta = WORLD_META[wid];
          const { cleared = 0, available = 0 } = worldStats[wid] || {};
          const pct = available > 0 ? Math.round((cleared / available) * 100) : 0;
          return (
            <div key={wid} style={styles.worldRow}>
              <span style={{ ...styles.worldLabel, color: meta.color }}>{meta.label}</span>
              <div className="xp-bar" style={{ flex: 1, height: 10 }}>
                <div className="xp-fill" style={{ width: `${pct}%`, background: meta.color, boxShadow: `0 0 6px ${meta.color}88` }} />
              </div>
              <span style={styles.worldCount}>{cleared}/{available}</span>
            </div>
          );
        })}
      </div>

      {resume && (
        <button style={styles.continueBtn} onClick={onContinue}>
          <span style={styles.continueLabel}>CONTINUE</span>
          <span style={styles.continueSub}>
            {resume.worldId?.toUpperCase()} / {resume.countryId} / {resume.languageId}
            {resume.screen === 'challenge' ? ` / Q${(resume.questionIndex ?? 0) + 1}` : ' / MAP'}
            {Number.isInteger(resume.debugStepIndex) ? ` / DEBUG STEP ${resume.debugStepIndex + 1}` : ''}
          </span>
        </button>
      )}

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
    gap: 10,
  },
  progressLabel: { fontSize: 9, color: 'var(--text-dim)', letterSpacing: 1 },
  worldRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  worldLabel: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
    letterSpacing: 1,
    minWidth: 52,
    flexShrink: 0,
  },
  worldCount: {
    fontSize: 9,
    color: 'var(--text-dim)',
    minWidth: 32,
    textAlign: 'right',
    flexShrink: 0,
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: '100%',
    maxWidth: 480,
  },
  continueBtn: {
    fontFamily: 'var(--pixel-font)',
    width: '100%',
    maxWidth: 480,
    background: 'rgba(255,221,0,0.08)',
    border: '2px solid var(--accent2)',
    color: 'var(--accent2)',
    cursor: 'pointer',
    padding: '14px 18px',
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    textAlign: 'left',
  },
  continueLabel: { fontSize: 12, letterSpacing: 1 },
  continueSub: { fontSize: 8, color: 'var(--text)', lineHeight: 1.8 },
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
