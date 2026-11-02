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
          <div className="w-12 h-12 rounded-full border-2 border-[#663366] border-t-transparent animate-spin mx-auto" />
          <p className="text-xs uppercase tracking-widest text-[#663366] font-bold">
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
    <div className="min-h-screen bg-[#f6f9fc] text-[#1e293b] flex flex-col selection:bg-[#663366]/20 selection:text-[#4a1e4a]">
      {/* Top Fixed Header with Signature Plum #663366 Branding */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main className="flex-1">
        {/* ===================== HERO SECTION (White & Serene Bluish Himalayan Mist) ===================== */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-gradient-to-b from-[#e8f1fb] via-[#f3f7fc] to-[#f8fafd]">
          {/* Subtle Ambient Celestial Mist Glows (Hardware-accelerated CSS radial gradients) */}
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] pointer-events-none rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(216, 232, 250, 0.6) 0%, rgba(224, 239, 255, 0.25) 45%, transparent 70%)',
            }}
          />
          <div
            className="absolute top-10 left-10 w-96 h-96 pointer-events-none rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(237, 228, 245, 0.45) 0%, transparent 70%)',
            }}
          />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Hero Main Content with Reveal Animation */}
            <RevealOnScroll duration={0.9} yOffset={24}>
              {/* Top Sacred Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-[#d6e3f0] text-[#663366] text-xs uppercase tracking-[0.25em] mb-8 shadow-sm animate-ethereal font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#663366]" />
                <span>Sound Healing & Spiritual Wellness Center • Dharamshala</span>
              </div>

              {/* Exact Reference Headline from https://www.mokshamhealings.com */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-elsie font-normal text-[#27282c] tracking-tight leading-[1.1] mb-3 max-w-4xl mx-auto">
                Restore Your Energy Through Sound
              </h1>

              {/* Founder Signature (Exact from reference site) */}
              <div className="text-xl sm:text-2xl font-elsie text-[#663366] mb-6 font-semibold">
                ~ Sibani Panigrahi
              </div>

              {/* Sub-headline from Reference Site */}
              <p className="text-base sm:text-lg md:text-xl text-[#52637a] font-serif-elegant italic max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Experience deep relaxation. Harmonize your mind, body, and spirit through therapeutic sound frequencies that promote balance in Forsyth Ganj & Bhagsunag.
              </p>

              {/* Dual Hero CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <button
                  onClick={() => handleOpenBooking()}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#663366] hover:bg-[#7b3e7b] text-white font-bold text-xs uppercase tracking-[0.18em] active:scale-95 transition-all shadow-xl shadow-[#663366]/20 flex items-center justify-center gap-2"
                >
                  <span>Book Sanctuary Session</span>
                  <ArrowRight className="w-4 h-4 text-[#ffd875]" />
                </button>

                <button
                  onClick={handleStrikeHeroSample}
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/95 hover:bg-[#f1f6fb] text-[#27282c] border border-[#d8e3ed] text-xs uppercase tracking-[0.18em] font-semibold transition-all flex items-center justify-center gap-2 shadow-sm group"
                  title="Play 528Hz Tibetan Singing Bowl Strike"
                >
                  <div className="w-6 h-6 rounded-full bg-[#f7edf7] border border-[#edd7ed] flex items-center justify-center text-[#663366] group-hover:scale-110 transition-transform">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  <span>Strike 528Hz Miracle Bowl</span>
                </button>
              </div>
            </RevealOnScroll>

            {/* Key Sanctuary Pillars Bar with Staggered Slide In */}
            <RevealOnScroll delay={0.2} duration={0.8} yOffset={20}>
              <div className="pt-8 border-t border-[#d8e3ed] grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto">
                <div className="space-y-1">
                  <div className="text-[11px] uppercase tracking-wider text-[#663366] font-bold">Location</div>
                  <div className="text-sm font-heading font-bold text-[#27282c]">Bhagsunag, HP</div>
                  <div className="text-[11px] text-[#64748b] font-light">Near Bhagsu Taxi Stand</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] uppercase tracking-wider text-[#663366] font-bold">Founder</div>
                  <div className="text-sm font-heading font-bold text-[#27282c]">Sibani Panigrahi</div>
                  <div className="text-[11px] text-[#64748b] font-light">Master Sound Healer</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] uppercase tracking-wider text-[#663366] font-bold">Acoustics</div>
                  <div className="text-sm font-heading font-bold text-[#27282c]">7-Metal Singing Bowls</div>
                  <div className="text-[11px] text-[#64748b] font-light">Full Moon Consecrated</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] uppercase tracking-wider text-[#663366] font-bold">Offerings</div>
                  <div className="text-sm font-heading font-bold text-[#27282c]">Certification Courses</div>
                  <div className="text-[11px] text-[#64748b] font-light">International Accreditation</div>
                </div>
              </div>
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7edf7] border border-[#d8b8d8] text-[#663366] text-xs uppercase tracking-widest mb-3 font-bold shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  Interactive 3D Sound Altar
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading text-[#27282c] tracking-tight mb-3">
                  Experience The Singing Bowl In Real-Time
                </h2>
                <p className="text-sm text-[#52637a] font-serif-elegant italic leading-relaxed">
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

        {/* ===================== MOKSHAM HEALINGS OFFERS YOU (Interactive 4-Part Showcase) ===================== */}
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
          <section className="py-20 relative bg-gradient-to-b from-[#f1f6fb] to-white border-t border-[#e2eaf2]">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#27282c] mb-4">
                Begin Your Journey to Inner Resonance
              </h2>
              <p className="text-sm sm:text-base text-[#52637a] font-serif-elegant italic max-w-xl mx-auto mb-8 leading-relaxed">
                Whether you are passing through Himachal Pradesh or seeking profound personal healing, our sanctuary doors in Bhagsunag are open to receive you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => handleOpenBooking()}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#663366] hover:bg-[#7b3e7b] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition"
                >
                  Schedule A Private Session
                </button>
                <a
                  href="https://wa.me/917208936359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-[#f1f6fb] text-[#27282c] border border-[#d8e3ed] text-xs uppercase tracking-wider font-semibold transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Direct WhatsApp Inquiries</span>
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
