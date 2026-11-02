"use client";

import React, { useState, useEffect } from 'react';
import { Phone, Volume2, VolumeX, Menu, X, Calendar, ChevronDown } from 'lucide-react';
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

  const handleToggleAmbient = () => {
    const active = toggleAmbientSound();
    setAmbientPlaying(active);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (targetId.startsWith('#') && targetId.length > 1) {
      e.preventDefault();
      const el = document.querySelector(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
    }
  };

  return (
    <header
      style={{ transform: 'translateZ(0)' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,box-shadow] duration-300 ${
        isScrolled
          ? 'bg-[#522352] shadow-xl py-3 border-b border-[#703370]'
          : 'bg-[#663366] py-3.5 shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Sacred Lotus Motif (Exact from reference site) */}
        <a href="#" className="flex items-center gap-3 group">
          {/* Sacred Lotus Icon */}
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center p-1.5 transition-transform duration-500 group-hover:scale-105 border border-white/20">
            <svg className="w-full h-full text-white fill-current" viewBox="0 0 24 24">
              <path d="M12 2C12 2 8 8 8 13C8 15.21 9.79 17 12 17C14.21 17 16 15.21 16 13C16 8 12 2 12 2ZM12 15C10.9 15 10 14.1 10 13C10 9.8 12 5.5 12 5.5C12 5.5 14 9.8 14 13C14 14.1 13.1 15 12 15ZM6.5 10C5.5 11.5 5 13.2 5 15C5 18.9 8.1 22 12 22C15.9 22 19 18.9 19 15C19 13.2 18.5 11.5 17.5 10C16.8 11.8 15.5 13.3 14 14.2C14.6 13.2 15 12.1 15 11C15 8.8 13.5 6.5 12 5C10.5 6.5 9 8.8 9 11C9 12.1 9.4 13.2 10 14.2C8.5 13.3 7.2 11.8 6.5 10Z"/>
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-heading text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-[#ffd875] transition-colors">
              Moksham Healings
            </span>
            <span className="text-[9px] tracking-[0.2em] text-[#e0c2e0] uppercase -mt-0.5 font-sans">
              Dharamshala, India
            </span>
          </div>
        </a>

        {/* Desktop Navigation (Matching reference website) */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-[0.12em] text-white/90">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#ffd875] transition-colors py-1">
            Home
          </a>
          <a href="#what-is-sound-healing" onClick={(e) => handleNavClick(e, '#what-is-sound-healing')} className="hover:text-[#ffd875] transition-colors py-1">
            About Us
          </a>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#ffd875] transition-colors py-1">
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 w-48 bg-[#4b224b] rounded-xl shadow-2xl py-2 border border-[#7e3f7e] animate-in fade-in duration-200">
                <a
                  href="#therapies"
                  onClick={(e) => handleNavClick(e, '#therapies')}
                  className="block px-4 py-2 hover:bg-[#663366] hover:text-[#ffd875] text-xs font-medium normal-case"
                >
                  Sound Healing
                </a>
                <a
                  href="#frequency-tool"
                  onClick={(e) => handleNavClick(e, '#frequency-tool')}
                  className="block px-4 py-2 hover:bg-[#663366] hover:text-[#ffd875] text-xs font-medium normal-case"
                >
                  Pendulum Dowsing
                </a>
                <a
                  href="#training"
                  onClick={(e) => handleNavClick(e, '#training')}
                  className="block px-4 py-2 hover:bg-[#663366] hover:text-[#ffd875] text-xs font-medium normal-case"
                >
                  Teacher Training
                </a>
              </div>
            )}
          </div>

          <a href="#therapies" onClick={(e) => handleNavClick(e, '#therapies')} className="hover:text-[#ffd875] transition-colors py-1">
            Therapies
          </a>
          <a href="#sanctuary" onClick={(e) => handleNavClick(e, '#sanctuary')} className="hover:text-[#ffd875] transition-colors py-1">
            3D Bowl
          </a>
          <a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="hover:text-[#ffd875] transition-colors py-1">
            Gallery
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-[#ffd875] transition-colors py-1">
            Contact Us
          </a>
        </nav>

        {/* Action Elements: Phone Pill, Sound Toggle, Book Now CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Direct Phone Dial Pill */}
          <a
            href="tel:+917208936359"
            className="w-9 h-9 rounded-full bg-white text-[#663366] hover:bg-[#ffd875] transition flex items-center justify-center shadow-md"
            title="Call Dharamshala Sanctuary: +91 72089 36359"
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
            title="Toggle meditative ambient sound"
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
            className="px-5 py-2 rounded-full bg-[#ffd875] hover:bg-[#ffe399] active:scale-95 text-[#3b1c3b] font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Now</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+917208936359"
            className="w-8 h-8 rounded-full bg-white text-[#663366] flex items-center justify-center text-xs"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
          </a>
          <button
            onClick={handleToggleAmbient}
            className="p-2 rounded-full bg-white/10 text-white border border-white/20 text-xs"
          >
            {ambientPlaying ? <Volume2 className="w-4 h-4 text-[#ffd875]" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/10 border border-white/20 text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#4e224e] border-t border-[#7e3f7e] px-6 py-6 animate-in slide-in-from-top-3 duration-300">
          <nav className="flex flex-col gap-3 text-sm font-semibold uppercase tracking-wider text-white">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }} className="py-2 border-b border-white/10 hover:text-[#ffd875]">
              Home
            </a>
            <a href="#what-is-sound-healing" onClick={(e) => handleNavClick(e, '#what-is-sound-healing')} className="py-2 border-b border-white/10 hover:text-[#ffd875]">
              About Us (What Is Sound Healing?)
            </a>
            <a href="#therapies" onClick={(e) => handleNavClick(e, '#therapies')} className="py-2 border-b border-white/10 hover:text-[#ffd875]">
              Sound Healing Therapies
            </a>
            <a href="#frequency-tool" onClick={(e) => handleNavClick(e, '#frequency-tool')} className="py-2 border-b border-white/10 hover:text-[#ffd875]">
              Pendulum Dowsing Tool
            </a>
            <a href="#training" onClick={(e) => handleNavClick(e, '#training')} className="py-2 border-b border-white/10 hover:text-[#ffd875]">
              Teacher Training
            </a>
            <a href="#sanctuary" onClick={(e) => handleNavClick(e, '#sanctuary')} className="py-2 border-b border-white/10 hover:text-[#ffd875]">
              3D Singing Bowl Altar
            </a>
            <a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="py-2 border-b border-white/10 hover:text-[#ffd875]">
              Gallery
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="py-2 border-b border-white/10 hover:text-[#ffd875]">
              Contact Us
            </a>

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-[#ffd875] text-[#3b1c3b] font-bold text-xs uppercase tracking-wider shadow-lg"
              >
                Book Session Now
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
