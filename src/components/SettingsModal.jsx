import { useState } from 'react';

export default function SettingsModal({ user, syncing, onSendOtp, onVerifyOtp, onRefreshSync, onClose, syncError, cloudStats, localStats }) {
  const [step, setStep] = useState('email');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSend = async () => {
    if (!email.includes('@')) { setError('メアドを入力してください'); return; }
    setLoading(true);
    setError('');
    const { error } = await onSendOtp(email);
    setLoading(false);
    if (error) { setError(error.message || '送信失敗'); return; }
    setStep('code');
  };

  const handleVerify = async () => {
    if (code.length !== 8) { setError('8桁のコードを入力してください'); return; }
    setLoading(true);
    setError('');
    const { error } = await onVerifyOtp(email, code);
    setLoading(false);
    if (error) { setError(error.message || 'コードが違います'); return; }
    onClose();
  };

  return (
    <div style={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div style={styles.modal}>

        <div style={styles.header}>
          <span style={styles.title}>⚙ SETTINGS</span>
          <button style={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionLabel}>☁ クラウド同期</div>

          {user ? (
            <div style={styles.loggedIn}>
              <div style={styles.userEmail}>{user.email}</div>
              <div style={styles.syncBadge}>
                {syncing ? '⬆ 同期中...' : syncError ? `❌ ${syncError}` : '✅ 同期済み'}
              </div>
              <div style={styles.statsRow}>
                <span style={styles.statItem}>
                  📱 ローカル: <span style={styles.statNum}>{localStats ?? 0}</span> 件
                </span>
                <span style={styles.statItem}>
                  ☁ クラウド: <span style={styles.statNum}>
                    {cloudStats === null ? '---' : cloudStats === 0 ? 'データなし' : `${cloudStats} 件`}
                  </span>
                </span>
              </div>
              <button
                style={styles.refreshBtn}
                onClick={onRefreshSync}
                disabled={syncing}
              >
                {syncing ? '同期中...' : '🔄 今すぐ同期'}
              </button>
            </div>
          ) : step === 'email' ? (
            <div style={styles.form}>
              <div style={styles.desc}>メアドに認証コードを送ります</div>
              <input
                style={styles.input}
                type="email"
                placeholder="メールアドレス"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                autoFocus
              />
              <button style={styles.primaryBtn} onClick={handleSend} disabled={loading}>
                {loading ? '送信中...' : 'コードを送信'}
              </button>
              {error && <div style={styles.error}>{error}</div>}
            </div>
          ) : (
            <div style={styles.form}>
              <div style={styles.desc}>{email} に届いた8桁のコード</div>
              <input
                style={styles.codeInput}
                type="number"
                placeholder="00000000"
                value={code}
                onChange={(e) => setCode(e.target.value.slice(0, 8))}
                onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
                autoFocus
              />
              <button style={styles.primaryBtn} onClick={handleVerify} disabled={loading}>
                {loading ? '確認中...' : 'ログイン'}
              </button>
              <button style={styles.backBtn} onClick={() => { setStep('email'); setCode(''); setError(''); }}>
                ← 戻る
              </button>
              {error && <div style={styles.error}>{error}</div>}
            </div>
          )}
        </div>


      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.75)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 200,
    padding: 20,
  },
  modal: {
    width: '100%',
    maxWidth: 400,
    background: 'var(--bg2)',
    border: '3px solid var(--border)',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 16px',
    borderBottom: '2px solid #1a2a1a',
  },
  title: {
    fontSize: 10,
    color: 'var(--accent)',
    letterSpacing: 2,
  },
  closeBtn: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 10,
    background: 'transparent',
    color: 'var(--text-dim)',
    border: 'none',
    cursor: 'pointer',
    padding: '4px 8px',
  },
  section: {
    padding: '20px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
  sectionLabel: {
    fontSize: 8,
    color: 'var(--text-dim)',
    letterSpacing: 2,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  desc: {
    fontSize: 8,
    color: 'var(--text)',
    lineHeight: 1.8,
  },
  input: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
    background: 'var(--bg)',
    color: 'var(--text)',
    border: '2px solid #333',
    padding: '12px',
    outline: 'none',
    width: '100%',
  },
  codeInput: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 18,
    background: 'var(--bg)',
    color: 'var(--accent)',
    border: '2px solid var(--accent)',
    padding: '12px',
    outline: 'none',
    width: '100%',
    textAlign: 'center',
    letterSpacing: 10,
  },
  primaryBtn: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 9,
    background: 'var(--accent)',
    color: 'var(--bg)',
    border: 'none',
    padding: '13px',
    cursor: 'pointer',
    letterSpacing: 1,
  },
  backBtn: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
    background: 'transparent',
    color: 'var(--text-dim)',
    border: '1px solid #333',
    padding: '8px',
    cursor: 'pointer',
  },
  error: {
    fontSize: 8,
    color: 'var(--danger)',
    lineHeight: 1.8,
  },
  loggedIn: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  userEmail: {
    fontSize: 9,
    color: 'var(--accent)',
    letterSpacing: 1,
  },
  syncBadge: {
    fontSize: 8,
    color: 'var(--text-dim)',
  },
  statsRow: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
  },
  statItem: {
    fontSize: 8,
    color: 'var(--text-dim)',
  },
  statNum: {
    color: 'var(--accent)',
  },
  refreshBtn: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
    background: 'transparent',
    color: 'var(--accent)',
    border: '2px solid var(--accent)',
    padding: '10px',
    cursor: 'pointer',
  },
  signOutBtn: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
    background: 'transparent',
    color: 'var(--text-dim)',
    border: '1px solid #333',
    padding: '10px',
    cursor: 'pointer',
  },
  resetBtn: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
    background: 'transparent',
    color: 'var(--danger)',
    border: '1px solid var(--danger)',
    padding: '10px',
    cursor: 'pointer',
    width: '100%',
  },
};
