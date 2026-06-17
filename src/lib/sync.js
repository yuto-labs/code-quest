import { supabase } from './supabase';

export async function loadCloudProgress(userId) {
  const { data, error } = await supabase
    .from('user_progress')
    .select('progress, quiz_progress, scores')
    .eq('user_id', userId)
    .single();

  if (error || !data) return null;
  return data;
}

export async function saveCloudProgress(userId, progress, quizProgress, scores) {
  await supabase.from('user_progress').upsert({
    user_id: userId,
    progress,
    quiz_progress: quizProgress,
    scores,
    updated_at: new Date().toISOString(),
  });
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
  };
}
