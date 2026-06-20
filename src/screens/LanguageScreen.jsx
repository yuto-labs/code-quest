import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { LANGUAGES } from '../data/challenges';
import { EXECUTE_LANGUAGES } from '../data/execute_challenges';
import { DEBUG_LANGUAGES } from '../data/debug_challenges';
import { AVAILABLE_STAGES, WORLD_META } from '../utils/stageData';
import { buildProgressKey, getLanguageEmblemTier, getCountrySealTier } from '../utils/progress';
import { getFinalMission } from '../data/final_missions';
import { isFinalMissionCleared } from '../utils/metadata';
import { getStageMedal } from '../utils/medals';
import BackButton from '../components/BackButton';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const ISO_MAP = {
  392: 'JP', 840: 'US', 250: 'FR',  76: 'BR',  36: 'AU',
  818: 'EG', 356: 'IN', 643: 'RU', 156: 'CN', 276: 'DE',
  826: 'GB', 410: 'KR', 124: 'CA', 380: 'IT', 484: 'MX',
  682: 'SA',  32: 'AR', 792: 'TR', 360: 'ID', 710: 'ZA',
};

const WORLD_LANGUAGES = { decode: LANGUAGES, execute: EXECUTE_LANGUAGES, debug: DEBUG_LANGUAGES };

function getFinalChildCount(mission) {
  return mission?.questions?.length || mission?.childQuestionIds?.length || mission?.targetChildCount || 0;
}

const TIER_META = {
  none:   { label: '',         color: 'transparent', glyph: '' },
  bronze: { label: 'BRONZE',   color: '#cd7f32',     glyph: '🥉' },
  silver: { label: 'SILVER',   color: '#c0c0c0',     glyph: '🥈' },
  gold:   { label: 'GOLD',     color: '#ffd700',     glyph: '🥇' },
};

export default function LanguageScreen({ country, world = 'decode', progress, meta = {}, onSelectLanguage, onSelectFinalMission, onBack }) {
  const langs = WORLD_LANGUAGES[world] || LANGUAGES;
  const worldMeta = WORLD_META[world];
  const p = progress || {};

  const sealTier = getCountrySealTier(p, country.id);
  const sealMeta = TIER_META[sealTier];

  return (
    <div style={styles.wrap} className="fade-in">

      {/* 背景地図：選択国の周辺をズームして薄く表示 */}
      <div style={styles.mapBg}>
        <ComposableMap
          projectionConfig={{ scale: 147 }}
          style={{ width: '100%', height: '100%' }}
        >
          <ZoomableGroup zoom={3.5} center={country.coordinates}>
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const id = ISO_MAP[parseInt(geo.id)];
                  const isSelected = id === country.id;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: isSelected ? (worldMeta?.color || '#00ff88') : '#1e3a5c',
                          stroke: '#0a1520',
                          strokeWidth: 0.5,
                          outline: 'none',
                        },
                        hover:   { fill: isSelected ? (worldMeta?.color || '#00ff88') : '#1e3a5c', outline: 'none' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>

      <div style={styles.mapFade} />

      <div style={styles.backSlot}>
        <BackButton onClick={onBack} />
      </div>

      <div style={styles.center}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div style={styles.flag}>{country.emoji}</div>
          {sealTier !== 'none' && (
            <div style={{
              position: 'absolute',
              bottom: -4,
              right: -8,
              fontSize: 22,
              filter: `drop-shadow(0 0 6px ${sealMeta.color})`,
            }}>
              {sealMeta.glyph}
            </div>
          )}
        </div>

        <div style={styles.countryNameJa}>{country.nameJa}</div>
        <div style={styles.countryName}>{country.name}</div>
        <div style={styles.countryCapital}>首都: {country.capital}</div>
        <div style={styles.theme}>テーマ: 【 {country.theme} 】</div>

        {/* World badge */}
        {worldMeta && (
          <div style={{
            fontFamily: 'var(--pixel-font)',
            fontSize: 9,
            color: worldMeta.color,
            border: `1px solid ${worldMeta.color}88`,
            padding: '4px 10px',
            letterSpacing: 2,
          }}>
            {worldMeta.label} WORLD
          </div>
        )}

        <div style={styles.divider} />

        <div style={styles.label}>使用言語を選択してください</div>

        <div style={styles.langGrid}>
          {langs.map((lang) => {
            const stages = (AVAILABLE_STAGES[world] || {})[country.id] || [];
            const hasContent = stages.includes(lang.id);
            const isCleared = !!p[buildProgressKey(world, country.id, lang.id)];
            const emblemTier = getLanguageEmblemTier(p, lang.id, meta);
            const emblemMeta = TIER_META[emblemTier];
            const isAvailable = lang.available && hasContent;
            const medals = getStageMedal(meta, world, country.id, lang.id, p);
            const mission = getFinalMission(world, country.id, lang.id);
            const missionUnlocked = Boolean(mission && isCleared);
            const missionCleared = Boolean(mission && isFinalMissionCleared(meta, mission.id));
            const missionStatus = mission ? (meta.finalMissions?.[mission.id] || {}) : {};
            const targetChildCount = getFinalChildCount(mission);
            const completedChildCount = Math.min(missionStatus.completedChildCount || 0, targetChildCount);

            return (
              <div key={lang.id} style={styles.langStack}>
              <button
                style={{
                  ...styles.langBtn,
                  ...(isAvailable ? styles.langBtnActive : styles.langBtnLocked),
                  ...(isCleared ? { borderColor: '#00ff8888', background: '#00ff8811' } : {}),
                }}
                onClick={() => isAvailable && onSelectLanguage(lang)}
                disabled={!isAvailable}
              >
                <span style={styles.langEmoji}>{lang.emoji}</span>
                <span style={styles.langName}>{lang.name}</span>
                {isCleared && <span style={{ fontSize: 12, color: '#00ff88' }}>✓</span>}
                {emblemTier !== 'none' && (
                  <span style={{ fontSize: 14, filter: `drop-shadow(0 0 4px ${emblemMeta.color})` }}>
                    {emblemMeta.glyph}
                  </span>
                )}
                {isAvailable && (
                  <span style={styles.medals}>
                    <span style={{ color: medals.clear ? 'var(--accent)' : '#556677' }}>CLEAR</span>
                    <span style={{ color: medals.perfect ? 'var(--accent2)' : '#556677' }}>PERFECT</span>
                    <span style={{ color: medals.mastery ? 'var(--accent)' : '#556677' }}>MASTERY</span>
                  </span>
                )}
                {!isAvailable && (
                  <span style={styles.soon}>
                    {!lang.available ? 'COMING SOON' : 'NO CONTENT'}
                  </span>
                )}
              </button>
              {mission && (
                <button
                  style={{
                    ...styles.finalBtn,
                    opacity: missionUnlocked ? 1 : 0.48,
                    borderColor: missionCleared ? '#ffd700' : missionUnlocked ? 'var(--accent2)' : '#444',
                    color: missionCleared ? '#ffd700' : missionUnlocked ? 'var(--accent2)' : '#666',
                  }}
                  onClick={() => missionUnlocked && onSelectFinalMission?.(mission, lang)}
                  disabled={!missionUnlocked}
                >
                  <span>{missionCleared ? 'FINAL CLEAR' : 'FINAL MISSION'}</span>
                  <span style={styles.finalSub}>
                    {missionUnlocked ? `${mission.title} [${completedChildCount}/${targetChildCount}]` : 'Clear the normal stage to unlock'}
                  </span>
                </button>
              )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    position: 'fixed',
    top: 'calc(var(--vv-offset, 0px) + env(safe-area-inset-top, 0px))',
    left: 0,
    right: 0,
    bottom: 0,
    background: 'var(--bg)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    overflow: 'hidden',
    overscrollBehavior: 'none',
  },
  backSlot: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 20,
    pointerEvents: 'auto',
  },
  mapBg: {
    position: 'absolute',
    inset: 0,
    opacity: 0.13,
    pointerEvents: 'none',
  },
  mapFade: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at center, transparent 30%, var(--bg) 80%)',
    pointerEvents: 'none',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    maxWidth: 500,
    width: '100%',
    position: 'relative',
    zIndex: 1,
  },
  flag: {
    fontSize: 64,
    lineHeight: 1,
  },
  countryNameJa: {
    fontSize: 'clamp(18px, 5vw, 26px)',
    color: 'var(--accent)',
    textShadow: '3px 3px 0 #003322',
  },
  countryName: {
    fontSize: 'clamp(9px, 2.5vw, 12px)',
    color: 'var(--text-dim)',
    letterSpacing: 2,
    marginTop: -8,
  },
  countryCapital: {
    fontSize: 'clamp(12px, 3vw, 14px)',
    color: 'var(--text-dim)',
  },
  theme: {
    fontSize: 'clamp(12px, 3vw, 14px)',
    color: 'var(--accent2)',
    marginTop: 4,
  },
  divider: {
    width: '100%',
    height: 2,
    background: 'var(--border2)',
    margin: '8px 0',
  },
  label: {
    fontSize: 11,
    color: 'var(--text)',
    marginBottom: 8,
  },
  langGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: '100%',
  },
  langBtn: {
    fontFamily: 'var(--pixel-font)',
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    padding: '18px 20px',
    border: '3px solid',
    cursor: 'pointer',
    transition: 'all 0.15s',
    width: '100%',
    minHeight: 64,
  },
  langStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  finalBtn: {
    fontFamily: 'var(--pixel-font)',
    background: 'rgba(255,221,0,0.06)',
    border: '2px solid',
    padding: '10px 14px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    textAlign: 'left',
  },
  finalSub: {
    fontSize: 8,
    color: 'var(--text-dim)',
    lineHeight: 1.6,
  },
  langBtnActive: {
    background: 'var(--panel)',
    borderColor: 'var(--accent)',
    color: 'var(--accent)',
  },
  langBtnLocked: {
    background: '#0d0d0d',
    borderColor: '#333',
    color: '#444',
    cursor: 'default',
  },
  langEmoji: {
    fontSize: 24,
  },
  langName: {
    flex: 1,
    fontSize: 'clamp(11px, 3vw, 14px)',
    letterSpacing: 1,
  },
  medals: {
    display: 'flex',
    gap: 6,
    flexWrap: 'wrap',
    fontSize: 7,
    lineHeight: 1.6,
  },
  soon: {
    fontSize: 8,
    color: '#555',
    letterSpacing: 1,
  },
};
