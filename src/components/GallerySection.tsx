"use client";

import React from 'react';
import { Camera, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const photos = [
    {
      title: 'Mindful Breath & Presence',
      caption: 'Conscious breathwork sessions overlooking the tranquil Himalayan valleys',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1000&auto=format&fit=crop',
      span: 'col-span-1 row-span-1',
    },
    {
      title: 'Sacred Teacher Certification',
      caption: 'Graduates receiving their recognized Shvaas Kriya & Sound Healing certifications',
      image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1000&auto=format&fit=crop',
      span: 'col-span-1 sm:col-span-1 md:row-span-2',
    },
    {
      title: 'Global Seeker Community',
      caption: 'Participants and travelers connecting in Rishikesh by the sacred Ganga',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop',
      span: 'col-span-1 sm:col-span-2 md:col-span-1',
    },
    {
      title: 'Antique 7-Metal Singing Bowls',
      caption: 'Hand-hammered full moon bowls and consecrated acoustic instruments',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop',
      span: 'col-span-1 md:row-span-2',
    },
    {
      title: 'Open Sky Himalayan Sound Bath',
      caption: 'Rooftop vibrational sessions facing the sacred river and mountain vistas',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop',
      span: 'col-span-1',
    },
    {
      title: 'Aqua Sound Immersion',
      caption: 'Weightless aquatic sound therapy carrying profound cellular stillness',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1000&auto=format&fit=crop',
      span: 'col-span-1',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-[#1718DF] to-[#0E1338] relative overflow-hidden text-white">
      {/* Subtle particle shimmer overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#fff] text-xs uppercase tracking-[0.25em] mb-4 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#ffdf85]" />
            Sanctuary Life & Journeys
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-white tracking-tight mb-4">
            Moments of Presence & Healing in Rishikesh
          </h2>
          <p className="text-base sm:text-lg text-[#DFE6FC] font-sans font-normal leading-relaxed">
            Witness the warmth, transformative stillness, and mindful connections forged during our sessions, teacher trainings, and retreats at Shvaas Kriya Retreat.
          </p>
        </div>

        {/* Gallery Grid (Matching reference layout with varied heights and rounded-3xl corners) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`group relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-[#0E1338] min-h-[260px] ${photo.span}`}
            >
              <div
                className="w-full h-full min-h-[260px] bg-cover bg-center transition-transform duration-700 group-hover:scale-108"
                style={{ backgroundImage: `url(${photo.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              <div className="absolute bottom-5 left-5 right-5 text-left transition-transform duration-300 group-hover:-translate-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#ffd875] font-semibold block mb-1">
                  Shvaas Kriya Rishikesh
                </span>
                <h4 className="text-lg font-heading text-white font-bold mb-1">
                  {photo.title}
                </h4>
                <p className="text-xs text-[#DFE6FC] font-light line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
