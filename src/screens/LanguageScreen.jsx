import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { LANGUAGES } from '../data/challenges';
import { EXECUTE_LANGUAGES } from '../data/execute_challenges';
import { DEBUG_LANGUAGES } from '../data/debug_challenges';
import { AVAILABLE_STAGES, WORLD_META } from '../utils/stageData';
import { buildProgressKey, getLanguageEmblemTier, getCountrySealTier } from '../utils/progress';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const ISO_MAP = {
  392: 'JP', 840: 'US', 250: 'FR',  76: 'BR',  36: 'AU',
  818: 'EG', 356: 'IN', 643: 'RU', 156: 'CN', 276: 'DE',
  826: 'GB', 410: 'KR', 124: 'CA', 380: 'IT', 484: 'MX',
  682: 'SA',  32: 'AR', 792: 'TR', 360: 'ID', 710: 'ZA',
};

const WORLD_LANGUAGES = { decode: LANGUAGES, execute: EXECUTE_LANGUAGES, debug: DEBUG_LANGUAGES };

const TIER_META = {
  none:   { label: '',         color: 'transparent', glyph: '' },
  bronze: { label: 'BRONZE',   color: '#cd7f32',     glyph: '🥉' },
  silver: { label: 'SILVER',   color: '#c0c0c0',     glyph: '🥈' },
  gold:   { label: 'GOLD',     color: '#ffd700',     glyph: '🥇' },
};

export default function LanguageScreen({ country, world = 'decode', progress, onSelectLanguage, onBack }) {
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

      <button style={styles.back} onClick={onBack}>◀ BACK</button>

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
            const emblemTier = getLanguageEmblemTier(p, lang.id);
            const emblemMeta = TIER_META[emblemTier];
            const isAvailable = lang.available && hasContent;

            return (
              <button
                key={lang.id}
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
                {!isAvailable && (
                  <span style={styles.soon}>
                    {!lang.available ? 'COMING SOON' : 'NO CONTENT'}
                  </span>
                )}
              </button>
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
  back: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontFamily: 'var(--pixel-font)',
    fontSize: 9,
    background: 'transparent',
    color: 'var(--text-dim)',
    border: '2px solid var(--text-dim)',
    padding: '8px 12px',
    cursor: 'pointer',
    zIndex: 1,
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
  soon: {
    fontSize: 8,
    color: '#555',
    letterSpacing: 1,
  },
};
