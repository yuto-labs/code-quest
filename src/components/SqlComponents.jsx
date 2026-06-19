export function SqlTableView({ table, title = 'TABLE' }) {
  if (!table) return null;
  return (
    <section style={styles.section}>
      <div style={styles.label}>{title}: {table.id}</div>
      <div style={styles.scroll}>
        <table style={styles.table}>
          <thead>
            <tr>{table.columns.map(column => <th key={column} style={styles.th}>{column}</th>)}</tr>
          </thead>
          <tbody>
            {table.rows.map((row, index) => (
              <tr key={index}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} style={styles.td}>
                    {cell === null ? <span style={styles.null}>NULL</span> : cell === '' ? <span style={styles.empty}>''</span> : String(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function SqlQueryView({ query, title = 'QUERY' }) {
  if (!query) return null;
  const isLong = String(query).split('\n').length > 10 || String(query).length > 520;
  return (
    <section style={styles.section}>
      <div style={styles.label}>{title}</div>
      <pre style={{ ...styles.query, ...(isLong ? styles.longQuery : null) }}>{query}</pre>
    </section>
  );
}

export function SqlResultTable({ result, title = 'RESULT' }) {
  if (!result?.columns?.length) return null;
  return (
    <section style={styles.section}>
      <div style={styles.label}>{title}</div>
      <div style={styles.scroll}>
        <table style={styles.table}>
          <thead><tr>{result.columns.map(column => <th key={column} style={styles.th}>{column}</th>)}</tr></thead>
          <tbody>
            {result.rows.map((row, index) => (
              <tr key={index}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} style={styles.td}>{cell === null ? <span style={styles.null}>NULL</span> : String(cell)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function SqlExplanation({ explanation, fact }) {
  if (!explanation) return null;
  return (
    <div style={styles.explain}>
      <div style={styles.explainTitle}>EXPLANATION</div>
      {explanation.correctAnswer && <Block title="??">{explanation.correctAnswer}</Block>}
      <SqlQueryView title="?? QUERY" query={explanation.completedQuery} />
      {explanation.executionSteps?.length > 0 && <Block title="?????">{explanation.executionSteps.join('\n')}</Block>}
      {explanation.commonMistakes?.length > 0 && (
        <Block title="??????????">
          {explanation.commonMistakes.map(item => `NG: ${item.wrong}\n??: ${item.reason}\nOK: ${item.correct}`).join('\n\n')}
        </Block>
      )}
      {explanation.sqlExplanation && <Block title="SQL??">{explanation.sqlExplanation}</Block>}
      {fact && <ThemeCard fact={fact} sources={explanation.sourceRefs || fact.sourceRefs || []} />}
    </div>
  );
}

function Block({ title, children }) {
  if (!children) return null;
  return (
    <section style={styles.section}>
      <div style={styles.label}>{title}</div>
      <div style={styles.text}>{children}</div>
    </section>
  );
}

function ThemeCard({ fact, sources = [] }) {
  return (
    <details style={styles.theme}>
      <summary style={styles.themeSummary}>
        <span style={styles.themeLabel}>?????</span>
        <span style={styles.themeTitle}>{fact.titleJa}</span>
        <span style={styles.themeHint}>??????????</span>
      </summary>
      <div style={styles.themeBody}>
        <Block title="??">{fact.summaryJa}</Block>
        <Block title="?????">{fact.backgroundJa}</Block>
        <Block title="?????">{fact.historyJa}</Block>
        <Block title="???????">{fact.episodeJa}</Block>
        {fact.keyPointsJa?.length > 0 && <Block title="????????">{fact.keyPointsJa.map(point => `?${point}`).join('\n')}</Block>}
        {sources.length > 0 && (
          <details style={styles.sources}>
            <summary style={styles.sourceSummary}>?????</summary>
            {sources.map(source => (
              <a key={source.url} href={source.url} target="_blank" rel="noreferrer noopener" style={styles.sourceLink}>
                {source.title || source.url}
              </a>
            ))}
          </details>
        )}
      </div>
    </details>
  );
}

export function SqlChapterProgress({ completed, total }) {
  const pct = total ? Math.round((completed / total) * 100) : 0;
  return (
    <div style={styles.progressWrap}>
      <div className="xp-bar" style={{ height: 10, flex: 1 }}>
        <div className="xp-fill" style={{ width: `${pct}%` }} />
      </div>
      <span style={styles.progressText}>{completed}/{total}</span>
    </div>
  );
}

const styles = {
  section: { display: 'flex', flexDirection: 'column', gap: 7, minWidth: 0 },
  label: { fontFamily: 'var(--pixel-font)', fontSize: 9, color: 'var(--accent2)', lineHeight: 1.8 },
  scroll: { width: '100%', overflowX: 'auto', border: '1px solid rgba(0,255,136,0.22)', maxWidth: '100%' },
  table: { borderCollapse: 'collapse', minWidth: 'max-content', width: '100%', background: 'rgba(0,8,25,0.72)' },
  th: { padding: '8px 10px', border: '1px solid rgba(0,255,136,0.22)', color: 'var(--accent)', fontSize: 10, textAlign: 'left' },
  td: { padding: '8px 10px', border: '1px solid rgba(0,255,136,0.12)', color: 'var(--text)', fontSize: 10, lineHeight: 1.7 },
  null: { color: '#ffdd00', border: '1px solid rgba(255,221,0,0.35)', padding: '2px 5px' },
  empty: { color: '#88aaff' },
  query: { margin: 0, padding: '16px 18px', width: '100%', minWidth: 0, overflowX: 'auto', background: 'rgba(0,5,25,0.95)', border: '1px solid rgba(0,102,255,0.45)', color: '#b6f7d2', fontSize: 13, lineHeight: 1.9, whiteSpace: 'pre' },
  longQuery: { maxHeight: '55vh', overflowY: 'auto' },
  explain: { display: 'flex', flexDirection: 'column', gap: 12, padding: 14, border: '2px solid var(--border2)', background: 'var(--panel)', minWidth: 0 },
  explainTitle: { fontFamily: 'var(--pixel-font)', color: 'var(--border2)', fontSize: 10 },
  text: { fontSize: 11, lineHeight: 2, color: 'var(--text)', whiteSpace: 'pre-wrap', wordBreak: 'break-word' },
  theme: { border: '1px solid rgba(0,255,136,0.28)', background: 'rgba(0,255,136,0.045)', padding: '10px 12px' },
  themeSummary: { display: 'flex', flexDirection: 'column', gap: 4, cursor: 'pointer' },
  themeLabel: { color: 'var(--accent)', fontFamily: 'var(--pixel-font)', fontSize: 9 },
  themeTitle: { color: 'var(--text)', fontSize: 11, lineHeight: 1.7 },
  themeHint: { color: 'var(--text-dim)', fontSize: 9 },
  themeBody: { display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12 },
  sources: { borderTop: '1px solid rgba(0,255,136,0.16)', paddingTop: 8 },
  sourceSummary: { color: 'var(--text-dim)', cursor: 'pointer', fontFamily: 'var(--pixel-font)', fontSize: 8 },
  sourceLink: { display: 'block', color: 'var(--accent)', fontSize: 10, lineHeight: 1.8, marginTop: 8 },
  progressWrap: { display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 },
  progressText: { color: 'var(--text-dim)', fontSize: 9, minWidth: 48, textAlign: 'right' },
};
