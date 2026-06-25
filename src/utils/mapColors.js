// Centralized continent → color mapping
// All geography styling goes through these helpers.

export const CONTINENT_NEON = {
  na: '#ff3344', // North America: red
  sa: '#00dd66', // South America: green
  eu: '#44aaff', // Europe: blue
  af: '#ffbb00', // Africa: amber/yellow — always yellow-family, never green
  as: '#cc44ff', // Asia: purple
  oc: '#ff7722', // Oceania: orange
};

// rgba channel values matching CONTINENT_NEON for fill computation
const CONTINENT_RGB = {
  na: [255, 51, 68],
  sa: [0, 221, 102],
  eu: [68, 170, 255],
  af: [255, 187, 0],
  as: [204, 68, 255],
  oc: [255, 119, 34],
};

const FALLBACK_COLOR = '#8aa0bd';
const FALLBACK_RGB   = [138, 160, 189];

// World Atlas numeric ID → continent code
// Source: world-atlas countries-110m.json feature properties
export const NUMERIC_CONTINENT = {
  // North America
  124: 'na', 840: 'na', 484: 'na', 188: 'na', 320: 'na', 222: 'na',
  340: 'na', 388: 'na', 630: 'na', 558: 'na', 591: 'na', 192: 'na',
  332: 'na', 214: 'na', 780: 'na',  28: 'na',  44: 'na',  52: 'na',
   84: 'na', 659: 'na', 308: 'na', 670: 'na', 662: 'na', 500: 'na',
  474: 'na', 212: 'na', 850: 'na', 796: 'na',  60: 'na', 535: 'na',
  // South America
   76: 'sa',  32: 'sa', 152: 'sa', 170: 'sa', 218: 'sa', 600: 'sa',
  858: 'sa', 328: 'sa', 740: 'sa',  68: 'sa', 254: 'sa', 531: 'sa', 226: 'sa',
  // Europe
  276: 'eu', 250: 'eu', 826: 'eu', 380: 'eu', 724: 'eu', 620: 'eu',
  528: 'eu',  56: 'eu', 756: 'eu',  40: 'eu', 203: 'eu', 703: 'eu',
  348: 'eu', 642: 'eu', 100: 'eu', 688: 'eu', 807: 'eu', 499: 'eu',
  191: 'eu', 705: 'eu', 372: 'eu', 233: 'eu', 428: 'eu', 440: 'eu',
  616: 'eu', 752: 'eu', 578: 'eu', 246: 'eu', 208: 'eu', 352: 'eu',
  442: 'eu', 470: 'eu', 492: 'eu', 674: 'eu', 336: 'eu',   8: 'eu',
   20: 'eu',  70: 'eu', 438: 'eu', 248: 'eu', 304: 'eu',
  // Africa — must always be yellow-family (#ffbb00)
  818: 'af', 710: 'af', 404: 'af', 566: 'af',  12: 'af', 288: 'af',
  504: 'af', 231: 'af', 834: 'af', 716: 'af', 800: 'af', 646: 'af',
  686: 'af', 706: 'af', 516: 'af', 466: 'af', 430: 'af', 324: 'af',
  204: 'af', 120: 'af', 140: 'af', 562: 'af', 694: 'af', 270: 'af',
  624: 'af',  72: 'af', 174: 'af', 454: 'af', 508: 'af', 748: 'af',
  266: 'af', 729: 'af', 178: 'af', 180: 'af', 384: 'af', 768: 'af',
  894: 'af', 108: 'af', 638: 'af', 450: 'af', 426: 'af', 262: 'af',
  232: 'af',
  // Asia
  356: 'as', 643: 'as', 156: 'as', 392: 'as', 410: 'as', 682: 'as',
  792: 'as', 360: 'as', 704: 'as', 764: 'as', 116: 'as', 496: 'as',
  398: 'as', 762: 'as', 795: 'as', 860: 'as',  50: 'as', 144: 'as',
  586: 'as', 408: 'as', 458: 'as', 418: 'as', 104: 'as', 524: 'as',
   64: 'as', 400: 'as', 414: 'as', 422: 'as', 760: 'as', 368: 'as',
  364: 'as', 887: 'as', 512: 'as', 376: 'as', 275: 'as',  51: 'as',
   31: 'as', 268: 'as', 417: 'as', 626: 'as', 196: 'as',
  // Oceania
   36: 'oc', 554: 'oc', 598: 'oc', 242: 'oc', 520: 'oc', 584: 'oc',
  585: 'oc',  90: 'oc', 548: 'oc', 776: 'oc', 882: 'oc', 316: 'oc',
  580: 'oc', 258: 'oc', 772: 'oc',
};

// Game country ISO 2-letter → continent
// Unresolved/conflicting mappings: none (all 20 game countries mapped)
// TR (Turkey) geographic continent = as per conventional Asia assignment
// RU (Russia) = as (Eurasian; game location in Asian area)
const GAME_COUNTRY_CONTINENT = {
  JP: 'as', US: 'na', FR: 'eu', BR: 'sa', AU: 'oc',
  EG: 'af', IN: 'as', RU: 'as', CN: 'as', DE: 'eu',
  GB: 'eu', KR: 'as', CA: 'na', IT: 'eu', MX: 'na',
  SA: 'as', AR: 'sa', TR: 'as', ID: 'as', ZA: 'af',
};

// Returns continent code for a World Atlas numeric ID, or null for unknown
export function getContinent(numericId) {
  return NUMERIC_CONTINENT[numericId] || null;
}

// Returns neon hex color for a World Atlas numeric ID
export function getGeoNeonColor(numericId) {
  const c = NUMERIC_CONTINENT[numericId];
  return (c && CONTINENT_NEON[c]) || FALLBACK_COLOR;
}

// Returns `rgba(r,g,b,opacity)` string for a numeric ID
export function getGeoFillRgba(numericId, opacity) {
  const c = NUMERIC_CONTINENT[numericId];
  const [r, g, b] = (c && CONTINENT_RGB[c]) || FALLBACK_RGB;
  return `rgba(${r},${g},${b},${opacity})`;
}

// Returns continent code for a game country ISO 2-letter ID
export function getContinentForCountry(countryId) {
  return GAME_COUNTRY_CONTINENT[countryId] || null;
}

// Returns neon hex color for a game country ISO 2-letter ID
export function getColorForCountry(countryId) {
  const c = GAME_COUNTRY_CONTINENT[countryId];
  return (c && CONTINENT_NEON[c]) || FALLBACK_COLOR;
}
