"use client";

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface OfferItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  image: string;
  category: string;
}

const OFFERS: OfferItem[] = [
  {
    id: 'teacher-training',
    num: '01',
    title: 'Sound Healing Teacher Training Course',
    desc: 'Discover a path of inner transformation and self-awakening. Our sound healing course at Moksham Healing is crafted to help you explore the profound power of sound therapy. Learn how vibrations and frequencies can restore balance, enhance clarity, and deepen emotional well-being.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
    category: 'Practitioner Certification'
  },
  {
    id: 'mantra-chanting',
    num: '02',
    title: 'Mantra Chanting with Singing Bowls',
    desc: 'Singing bowls are widely used in different types of spiritual and religious rituals with different mantras. So, mantra chanting with a singing bowl has a very good effect on body, mind, emotions, and it can be used for healing purposes. With sacred vowel acoustics, we activate deep cellular resonance.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop',
    category: 'Spiritual Sound Practice'
  },
  {
    id: 'pendulum-dowsing',
    num: '03',
    title: 'Pendulum Dowsing',
    desc: "Pendulum healing employs the motion of a pendulum to sensitively assess and balance the body's subtle energy fields. This highly effective, gentle technique is instrumental in clearing energetic blockages, restoring internal harmony, and providing robust support for emotional well-being.",
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop',
    category: 'Biofield Diagnosis'
  },
  {
    id: 'energy-scanning',
    num: '04',
    title: 'Energy Body Scanning',
    desc: "Energy healing at Moksham Healings is a gentle practice designed to restore harmony by clearing blockages and balancing the body's natural energy flow. This process works to restore your natural rhythm and awaken your body's ability to heal. It aligns your energy to dissolve blockages and revitalize mind, body, and soul.",
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
    category: 'Holistic Restoration'
  }
];

interface OffersShowcaseProps {
  onSelectOffer: (id: string) => void;
}

export const OffersShowcase: React.FC<OffersShowcaseProps> = ({ onSelectOffer }) => {
  const [activeId, setActiveId] = useState<string>('teacher-training');
  const activeOffer = OFFERS.find(o => o.id === activeId) || OFFERS[0];

  return (
    <section className="py-24 bg-gradient-to-b from-[#f8fafd] via-[#edf4fa] to-[#f4f8fc] relative overflow-hidden border-t border-[#e2eaf2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-[#663366] font-bold mb-3">
            Holistic Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#27282c] tracking-tight">
            Moksham Healings Offers You
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Numbered Interactive Rows */}
          <div className="lg:col-span-7 space-y-4">
            {OFFERS.map((offer) => {
              const isSelected = offer.id === activeId;
              return (
                <div
                  key={offer.id}
                  onClick={() => setActiveId(offer.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#663366] shadow-xl shadow-[#663366]/10 translate-x-2'
                      : 'bg-white/80 border-[#e2edf6] hover:border-[#663366]/40 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Number Pill */}
                      <span
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold shrink-0 border transition-colors ${
                          isSelected
                            ? 'bg-[#663366] text-white border-[#663366]'
                            : 'bg-[#f1f6fb] text-[#64748b] border-[#d8e3ed]'
                        }`}
                      >
                        {offer.num}
                      </span>

                      <div>
                        <h3
                          className={`text-xl sm:text-2xl font-heading mb-2 transition-colors ${
                            isSelected ? 'text-[#663366]' : 'text-[#27282c]'
                          }`}
                        >
                          {offer.title}
                        </h3>

                        {isSelected && (
                          <p className="text-xs sm:text-sm text-[#52637a] font-light leading-relaxed mt-2 animate-in fade-in duration-300">
                            {offer.desc}
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectOffer(offer.id);
                      }}
                      className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                        isSelected
                          ? 'bg-[#663366] border-[#663366] text-white hover:scale-105 shadow-md'
                          : 'border-[#d8e3ed] text-[#64748b] hover:text-[#663366]'
                      }`}
                      title="View details & reserve"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Visual Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="w-full h-[460px] sm:h-[520px] rounded-t-full rounded-b-3xl overflow-hidden border-2 border-[#d8e3ed] shadow-2xl relative bg-[#f1f6fb]">
                <div
                  key={activeOffer.id}
                  className="w-full h-full relative animate-in fade-in zoom-in-95 duration-400"
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: `url(${activeOffer.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/75 via-transparent to-transparent opacity-80" />

                  {/* Arched Window Tag */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 border border-[#e2edf6] shadow-xl">
                    <span className="text-[10px] uppercase tracking-widest text-[#663366] font-bold block mb-1">
                      {activeOffer.category}
                    </span>
                    <div className="text-sm font-heading font-bold text-[#1e293b] mb-2">
                      {activeOffer.title}
                    </div>
                    <button
                      onClick={() => onSelectOffer(activeOffer.id)}
                      className="w-full py-2.5 bg-[#663366] hover:bg-[#7b3e7b] text-white rounded-xl text-xs uppercase tracking-wider font-semibold transition flex items-center justify-center gap-1.5 shadow-md active:scale-95"
                    >
                      <span>Explore Modality</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#ffd875]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
