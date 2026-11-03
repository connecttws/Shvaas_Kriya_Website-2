"use client";

import React, { useRef } from 'react';
import { MapPin, Sparkles, Waves, Compass, Award, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

interface PillarItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  badge: string;
  iconType: 'location' | 'offerings' | 'acoustics' | 'ethos' | 'ttc' | 'lineage';
}

const PILLARS: PillarItem[] = [
  {
    id: 'location',
    category: 'Location',
    title: 'Rishikesh, UK',
    subtitle: 'By Sacred Ganga River',
    badge: 'Tapovan Sanctuary',
    iconType: 'location',
  },
  {
    id: 'offerings',
    category: 'Offerings',
    title: '5 Signature Paths',
    subtitle: 'Sessions, TTC & Retreats',
    badge: 'Curated Journeys',
    iconType: 'offerings',
  },
  {
    id: 'acoustics',
    category: 'Acoustics',
    title: 'Sound & Aqua Sound',
    subtitle: '7-Metal Singing Bowls',
    badge: '432 Hz Frequencies',
    iconType: 'acoustics',
  },
  {
    id: 'ethos',
    category: 'Core Ethos',
    title: 'Breathe · Listen',
    subtitle: 'Reconnect Inward',
    badge: 'Release & Restore',
    iconType: 'ethos',
  },
  {
    id: 'ttc',
    category: 'Teacher Training',
    title: 'Certified TTC Journeys',
    subtitle: 'Accredited Master Mentorship',
    badge: 'Global Certification',
    iconType: 'ttc',
  },
  {
    id: 'lineage',
    category: 'Ancient Roots',
    title: 'Himalayan Lineage',
    subtitle: 'Nada Brahma & Cymatics',
    badge: 'Vedic Science',
    iconType: 'lineage',
  },
];

export const SanctuaryTickerCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollManual = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const renderIcon = (type: PillarItem['iconType']) => {
    switch (type) {
      case 'location':
        return <MapPin className="w-5 h-5 text-[#22C55E]" />;
      case 'offerings':
        return <Sparkles className="w-5 h-5 text-[#1718DF]" />;
      case 'acoustics':
        return <Waves className="w-5 h-5 text-[#22C55E]" />;
      case 'ethos':
        return <Heart className="w-5 h-5 text-[#1718DF]" />;
      case 'ttc':
        return <Award className="w-5 h-5 text-[#22C55E]" />;
      case 'lineage':
        return <Compass className="w-5 h-5 text-[#1718DF]" />;
    }
  };

  // We duplicate array twice to enable seamless, gapless infinite animation
  const duplicatedPillars = [...PILLARS, ...PILLARS];

  return (
    <div className="relative w-full overflow-hidden py-6 mt-2">
      {/* Top and Bottom Decorative Glow Divider with Blue and Baby Green Shade */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#22C55E]/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#1718DF]/30 to-transparent" />

      {/* Side Fade Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-20 pointer-events-none bg-gradient-to-r from-[#f6f9fc] via-[#f6f9fc]/80 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-20 pointer-events-none bg-gradient-to-l from-[#f6f9fc] via-[#f6f9fc]/80 to-transparent" />

      {/* Manual Arrow Controls (Desktop Subtle Overlay) */}
      <div className="hidden lg:flex items-center justify-between absolute inset-x-2 top-1/2 -translate-y-1/2 z-30 pointer-events-none px-2">
        <button
          onClick={() => handleScrollManual('left')}
          className="pointer-events-auto w-9 h-9 rounded-full bg-white/95 border border-[#CCD6F7] text-[#0E1338] hover:text-[#1718DF] hover:border-[#22C55E] flex items-center justify-center shadow-lg transition active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleScrollManual('right')}
          className="pointer-events-auto w-9 h-9 rounded-full bg-white/95 border border-[#CCD6F7] text-[#0E1338] hover:text-[#1718DF] hover:border-[#22C55E] flex items-center justify-center shadow-lg transition active:scale-95"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Marquee Carousel Track */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto scrollbar-none py-2"
      >
        <div className="animate-marquee-scroll flex items-center gap-4 sm:gap-6 px-4">
          {duplicatedPillars.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[280px] sm:w-[320px] shrink-0 rounded-2xl bg-gradient-to-br from-white via-[#f7fcf8] to-[#f4f7fe] border border-[#CCD6F7]/80 hover:border-[#22C55E] p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              {/* Top Accent Gradient Bar blending Blue & Baby Green */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1718DF] via-[#22C55E] to-[#1718DF]" />

              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#e2edf6] shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {renderIcon(item.iconType)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                      <span className="text-[11px] uppercase tracking-wider text-[#1718DF] font-bold font-sans">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-semibold text-[#16A34A] bg-[#ECFDF5] border border-[#86EFAC]/70 px-2.5 py-0.5 rounded-full font-sans">
                  {item.badge}
                </span>
              </div>

              {/* Title & Subtitle in Simple, Clean, Highly Readable Typography */}
              <div className="space-y-1 text-left pl-1">
                <h4 className="text-base sm:text-lg font-bold text-[#0E1338] font-sans group-hover:text-[#1718DF] transition-colors leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#334155] font-sans font-medium leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              {/* Subtle Bottom Ambient Leaf Aura */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-[#22C55E]/10 pointer-events-none blur-xl group-hover:bg-[#22C55E]/20 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

