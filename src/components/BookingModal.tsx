"use client";

import React, { useState, useEffect } from 'react';
import {
  THERAPY_SERVICES,
  BookingDetails,
  validateBookingForm,
  calculateSessionPrice,
  formatDuration
} from '../utils/healing';
import { Sparkles, CheckCircle2, MessageCircle, X, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  currency: 'INR' | 'USD';
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  currency: initialCurrency,
}) => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>(initialCurrency);
  const [formData, setFormData] = useState<Partial<BookingDetails>>({
    serviceId: initialServiceId || THERAPY_SERVICES[0].id,
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    timeSlot: '11:00 AM - 12:00 PM',
    guestCount: 1,
    currency: initialCurrency,
    specialIntention: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingDetails | null>(null);

  useEffect(() => {
    if (initialServiceId) {
      setFormData(prev => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialServiceId]);

  useEffect(() => {
    setCurrency(initialCurrency);
    setFormData(prev => ({ ...prev, currency: initialCurrency }));
  }, [initialCurrency]);

  if (!isOpen) return null;

  const timeSlots = [
    '09:00 AM - 10:00 AM (Morning Stillness)',
    '11:00 AM - 12:00 PM (Midday Realignment)',
    '02:30 PM - 03:30 PM (Afternoon Theta)',
    '04:30 PM - 05:30 PM (Sunset Golden Hour)',
    '06:30 PM - 07:30 PM (Evening Twilight Bath)',
  ];

  const selectedService = THERAPY_SERVICES.find(s => s.id === formData.serviceId) || THERAPY_SERVICES[0];
  const totalPrice = calculateSessionPrice(formData.serviceId || '', formData.guestCount || 1, currency);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm({ ...formData, currency });

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const finalBooking = { ...formData, currency } as BookingDetails;
    setConfirmedBooking(finalBooking);
    setIsSuccess(true);
  };

  const handleWhatsAppDirect = () => {
    if (!confirmedBooking) return;
    const msg = encodeURIComponent(
      `🙏 Namaste Shvaas Kriya Retreat! I would like to reserve a session:\n\n` +
      `• Modality: ${selectedService.title}\n` +
      `• Name: ${confirmedBooking.clientName}\n` +
      `• Date: ${confirmedBooking.date}\n` +
      `• Time: ${confirmedBooking.timeSlot}\n` +
      `• Guests: ${confirmedBooking.guestCount}\n` +
      `• Intention: ${confirmedBooking.specialIntention || 'General Wellness'}\n` +
      `• Total: ${currency === 'INR' ? '₹' + totalPrice : '$' + totalPrice}`
    );
    window.open(`https://wa.me/917208936359?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="max-w-2xl w-full bg-white border border-[#d8e3ed] rounded-3xl shadow-2xl relative overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 border-b border-[#edf2f7] flex items-center justify-between bg-[#f8fbfe]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EEF0FF] border border-[#CCD6F7] flex items-center justify-center text-[#1718DF]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-[#27282c]">
                Reserve Your Sacred Space
              </h3>
              <p className="text-xs text-[#64748b] font-serif-elegant italic">
                Rishikesh & Online Sanctuary • Breathe · Listen · Reconnect
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#64748b] hover:text-[#1e293b] bg-white border border-[#d8e3ed] transition shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSuccess && confirmedBooking ? (
            <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#e8f8ee] border border-[#27ae60] text-[#27ae60] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#1718DF] font-bold">
                  Reservation Request Received
                </span>
                <h4 className="text-2xl font-heading text-[#27282c] mt-1">
                  We Look Forward to Welcoming You
                </h4>
                <p className="text-xs text-[#52637a] max-w-md mx-auto mt-2 font-light">
                  A confirmation summary has been registered for <strong className="text-[#1e293b]">{confirmedBooking.clientName}</strong>. To guarantee your session time slot with our team, connect directly with our Rishikesh desk below.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#f8fbfe] border border-[#e2edf6] text-left max-w-md mx-auto space-y-3 text-xs shadow-sm">
                <div className="flex justify-between border-b border-[#edf2f7] pb-2">
                  <span className="text-[#64748b]">Therapy Modality:</span>
                  <span className="font-semibold text-[#1e293b] text-right">{selectedService.title}</span>
                </div>
                <div className="flex justify-between border-b border-[#edf2f7] pb-2">
                  <span className="text-[#64748b]">Date & Time:</span>
                  <span className="font-semibold text-[#1e293b]">{confirmedBooking.date} • {confirmedBooking.timeSlot.split(' ')[0]} {confirmedBooking.timeSlot.split(' ')[1]}</span>
                </div>
                <div className="flex justify-between border-b border-[#edf2f7] pb-2">
                  <span className="text-[#64748b]">Participants:</span>
                  <span className="font-semibold text-[#1e293b]">{confirmedBooking.guestCount} Guest(s)</span>
                </div>
                <div className="flex justify-between pt-1 text-sm font-bold">
                  <span className="text-[#64748b]">Estimated Exchange:</span>
                  <span className="text-[#1718DF] font-heading">{currency === 'INR' ? `₹${totalPrice.toLocaleString('en-IN')}` : `$${totalPrice} USD`}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={handleWhatsAppDirect}
                  className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Confirm Instantly via WhatsApp (+91 72089 36359)</span>
                </button>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    onClose();
                  }}
                  className="px-5 py-3 rounded-xl bg-[#f1f6fb] border border-[#d8e3ed] text-[#475569] hover:text-[#1e293b] text-xs font-semibold shadow-sm"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#64748b] font-bold mb-2">
                  Select Healing Modality or Training
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full bg-[#f8fbfd] border border-[#d8e3ed] rounded-xl px-4 py-3 text-sm text-[#1e293b] focus:outline-none focus:border-[#1718DF]"
                >
                  {THERAPY_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} ({formatDuration(s.durationMin)}) - {currency === 'INR' ? `₹${s.priceINR}` : `$${s.priceUSD}`}
                    </option>
                  ))}
                </select>
                {errors.serviceId && <p className="text-red-500 text-xs mt-1">{errors.serviceId}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#64748b] font-bold mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#f8fbfd] border border-[#d8e3ed] rounded-xl px-4 py-2.5 text-sm text-[#1e293b] focus:outline-none focus:border-[#1718DF]"
                  />
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#64748b] font-bold mb-2">
                    Sanctuary Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-[#f8fbfd] border border-[#d8e3ed] rounded-xl px-4 py-2.5 text-sm text-[#1e293b] focus:outline-none focus:border-[#1718DF]"
                  >
                    {timeSlots.map((ts, i) => (
                      <option key={i} value={ts}>
                        {ts}
                      </option>
                    ))}
                  </select>
                  {errors.timeSlot && <p className="text-red-500 text-xs mt-1">{errors.timeSlot}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#64748b] font-bold mb-2">
                    Number of Seekers
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setFormData({ ...formData, guestCount: num })}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold border transition ${
                          formData.guestCount === num
                            ? 'bg-[#1718DF] border-[#1718DF] text-white shadow-sm'
                            : 'bg-[#f8fbfd] border-[#d8e3ed] text-[#64748b]'
                        }`}
                      >
                        {num} {num === 1 ? 'Person' : 'Guests'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#64748b] font-bold mb-2">
                    Currency Preference
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setCurrency('INR')}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition ${
                        currency === 'INR'
                          ? 'bg-[#1718DF] border-[#1718DF] text-white shadow-sm'
                          : 'bg-[#f8fbfd] border-[#d8e3ed] text-[#64748b]'
                      }`}
                    >
                      ₹ INR (India)
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrency('USD')}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition ${
                        currency === 'USD'
                          ? 'bg-[#1718DF] border-[#1718DF] text-white shadow-sm'
                          : 'bg-[#f8fbfd] border-[#d8e3ed] text-[#64748b]'
                      }`}
                    >
                      $ USD (Global)
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#64748b] font-bold mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Maya Sharma"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full bg-[#f8fbfd] border border-[#d8e3ed] rounded-xl px-4 py-2.5 text-sm text-[#1e293b] focus:outline-none focus:border-[#1718DF]"
                  />
                  {errors.clientName && <p className="text-red-500 text-xs mt-1">{errors.clientName}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#64748b] font-bold mb-1">
                    WhatsApp or Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.clientPhone}
                    onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                    className="w-full bg-[#f8fbfd] border border-[#d8e3ed] rounded-xl px-4 py-2.5 text-sm text-[#1e293b] focus:outline-none focus:border-[#1718DF]"
                  />
                  {errors.clientPhone && <p className="text-red-500 text-xs mt-1">{errors.clientPhone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#64748b] font-bold mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.clientEmail}
                  onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                  className="w-full bg-[#f8fbfd] border border-[#d8e3ed] rounded-xl px-4 py-2.5 text-sm text-[#1e293b] focus:outline-none focus:border-[#1718DF]"
                />
                {errors.clientEmail && <p className="text-red-500 text-xs mt-1">{errors.clientEmail}</p>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#64748b] font-bold mb-1">
                  Special Healing Intention or Ailment (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., Working through acute insomnia, physical lumbar tightness, or deepening meditation practice..."
                  value={formData.specialIntention}
                  onChange={(e) => setFormData({ ...formData, specialIntention: e.target.value })}
                  className="w-full bg-[#f8fbfd] border border-[#d8e3ed] rounded-xl px-4 py-2 text-sm text-[#1e293b] focus:outline-none focus:border-[#1718DF]"
                />
              </div>

              <div className="pt-4 border-t border-[#edf2f7] flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#64748b]">Total Energy Exchange</div>
                  <div className="text-2xl font-heading font-bold text-[#1718DF]">
                    {currency === 'INR' ? `₹${totalPrice.toLocaleString('en-IN')}` : `$${totalPrice} USD`}
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-7 py-3 rounded-xl bg-[#1718DF] hover:bg-[#6882FF] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition flex items-center gap-2"
                >
                  <span>Request Sanctuary Slot</span>
                  <ArrowRight className="w-4 h-4 text-[#ffd875]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
