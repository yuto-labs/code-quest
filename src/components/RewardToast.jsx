// "chip" types are the lighter-weight, non-blocking notices (review cleared,
// per-question mastery progress) -- same toast shell, quieter accent color
// so they read as smaller than a full reward (stage cleared, medal, etc).
const CHIP_TYPES = new Set(['review-cleared', 'mastery-progress']);

export default function RewardToast({ reward }) {
  if (!reward) return null;
  const isChip = CHIP_TYPES.has(reward.type);
  return (
    <div className={`reward-toast${isChip ? ' reward-toast--chip' : ''}`} role="status" aria-live="polite">
      <div className="reward-toast__type">{reward.type}</div>
      <div className="reward-toast__text">{reward.message}</div>
    </div>
  );
}
