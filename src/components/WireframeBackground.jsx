const FILE_MAP = {
  JP: 'JP', US: 'US', FR: 'FR', BR: 'BR', AU: 'AU',
  EG: 'EG', IN: 'IN', RU: 'RU', CN: 'CH', DE: 'DE',
  GB: 'UK', KR: 'KR', CA: 'CA', IT: 'IT', MX: 'MX',
  SA: 'SA', AR: 'AR', TR: 'TR', ID: 'ID', ZA: 'ZA',
};

export default function WireframeBackground({ countryId }) {
  const file = FILE_MAP[countryId];

  return (
    <div style={styles.wrap}>
      {file ? (
        <img
          src={`/G20/${file}.png`}
          alt=""
          fetchpriority="high"
          decoding="sync"
          style={styles.img}
        />
      ) : (
        <div style={styles.fallback} />
      )}
      <div style={styles.overlay} />
    </div>
  );
}

const styles = {
  wrap: {
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
    animation: 'bgFadeIn 0.25s ease forwards',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
  },
  fallback: {
    width: '100%',
    height: '100%',
    background: '#000820',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0, 5, 20, 0.62)',
  },
};
