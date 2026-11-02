import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#663366] border-t border-[#7e3f7e] text-white pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info with Sacred Lotus Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center p-1.5 border border-white/20">
                <svg className="w-full h-full text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C12 2 8 8 8 13C8 15.21 9.79 17 12 17C14.21 17 16 15.21 16 13C16 8 12 2 12 2ZM12 15C10.9 15 10 14.1 10 13C10 9.8 12 5.5 12 5.5C12 5.5 14 9.8 14 13C14 14.1 13.1 15 12 15ZM6.5 10C5.5 11.5 5 13.2 5 15C5 18.9 8.1 22 12 22C15.9 22 19 18.9 19 15C19 13.2 18.5 11.5 17.5 10C16.8 11.8 15.5 13.3 14 14.2C14.6 13.2 15 12.1 15 11C15 8.8 13.5 6.5 12 5C10.5 6.5 9 8.8 9 11C9 12.1 9.4 13.2 10 14.2C8.5 13.3 7.2 11.8 6.5 10Z"/>
                </svg>
              </div>
              <span className="font-heading text-xl font-bold tracking-wider text-white">
                Moksham Healings
              </span>
            </div>

            <p className="text-xs text-[#f1dcf1] leading-relaxed font-light">
              At Moksham Healings, we blend Himalayan wisdom with modern techniques to support self-discovery and inner balance.
            </p>

            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-widest text-[#ffd875] font-semibold block mb-1">
                Founder & Master Healer
              </span>
              <span className="text-sm font-elsie text-white">
                ~ Sibani Panigrahi
              </span>
            </div>
          </div>

          {/* Quick Links (Exact from reference site) */}
          <div className="space-y-3">
            <h4 className="font-heading text-base font-bold text-[#ffd875] mb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#eedcee]">
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
            <ul className="space-y-2 text-xs text-[#eedcee]">
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

          {/* Contact Us (Exact from reference site) */}
          <div className="space-y-3">
            <h4 className="font-heading text-base font-bold text-[#ffd875] mb-2">
              Contact Us
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-[#eedcee]">
              <MapPin className="w-4 h-4 text-[#ffd875] shrink-0 mt-0.5" />
              <span>
                Bhagsunag, White House, near Bhagsu Taxi Stand, Mcleodganj, Dharamshala, Himachal Pradesh, 176216
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#eedcee]">
              <Mail className="w-4 h-4 text-[#ffd875] shrink-0" />
              <a href="mailto:mokshamhealings@gmail.com" className="hover:text-white transition">
                mokshamhealings@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#eedcee]">
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
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#f0daf0] gap-4">
          <div>
            Copyright © {new Date().getFullYear()} Moksham Healings | Sacred Sound Sanctuary Dharamshala
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/mokshamhealing/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              Instagram
            </a>
            <a href="https://www.youtube.com/@mokshamhealings" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              YouTube
            </a>
            <a href="https://maps.app.goo.gl/QUfzZphou6hbgFG17" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
