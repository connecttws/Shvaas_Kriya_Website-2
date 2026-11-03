"use client";

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Where do Shvaas Kriya retreats take place?',
    answer: 'Retreats are curated with selected hospitality partners and spaces in and around Rishikesh. The venue is shared for each retreat.'
  },
  {
    question: 'Are Shvaas Kriya sessions available online and offline?',
    answer: 'Yes. Both online and in-person options are offered, subject to the current schedule.'
  },
  {
    question: 'What is the difference between Shvaas Kriya TTC and Sound Healing TTC?',
    answer: 'They are separate training offerings. Course details, curriculum, duration, and outcomes are provided on their respective training overviews.'
  },
  {
    question: 'What is Aqua Sound Healing?',
    answer: 'It is a unique water-based sound experience where water and resonant sound come together to create an immersive moment of calm. Review specific session details for format, venue, and safety.'
  },
  {
    question: 'What is included in a retreat?',
    answer: 'Inclusions vary by package. Each retreat schedule lists confirmed accommodation, sattvic meals, guided breathwork, sound healing sessions, local Ganga excursions, and transfers.'
  },
  {
    question: 'How do I book or enquire?',
    answer: 'Use the booking form on this site, reach out directly on WhatsApp, or send an enquiry to our Rishikesh team for current schedules, availability, and next steps.'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF0FF] border border-[#CCD6F7] text-[#1718DF] text-xs uppercase tracking-widest mb-3 font-bold shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            Questions & Answers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#27282c] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#1e293b] font-serif-elegant leading-relaxed font-normal">
            Explore quick and helpful responses to guide you through everything you need to know before getting started.
          </p>
        </div>

        {/* Accordion List (Exact Reference Shvaas Blue Style #1718DF) */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? 'bg-white border-[#1718DF] shadow-lg shadow-[#1718DF]/10'
                    : 'bg-[#1718DF] hover:bg-[#6882FF] border-[#1718DF] shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className={`w-full py-4 px-6 text-left flex items-center justify-between gap-4 transition-colors ${
                    isOpen ? 'text-[#1718DF]' : 'text-white'
                  }`}
                >
                  <span className="font-heading text-base sm:text-lg font-bold">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform ${
                      isOpen
                        ? 'bg-[#EEF0FF] border-[#CCD6F7] text-[#1718DF] rotate-180'
                        : 'bg-white/15 border-white/30 text-white'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#1e293b] font-normal leading-relaxed border-t border-[#DFE6FC] animate-in fade-in duration-300">
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
