import { useMemo, useState } from 'react';
import { PYTHON_REFERENCE } from '../data/reference';
import { getConceptCoreStatus, getConceptBestScores } from '../utils/progress';
import { WORLD_META, WORLD_IDS } from '../utils/stageData';

// Reference topic id → CONCEPTS.python id (null = not mapped)
const REFERENCE_CONCEPT_MAP = {
  variables:          'variables',
  variables_advanced: 'variables',
  strings:            null,
  operators:          null,
  conditionals:       'conditions',
  loops:              'loops',
  functions:          'functions',
  lists:              'lists',
  dicts:              'dicts',
  classes:            'classes',
  errors:             'errors',
  modules:            'modules',
  comprehensions:     'comprehension',
};

const WORLD_ORDER = ['decode', 'execute', 'debug'];
const LAYERS = ['all', '0', '1', '2', '3'];

function ConceptCore({ conceptId, progress, scores, size = 'sm' }) {
  if (!conceptId) return null;
  const status = getConceptCoreStatus(progress || {}, conceptId);
  if (!status) return null;
  const bestScores = scores ? getConceptBestScores(scores, conceptId) : null;

  const dotSize = size === 'lg' ? 18 : 12;
  const gap = size === 'lg' ? 10 : 6;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap }}>
      {WORLD_ORDER.map(wid => {
        const meta = WORLD_META[wid];
        const cleared = status[wid];
        const hasContent = cleared !== null;
        const best = bestScores?.[wid] || 0;

        const bg = !hasContent ? 'transparent'
          : cleared ? meta.color
          : 'transparent';
        const border = !hasContent ? '#333'
          : cleared ? meta.color
          : meta.color + '88';
        const opacity = hasContent ? 1 : 0.25;

        return (
          <div key={wid} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, opacity }}>
            <div style={{
              width: dotSize,
              height: dotSize,
              borderRadius: '50%',
              background: bg,
              border: `2px solid ${border}`,
              boxShadow: cleared ? `0 0 6px ${meta.color}88` : 'none',
              transition: 'all 0.2s',
            }} />
            {size === 'lg' && best > 0 && (
              <div style={{ fontSize: 8, color: meta.color, fontFamily: 'var(--pixel-font)' }}>
                {best}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function ReferenceScreen({ onBack, progress, scores, review = {}, onNavigate }) {
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState('');
  const [languageFilter, setLanguageFilter] = useState('python');
  const [worldFilter, setWorldFilter] = useState('all');
  const [progressFilter, setProgressFilter] = useState('all');
  const [reviewFilter, setReviewFilter] = useState('all');
  const [layerFilter, setLayerFilter] = useState('all');

  const filteredTopics = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PYTHON_REFERENCE.filter(topic => {
      const conceptId = REFERENCE_CONCEPT_MAP[topic.id] ?? null;
      const searchable = [
        topic.title,
        topic.summary,
        topic.aliases?.join(' '),
        topic.keywords?.join(' '),
        conceptId,
        ...(topic.sections || []).flatMap(section => [section.heading, section.text, section.code]),
      ].filter(Boolean).join(' ').toLowerCase();
      if (q && !searchable.includes(q)) return false;
      if (languageFilter !== 'all' && languageFilter !== 'python') return false;
      const status = conceptId ? getConceptCoreStatus(progress || {}, conceptId, languageFilter === 'all' ? 'python' : languageFilter) : null;
      if (worldFilter !== 'all' && status?.[worldFilter] === null) return false;
      if (progressFilter !== 'all') {
        const worlds = worldFilter === 'all' ? WORLD_IDS : [worldFilter];
        const values = worlds.map(wid => status?.[wid]).filter(v => v !== null && v !== undefined);
        const cleared = values.filter(Boolean).length;
        const total = values.length;
        if (progressFilter === 'not-started' && cleared !== 0) return false;
        if (progressFilter === 'in-progress' && !(cleared > 0 && cleared < total)) return false;
        if (progressFilter === 'cleared' && !(total > 0 && cleared === total)) return false;
      }
      if (reviewFilter === 'review-needed') {
        const needsReview = Object.values(review || {}).some(item => item?.reviewDue && (item?.mistakeTags || []).includes(conceptId));
        if (!needsReview) return false;
      }
      if (layerFilter !== 'all') {
        const layer = conceptId ? Math.min(Object.values(status || {}).filter(Boolean).length, 3) : 0;
        if (String(layer) !== layerFilter) return false;
      }
      return true;
    });
  }, [query, languageFilter, worldFilter, progressFilter, reviewFilter, layerFilter, progress, review]);

  const clearFilters = () => {
    setQuery('');
    setLanguageFilter('python');
    setWorldFilter('all');
    setProgressFilter('all');
    setReviewFilter('all');
    setLayerFilter('all');
  };

  if (selected) {
    return (
      <TopicDetail
        topic={selected}
        conceptId={REFERENCE_CONCEPT_MAP[selected.id] ?? null}
        progress={progress}
        scores={scores}
        onNavigate={onNavigate}
        onBack={() => setSelected(null)}
      />
    );
  }

  return (
    <div style={styles.wrap} className="fade-in">
      <div style={styles.header}>
        <button style={styles.backBtn} onClick={onBack}>{'[ < BACK ]'}</button>
        <div style={styles.headerText}>
          <div style={styles.title}>📚 PYTHON REFERENCE</div>
          <div style={styles.sub}>タップして詳細を見る</div>
        </div>
      </div>

      <div style={styles.filters}>
        <input
          style={styles.search}
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search reference"
          aria-label="Search reference"
        />
        <select style={styles.select} value={languageFilter} onChange={e => setLanguageFilter(e.target.value)} aria-label="Language filter">
          <option value="python">Python</option>
          <option value="all">All languages</option>
        </select>
        <select style={styles.select} value={worldFilter} onChange={e => setWorldFilter(e.target.value)} aria-label="World filter">
          <option value="all">All worlds</option>
          {WORLD_IDS.map(wid => <option key={wid} value={wid}>{WORLD_META[wid].label}</option>)}
        </select>
        <select style={styles.select} value={progressFilter} onChange={e => setProgressFilter(e.target.value)} aria-label="Progress filter">
          <option value="all">All progress</option>
          <option value="not-started">Not started</option>
          <option value="in-progress">In progress</option>
          <option value="cleared">Cleared</option>
        </select>
        <select style={styles.select} value={reviewFilter} onChange={e => setReviewFilter(e.target.value)} aria-label="Review filter">
          <option value="all">All review</option>
          <option value="review-needed">Review needed</option>
        </select>
        <select style={styles.select} value={layerFilter} onChange={e => setLayerFilter(e.target.value)} aria-label="Concept Core layer filter">
          {LAYERS.map(layer => <option key={layer} value={layer}>{layer === 'all' ? 'All layers' : `Layer ${layer}`}</option>)}
        </select>
        <button style={styles.clearBtn} onClick={clearFilters}>CLEAR</button>
      </div>

      <div style={styles.grid}>
        {filteredTopics.length === 0 && (
          <div style={styles.empty}>No reference entries match the current filters.</div>
        )}
        {filteredTopics.map((topic) => {
          const conceptId = REFERENCE_CONCEPT_MAP[topic.id] ?? null;
          return (
            <button
              key={topic.id}
              style={styles.card}
              onClick={() => setSelected(topic)}
            >
              <span style={styles.cardEmoji}>{topic.emoji}</span>
              <div style={styles.cardBody}>
                <div style={styles.cardTitle}>{topic.title}</div>
                <div style={styles.cardSummary}>{topic.summary}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, flexShrink: 0 }}>
                <ConceptCore conceptId={conceptId} progress={progress} scores={scores} size="sm" />
                <span style={styles.arrow}>▶</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TopicDetail({ topic, conceptId, progress, scores, onNavigate, onBack }) {
  const [sectionIdx, setSectionIdx] = useState(0);
  const section = topic.sections[sectionIdx];
  const isLast = sectionIdx === topic.sections.length - 1;
  const status = conceptId ? getConceptCoreStatus(progress || {}, conceptId) : null;

  return (
    <div style={styles.wrap} className="fade-in">
      <div style={styles.header}>
        <button style={styles.backBtn} onClick={onBack}>{'[ < BACK ]'}</button>
        <div style={styles.headerText}>
          <div style={styles.title}>{topic.emoji} {topic.title}</div>
          <div style={styles.sub}>{sectionIdx + 1} / {topic.sections.length}</div>
        </div>
      </div>

      {/* Concept Core status */}
      {status && (
        <div style={styles.coreBar}>
          <span style={styles.coreLabel}>CONCEPT CORE</span>
          <ConceptCore conceptId={conceptId} progress={progress} scores={scores} size="lg" />
          <div style={{ display: 'flex', gap: 6, marginLeft: 4 }}>
            {WORLD_ORDER.map(wid => {
              const meta = WORLD_META[wid];
              const cleared = status[wid];
              if (cleared === null) return null;
              return (
                <button
                  key={wid}
                  style={{
                    fontFamily: 'var(--pixel-font)',
                    fontSize: 8,
                    padding: '4px 8px',
                    background: 'transparent',
                    border: `1px solid ${meta.color}88`,
                    color: cleared ? meta.color : meta.color + '66',
                    cursor: onNavigate ? 'pointer' : 'default',
                    letterSpacing: 1,
                  }}
                  onClick={() => onNavigate?.(wid)}
                  title={`${meta.label} ワールドへ`}
                >
                  {cleared ? '✓' : '→'} {meta.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Section progress dots */}
      <div style={styles.progressWrap}>
        {topic.sections.map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.progressDot,
              background: i <= sectionIdx ? 'var(--accent)' : 'var(--bg2)',
              border: i === sectionIdx ? '2px solid var(--accent)' : '2px solid #333',
            }}
          />
        ))}
      </div>

      <div style={styles.content}>
        <div style={styles.sectionHeading}>{section.heading}</div>
        <div style={styles.sectionText}>{section.text}</div>

        <div style={styles.codeBlock}>
          <div style={styles.codeHeader}>
            <span style={styles.codeLang}>🐍 Python</span>
          </div>
          <pre style={styles.code}>{section.code}</pre>
        </div>

        <div style={styles.navRow}>
          <button
            style={{ ...styles.navBtn, opacity: sectionIdx === 0 ? 0.3 : 1 }}
            onClick={() => setSectionIdx(i => Math.max(0, i - 1))}
            disabled={sectionIdx === 0}
          >
            ◀ PREV
          </button>
          {!isLast ? (
            <button
              style={styles.navBtnPrimary}
              onClick={() => setSectionIdx(i => i + 1)}
            >
              NEXT ▶
            </button>
          ) : (
            <button style={styles.navBtnPrimary} onClick={onBack}>
              ✅ 完了
            </button>
          )}
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
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    padding: '14px 20px',
    borderBottom: '2px solid var(--border)',
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
  headerText: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  title: {
    fontSize: 'clamp(12px, 3.5vw, 15px)',
    color: 'var(--accent)',
  },
  sub: {
    fontSize: 10,
    color: 'var(--text-dim)',
  },
  coreBar: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '10px 20px',
    background: 'var(--panel)',
    borderBottom: '1px solid var(--border2)',
    flexWrap: 'wrap',
  },
  coreLabel: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
    color: 'var(--text-dim)',
    letterSpacing: 1,
    flexShrink: 0,
  },
  filters: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: 8,
    padding: '12px 20px',
    borderBottom: '1px solid var(--border2)',
    flexShrink: 0,
  },
  search: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 10,
    background: 'var(--panel)',
    color: 'var(--text)',
    border: '1px solid var(--border2)',
    padding: '10px',
    minWidth: 0,
  },
  select: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 9,
    background: 'var(--panel)',
    color: 'var(--text)',
    border: '1px solid var(--border2)',
    padding: '8px',
    minWidth: 0,
  },
  clearBtn: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 9,
    background: 'transparent',
    color: 'var(--accent2)',
    border: '1px solid var(--accent2)',
    padding: '8px 10px',
    cursor: 'pointer',
  },
  empty: {
    fontSize: 10,
    color: 'var(--text-dim)',
    padding: 20,
    textAlign: 'center',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 20,
    maxWidth: 680,
    margin: '0 auto',
    width: '100%',
    flex: 1,
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
  },
  card: {
    fontFamily: 'var(--pixel-font)',
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    padding: '16px 20px',
    background: 'var(--panel)',
    border: '2px solid var(--border2)',
    cursor: 'pointer',
    transition: 'border-color 0.15s, background 0.15s',
    textAlign: 'left',
    width: '100%',
  },
  cardEmoji: {
    fontSize: 28,
    flexShrink: 0,
  },
  cardBody: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  cardTitle: {
    fontSize: 12,
    color: 'var(--accent)',
  },
  cardSummary: {
    fontSize: 9,
    color: 'var(--text-dim)',
  },
  arrow: {
    fontSize: 8,
    color: 'var(--accent)',
    flexShrink: 0,
  },
  progressWrap: {
    display: 'flex',
    gap: 8,
    padding: '12px 20px',
    alignItems: 'center',
  },
  progressDot: {
    width: 12,
    height: 12,
    borderRadius: 0,
    transition: 'all 0.2s',
  },
  content: {
    flex: 1,
    padding: '16px 20px',
    maxWidth: 680,
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    overflow: 'hidden',
  },
  sectionHeading: {
    fontSize: 'clamp(13px, 3.5vw, 16px)',
    color: 'var(--accent2)',
  },
  sectionText: {
    fontSize: 'clamp(11px, 3vw, 13px)',
    color: 'var(--text)',
    lineHeight: 2.2,
  },
  codeBlock: {
    background: '#0a0f1a',
    border: '2px solid var(--border2)',
    overflow: 'auto',
    flex: 1,
    WebkitOverflowScrolling: 'touch',
  },
  codeHeader: {
    padding: '8px 14px',
    borderBottom: '1px solid #1a2a4a',
    background: '#0d1520',
  },
  codeLang: {
    fontSize: 8,
    color: 'var(--text-dim)',
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 'clamp(12px, 3.5vw, 14px)',
    color: '#a8d8a8',
    padding: '16px',
    margin: 0,
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch',
    lineHeight: 1.9,
    whiteSpace: 'pre',
    display: 'block',
  },
  navBtn: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 9,
    background: 'transparent',
    color: 'var(--text-dim)',
    border: '2px solid var(--text-dim)',
    padding: '12px 16px',
    cursor: 'pointer',
    minHeight: 48,
  },
  navBtnPrimary: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 9,
    background: 'transparent',
    color: 'var(--accent)',
    border: '2px solid var(--accent)',
    padding: '12px 16px',
    cursor: 'pointer',
    minHeight: 48,
  },
  navRow: {
    display: 'flex',
    gap: 12,
    flexShrink: 0,
    paddingBottom: 'env(safe-area-inset-bottom, 16px)',
  },
};
