function TextBlock({ children }) {
  if (!children) return null;
  return <div style={styles.text}>{children}</div>;
}

export function CodeBlock({ children, label = 'CODE' }) {
  if (!children) return null;
  const code = String(children);
  const lines = code.split('\n');
  const isLong = lines.length > 14 || code.length > 900;
  const longMaxHeight = typeof window !== 'undefined' && window.innerWidth <= 720 ? '45vh' : '55vh';
  return (
    <div style={styles.codeWrap}>
      {isLong && (
        <details style={styles.expandDetails}>
          <summary style={styles.expandSummary}>コードを拡大</summary>
          <div style={styles.expandedPanel}>
            <pre style={styles.expandedCode} aria-label={label}>
              {lines.map((line, index) => (
                <span key={`${index}-${line}`} style={styles.codeLine}>
                  <span style={styles.lineNo}>{index + 1}</span>
                  <span style={styles.lineText}>{line || ' '}</span>
                </span>
              ))}
            </pre>
            <div style={styles.closeHint}>閉じるには「コードを拡大」をもう一度押してください</div>
          </div>
        </details>
      )}
      <pre style={{ ...styles.code, ...(isLong ? { ...styles.longCode, maxHeight: longMaxHeight } : null) }} aria-label={label}>
        {lines.map((line, index) => (
          <span key={`${index}-${line}`} style={styles.codeLine}>
            <span style={styles.lineNo}>{index + 1}</span>
            <span style={styles.lineText}>{line || ' '}</span>
          </span>
        ))}
      </pre>
    </div>
  );
}

function Section({ title, children }) {
  if (!children) return null;
  return (
    <section style={styles.section}>
      <div style={styles.title}>{title}</div>
      {children}
    </section>
  );
}

function SourceList({ sources = [] }) {
  if (!sources?.length) return null;
  return (
    <div style={styles.sourceList}>
      {sources.map(source => (
        <a
          key={source.url}
          href={source.url}
          target="_blank"
          rel="noreferrer noopener"
          style={styles.sourceLink}
        >
          <span style={styles.sourceTitle}>{source.title}</span>
          {source.organization && <span style={styles.sourceOrg}>{source.organization}</span>}
        </a>
      ))}
    </div>
  );
}

function CountryKnowledgeCard({ notes = [] }) {
  if (!notes?.length) return null;
  const sources = Array.from(
    new Map(notes.flatMap(note => note.sourceRefs || []).map(source => [source.url, source])).values(),
  );
  const primaryTitle = notes[0]?.titleJa || 'テーマ解説';
  return (
    <details style={styles.countryCard}>
      <summary style={styles.countrySummary}>
        <span style={styles.countrySummaryTitle}>テーマ解説</span>
        <span style={styles.countrySummaryTopic}>{primaryTitle}</span>
        <span style={styles.countrySummaryHint}>タップして詳しく見る</span>
      </summary>
      <div style={styles.countryBody}>
        {notes.map(note => (
          <article key={note.factId} style={styles.countryItem}>
            <div style={styles.countryTitleRow}>
              <div style={styles.countryTitle}>{note.titleJa}</div>
              {note.statusLabel && <span style={styles.statusLabel}>{note.statusLabel}</span>}
            </div>
            {note.summaryJa && (
              <div style={styles.topicSection}>
                <div style={styles.topicSectionTitle}>概要</div>
                <TextBlock>{note.summaryJa}</TextBlock>
              </div>
            )}
            {note.backgroundJa && (
              <div style={styles.topicSection}>
                <div style={styles.topicSectionTitle}>背景・経緯</div>
                <TextBlock>{note.backgroundJa}</TextBlock>
              </div>
            )}
            {note.historyJa && (
              <div style={styles.topicSection}>
                <div style={styles.topicSectionTitle}>歴史的背景</div>
                <TextBlock>{note.historyJa}</TextBlock>
              </div>
            )}
            {note.episodeJa && (
              <div style={styles.topicSection}>
                <div style={styles.topicSectionTitle}>関連エピソード</div>
                <TextBlock>{note.episodeJa}</TextBlock>
              </div>
            )}
            {note.keyPointsJa?.length > 0 && (
              <div style={styles.topicSection}>
                <div style={styles.topicSectionTitle}>覚えておきたい点</div>
                <ul style={styles.keyPointList}>
                  {note.keyPointsJa.map(point => (
                    <li key={point} style={styles.keyPoint}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
        {sources.length > 0 && (
          <details style={styles.noteSources}>
            <summary style={styles.summary}>出典を見る</summary>
            <SourceList sources={sources} />
          </details>
        )}
      </div>
    </details>
  );
}

export default function ExplanationPanel({ data, title = '解説' }) {
  if (!data) return null;
  const debug = data.debugExplanation || null;
  const hasAny = Boolean(
    data.correctAnswer ||
    data.completedCode ||
    data.correctOutput ||
    data.executionSteps ||
    data.commonMistakes ||
    data.programmingExplanation ||
    data.countryNote ||
    data.countryKnowledge?.length ||
    debug,
  );
  if (!hasAny) return null;

  return (
    <div style={styles.wrap} className="fade-in">
      <div style={styles.heading}>{title}</div>

      {data.correctAnswer && (
        <Section title="正解">
          <TextBlock>{data.correctAnswer}</TextBlock>
        </Section>
      )}

      {(data.correctOutput || data.completedCode) && (
        <Section title={data.correctOutput ? '正しい出力' : '完成コード'}>
          {data.correctOutput ? <CodeBlock label="正しい出力">{data.correctOutput}</CodeBlock> : <CodeBlock label="完成コード">{data.completedCode}</CodeBlock>}
        </Section>
      )}

      {data.executionSteps && (
        <Section title="処理の流れ">
          <TextBlock>{data.executionSteps}</TextBlock>
        </Section>
      )}

      {debug && (
        <>
          {debug.originalCode && (
            <Section title="ORIGINAL CODE">
              <CodeBlock label="ORIGINAL CODE">{debug.originalCode}</CodeBlock>
            </Section>
          )}
          {debug.cause && (
            <Section title="CAUSE">
              <TextBlock>{debug.cause}</TextBlock>
            </Section>
          )}
          {debug.fix && (
            <Section title="FIX">
              <TextBlock>{debug.fix}</TextBlock>
            </Section>
          )}
          {debug.why && (
            <Section title="WHY">
              <TextBlock>{debug.why}</TextBlock>
            </Section>
          )}
          {debug.impact && (
            <Section title="IMPACT">
              <TextBlock>{debug.impact}</TextBlock>
            </Section>
          )}
          {debug.correctedCode && (
            <Section title="CORRECTED CODE">
              <CodeBlock label="CORRECTED CODE">{debug.correctedCode}</CodeBlock>
            </Section>
          )}
        </>
      )}

      {data.commonMistakes && (
        <Section title="間違えやすいポイント">
          <TextBlock>{data.commonMistakes}</TextBlock>
        </Section>
      )}

      {data.programmingExplanation && (
        <Section title="プログラミング解説">
          <TextBlock>{data.programmingExplanation}</TextBlock>
        </Section>
      )}

      {data.countryNote && !data.countryKnowledge?.length && (
        <Section title="テーマ解説">
          <TextBlock>{data.countryNote}</TextBlock>
        </Section>
      )}

      <CountryKnowledgeCard notes={data.countryKnowledge} />
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
    maxWidth: '100%',
  },
  heading: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 10,
    color: 'var(--border2)',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  title: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
    color: 'var(--accent2)',
    letterSpacing: 1,
  },
  text: {
    whiteSpace: 'pre-wrap',
    fontSize: 10,
    color: 'var(--text)',
    lineHeight: 2,
    wordBreak: 'break-word',
  },
  codeWrap: {
    width: '100%',
    minWidth: 0,
    maxWidth: '100%',
  },
  code: {
    margin: 0,
    padding: '14px 16px',
    background: 'rgba(0,5,25,0.92)',
    border: '1px solid rgba(0,102,255,0.35)',
    color: '#a8d8a8',
    fontSize: 13,
    lineHeight: 1.9,
    overflowX: 'auto',
    overflowY: 'visible',
    whiteSpace: 'pre',
    width: '100%',
    minWidth: 0,
    maxWidth: '100%',
  },
  longCode: {
    overflowY: 'auto',
  },
  codeLine: {
    display: 'grid',
    gridTemplateColumns: '4em max-content',
    minWidth: 'max-content',
  },
  lineNo: {
    userSelect: 'none',
    color: 'rgba(168,216,168,0.45)',
    paddingRight: 10,
    textAlign: 'right',
  },
  lineText: {
    whiteSpace: 'pre',
  },
  expandDetails: {
    marginBottom: 6,
  },
  expandSummary: {
    cursor: 'pointer',
    color: 'var(--accent)',
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
    listStyle: 'none',
  },
  expandedPanel: {
    position: 'fixed',
    inset: 12,
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    padding: 12,
    background: 'rgba(0,5,25,0.98)',
    border: '2px solid var(--accent)',
    boxShadow: '0 0 28px rgba(0,255,136,0.22)',
  },
  expandedCode: {
    margin: 0,
    padding: '16px 18px',
    flex: 1,
    minHeight: 0,
    overflow: 'auto',
    background: 'rgba(0,0,0,0.55)',
    border: '1px solid rgba(0,255,136,0.28)',
    color: '#a8d8a8',
    fontSize: 14,
    lineHeight: 1.9,
    whiteSpace: 'pre',
  },
  closeHint: {
    flex: '0 0 auto',
    alignSelf: 'flex-end',
    padding: '7px 10px',
    border: '1px solid rgba(0,255,136,0.45)',
    color: 'var(--accent)',
    background: 'rgba(0,255,136,0.08)',
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
  },
  sources: {
    borderTop: '1px solid rgba(0,102,255,0.25)',
    paddingTop: 8,
    fontSize: 9,
  },
  summary: {
    cursor: 'pointer',
    color: 'var(--text-dim)',
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
  },
  sourceList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    marginTop: 8,
    maxHeight: 140,
    overflowY: 'auto',
  },
  sourceLink: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    color: 'var(--accent)',
    textDecoration: 'none',
    border: '1px solid rgba(0,255,136,0.16)',
    padding: '7px 8px',
    background: 'rgba(0,255,136,0.04)',
  },
  sourceTitle: {
    fontSize: 9,
    lineHeight: 1.6,
  },
  sourceOrg: {
    fontSize: 8,
    color: 'var(--text-dim)',
  },
  countryCard: {
    border: '1px solid rgba(0,255,136,0.28)',
    background: 'rgba(0,255,136,0.045)',
    padding: '10px 12px',
    maxWidth: '100%',
  },
  countrySummary: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    color: 'var(--accent)',
  },
  countrySummaryTitle: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 9,
    lineHeight: 1.8,
  },
  countrySummaryTopic: {
    fontSize: 11,
    color: 'var(--text)',
    lineHeight: 1.7,
    wordBreak: 'break-word',
  },
  countrySummaryHint: {
    fontSize: 9,
    color: 'var(--text-dim)',
    lineHeight: 1.6,
  },
  countryBody: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginTop: 12,
    minWidth: 0,
  },
  countryItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: 7,
    minWidth: 0,
  },
  countryTitleRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    alignItems: 'center',
  },
  countryTitle: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 9,
    color: 'var(--accent2)',
    lineHeight: 1.8,
  },
  statusLabel: {
    border: '1px solid rgba(255,204,0,0.45)',
    color: '#ffcc55',
    background: 'rgba(255,204,0,0.08)',
    padding: '2px 6px',
    fontSize: 8,
    lineHeight: 1.6,
  },
  topicSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    minWidth: 0,
  },
  topicSectionTitle: {
    fontFamily: 'var(--pixel-font)',
    fontSize: 8,
    color: 'var(--accent)',
    lineHeight: 1.8,
  },
  keyPointList: {
    margin: 0,
    paddingLeft: 18,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  keyPoint: {
    fontSize: 10,
    color: 'var(--text)',
    lineHeight: 1.8,
  },
  noteSources: {
    marginTop: 2,
    borderTop: '1px solid rgba(0,255,136,0.16)',
    paddingTop: 7,
  },
};
