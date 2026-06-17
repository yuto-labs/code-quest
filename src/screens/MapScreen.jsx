import { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import { COUNTRIES } from '../data/countries';
import { getUnlockedIds } from '../utils/progress';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const ISO_MAP = {
  392: 'JP', 840: 'US', 250: 'FR',  76: 'BR',  36: 'AU',
  818: 'EG', 356: 'IN', 643: 'RU', 156: 'CN', 276: 'DE',
  826: 'GB', 410: 'KR', 124: 'CA', 380: 'IT', 484: 'MX',
  682: 'SA',  32: 'AR', 792: 'TR', 360: 'ID', 710: 'ZA',
};
// 逆引き: countryId → numericId (Marker hover で Geography をハイライトするため)
const REVERSE_ISO = Object.fromEntries(
  Object.entries(ISO_MAP).map(([num, id]) => [id, parseInt(num)])
);

const CONTINENT_NEON = {
  na: '#ff3344',
  sa: '#00dd66',
  eu: '#44aaff',
  af: '#ffbb00',
  as: '#cc44ff',
  oc: '#ff7722',
};

const CONTINENT_MAP = {
  124: 'na', 840: 'na', 484: 'na', 188: 'na', 320: 'na', 222: 'na',
  340: 'na', 388: 'na', 630: 'na', 558: 'na', 591: 'na', 192: 'na',
  332: 'na', 214: 'na', 780: 'na',  28: 'na',  44: 'na',  52: 'na',
   84: 'na', 659: 'na', 308: 'na', 670: 'na', 662: 'na', 500: 'na',
  474: 'na', 212: 'na', 850: 'na', 796: 'na',  60: 'na', 535: 'na',
   76: 'sa',  32: 'sa', 152: 'sa', 170: 'sa', 218: 'sa', 600: 'sa',
  858: 'sa', 328: 'sa', 740: 'sa',  68: 'sa', 254: 'sa', 531: 'sa', 226: 'sa',
  276: 'eu', 250: 'eu', 826: 'eu', 380: 'eu', 724: 'eu', 620: 'eu',
  528: 'eu',  56: 'eu', 756: 'eu',  40: 'eu', 203: 'eu', 703: 'eu',
  348: 'eu', 642: 'eu', 100: 'eu', 688: 'eu', 807: 'eu', 499: 'eu',
  191: 'eu', 705: 'eu', 372: 'eu', 233: 'eu', 428: 'eu', 440: 'eu',
  616: 'eu', 752: 'eu', 578: 'eu', 246: 'eu', 208: 'eu', 352: 'eu',
  442: 'eu', 470: 'eu', 492: 'eu', 674: 'eu', 336: 'eu',   8: 'eu',
   20: 'eu',  70: 'eu', 438: 'eu', 248: 'eu', 304: 'eu',
  818: 'af', 710: 'af', 404: 'af', 566: 'af',  12: 'af', 288: 'af',
  504: 'af', 231: 'af', 834: 'af', 716: 'af', 800: 'af', 646: 'af',
  686: 'af', 706: 'af', 516: 'af', 466: 'af', 430: 'af', 324: 'af',
  204: 'af', 120: 'af', 140: 'af', 562: 'af', 694: 'af', 270: 'af',
  624: 'af',  72: 'af', 174: 'af', 454: 'af', 508: 'af', 748: 'af',
  266: 'af', 729: 'af', 178: 'af', 180: 'af', 384: 'af', 768: 'af',
  894: 'af', 108: 'af', 638: 'af', 450: 'af', 426: 'af', 262: 'af',
  232: 'af',
  356: 'as', 643: 'as', 156: 'as', 392: 'as', 410: 'as', 682: 'as',
  792: 'as', 360: 'as', 704: 'as', 764: 'as', 116: 'as', 496: 'as',
  398: 'as', 762: 'as', 795: 'as', 860: 'as',  50: 'as', 144: 'as',
  586: 'as', 408: 'as', 458: 'as', 418: 'as', 104: 'as', 524: 'as',
   64: 'as', 400: 'as', 414: 'as', 422: 'as', 760: 'as', 368: 'as',
  364: 'as', 887: 'as', 512: 'as', 376: 'as', 275: 'as',  51: 'as',
   31: 'as', 268: 'as', 417: 'as', 626: 'as', 196: 'as',
   36: 'oc', 554: 'oc', 598: 'oc', 242: 'oc', 520: 'oc', 584: 'oc',
  585: 'oc',  90: 'oc', 548: 'oc', 776: 'oc', 882: 'oc', 316: 'oc',
  580: 'oc', 258: 'oc', 772: 'oc',
};

function getNeonColor(numericId) {
  const continent = CONTINENT_MAP[numericId];
  return continent ? CONTINENT_NEON[continent] : '#3355aa';
}

export default function MapScreen({ onSelectCountry, onBack, progress, quizProgress, world = 'decode' }) {
  const [tooltip, setTooltip] = useState(null);
  const [isTouch] = useState(() => window.matchMedia('(pointer: coarse)').matches);
  const defaultPos = { coordinates: [20, 15], zoom: isTouch ? 1.8 : 1 };
  const [position, setPosition] = useState(defaultPos);
  const [zooming, setZooming] = useState(false);
  const [zoomStage, setZoomStage] = useState(0);
  const [zoomCountry, setZoomCountry] = useState(null);
  const [hoveredNumId, setHoveredNumId] = useState(null);

  const clearedIds  = new Set(Object.keys(progress || {}).map(k => k.split('_')[0]));
  const unlockedIds = getUnlockedIds(progress || {});

  const getCountryStatus = (id) => {
    if (!COUNTRIES.find(c => c.id === id)) return 'other';
    if (clearedIds.has(id))  return 'cleared';
    if (unlockedIds.has(id)) return 'unlocked';
    return 'locked';
  };

  const handleCountryClick = (id) => {
    const c = COUNTRIES.find(c => c.id === id);
    if (!c || !unlockedIds.has(id)) return;
    setZooming(true);
    setZoomCountry(c);
    setTooltip(null);
    setZoomStage(1);
    setPosition({ coordinates: c.coordinates, zoom: 3 });
    setTimeout(() => {
      setZoomStage(2);
      setPosition({ coordinates: c.coordinates, zoom: 6 });
    }, 300);
    setTimeout(() => setZoomStage(3), 900);
    setTimeout(() => {
      onSelectCountry(c);
      setZooming(false);
      setZoomStage(0);
      setZoomCountry(null);
      setPosition(defaultPos);
    }, 1300);
  };

  const getGeoStyle = (numericId, gameId, status, isHovered) => {
    const neon = getNeonColor(numericId);

    if (status === 'cleared') {
      const base = {
        fill: 'rgba(0,255,136,0.12)',
        stroke: '#00ff88',
        strokeWidth: 1.0,
        outline: 'none',
        cursor: 'pointer',
      };
      const hov = {
        fill: 'rgba(0,255,136,0.55)',
        stroke: '#00ffcc',
        strokeWidth: 2.4,
        outline: 'none',
        cursor: 'pointer',
      };
      const active = isHovered ? hov : base;
      return { default: active, hover: active, pressed: { fill: 'rgba(0,255,136,0.65)', outline: 'none' } };
    }
    if (status === 'unlocked') {
      const base = {
        fill: 'rgba(0,80,200,0.10)',
        stroke: neon,
        strokeWidth: 1.0,
        outline: 'none',
        cursor: 'pointer',
      };
      const hov = {
        fill: 'rgba(80,160,255,0.45)',
        stroke: '#ffffff',
        strokeWidth: 2.4,
        outline: 'none',
        cursor: 'pointer',
      };
      const active = isHovered ? hov : base;
      return { default: active, hover: active, pressed: { fill: 'rgba(0,80,200,0.60)', outline: 'none' } };
    }
    if (status === 'locked') {
      const base = {
        fill: 'rgba(0,0,0,0.05)',
        stroke: neon,
        strokeWidth: 0.65,
        outline: 'none',
        opacity: 0.50,
        cursor: 'default',
      };
      const hov = {
        fill: 'rgba(255,220,80,0.42)',
        stroke: neon,
        strokeWidth: 2.2,
        outline: 'none',
        opacity: 1,
        cursor: 'default',
      };
      const active = isHovered ? hov : base;
      return { default: active, hover: active, pressed: { outline: 'none' } };
    }
    // ゲーム外の国
    const base = {
      fill: 'rgba(0,0,0,0.04)',
      stroke: neon,
      strokeWidth: 0.50,
      outline: 'none',
      opacity: 0.55,
    };
    const hov = {
      fill: 'rgba(255,220,80,0.32)',
      stroke: neon,
      strokeWidth: 1.8,
      outline: 'none',
      opacity: 1,
    };
    const active = isHovered ? hov : base;
    return { default: active, hover: active, pressed: { outline: 'none' } };
  };

  return (
    <div style={styles.wrap}>
      <div style={styles.crtScanlines} />
      <div style={styles.crtVignette} />

      {/* ヘッダー */}
      <div style={styles.header}>
        <button style={styles.backBtn} onClick={onBack}>
          {'[ < BACK ]'}
        </button>
        <span style={styles.title}>{'> WORLD_MAP'}<span style={styles.cursor}>_</span></span>
      </div>

      <div style={{ ...styles.mapWrap, pointerEvents: zooming ? 'none' : 'auto' }}>
        <ComposableMap
          projectionConfig={{ scale: 147 }}
          style={{ width: '100%', height: '100%' }}
        >
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={({ zoom, coordinates }) => {
              if (!zooming) setPosition({
                zoom,
                coordinates: [
                  Math.max(-170, Math.min(170, coordinates[0])),
                  Math.max(-65,  Math.min(80,  coordinates[1])),
                ],
              });
            }}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const numericId = geo.id ? parseInt(geo.id) : null;
                  const id = ISO_MAP[numericId];
                  const status = getCountryStatus(id);
                  const handleClick = () => {
                    if (!id) return;
                    const c = COUNTRIES.find(cc => cc.id === id);
                    if (isTouch) {
                      if (tooltip?.id === id && unlockedIds.has(id)) {
                        handleCountryClick(id);
                      } else {
                        setTooltip(c || null);
                      }
                    } else {
                      if (unlockedIds.has(id)) handleCountryClick(id);
                    }
                  };
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={handleClick}
                      onMouseEnter={() => {
                        setHoveredNumId(numericId);
                        if (id && !isTouch) {
                          const c = COUNTRIES.find(c => c.id === id);
                          setTooltip(c);
                        }
                      }}
                      onMouseLeave={() => {
                        setHoveredNumId(null);
                        if (!isTouch) setTooltip(null);
                      }}
                      style={getGeoStyle(numericId, id, status, hoveredNumId === numericId)}
                    />
                  );
                })
              }
            </Geographies>

            {COUNTRIES.map((c) => {
              const isUnlocked = unlockedIds.has(c.id);
              const handleMarkerClick = () => {
                if (isTouch) {
                  if (tooltip?.id === c.id && isUnlocked) {
                    handleCountryClick(c.id);
                  } else {
                    setTooltip(c);
                  }
                } else {
                  if (isUnlocked) handleCountryClick(c.id);
                  else setTooltip(c);
                }
              };
              return (
                <Marker key={c.id} coordinates={c.coordinates} onClick={handleMarkerClick}>
                  <circle
                    r={10}
                    fill="transparent"
                    style={{ cursor: isUnlocked ? 'pointer' : 'default' }}
                    onMouseEnter={() => {
                      if (!isTouch) {
                        const numId = REVERSE_ISO[c.id];
                        if (numId) setHoveredNumId(numId);
                        setTooltip(c);
                      }
                    }}
                    onMouseLeave={() => {
                      if (!isTouch) {
                        setHoveredNumId(null);
                        setTooltip(null);
                      }
                    }}
                  />
                  <text
                    textAnchor="middle"
                    dy="5"
                    style={{
                      fontSize: 14,
                      cursor: isUnlocked ? 'pointer' : 'default',
                      filter: isUnlocked ? 'none' : 'grayscale(1) opacity(0.35)',
                      userSelect: 'none',
                      pointerEvents: 'none',
                    }}
                  >
                    {c.emoji}
                  </text>
                  {isUnlocked && (
                    <text
                      textAnchor="middle"
                      y={16}
                      style={{
                        fontSize: 4,
                        fill: clearedIds.has(c.id) ? '#00ff88'
                            : Object.keys(quizProgress || {}).some(k => k.startsWith(`${world}_${c.id}_`)) ? '#ffdd00'
                            : '#aaa',
                        fontFamily: 'Press Start 2P, monospace',
                        userSelect: 'none',
                        pointerEvents: 'none',
                      }}
                    >
                      {clearedIds.has(c.id) ? `✓ ${c.name}` : c.name}
                    </text>
                  )}
                </Marker>
              );
            })}
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {zooming && (
        <div style={{
          ...styles.zoomOverlay,
          background: zoomStage === 1 ? 'rgba(0,255,136,0.12)'
                    : zoomStage === 3 ? 'rgba(0,0,0,0.85)'
                    : 'rgba(0,0,0,0.4)',
          transition: 'background 0.3s ease',
        }}>
          {zoomStage >= 2 && zoomCountry && (
            <div style={styles.zoomContent}>
              <div style={styles.zoomEmoji}>{zoomCountry.emoji}</div>
              <div style={styles.zoomCountryName}>{zoomCountry.name}</div>
              <div style={styles.zoomEntering}>▶ ENTERING STAGE...</div>
            </div>
          )}
        </div>
      )}

      {/* タップで閉じる透明overlay（モバイル用） */}
      {isTouch && tooltip && (
        <div
          onClick={() => setTooltip(null)}
          style={{ position: 'absolute', inset: 0, zIndex: 28 }}
        />
      )}

      {!zooming && tooltip && (
        <div style={styles.tooltip}>
          <div style={styles.tooltipEmoji}>{tooltip.emoji}</div>
          <div style={styles.tooltipName}>{tooltip.name}</div>
          <div style={styles.tooltipCapital}>// 首都: {tooltip.capital}</div>
          <div style={styles.tooltipTheme}>// テーマ: {tooltip.theme}</div>
          {!unlockedIds.has(tooltip.id) && (
            <div style={styles.tooltipLocked}>{'> 🔒 LOCKED'}</div>
          )}
          {clearedIds.has(tooltip.id) && (
            <div style={styles.tooltipCleared}>{'> ✅ CLEARED'}</div>
          )}
          {unlockedIds.has(tooltip.id) && (
            <button style={styles.tooltipBtn} onClick={() => handleCountryClick(tooltip.id)}>
              {'[ > START ]'}
            </button>
          )}
        </div>
      )}

      {(position.zoom !== defaultPos.zoom || position.coordinates[0] !== defaultPos.coordinates[0]) && !zooming && (
        <button style={styles.resetBtn} onClick={() => setPosition(defaultPos)}>
          {'> reset.exe'}
        </button>
      )}

      {/* フッター凡例 */}
      <div style={styles.legend}>
        <span style={styles.legendLabel}>{'// MAP KEY'}</span>
        <span style={{ ...styles.legendItem, color: '#00ffaa', textShadow: '0 0 6px #00ffaa, 0 0 14px #00ff8866' }}>
          {'[✓]'} <span style={styles.legendText}>CLEARED</span>
        </span>
        <span style={{ ...styles.legendItem, color: '#22ccff', textShadow: '0 0 6px #22ccff, 0 0 14px #0088ff66' }}>
          {'[▶]'} <span style={styles.legendText}>READY</span>
        </span>
        <span style={{ ...styles.legendItem, color: '#556677' }}>
          {'[-]'} <span style={styles.legendText}>LOCKED</span>
        </span>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    position: 'fixed',
    inset: 0,
    background: '#04050e',
    overflow: 'hidden',
    zIndex: 1,
  },
  crtScanlines: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.15) 2px,
      rgba(0,0,0,0.15) 4px
    )`,
    pointerEvents: 'none',
    zIndex: 20,
  },
  crtVignette: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.72) 100%)',
    pointerEvents: 'none',
    zIndex: 21,
  },
  header: {
    position: 'absolute',
    top: 12,
    left: 16,
    zIndex: 30,
    display: 'flex',
    alignItems: 'center',
    gap: 14,
  },
  backBtn: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
    background: 'transparent',
    color: '#00ffcc',
    border: 'none',
    padding: '8px 4px',
    cursor: 'pointer',
    letterSpacing: 1,
    textShadow: '0 0 5px #00ffcc, 0 0 12px #00ffaa, 0 0 25px #00ff88',
  },
  title: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 'clamp(9px, 2.2vw, 12px)',
    color: '#00ffdd',
    letterSpacing: 2,
    textShadow: '0 0 5px #00ffdd, 0 0 14px #00ffaa, 0 0 30px #00ff88',
  },
  cursor: {
    animation: 'blink 1s step-end infinite',
    color: '#00ff88',
  },
  mapWrap: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  tooltip: {
    position: 'absolute',
    bottom: 60,
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'rgba(4,5,14,0.94)',
    border: '1px solid rgba(0,255,136,0.35)',
    boxShadow: '0 0 20px rgba(0,255,136,0.12)',
    padding: '18px 28px',
    textAlign: 'center',
    minWidth: 260,
    zIndex: 30,
  },
  tooltipEmoji: { fontSize: 40, marginBottom: 10 },
  tooltipName: {
    fontSize: 13,
    color: '#00ff88',
    marginBottom: 8,
    textShadow: '0 0 10px #00ff88',
  },
  tooltipCapital: { fontSize: 9, color: '#556', marginBottom: 5, fontFamily: 'var(--pixel-font)' },
  tooltipTheme: { fontSize: 9, color: '#ffdd00', marginBottom: 6, fontFamily: 'var(--pixel-font)' },
  tooltipLocked: { fontSize: 9, color: '#ff4444', marginTop: 6, fontFamily: 'var(--pixel-font)', textShadow: '0 0 6px #ff4444' },
  tooltipCleared: { fontSize: 9, color: '#00ff88', marginTop: 6, fontFamily: 'var(--pixel-font)', textShadow: '0 0 6px #00ff88' },
  tooltipBtn: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 10,
    background: 'transparent',
    color: '#00ff88',
    border: 'none',
    padding: '12px 20px',
    cursor: 'pointer',
    marginTop: 10,
    width: '100%',
    letterSpacing: 2,
    textShadow: '0 0 8px #00ff88',
  },
  legend: {
    position: 'absolute',
    bottom: 14,
    right: 14,
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    padding: '8px 12px',
    zIndex: 30,
  },
  legendLabel: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 7,
    color: '#55aacc',
    letterSpacing: 1,
    marginRight: 4,
    textShadow: '0 0 6px #3399bb',
  },
  legendItem: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
  legendText: {
    color: '#99aabb',
    fontSize: 7,
  },
  zoomOverlay: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 40,
    pointerEvents: 'none',
  },
  resetBtn: {
    position: 'absolute',
    top: 14,
    right: 14,
    fontFamily: 'var(--pixel-font)',
    fontSize: 9,
    background: 'transparent',
    color: '#ffee00',
    border: 'none',
    padding: '10px 8px',
    cursor: 'pointer',
    zIndex: 30,
    letterSpacing: 1,
    textShadow: '0 0 6px #ffee00, 0 0 16px #ffcc0066, 0 0 30px #ffaa0033',
  },
  zoomContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    animation: 'fadeIn 0.3s ease forwards',
  },
  zoomEmoji: {
    fontSize: 'clamp(48px, 12vw, 72px)',
    filter: 'drop-shadow(0 0 20px rgba(0,255,136,0.8))',
  },
  zoomCountryName: {
    fontSize: 'clamp(14px, 4vw, 22px)',
    color: '#00ff88',
    textShadow: '0 0 30px #00ff88, 3px 3px 0 #003322',
    letterSpacing: 4,
  },
  zoomEntering: {
    fontSize: 'clamp(8px, 2vw, 11px)',
    color: '#ffdd00',
    animation: 'pulse 0.5s ease infinite alternate',
    letterSpacing: 2,
    textShadow: '0 0 8px #ffdd00',
  },
};
