const STORAGE_KEY = 'cq_feedback_settings';

const DEFAULT_SETTINGS = {
  soundEnabled: true,
  hapticsEnabled: true,
  soundVolume: 0.35,
};

let audioContext = null;
let cachedSettings = null;

function clampVolume(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return DEFAULT_SETTINGS.soundVolume;
  return Math.min(1, Math.max(0, num));
}

export function getFeedbackSettings() {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  if (cachedSettings) return cachedSettings;
  try {
    const raw = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}');
    cachedSettings = {
      soundEnabled: raw.soundEnabled ?? DEFAULT_SETTINGS.soundEnabled,
      hapticsEnabled: raw.hapticsEnabled ?? DEFAULT_SETTINGS.hapticsEnabled,
      soundVolume: clampVolume(raw.soundVolume ?? DEFAULT_SETTINGS.soundVolume),
    };
  } catch {
    cachedSettings = DEFAULT_SETTINGS;
  }
  return cachedSettings;
}

export function saveFeedbackSettings(patch) {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  const next = {
    ...getFeedbackSettings(),
    ...patch,
    soundVolume: clampVolume(patch.soundVolume ?? getFeedbackSettings().soundVolume),
  };
  cachedSettings = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new CustomEvent('cq-feedback-settings', { detail: next }));
  } catch {
    // Settings are nice-to-have; never break gameplay.
  }
  return next;
}

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return null;
  try {
    if (!audioContext) audioContext = new AudioCtor();
    if (audioContext.state === 'suspended') audioContext.resume?.();
    return audioContext;
  } catch {
    return null;
  }
}

const BITCRUSH_STEPS = 9;
let bitcrushCurve = null;

function getBitcrushCurve() {
  if (bitcrushCurve) return bitcrushCurve;
  const samples = 256;
  const curve = new Float32Array(samples);
  for (let i = 0; i < samples; i += 1) {
    const x = (i / (samples - 1)) * 2 - 1;
    curve[i] = Math.round(x * BITCRUSH_STEPS) / BITCRUSH_STEPS;
  }
  bitcrushCurve = curve;
  return curve;
}

function connectThroughBitcrush(ctx, node) {
  const shaper = ctx.createWaveShaper();
  shaper.curve = getBitcrushCurve();
  shaper.oversample = 'none';
  node.connect(shaper);
  shaper.connect(ctx.destination);
}

function tone(ctx, {
  start,
  duration,
  frequency,
  frequencyEnd = null,
  type = 'square',
  gain = 0.12,
  attack = 0.012,
  release = 0.035,
}) {
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(frequency, start);
  if (frequencyEnd) {
    osc.frequency.exponentialRampToValueAtTime(Math.max(1, frequencyEnd), start + duration);
  }
  amp.gain.setValueAtTime(0.0001, start);
  amp.gain.exponentialRampToValueAtTime(Math.max(0.0001, gain), start + attack);
  amp.gain.setValueAtTime(Math.max(0.0001, gain), Math.max(start + attack, start + duration - release));
  amp.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(amp);
  connectThroughBitcrush(ctx, amp);
  osc.start(start);
  osc.stop(start + duration + 0.02);
}

function noise(ctx, {
  start,
  duration,
  frequency = 1600,
  filterType = 'bandpass',
  gain = 0.035,
  attack = 0.004,
}) {
  const frames = Math.max(1, Math.floor(ctx.sampleRate * duration));
  const buffer = ctx.createBuffer(1, frames, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < frames; i += 1) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / frames);
  }
  const source = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();
  const amp = ctx.createGain();
  source.buffer = buffer;
  filter.type = filterType;
  filter.frequency.setValueAtTime(frequency, start);
  filter.Q.setValueAtTime(8, start);
  amp.gain.setValueAtTime(0.0001, start);
  amp.gain.exponentialRampToValueAtTime(Math.max(0.0001, gain), start + attack);
  amp.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  source.connect(filter);
  filter.connect(amp);
  connectThroughBitcrush(ctx, amp);
  source.start(start);
  source.stop(start + duration + 0.02);
}

const SOUND_PATTERNS = {
  tap: [
    [
      { offset: 0, duration: 0.055, frequency: 900, frequencyEnd: 1260, type: 'triangle', gain: 0.045, release: 0.018 },
      { kind: 'noise', offset: 0.004, duration: 0.035, frequency: 2400, gain: 0.018 },
    ],
    [
      { offset: 0, duration: 0.05, frequency: 760, frequencyEnd: 1080, type: 'triangle', gain: 0.045, release: 0.016 },
      { kind: 'noise', offset: 0.003, duration: 0.03, frequency: 2100, gain: 0.016 },
    ],
    [
      { offset: 0, duration: 0.06, frequency: 1040, frequencyEnd: 1380, type: 'sine', gain: 0.042, release: 0.02 },
      { kind: 'noise', offset: 0.005, duration: 0.038, frequency: 2700, gain: 0.02 },
    ],
  ],
  back: [
    [
      { offset: 0, duration: 0.11, frequency: 420, frequencyEnd: 260, type: 'triangle', gain: 0.052 },
      { offset: 0.08, duration: 0.13, frequency: 260, frequencyEnd: 170, type: 'sine', gain: 0.04 },
      { kind: 'noise', offset: 0.01, duration: 0.045, frequency: 900, gain: 0.014 },
    ],
    [
      { offset: 0, duration: 0.1, frequency: 380, frequencyEnd: 230, type: 'sawtooth', gain: 0.05 },
      { offset: 0.07, duration: 0.14, frequency: 230, frequencyEnd: 150, type: 'triangle', gain: 0.038 },
      { kind: 'noise', offset: 0.01, duration: 0.05, frequency: 800, gain: 0.013 },
    ],
  ],
  correct: [
    [
      { offset: 0, duration: 0.17, frequency: 523.25, type: 'triangle', gain: 0.075 },
      { offset: 0.09, duration: 0.19, frequency: 659.25, type: 'triangle', gain: 0.07 },
      { offset: 0.19, duration: 0.24, frequency: 783.99, type: 'triangle', gain: 0.066 },
      { offset: 0.31, duration: 0.28, frequency: 1046.5, frequencyEnd: 1174.66, type: 'sine', gain: 0.042, release: 0.08 },
      { kind: 'noise', offset: 0.23, duration: 0.08, frequency: 3400, gain: 0.018 },
    ],
    [
      { offset: 0, duration: 0.17, frequency: 587.33, type: 'triangle', gain: 0.073 },
      { offset: 0.09, duration: 0.19, frequency: 739.99, type: 'triangle', gain: 0.068 },
      { offset: 0.19, duration: 0.24, frequency: 880, type: 'triangle', gain: 0.064 },
      { offset: 0.31, duration: 0.28, frequency: 1174.66, frequencyEnd: 1318.51, type: 'sine', gain: 0.041, release: 0.08 },
      { kind: 'noise', offset: 0.23, duration: 0.08, frequency: 3600, gain: 0.017 },
    ],
    [
      { offset: 0, duration: 0.17, frequency: 392, type: 'triangle', gain: 0.074 },
      { offset: 0.09, duration: 0.19, frequency: 493.88, type: 'triangle', gain: 0.069 },
      { offset: 0.19, duration: 0.24, frequency: 587.33, type: 'triangle', gain: 0.065 },
      { offset: 0.31, duration: 0.28, frequency: 783.99, frequencyEnd: 880, type: 'sine', gain: 0.042, release: 0.08 },
      { kind: 'noise', offset: 0.23, duration: 0.08, frequency: 3200, gain: 0.018 },
    ],
  ],
  wrong: [
    [
      { offset: 0, duration: 0.19, frequency: 240, frequencyEnd: 170, type: 'sawtooth', gain: 0.042 },
      { offset: 0.12, duration: 0.23, frequency: 170, frequencyEnd: 110, type: 'triangle', gain: 0.048 },
      { kind: 'noise', offset: 0.02, duration: 0.12, frequency: 420, filterType: 'lowpass', gain: 0.024 },
    ],
    [
      { offset: 0, duration: 0.18, frequency: 260, frequencyEnd: 190, type: 'square', gain: 0.04 },
      { offset: 0.11, duration: 0.22, frequency: 190, frequencyEnd: 130, type: 'sawtooth', gain: 0.046 },
      { kind: 'noise', offset: 0.02, duration: 0.11, frequency: 380, filterType: 'lowpass', gain: 0.022 },
    ],
  ],
  clear: [
    [
      { offset: 0, duration: 0.16, frequency: 392, type: 'triangle', gain: 0.064 },
      { offset: 0.10, duration: 0.18, frequency: 523.25, type: 'triangle', gain: 0.066 },
      { offset: 0.20, duration: 0.20, frequency: 659.25, type: 'triangle', gain: 0.064 },
      { offset: 0.32, duration: 0.28, frequency: 783.99, type: 'triangle', gain: 0.06 },
      { offset: 0.48, duration: 0.34, frequency: 1046.5, frequencyEnd: 1318.51, type: 'sine', gain: 0.045, release: 0.11 },
      { kind: 'noise', offset: 0.36, duration: 0.18, frequency: 4200, gain: 0.02 },
    ],
  ],
  unlock: [
    [
      { offset: 0, duration: 0.10, frequency: 330, frequencyEnd: 440, type: 'square', gain: 0.046 },
      { offset: 0.08, duration: 0.12, frequency: 440, frequencyEnd: 660, type: 'triangle', gain: 0.054 },
      { offset: 0.20, duration: 0.22, frequency: 880, type: 'triangle', gain: 0.048 },
      { kind: 'noise', offset: 0.16, duration: 0.07, frequency: 2600, gain: 0.016 },
    ],
  ],
  vault: [
    [
      { offset: 0, duration: 0.25, frequency: 196, type: 'sine', gain: 0.034 },
      { offset: 0.06, duration: 0.28, frequency: 293.66, type: 'triangle', gain: 0.038 },
      { offset: 0.16, duration: 0.34, frequency: 392, frequencyEnd: 587.33, type: 'sine', gain: 0.035, release: 0.10 },
      { kind: 'noise', offset: 0.28, duration: 0.08, frequency: 3000, gain: 0.012 },
    ],
  ],
  seal: [
    [
      { offset: 0, duration: 0.11, frequency: 115, frequencyEnd: 92, type: 'square', gain: 0.065 },
      { kind: 'noise', offset: 0.005, duration: 0.07, frequency: 700, filterType: 'lowpass', gain: 0.03 },
      { offset: 0.12, duration: 0.18, frequency: 523.25, type: 'triangle', gain: 0.046 },
      { offset: 0.24, duration: 0.25, frequency: 783.99, type: 'triangle', gain: 0.044 },
    ],
  ],
};

export function playFeedback(kind = 'tap') {
  const settings = getFeedbackSettings();
  if (!settings.soundEnabled || settings.soundVolume <= 0) return;
  const variants = SOUND_PATTERNS[kind] || SOUND_PATTERNS.tap;
  const pattern = variants[Math.floor(Math.random() * variants.length)];
  const ctx = getAudioContext();
  if (!ctx) return;
  const baseGain = Math.max(0.0001, settings.soundVolume);
  const start = ctx.currentTime + 0.004;
  const pitchJitter = 0.97 + Math.random() * 0.06;
  try {
    pattern.forEach(item => {
      const part = {
        ...item,
        start: start + item.offset,
        gain: item.gain * baseGain,
        frequency: item.frequency * pitchJitter,
        frequencyEnd: item.frequencyEnd ? item.frequencyEnd * pitchJitter : item.frequencyEnd,
      };
      if (item.kind === 'noise') noise(ctx, part);
      else tone(ctx, part);
    });
  } catch {
    // Audio feedback must never interrupt the app.
  }
}

const HAPTIC_PATTERNS = {
  tap: 8,
  correct: 20,
  wrong: 35,
  clear: [30, 20, 50],
  unlock: [20, 20, 20, 20, 60],
  seal: [20, 20, 20, 20, 60],
};

export function triggerHaptic(kind = 'tap') {
  const settings = getFeedbackSettings();
  if (!settings.hapticsEnabled) return;
  if (typeof navigator === 'undefined' || !navigator.vibrate) return;
  try {
    navigator.vibrate(HAPTIC_PATTERNS[kind] || HAPTIC_PATTERNS.tap);
  } catch {
    // Unsupported devices should stay silent.
  }
}

export function triggerFeedback(kind = 'tap') {
  playFeedback(kind);
  triggerHaptic(kind);
}

export function installGlobalFeedback() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return () => {};
  const handler = (event) => {
    if (event.defaultPrevented) return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    const control = target.closest('button, [role="button"], summary');
    if (!control || control.closest('[data-feedback-silent="true"]')) return;
    if (target.closest('input, textarea, select')) return;
    const explicit = control.getAttribute('data-feedback');
    if (explicit === 'none') return;
    triggerFeedback(explicit || (control.classList.contains('back-button') ? 'back' : 'tap'));
  };
  document.addEventListener('click', handler, true);
  return () => document.removeEventListener('click', handler, true);
}
