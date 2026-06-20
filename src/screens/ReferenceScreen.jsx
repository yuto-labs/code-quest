import { useEffect, useMemo, useRef, useState } from 'react';
import { REFERENCE_TOPICS, resolveReferenceTopicId } from '../data/reference';
import { SQL_REFERENCE_TOPICS } from '../data/sql/reference';
import { CHALLENGES } from '../data/challenges';
import { EXECUTE_CHALLENGES } from '../data/execute_challenges';
import { DEBUG_CHALLENGES } from '../data/debug_challenges';
import { listFinalMissions } from '../data/final_missions';
import { CodeBlock } from '../components/ExplanationPanel';
import BackButton from '../components/BackButton';
import { getConceptCoreStatus, getConceptBestScores, buildProgressKey } from '../utils/progress';
import { WORLD_META, WORLD_IDS } from '../utils/stageData';

const WORLD_ORDER = ['decode', 'execute', 'debug'];
const LAYERS = ['all', '0', '1', '2', '3'];
const REFERENCE_LANGUAGE_ORDER = ['python', 'javascript', 'java', 'sql'];
const REFERENCE_LANGUAGE_LABELS = {
  python: 'Python',
  javascript: 'JavaScript',
  java: 'Java',
  sql: 'SQL',
};
const CHALLENGE_SOURCES = {
  decode: CHALLENGES,
  execute: EXECUTE_CHALLENGES,
  debug: DEBUG_CHALLENGES,
};

function topicConcept(topic) {
  return topic.relatedConceptIds?.[0] || null;
}

function normalizeText(value) {
  return String(value ?? '').toLowerCase();
}

function mistakeSearchText(item) {
  if (!item || typeof item !== 'object') return item;
  return [item.wrong, item.reason, item.correct].filter(Boolean).join(' ');
}

function searchableTopic(topic) {
  return [
    topic.id,
    topic.language,
    topic.title,
    topic.level,
    topic.summary,
    ...(topic.aliases || []),
    ...(topic.relatedConceptIds || []),
    ...(topic.pages || []).flatMap(page => [
      page.title,
      page.summary,
      page.minimalExample?.code,
      page.minimalExample?.output,
      ...(page.minimalExample?.lineNotes || []),
      ...(page.commonMistakes || []).map(mistakeSearchText),
      ...(page.miniChecks || []).flatMap(check => [check.prompt, check.answer]),
    ]),
  ].filter(Boolean).join(' ');
}

function normalizeCodeForCompare(value) {
  return String(value || '')
    .split('\n')
    .map(line => line.replace(/#.*$/, '').replace(/\/\/.*$/, '').trim())
    .filter(Boolean)
    .join('\n');
}

function isDistinctCodeBlock(left, right) {
  const a = normalizeCodeForCompare(left);
  const b = normalizeCodeForCompare(right);
  return Boolean(a && b && a !== b);
}

function ConceptCore({ conceptId, language, progress, scores, size = 'sm' }) {
  if (!conceptId) return null;
  const status = getConceptCoreStatus(progress || {}, conceptId, language);
  if (!status) return null;
  const bestScores = scores ? getConceptBestScores(scores, conceptId, language) : null;
  const dotSize = size === 'lg' ? 18 : 12;
  const gap = size === 'lg' ? 10 : 6;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap }}>
      {WORLD_ORDER.map(wid => {
        const meta = WORLD_META[wid];
        const cleared = status[wid];
        const hasContent = cleared !== null;
        const best = bestScores?.[wid] || 0;
        return (
          <div key={wid} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, opacity: hasContent ? 1 : 0.25 }}>
            <div style={{
              width: dotSize,
              height: dotSize,
              borderRadius: '50%',
              background: hasContent && cleared ? meta.color : 'transparent',
              border: `2px solid ${hasContent ? meta.color + (cleared ? '' : '88') : '#333'}`,
              boxShadow: hasContent && cleared ? `0 0 6px ${meta.color}88` : 'none',
            }} />
            {size === 'lg' && best > 0 && <div style={styles.coreScore}>{best}</div>}
          </div>
        );
      })}
    </div>
  );
}

function buildPracticeIndex() {
  const records = [];
  for (const [worldId, source] of Object.entries(CHALLENGE_SOURCES)) {
    for (const [countryId, langMap] of Object.entries(source || {})) {
      for (const [languageId, questions] of Object.entries(langMap || {})) {
        for (const question of questions || []) {
          records.push({ worldId, countryId, languageId, question, source: 'regular' });
        }
      }
    }
  }
  for (const mission of listFinalMissions()) {
    for (const question of mission.questions || []) {
      records.push({
        worldId: mission.worldId,
        countryId: mission.countryId,
        languageId: mission.languageId,
        question,
        source: 'final',
      });
    }
  }
  return records;
}

const PRACTICE_INDEX = buildPracticeIndex();
const ALL_REFERENCE_TOPICS = [...REFERENCE_TOPICS, ...SQL_REFERENCE_TOPICS];

function practiceRecommendations(topic, progress, review) {
  const primaryConceptId = topicConcept(topic);
  if (!primaryConceptId) return [];
  const candidates = PRACTICE_INDEX
    .filter(record => record.languageId === topic.language)
    .filter(record => record.question?.conceptId === primaryConceptId || record.question?.programmingConceptIds?.[0] === primaryConceptId)
    .map(record => {
      const key = buildProgressKey(record.worldId, record.countryId, record.languageId);
      const reviewDue = Boolean(review?.[record.question.id]?.reviewDue);
      const cleared = Boolean(progress?.[key]);
      const worldRank = record.worldId === 'decode' ? 0 : record.worldId === 'execute' ? 1 : 2;
      const score = (reviewDue ? 100 : 0) + (!cleared ? 20 : 0) - worldRank;
      return { ...record, score, cleared, reviewDue };
    })
    .sort((a, b) => b.score - a.score || a.worldId.localeCompare(b.worldId) || a.question.id.localeCompare(b.question.id));
  const seenWorlds = new Set();
  const unique = [];
  for (const item of candidates) {
    if (seenWorlds.has(item.worldId)) continue;
    seenWorlds.add(item.worldId);
    unique.push(item);
    if (unique.length >= 3) break;
  }
  return unique;
}

export default function ReferenceScreen({
  onBack,
  progress,
  scores,
  review = {},
  onNavigate,
  originContext = null,
  onReturnToOrigin,
}) {
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState('');
  const [languageFilter, setLanguageFilter] = useState('all');
  const [worldFilter, setWorldFilter] = useState('all');
  const [progressFilter, setProgressFilter] = useState('all');
  const [reviewFilter, setReviewFilter] = useState('all');
  const [layerFilter, setLayerFilter] = useState('all');

  const selected = selectedId
    ? ALL_REFERENCE_TOPICS.find(topic => topic.id === resolveReferenceTopicId(selectedId) || topic.id === selectedId)
    : null;

  const languages = useMemo(() => {
    const available = new Set(ALL_REFERENCE_TOPICS.map(topic => topic.language));
    const ordered = REFERENCE_LANGUAGE_ORDER.filter(language => available.has(language));
    const rest = [...available].filter(language => !REFERENCE_LANGUAGE_ORDER.includes(language)).sort();
    return ['all', ...ordered, ...rest];
  }, []);

  const filteredTopics = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_REFERENCE_TOPICS.filter(topic => {
      const conceptId = topicConcept(topic);
      if (languageFilter !== 'all' && topic.language !== languageFilter) return false;
      if (q && !normalizeText(searchableTopic(topic)).includes(q)) return false;
      const status = conceptId ? getConceptCoreStatus(progress || {}, conceptId, topic.language) : null;
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
        const needsReview = Object.values(review || {}).some(item => item?.reviewDue && (item?.mistakeTags || []).some(tag => tag === conceptId || tag === topic.id));
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
    setLanguageFilter('all');
    setWorldFilter('all');
    setProgressFilter('all');
    setReviewFilter('all');
    setLayerFilter('all');
  };

  if (selected) {
    return (
      <TopicDetail
        topic={selected}
        progress={progress}
        scores={scores}
        review={review}
        onNavigate={onNavigate}
        onBack={() => setSelectedId(null)}
        originContext={originContext}
        onReturnToOrigin={onReturnToOrigin}
      />
    );
  }

  return (
    <div style={styles.wrap} className="fade-in">
      {originContext && onReturnToOrigin && <ReturnButton onClick={onReturnToOrigin} />}
      <div style={styles.header}>
        <BackButton onClick={onBack} />
        <div style={styles.headerText}>
          <div style={styles.title}>REFERENCE</div>
          <div style={styles.sub}>基礎から順に、コードと出力を分けて読む</div>
        </div>
      </div>

      <div style={styles.filters}>
        <input style={styles.search} value={query} onChange={e => setQuery(e.target.value)} placeholder="Search reference" aria-label="Search reference" />
        <select style={styles.select} value={languageFilter} onChange={e => setLanguageFilter(e.target.value)} aria-label="Language filter">
          {languages.map(lang => <option key={lang} value={lang}>{lang === 'all' ? 'All languages' : REFERENCE_LANGUAGE_LABELS[lang] || lang}</option>)}
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
        {filteredTopics.length === 0 && <div style={styles.empty}>条件に合う Reference がありません。</div>}
        {filteredTopics.map(topic => {
          const conceptId = topicConcept(topic);
          return (
            <button key={topic.id} style={styles.card} onClick={() => setSelectedId(topic.id)}>
              <div style={styles.cardBody}>
                <div style={styles.cardMeta}>{topic.language.toUpperCase()} / {topic.level}</div>
                <div style={styles.cardTitle}>{topic.title}</div>
                <div style={styles.cardSummary}>{topic.summary}</div>
              </div>
              <div style={styles.cardRight}>
                <ConceptCore conceptId={conceptId} language={topic.language} progress={progress} scores={scores} size="sm" />
                <span style={styles.arrow}>▶</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TopicDetail({ topic, progress, scores, review, onNavigate, onBack, originContext, onReturnToOrigin }) {
  const [pageIdx, setPageIdx] = useState(0);
  const [practiceIdx, setPracticeIdx] = useState(0);
  const contentRef = useRef(null);
  const shouldScrollPageChangeRef = useRef(false);
  const page = topic.pages[pageIdx];
  const conceptId = topicConcept(topic);
  const status = conceptId ? getConceptCoreStatus(progress || {}, conceptId, topic.language) : null;
  const recs = practiceRecommendations(topic, progress, review);
  const practice = recs[practiceIdx % Math.max(recs.length, 1)];
  const isLast = pageIdx === topic.pages.length - 1;

  useEffect(() => {
    if (!shouldScrollPageChangeRef.current) return;
    shouldScrollPageChangeRef.current = false;
    requestAnimationFrame(() => {
      contentRef.current?.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }, [pageIdx]);

  const goToPreviousPage = () => {
    shouldScrollPageChangeRef.current = true;
    setPageIdx(i => Math.max(0, i - 1));
  };

  const goToNextPage = () => {
    shouldScrollPageChangeRef.current = true;
    setPageIdx(i => Math.min(topic.pages.length - 1, i + 1));
  };

  return (
    <div style={styles.wrap} className="fade-in">
      {originContext && onReturnToOrigin && <ReturnButton onClick={onReturnToOrigin} />}
      <div style={styles.header}>
        <BackButton onClick={onBack} />
        <div style={styles.headerText}>
          <div style={styles.title}>{topic.title}</div>
          <div style={styles.sub}>{topic.language.toUpperCase()} / {pageIdx + 1} / {topic.pages.length}</div>
        </div>
      </div>

      {status && (
        <div style={styles.coreBar}>
          <span style={styles.coreLabel}>CONCEPT CORE</span>
          <ConceptCore conceptId={conceptId} language={topic.language} progress={progress} scores={scores} size="lg" />
          <div style={styles.worldButtons}>
            {WORLD_ORDER.map(wid => {
              const meta = WORLD_META[wid];
              const cleared = status[wid];
              if (cleared === null) return null;
              return (
                <button key={wid} style={{ ...styles.worldBtn, borderColor: `${meta.color}88`, color: cleared ? meta.color : `${meta.color}66` }} onClick={() => onNavigate?.(wid)}>
                  {cleared ? '✓' : '□'} {meta.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div style={styles.progressWrap}>
        {topic.pages.map((item, i) => (
          <button key={item.id} style={{ ...styles.progressDot, background: i <= pageIdx ? 'var(--accent)' : 'var(--bg2)' }} onClick={() => setPageIdx(i)} aria-label={`${item.title}へ移動`} />
        ))}
      </div>

      <div ref={contentRef} style={styles.content}>
        <section style={styles.panel}>
          <div style={styles.sectionHeading}>{page.title}</div>
          <p style={styles.sectionText}>{page.summary}</p>
          {page.details && page.details !== page.summary && (
            <p style={styles.sectionText}>{page.details}</p>
          )}
        </section>

        <section style={styles.panel}>
          <div style={styles.sectionHeading}>最小コード</div>
          <CodeBlock label={`${topic.title} example`}>{page.minimalExample?.code}</CodeBlock>
          {page.minimalExample?.output && (
            <>
              <div style={styles.smallHeading}>出力</div>
              <CodeBlock label={`${topic.title} output`}>{page.minimalExample.output}</CodeBlock>
            </>
          )}
          <div style={styles.noteList}>
            {(page.minimalExample?.lineNotes || []).map(note => <div key={note} style={styles.noteItem}>{note}</div>)}
          </div>
        </section>

        {page.minimalExample?.stateTrace?.length > 0 && (
          <section style={styles.panel}>
            <div style={styles.sectionHeading}>値の変化</div>
            <div style={styles.noteList}>{page.minimalExample.stateTrace.map(step => <div key={step} style={styles.noteItem}>{step}</div>)}</div>
          </section>
        )}

        {isDistinctCodeBlock(page.correctedExample, page.minimalExample?.code) && (
          <section style={styles.panel}>
            <div style={styles.sectionHeading}>修正版の例</div>
            <CodeBlock label={`${topic.title} corrected example`}>{page.correctedExample}</CodeBlock>
          </section>
        )}

        <section style={styles.panel}>
          <div style={styles.sectionHeading}>間違えやすいポイント</div>
          <div style={styles.noteList}>{(page.commonMistakes || []).map((item, index) => <MistakeItem key={typeof item === 'string' ? item : `${item.wrong}-${index}`} item={item} />)}</div>
        </section>

        <section style={styles.panel}>
          <div style={styles.sectionHeading}>ミニチェック</div>
          <div style={styles.noteList}>
            {(page.miniChecks || []).map(check => (
              <details key={check.id} style={styles.check}>
                <summary>{check.prompt}</summary>
                <div style={styles.checkAnswer}>{check.answer}</div>
              </details>
            ))}
          </div>
        </section>

        {isLast && (
          <section style={styles.panel}>
            <div style={styles.sectionHeading}>練習</div>
            {practice ? (
              <div style={styles.practiceBox}>
                <div style={styles.practiceTitle}>{WORLD_META[practice.worldId]?.label} / {practice.countryId} / {practice.languageId}</div>
                <div style={styles.practiceQuestion}>{practice.question.title || practice.question.id}</div>
                <div style={styles.practiceBtns}>
                  <button style={styles.navBtn} onClick={() => setPracticeIdx(i => i + 1)}>別の問題</button>
                  <button style={styles.navBtn} onClick={() => setPracticeIdx(i => i)}>1問だけ練習</button>
                  <button style={styles.navBtnPrimary} onClick={() => onNavigate?.(practice.worldId)}>ステージへ</button>
                </div>
                <div style={styles.practiceNote}>練習表示は Reference 内だけの確認で、ハート・進捗・報酬は変更しません。</div>
              </div>
            ) : (
              <div style={styles.empty}>この概念に完全一致する練習問題はまだありません。</div>
            )}
          </section>
        )}

        <div style={styles.navRow}>
          <button style={{ ...styles.navBtn, opacity: pageIdx === 0 ? 0.3 : 1 }} onClick={goToPreviousPage} disabled={pageIdx === 0}>◀ PREV</button>
          {!isLast ? (
            <button style={styles.navBtnPrimary} onClick={goToNextPage}>NEXT ▶</button>
          ) : (
            <button style={styles.navBtnPrimary} onClick={onBack}>完了</button>
          )}
        </div>
      </div>
    </div>
  );
}

function ReturnButton({ onClick }) {
  return <button style={styles.returnBtn} onClick={onClick}>← 問題へ戻る</button>;
}

function MistakeItem({ item }) {
  if (!item || typeof item !== 'object') {
    return <div style={styles.noteItem}>{item}</div>;
  }
  return (
    <div style={styles.mistakePair}>
      <div style={styles.mistakeCode}><span style={styles.mistakeLabel}>NG</span><code>{item.wrong}</code></div>
      <div style={styles.mistakeReason}>{item.reason}</div>
      <div style={styles.mistakeCode}><span style={styles.mistakeLabel}>OK</span><code>{item.correct}</code></div>
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
    minWidth: 0,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    padding: '14px 20px',
    borderBottom: '2px solid var(--border)',
    flexShrink: 0,
  },
  returnBtn: {
    position: 'fixed',
    right: 14,
    bottom: 'calc(env(safe-area-inset-bottom, 0px) + 14px)',
    zIndex: 30,
    fontFamily: 'var(--pixel-font)',
    fontSize: 9,
    padding: '10px 12px',
    color: 'var(--accent)',
    background: 'rgba(0, 12, 24, 0.94)',
    border: '2px solid var(--accent)',
    cursor: 'pointer',
  },
  headerText: { display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 },
  title: { fontSize: 'clamp(12px, 3.5vw, 15px)', color: 'var(--accent)' },
  sub: { fontSize: 10, color: 'var(--text-dim)', lineHeight: 1.6 },
  filters: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: 8,
    padding: '12px 20px',
    borderBottom: '1px solid var(--border2)',
    flexShrink: 0,
  },
  search: { fontFamily: 'var(--pixel-font)', fontSize: 10, background: 'var(--panel)', color: 'var(--text)', border: '1px solid var(--border2)', padding: 10, minWidth: 0 },
  select: { fontFamily: 'var(--pixel-font)', fontSize: 9, background: 'var(--panel)', color: 'var(--text)', border: '1px solid var(--border2)', padding: 8, minWidth: 0 },
  clearBtn: { fontFamily: 'var(--pixel-font)', fontSize: 9, background: 'transparent', color: 'var(--accent2)', border: '1px solid var(--accent2)', padding: '8px 10px', cursor: 'pointer' },
  grid: { display: 'flex', flexDirection: 'column', gap: 10, padding: 20, maxWidth: 760, margin: '0 auto', width: '100%', flex: 1, minHeight: 0, overflowY: 'auto', overflowX: 'hidden' },
  empty: { fontSize: 10, color: 'var(--text-dim)', padding: 12, lineHeight: 2 },
  card: { fontFamily: 'var(--pixel-font)', display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', background: 'var(--panel)', border: '2px solid var(--border2)', cursor: 'pointer', textAlign: 'left', width: '100%', minWidth: 0 },
  cardBody: { flex: 1, display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 },
  cardMeta: { fontSize: 8, color: 'var(--text-dim)' },
  cardTitle: { fontSize: 12, color: 'var(--accent)' },
  cardSummary: { fontSize: 9, color: 'var(--text-dim)', lineHeight: 1.8 },
  cardRight: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, flexShrink: 0 },
  arrow: { fontSize: 8, color: 'var(--accent)' },
  coreBar: { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 20px', background: 'var(--panel)', borderBottom: '1px solid var(--border2)', flexWrap: 'wrap', flexShrink: 0 },
  coreLabel: { fontFamily: 'var(--pixel-font)', fontSize: 8, color: 'var(--text-dim)', letterSpacing: 1 },
  coreScore: { fontSize: 8, color: 'var(--accent)', fontFamily: 'var(--pixel-font)' },
  worldButtons: { display: 'flex', gap: 6, flexWrap: 'wrap' },
  worldBtn: { fontFamily: 'var(--pixel-font)', fontSize: 8, padding: '4px 8px', background: 'transparent', border: '1px solid', cursor: 'pointer' },
  progressWrap: { display: 'flex', gap: 8, padding: '12px 20px', alignItems: 'center', flexShrink: 0 },
  progressDot: { width: 12, height: 12, border: '2px solid #333', cursor: 'pointer' },
  content: { flex: 1, minHeight: 0, padding: '16px 20px 84px', maxWidth: 760, margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: 12, overflowY: 'auto', overflowX: 'hidden' },
  panel: { background: 'var(--panel)', border: '1px solid var(--border2)', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0 },
  sectionHeading: { fontSize: 'clamp(12px, 3.4vw, 15px)', color: 'var(--accent2)' },
  smallHeading: { fontFamily: 'var(--pixel-font)', fontSize: 8, color: 'var(--text-dim)', marginTop: 4 },
  sectionText: { fontSize: 'clamp(11px, 3vw, 13px)', color: 'var(--text)', lineHeight: 2, margin: 0 },
  noteList: { display: 'flex', flexDirection: 'column', gap: 7 },
  noteItem: { fontSize: 10, color: 'var(--text)', lineHeight: 2, wordBreak: 'break-word' },
  mistakePair: { display: 'grid', gap: 6, padding: 10, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(0,0,0,0.16)', minWidth: 0 },
  mistakeCode: { display: 'flex', alignItems: 'center', gap: 8, fontSize: 10, color: 'var(--text)', minWidth: 0, overflowX: 'auto' },
  mistakeLabel: { fontFamily: 'var(--pixel-font)', fontSize: 8, color: 'var(--accent2)', flexShrink: 0 },
  mistakeReason: { fontSize: 10, color: 'var(--text-dim)', lineHeight: 1.8 },
  check: { fontSize: 10, color: 'var(--text)', lineHeight: 2 },
  checkAnswer: { padding: '6px 0 0 12px', color: 'var(--accent)' },
  practiceBox: { display: 'flex', flexDirection: 'column', gap: 8 },
  practiceTitle: { fontSize: 9, color: 'var(--accent2)' },
  practiceQuestion: { fontSize: 11, color: 'var(--text)', lineHeight: 1.8 },
  practiceBtns: { display: 'flex', flexWrap: 'wrap', gap: 8 },
  practiceNote: { fontSize: 9, color: 'var(--text-dim)', lineHeight: 1.8 },
  navRow: { display: 'flex', gap: 12, flexShrink: 0 },
  navBtn: { fontFamily: 'var(--pixel-font)', fontSize: 9, background: 'transparent', color: 'var(--text-dim)', border: '2px solid var(--text-dim)', padding: '10px 14px', cursor: 'pointer', minHeight: 44 },
  navBtnPrimary: { fontFamily: 'var(--pixel-font)', fontSize: 9, background: 'transparent', color: 'var(--accent)', border: '2px solid var(--accent)', padding: '10px 14px', cursor: 'pointer', minHeight: 44 },
};
