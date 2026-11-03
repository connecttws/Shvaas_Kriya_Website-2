"use client";

import React from 'react';
import { Star, Quote, CheckCircle, Heart, MapPin } from 'lucide-react';

interface Review {
  name: string;
  location: string;
  session: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export const ReviewsSection: React.FC = () => {
  const reviews: Review[] = [
    {
      name: 'Elena Rostova',
      location: 'Barcelona, Spain',
      session: 'Individual Sound Healing (60 mins)',
      rating: 5,
      date: 'October 2026',
      comment: 'I came to Rishikesh carrying months of severe burnout and insomnia from corporate work. When the master placed the large bronze singing bowl on my chest and struck it, I felt tears flowing uncontrollably as all the frozen grief dissolved. That night I slept 9 uninterrupted hours for the first time in two years.',
      verified: true,
    },
    {
      name: 'Julian & Sarah Vance',
      location: 'Vancouver, Canada',
      session: 'Couple Harmonic Sound Therapy',
      rating: 5,
      date: 'September 2026',
      comment: 'A profoundly sacred experience for our 10th anniversary. The dual singing bowls tuned to the heart chakra (639Hz) created an acoustic embrace that felt out of this realm. The quiet tea ceremony in the Rishikesh riverside sanctuary afterward cemented an unforgettable memory.',
      verified: true,
    },
    {
      name: 'Dr. Aarav Mehta',
      location: 'Mumbai, India',
      session: 'Seven Chakra Alignment & Sound Therapy',
      rating: 5,
      date: 'August 2026',
      comment: 'As a neuroscientist and longtime meditator, I was astonished by the precision with which the frequencies triggered deep theta brainwave states. You can genuinely feel the physical waves reorganizing tension in your spine and nervous system. Outstanding authenticity.',
      verified: true,
    },
    {
      name: 'Chiara Moretti',
      location: 'Milan, Italy',
      session: 'Sound Healing Teacher Training Certification',
      rating: 5,
      date: 'July 2026',
      comment: 'Completing the teacher training at Shvaas Kriya Retreat in Rishikesh was life-altering. The master teachers do not merely teach you how to hit bowls; they teach you how to listen with your subtle field, how to hold space for others, and how to heal. I now lead sound baths back home in Italy with absolute confidence.',
      verified: true,
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-[#f4f8fc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#86EFAC] text-[#16A34A] text-xs uppercase tracking-[0.2em] mb-4 font-bold shadow-sm font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
            <Heart className="w-3.5 h-3.5 text-[#16A34A]" />
            Seeker Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#0E1338] tracking-tight mb-4">
            Words from Realigned Souls
          </h2>
          <p className="text-base sm:text-lg text-[#1E293B] font-sans font-normal leading-relaxed max-w-2xl mx-auto">
            Read authentic impressions from international seekers, yoga practitioners, and travelers who found sanctuary with us in Rishikesh.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-[#CCD6F7]/80 hover:border-[#22C55E]/60 transition-all duration-300 relative group flex flex-col justify-between shadow-md hover:shadow-xl overflow-hidden"
            >
              {/* Top Dual Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1718DF] via-[#22C55E] to-[#1718DF]" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#e5b324]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-[#0E1338] font-sans font-semibold">{rev.date}</span>
                </div>

                <Quote className="w-8 h-8 text-[#1718DF]/20 mb-3" />

                <p className="text-sm sm:text-base text-[#1E293B] font-normal leading-relaxed mb-6 font-sans">
                  &quot;{rev.comment}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-[#edf2f7] flex items-center justify-between font-sans">
                <div>
                  <div className="text-lg font-sans font-bold text-[#0E1338] flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    {rev.verified && (
                      <span title="Verified Guest" className="inline-flex">
                        <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[#334155] font-medium flex items-center gap-1 mt-0.5 font-sans">
                    <MapPin className="w-3.5 h-3.5 text-[#22C55E]" />
                    <span>{rev.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-[#16A34A] bg-[#ECFDF5] px-2.5 py-1 rounded-full border border-[#86EFAC] font-semibold font-sans">
                    {rev.session}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
