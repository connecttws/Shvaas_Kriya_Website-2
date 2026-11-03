"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '../components/Navbar';
import { WhatIsSoundHealing } from '../components/WhatIsSoundHealing';
import { OffersShowcase } from '../components/OffersShowcase';
import { TherapiesSection } from '../components/TherapiesSection';
import { FrequencyDiagnostic } from '../components/FrequencyDiagnostic';
import { TeacherTraining } from '../components/TeacherTraining';
import { GallerySection } from '../components/GallerySection';
import { ReviewsSection } from '../components/ReviewsSection';
import { FAQSection } from '../components/FAQSection';
import { BookingModal } from '../components/BookingModal';
import { SanctuaryTickerCarousel } from '../components/SanctuaryTickerCarousel';
import { Footer } from '../components/Footer';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { Sparkles, ArrowRight, Play } from 'lucide-react';
import { playSingingBowlStrike } from '../utils/audioSynthesizer';

// Dynamically load WebGL Three.js Singing Bowl with SSR disabled to ensure zero build/hydration errors
const ThreeSingingBowl = dynamic(
  () => import('../components/ThreeSingingBowl').then((mod) => mod.ThreeSingingBowl),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[560px] rounded-3xl bg-[#f1f6fb] flex items-center justify-center border border-[#e2eaf2]">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 rounded-full border-2 border-[#1718DF] border-t-transparent animate-spin mx-auto" />
          <p className="text-xs uppercase tracking-widest text-[#1718DF] font-bold">
            Awakening 3D Tibetan Singing Bowl...
          </p>
        </div>
      </div>
    ),
  }
);

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [activeBowlChakra, setActiveBowlChakra] = useState<string>('solar');

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceForBooking(serviceId);
    setIsBookingOpen(true);
  };

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'INR' ? 'USD' : 'INR'));
  };

  const handleStrikeHeroSample = () => {
    playSingingBowlStrike({
      frequency: 528,
      duration: 6.0,
      volume: 0.75,
      intensity: 0.85,
    });
  };

  return (
    <div className="min-h-screen bg-[#f6f9fc] text-[#1e293b] flex flex-col selection:bg-[#1718DF]/20 selection:text-[#0E1338]">
      {/* Top Fixed Header with Signature Shvaas Blue #1718DF Branding */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main className="flex-1">
        {/* ===================== HERO SECTION (White, Royal Blue & Baby-Green Mist) ===================== */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#e8f1fb] via-[#f3f7fc] to-[#f8fafd]">
          {/* Subtle Ambient Celestial Blue & Baby-Green Mist Glows */}
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[950px] h-[550px] pointer-events-none rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, rgba(23, 24, 223, 0.08) 40%, rgba(224, 239, 255, 0.25) 60%, transparent 75%)',
            }}
          />
          <div
            className="absolute top-10 right-10 w-96 h-96 pointer-events-none rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.14) 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute top-20 left-10 w-80 h-80 pointer-events-none rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(23, 24, 223, 0.08) 0%, transparent 70%)',
            }}
          />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Hero Main Content with Reveal Animation */}
            <RevealOnScroll duration={0.9} yOffset={24}>
              {/* Top Sacred Badge with Baby Green Pulse */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-[#86EFAC]/80 text-[#1718DF] text-xs uppercase tracking-[0.2em] mb-8 shadow-sm animate-ethereal font-bold font-sans">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse shrink-0" />
                <span>Rishikesh & Online Sanctuary • Breathe · Listen · Reconnect</span>
                <Sparkles className="w-3.5 h-3.5 text-[#1718DF]" />
              </div>

              {/* Verified Headline from Shvaas Kriya Retreat Client Brief */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#27282c] tracking-tight leading-[1.1] mb-3 max-w-4xl mx-auto">
                Welcome to Shvaas Kriya Retreat
              </h1>

              {/* Sub-headline - Clean Non-Italic Font */}
              <div className="text-xl sm:text-2xl md:text-3xl font-serif text-[#1718DF] mb-6 font-medium tracking-tight">
                A Space to Reconnect Through Breath, Sound & Stillness
              </div>

              {/* Sub-copy from Client Brief - High Contrast & Dark Legibility */}
              <p className="text-base sm:text-lg md:text-xl text-[#0E1338] font-sans font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                Step away from the noise of everyday life and make room for yourself. Explore mindful sessions, soulful retreats in Rishikesh, and learning journeys rooted in breath, sound, and presence.
              </p>

              {/* Dual Hero CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <button
                  onClick={() => handleOpenBooking()}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1718DF] hover:bg-[#6882FF] text-white font-bold text-xs uppercase tracking-[0.18em] active:scale-95 transition-all shadow-xl shadow-[#1718DF]/20 flex items-center justify-center gap-2"
                >
                  <span>Explore Our Experiences</span>
                  <ArrowRight className="w-4 h-4 text-[#ffd875]" />
                </button>

                <button
                  onClick={handleStrikeHeroSample}
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/95 hover:bg-[#f1f6fb] text-[#27282c] border border-[#d8e3ed] hover:border-[#22C55E] text-xs uppercase tracking-[0.18em] font-semibold transition-all flex items-center justify-center gap-2 shadow-sm group"
                  title="Play 528Hz Tibetan Singing Bowl Strike"
                >
                  <div className="w-6 h-6 rounded-full bg-[#EEF0FF] border border-[#CCD6F7] flex items-center justify-center text-[#1718DF] group-hover:scale-110 transition-transform">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  <span>Strike 528Hz Miracle Bowl</span>
                </button>
              </div>
            </RevealOnScroll>

            {/* Moving Carousel for Key Sanctuary Pillars with Blue & Baby-Green Shades */}
            <RevealOnScroll delay={0.2} duration={0.8} yOffset={20}>
              <SanctuaryTickerCarousel />
            </RevealOnScroll>
          </div>
        </section>

        {/* ===================== WHAT IS SOUND HEALING? (Reference Section with Rotating Badge) ===================== */}
        <RevealOnScroll>
          <WhatIsSoundHealing onLearnMore={() => handleOpenBooking()} />
        </RevealOnScroll>

        {/* ===================== 3D SINGING BOWL SANCTUARY (Optimized Three.js WebGL Altar) ===================== */}
        <section id="sanctuary" className="py-20 relative bg-gradient-to-b from-[#f8fafd] to-[#edf4fa] border-t border-[#e2eaf2]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF0FF] border border-[#CCD6F7] text-[#1718DF] text-xs uppercase tracking-widest mb-3 font-bold shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  Interactive 3D Sound Altar
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#0E1338] tracking-tight mb-3">
                  Experience The Singing Bowl In Real-Time
                </h2>
                <p className="text-base text-[#0E1338] font-sans font-medium leading-relaxed max-w-2xl mx-auto">
                  Interact with our procedurally crafted Tibetan bronze vessel. Strike the bowl, adjust the Solfeggio frequency to match any of the seven chakras, and feel the visual and acoustic resonance ripple outwards.
                </p>
              </div>
            </RevealOnScroll>

            {/* 3D WebGL Canvas Component (Equipped with Viewport IntersectionObserver) */}
            <ThreeSingingBowl
              activeChakraId={activeBowlChakra}
              onChakraSelect={(id) => setActiveBowlChakra(id)}
            />
          </div>
        </section>

        {/* ===================== SHVAAS KRIYA EXPERIENCES (Interactive 5-Part Showcase) ===================== */}
        <RevealOnScroll>
          <OffersShowcase
            onSelectOffer={(id) => {
              if (id === 'teacher-training') {
                handleOpenBooking('teacher-training-certification');
              } else {
                handleOpenBooking('individual-sound-healing');
              }
            }}
          />
        </RevealOnScroll>

        {/* ===================== THERAPIES & MODALITIES ===================== */}
        <RevealOnScroll>
          <TherapiesSection
            onSelectTherapy={handleOpenBooking}
            currency={currency}
            onToggleCurrency={handleToggleCurrency}
          />
        </RevealOnScroll>

        {/* ===================== PENDULUM DOWSING & FREQUENCY DIAGNOSTIC ENGINE ===================== */}
        <RevealOnScroll>
          <FrequencyDiagnostic
            onBookRecommended={handleOpenBooking}
            onPreviewChakraInBowl={(chakraId) => {
              setActiveBowlChakra(chakraId);
              const el = document.getElementById('sanctuary');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </RevealOnScroll>

        {/* ===================== TEACHER TRAINING CERTIFICATION ===================== */}
        <RevealOnScroll>
          <TeacherTraining
            onEnroll={() => handleOpenBooking('teacher-training-certification')}
            currency={currency}
          />
        </RevealOnScroll>

        {/* ===================== GALLERY OF SANCTUARY LIFE (Plum Gradient) ===================== */}
        <RevealOnScroll>
          <GallerySection />
        </RevealOnScroll>

        {/* ===================== REVIEWS & GUEST VOICES ===================== */}
        <RevealOnScroll>
          <ReviewsSection />
        </RevealOnScroll>

        {/* ===================== FREQUENTLY ASKED QUESTIONS (Plum Accordion) ===================== */}
        <RevealOnScroll>
          <FAQSection />
        </RevealOnScroll>

        {/* ===================== SACRED CALL TO AWAKENING BANNER ===================== */}
        <RevealOnScroll>
          <section className="py-20 relative bg-gradient-to-b from-[#f1f6fb] via-[#f7fcf8] to-white border-t border-[#e2eaf2] overflow-hidden">
            {/* Ambient Dual-Tone Blue & Baby Green Glows */}
            <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-[#22C55E]/10 pointer-events-none blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#1718DF]/10 pointer-events-none blur-3xl" />

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#86EFAC] text-[#16A34A] text-xs uppercase tracking-[0.2em] mb-4 font-bold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                Sanctuary Invitation
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#0E1338] mb-4">
                Come to Rishikesh. Leave a Little More Connected.
              </h2>
              <p className="text-base sm:text-lg text-[#1E293B] font-sans font-normal max-w-xl mx-auto mb-8 leading-relaxed">
                Step away from your routine and spend time with mindful movement, soothing sound, nourishing food, and the natural beauty of Rishikesh.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => handleOpenBooking()}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1718DF] hover:bg-[#6882FF] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition active:scale-95"
                >
                  Book A Session / Retreat
                </button>
                <a
                  href="https://wa.me/917208936359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-md active:scale-95"
                >
                  <span>Chat on WhatsApp (+91 72089 36359)</span>
                </a>
              </div>
            </div>
          </section>
        </RevealOnScroll>
      </main>

      {/* Global Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={selectedServiceForBooking}
        currency={currency}
      />

      {/* Exact Reference Plum Footer */}
      <Footer />
    </div>
  );
}
