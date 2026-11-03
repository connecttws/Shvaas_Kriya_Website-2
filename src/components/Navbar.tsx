"use client";

import React, { useState, useEffect } from 'react';
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
  BookOpen
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

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
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

  const handleToggleAmbient = () => {
    const active = toggleAmbientSound();
    setAmbientPlaying(active);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (targetId.startsWith('#') && targetId.length > 1) {
      e.preventDefault();
      const el = document.querySelector(targetId);
      if (el) {
        const headerOffset = 70;
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
        style={{ transform: 'translateZ(0)' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,box-shadow] duration-300 ${
          isScrolled
            ? 'bg-[#0E1338] shadow-xl py-2.5 sm:py-3 border-b border-[#1718DF]/30'
            : 'bg-[#1718DF] py-3 sm:py-3.5 shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with Sacred Lotus Motif */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 sm:gap-3 group shrink-0"
          >
            {/* Sacred Lotus Icon */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center p-1 sm:p-1.5 transition-transform duration-500 group-hover:scale-105 border border-white/20 shrink-0">
              <svg className="w-full h-full text-white fill-current" viewBox="0 0 24 24">
                <path d="M12 2C12 2 8 8 8 13C8 15.21 9.79 17 12 17C14.21 17 16 15.21 16 13C16 8 12 2 12 2ZM12 15C10.9 15 10 14.1 10 13C10 9.8 12 5.5 12 5.5C12 5.5 14 9.8 14 13C14 14.1 13.1 15 12 15ZM6.5 10C5.5 11.5 5 13.2 5 15C5 18.9 8.1 22 12 22C15.9 22 19 18.9 19 15C19 13.2 18.5 11.5 17.5 10C16.8 11.8 15.5 13.3 14 14.2C14.6 13.2 15 12.1 15 11C15 8.8 13.5 6.5 12 5C10.5 6.5 9 8.8 9 11C9 12.1 9.4 13.2 10 14.2C8.5 13.3 7.2 11.8 6.5 10Z" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-heading text-sm xs:text-base sm:text-xl font-bold tracking-wider text-white group-hover:text-[#ffd875] transition-colors leading-tight">
                Shvaas Kriya Retreat
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.2em] text-[#ffd875] sm:text-[#DFE6FC] uppercase -mt-0.5 font-sans font-semibold">
                Rishikesh & Online
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-[0.12em] text-white/90">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#ffd875] transition-colors py-1"
            >
              Home
            </a>
            <a
              href="#what-is-sound-healing"
              onClick={(e) => handleNavClick(e, '#what-is-sound-healing')}
              className="hover:text-[#ffd875] transition-colors py-1"
            >
              About Us
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#ffd875] transition-colors py-1">
                <span>Our 5 Experiences</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-[#0E1338] rounded-xl shadow-2xl py-2 border border-[#1718DF]/30 animate-in fade-in duration-200">
                  <div className="px-4 py-1 text-[10px] uppercase tracking-widest text-[#ffd875] font-bold">
                    Official Offerings
                  </div>
                  <a
                    href="#offers"
                    onClick={(e) => handleNavClick(e, '#offers')}
                    className="block px-4 py-2 hover:bg-[#1718DF] hover:text-[#ffd875] text-xs font-medium normal-case"
                  >
                    <div className="font-bold">01. Shvaas Kriya Sessions</div>
                    <div className="text-[11px] text-[#DFE6FC]/80">Online & In-Person Studio</div>
                  </a>
                  <a
                    href="#offers"
                    onClick={(e) => handleNavClick(e, '#offers')}
                    className="block px-4 py-2 hover:bg-[#1718DF] hover:text-[#ffd875] text-xs font-medium normal-case"
                  >
                    <div className="font-bold">02. Shvaas Kriya TTC</div>
                    <div className="text-[11px] text-[#DFE6FC]/80">Certified Teacher Training</div>
                  </a>
                  <a
                    href="#therapies"
                    onClick={(e) => handleNavClick(e, '#therapies')}
                    className="block px-4 py-2 hover:bg-[#1718DF] hover:text-[#ffd875] text-xs font-medium normal-case"
                  >
                    <div className="font-bold">03. Sound Healing Sessions</div>
                    <div className="text-[11px] text-[#DFE6FC]/80">Tibetan Bowls & Sacred Gongs</div>
                  </a>
                  <a
                    href="#therapies"
                    onClick={(e) => handleNavClick(e, '#therapies')}
                    className="block px-4 py-2 hover:bg-[#1718DF] hover:text-[#ffd875] text-xs font-medium normal-case"
                  >
                    <div className="font-bold">04. Aqua Sound Healing</div>
                    <div className="text-[11px] text-[#DFE6FC]/80">Floating in Warm Sacred Pool</div>
                  </a>
                  <a
                    href="#training"
                    onClick={(e) => handleNavClick(e, '#training')}
                    className="block px-4 py-2 hover:bg-[#1718DF] hover:text-[#ffd875] text-xs font-medium normal-case"
                  >
                    <div className="font-bold">05. Sound Healing TTC</div>
                    <div className="text-[11px] text-[#DFE6FC]/80">Master Acoustic Healing Certification</div>
                  </a>
                </div>
              )}
            </div>

            <a
              href="#therapies"
              onClick={(e) => handleNavClick(e, '#therapies')}
              className="hover:text-[#ffd875] transition-colors py-1"
            >
              Therapies
            </a>
            <a
              href="#sanctuary"
              onClick={(e) => handleNavClick(e, '#sanctuary')}
              className="hover:text-[#ffd875] transition-colors py-1"
            >
              3D Bowl
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleNavClick(e, '#gallery')}
              className="hover:text-[#ffd875] transition-colors py-1"
            >
              Gallery
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hover:text-[#ffd875] transition-colors py-1"
            >
              Contact Us
            </a>
          </nav>

          {/* Desktop Right Action Elements */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Direct Phone Dial Pill */}
            <a
              href="tel:+917208936359"
              className="w-9 h-9 rounded-full bg-white text-[#1718DF] hover:bg-[#ffd875] transition flex items-center justify-center shadow-md shrink-0"
              title="Call Shvaas Kriya: +91 72089 36359"
            >
              <Phone className="w-4 h-4 fill-current" />
            </a>

            {/* Ambient Sound Drone Toggle */}
            <button
              onClick={handleToggleAmbient}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                ambientPlaying
                  ? 'bg-white/20 border-white text-white'
                  : 'bg-black/15 border-white/20 text-white/80 hover:bg-black/25'
              }`}
              title="Toggle meditative 432Hz ambient sound"
            >
              {ambientPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#ffd875] animate-pulse" />
                  <span className="text-[10px] uppercase tracking-wider">Audio On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="text-[10px] uppercase tracking-wider">Audio</span>
                </>
              )}
            </button>

            {/* Book Now Button */}
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2 rounded-full bg-[#ffd875] hover:bg-[#ffe399] active:scale-95 text-[#0E1338] font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Right Controls (< lg) */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Ambient Sound Drone Quick Button (Visible on mobile) */}
            <button
              onClick={handleToggleAmbient}
              className={`w-8 h-8 rounded-full border transition flex items-center justify-center shrink-0 ${
                ambientPlaying
                  ? 'bg-[#ffd875] border-[#ffd875] text-[#0E1338] shadow-sm'
                  : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
              }`}
              title="Toggle 432 Hz Meditative Audio"
              aria-label="Toggle Meditative Audio"
            >
              {ambientPlaying ? (
                <Volume2 className="w-3.5 h-3.5 animate-pulse" />
              ) : (
                <VolumeX className="w-3.5 h-3.5" />
              )}
            </button>

            {/* Mobile Instant "Book Now" CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="px-3 sm:px-4 py-1.5 rounded-full bg-[#ffd875] hover:bg-[#ffe399] active:scale-95 text-[#0E1338] font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-md flex items-center gap-1 shrink-0 transition"
            >
              <Calendar className="w-3 h-3 text-[#0E1338]" />
              <span>Book</span>
            </button>

            {/* Mobile Hamburger / Close Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white flex items-center justify-center transition-all active:scale-95 shrink-0"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
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
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#0A0E2A]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center p-1 border border-white/20">
                  <svg className="w-full h-full text-white fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C12 2 8 8 8 13C8 15.21 9.79 17 12 17C14.21 17 16 15.21 16 13C16 8 12 2 12 2ZM12 15C10.9 15 10 14.1 10 13C10 9.8 12 5.5 12 5.5C12 5.5 14 9.8 14 13C14 14.1 13.1 15 12 15ZM6.5 10C5.5 11.5 5 13.2 5 15C5 18.9 8.1 22 12 22C15.9 22 19 18.9 19 15C19 13.2 18.5 11.5 17.5 10C16.8 11.8 15.5 13.3 14 14.2C14.6 13.2 15 12.1 15 11C15 8.8 13.5 6.5 12 5C10.5 6.5 9 8.8 9 11C9 12.1 9.4 13.2 10 14.2C8.5 13.3 7.2 11.8 6.5 10Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-white leading-tight">
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
            <div className="flex-1 overflow-y-auto px-5 py-2 space-y-5 overscroll-contain">
              {/* Group 1: 5 Signature Experiences */}
              <div>
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#ffd875] font-bold pb-2 border-b border-white/10">
                  <Sparkles className="w-3.5 h-3.5 text-[#ffd875]" />
                  <span>Our 5 Signature Experiences</span>
                </div>

                <div className="mt-2 space-y-1">
                  <a
                    href="#offers"
                    onClick={(e) => handleNavClick(e, '#offers')}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition group"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="text-[10px] font-bold text-[#ffd875] px-1.5 py-0.5 rounded bg-white/10 mt-0.5">
                        01
                      </span>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#ffd875] transition-colors">
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
                      <span className="text-[10px] font-bold text-[#ffd875] px-1.5 py-0.5 rounded bg-white/10 mt-0.5">
                        02
                      </span>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#ffd875] transition-colors">
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
                      <span className="text-[10px] font-bold text-[#ffd875] px-1.5 py-0.5 rounded bg-white/10 mt-0.5">
                        03
                      </span>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#ffd875] transition-colors">
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
                      <span className="text-[10px] font-bold text-[#ffd875] px-1.5 py-0.5 rounded bg-white/10 mt-0.5">
                        04
                      </span>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#ffd875] transition-colors">
                          Aqua Sound Healing
                        </div>
                        <div className="text-[10px] text-white/60">
                          Floating in Warm Water with Submerged Frequencies
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
                      <span className="text-[10px] font-bold text-[#ffd875] px-1.5 py-0.5 rounded bg-white/10 mt-0.5">
                        05
                      </span>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#ffd875] transition-colors">
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
                    <span>Home (Sanctuary Welcome)</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                  </a>

                  <a
                    href="#what-is-sound-healing"
                    onClick={(e) => handleNavClick(e, '#what-is-sound-healing')}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition text-xs font-semibold text-white/90 hover:text-white"
                  >
                    <span>About Us (Ancient Lineage & Cymatics)</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                  </a>

                  <a
                    href="#therapies"
                    onClick={(e) => handleNavClick(e, '#therapies')}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition text-xs font-semibold text-white/90 hover:text-white"
                  >
                    <span>Sound Healing Therapies (7 Protocols)</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                  </a>

                  <a
                    href="#sanctuary"
                    onClick={(e) => handleNavClick(e, '#sanctuary')}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition text-xs font-semibold text-white/90 hover:text-white"
                  >
                    <span>3D Singing Bowl Altar (Interactive)</span>
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
                    href="#gallery"
                    onClick={(e) => handleNavClick(e, '#gallery')}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition text-xs font-semibold text-white/90 hover:text-white"
                  >
                    <span>Sanctuary Gallery</span>
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
            <div className="p-4 border-t border-white/10 bg-[#0A0E2A] space-y-2.5 shrink-0">
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
