"use client";

import React, { useState } from 'react';
import { DIAGNOSTIC_CONCERNS, getChakraProfile, DiagnosticQuestion } from '../utils/healing';
import { playSingingBowlStrike } from '../utils/audioSynthesizer';
import { Activity, Play, ArrowRight } from 'lucide-react';

interface FrequencyDiagnosticProps {
  onBookRecommended: (serviceId: string) => void;
  onPreviewChakraInBowl?: (chakraId: string) => void;
}

export const FrequencyDiagnostic: React.FC<FrequencyDiagnosticProps> = ({
  onBookRecommended,
  onPreviewChakraInBowl,
}) => {
  const [selectedConcern, setSelectedConcern] = useState<DiagnosticQuestion>(DIAGNOSTIC_CONCERNS[0]);
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const matchedChakra = getChakraProfile(selectedConcern.recommendedChakra);

  const handleTestSound = () => {
    setIsPlayingSound(true);
    playSingingBowlStrike({
      frequency: matchedChakra.frequency,
      duration: 6.5,
      volume: 0.8,
    });
    if (onPreviewChakraInBowl) {
      onPreviewChakraInBowl(matchedChakra.id);
    }
    setTimeout(() => setIsPlayingSound(false), 2000);
  };

  return (
    <section id="frequency-tool" className="py-20 relative bg-[#f1f6fb] border-t border-b border-[#e2eaf2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7edf7] border border-[#d8b8d8] text-[#663366] text-xs uppercase tracking-widest mb-3 font-bold shadow-sm">
            <Activity className="w-3.5 h-3.5" />
            Vibrational Diagnostic Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading text-[#27282c] tracking-tight mb-3">
            Identify Your Energetic Resonance
          </h2>
          <p className="text-sm text-[#52637a] font-serif-elegant italic leading-relaxed">
            Sound is medicine in the Himalayas. Select what your subtle body is calling to release, and discover the exact Solfeggio frequency and therapy calibrated to return you to center.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Concern Selector Buttons */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#64748b] font-bold block mb-2">
              Select Your Current Biofield State:
            </span>
            {DIAGNOSTIC_CONCERNS.map((concern) => {
              const isSelected = concern.concernId === selectedConcern.concernId;
              return (
                <button
                  key={concern.concernId}
                  onClick={() => setSelectedConcern(concern)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-start justify-between ${
                    isSelected
                      ? 'bg-white border-[#663366] shadow-lg shadow-[#663366]/10 translate-x-1'
                      : 'bg-white/70 border-[#e2edf6] hover:border-[#663366]/40 hover:bg-white text-[#334155]'
                  }`}
                >
                  <div>
                    <div className={`text-sm font-heading font-bold mb-1 ${isSelected ? 'text-[#663366]' : 'text-[#27282c]'}`}>
                      {concern.label}
                    </div>
                    <div className="text-xs text-[#64748b] font-light line-clamp-2">
                      {concern.description}
                    </div>
                  </div>
                  {isSelected && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#663366] shrink-0 mt-1 shadow-md" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Diagnostic Result Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-white border border-[#d8e3ed] p-6 sm:p-8 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#edf2f7] mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shadow-md text-white font-bold text-xs"
                    style={{ backgroundColor: matchedChakra.color }}
                  >
                    {matchedChakra.note}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#663366] font-bold">
                      Target Frequency Vortex
                    </div>
                    <div className="text-lg font-heading text-[#27282c]">
                      {matchedChakra.name} • {matchedChakra.frequency} Hz Solfeggio
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleTestSound}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f7edf7] border border-[#d8b8d8] text-[#663366] text-xs font-bold hover:bg-[#663366] hover:text-white transition shadow-sm"
                  title="Play singing bowl strike at this frequency"
                >
                  <Play className={`w-3.5 h-3.5 fill-current ${isPlayingSound ? 'animate-ping' : ''}`} />
                  <span>{isPlayingSound ? 'Resonating...' : 'Listen to Harmonic'}</span>
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#64748b] font-bold mb-1">
                    Therapeutic Mechanism
                  </div>
                  <p className="text-sm text-[#475569] font-light leading-relaxed">
                    {selectedConcern.reason}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-2xl bg-[#f8fbfd] border border-[#e2edf6]">
                    <div className="text-[10px] uppercase tracking-wider text-[#64748b] font-semibold">Seed Mantra</div>
                    <div className="text-base font-heading font-bold text-[#663366]">{matchedChakra.mantra}</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#f8fbfd] border border-[#e2edf6]">
                    <div className="text-[10px] uppercase tracking-wider text-[#64748b] font-semibold">Elemental Domain</div>
                    <div className="text-base font-heading font-bold text-[#663366]">{matchedChakra.element}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#edf2f7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-[#64748b]">
                  Recommended Dharamshala Protocol Available
                </div>
                <button
                  onClick={() => onBookRecommended(selectedConcern.recommendedServiceId)}
                  className="px-6 py-2.5 rounded-xl bg-[#663366] hover:bg-[#7b3e7b] text-white font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2"
                >
                  <span>Book This Prescribed Session</span>
                  <ArrowRight className="w-4 h-4 text-[#ffd875]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
