import { useState } from 'react';
import { PYTHON_REFERENCE } from '../data/reference';

export default function ReferenceScreen({ onBack }) {
  const [selected, setSelected] = useState(null);

  if (selected) {
    return <TopicDetail topic={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div style={styles.wrap} className="fade-in">
      <div style={styles.header}>
        <button style={styles.backBtn} onClick={onBack}>◀ BACK</button>
        <div style={styles.headerText}>
          <div style={styles.title}>📚 PYTHON REFERENCE</div>
          <div style={styles.sub}>タップして詳細を見る</div>
        </div>
      </div>

      <div style={styles.grid}>
        {PYTHON_REFERENCE.map((topic) => (
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
            <span style={styles.arrow}>▶</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function TopicDetail({ topic, onBack }) {
  const [sectionIdx, setSectionIdx] = useState(0);
  const section = topic.sections[sectionIdx];
  const isLast = sectionIdx === topic.sections.length - 1;

  return (
    <div style={styles.wrap} className="fade-in">
      <div style={styles.header}>
        <button style={styles.backBtn} onClick={onBack}>◀ BACK</button>
        <div style={styles.headerText}>
          <div style={styles.title}>{topic.emoji} {topic.title}</div>
          <div style={styles.sub}>{sectionIdx + 1} / {topic.sections.length}</div>
        </div>
      </div>

      {/* 進捗バー */}
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

        {/* コードブロック */}
        <div style={styles.codeBlock}>
          <div style={styles.codeHeader}>
            <span style={styles.codeLang}>🐍 Python</span>
          </div>
          <pre style={styles.code}>{section.code}</pre>
        </div>

        {/* ナビゲーション */}
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
    color: 'var(--text-dim)',
    border: '2px solid var(--text-dim)',
    padding: '8px 12px',
    cursor: 'pointer',
    flexShrink: 0,
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
