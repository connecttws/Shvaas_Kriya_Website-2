"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  Volume2,
  VolumeX,
  Menu,
  X,
  Calendar,
  ChevronDown,
  ChevronRight,
  Sparkles,
  MapPin,
  Waves,
  Star
} from 'lucide-react';
import { toggleAmbientSound } from '../utils/audioSynthesizer';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [ambientPlaying, setAmbientPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 25);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Clean up dropdown timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const handleToggleAmbient = () => {
    const active = toggleAmbientSound();
    setAmbientPlaying(active);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (targetId.startsWith('#') && targetId.length > 1) {
      e.preventDefault();
      const el = document.querySelector(targetId);
      if (el) {
        const headerOffset = 72;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
    }
  };

  return (
    <>
      <header
        style={{
          transform: 'translateZ(0)',
          paddingTop: 'max(0.6rem, env(safe-area-inset-top, 0.6rem))',
          paddingLeft: 'env(safe-area-inset-left, 0px)',
          paddingRight: 'env(safe-area-inset-right, 0px)',
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,box-shadow] duration-300 ${
          isScrolled
            ? 'bg-[#0E1338]/95 backdrop-blur-md shadow-xl pb-2.5 sm:pb-3 border-b border-[#1718DF]/30'
            : 'bg-[#1718DF] pb-3 sm:pb-3.5 shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with Official Shvaas Emblem */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0"
          >
            {/* Official Shvaas Circular Logo */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full overflow-hidden shrink-0 transition-transform duration-500 group-hover:scale-105 shadow-md border border-white/25 bg-[#1718DF] flex items-center justify-center">
              <img
                src="/images/shvaas-logo.png"
                alt="Shvaas Kriya Retreat Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col min-w-0">
              <span className="font-sans text-xs xs:text-sm sm:text-base xl:text-lg 2xl:text-xl font-bold tracking-wide sm:tracking-wider text-white group-hover:text-[#ffd875] transition-colors leading-tight truncate">
                Shvaas Kriya Retreat
              </span>
              <span className="text-[7.5px] sm:text-[9px] tracking-[0.18em] sm:tracking-[0.2em] text-[#86EFAC] uppercase -mt-0.5 font-sans font-semibold">
                Rishikesh & Online
              </span>
            </div>
          </a>

          {/* Desktop Navigation (Optimized & Gallery Removed) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-7 text-xs font-semibold uppercase tracking-[0.1em] text-white/90">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#ffd875] transition-colors py-1.5"
            >
              Home
            </a>

            <a
              href="#what-is-sound-healing"
              onClick={(e) => handleNavClick(e, '#what-is-sound-healing')}
              className="hover:text-[#ffd875] transition-colors py-1.5"
            >
              About Us
            </a>

            {/* Experiences Dropdown with Hover Bridge */}
            <div
              className="relative py-1.5"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                className="flex items-center gap-1 hover:text-[#ffd875] transition-colors focus:outline-none"
              >
                <span>5 Experiences</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#ffd875]' : ''
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="bg-[#0E1338] rounded-2xl shadow-2xl py-3 px-2 border border-[#1718DF]/40 backdrop-blur-xl">
                    <div className="px-3 pb-2 pt-1 text-[10px] uppercase tracking-widest text-[#86EFAC] font-bold border-b border-white/10 flex items-center justify-between font-sans">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                        Curated Journeys
                      </span>
                      <Sparkles className="w-3 h-3 text-[#ffd875]" />
                    </div>

                    <div className="mt-1 space-y-0.5">
                      <a
                        href="#offers"
                        onClick={(e) => handleNavClick(e, '#offers')}
                        className="block px-3 py-2 rounded-xl hover:bg-white/10 hover:text-[#ffd875] transition group normal-case"
                      >
                        <div className="font-bold text-xs text-white group-hover:text-[#ffd875] flex items-center gap-1.5 font-sans">
                          <span className="text-[10px] text-[#22C55E] font-mono font-bold">01.</span>
                          <span>Shvaas Kriya Sessions</span>
                        </div>
                        <div className="text-[11px] text-[#DFE6FC]/70 pl-4 font-normal">
                          Pranayama, Breathwork & Presence
                        </div>
                      </a>

                      <a
                        href="#offers"
                        onClick={(e) => handleNavClick(e, '#offers')}
                        className="block px-3 py-2 rounded-xl hover:bg-white/10 hover:text-[#ffd875] transition group normal-case"
                      >
                        <div className="font-bold text-xs text-white group-hover:text-[#ffd875] flex items-center gap-1.5 font-sans">
                          <span className="text-[10px] text-[#22C55E] font-mono font-bold">02.</span>
                          <span>Shvaas Kriya TTC</span>
                        </div>
                        <div className="text-[11px] text-[#DFE6FC]/70 pl-4 font-normal">
                          Certified Breathwork Teacher Training
                        </div>
                      </a>

                      <a
                        href="#therapies"
                        onClick={(e) => handleNavClick(e, '#therapies')}
                        className="block px-3 py-2 rounded-xl hover:bg-white/10 hover:text-[#ffd875] transition group normal-case"
                      >
                        <div className="font-bold text-xs text-white group-hover:text-[#ffd875] flex items-center gap-1.5 font-sans">
                          <span className="text-[10px] text-[#22C55E] font-mono font-bold">03.</span>
                          <span>Sound Healing Sessions</span>
                        </div>
                        <div className="text-[11px] text-[#DFE6FC]/70 pl-4 font-normal">
                          Tibetan Singing Bowls & Sacred Gongs
                        </div>
                      </a>

                      <a
                        href="#therapies"
                        onClick={(e) => handleNavClick(e, '#therapies')}
                        className="block px-3 py-2 rounded-xl hover:bg-white/10 hover:text-[#ffd875] transition group normal-case"
                      >
                        <div className="font-bold text-xs text-white group-hover:text-[#ffd875] flex items-center gap-1.5 font-sans">
                          <span className="text-[10px] text-[#22C55E] font-mono font-bold">04.</span>
                          <span>Aqua Sound Healing</span>
                        </div>
                        <div className="text-[11px] text-[#DFE6FC]/70 pl-4 font-normal">
                          Submerged Frequencies in Warm Sacred Pool
                        </div>
                      </a>

                      <a
                        href="#training"
                        onClick={(e) => handleNavClick(e, '#training')}
                        className="block px-3 py-2 rounded-xl hover:bg-white/10 hover:text-[#ffd875] transition group normal-case"
                      >
                        <div className="font-bold text-xs text-white group-hover:text-[#ffd875] flex items-center gap-1.5 font-sans">
                          <span className="text-[10px] text-[#22C55E] font-mono font-bold">05.</span>
                          <span>Sound Healing TTC</span>
                        </div>
                        <div className="text-[11px] text-[#DFE6FC]/70 pl-4 font-normal">
                          Master Acoustic Practitioner Certification
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#therapies"
              onClick={(e) => handleNavClick(e, '#therapies')}
              className="hover:text-[#ffd875] transition-colors py-1.5"
            >
              Therapies
            </a>

            <a
              href="#retreats"
              onClick={(e) => handleNavClick(e, '#retreats')}
              className="hover:text-[#ffd875] transition-colors py-1.5"
            >
              Retreats
            </a>

            <a
              href="#sanctuary"
              onClick={(e) => handleNavClick(e, '#sanctuary')}
              className="hover:text-[#ffd875] transition-colors py-1.5"
            >
              3D Bowl
            </a>

            <a
              href="#reviews"
              onClick={(e) => handleNavClick(e, '#reviews')}
              className="hover:text-[#ffd875] transition-colors py-1.5"
            >
              Reviews
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hover:text-[#ffd875] transition-colors py-1.5"
            >
              Contact Us
            </a>
          </nav>

          {/* Desktop Right Action Elements */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3.5 shrink-0">
            {/* Direct Phone Dial */}
            <a
              href="tel:+917208936359"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition text-xs font-semibold group font-sans"
              title="Call Shvaas Kriya: +91 72089 36359"
            >
              <Phone className="w-3.5 h-3.5 text-[#ffd875] group-hover:scale-110 transition-transform" />
              <span className="hidden xl:inline text-[11px] font-sans font-medium">
                +91 72089 36359
              </span>
            </a>

            {/* Book Now Button */}
            <button
              onClick={() => onOpenBooking()}
              className="px-4 xl:px-5 py-2 rounded-full bg-[#ffd875] hover:bg-[#ffe399] active:scale-95 text-[#0E1338] font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center gap-1.5 shrink-0 font-sans"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Right Controls (< lg) */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            {/* Quick Call Button */}
            <a
              href="tel:+917208936359"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition active:scale-95 shrink-0"
              title="Call Sanctuary: +91 72089 36359"
              aria-label="Call Sanctuary"
            >
              <Phone className="w-3.5 h-3.5 text-[#ffd875]" />
            </a>

            {/* Mobile Instant "Book" CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="px-3 sm:px-4 py-1.5 rounded-full bg-[#ffd875] hover:bg-[#ffe399] active:scale-95 text-[#0E1338] font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-md flex items-center gap-1 shrink-0 transition font-sans"
            >
              <Calendar className="w-3 h-3 text-[#0E1338]" />
              <span>Book</span>
            </button>

            {/* Mobile Hamburger / Close Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white flex items-center justify-center transition-all active:scale-95 shrink-0"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
            </button>
          </div>
        </div>
      </header>

      {/* ===================== MOBILE DRAWER OVERLAY & SLIDE-OVER SHEET ===================== */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-over Drawer Container */}
          <div className="fixed inset-y-0 right-0 w-full sm:max-w-md bg-[#0E1338] text-white shadow-2xl flex flex-col z-50 border-l border-[#1718DF]/30 animate-in slide-in-from-right duration-300">
            {/* Drawer Top Bar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#0A0E2A] pt-[max(1rem,env(safe-area-inset-top))]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 shadow-md border border-white/25 bg-[#1718DF] flex items-center justify-center">
                  <img
                    src="/images/shvaas-logo.png"
                    alt="Shvaas Kriya Retreat Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-sans text-base font-bold text-white leading-tight">
                    Shvaas Kriya Retreat
                  </h3>
                  <p className="text-[10px] tracking-widest text-[#ffd875] uppercase font-sans font-medium">
                    Rishikesh • Sacred Sanctuary
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition active:scale-95"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Meditative Frequency Sound Card inside drawer */}
            <div className="px-5 pt-3.5 pb-2">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      ambientPlaying ? 'bg-[#ffd875] text-[#0E1338]' : 'bg-white/10 text-white'
                    }`}
                  >
                    {ambientPlaying ? (
                      <Volume2 className="w-4 h-4 animate-pulse" />
                    ) : (
                      <VolumeX className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>432 Hz Healing Sound</span>
                      {ambientPlaying && (
                        <span className="w-2 h-2 rounded-full bg-[#ffd875] animate-ping" />
                      )}
                    </div>
                    <div className="text-[10px] text-white/60">Continuous Tibetan Drone</div>
                  </div>
                </div>

                <button
                  onClick={handleToggleAmbient}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition ${
                    ambientPlaying
                      ? 'bg-[#ffd875] text-[#0E1338]'
                      : 'bg-white/15 text-white hover:bg-white/25'
                  }`}
                >
                  {ambientPlaying ? 'Pause' : 'Play Sound'}
                </button>
              </div>
            </div>

            {/* Scrollable Navigation List */}
            <div className="flex-1 overflow-y-auto px-5 py-2 space-y-5 overscroll-contain [-webkit-overflow-scrolling:touch]">
              {/* Group 1: 5 Signature Experiences */}
              <div>
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#86EFAC] font-bold pb-2 border-b border-white/10 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                  <span>Our 5 Signature Experiences</span>
                </div>

                <div className="mt-2 space-y-1">
                  <a
                    href="#offers"
                    onClick={(e) => handleNavClick(e, '#offers')}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition group"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="text-[10px] font-bold text-[#22C55E] px-1.5 py-0.5 rounded bg-white/10 mt-0.5">
                        01
                      </span>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#ffd875] transition-colors font-sans">
                          Shvaas Kriya Sessions
                        </div>
                        <div className="text-[10px] text-white/60">
                          Breathwork, Pranayama & Meditation
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#ffd875] group-hover:translate-x-0.5 transition" />
                  </a>

                  <a
                    href="#offers"
                    onClick={(e) => handleNavClick(e, '#offers')}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition group"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="text-[10px] font-bold text-[#22C55E] px-1.5 py-0.5 rounded bg-white/10 mt-0.5">
                        02
                      </span>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#ffd875] transition-colors font-sans">
                          Shvaas Kriya TTC
                        </div>
                        <div className="text-[10px] text-white/60">
                          Certified Breathwork Teacher Training
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#ffd875] group-hover:translate-x-0.5 transition" />
                  </a>

                  <a
                    href="#therapies"
                    onClick={(e) => handleNavClick(e, '#therapies')}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition group"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="text-[10px] font-bold text-[#22C55E] px-1.5 py-0.5 rounded bg-white/10 mt-0.5">
                        03
                      </span>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#ffd875] transition-colors font-sans">
                          Sound Healing Sessions
                        </div>
                        <div className="text-[10px] text-white/60">
                          Tibetan Singing Bowls & Sacred Gongs
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#ffd875] group-hover:translate-x-0.5 transition" />
                  </a>

                  <a
                    href="#therapies"
                    onClick={(e) => handleNavClick(e, '#therapies')}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition group"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="text-[10px] font-bold text-[#22C55E] px-1.5 py-0.5 rounded bg-white/10 mt-0.5">
                        04
                      </span>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#ffd875] transition-colors font-sans">
                          Aqua Sound Healing
                        </div>
                        <div className="text-[10px] text-white/60">
                          Floating in Warm Sacred Pool
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#ffd875] group-hover:translate-x-0.5 transition" />
                  </a>

                  <a
                    href="#training"
                    onClick={(e) => handleNavClick(e, '#training')}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition group"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="text-[10px] font-bold text-[#22C55E] px-1.5 py-0.5 rounded bg-white/10 mt-0.5">
                        05
                      </span>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#ffd875] transition-colors font-sans">
                          Sound Healing TTC
                        </div>
                        <div className="text-[10px] text-white/60">
                          Master Acoustic Practitioner Certification
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#ffd875] group-hover:translate-x-0.5 transition" />
                  </a>
                </div>
              </div>

              {/* Group 2: Sanctuary & Navigation */}
              <div>
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#DFE6FC]/70 font-bold pb-2 border-b border-white/10">
                  <Waves className="w-3.5 h-3.5 text-[#DFE6FC]/70" />
                  <span>Sanctuary Navigation</span>
                </div>

                <div className="mt-2 space-y-1">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition text-xs font-semibold text-white/90 hover:text-white"
                  >
                    <span>Home (Welcome)</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                  </a>

                  <a
                    href="#what-is-sound-healing"
                    onClick={(e) => handleNavClick(e, '#what-is-sound-healing')}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition text-xs font-semibold text-white/90 hover:text-white"
                  >
                    <span>About Us (Ancient Lineage & Science)</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                  </a>

                  <a
                    href="#therapies"
                    onClick={(e) => handleNavClick(e, '#therapies')}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition text-xs font-semibold text-white/90 hover:text-white"
                  >
                    <span>Sound Healing Therapies</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                  </a>

                  <a
                    href="#retreats"
                    onClick={(e) => handleNavClick(e, '#retreats')}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition text-xs font-semibold text-white/90 hover:text-white"
                  >
                    <span>Retreats in Rishikesh</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                  </a>

                  <a
                    href="#sanctuary"
                    onClick={(e) => handleNavClick(e, '#sanctuary')}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition text-xs font-semibold text-white/90 hover:text-white"
                  >
                    <span>3D Singing Bowl Altar</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                  </a>

                  <a
                    href="#frequency-tool"
                    onClick={(e) => handleNavClick(e, '#frequency-tool')}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition text-xs font-semibold text-white/90 hover:text-white"
                  >
                    <span>Frequency Diagnostic Tool</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                  </a>

                  <a
                    href="#reviews"
                    onClick={(e) => handleNavClick(e, '#reviews')}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition text-xs font-semibold text-white/90 hover:text-white"
                  >
                    <span>Guest Reviews & Testimonials</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                  </a>

                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition text-xs font-semibold text-white/90 hover:text-white"
                  >
                    <span>Contact Us & Directions</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Fixed Action Footer inside Drawer */}
            <div className="p-4 pb-[max(1.25rem,calc(env(safe-area-inset-bottom)+0.75rem))] border-t border-white/10 bg-[#0A0E2A] space-y-2.5 shrink-0">
              {/* Direct Phone / WhatsApp Button */}
              <a
                href="tel:+917208936359"
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-xs flex items-center justify-center gap-2 transition"
              >
                <Phone className="w-3.5 h-3.5 text-[#ffd875]" />
                <span>Call Sanctuary: +91 72089 36359</span>
              </a>

              {/* Primary Book Session CTA */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-xl bg-[#ffd875] hover:bg-[#ffe399] active:scale-98 text-[#0E1338] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <Calendar className="w-4 h-4 text-[#0E1338]" />
                <span>Book Your Session / Retreat</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-white/60 text-center pt-1">
                <MapPin className="w-3 h-3 text-[#ffd875]" />
                <span>Tapovan, Rishikesh, Uttarakhand</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
