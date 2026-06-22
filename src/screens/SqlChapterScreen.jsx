import { SQL_COURSE } from '../data/sql/course';
import { getSqlQuestionsForChapter } from '../data/sql/questions';
import { getSqlQuestionState, isSqlQuestionUnlocked } from '../utils/sqlProgress';
import { SQL_MODE_LABELS } from '../utils/sqlDisplay';
import BackButton from '../components/BackButton';

export default function SqlChapterScreen({ chapterId, meta, onBack, onOpenQuestion, unlockNotice }) {
  const chapter = SQL_COURSE.chapters.find(item => item.id === chapterId);
  const sql = meta?.codePaths?.sql;
  const state = getSqlQuestionState(sql, chapterId);
  const questions = getSqlQuestionsForChapter(chapterId).sort((a, b) => a.order - b.order);
  const showComplete = unlockNotice?.completedChapterId === chapterId;
  return (
    <div style={styles.wrap} className="fade-in">
      <div style={styles.header}>
        <BackButton onClick={onBack} />
        <div>
          <div style={styles.title}>{chapter?.title || chapterId}</div>
          <div style={styles.sub}>{chapter?.subtitle}</div>
        </div>
      </div>
      {showComplete && (
        <div className="sql-chapter-complete" style={styles.completeBanner}>
          CHAPTER COMPLETE
        </div>
      )}
      <div style={styles.route}>
        {questions.map(question => {
          const unlocked = isSqlQuestionUnlocked(sql, question);
          const cleared = question.mode === 'mission' ? state.chapter.missionCompleted : state.completed.has(question.id);
          const current = state.currentId === question.id;
          const label = SQL_MODE_LABELS[question.mode] || question.mode.toUpperCase();
          return (
            <button
              key={question.id}
              className={`sql-route-card ${current ? 'sql-route-card-current' : ''} ${question.mode === 'mission' ? 'sql-route-card-mission' : ''}`}
              style={{ ...styles.item, opacity: unlocked ? 1 : 0.45, borderColor: cleared ? 'var(--accent2)' : current ? 'var(--accent)' : 'rgba(0,255,136,0.25)' }}
              disabled={!unlocked}
              onClick={() => onOpenQuestion(question.id)}
            >
              <span style={styles.itemStep}>{String(question.order).padStart(2, '0')}</span>
              <span style={styles.itemMode}>{label}</span>
              <span style={styles.itemTitle}>{question.title}</span>
              <span style={styles.itemStatus}>{cleared ? 'CLEARED' : unlocked ? current ? 'CURRENT' : 'REPLAY' : 'LOCKED'}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  wrap: { height: '100dvh', overflowY: 'auto', background: 'var(--bg)', padding: 'calc(env(safe-area-inset-top, 0px) + 24px) 20px 24px', display: 'flex', flexDirection: 'column', gap: 20 },
  header: { maxWidth: 1040, width: '100%', margin: '0 auto', display: 'flex', gap: 16, alignItems: 'flex-start' },
  title: { color: 'var(--accent)', fontSize: 'clamp(20px, 6vw, 36px)' },
  sub: { color: 'var(--text-dim)', fontSize: 11, lineHeight: 1.8, marginTop: 8 },
  completeBanner: { maxWidth: 1040, width: '100%', margin: '0 auto', border: '2px solid var(--accent2)', color: 'var(--accent2)', padding: 12, textAlign: 'center', fontSize: 11, background: 'rgba(255,221,0,0.07)' },
  route: { maxWidth: 1040, width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10 },
  item: { fontFamily: 'var(--pixel-font)', display: 'flex', flexDirection: 'column', gap: 7, textAlign: 'left', background: 'rgba(0,5,25,0.55)', border: '2px solid', color: 'var(--text)', padding: 12, cursor: 'pointer', minHeight: 122 },
  itemStep: { color: 'var(--accent2)', fontSize: 9 },
  itemMode: { color: 'var(--accent)', fontSize: 8 },
  itemTitle: { color: 'var(--text)', fontSize: 10, lineHeight: 1.7 },
  itemStatus: { color: 'var(--accent)', fontSize: 8, marginTop: 'auto' },
};
