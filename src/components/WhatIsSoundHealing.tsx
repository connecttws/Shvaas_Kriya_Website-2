"use client";

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface WhatIsSoundHealingProps {
  onLearnMore?: () => void;
}

export const WhatIsSoundHealing: React.FC<WhatIsSoundHealingProps> = ({ onLearnMore }) => {
  return (
    <section id="what-is-sound-healing" className="py-14 sm:py-16 bg-white relative overflow-hidden">
      {/* Soft celestial bluish & baby-green mist glow */}
      <div
        className="absolute top-1/2 left-0 w-[500px] h-[500px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(219, 234, 254, 0.45) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-12 right-10 w-80 h-80 pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Arched Window Photo (Subtly Shrunk) */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative group">
              <div className="w-[220px] sm:w-[250px] h-[310px] sm:h-[360px] rounded-t-full rounded-b-3xl overflow-hidden border-2 border-[#d6e2ee] shadow-lg relative bg-[#f1f6fb]">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1338]/60 via-transparent to-transparent opacity-70" />
                
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-white/95 border border-[#86EFAC]/70 text-center shadow-md">
                  <span className="text-[10px] uppercase tracking-widest text-[#1718DF] font-bold block font-sans">
                    Himalayan Sound Healer
                  </span>
                  <span className="text-[11px] text-[#0E1338] font-sans font-semibold">
                    Rishikesh Himalayan Foothills
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Text Content & 3 Lineages (Generous 6 cols so headline fits on 1 line) */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#86EFAC] text-[#16A34A] text-xs uppercase tracking-[0.2em] font-bold shadow-sm mb-2.5 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
                Sacred Origins & Lineage
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] xl:text-4xl font-sans font-bold text-[#0E1338] tracking-tight whitespace-normal sm:whitespace-nowrap">
                What Is Sound Healing?
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#1E293B] font-sans font-normal leading-relaxed">
              Everything in the universe is in a constant state of vibration, including every cell in your body. When we are healthy, we vibrate at a harmonious frequency. While sound healing is gaining popularity in modern wellness, its roots are ancient and span across the globe. It is not a &quot;new&quot; invention, but a re-discovery of timeless wisdom.
            </p>

            <div className="space-y-2.5 pt-1">
              {/* Vedic Roots */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#f8fbfe] to-[#f4fcf7] border-l-4 border-l-[#22C55E] border-t border-r border-b border-[#e2edf6] hover:border-[#1718DF]/40 transition-all shadow-sm">
                <h4 className="text-base font-bold text-[#1718DF] font-sans mb-0.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E] shrink-0" />
                  <span>Vedic Roots (Nada Brahma)</span>
                </h4>
                <p className="text-sm text-[#1E293B] font-sans font-normal leading-relaxed">
                  In ancient India, the concept of <strong className="text-[#1718DF] font-bold">Nada Brahma</strong> (&quot;The world is sound&quot;) was central to spiritual practice. The Vedas utilized mantras and chanting to balance the chakras and focus the mind.
                </p>
              </div>

              {/* The Himalayas */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#f8fbfe] to-[#f4fcf7] border-l-4 border-l-[#1718DF] border-t border-r border-b border-[#e2edf6] hover:border-[#22C55E]/40 transition-all shadow-sm">
                <h4 className="text-base font-bold text-[#1718DF] font-sans mb-0.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1718DF] shrink-0" />
                  <span>The Himalayan Tradition</span>
                </h4>
                <p className="text-sm text-[#1E293B] font-sans font-normal leading-relaxed">
                  For centuries, Tibetan monks have used metal singing bowls in meditation and ceremonial practices to induce deep trance states.
                </p>
              </div>

              {/* Ancient Greece */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#f8fbfe] to-[#f4fcf7] border-l-4 border-l-[#22C55E] border-t border-r border-b border-[#e2edf6] hover:border-[#1718DF]/40 transition-all shadow-sm">
                <h4 className="text-base font-bold text-[#1718DF] font-sans mb-0.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E] shrink-0" />
                  <span>Pythagorean Acoustic Science</span>
                </h4>
                <p className="text-sm text-[#1E293B] font-sans font-normal leading-relaxed">
                  Pythagoras, the famous mathematician and philosopher, prescribed specific musical intervals to treat physical and emotional ailments, calling it &quot;medicine for the soul.&quot;
                </p>
              </div>
            </div>

            {onLearnMore && (
              <div className="pt-1.5">
                <button
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1718DF] hover:bg-[#6882FF] text-white transition-all text-xs uppercase tracking-wider font-bold shadow-md active:scale-95 font-sans"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#ffd875]" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Secondary Photo & Rotating Lotus Stamp (Subtly Shrunk) */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center gap-4">
            <div className="w-40 sm:w-44 h-52 sm:h-56 rounded-full overflow-hidden border-2 border-[#d6e2ee] shadow-lg bg-[#f1f6fb] relative group">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop')`,
                }}
              />
            </div>

            {/* Circular Rotating Stamp Badge (Hardware-accelerated texture rotation) */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center">
              <div className="w-full h-full animate-spin-slow pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 160 160">
                  <defs>
                    <path
                      id="circlePathLight"
                      d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                    />
                  </defs>
                  <text className="text-[10px] uppercase tracking-[0.28em] fill-[#1718DF] font-bold">
                    <textPath href="#circlePathLight" startOffset="0%">
                      • Shvaas Kriya Retreat • Rishikesh •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center Official Shvaas Logo in Spinning Seal */}
              <div className="absolute w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden shadow-xl border-2 border-[#6882FF] bg-[#1718DF] flex items-center justify-center">
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
