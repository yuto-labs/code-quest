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
  392: 'JP',
  840: 'US',
  250: 'FR',
  76:  'BR',
  36:  'AU',
  818: 'EG',
  356: 'IN',
  643: 'RU',
  156: 'CN',
  276: 'DE',
  826: 'GB',
  410: 'KR',
  124: 'CA',
  380: 'IT',
  484: 'MX',
  682: 'SA',
  32:  'AR',
  792: 'TR',
  360: 'ID',
  710: 'ZA',
};

export default function MapScreen({ onSelectCountry, onBack, progress, quizProgress }) {
  const [tooltip, setTooltip] = useState(null);
  const [isTouch] = useState(() => window.matchMedia('(pointer: coarse)').matches);
  const defaultPos = { coordinates: [20, 15], zoom: isTouch ? 1.8 : 1 };
  const [position, setPosition] = useState(defaultPos);
  const [zooming, setZooming] = useState(false);
  const [zoomStage, setZoomStage] = useState(0);
  const [zoomCountry, setZoomCountry] = useState(null);

  // 新スキーマ: キーは 'JP_python' 形式 → 国IDを抽出
  const clearedIds  = new Set(Object.keys(progress || {}).map(k => k.split('_')[0]));
  const unlockedIds = getUnlockedIds(progress || {});

  const getCountryStatus = (id) => {
    if (!COUNTRIES.find(c => c.id === id)) return 'other';
    if (clearedIds.has(id))  return 'cleared';
    if (unlockedIds.has(id)) return 'unlocked';
    return 'locked';
  };

  const getFill = (status) => {
    switch (status) {
      case 'cleared':  return '#00aa55';
      case 'unlocked': return '#1a3a5c';
      case 'locked':   return '#1a1a2e';
      default:         return '#0d1117';
    }
  };

  const getStroke = (status) => {
    switch (status) {
      case 'cleared':  return '#00ff88';
      case 'unlocked': return '#0066ff';
      default:         return '#2a2a4a';
    }
  };

  const handleCountryClick = (id) => {
    const c = COUNTRIES.find(c => c.id === id);
    if (!c || !unlockedIds.has(id)) return;
    setZooming(true);
    setZoomCountry(c);
    setTooltip(null);

    // stage1: フラッシュ
    setZoomStage(1);
    setPosition({ coordinates: c.coordinates, zoom: 3 });

    // stage2: ズームイン＋テキスト表示
    setTimeout(() => {
      setZoomStage(2);
      setPosition({ coordinates: c.coordinates, zoom: 6 });
    }, 300);

    // stage3: フェードアウト
    setTimeout(() => setZoomStage(3), 900);

    // 遷移
    setTimeout(() => {
      onSelectCountry(c);
      setZooming(false);
      setZoomStage(0);
      setZoomCountry(null);
      setPosition(defaultPos);
    }, 1300);
  };

  return (
    <div style={styles.wrap}>
      {/* CRTエフェクト */}
      <div style={styles.crtScanlines} />
      <div style={styles.crtVignette} />

      {/* タイトルオーバーレイ */}
      <div style={styles.titleOverlay}>
        <button style={styles.backBtn} onClick={onBack}>◀ BACK</button>
        <span style={styles.title}>🌍 WORLD MAP</span>
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
                      // モバイル: タップでツールチップ表示、再タップでナビゲート
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
                        if (id && !isTouch) {
                          const c = COUNTRIES.find(c => c.id === id);
                          setTooltip(c);
                        }
                      }}
                      onMouseLeave={() => !isTouch && setTooltip(null)}
                      style={{
                        default: {
                          fill: getFill(status),
                          stroke: getStroke(status),
                          strokeWidth: 0.5,
                          outline: 'none',
                          cursor: (id && unlockedIds.has(id)) ? 'pointer' : 'default',
                          transition: 'fill 0.2s',
                        },
                        hover: {
                          fill: id ? (status === 'locked' ? '#2a1a4a' : '#00cc66') : '#111122',
                          stroke: id ? '#00ff88' : '#2a2a4a',
                          strokeWidth: id ? 1 : 0.5,
                          outline: 'none',
                        },
                        pressed: { fill: '#004433', outline: 'none' },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {COUNTRIES.map((c) => (
              <Marker
                key={c.id}
                coordinates={c.coordinates}
                onClick={() => {
                  if (isTouch) {
                    if (tooltip?.id === c.id && unlockedIds.has(c.id)) {
                      handleCountryClick(c.id);
                    } else {
                      setTooltip(c);
                    }
                  } else {
                    if (unlockedIds.has(c.id)) handleCountryClick(c.id);
                  }
                }}
              >
                <text
                  textAnchor="middle"
                  style={{
                    fontSize: 14,
                    cursor: unlockedIds.has(c.id) ? 'pointer' : 'default',
                    filter: unlockedIds.has(c.id) ? 'none' : 'grayscale(1) opacity(0.4)',
                    userSelect: 'none',
                  }}
                >
                  {c.emoji}
                </text>
                {unlockedIds.has(c.id) && (
                  <text
                    textAnchor="middle"
                    y={14}
                    style={{
                      fontSize: 4,
                      fill: clearedIds.has(c.id) ? '#00ff88'
                          : (quizProgress || {})[`${c.id}_python`] ? '#ffdd00'
                          : '#aaa',
                      fontFamily: 'Press Start 2P, monospace',
                      userSelect: 'none',
                    }}
                  >
                    {clearedIds.has(c.id) ? `✓ ${c.name}` : c.name}
                  </text>
                )}
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {zooming && (
        <div style={{
          ...styles.zoomOverlay,
          background: zoomStage === 1 ? 'rgba(0,255,136,0.15)'
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

      {!zooming && tooltip && (
        <div style={styles.tooltip}>
          <div style={styles.tooltipEmoji}>{tooltip.emoji}</div>
          <div style={styles.tooltipName}>{tooltip.name}</div>
          <div style={styles.tooltipCapital}>首都: {tooltip.capital}</div>
          <div style={styles.tooltipTheme}>テーマ: {tooltip.theme}</div>
          {!unlockedIds.has(tooltip.id) && (
            <div style={styles.tooltipLocked}>🔒 前のステージをクリアしよう</div>
          )}
          {clearedIds.has(tooltip.id) && (
            <div style={styles.tooltipCleared}>✅ クリア済み</div>
          )}
          {unlockedIds.has(tooltip.id) && (
            <button
              style={styles.tooltipBtn}
              onClick={() => handleCountryClick(tooltip.id)}
            >
              ▶ START
            </button>
          )}
        </div>
      )}

      {(position.zoom !== defaultPos.zoom || position.coordinates[0] !== defaultPos.coordinates[0]) && !zooming && (
        <button
          style={styles.resetBtn}
          onClick={() => setPosition(defaultPos)}
        >
          🌍 リセット
        </button>
      )}

      <div style={styles.legend}>
        <span style={styles.legendItem}><span style={{color:'#00ff88'}}>■</span> クリア済み</span>
        <span style={styles.legendItem}><span style={{color:'#0066ff'}}>■</span> 挑戦可能</span>
        <span style={styles.legendItem}><span style={{color:'#2a2a4a'}}>■</span> ロック中</span>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    width: '100%',
    height: 'calc(100dvh - 56px - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px))',
    background: 'var(--bg)',
    position: 'relative',
    overflow: 'hidden',
  },
  crtScanlines: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.18) 2px,
      rgba(0,0,0,0.18) 4px
    )`,
    pointerEvents: 'none',
    zIndex: 20,
  },
  crtVignette: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.65) 100%)',
    pointerEvents: 'none',
    zIndex: 21,
  },
  titleOverlay: {
    position: 'absolute',
    top: 12,
    left: 16,
    zIndex: 10,
    background: 'rgba(13,13,26,0.80)',
    padding: '8px 12px',
    border: '1px solid var(--border)',
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  backBtn: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
    background: 'transparent',
    color: 'var(--text-dim)',
    border: '2px solid var(--text-dim)',
    padding: '6px 10px',
    cursor: 'pointer',
  },
  title: {
    fontSize: 'clamp(9px, 2.5vw, 12px)',
    color: 'var(--accent)',
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
    background: 'var(--panel)',
    border: '2px solid var(--accent)',
    padding: '18px 28px',
    textAlign: 'center',
    minWidth: 260,
    zIndex: 10,
  },
  tooltipEmoji: { fontSize: 40, marginBottom: 10 },
  tooltipName: { fontSize: 13, color: 'var(--accent)', marginBottom: 8 },
  tooltipCapital: { fontSize: 11, color: 'var(--text-dim)', marginBottom: 6 },
  tooltipTheme: { fontSize: 11, color: 'var(--accent2)', marginBottom: 6 },
  tooltipLocked: { fontSize: 11, color: 'var(--danger)', marginTop: 6 },
  tooltipCleared: { fontSize: 11, color: 'var(--accent)', marginTop: 6 },
  tooltipBtn: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 11,
    background: 'var(--accent)',
    color: 'var(--bg)',
    border: 'none',
    padding: '12px 20px',
    cursor: 'pointer',
    marginTop: 10,
    width: '100%',
  },
  legend: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    display: 'flex',
    gap: 16,
    fontSize: 11,
    color: 'var(--text-dim)',
    background: 'rgba(13,13,26,0.8)',
    padding: '8px 12px',
    border: '1px solid var(--border2)',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
  zoomOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
    pointerEvents: 'none',
  },
  resetBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    fontFamily: 'var(--pixel-font)',
    fontSize: 10,
    background: 'var(--panel)',
    color: 'var(--accent2)',
    border: '2px solid var(--accent2)',
    padding: '10px 14px',
    cursor: 'pointer',
    zIndex: 10,
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
    color: 'var(--accent)',
    textShadow: '0 0 30px var(--accent), 3px 3px 0 #003322',
    letterSpacing: 4,
  },
  zoomEntering: {
    fontSize: 'clamp(8px, 2vw, 11px)',
    color: 'var(--accent2)',
    animation: 'pulse 0.5s ease infinite alternate',
    letterSpacing: 2,
  },
};
