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

function tone(ctx, { start, duration, frequency, type = 'square', gain = 0.12 }) {
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(frequency, start);
  amp.gain.setValueAtTime(0.0001, start);
  amp.gain.exponentialRampToValueAtTime(Math.max(0.0001, gain), start + 0.012);
  amp.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(amp);
  amp.connect(ctx.destination);
  osc.start(start);
  osc.stop(start + duration + 0.02);
}

const SOUND_PATTERNS = {
  tap: [
    { offset: 0, duration: 0.045, frequency: 620, type: 'triangle', gain: 0.055 },
  ],
  back: [
    { offset: 0, duration: 0.055, frequency: 260, type: 'triangle', gain: 0.06 },
  ],
  correct: [
    { offset: 0, duration: 0.07, frequency: 660, type: 'triangle', gain: 0.08 },
    { offset: 0.06, duration: 0.12, frequency: 990, type: 'triangle', gain: 0.07 },
  ],
  wrong: [
    { offset: 0, duration: 0.10, frequency: 180, type: 'sine', gain: 0.06 },
    { offset: 0.07, duration: 0.10, frequency: 145, type: 'sine', gain: 0.045 },
  ],
  clear: [
    { offset: 0, duration: 0.11, frequency: 523, type: 'triangle', gain: 0.075 },
    { offset: 0.10, duration: 0.12, frequency: 784, type: 'triangle', gain: 0.075 },
    { offset: 0.22, duration: 0.20, frequency: 1046, type: 'triangle', gain: 0.065 },
  ],
  unlock: [
    { offset: 0, duration: 0.08, frequency: 440, type: 'square', gain: 0.055 },
    { offset: 0.07, duration: 0.10, frequency: 880, type: 'triangle', gain: 0.07 },
  ],
  vault: [
    { offset: 0, duration: 0.09, frequency: 330, type: 'triangle', gain: 0.045 },
    { offset: 0.08, duration: 0.13, frequency: 494, type: 'sine', gain: 0.055 },
  ],
  seal: [
    { offset: 0, duration: 0.075, frequency: 120, type: 'square', gain: 0.075 },
    { offset: 0.055, duration: 0.07, frequency: 260, type: 'triangle', gain: 0.045 },
  ],
};

export function playFeedback(kind = 'tap') {
  const settings = getFeedbackSettings();
  if (!settings.soundEnabled || settings.soundVolume <= 0) return;
  const pattern = SOUND_PATTERNS[kind] || SOUND_PATTERNS.tap;
  const ctx = getAudioContext();
  if (!ctx) return;
  const baseGain = Math.max(0.0001, settings.soundVolume);
  const start = ctx.currentTime + 0.004;
  try {
    pattern.forEach(item => tone(ctx, {
      ...item,
      start: start + item.offset,
      gain: item.gain * baseGain,
    }));
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
