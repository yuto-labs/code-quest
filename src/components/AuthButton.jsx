import { useState } from 'react';

export default function AuthButton({ user, onSendMagicLink, onSignOut, syncing }) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSend = async () => {
    if (!email.includes('@')) { setError('メアドを入力してください'); return; }
    setLoading(true);
    setError('');
    const { error } = await onSendMagicLink(email);
    setLoading(false);
    if (error) { setError(error.message || '送信失敗'); return; }
    setSent(true);
  };

  if (user) {
    return (
      <div style={styles.loggedIn}>
        <div style={styles.userInfo}>
          <span style={styles.icon}>✅</span>
          <div>
            <div style={styles.email}>{user.email}</div>
            <div style={styles.syncStatus}>
              {syncing ? '⬆ 同期中...' : '☁ クラウド同期ON'}
            </div>
          </div>
        </div>
        <button style={styles.signOutBtn} onClick={onSignOut}>ログアウト</button>
      </div>
    );
  }

  if (sent) {
    return (
      <div style={styles.sent}>
        <div style={styles.sentIcon}>📧</div>
        <div style={styles.sentText}>メールを送信しました</div>
        <div style={styles.sentSub}>{email} のリンクをタップしてログイン</div>
        <button style={styles.retryBtn} onClick={() => setSent(false)}>やり直す</button>
      </div>
    );
  }

  return (
    <div style={styles.wrap}>
      <div style={styles.label}>☁ クラウド同期 — ログインして進捗を保存</div>
      <div style={styles.row}>
        <input
          style={styles.input}
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button style={styles.sendBtn} onClick={handleSend} disabled={loading}>
          {loading ? '...' : '送信'}
        </button>
      </div>
      {error && <div style={styles.error}>{error}</div>}
    </div>
  );
}

const styles = {
  wrap: {
    background: 'var(--panel)',
    border: '2px solid var(--border2)',
    padding: '14px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  label: {
    fontSize: 8,
    color: 'var(--text-dim)',
    letterSpacing: 1,
  },
  row: {
    display: 'flex',
    gap: 8,
  },
  input: {
    flex: 1,
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
    background: 'var(--bg)',
    color: 'var(--text)',
    border: '2px solid #333',
    padding: '10px 12px',
    outline: 'none',
    minWidth: 0,
  },
  sendBtn: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
    background: 'var(--border2)',
    color: '#fff',
    border: 'none',
    padding: '10px 14px',
    cursor: 'pointer',
    flexShrink: 0,
  },
  error: {
    fontSize: 8,
    color: 'var(--danger)',
  },
  sent: {
    background: 'var(--panel)',
    border: '2px solid var(--accent)',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    textAlign: 'center',
  },
  sentIcon: { fontSize: 28 },
  sentText: { fontSize: 10, color: 'var(--accent)' },
  sentSub: { fontSize: 8, color: 'var(--text-dim)', lineHeight: 1.8 },
  retryBtn: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 7,
    background: 'transparent',
    color: 'var(--text-dim)',
    border: '1px solid #333',
    padding: '6px 12px',
    cursor: 'pointer',
    marginTop: 4,
  },
  loggedIn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    background: 'var(--panel)',
    border: '2px solid var(--accent)',
    padding: '12px 16px',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    minWidth: 0,
  },
  icon: { fontSize: 18, flexShrink: 0 },
  email: {
    fontSize: 8,
    color: 'var(--accent)',
    letterSpacing: 0.5,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: 180,
  },
  syncStatus: {
    fontSize: 7,
    color: 'var(--text-dim)',
    marginTop: 4,
  },
  signOutBtn: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 7,
    background: 'transparent',
    color: 'var(--text-dim)',
    border: '1px solid #333',
    padding: '6px 10px',
    cursor: 'pointer',
    flexShrink: 0,
  },
};
