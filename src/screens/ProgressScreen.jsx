import { useState } from 'react';
import { COUNTRIES } from '../data/countries';
import { CHALLENGES } from '../data/challenges';
import { EXECUTE_CHALLENGES } from '../data/execute_challenges';
import { DEBUG_CHALLENGES } from '../data/debug_challenges';
import { buildProgressKey, getUnlockedIds, getClearedCountryIds, getLanguageEmblemTier, getCountrySealTier } from '../utils/progress';
import { AVAILABLE_STAGES, WORLD_META, WORLD_IDS } from '../utils/stageData';

const WORLD_CHALLENGES = { decode: CHALLENGES, execute: EXECUTE_CHALLENGES, debug: DEBUG_CHALLENGES };

const EMBLEM_TIERS = {
  none:   { label: 'NONE',   color: '#555',    glyph: '' },
  bronze: { label: 'BRONZE', color: '#cd7f32', glyph: '🥉' },
  silver: { label: 'SILVER', color: '#c0c0c0', glyph: '🥈' },
  gold:   { label: 'GOLD',   color: '#ffd700', glyph: '🥇' },
};

// Discover all languages that appear in any world's content
function discoverLangs() {
  const langs = new Set();
  for (const countryLangMap of Object.values(AVAILABLE_STAGES)) {
    for (const langList of Object.values(countryLangMap)) {
      langList.forEach(l => langs.add(l));
    }
  }
  // Keep stable order
  const order = ['python', 'javascript'];
  return [...new Set([...order.filter(l => langs.has(l)), ...langs])];
}

const ALL_LANGS = discoverLangs();
const LANG_META = {
  python:     { name: 'PYTHON',     emoji: '🐍' },
  javascript: { name: 'JAVASCRIPT', emoji: '⚡' },
};

export default function ProgressScreen({ progress, quizProgress, scores = {}, mistakes = {}, onBack }) {
  const [activeWorld, setActiveWorld] = useState('decode');
  const p = progress || {};
  const qp = quizProgress || {};

  // --- Per-language × per-world summary ---
  const langWorldStats = {};
  for (const langId of ALL_LANGS) {
    langWorldStats[langId] = {};
    for (const worldId of WORLD_IDS) {
      const stages = AVAILABLE_STAGES[worldId] || {};
      const availCountries = Object.entries(stages)
        .filter(([, langs]) => langs.includes(langId))
        .map(([countryId]) => countryId);
      const clearedCount = availCountries.filter(
        countryId => !!p[buildProgressKey(worldId, countryId, langId)]
      ).length;
      langWorldStats[langId][worldId] = { cleared: clearedCount, available: availCountries.length };
    }
  }

  // --- Country list for active world ---
  const clearedIds  = getClearedCountryIds(p, activeWorld);
  const unlockedIds = getUnlockedIds(p, activeWorld);
  const stages      = AVAILABLE_STAGES[activeWorld] || {};
  const worldChallenges = WORLD_CHALLENGES[activeWorld] || {};

  // Countries with content in active world, preserving COUNTRIES order
  const worldCountries = COUNTRIES.filter(c => (stages[c.id] || []).length > 0);

  // Total best score
  const totalBestScore = Object.values(scores).reduce((a, b) => a + b, 0);

  return (
    <div style={styles.wrap} className="fade-in">
      <div style={styles.header}>
        <button style={styles.backBtn} onClick={onBack}>{'[ < BACK ]'}</button>
        <div>
          <div style={styles.title}>📊 PROGRESS</div>
          <div style={styles.sub}>あなたの冒険の記録</div>
        </div>
      </div>

      {/* Per-language × per-world summary */}
      <div style={styles.section}>
        <div style={styles.sectionLabel}>// WORLD × LANGUAGE STATS</div>
        {ALL_LANGS.map(langId => {
          const meta = LANG_META[langId] || { name: langId.toUpperCase(), emoji: '📄' };
          return (
            <div key={langId} style={styles.langBlock}>
              <div style={styles.langTitle}>{meta.emoji} {meta.name}</div>
              {WORLD_IDS.map(worldId => {
                const wm = WORLD_META[worldId];
                const { cleared, available } = langWorldStats[langId][worldId];
                if (available === 0) {
                  return (
                    <div key={worldId} style={styles.worldStatRow}>
                      <span style={{ ...styles.worldTag, color: wm.color }}>{wm.label}</span>
                      <span style={styles.noContent}>未実装</span>
                    </div>
                  );
                }
                const pct = Math.round((cleared / available) * 100);
                return (
                  <div key={worldId} style={styles.worldStatRow}>
                    <span style={{ ...styles.worldTag, color: wm.color }}>{wm.label}</span>
                    <div className="xp-bar" style={{ flex: 1, height: 8 }}>
                      <div className="xp-fill" style={{ width: `${pct}%`, background: wm.color, boxShadow: `0 0 5px ${wm.color}88` }} />
                    </div>
                    <span style={styles.statFraction}>{cleared}/{available}</span>
                    <span style={{ ...styles.statPct, color: pct === 100 ? '#ffdd00' : wm.color }}>{pct}%</span>
                  </div>
                );
              })}
            </div>
          );
        })}

        {totalBestScore > 0 && (
          <div style={styles.scoreRow}>
            <span style={{ fontSize: 9, color: 'var(--text-dim)' }}>TOTAL BEST SCORE</span>
            <span style={{ fontSize: 'clamp(13px, 3.5vw, 18px)', color: 'var(--accent2)', textShadow: '2px 2px 0 #332200' }}>
              🏅 {totalBestScore.toLocaleString()}
            </span>
          </div>
        )}
      </div>

      {/* Language Emblems */}
      <div style={styles.section}>
        <div style={styles.sectionLabel}>// LANGUAGE EMBLEMS</div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {ALL_LANGS.map(langId => {
            const meta = LANG_META[langId] || { name: langId.toUpperCase(), emoji: '📄' };
            const tier = getLanguageEmblemTier(p, langId);
            const tierMeta = EMBLEM_TIERS[tier];
            return (
              <div key={langId} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
                padding: '12px 16px',
                background: 'var(--panel)',
                border: `2px solid ${tier === 'none' ? '#333' : tierMeta.color + '66'}`,
                minWidth: 80,
                opacity: tier === 'none' ? 0.5 : 1,
              }}>
                <div style={{ fontSize: 28 }}>{meta.emoji}</div>
                <div style={{ fontSize: 8, color: 'var(--text-dim)', fontFamily: 'var(--pixel-font)' }}>
                  {meta.name}
                </div>
                <div style={{ fontSize: 20 }}>{tierMeta.glyph || '○'}</div>
                <div style={{ fontSize: 7, color: tierMeta.color, fontFamily: 'var(--pixel-font)', letterSpacing: 1 }}>
                  {tierMeta.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* World tab selector */}
      <div style={styles.tabs}>
        {WORLD_IDS.map(wid => {
          const wm = WORLD_META[wid];
          const active = wid === activeWorld;
          return (
            <button
              key={wid}
              style={{
                ...styles.tab,
                color: active ? wm.color : '#445566',
                borderBottom: active ? `2px solid ${wm.color}` : '2px solid transparent',
              }}
              onClick={() => setActiveWorld(wid)}
            >
              {wm.label}
            </button>
          );
        })}
      </div>

      {/* Recovery: stages with mistakes */}
      {(() => {
        const reviewEntries = Object.entries(mistakes)
          .filter(([, ids]) => ids.length > 0)
          .map(([key, ids]) => {
            const parts = key.split('_');
            const worldId = parts[0];
            const countryId = parts[1];
            const langId = parts.slice(2).join('_');
            const wm = WORLD_META[worldId];
            const country = COUNTRIES.find(c => c.id === countryId);
            if (!country || !wm) return null;
            return { key, worldId, countryId, langId, ids, wm, country };
          })
          .filter(Boolean);

        if (reviewEntries.length === 0) return null;
        return (
          <div style={styles.section}>
            <div style={styles.sectionLabel}>// REVIEW QUEUE — 要復習</div>
            {reviewEntries.map(({ key, wm, country, langId, ids }) => (
              <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: '1px solid var(--border2)' }}>
                <span style={{ fontSize: 20 }}>{country.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10, color: 'var(--text)' }}>{country.name} / {langId}</div>
                  <div style={{ fontSize: 8, color: 'var(--text-dim)' }}>
                    <span style={{ color: wm.color }}>{wm.label}</span>
                    &nbsp;— {ids.length} 問ミスあり
                  </div>
                </div>
                <span style={{ fontSize: 9, color: '#ff4466' }}>⚠ {ids.length}</span>
              </div>
            ))}
          </div>
        );
      })()}

      {/* Country list for active world */}
      <div style={styles.list}>
        {worldCountries.length === 0 && (
          <div style={styles.emptyMsg}>// このワールドにはまだコンテンツがありません</div>
        )}
        {worldCountries.map((c) => {
          const isCleared  = clearedIds.has(c.id);
          const isUnlocked = unlockedIds.has(c.id);
          const availLangs = stages[c.id] || [];

          return (
            <div key={c.id} style={{
              ...styles.card,
              borderColor: isCleared  ? 'var(--accent)'
                         : isUnlocked ? 'var(--border2)'
                         : '#2a2a4a',
              opacity: isUnlocked || isCleared ? 1 : 0.45,
            }}>
              <div style={styles.cardTop}>
                <span style={styles.cardEmoji}>{c.emoji}</span>
                <div style={styles.cardInfo}>
                  <div style={styles.cardName}>{c.name}</div>
                  <div style={styles.cardTheme}>{c.theme}</div>
                </div>
                <div style={styles.cardBadge}>
                  {(() => {
                    const seal = getCountrySealTier(p, c.id);
                    const sm = EMBLEM_TIERS[seal];
                    return seal !== 'none' ? (
                      <span style={{ fontSize: 18, filter: `drop-shadow(0 0 4px ${sm.color})` }}>{sm.glyph}</span>
                    ) : null;
                  })()}
                  {isCleared  && <span style={styles.badgeCleared}>✅ CLEAR</span>}
                  {!isCleared && isUnlocked && (
                    <span style={styles.badgeReady}>READY</span>
                  )}
                  {!isUnlocked && <span style={styles.badgeLocked}>🔒</span>}
                </div>
              </div>

              {isUnlocked && availLangs.map(langId => {
                const qs      = (worldChallenges[c.id]?.[langId] || []);
                const key     = buildProgressKey(activeWorld, c.id, langId);
                const lCleared = !!p[key];
                const lIdx     = lCleared ? qs.length : (qp[key] || 0);
                const lPct     = qs.length ? Math.round((lIdx / qs.length) * 100) : 0;
                const lScore   = scores[key] || 0;
                const lMeta    = LANG_META[langId] || { name: langId, emoji: '📄' };
                return (
                  <div key={langId} style={styles.cardProgress}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={styles.cardProgressLabel}>
                        {lMeta.emoji} {lMeta.name} &nbsp; {lIdx} / {qs.length}問
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
  sub: { fontSize: 9, color: 'var(--text-dim)' },

  section: {
    padding: '16px 20px',
    borderBottom: '1px solid #1a1a2e',
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    maxWidth: 600,
    margin: '0 auto',
    width: '100%',
  },
  sectionLabel: {
    fontSize: 9,
    color: '#445566',
    letterSpacing: 1,
  },
  langBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  langTitle: {
    fontSize: 10,
    color: 'var(--text)',
    marginBottom: 2,
  },
  worldStatRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  worldTag: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 7,
    letterSpacing: 1,
    minWidth: 52,
    flexShrink: 0,
  },
  noContent: {
    fontSize: 8,
    color: '#334455',
    fontStyle: 'italic',
  },
  statFraction: {
    fontSize: 9,
    color: 'var(--text-dim)',
    minWidth: 28,
    textAlign: 'right',
    flexShrink: 0,
  },
  statPct: {
    fontSize: 9,
    minWidth: 30,
    textAlign: 'right',
    flexShrink: 0,
  },
  scoreRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'var(--panel)',
    border: '1px solid var(--accent2)',
    padding: '10px 14px',
  },

  tabs: {
    display: 'flex',
    borderBottom: '1px solid #1a1a2e',
    maxWidth: 600,
    margin: '0 auto',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  tab: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
    background: 'transparent',
    border: 'none',
    borderBottom: '2px solid transparent',
    padding: '10px 12px',
    cursor: 'pointer',
    letterSpacing: 1,
    transition: 'color 0.15s',
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
  emptyMsg: {
    fontSize: 9,
    color: '#334455',
    padding: '20px 0',
    textAlign: 'center',
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
  cardName: { fontSize: 10, color: 'var(--text)' },
  cardTheme: { fontSize: 9, color: 'var(--text-dim)' },
  cardBadge: { flexShrink: 0 },
  badgeCleared: {
    fontSize: 9,
    color: 'var(--accent)',
    border: '1px solid var(--accent)',
    padding: '3px 6px',
  },
  badgeReady: {
    fontSize: 9,
    color: 'var(--border2)',
    border: '1px solid var(--border2)',
    padding: '3px 6px',
  },
  badgeLocked: { fontSize: 12 },
  cardProgress: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  cardProgressLabel: { fontSize: 9, color: 'var(--text-dim)' },
  cardLevel: {
    position: 'absolute',
    top: 10,
    right: 14,
    fontSize: 9,
    color: 'var(--text-dim)',
  },
};
