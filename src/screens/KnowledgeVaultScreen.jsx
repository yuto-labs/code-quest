import { useMemo, useState } from 'react';
import BackButton from '../components/BackButton';
import {
  collectCountryKnowledge,
  collectWorldDataKnowledge,
  filterKnowledge,
} from '../utils/knowledgeVault';

const TABS = [
  { id: 'country', label: 'COUNTRY KNOWLEDGE' },
  { id: 'world', label: 'WORLD DATA' },
];

const PATH_FILTERS = [
  { id: 'all', label: 'ALL PATHS' },
  { id: 'sql', label: 'SQL' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'c', label: 'C' },
];

export default function KnowledgeVaultScreen({ initialTab = 'country', onBack, progress, meta }) {
  const [tab, setTab] = useState(initialTab);
  const [query, setQuery] = useState('');
  const [countryId, setCountryId] = useState('all');
  const [category, setCategory] = useState('all');
  const [pathId, setPathId] = useState('all');
  const [selectedId, setSelectedId] = useState('');

  const countryItems = useMemo(
    () => collectCountryKnowledge({ progress, meta }),
    [progress, meta],
  );
  const worldItems = useMemo(() => collectWorldDataKnowledge(), []);
  const items = tab === 'country' ? countryItems : worldItems;

  const countries = useMemo(() => {
    const byId = new Map();
    countryItems.forEach(item => byId.set(item.countryId, item.countryNameJa || item.countryName));
    return [...byId.entries()]
      .map(([id, label]) => ({ id, label }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [countryItems]);

  const categories = useMemo(() => {
    const source = tab === 'country' ? countryItems : worldItems;
    return [...new Set(source.map(item => item.category).filter(Boolean))]
      .sort((a, b) => a.localeCompare(b));
  }, [countryItems, tab, worldItems]);

  const filtered = useMemo(
    () => filterKnowledge(items, { query, countryId, category, pathId }),
    [items, query, countryId, category, pathId],
  );

  const selected = useMemo(
    () => items.find(item => item.id === selectedId) || filtered[0] || null,
    [filtered, items, selectedId],
  );

  const switchTab = (nextTab) => {
    setTab(nextTab);
    setSelectedId('');
    setCategory('all');
    if (nextTab === 'country') setPathId('all');
    if (nextTab === 'world') setCountryId('all');
  };

  return (
    <div style={styles.wrap} className="fade-in">
      <header style={styles.header}>
        <BackButton onClick={onBack} />
        <div style={styles.headingBlock}>
          <div style={styles.kicker}>KNOWLEDGE VAULT</div>
          <h1 style={styles.title}>読み放題アーカイブ</h1>
        </div>
      </header>

      <div style={styles.panel}>
        <div style={styles.tabs} role="tablist" aria-label="Knowledge Vault tabs">
          {TABS.map(item => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={tab === item.id}
              style={{
                ...styles.tab,
                ...(tab === item.id ? styles.tabActive : null),
              }}
              onClick={() => switchTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div style={styles.filters}>
          <input
            style={styles.search}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={tab === 'country' ? '国・テーマ・別名で検索' : 'path・chapter・themeで検索'}
            aria-label="Knowledge search"
          />
          {tab === 'country' && (
            <select style={styles.select} value={countryId} onChange={(event) => setCountryId(event.target.value)}>
              <option value="all">ALL COUNTRIES</option>
              {countries.map(country => (
                <option key={country.id} value={country.id}>{country.label}</option>
              ))}
            </select>
          )}
          {tab === 'world' && (
            <select style={styles.select} value={pathId} onChange={(event) => setPathId(event.target.value)}>
              {PATH_FILTERS.map(path => (
                <option key={path.id} value={path.id}>{path.label}</option>
              ))}
            </select>
          )}
          <select style={styles.select} value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="all">ALL THEMES</option>
            {categories.map(item => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div style={styles.body}>
          <aside style={styles.list} aria-label="Knowledge list">
            <div style={styles.count}>{filtered.length} ITEMS</div>
            {filtered.map(item => (
              <button
                key={item.id}
                type="button"
                style={{
                  ...styles.item,
                  ...(selected?.id === item.id ? styles.itemActive : null),
                }}
                onClick={() => setSelectedId(item.id)}
              >
                <span style={styles.itemTitle}>{item.title}</span>
                <span style={styles.itemMeta}>
                  {item.type === 'country' ? item.countryNameJa : item.pathTitle}
                  {' / '}
                  {item.category}
                </span>
                {item.type === 'country' && (
                  <span style={{
                    ...styles.badge,
                    ...(item.questState === 'mastered' ? styles.badgeMastered : null),
                    ...(item.questState === 'cleared' ? styles.badgeCleared : null),
                  }}>
                    {item.questState === 'mastered' ? 'MASTERY' : item.questState === 'cleared' ? 'QUEST CLEARED' : 'READABLE'}
                  </span>
                )}
              </button>
            ))}
          </aside>

          <main style={styles.detail} aria-live="polite">
            {selected ? (
              <KnowledgeDetail item={selected} />
            ) : (
              <div style={styles.empty}>条件に合う知識がありません。</div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

function KnowledgeDetail({ item }) {
  return (
    <article>
      <div style={styles.detailTop}>
        <div style={styles.detailKicker}>
          {item.type === 'country' ? item.countryNameJa : `${item.pathTitle} / ${item.chapterTitle || item.chapterId}`}
        </div>
        <h2 style={styles.detailTitle}>{item.title}</h2>
        <div style={styles.chips}>
          {item.category && <span style={styles.chip}>{item.category}</span>}
          {item.type === 'country' && item.status && item.status !== 'verified' && (
            <span style={styles.chip}>{item.status}</span>
          )}
          {item.type === 'country' && (
            <span style={styles.chip}>
              {item.questState === 'mastered' ? 'MASTERY' : item.questState === 'cleared' ? 'QUEST CLEARED' : 'OPEN FROM START'}
            </span>
          )}
        </div>
      </div>

      <Section title="概要" value={item.summary} />
      <Section title="要点" list={item.keyPoints} />
      <Section title="詳細" value={item.detail} />
      <Section title="背景・経緯" value={item.background} />
      <Section title="歴史的背景" value={item.history} />
      <Section title="関連エピソード" value={item.episode} />
      {item.aliases?.length > 0 && <Section title="別名・検索語" list={item.aliases} />}
      <SourceRefs refs={item.sourceRefs} />
    </article>
  );
}

function Section({ title, value, list }) {
  const lines = Array.isArray(list) ? list.filter(Boolean) : [];
  if (!value && lines.length === 0) return null;
  return (
    <section style={styles.section}>
      <h3 style={styles.sectionTitle}>{title}</h3>
      {value && <p style={styles.sectionText}>{value}</p>}
      {lines.length > 0 && (
        <ul style={styles.keyList}>
          {lines.map((line, index) => (
            <li key={`${line}_${index}`} style={styles.keyItem}>{line}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

function SourceRefs({ refs = [] }) {
  const items = refs.filter(ref => ref?.title || ref?.url);
  if (items.length === 0) return null;
  return (
    <details style={styles.sources}>
      <summary style={styles.sourcesSummary}>出典を見る</summary>
      <div style={styles.sourceList}>
        {items.map((ref, index) => (
          <a
            key={`${ref.url || ref.title}_${index}`}
            href={ref.url || '#'}
            target="_blank"
            rel="noreferrer noopener"
            style={styles.sourceLink}
          >
            <span>{ref.title || ref.url}</span>
            {ref.organization && <small style={styles.sourceOrg}>{ref.organization}</small>}
          </a>
        ))}
      </div>
    </details>
  );
}

const styles = {
  wrap: {
    position: 'fixed',
    inset: 0,
    background: 'radial-gradient(circle at top, rgba(0,255,136,0.08), transparent 34%), var(--bg)',
    color: 'var(--text)',
    padding: 'calc(env(safe-area-inset-top, 0px) + 20px) 18px calc(env(safe-area-inset-bottom, 0px) + 18px)',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    overflow: 'hidden',
  },
  header: {
    maxWidth: 1180,
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    flexShrink: 0,
  },
  headingBlock: { minWidth: 0 },
  kicker: { color: 'var(--accent2)', fontSize: 9, letterSpacing: 2 },
  title: { margin: '4px 0 0', color: 'var(--accent)', fontSize: 'clamp(18px, 5vw, 34px)', lineHeight: 1.2 },
  panel: {
    maxWidth: 1180,
    width: '100%',
    margin: '0 auto',
    minHeight: 0,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  tabs: { display: 'flex', flexWrap: 'wrap', gap: 8, flexShrink: 0 },
  tab: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 9,
    padding: '10px 12px',
    color: 'var(--text)',
    background: 'rgba(0,5,25,0.72)',
    border: '2px solid rgba(0,255,136,0.28)',
    cursor: 'pointer',
  },
  tabActive: {
    color: 'var(--accent)',
    borderColor: 'var(--accent)',
    boxShadow: '0 0 14px rgba(0,255,136,0.18)',
  },
  filters: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
    flexShrink: 0,
  },
  search: {
    fontFamily: 'var(--pixel-font)',
    flex: '1 1 260px',
    minWidth: 0,
    padding: '11px 12px',
    color: 'var(--text)',
    background: 'rgba(0,0,0,0.35)',
    border: '2px solid rgba(0,255,136,0.28)',
    outline: 'none',
  },
  select: {
    fontFamily: 'var(--pixel-font)',
    flex: '0 1 220px',
    minWidth: 150,
    padding: '10px 12px',
    color: 'var(--text)',
    background: '#050814',
    border: '2px solid rgba(0,255,136,0.28)',
    outline: 'none',
  },
  body: {
    minHeight: 0,
    flex: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
    gap: 12,
  },
  list: {
    minHeight: 0,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    padding: 10,
    border: '2px solid rgba(0,255,136,0.24)',
    background: 'rgba(0,5,25,0.55)',
  },
  count: { color: 'var(--text-dim)', fontSize: 8, padding: '2px 2px 6px' },
  item: {
    fontFamily: 'var(--pixel-font)',
    width: '100%',
    textAlign: 'left',
    padding: 12,
    color: 'var(--text)',
    background: 'rgba(0,0,0,0.24)',
    border: '2px solid rgba(0,255,136,0.14)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  itemActive: {
    borderColor: 'var(--accent)',
    boxShadow: '0 0 18px rgba(0,255,136,0.15)',
  },
  itemTitle: { color: 'var(--accent)', fontSize: 10, lineHeight: 1.5 },
  itemMeta: { color: 'var(--text-dim)', fontSize: 8, lineHeight: 1.6 },
  badge: {
    alignSelf: 'flex-start',
    color: 'var(--text-dim)',
    border: '1px solid rgba(255,255,255,0.16)',
    padding: '4px 6px',
    fontSize: 7,
  },
  badgeCleared: { color: 'var(--accent2)', borderColor: 'rgba(255,221,0,0.45)' },
  badgeMastered: { color: 'var(--accent)', borderColor: 'rgba(0,255,136,0.55)' },
  detail: {
    minHeight: 0,
    overflowY: 'auto',
    padding: '18px clamp(14px, 3vw, 24px)',
    border: '2px solid rgba(0,255,136,0.24)',
    background: 'rgba(0,5,25,0.68)',
  },
  detailTop: { borderBottom: '1px solid rgba(0,255,136,0.16)', paddingBottom: 14, marginBottom: 14 },
  detailKicker: { color: 'var(--accent2)', fontSize: 9, lineHeight: 1.6 },
  detailTitle: { color: 'var(--accent)', margin: '6px 0 10px', fontSize: 'clamp(16px, 4vw, 28px)', lineHeight: 1.35 },
  chips: { display: 'flex', flexWrap: 'wrap', gap: 8 },
  chip: {
    color: 'var(--text-dim)',
    border: '1px solid rgba(0,255,136,0.24)',
    padding: '5px 7px',
    fontSize: 8,
  },
  section: { margin: '16px 0' },
  sectionTitle: { color: 'var(--accent2)', fontSize: 10, margin: '0 0 8px' },
  sectionText: { color: 'var(--text)', fontSize: 12, lineHeight: 1.9, whiteSpace: 'pre-wrap', margin: 0 },
  keyList: { margin: 0, paddingLeft: 20, color: 'var(--text)' },
  keyItem: { fontSize: 12, lineHeight: 1.8, marginBottom: 4 },
  sources: {
    marginTop: 18,
    padding: 12,
    border: '1px solid rgba(0,255,136,0.20)',
    background: 'rgba(0,0,0,0.20)',
  },
  sourcesSummary: { color: 'var(--accent)', cursor: 'pointer', fontSize: 10 },
  sourceList: { display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 },
  sourceLink: { color: 'var(--accent2)', fontSize: 10, lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: 2 },
  sourceOrg: { color: 'var(--text-dim)', fontSize: 8 },
  empty: { color: 'var(--text-dim)', fontSize: 12, lineHeight: 1.8 },
};
