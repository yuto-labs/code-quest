function TextBlock({ children }) {
  if (!children) return null;
  return <div style={styles.text}>{children}</div>;
}

function CodeBlock({ children, label = 'CODE' }) {
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
            <div style={styles.closeHint}>閉じるには「コードを拡大」をもう一度押す</div>
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
    debug ||
    data.sourceRefs?.length,
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

      {data.countryNote && (
        <Section title="COUNTRY NOTE">
          <TextBlock>{data.countryNote}</TextBlock>
        </Section>
      )}

      {data.sourceRefs?.length > 0 && (
        <details style={styles.sources}>
          <summary style={styles.summary}>出典を見る</summary>
          <div style={styles.sourceList}>
            {data.sourceRefs.map(source => (
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
        </details>
      )}
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
    padding: '10px 12px',
    background: 'rgba(0,5,25,0.92)',
    border: '1px solid rgba(0,102,255,0.35)',
    color: '#a8d8a8',
    fontSize: 11,
    lineHeight: 1.8,
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
    gridTemplateColumns: '3.2em max-content',
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
    padding: '12px 14px',
    flex: 1,
    minHeight: 0,
    overflow: 'auto',
    background: 'rgba(0,0,0,0.55)',
    border: '1px solid rgba(0,255,136,0.28)',
    color: '#a8d8a8',
    fontSize: 12,
    lineHeight: 1.8,
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
};
