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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#86EFAC] text-[#16A34A] text-xs uppercase tracking-[0.2em] font-bold shadow-sm font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              <Award className="w-3.5 h-3.5 text-[#16A34A]" />
              Accredited Himalayan Certification
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#0E1338] leading-tight">
              Sound Healing & Shvaas Kriya Teacher Training
            </h2>

            <p className="text-base sm:text-lg text-[#1E293B] font-sans font-normal leading-relaxed">
              Step into the sacred foothills of Rishikesh by the Ganga. Deepen your personal practice and explore the foundations of sound healing and breathwork through structured, certified training journeys.
            </p>

            <div className="space-y-3 pt-2">
              {modules.map((m) => (
                <div
                  key={m.num}
                  className="p-4 rounded-2xl bg-gradient-to-r from-[#f8fbfe] to-[#f4fcf7] border border-[#e2edf6] hover:border-[#22C55E]/40 transition flex gap-4 items-start shadow-sm"
                >
                  <span className="font-heading font-bold text-sm text-[#1718DF] bg-[#EEF0FF] px-2.5 py-1 rounded-xl border border-[#CCD6F7] shrink-0">
                    {m.num}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-[#0E1338] font-sans mb-1">
                      {m.title}
                    </h4>
                    <p className="text-sm sm:text-base text-[#1E293B] font-sans font-normal leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-[#0E1338] font-bold">
                <Check className="w-4 h-4 text-[#22C55E]" />
                <span>Practitioner Certificate</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#0E1338] font-bold">
                <Check className="w-4 h-4 text-[#22C55E]" />
                <span>Small Batch (Max 8)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#0E1338] font-bold">
                <Check className="w-4 h-4 text-[#22C55E]" />
                <span>Lifetime Mentorship</span>
              </div>
            </div>
          </div>

          {/* Right Column: Enrollment Card & Batches */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-b from-white via-[#f7fcf9] to-[#f4f8fc] border border-[#CCD6F7] p-6 sm:p-8 shadow-2xl relative">
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#1718DF] to-[#16A34A] text-white font-bold text-[10px] tracking-widest uppercase px-3.5 py-1 rounded-full shadow-md font-sans">
                Rishikesh Sanctuary
              </div>

              <div className="flex items-center gap-2 text-xs text-[#0E1338] mb-2 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>Tapovan Riverside Sanctuary, Rishikesh</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading text-[#0E1338] mb-1">
                Intensive Sound & Breath Immersion
              </h3>
              <p className="text-sm sm:text-base text-[#1E293B] font-sans font-normal mb-6 leading-relaxed">
                Complete theoretical and practical clinical immersion with full access to master singing bowls, pranayama anatomy, and personal mentorship.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-[#e2edf6] mb-6 flex items-center justify-between shadow-sm">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#0E1338] font-bold font-sans">Comprehensive Course Tuition</div>
                  <div className="text-2xl font-heading font-bold text-[#1718DF]">
                    {currency === 'INR' ? '₹28,000' : '$350 USD'}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#16A34A] bg-[#ECFDF5] px-3 py-1 rounded-full border border-[#86EFAC] font-semibold font-sans">
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
                      <Calendar className="w-3.5 h-3.5 text-[#1718DF]" />
                      <span>{b.dates}</span>
                    </div>
                    <span className="text-[10px] text-[#1718DF] bg-[#EEF0FF] px-2.5 py-0.5 rounded-full border border-[#CCD6F7] font-semibold">
                      {b.seats}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={onEnroll}
                className="w-full py-3.5 rounded-xl bg-[#1718DF] hover:bg-[#6882FF] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition flex items-center justify-center gap-2"
              >
                <span>Inquire & Reserve Batch Seat</span>
                <ArrowRight className="w-4 h-4 text-[#ffd875]" />
              </button>

              <div className="mt-4 text-center">
                <span className="text-[11px] text-[#64748b]">
                  Have questions? WhatsApp our mentor directly: <a href="https://wa.me/917208936359" target="_blank" rel="noopener noreferrer" className="text-[#1718DF] font-semibold underline">+91 72089 36359</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
