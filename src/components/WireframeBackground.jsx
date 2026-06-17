import { LANDMARKS } from '../data/wireframes';

export default function WireframeBackground({ countryId }) {
  const data = LANDMARKS[countryId] || LANDMARKS.JP;

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      background: '#000010',
    }}>
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%' }}
        dangerouslySetInnerHTML={{ __html: `
          <defs>
            <filter id="lm-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <radialGradient id="lm-vignette" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stop-color="transparent"/>
              <stop offset="100%" stop-color="#000010" stop-opacity="0.55"/>
            </radialGradient>
          </defs>
          <g filter="url(#lm-glow)" opacity="0.88">
            ${data.elements}
          </g>
          <rect x="0" y="0" width="800" height="500" fill="url(#lm-vignette)"/>
        ` }}
      />
    </div>
  );
}
