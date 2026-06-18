export default function RewardToast({ reward }) {
  if (!reward) return null;
  return (
    <div className="reward-toast" role="status" aria-live="polite">
      <div className="reward-toast__type">{reward.type}</div>
      <div className="reward-toast__text">{reward.message}</div>
    </div>
  );
}
