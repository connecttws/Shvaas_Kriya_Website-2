"use client";

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface WhatIsSoundHealingProps {
  onLearnMore?: () => void;
}

export const WhatIsSoundHealing: React.FC<WhatIsSoundHealingProps> = ({ onLearnMore }) => {
  const lineages = [
    {
      title: "Vedic Roots",
      subtitle: "Nada Brahma",
      accent: "#22C55E",
      desc: "Ancient wisdom recognizing 'The world is sound' — utilizing mantras and acoustic resonance to harmonize the chakras.",
    },
    {
      title: "Himalayan Tradition",
      subtitle: "Tibetan Bowls",
      accent: "#1718DF",
      desc: "Centuries of 7-metal singing bowls used in sacred meditation to shift brainwaves into restorative theta stillness.",
    },
    {
      title: "Pythagorean Acoustics",
      subtitle: "Harmonic Science",
      accent: "#22C55E",
      desc: "Mathematical sound intervals prescribed as medicine for the soul to restore physical balance and emotional clarity.",
    },
  ];

  return (
    <section id="what-is-sound-healing" className="py-14 sm:py-16 bg-white relative overflow-hidden">
      {/* Soft celestial bluish & baby-green mist glow */}
      <div
        className="absolute top-1/2 left-0 w-[500px] h-[400px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(219, 234, 254, 0.4) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-10 right-10 w-72 h-72 pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Compact Arched Sanctuary Photo with Integrated Rotating Seal */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-[340px]">
              <div className="w-full h-[320px] sm:h-[370px] rounded-t-full rounded-b-3xl overflow-hidden border-2 border-[#d6e2ee] shadow-xl relative bg-[#f1f6fb]">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1338]/60 via-transparent to-transparent opacity-70" />
                
                <div className="absolute bottom-4 left-4 right-16 p-2.5 rounded-xl bg-white/95 border border-[#86EFAC]/70 shadow-md">
                  <span className="text-[10px] uppercase tracking-widest text-[#1718DF] font-bold block font-sans">
                    Himalayan Sound Healer
                  </span>
                  <span className="text-xs text-[#0E1338] font-sans font-semibold">
                    Tapovan Foothills, Rishikesh
                  </span>
                </div>
              </div>

              {/* Integrated Rotating Seal (Compact & Anchored to the Arched Frame) */}
              <div className="absolute -bottom-4 -right-4 w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                <div className="w-full h-full animate-spin-slow pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 160 160">
                    <defs>
                      <path
                        id="circlePathCompact"
                        d="M 80, 80 m -58, 0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
                      />
                    </defs>
                    <text className="text-[10px] uppercase tracking-[0.25em] fill-[#1718DF] font-bold">
                      <textPath href="#circlePathCompact" startOffset="0%">
                        • Shvaas Kriya • Rishikesh •
                      </textPath>
                    </text>
                  </svg>
                </div>

                <div className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-xl border-2 border-white bg-[#1718DF] flex items-center justify-center">
                  <img
                    src="/images/shvaas-logo.png"
                    alt="Shvaas Kriya Emblem"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Text Content & 3 Lineages Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#86EFAC] text-[#16A34A] text-xs uppercase tracking-[0.2em] font-bold shadow-sm mb-2.5 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
                Sacred Origins & Lineage
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-[#0E1338] leading-tight">
                What Is Sound Healing?
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#1E293B] font-sans font-normal leading-relaxed">
              Everything in the universe is in a constant state of vibration, including every cell in your body. Sound healing uses resonant acoustic frequencies to shift brainwaves into restorative theta states, dissolve mental loops, and awaken deep inner stillness.
            </p>

            {/* 3 Lineages - Responsive 3-Column Compact Micro-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {lineages.map((item, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl bg-gradient-to-b from-[#f8fbfe] to-[#f4fcf7] border border-[#CCD6F7]/70 hover:border-[#22C55E]/50 transition-all shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1718DF] font-sans mb-1">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: item.accent }}
                      />
                      <span>{item.title}</span>
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-[#16A34A] font-bold font-sans mb-1.5">
                      {item.subtitle}
                    </div>
                    <p className="text-xs text-[#334155] font-sans font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {onLearnMore && (
              <div className="pt-2">
                <button
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1718DF] hover:bg-[#6882FF] text-white transition-all text-xs uppercase tracking-wider font-bold shadow-md active:scale-95 font-sans"
                >
                  <span>Explore Our Experiences</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#ffd875]" />
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
