/**
 * Procedural Himalayan Singing Bowl & Gong Audio Synthesizer
 * Uses Web Audio API with harmonic overtones and organic acoustic beat frequencies.
 * 100% procedural with zero external audio file dependencies.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export interface StrikeOptions {
  frequency?: number;
  duration?: number;
  volume?: number;
  intensity?: number;
}

/**
 * Plays an authentic Tibetan singing bowl harmonic strike
 */
export function playSingingBowlStrike(options: StrikeOptions = {}) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const f0 = options.frequency || 528; // default to 528 Hz Transformation / Miracle
  const duration = options.duration || 6.5;
  const masterVolume = Math.min(1, Math.max(0.1, options.volume ?? 0.6));
  const intensity = options.intensity ?? 0.8;

  const now = ctx.currentTime;

  // Master gain for this strike
  const masterGain = ctx.createGain();
  masterGain.connect(ctx.destination);
  masterGain.gain.setValueAtTime(masterVolume * 0.45, now);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  // Tibetan bowls produce non-integer circular vibrational modes:
  // f0 (fundamental), f1 (~2.76 * f0), f2 (~5.4 * f0), plus subtle sub-harmonics
  const harmonics = [
    { mult: 1.0, gain: 0.85, decay: duration },
    { mult: 1.006, gain: 0.55, decay: duration * 0.95 }, // slight detune creates natural acoustic beat pulsation
    { mult: 2.756, gain: 0.45 * intensity, decay: duration * 0.75 }, // high shimmering overtone
    { mult: 2.764, gain: 0.35 * intensity, decay: duration * 0.72 }, // overtone beat
    { mult: 5.402, gain: 0.18 * intensity, decay: duration * 0.45 }, // crisp initial rim strike
  ];

  harmonics.forEach(h => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(f0 * h.mult, now);

    // Warmth: subtle pitch drop upon strike (0.15%)
    osc.frequency.exponentialRampToValueAtTime(f0 * h.mult, now + 0.1);

    // Envelope
    g.gain.setValueAtTime(0.0001, now);
    // Strike attack: 15-25ms fast rise
    g.gain.linearRampToValueAtTime(h.gain, now + 0.02);
    // Smooth natural exponential decay
    g.gain.exponentialRampToValueAtTime(0.0001, now + h.decay);

    osc.connect(g);
    g.connect(masterGain);

    osc.start(now);
    osc.stop(now + h.decay);
  });

  // Soft wooden mallet impact noise
  const strikeBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.06), ctx.sampleRate);
  const data = strikeBuffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    // Lowpass filtered mallet thud
    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.015));
  }
  const noise = ctx.createBufferSource();
  noise.buffer = strikeBuffer;
  const noiseFilter = ctx.createBiquadFilter();
  noiseFilter.type = 'lowpass';
  noiseFilter.frequency.setValueAtTime(380, now);
  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.12 * intensity, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

  noise.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(masterGain);

  noise.start(now);
  noise.stop(now + 0.07);
}

/**
 * Continuous soothing Himalayan drone background sound for meditation
 */
let ambientGainNode: GainNode | null = null;
let ambientOscillators: OscillatorNode[] = [];
let isAmbientPlaying = false;

export function toggleAmbientSound(enable?: boolean): boolean {
  const ctx = getAudioContext();
  if (!ctx) return false;

  const shouldPlay = enable !== undefined ? enable : !isAmbientPlaying;

  if (!shouldPlay) {
    if (ambientGainNode) {
      ambientGainNode.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
      setTimeout(() => {
        ambientOscillators.forEach(o => {
          try { o.stop(); o.disconnect(); } catch { /* ignore */ }
        });
        ambientOscillators = [];
        if (ambientGainNode) ambientGainNode.disconnect();
        ambientGainNode = null;
      }, 1300);
    }
    isAmbientPlaying = false;
    return false;
  }

  // Start continuous meditative singing bowl drone at 432Hz / 528Hz
  if (ambientGainNode) {
    ambientOscillators.forEach(o => { try { o.stop(); } catch { /* ignore */ } });
  }

  const now = ctx.currentTime;
  ambientGainNode = ctx.createGain();
  ambientGainNode.gain.setValueAtTime(0.0001, now);
  ambientGainNode.gain.linearRampToValueAtTime(0.08, now + 2.5); // Very soft, gentle meditative background
  ambientGainNode.connect(ctx.destination);

  // Ethereal chord: 432Hz (universal grounding), 528Hz (heart/solar), 108Hz (deep root drone)
  const freqs = [108, 108.5, 432, 433.2, 528, 648];
  ambientOscillators = freqs.map((f, idx) => {
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(f, now);

    const subGain = ctx.createGain();
    subGain.gain.value = idx === 0 || idx === 1 ? 0.35 : 0.15;
    osc.connect(subGain);
    subGain.connect(ambientGainNode!);

    osc.start(now);
    return osc;
  });

  isAmbientPlaying = true;
  return true;
}

export function isAmbientActive(): boolean {
  return isAmbientPlaying;
}
