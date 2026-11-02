"use client";

import React from 'react';
import { Award, Check, MapPin, Calendar, ArrowRight } from 'lucide-react';

interface TeacherTrainingProps {
  onEnroll: () => void;
  currency: 'INR' | 'USD';
}

export const TeacherTraining: React.FC<TeacherTrainingProps> = ({ onEnroll, currency }) => {
  const modules = [
    {
      num: '01',
      title: 'Acoustic Science & The Seven Sacred Metals',
      desc: 'The metallurgy and harmonics of antique Himalayan singing bowls, binaural frequency math, and brainwave entrainment (Beta, Alpha, Theta, Delta).'
    },
    {
      num: '02',
      title: '1-on-1 Clinical Sound Therapy Protocols',
      desc: 'Hands-on training for direct placement on the physical body, spinal alignment, releasing myofascial stress, and on-body massage techniques.'
    },
    {
      num: '03',
      title: 'Aura Scanning & Crystal Pendulum Dowsing',
      desc: 'Subtle biofield diagnosis, identifying energetic blockages, auric tear repair, and boundary protection for healers.'
    },
    {
      num: '04',
      title: 'Gong Baths & Group Sound Immersion Mastery',
      desc: 'Playing techniques for large Chau, Wind, and Symphonic gongs, Koshi chimes, tingshas, and designing transformational group sound journeys.'
    },
  ];

  const upcomingBatches = [
    { dates: 'Nov 18 - Nov 22, 2026', seats: '3 Seats Remaining', status: 'Filling Fast' },
    { dates: 'Dec 08 - Dec 12, 2026', seats: '5 Seats Remaining', status: 'Open' },
    { dates: 'Jan 12 - Jan 16, 2027', seats: '8 Seats Remaining', status: 'Early Bird' },
  ];

  return (
    <section id="training" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Course Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f7edf7] border border-[#d8b8d8] text-[#663366] text-xs uppercase tracking-[0.2em] font-bold shadow-sm">
              <Award className="w-3.5 h-3.5 text-[#663366]" />
              Accredited Himalayan Certification
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#27282c] leading-tight">
              Sound Healing Teacher Training in Dharamshala
            </h2>

            <p className="text-sm sm:text-base text-[#52637a] font-serif-elegant italic leading-relaxed">
              Step into the sacred foothills of the Dhauladhar mountains. Train under master sound practitioners to facilitate profound individual therapies and transcendental group sound baths with authentic Tibetan singing bowls.
            </p>

            <div className="space-y-3 pt-2">
              {modules.map((m) => (
                <div
                  key={m.num}
                  className="p-4 rounded-2xl bg-[#f8fbfe] border border-[#e2edf6] hover:border-[#663366]/40 transition flex gap-4 items-start shadow-sm"
                >
                  <span className="font-heading font-bold text-sm text-[#663366] bg-[#f7edf7] px-2.5 py-1 rounded-xl border border-[#edd7ed] shrink-0">
                    {m.num}
                  </span>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-[#27282c] mb-1">
                      {m.title}
                    </h4>
                    <p className="text-xs text-[#52637a] leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                <Check className="w-4 h-4 text-[#663366]" />
                <span>Practitioner Certificate</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                <Check className="w-4 h-4 text-[#663366]" />
                <span>Small Batch (Max 8)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                <Check className="w-4 h-4 text-[#663366]" />
                <span>Lifetime Mentorship</span>
              </div>
            </div>
          </div>

          {/* Right Column: Enrollment Card & Batches */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-b from-white to-[#f4f8fc] border border-[#d8e3ed] p-6 sm:p-8 shadow-2xl relative">
              <div className="absolute -top-3 right-6 bg-[#663366] text-white font-bold text-[10px] tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                Bhagsunag Sanctuary
              </div>

              <div className="flex items-center gap-2 text-xs text-[#64748b] mb-2 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#663366]" />
                <span>Forsyth Ganj & Bhagsunag, McLeod Ganj</span>
              </div>

              <h3 className="text-xl font-heading text-[#27282c] mb-1">
                5-Day Intensive Sound Immersion
              </h3>
              <p className="text-xs text-[#52637a] mb-6 font-light">
                Complete theoretical and practical clinical immersion with full access to 50+ master singing bowls and symphonic gongs.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-[#e2edf6] mb-6 flex items-center justify-between shadow-sm">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#64748b]">Comprehensive Course Tuition</div>
                  <div className="text-2xl font-heading font-bold text-[#663366]">
                    {currency === 'INR' ? '₹28,000' : '$350 USD'}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-[#27ae60] bg-[#e8f8ee] px-2.5 py-1 rounded-full border border-[#b2e8c2] font-semibold">
                    Cert. Included
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="text-xs uppercase tracking-wider text-[#64748b] font-bold">
                  Upcoming 2026/2027 Batches:
                </div>
                {upcomingBatches.map((b, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white border border-[#e2edf6] flex items-center justify-between text-xs shadow-sm"
                  >
                    <div className="flex items-center gap-2 text-[#334155] font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#663366]" />
                      <span>{b.dates}</span>
                    </div>
                    <span className="text-[10px] text-[#663366] bg-[#f7edf7] px-2.5 py-0.5 rounded-full border border-[#edd7ed] font-semibold">
                      {b.seats}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={onEnroll}
                className="w-full py-3.5 rounded-xl bg-[#663366] hover:bg-[#7b3e7b] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition flex items-center justify-center gap-2"
              >
                <span>Inquire & Reserve Batch Seat</span>
                <ArrowRight className="w-4 h-4 text-[#ffd875]" />
              </button>

              <div className="mt-4 text-center">
                <span className="text-[11px] text-[#64748b]">
                  Have questions? WhatsApp our mentor directly: <a href="https://wa.me/917208936359" target="_blank" rel="noopener noreferrer" className="text-[#663366] font-semibold underline">+91 72089 36359</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
