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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#86EFAC] text-[#16A34A] text-xs uppercase tracking-[0.2em] mb-3 font-bold shadow-sm font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
            <Activity className="w-3.5 h-3.5 text-[#16A34A]" />
            Vibrational Diagnostic Engine
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#0E1338] mb-4">
            Identify Your Energetic Resonance
          </h2>
          <p className="text-base sm:text-lg text-[#1E293B] font-sans font-normal leading-relaxed max-w-2xl mx-auto">
            Sound is medicine in the Himalayas. Select what your subtle body is calling to release, and discover the exact Solfeggio frequency and therapy calibrated to return you to center.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Concern Selector Buttons */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#0E1338] font-bold block mb-2 font-sans">
              Select Your Current Biofield State:
            </span>
            {DIAGNOSTIC_CONCERNS.map((concern) => {
              const isSelected = concern.concernId === selectedConcern.concernId;
              return (
                <button
                  key={concern.concernId}
                  onClick={() => setSelectedConcern(concern)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-start justify-between font-sans ${
                    isSelected
                      ? 'bg-gradient-to-r from-white to-[#f4fcf7] border-l-4 border-l-[#22C55E] border-t border-r border-b border-[#1718DF]/30 shadow-lg shadow-[#1718DF]/10 sm:translate-x-1'
                      : 'bg-white/80 border-[#e2edf6] hover:border-[#1718DF]/40 hover:bg-white text-[#334155]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className={`text-base font-sans font-bold ${isSelected ? 'text-[#1718DF]' : 'text-[#0E1338]'}`}>
                      {concern.label}
                    </div>
                    <div className="text-sm text-[#334155] font-sans font-normal leading-relaxed">
                      {concern.description}
                    </div>
                  </div>
                  {isSelected && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E] shrink-0 mt-1 shadow-md animate-pulse ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Diagnostic Result Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-white border border-[#CCD6F7] p-6 sm:p-8 shadow-xl font-sans">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#edf2f7] mb-6">
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-md text-white font-bold text-base shrink-0"
                    style={{ backgroundColor: matchedChakra.color }}
                  >
                    {matchedChakra.note}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#1718DF] font-bold font-sans">
                      Target Frequency Vortex
                    </div>
                    <div className="text-2xl sm:text-3xl font-sans font-extrabold text-[#0E1338] tracking-tight">
                      {matchedChakra.name} • {matchedChakra.frequency} Hz
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleTestSound}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#EEF0FF] border border-[#CCD6F7] text-[#1718DF] text-xs sm:text-sm font-bold hover:bg-[#1718DF] hover:text-white transition shadow-sm font-sans active:scale-95"
                  title="Play singing bowl strike at this frequency"
                >
                  <Play className={`w-3.5 h-3.5 fill-current ${isPlayingSound ? 'animate-ping' : ''}`} />
                  <span>{isPlayingSound ? 'Resonating...' : 'Listen to Harmonic'}</span>
                </button>
              </div>

              <div className="space-y-5 mb-6">
                <div>
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-[#0E1338] font-bold mb-2 font-sans">
                    Therapeutic Mechanism
                  </div>
                  <p className="text-base sm:text-lg text-[#1E293B] font-sans font-normal leading-relaxed">
                    {selectedConcern.reason}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white to-[#f7fcf9] border border-[#CCD6F7]/80 shadow-sm">
                    <div className="text-xs uppercase tracking-wider text-[#475569] font-bold font-sans mb-1">Seed Mantra</div>
                    <div className="text-2xl sm:text-3xl font-sans font-extrabold text-[#1718DF] tracking-tight">{matchedChakra.mantra}</div>
                  </div>
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white to-[#f7fcf9] border border-[#CCD6F7]/80 shadow-sm">
                    <div className="text-xs uppercase tracking-wider text-[#475569] font-bold font-sans mb-1">Elemental Domain</div>
                    <div className="text-2xl sm:text-3xl font-sans font-extrabold text-[#1718DF] tracking-tight">{matchedChakra.element}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#edf2f7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-base text-[#0E1338] font-bold font-sans">
                  Recommended Rishikesh Protocol Available
                </div>
                <button
                  onClick={() => onBookRecommended(selectedConcern.recommendedServiceId)}
                  className="px-6 py-3.5 rounded-xl bg-[#1718DF] hover:bg-[#6882FF] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2 font-sans active:scale-95"
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
