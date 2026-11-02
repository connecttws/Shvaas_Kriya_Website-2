"use client";

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'What is sound healing ?',
    answer: "Sound healing is a therapeutic practice that uses sound vibrations to promote relaxation, reduce stress, and support physical and emotional well-being. It's based on the idea that sound frequencies can influence the body's energy, brainwave states, and nervous system. By realigning cellular frequencies with pure harmonic overtones, the body returns to its natural homeostasis."
  },
  {
    question: 'How does sound healing work, and what instruments are used?',
    answer: "Sound healing works by using vibration, frequency, and acoustic resonance to influence your parasympathetic nervous system, shifting brainwave states from active Beta down into restorative Alpha and Theta. In our Dharamshala sanctuary, we utilize authentic 7-metal Tibetan singing bowls forged under full moons, hand-hammered chau & wind gongs, crystal quartz pendulums, Koshi earth/water chimes, and Tibetan tingshas."
  },
  {
    question: 'How long is a typical session?',
    answer: '1 hour to 2 hours, also depends on the therapy you choose. Most individual and couple vibrational sound healing sessions last 60 minutes. Deep on-body sound massages and combined aura cleansing protocols range between 75 to 90 minutes.'
  },
  {
    question: 'Do I need prior experience to try Sound healing?',
    answer: 'No prior experience is necessary to try sound healing. It is a highly beginner-friendly and gently guided practice, requiring you only to lie back comfortably, close your eyes, and be receptive. There are no postures to hold or complex meditation techniques to master.'
  },
  {
    question: 'What can I expect from this session?',
    answer: 'By inducing deep relaxation and a profound meditative theta state, sound healing offers potential benefits including emotional release, a luminous sense of mental lightness, relief from chronic insomnia, release of somatic muscle tightness, and a restored feeling of centered grounding.'
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-[#e2eaf2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f7edf7] border border-[#d8b8d8] text-[#663366] text-xs uppercase tracking-widest mb-3 font-bold shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            Questions & Answers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#27282c] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#52637a] font-serif-elegant italic leading-relaxed">
            Explore quick and helpful responses to guide you through everything you need to know before getting started.
          </p>
        </div>

        {/* Accordion List (Exact Reference Plum Style #663366) */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? 'bg-white border-[#663366] shadow-lg shadow-[#663366]/10'
                    : 'bg-[#663366] hover:bg-[#733b73] border-[#663366] shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className={`w-full py-4 px-6 text-left flex items-center justify-between gap-4 transition-colors ${
                    isOpen ? 'text-[#663366]' : 'text-white'
                  }`}
                >
                  <span className="font-heading text-base sm:text-lg font-bold">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform ${
                      isOpen
                        ? 'bg-[#f7edf7] border-[#d8b8d8] text-[#663366] rotate-180'
                        : 'bg-white/15 border-white/30 text-white'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#475569] font-light leading-relaxed border-t border-[#f0e3f0] animate-in fade-in duration-300">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
