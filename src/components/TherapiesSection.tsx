"use client";

import React, { useState } from 'react';
import { THERAPY_SERVICES, TherapyService, formatDuration } from '../utils/healing';
import { Sparkles, Clock, CheckCircle2, ArrowRight, ChevronRight, X, Calendar } from 'lucide-react';

interface TherapiesSectionProps {
  onSelectTherapy: (serviceId: string) => void;
  currency: 'INR' | 'USD';
  onToggleCurrency: () => void;
}

export const TherapiesSection: React.FC<TherapiesSectionProps> = ({
  onSelectTherapy,
  currency,
  onToggleCurrency,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [modalService, setModalService] = useState<TherapyService | null>(null);

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'individual', label: '1-on-1 & Couples' },
    { id: 'deep_therapy', label: 'Deep Energetic' },
    { id: 'group', label: 'Group Sound Baths' },
    { id: 'training', label: 'Teacher Training' },
  ];

  const filteredServices = THERAPY_SERVICES.filter(service => {
    if (activeCategory === 'all') return true;
    return service.category === activeCategory;
  });

  return (
    <section id="therapies" className="py-24 relative overflow-hidden bg-white">
      {/* Subtle celestial bluish mist glow (High-performance hardware-accelerated radial gradient) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(219, 234, 254, 0.45) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#86EFAC] text-[#16A34A] text-xs uppercase tracking-[0.2em] mb-4 font-bold shadow-sm font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
            Sacred Modalities & Sound Therapies
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#0E1338] tracking-tight mb-4">
            Ancient Himalayan Resonances, Masterfully Applied
          </h2>

          <p className="text-base sm:text-lg text-[#1E293B] font-sans font-normal leading-relaxed max-w-2xl mx-auto">
            Every session at Shvaas Kriya Retreat is tailored to your unique rhythm. Using hand-hammered seven-metal Himalayan bowls and Solfeggio frequencies, we guide your breath and mind into deep restorative stillness.
          </p>

          {/* Category Tabs & Currency Switcher */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#e2edf6] pb-6">
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-gradient-to-r from-[#1718DF] to-[#16A34A] text-white shadow-md'
                      : 'text-[#0E1338] hover:text-[#1718DF] border border-transparent hover:border-[#d8e3ed]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Currency Switcher */}
            <div className="flex items-center gap-2 bg-[#f1f6fb] border border-[#d8e3ed] px-3.5 py-1.5 rounded-full text-xs shadow-sm">
              <span className="text-[#0E1338] font-bold">Display:</span>
              <button
                onClick={onToggleCurrency}
                className="font-bold text-[#1718DF] hover:text-[#0E1338] transition"
              >
                {currency === 'INR' ? '₹ INR (Indian Rupee)' : '$ USD (US Dollar)'}
              </button>
            </div>
          </div>
        </div>

        {/* Therapy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const displayPrice = currency === 'INR' ? `₹${service.priceINR.toLocaleString('en-IN')}` : `$${service.priceUSD}`;

            return (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-white border border-[#e2edf6] hover:border-[#1718DF]/40 transition-all duration-300 p-6 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Photo Container */}
                  <div className="w-full h-44 rounded-2xl overflow-hidden mb-5 relative bg-[#f1f6fb] border border-[#d8e3ed]">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/60 via-transparent to-transparent opacity-60" />

                    {service.highlight && (
                      <span className="absolute top-3 left-3 text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-white text-[#1718DF] border border-[#CCD6F7] font-bold shadow-sm">
                        {service.highlight}
                      </span>
                    )}

                    <span className="absolute bottom-3 right-3 flex items-center gap-1 text-[11px] font-semibold text-white bg-black/50 px-2.5 py-1 rounded-full border border-white/20">
                      <Clock className="w-3 h-3 text-[#ffd875]" />
                      {formatDuration(service.durationMin)}
                    </span>
                  </div>

                  {/* Therapy Details */}
                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#0E1338] group-hover:text-[#1718DF] transition-colors mb-1.5">
                    {service.title}
                  </h3>

                  {service.sanskritSubtitle && (
                    <div className="text-sm font-sans font-bold text-[#1718DF] mb-3 tracking-wide">
                      {service.sanskritSubtitle}
                    </div>
                  )}

                  <p className="text-sm sm:text-base text-[#1E293B] font-sans font-normal leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs uppercase tracking-wider text-[#0E1338] font-bold font-sans">
                      Therapeutic Benefits
                    </div>
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[#0E1338] font-medium font-sans">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-[#edf2f7] flex items-center justify-between font-sans">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#475569] font-bold font-sans">Energy Exchange</div>
                    <div className="text-2xl font-bold font-sans text-[#1718DF]">
                      {displayPrice}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setModalService(service)}
                      className="p-2.5 rounded-xl bg-[#f1f6fb] border border-[#d8e3ed] text-[#334155] hover:text-[#1718DF] hover:bg-white transition"
                      title="View Details"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onSelectTherapy(service.id)}
                      className="px-4 py-2.5 rounded-xl bg-[#1718DF] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#6882FF] active:scale-95 transition shadow-md flex items-center gap-1.5 font-sans"
                    >
                      <span>Reserve</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#ffd875]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Extended Therapy Breakdown */}
        {modalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="max-w-2xl w-full bg-white border border-[#d8e3ed] rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setModalService(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-[#64748b] hover:text-[#1e293b] bg-[#f1f6fb] border border-[#d8e3ed] transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full h-56 rounded-2xl overflow-hidden mb-6 relative">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${modalService.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#ffd875] font-bold block mb-1">
                    Rishikesh Sanctuary Session
                  </span>
                  <h3 className="text-2xl font-sans font-bold text-white">
                    {modalService.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-base text-[#1E293B] font-sans leading-relaxed">
                <p>{modalService.description}</p>

                <div className="p-4 rounded-2xl bg-[#f8fbfe] border border-[#e2edf6] space-y-2">
                  <div className="text-xs uppercase tracking-wider font-bold text-[#1718DF] font-sans">
                    Preparation & Sanctuary Etiquette:
                  </div>
                  <ul className="text-sm space-y-1 text-[#334155] list-disc list-inside font-sans">
                    <li>Wear loose, breathable cotton or natural fiber clothing without metallic buckles.</li>
                    <li>Arrive 10 minutes prior to settle into the energetic stillness of our space.</li>
                    <li>Hydrate well prior to the session; pure cellular hydration enhances acoustic wave propagation.</li>
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#edf2f7] font-sans">
                  <div>
                    <span className="text-xs text-[#475569] font-bold block">Duration: {formatDuration(modalService.durationMin)}</span>
                    <span className="text-2xl font-sans font-bold text-[#1718DF]">
                      {currency === 'INR' ? `₹${modalService.priceINR.toLocaleString('en-IN')}` : `$${modalService.priceUSD}`}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      const id = modalService.id;
                      setModalService(null);
                      onSelectTherapy(id);
                    }}
                    className="px-6 py-3 rounded-xl bg-[#1718DF] hover:bg-[#6882FF] text-white font-bold text-xs uppercase tracking-wider shadow-md transition flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#ffd875]" />
                    <span>Proceed to Book</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
