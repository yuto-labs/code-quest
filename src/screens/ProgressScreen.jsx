import { COUNTRIES } from '../data/countries';
import { CHALLENGES, LANGUAGES } from '../data/challenges';
import { getUnlockedIds } from '../utils/progress';

export default function ProgressScreen({ progress, quizProgress, scores = {}, onBack }) {
  // 新スキーマ: 'JP_python' 形式 → 国IDを抽出してユニーク数を数える
  const cleared     = new Set(Object.keys(progress || {}).map(k => k.split('_')[0])).size;
  const total       = COUNTRIES.length;
  const pct         = Math.round((cleared / total) * 100);
  const unlockedIds = getUnlockedIds(progress || {});

  // ベストスコア合計
  const totalBestScore = Object.values(scores).reduce((a, b) => a + b, 0);

  // 全問題数と総正解数を計算
  let totalQ = 0;
  let answeredQ = 0;
  COUNTRIES.forEach(c => {
    LANGUAGES.filter(l => l.available).forEach(l => {
      const qs = CHALLENGES[c.id]?.[l.id] || [];
      totalQ += qs.length;
      if ((progress || {})[`${c.id}_${l.id}`]) {
        answeredQ += qs.length; // クリア済みは全問正解
      } else {
        const savedIdx = (quizProgress || {})[`${c.id}_${l.id}`] || 0;
        answeredQ += savedIdx;
      }
    });
  });

  return (
    <div style={styles.wrap} className="fade-in">
      <div style={styles.header}>
        <button style={styles.backBtn} onClick={onBack}>{'[ < BACK ]'}</button>
        <div>
          <div style={styles.title}>📊 PROGRESS</div>
          <div style={styles.sub}>あなたの冒険の記録</div>
        </div>
      </div>

      {/* 総合サマリー */}
      <div style={styles.summary}>
        <div style={styles.summaryRow}>
          <StatCard label="COUNTRIES" value={`${cleared}/${total}`} color="var(--accent)" />
          <StatCard label="SOLVED" value={`${answeredQ}/${totalQ}`} color="var(--accent2)" />
          <StatCard label="COMPLETE" value={`${pct}%`} color={pct === 100 ? '#ffdd00' : 'var(--accent)'} />
        </div>
        {totalBestScore > 0 && (
          <div style={styles.scoreRow}>
            <span style={{ fontSize: 9, color: 'var(--text-dim)' }}>TOTAL BEST SCORE</span>
            <span style={{ fontSize: 'clamp(13px, 3.5vw, 18px)', color: 'var(--accent2)', textShadow: '2px 2px 0 #332200' }}>
              🏅 {totalBestScore.toLocaleString()}
            </span>
          </div>
        )}

        <div style={styles.totalBar}>
          <div style={styles.totalBarLabel}>WORLD COMPLETION</div>
          <div className="xp-bar" style={{ width: '100%', height: 16 }}>
            <div className="xp-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>

      {/* 国ごとの進捗 */}
      <div style={styles.list}>
        {COUNTRIES.map((c, i) => {
          const lang       = LANGUAGES.find(l => l.available);
          const isCleared  = !!(progress || {})[`${c.id}_${lang?.id}`];
          const isUnlocked = unlockedIds.has(c.id);
          const qs         = CHALLENGES[c.id]?.[lang?.id] || [];
          const savedIdx   = (quizProgress || {})[`${c.id}_${lang?.id}`] || 0;
          const doneCount  = isCleared ? qs.length : savedIdx;
          const qPct       = qs.length ? Math.round((doneCount / qs.length) * 100) : 0;
          const bestScore  = scores[`${c.id}_${lang?.id}`] || 0;

          return (
            <div key={c.id} style={{
              ...styles.card,
              borderColor: isCleared  ? 'var(--accent)'
                         : isUnlocked ? 'var(--border2)'
                         : '#2a2a4a',
              opacity: isUnlocked || isCleared ? 1 : 0.45,
            }}>
              {/* 国情報 */}
              <div style={styles.cardTop}>
                <span style={styles.cardEmoji}>{c.emoji}</span>
                <div style={styles.cardInfo}>
                  <div style={styles.cardName}>{c.name}</div>
                  <div style={styles.cardTheme}>{c.theme}</div>
                </div>
                <div style={styles.cardBadge}>
                  {isCleared  && <span style={styles.badgeCleared}>✅ CLEAR</span>}
                  {!isCleared && isUnlocked && savedIdx > 0 && (
                    <span style={styles.badgeInProgress}>▶ Q{savedIdx + 1}</span>
                  )}
                  {!isCleared && isUnlocked && savedIdx === 0 && (
                    <span style={styles.badgeReady}>READY</span>
                  )}
                  {!isUnlocked && <span style={styles.badgeLocked}>🔒</span>}
                </div>
              </div>

              {/* 言語ごとの問題進捗バー */}
              {isUnlocked && LANGUAGES.filter(l => l.available).map(l => {
                const lqs      = CHALLENGES[c.id]?.[l.id] || [];
                const lCleared = !!(progress || {})[`${c.id}_${l.id}`];
                const lIdx     = lCleared ? lqs.length : ((quizProgress || {})[`${c.id}_${l.id}`] || 0);
                const lPct     = lqs.length ? Math.round((lIdx / lqs.length) * 100) : 0;
                const lScore   = scores[`${c.id}_${l.id}`] || 0;
                return (
                  <div key={l.id} style={styles.cardProgress}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={styles.cardProgressLabel}>
                        {l.emoji} {l.name} &nbsp; {lIdx} / {lqs.length}問
                      </div>
                      {lScore > 0 && (
                        <div style={{ fontSize: 9, color: 'var(--accent2)' }}>
                          🏅 {lScore.toLocaleString()}
                        </div>
                      )}
                    </div>
                    <div className="xp-bar" style={{ width: '100%', height: 8 }}>
                      <div className="xp-fill" style={{
                        width: `${lPct}%`,
                        background: lCleared ? 'var(--accent)' : 'var(--accent2)',
                      }} />
                    </div>
                  </div>
                );
              })}

              {/* レベル表示 */}
              <div style={styles.cardLevel}>LV.{c.level}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div style={statStyles.wrap}>
      <div style={{ ...statStyles.value, color }}>{value}</div>
      <div style={statStyles.label}>{label}</div>
    </div>
  );
}

const statStyles = {
  wrap: {
    flex: 1,
    background: 'var(--panel)',
    border: '1px solid rgba(0,102,255,0.4)',
    padding: '14px 6px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  value: {
    fontSize: 'clamp(13px, 3.8vw, 17px)',
    fontFamily: 'var(--pixel-font)',
    lineHeight: 1.2,
    textAlign: 'center',
  },
  label: {
    fontSize: 'clamp(6px, 1.8vw, 8px)',
    color: '#7799bb',
    textAlign: 'center',
    letterSpacing: 1,
  },
};

const styles = {
  wrap: {
    width: '100%',
    minHeight: '100dvh',
    background: 'var(--bg)',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 'env(safe-area-inset-bottom, 16px)',
  },
  header: {
    padding: '16px 20px',
    borderBottom: '2px solid var(--border)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  backBtn: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
    background: 'transparent',
    color: '#00ffcc',
    border: 'none',
    padding: '8px 4px',
    cursor: 'pointer',
    flexShrink: 0,
    letterSpacing: 1,
    textShadow: '0 0 5px #00ffcc, 0 0 12px #00ffaa, 0 0 25px #00ff88',
  },
  title: {
    fontSize: 'clamp(11px, 3vw, 14px)',
    color: 'var(--accent)',
  },
  sub: {
    fontSize: 9,
    color: 'var(--text-dim)',
  },
  summary: {
    padding: '16px 20px',
    borderBottom: '1px solid #1a1a2e',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 600,
    margin: '0 auto',
    width: '100%',
  },
  summaryRow: {
    display: 'flex',
    gap: 8,
  },
  scoreRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'var(--panel)',
    border: '1px solid var(--accent2)',
    padding: '10px 14px',
  },
  totalBar: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  totalBarLabel: {
    fontSize: 9,
    color: 'var(--text-dim)',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: '16px 20px',
    maxWidth: 600,
    margin: '0 auto',
    width: '100%',
  },
  card: {
    background: 'var(--panel)',
    border: '2px solid',
    padding: '14px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    position: 'relative',
  },
  cardTop: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  cardEmoji: { fontSize: 24, flexShrink: 0 },
  cardInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  cardName: {
    fontSize: 10,
    color: 'var(--text)',
  },
  cardTheme: {
    fontSize: 9,
    color: 'var(--text-dim)',
  },
  cardBadge: {
    flexShrink: 0,
  },
  badgeCleared: {
    fontSize: 9,
    color: 'var(--accent)',
    border: '1px solid var(--accent)',
    padding: '3px 6px',
  },
  badgeInProgress: {
    fontSize: 9,
    color: 'var(--accent2)',
    border: '1px solid var(--accent2)',
    padding: '3px 6px',
  },
  badgeReady: {
    fontSize: 9,
    color: 'var(--border2)',
    border: '1px solid var(--border2)',
    padding: '3px 6px',
  },
  badgeLocked: {
    fontSize: 12,
  },
  cardProgress: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  cardProgressLabel: {
    fontSize: 9,
    color: 'var(--text-dim)',
  },
  cardLevel: {
    position: 'absolute',
    top: 10,
    right: 14,
    fontSize: 9,
    color: 'var(--text-dim)',
  },
};
