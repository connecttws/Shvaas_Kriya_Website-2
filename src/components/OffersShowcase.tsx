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
    id: 'shvaas-sessions',
    num: '01',
    title: 'Shvaas Kriya Sessions — Online & Offline',
    desc: 'Make time to pause, breathe, and reconnect through guided sessions designed to support a more mindful relationship with yourself. Join from wherever you are, or experience the practice in person in Rishikesh.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
    category: 'Guided Practice'
  },
  {
    id: 'shvaas-ttc',
    num: '02',
    title: 'Shvaas Kriya TTC',
    desc: 'Deepen your personal practice and explore the foundations of Shvaas Kriya through a structured teacher training journey. Learn, practise, and grow with intention in Rishikesh.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop',
    category: 'Teacher Training Course'
  },
  {
    id: 'sound-sessions',
    num: '03',
    title: 'Sound Healing Sessions',
    desc: 'Enter a space of deep listening and relaxation through resonant sounds and mindful stillness. Give yourself permission to slow down and simply be.',
    image: 'https://images.unsplash.com/photo-1512290900672-1f55b935b460?q=80&w=800&auto=format&fit=crop',
    category: 'Group & Private Journeys'
  },
  {
    id: 'aqua-sound',
    num: '04',
    title: 'Aqua Sound Healing Sessions',
    desc: 'Experience sound in a unique water-based setting, where water and resonant sound come together to create an immersive moment of calm.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop',
    category: 'Signature Aquatic Immersion'
  },
  {
    id: 'sound-ttc',
    num: '05',
    title: 'Sound Healing TTC',
    desc: 'Explore the art and practice of sound healing, build your understanding of sound instruments, and develop the skills to guide sound experiences for others.',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop',
    category: 'Practitioner Certification'
  }
];

interface OffersShowcaseProps {
  onSelectOffer: (id: string) => void;
}

export const OffersShowcase: React.FC<OffersShowcaseProps> = ({ onSelectOffer }) => {
  const [activeId, setActiveId] = useState<string>('shvaas-sessions');
  const activeOffer = OFFERS.find(o => o.id === activeId) || OFFERS[0];

  return (
    <section className="py-24 bg-gradient-to-b from-[#f8fafd] via-[#edf4fa] to-[#f4f8fc] relative overflow-hidden border-t border-[#e2eaf2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="offers" className="mb-14 scroll-mt-24">
          <div className="text-xs uppercase tracking-[0.25em] text-[#1718DF] font-bold mb-3">
            Explore Our Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#27282c] tracking-tight">
            Experiences that meet you where you are.
          </h2>
          <p className="text-sm sm:text-base text-[#1e293b] font-serif-elegant leading-relaxed mt-2 max-w-2xl font-normal">
            Find the session, retreat, or learning journey that feels right for you.
          </p>
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
                      ? 'bg-white border-[#1718DF] shadow-xl shadow-[#1718DF]/10 translate-x-2'
                      : 'bg-white/80 border-[#e2edf6] hover:border-[#1718DF]/40 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Number Pill */}
                      <span
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold shrink-0 border transition-colors ${
                          isSelected
                            ? 'bg-[#1718DF] text-white border-[#1718DF]'
                            : 'bg-[#f1f6fb] text-[#64748b] border-[#d8e3ed]'
                        }`}
                      >
                        {offer.num}
                      </span>

                      <div>
                        <h3
                          className={`text-xl sm:text-2xl font-heading mb-2 transition-colors ${
                            isSelected ? 'text-[#1718DF]' : 'text-[#27282c]'
                          }`}
                        >
                          {offer.title}
                        </h3>

                        {isSelected && (
                          <p className="text-xs sm:text-sm text-[#1e293b] font-normal leading-relaxed mt-2 animate-in fade-in duration-300">
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
                          ? 'bg-[#1718DF] border-[#1718DF] text-white hover:scale-105 shadow-md'
                          : 'border-[#d8e3ed] text-[#64748b] hover:text-[#1718DF]'
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
                    <span className="text-[10px] uppercase tracking-widest text-[#1718DF] font-bold block mb-1">
                      {activeOffer.category}
                    </span>
                    <div className="text-sm font-heading font-bold text-[#1e293b] mb-2">
                      {activeOffer.title}
                    </div>
                    <button
                      onClick={() => onSelectOffer(activeOffer.id)}
                      className="w-full py-2.5 bg-[#1718DF] hover:bg-[#6882FF] text-white rounded-xl text-xs uppercase tracking-wider font-semibold transition flex items-center justify-center gap-1.5 shadow-md active:scale-95"
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
