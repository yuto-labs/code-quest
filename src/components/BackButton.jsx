const BACK_BUTTON_LABEL = '[ < BACK ]';

const backButtonStyle = {
  fontFamily: 'var(--pixel-font)',
  fontSize: 8,
  background: 'transparent',
  color: '#00ffcc',
  border: 'none',
  padding: '8px 4px',
  cursor: 'pointer',
  letterSpacing: 1,
  textShadow: '0 0 5px #00ffcc, 0 0 12px #00ffaa, 0 0 25px #00ff88',
};

export default function BackButton({ onClick, children = BACK_BUTTON_LABEL, ...props }) {
  return (
    <button type="button" className="back-button" style={backButtonStyle} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
