"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WhatIsSoundHealingProps {
  onLearnMore?: () => void;
}

export const WhatIsSoundHealing: React.FC<WhatIsSoundHealingProps> = ({ onLearnMore }) => {
  return (
    <section id="what-is-sound-healing" className="py-24 bg-white relative overflow-hidden">
      {/* Soft celestial bluish mist glow (High-performance hardware-accelerated radial gradient) */}
      <div
        className="absolute top-1/2 left-0 w-[550px] h-[550px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(219, 234, 254, 0.45) 0%, transparent 70%)',
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
                
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/95 border border-[#e2eaf2] text-center shadow-lg">
                  <span className="text-[10px] uppercase tracking-widest text-[#663366] font-bold block">
                    Himalayan Sound Healer
                  </span>
                  <span className="text-xs text-[#475569] font-serif-elegant italic">
                    Dharamshala Cedar Groves
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Text Content & 3 Lineages */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#663366] font-bold mb-2">
                Sacred Origins
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#27282c] leading-tight">
                What Is Sound Healing?
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-light">
              Everything in the universe is in a constant state of vibration, including every cell in your body. When we are healthy, we vibrate at a harmonious frequency. While sound healing is gaining popularity in modern wellness, its roots are ancient and span across the globe. It is not a &quot;new&quot; invention, but a re-discovery of timeless wisdom.
            </p>

            <div className="space-y-3.5 pt-2">
              {/* Vedic Roots */}
              <div className="p-4 rounded-2xl bg-[#f8fbfe] border border-[#e2edf6] hover:border-[#663366]/40 transition-all shadow-sm">
                <h4 className="text-sm font-heading font-bold text-[#663366] mb-1">
                  Vedic Roots:
                </h4>
                <p className="text-xs text-[#52637a] leading-relaxed">
                  In ancient India, the concept of <strong className="text-[#1e293b]">Nada Brahma</strong> (&quot;The world is sound&quot;) was central to spiritual practice. The Vedas utilized mantras and chanting to balance the chakras and focus the mind.
                </p>
              </div>

              {/* The Himalayas */}
              <div className="p-4 rounded-2xl bg-[#f8fbfe] border border-[#e2edf6] hover:border-[#663366]/40 transition-all shadow-sm">
                <h4 className="text-sm font-heading font-bold text-[#663366] mb-1">
                  The Himalayas:
                </h4>
                <p className="text-xs text-[#52637a] leading-relaxed">
                  For centuries, Tibetan monks have used metal singing bowls in meditation and ceremonial practices to induce deep trance states.
                </p>
              </div>

              {/* Ancient Greece */}
              <div className="p-4 rounded-2xl bg-[#f8fbfe] border border-[#e2edf6] hover:border-[#663366]/40 transition-all shadow-sm">
                <h4 className="text-sm font-heading font-bold text-[#663366] mb-1">
                  Ancient Greece:
                </h4>
                <p className="text-xs text-[#52637a] leading-relaxed">
                  Pythagoras, the famous mathematician and philosopher, prescribed specific musical intervals to treat physical and emotional ailments, calling it &quot;medicine for the soul.&quot;
                </p>
              </div>
            </div>

            {onLearnMore && (
              <div className="pt-2">
                <button
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#663366] text-[#663366] hover:bg-[#663366] hover:text-white transition-all text-xs uppercase tracking-wider font-bold shadow-sm"
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
                  <text className="text-[10px] uppercase tracking-[0.28em] fill-[#663366] font-semibold">
                    <textPath href="#circlePathLight" startOffset="0%">
                      • Welcome to Moksham Healings • Dharamshala
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center Sacred Lotus Icon in Plum #663366 */}
              <div className="absolute w-20 h-20 rounded-full bg-[#663366] flex items-center justify-center shadow-lg border-2 border-[#8d488d]">
                <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C12 2 8 8 8 13C8 15.21 9.79 17 12 17C14.21 17 16 15.21 16 13C16 8 12 2 12 2ZM12 15C10.9 15 10 14.1 10 13C10 9.8 12 5.5 12 5.5C12 5.5 14 9.8 14 13C14 14.1 13.1 15 12 15ZM6.5 10C5.5 11.5 5 13.2 5 15C5 18.9 8.1 22 12 22C15.9 22 19 18.9 19 15C19 13.2 18.5 11.5 17.5 10C16.8 11.8 15.5 13.3 14 14.2C14.6 13.2 15 12.1 15 11C15 8.8 13.5 6.5 12 5C10.5 6.5 9 8.8 9 11C9 12.1 9.4 13.2 10 14.2C8.5 13.3 7.2 11.8 6.5 10Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
