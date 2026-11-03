import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0E1338] border-t border-[#1718DF]/30 text-white pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info with Sacred Lotus Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 shadow-md border border-white/25 bg-[#1718DF] flex items-center justify-center">
                <img
                  src="/images/shvaas-logo.png"
                  alt="Shvaas Kriya Retreat Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-heading text-xl font-bold tracking-wider text-white block">
                  Shvaas Kriya Retreat
                </span>
                <span className="text-[10px] tracking-widest text-[#ffd875] uppercase font-sans font-semibold">
                  Release • Restore • Reconnect
                </span>
              </div>
            </div>

            <p className="text-xs text-[#DFE6FC] leading-relaxed font-light">
              A space to reconnect through breath, sound & stillness. Explore mindful sessions, soulful retreats in Rishikesh, and learning journeys rooted in presence.
            </p>

            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-widest text-[#ffd875] font-semibold block mb-1">
                Sanctuary Ethos
              </span>
              <span className="text-sm font-elsie text-white italic">
                Breathe · Listen · Reconnect
              </span>
            </div>
          </div>

          {/* Quick Links (Exact from reference site) */}
          <div className="space-y-3">
            <h4 className="font-heading text-base font-bold text-[#ffd875] mb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#DFE6FC]">
              <li>
                <a href="#what-is-sound-healing" className="hover:text-white transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#ffd875]" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#ffd875]" />
                  <span>Gallery</span>
                </a>
              </li>
              <li>
                <a href="#therapies" className="hover:text-white transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#ffd875]" />
                  <span>Healing Therapies</span>
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-white transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#ffd875]" />
                  <span>Teacher Training</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#ffd875]" />
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services (Exact from reference site) */}
          <div className="space-y-3">
            <h4 className="font-heading text-base font-bold text-[#ffd875] mb-2">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-[#DFE6FC]">
              <li>
                <a href="#therapies" className="hover:text-white transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#ffd875]" />
                  <span>Sound Healing</span>
                </a>
              </li>
              <li>
                <a href="#frequency-tool" className="hover:text-white transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#ffd875]" />
                  <span>Pendulum Healing</span>
                </a>
              </li>
              <li>
                <a href="#sanctuary" className="hover:text-white transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#ffd875]" />
                  <span>3D Singing Bowl Altar</span>
                </a>
              </li>
              <li>
                <a href="#therapies" className="hover:text-white transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#ffd875]" />
                  <span>Chakra Alignment</span>
                </a>
              </li>
              <li>
                <a href="#therapies" className="hover:text-white transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#ffd875]" />
                  <span>Tibetan Sound Massage</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-3">
            <h4 className="font-heading text-base font-bold text-[#ffd875] mb-2">
              Contact Us
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-[#DFE6FC]">
              <MapPin className="w-4 h-4 text-[#ffd875] shrink-0 mt-0.5" />
              <span>
                Tapovan Riverside & Partner Retreat Sanctuaries, Rishikesh, Uttarakhand, 249192
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#DFE6FC]">
              <Mail className="w-4 h-4 text-[#ffd875] shrink-0" />
              <a href="mailto:connect@shvaaskriyaretreat.com" className="hover:text-white transition">
                connect@shvaaskriyaretreat.com
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#DFE6FC]">
              <Phone className="w-4 h-4 text-[#ffd875] shrink-0" />
              <a href="tel:+917208936359" className="hover:text-white transition">
                +91 72089 36359
              </a>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/917208936359"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#1fb956] text-white text-xs font-bold shadow-md transition"
              >
                <span>WhatsApp Desk (+91 72089 36359)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#DFE6FC] gap-4">
          <div>
            Copyright © {new Date().getFullYear()} Shvaas Kriya Retreat | All Rights Reserved
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#DFE6FC]/80">Rishikesh & Online Sanctuary</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
