import { C_COURSE } from '../data/c/course';
import { getCChapterStatus, getCCourseCounts, getCQuestionState } from '../utils/cProgress';
import { SqlChapterProgress } from '../components/SqlComponents';
import BackButton from '../components/BackButton';

export default function CPathScreen({ meta, onBack, onOpenChapter, onContinue, unlockNotice }) {
  const c = meta?.codePaths?.c;
  const counts = getCCourseCounts(c);
  const hasResume = Boolean(c?.resume?.questionId);
  return (
    <div style={styles.wrap} className="fade-in">
      <div style={styles.header}>
        <BackButton onClick={onBack} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={styles.title}>C PATH</div>
          <div style={styles.sub}>世界のテーマで、構文、メモリ、ポインタの扱いを学ぶ</div>
          <SqlChapterProgress completed={counts.completed} total={counts.total} />
        </div>
      </div>
      {hasResume && (
        <button style={styles.continueBtn} onClick={onContinue}>
          <span style={styles.continueTitle}>CONTINUE</span>
          <span style={styles.continueSub}>{c.resume.chapterId} / {c.resume.questionId}</span>
        </button>
      )}
      <div style={styles.chapterGrid}>
        {C_COURSE.chapters.map(chapter => {
          const status = getCChapterStatus(c, chapter.id);
          const state = getCQuestionState(c, chapter.id);
          const completed = state.chapter.completedQuestionIds.length + (state.chapter.missionCompleted ? 1 : 0);
          const justUnlocked = unlockNotice?.unlockedChapterId === chapter.id;
          return (
            <button
              key={chapter.id}
              className={justUnlocked ? 'sql-new-unlock' : undefined}
              style={{ ...styles.chapter, opacity: status === 'LOCKED' ? 0.45 : 1, borderColor: status === 'CLEARED' ? 'var(--accent2)' : '#ffa657' }}
              disabled={status === 'LOCKED'}
              onClick={() => onOpenChapter(chapter.id)}
            >
              <div style={styles.chapterNo}>{String(chapter.order).padStart(2, '0')}</div>
              <div style={styles.chapterTitle}>{chapter.title}</div>
              <div style={styles.chapterSub}>{chapter.subtitle}</div>
              <SqlChapterProgress completed={completed} total={10} />
              <div style={styles.status}>{status}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  wrap: { height: '100dvh', overflowY: 'auto', background: 'var(--bg)', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 18 },
  header: { width: '100%', maxWidth: 1040, margin: '0 auto', display: 'flex', gap: 16, alignItems: 'flex-start' },
  title: { color: '#ffa657', fontSize: 'clamp(24px, 7vw, 44px)' },
  sub: { color: 'var(--text-dim)', fontSize: 12, lineHeight: 1.8, marginBottom: 12 },
  continueBtn: { width: '100%', maxWidth: 1040, margin: '0 auto', fontFamily: 'var(--pixel-font)', background: 'rgba(255,166,87,0.12)', border: '2px solid #ffa657', color: '#ffa657', padding: 14, textAlign: 'left', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 6 },
  continueTitle: { fontSize: 11 },
  continueSub: { fontSize: 9, color: 'var(--text)' },
  chapterGrid: { width: '100%', maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 },
  chapter: { fontFamily: 'var(--pixel-font)', background: 'var(--panel)', border: '2px solid #ffa657', color: 'var(--text)', padding: 16, minHeight: 190, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 10, cursor: 'pointer' },
  chapterNo: { color: 'var(--accent2)', fontSize: 10 },
  chapterTitle: { color: '#ffa657', fontSize: 12, lineHeight: 1.6 },
  chapterSub: { color: 'var(--text-dim)', fontSize: 10, lineHeight: 1.8 },
  status: { marginTop: 'auto', color: 'var(--accent2)', fontSize: 8 },
};
