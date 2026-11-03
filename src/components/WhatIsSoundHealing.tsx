"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WhatIsSoundHealingProps {
  onLearnMore?: () => void;
}

export const WhatIsSoundHealing: React.FC<WhatIsSoundHealingProps> = ({ onLearnMore }) => {
  return (
    <section id="what-is-sound-healing" className="py-24 bg-white relative overflow-hidden">
      {/* Soft celestial bluish & baby-green mist glow */}
      <div
        className="absolute top-1/2 left-0 w-[550px] h-[550px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(219, 234, 254, 0.45) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-12 right-10 w-96 h-96 pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Arched Window Photo */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group">
              <div className="w-[280px] sm:w-[320px] h-[400px] sm:h-[460px] rounded-t-full rounded-b-3xl overflow-hidden border-2 border-[#d6e2ee] shadow-xl relative bg-[#f1f6fb]">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/50 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/95 border border-[#86EFAC]/70 text-center shadow-lg">
                  <span className="text-[10px] uppercase tracking-widest text-[#1718DF] font-bold block font-sans">
                    Himalayan Sound Healer
                  </span>
                  <span className="text-xs text-[#0E1338] font-sans font-semibold">
                    Rishikesh Himalayan Foothills
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Text Content & 3 Lineages */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#86EFAC] text-[#16A34A] text-xs uppercase tracking-[0.2em] font-bold shadow-sm mb-3 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                Sacred Origins & Lineage
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#0E1338] leading-tight">
                What Is Sound Healing?
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#1E293B] font-sans font-normal leading-relaxed">
              Everything in the universe is in a constant state of vibration, including every cell in your body. When we are healthy, we vibrate at a harmonious frequency. While sound healing is gaining popularity in modern wellness, its roots are ancient and span across the globe. It is not a &quot;new&quot; invention, but a re-discovery of timeless wisdom.
            </p>

            <div className="space-y-4 pt-2">
              {/* Vedic Roots */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#f8fbfe] to-[#f4fcf7] border-l-4 border-l-[#22C55E] border-t border-r border-b border-[#e2edf6] hover:border-[#1718DF]/40 transition-all shadow-sm">
                <h4 className="text-base font-bold text-[#1718DF] font-sans mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E] shrink-0" />
                  <span>Vedic Roots (Nada Brahma)</span>
                </h4>
                <p className="text-sm sm:text-base text-[#1E293B] font-sans font-normal leading-relaxed">
                  In ancient India, the concept of <strong className="text-[#1718DF] font-semibold">Nada Brahma</strong> (&quot;The world is sound&quot;) was central to spiritual practice. The Vedas utilized mantras and chanting to balance the chakras and focus the mind.
                </p>
              </div>

              {/* The Himalayas */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#f8fbfe] to-[#f4fcf7] border-l-4 border-l-[#1718DF] border-t border-r border-b border-[#e2edf6] hover:border-[#22C55E]/40 transition-all shadow-sm">
                <h4 className="text-base font-bold text-[#1718DF] font-sans mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1718DF] shrink-0" />
                  <span>The Himalayan Tradition</span>
                </h4>
                <p className="text-sm sm:text-base text-[#1E293B] font-sans font-normal leading-relaxed">
                  For centuries, Tibetan monks have used metal singing bowls in meditation and ceremonial practices to induce deep trance states.
                </p>
              </div>

              {/* Ancient Greece */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#f8fbfe] to-[#f4fcf7] border-l-4 border-l-[#22C55E] border-t border-r border-b border-[#e2edf6] hover:border-[#1718DF]/40 transition-all shadow-sm">
                <h4 className="text-base font-bold text-[#1718DF] font-sans mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E] shrink-0" />
                  <span>Pythagorean Acoustic Science</span>
                </h4>
                <p className="text-sm sm:text-base text-[#1E293B] font-sans font-normal leading-relaxed">
                  Pythagoras, the famous mathematician and philosopher, prescribed specific musical intervals to treat physical and emotional ailments, calling it &quot;medicine for the soul.&quot;
                </p>
              </div>
            </div>

            {onLearnMore && (
              <div className="pt-2">
                <button
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#1718DF] text-[#1718DF] hover:bg-[#1718DF] hover:text-white transition-all text-xs uppercase tracking-wider font-bold shadow-sm"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Secondary Photo & Rotating Lotus Stamp */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center gap-8">
            <div className="w-56 h-72 rounded-full overflow-hidden border-2 border-[#d6e2ee] shadow-xl bg-[#f1f6fb] relative group">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop')`,
                }}
              />
            </div>

            {/* Circular Rotating Stamp Badge (Hardware-accelerated texture rotation) */}
            <div className="relative w-40 h-40 flex items-center justify-center">
              <div className="w-full h-full animate-spin-slow pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 160 160">
                  <defs>
                    <path
                      id="circlePathLight"
                      d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                    />
                  </defs>
                  <text className="text-[10px] uppercase tracking-[0.28em] fill-[#1718DF] font-semibold">
                    <textPath href="#circlePathLight" startOffset="0%">
                      • Shvaas Kriya Retreat • Rishikesh •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center Official Shvaas Logo in Spinning Seal */}
              <div className="absolute w-20 h-20 rounded-full overflow-hidden shadow-xl border-2 border-[#6882FF] bg-[#1718DF] flex items-center justify-center">
                <img
                  src="/images/shvaas-logo.png"
                  alt="Shvaas Kriya Sacred Emblem"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
