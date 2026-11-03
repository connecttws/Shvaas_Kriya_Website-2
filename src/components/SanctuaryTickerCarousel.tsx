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
    badge: '432 Hz Solfeggio',
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
    subtitle: 'Accredited Mentorship',
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
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const renderIcon = (type: PillarItem['iconType']) => {
    switch (type) {
      case 'location':
        return <MapPin className="w-4 h-4 text-[#22C55E]" />;
      case 'offerings':
        return <Sparkles className="w-4 h-4 text-[#1718DF]" />;
      case 'acoustics':
        return <Waves className="w-4 h-4 text-[#22C55E]" />;
      case 'ethos':
        return <Heart className="w-4 h-4 text-[#1718DF]" />;
      case 'ttc':
        return <Award className="w-4 h-4 text-[#22C55E]" />;
      case 'lineage':
        return <Compass className="w-4 h-4 text-[#1718DF]" />;
    }
  };

  // We duplicate array twice to enable seamless, gapless infinite animation
  const duplicatedPillars = [...PILLARS, ...PILLARS];

  return (
    <div className="relative w-full overflow-hidden py-3 mt-1">
      {/* Subtle Top & Bottom Hairline Dividers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#86EFAC]/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#CCD6F7]/40 to-transparent" />

      {/* Side Fade Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-20 pointer-events-none bg-gradient-to-r from-[#f6f9fc] via-[#f6f9fc]/80 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-20 pointer-events-none bg-gradient-to-l from-[#f6f9fc] via-[#f6f9fc]/80 to-transparent" />

      {/* Manual Arrow Controls (Desktop Subtle Overlay) */}
      <div className="hidden lg:flex items-center justify-between absolute inset-x-1 top-1/2 -translate-y-1/2 z-30 pointer-events-none px-1">
        <button
          onClick={() => handleScrollManual('left')}
          className="pointer-events-auto w-8 h-8 rounded-full bg-white/95 border border-[#CCD6F7] text-[#0E1338] hover:text-[#1718DF] hover:border-[#22C55E] flex items-center justify-center shadow-md transition active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleScrollManual('right')}
          className="pointer-events-auto w-8 h-8 rounded-full bg-white/95 border border-[#CCD6F7] text-[#0E1338] hover:text-[#1718DF] hover:border-[#22C55E] flex items-center justify-center shadow-md transition active:scale-95"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Slim & Sleek Marquee Carousel Track */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto scrollbar-none py-1.5"
      >
        <div className="animate-marquee-scroll flex items-center gap-3 sm:gap-4 px-2">
          {duplicatedPillars.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[240px] sm:w-[260px] shrink-0 rounded-xl bg-white/90 hover:bg-white border border-[#86EFAC]/50 hover:border-[#22C55E] py-2.5 px-3.5 shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden flex items-center gap-3 text-left"
            >
              {/* Slim Top Dual-Tone Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1718DF] to-[#22C55E]" />

              {/* Compact Icon */}
              <div className="w-8 h-8 rounded-lg bg-[#f0fdf4] border border-[#86EFAC]/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {renderIcon(item.iconType)}
              </div>

              {/* Compact Information Block */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#1718DF] font-bold font-sans truncate">
                    {item.category}
                  </span>
                  <span className="text-[9px] font-semibold text-[#16A34A] bg-[#ECFDF5] px-1.5 py-0.2 rounded font-sans shrink-0">
                    {item.badge}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#0E1338] font-sans truncate leading-tight">
                  {item.title}
                </div>
                <div className="text-[11px] text-[#475569] font-sans font-normal truncate leading-tight mt-0.5">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
