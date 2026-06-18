import { supabase } from './supabase';
import { mergeMeta, packProgress, unpackProgress } from '../utils/metadata';

export async function loadCloudProgress(userId) {
  // .limit(1) + order で重複行があっても最新を取得（.single()は複数行でエラーになる）
  const { data, error } = await supabase
    .from('user_progress')
    .select('progress, quiz_progress, scores')
    .eq('user_id', userId)
    .order('updated_at', { ascending: false })
    .limit(1);

  if (error) throw error;
  if (!data || data.length === 0) return null;
  const unpacked = unpackProgress(data[0].progress || {});
  return {
    ...data[0],
    progress: unpacked.progress,
    meta: unpacked.meta,
  };
}

export async function saveCloudProgress(userId, progress, quizProgress, scores, meta = {}) {
  const { error } = await supabase.from('user_progress').upsert({
    user_id: userId,
    progress: packProgress(progress, meta),
    quiz_progress: quizProgress,
    scores,
    updated_at: new Date().toISOString(),
  }, { onConflict: 'user_id' });
  if (error) throw error;
}

// ローカルとクラウドの進捗をマージ（より進んでいる方を優先）
export function mergeProgressData(local, cloud) {
  const mergedProgress = { ...cloud.progress };
  Object.keys(local.progress).forEach((k) => {
    if (local.progress[k]) mergedProgress[k] = true;
  });

  const mergedScores = { ...cloud.scores };
  Object.keys(local.scores).forEach((k) => {
    mergedScores[k] = Math.max(mergedScores[k] || 0, local.scores[k] || 0);
  });

  const mergedQuiz = { ...cloud.quiz_progress };
  Object.keys(local.quizProgress).forEach((k) => {
    mergedQuiz[k] = Math.max(mergedQuiz[k] || 0, local.quizProgress[k] || 0);
  });

  return {
    progress: mergedProgress,
    quizProgress: mergedQuiz,
    scores: mergedScores,
    meta: mergeMeta(local.meta, cloud.meta),
  };
}
