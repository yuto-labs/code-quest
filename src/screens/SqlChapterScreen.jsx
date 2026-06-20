import { SQL_COURSE } from '../data/sql/course';
import { getSqlQuestionsForChapter } from '../data/sql/questions';
import { getSqlQuestionState, isSqlQuestionUnlocked } from '../utils/sqlProgress';
import BackButton from '../components/BackButton';

const MODE_LABELS = { decode: 'DECODE', execute: 'EXECUTE', debug: 'DEBUG', mission: 'MISSION' };

export default function SqlChapterScreen({ chapterId, meta, onBack, onOpenQuestion }) {
  const chapter = SQL_COURSE.chapters.find(item => item.id === chapterId);
  const sql = meta?.codePaths?.sql;
  const state = getSqlQuestionState(sql, chapterId);
  const questions = getSqlQuestionsForChapter(chapterId);
  const byMode = ['decode', 'execute', 'debug', 'mission'].map(mode => [mode, questions.filter(q => q.mode === mode)]);
  return (
    <div style={styles.wrap} className="fade-in">
      <div style={styles.header}>
        <BackButton onClick={onBack} />
        <div>
          <div style={styles.title}>{chapter?.title || chapterId}</div>
          <div style={styles.sub}>{chapter?.subtitle}</div>
        </div>
      </div>
      <div style={styles.sections}>
        {byMode.map(([mode, items]) => (
          <section key={mode} style={styles.section}>
            <div style={styles.mode}>{MODE_LABELS[mode]}</div>
            <div style={styles.list}>
              {items.map(question => {
                const unlocked = isSqlQuestionUnlocked(sql, question);
                const cleared = mode === 'mission' ? state.chapter.missionCompleted : state.completed.has(question.id);
                const current = state.currentId === question.id;
                return (
                  <button
                    key={question.id}
                    style={{ ...styles.item, opacity: unlocked ? 1 : 0.45, borderColor: cleared ? 'var(--accent2)' : current ? 'var(--accent)' : 'rgba(0,255,136,0.25)' }}
                    disabled={!unlocked}
                    onClick={() => onOpenQuestion(question.id)}
                  >
                    <span style={styles.itemId}>{question.id}</span>
                    <span style={styles.itemTitle}>{question.title}</span>
                    <span style={styles.itemStatus}>{cleared ? 'CLEARED' : unlocked ? current ? 'CURRENT' : 'REPLAY' : 'LOCKED'}</span>
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrap: { height: '100dvh', overflowY: 'auto', background: 'var(--bg)', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 20 },
  header: { maxWidth: 1040, width: '100%', margin: '0 auto', display: 'flex', gap: 16, alignItems: 'flex-start' },
  title: { color: 'var(--accent)', fontSize: 'clamp(20px, 6vw, 36px)' },
  sub: { color: 'var(--text-dim)', fontSize: 11, lineHeight: 1.8, marginTop: 8 },
  sections: { maxWidth: 1040, width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 14 },
  section: { background: 'var(--panel)', border: '2px solid var(--border2)', padding: 14, display: 'flex', flexDirection: 'column', gap: 12, minWidth: 0 },
  mode: { color: 'var(--accent2)', fontSize: 11 },
  list: { display: 'flex', flexDirection: 'column', gap: 10 },
  item: { fontFamily: 'var(--pixel-font)', display: 'flex', flexDirection: 'column', gap: 7, textAlign: 'left', background: 'rgba(0,5,25,0.55)', border: '2px solid', color: 'var(--text)', padding: 12, cursor: 'pointer', minHeight: 92 },
  itemId: { color: 'var(--text-dim)', fontSize: 8 },
  itemTitle: { color: 'var(--text)', fontSize: 10, lineHeight: 1.7 },
  itemStatus: { color: 'var(--accent)', fontSize: 8, marginTop: 'auto' },
};
