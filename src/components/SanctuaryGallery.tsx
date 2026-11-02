import React from 'react';
import { Mountain, Flame, Moon, Sparkles, Feather } from 'lucide-react';

export const SanctuaryGallery: React.FC = () => {
  const pillars = [
    {
      icon: Mountain,
      title: 'High-Altitude Himalayan Prana',
      subtitle: '2,082m Elevation in Dharamshala',
      desc: 'Nestled amidst cedar pine groves and the sacred shadow of the Triund & Dhauladhar peaks, the acoustic clarity here carries deep grounding electromagnetic resonance.'
    },
    {
      icon: Flame,
      title: '7-Metal Hand-Hammered Alloys',
      subtitle: 'Gold, Silver, Copper, Iron, Tin, Lead, Zinc',
      desc: 'Our authentic full-moon singing bowls are forged under specific astrological alignments by multi-generational Himalayan coppersmiths, vibrating for up to 90 seconds per strike.'
    },
    {
      icon: Moon,
      title: 'Sacred Temple Smudging & Biofield Cleanse',
      subtitle: 'Wild Himalayan Cedar & Sage',
      desc: 'Each session begins with traditional juniper incense smudging and Tibetan tingsha chime invocations to clear negative energetic residues from the aura.'
    },
  ];

  return (
    <section id="space" className="py-24 bg-[#060709] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18140e] border border-[#382d18] text-[#d4af37] text-xs uppercase tracking-[0.25em] mb-4">
            <Mountain className="w-3.5 h-3.5" />
            The Himalayan Sanctuary
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#fff8eb] tracking-tight mb-5">
            Where Ancient Wisdom Meets Sacred Stillness
          </h2>
          <p className="text-sm sm:text-base text-[#b0a595] font-serif-elegant italic leading-relaxed">
            Forsyth Ganj & Bhagsunag are historic centers of meditation and spiritual awakening. Moksham Healings was established to preserve authentic Tibetan acoustic therapy in its purest form.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-2xl bg-gradient-to-b from-[#0f1118] to-[#0a0c10] border border-[#21232e] hover:border-[#4a3e26] transition-all duration-300 relative group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1a1710] border border-[#3b301c] flex items-center justify-center text-[#d4af37] mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold mb-1">
                  {p.subtitle}
                </div>
                <h3 className="text-xl font-heading text-[#fff5dc] mb-3">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9c9383] font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Atmospheric Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl bg-[#0e1017] border border-[#232532] text-center flex flex-col items-center justify-center min-h-[170px]">
            <span className="font-heading text-3xl font-bold text-[#e6c167] mb-1">1,400+</span>
            <span className="text-xs uppercase tracking-wider text-[#a89d89]">Souls Transformed</span>
            <span className="text-[10px] text-[#696150] mt-1 font-serif-elegant italic">From 42+ Countries</span>
          </div>
          <div className="p-6 rounded-2xl bg-[#0e1017] border border-[#232532] text-center flex flex-col items-center justify-center min-h-[170px]">
            <span className="font-heading text-3xl font-bold text-[#e6c167] mb-1">7 Metal</span>
            <span className="text-xs uppercase tracking-wider text-[#a89d89]">Authentic Tibetan Bowls</span>
            <span className="text-[10px] text-[#696150] mt-1 font-serif-elegant italic">Singing up to 90s sustain</span>
          </div>
          <div className="p-6 rounded-2xl bg-[#0e1017] border border-[#232532] text-center flex flex-col items-center justify-center min-h-[170px]">
            <span className="font-heading text-3xl font-bold text-[#e6c167] mb-1">432 & 528 Hz</span>
            <span className="text-xs uppercase tracking-wider text-[#a89d89]">Solfeggio Frequencies</span>
            <span className="text-[10px] text-[#696150] mt-1 font-serif-elegant italic">Miracle & cellular repair</span>
          </div>
          <div className="p-6 rounded-2xl bg-[#0e1017] border border-[#232532] text-center flex flex-col items-center justify-center min-h-[170px]">
            <span className="font-heading text-3xl font-bold text-[#e6c167] mb-1">5.0 ★★★★★</span>
            <span className="text-xs uppercase tracking-wider text-[#a89d89]">Sanctuary Rating</span>
            <span className="text-[10px] text-[#696150] mt-1 font-serif-elegant italic">Dharamshala Spiritual Community</span>
          </div>
        </div>
      </div>
    </section>
  );
};
