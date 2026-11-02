/**
 * Sacred Healing Data, Solfeggio Harmonics, and Session Logic for Moksham Healings Dharamshala
 */

export interface ChakraInfo {
  id: string;
  name: string;
  sanskrit: string;
  frequency: number; // in Hz
  solfeggioKey: string;
  note: string;
  color: string;
  glowColor: string;
  element: string;
  mantra: string;
  benefits: string;
  singingBowlSize: string;
}

export const CHAKRAS: ChakraInfo[] = [
  {
    id: 'root',
    name: 'Root Chakra',
    sanskrit: 'Muladhara',
    frequency: 396,
    solfeggioKey: 'UT',
    note: 'C',
    color: '#c23b22',
    glowColor: 'rgba(194, 59, 34, 0.4)',
    element: 'Earth (Prithvi)',
    mantra: 'LAM',
    benefits: 'Liberating guilt & fear, grounding stability, foundational security in the physical body.',
    singingBowlSize: '12" Large Deep Himalayan Bronze',
  },
  {
    id: 'sacral',
    name: 'Sacral Chakra',
    sanskrit: 'Svadhisthana',
    frequency: 417,
    solfeggioKey: 'RE',
    note: 'D',
    color: '#e67e22',
    glowColor: 'rgba(230, 126, 34, 0.4)',
    element: 'Water (Jal)',
    mantra: 'VAM',
    benefits: 'Undoing negative situations, emotional fluidity, intimacy, and unblocking sensual creativity.',
    singingBowlSize: '11" Resonant Hand-Hammered Bowl',
  },
  {
    id: 'solar',
    name: 'Solar Plexus',
    sanskrit: 'Manipura',
    frequency: 528,
    solfeggioKey: 'MI',
    note: 'E',
    color: '#d4af37',
    glowColor: 'rgba(212, 175, 55, 0.5)',
    element: 'Fire (Agni)',
    mantra: 'RAM',
    benefits: 'The Miracle & Transformation frequency, cellular repair, self-worth, and inner radiance.',
    singingBowlSize: '10" Golden Tibetan Bell Metal',
  },
  {
    id: 'heart',
    name: 'Heart Chakra',
    sanskrit: 'Anahata',
    frequency: 639,
    solfeggioKey: 'FA',
    note: 'F',
    color: '#27ae60',
    glowColor: 'rgba(39, 174, 96, 0.4)',
    element: 'Air (Vayu)',
    mantra: 'YAM',
    benefits: 'Harmonizing relationships, deep forgiveness, unconditional love, and releasing heartache.',
    singingBowlSize: '9" Medium Full Moon Singing Bowl',
  },
  {
    id: 'throat',
    name: 'Throat Chakra',
    sanskrit: 'Vishuddha',
    frequency: 741,
    solfeggioKey: 'SOL',
    note: 'G',
    color: '#2980b9',
    glowColor: 'rgba(41, 128, 185, 0.4)',
    element: 'Ether / Space (Akasha)',
    mantra: 'HAM',
    benefits: 'Awakening authentic intuition, self-expression, vocal resonance, and cleansing toxic speech.',
    singingBowlSize: '8" High-Tuned Bell Vessel',
  },
  {
    id: 'thirdeye',
    name: 'Third Eye',
    sanskrit: 'Ajna',
    frequency: 852,
    solfeggioKey: 'LA',
    note: 'A',
    color: '#8e44ad',
    glowColor: 'rgba(142, 68, 173, 0.4)',
    element: 'Light (Tejas)',
    mantra: 'OM',
    benefits: 'Clairvoyance, transcending mental noise, profound insight, and spiritual awakening.',
    singingBowlSize: '7" Antique Master Seven-Metal Bowl',
  },
  {
    id: 'crown',
    name: 'Crown Chakra',
    sanskrit: 'Sahasrara',
    frequency: 963,
    solfeggioKey: 'SI',
    note: 'B',
    color: '#dcd0ff',
    glowColor: 'rgba(220, 208, 255, 0.45)',
    element: 'Cosmic Consciousness',
    mantra: 'AUM / Silence',
    benefits: 'Pure cosmic oneness, connection to infinite source, sublime transcendence and samadhi.',
    singingBowlSize: '6" High-Resonance Harmonic Bowl',
  },
];

export interface TherapyService {
  id: string;
  title: string;
  sanskritSubtitle: string;
  category: 'individual' | 'group' | 'deep_therapy' | 'training';
  durationMin: number;
  priceINR: number;
  priceUSD: number;
  highlight: string;
  description: string;
  benefits: string[];
  instruments: string[];
  image: string;
}

export const THERAPY_SERVICES: TherapyService[] = [
  {
    id: 'individual-sound-healing',
    title: 'Individual Sound Healing Sanctuary',
    sanskritSubtitle: 'Atma Shanti Nada',
    category: 'individual',
    durationMin: 60,
    priceINR: 2800,
    priceUSD: 36,
    highlight: 'Most Requested Personalized Session',
    description: 'A bespoke 1-on-1 vibrational sanctuary crafted around your personal energetic diagnostic. Ancient 7-metal Tibetan bowls are placed directly on and around your physical body to dissolve deep tension.',
    benefits: ['Relief from chronic nervous exhaustion', 'Cellular vibrational realignment', 'Deep theta state induction in under 15 mins', 'Release of somatic grief and mental loops'],
    instruments: ['Full Moon Himalayan Bowls', 'Tibetan Tingsha Cymbals', 'Wind Gongs', 'Koshi Chimes'],
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'chakra-balancing-cleansing',
    title: 'Seven Chakra Alignment & Sound Therapy',
    sanskritSubtitle: 'Saptachakra Shuddhi',
    category: 'deep_therapy',
    durationMin: 60,
    priceINR: 3200,
    priceUSD: 42,
    highlight: 'Deep Energetic Realignment',
    description: 'Sequential diagnostic scanning using acoustic biofield feedback followed by targeted frequency stimulation from Root (396Hz) up to Crown (963Hz) using specifically pitched singing vessels.',
    benefits: ['Clear energetic sluggishness across major vortices', 'Revitalized spinal prana flow', 'Heightened emotional balance and vitality', 'Restoration of natural circadian harmony'],
    instruments: ['Complete 7-Note Himalayan Singing Bowl Octave', 'Bison-Leather Mallets', 'Chakra Tuning Bells'],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'couple-sound-therapy',
    title: 'Couple Harmonic Sound Therapy',
    sanskritSubtitle: 'Yugala Nada Sangam',
    category: 'individual',
    durationMin: 60,
    priceINR: 4800,
    priceUSD: 60,
    highlight: 'Intimate Shared Frequency Healing',
    description: 'Designed for partners, friends, or companions seeking to deepen heart coherence, harmonize energetic boundaries, and release collective stress in an intimate candlelit sanctuary.',
    benefits: ['Synchronized heart rate variability (HRV)', 'Dissolves unspoken tension & fosters compassion', 'Shared serene sensory experience in Dharamshala', 'Sacred tea ritual afterward'],
    instruments: ['Twin Full Moon Bowls', 'Heart-Tuned 639Hz Resonators', 'Ocean Harp', 'Subtle Rainsticks'],
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'group-sound-bath',
    title: 'Himalayan Group Sound Bath Immersion',
    sanskritSubtitle: 'Maha Nada Snana',
    category: 'group',
    durationMin: 60,
    priceINR: 900,
    priceUSD: 12,
    highlight: 'Daily Sacred Gathering at Sunset',
    description: 'Surrender onto plush sheepskin mattresses under soft amber candlelight. A symphony of massive Himalayan gongs, resonant singing bowls, and sacred Himalayan bells washes away the noise of modern life.',
    benefits: ['Effortless collective meditation', 'Complete nervous system reset', 'Relieves travel fatigue and high-altitude acclimation strain', 'Accessible to beginners & experienced meditators'],
    instruments: ['32" Chau Gong', '14 Large Hand-Hammered Bowls', 'Koshi Air & Earth Chimes', 'Monochord Harmonics'],
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'aura-cleansing-pendulum',
    title: 'Aura Cleansing & Pendulum Dowsing',
    sanskritSubtitle: 'Prana Mandal Shodhan',
    category: 'deep_therapy',
    durationMin: 45,
    priceINR: 2500,
    priceUSD: 32,
    highlight: 'Subtle Body Diagnostics & Clearing',
    description: 'Ancient Himalayan crystal pendulum dowsing pinpoints micro-tears, stagnant emotional debris, and leaks in your auric field. Followed by Tibetan bell smudging and sonic boundary sealing.',
    benefits: ['Pinpoint specific subconscious blockages', 'Clears foreign energetic residues & heavy auras', 'Fortifies personal boundaries', 'Restores natural mental clarity'],
    instruments: ['Himalayan Quartz Pendulum', 'Sacred 741Hz Intuition Bowl', 'Bronze Dorje & Ghanta Bell'],
    image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'tibetan-sound-massage',
    title: 'Tibetan On-Body Sound Massage',
    sanskritSubtitle: 'Deha Nada Abhyanga',
    category: 'deep_therapy',
    durationMin: 75,
    priceINR: 3800,
    priceUSD: 48,
    highlight: 'Direct Bone & Muscle Vibrational Therapy',
    description: 'Special rounded therapy bowls are placed directly upon the spine, sacrum, chest, and solar plexus, then gently struck. The physical sound waves penetrate 6 inches into tissue and bone marrow.',
    benefits: ['Releases deep seated myofascial spasms', 'Stimulates lymphatic drainage naturally', 'Deep musculoskeletal decompression', 'Profound full-body calm without oils or undressing'],
    instruments: ['Flat-Bottom Heavy Therapy Bowls', 'Soft-Core Felt Mallets', 'Grounding Earth Bowls'],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'teacher-training-certification',
    title: 'Certified Himalayan Sound Healer Training',
    sanskritSubtitle: 'Nada Yoga Acharya Course',
    category: 'training',
    durationMin: 1800, // Multi-day course
    priceINR: 28000,
    priceUSD: 350,
    highlight: 'Accredited 5-Day Intensive in Dharamshala',
    description: 'Master the ancient art and modern neuroscience of Tibetan Singing Bowls, Gong playing, Aura diagnostics, and therapeutic 1-on-1 protocols from master healers in the foothills of the Himalayas.',
    benefits: ['International Practitioner Certification', 'Hands-on training with antique 7-metal bowls', 'Complete therapy sequence manuals', 'Lifetime guidance and bowl acquisition support'],
    instruments: ['Full Professional Sound Kit Training', 'Master Gongs', 'Antique Himalayan Artifacts'],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop'
  }
];

export interface DiagnosticQuestion {
  concernId: string;
  label: string;
  description: string;
  recommendedChakra: string;
  recommendedServiceId: string;
  reason: string;
}

export const DIAGNOSTIC_CONCERNS: DiagnosticQuestion[] = [
  {
    concernId: 'anxiety-insomnia',
    label: 'Restless Mind & Chronic Insomnia',
    description: 'Racing thoughts at night, overstimulated nervous system, inability to unwind.',
    recommendedChakra: 'crown',
    recommendedServiceId: 'individual-sound-healing',
    reason: 'High-frequency 963Hz and theta binaural bowls entrain brainwaves from beta down to delta, allowing deep restorative sleep.'
  },
  {
    concernId: 'heartache-emotional-block',
    label: 'Heartache, Grief or Relationship Strain',
    description: 'Heaviness in the chest, difficulty forgiving, feeling shut off from love.',
    recommendedChakra: 'heart',
    recommendedServiceId: 'chakra-balancing-cleansing',
    reason: '639Hz Solfeggio frequency vibrates the pericardium and heart vortex, facilitating safe emotional release and open connection.'
  },
  {
    concernId: 'chronic-fatigue-burnout',
    label: 'Deep Fatigue, Exhaustion & Low Prana',
    description: 'Waking up tired, depleted motivation, feeling energetically drained by work or life.',
    recommendedChakra: 'solar',
    recommendedServiceId: 'tibetan-sound-massage',
    reason: 'Direct vibration through the solar plexus at 528Hz restores cellular ATP energy and breaks physical stagnation.'
  },
  {
    concernId: 'suppressed-voice-stuckness',
    label: 'Difficulty Speaking Truth & Creative Block',
    description: 'Throat tightness, fear of conflict, feeling unheard or artistically stifled.',
    recommendedChakra: 'throat',
    recommendedServiceId: 'aura-cleansing-pendulum',
    reason: '741Hz vibrational cleansing clears toxic energetic debris in the throat chakra, opening authentic voice and creative vision.'
  },
  {
    concernId: 'unsettled-anxious-fear',
    label: 'Groundlessness, Fear & Life Transition',
    description: 'Feeling spaced out, financially anxious, unstable in a new phase of life.',
    recommendedChakra: 'root',
    recommendedServiceId: 'individual-sound-healing',
    reason: 'Deep 396Hz heavy bronze bowls stimulate the base of the spine, reinstating visceral security and earthly grounding.'
  }
];

export interface BookingDetails {
  serviceId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  date: string;
  timeSlot: string;
  guestCount: number;
  currency: 'INR' | 'USD';
  specialIntention?: string;
}

export interface BookingValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  totalAmount: number;
}

/**
 * Validates booking details and calculates final cost
 */
export function validateBookingForm(booking: Partial<BookingDetails>): BookingValidationResult {
  const errors: Record<string, string> = {};
  
  if (!booking.serviceId) {
    errors.serviceId = 'Please select a healing modality or course.';
  }
  
  if (!booking.clientName || booking.clientName.trim().length < 2) {
    errors.clientName = 'Please enter your full name.';
  }
  
  if (!booking.clientEmail || !/^\S+@\S+\.\S+$/.test(booking.clientEmail)) {
    errors.clientEmail = 'Please provide a valid email address.';
  }
  
  if (!booking.clientPhone || booking.clientPhone.trim().length < 7) {
    errors.clientPhone = 'Please provide a valid phone or WhatsApp number.';
  }
  
  if (!booking.date) {
    errors.date = 'Please pick a preferred session date.';
  }
  
  if (!booking.timeSlot) {
    errors.timeSlot = 'Please select a preferred sanctuary time slot.';
  }
  
  const guestCount = Math.max(1, Number(booking.guestCount || 1));
  const service = THERAPY_SERVICES.find(s => s.id === booking.serviceId);
  const currency = booking.currency || 'INR';
  
  let totalAmount = 0;
  if (service) {
    // If it's a couple session, guest count is inherently 2
    if (service.id === 'couple-sound-therapy') {
      totalAmount = currency === 'USD' ? service.priceUSD : service.priceINR;
    } else if (service.category === 'training') {
      totalAmount = (currency === 'USD' ? service.priceUSD : service.priceINR) * guestCount;
    } else {
      totalAmount = (currency === 'USD' ? service.priceUSD : service.priceINR) * guestCount;
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    totalAmount
  };
}

/**
 * Calculate session price dynamically
 */
export function calculateSessionPrice(serviceId: string, guests: number, currency: 'INR' | 'USD' = 'INR'): number {
  const service = THERAPY_SERVICES.find(s => s.id === serviceId);
  if (!service) return 0;
  const unitPrice = currency === 'USD' ? service.priceUSD : service.priceINR;
  if (service.id === 'couple-sound-therapy') return unitPrice;
  return unitPrice * Math.max(1, guests);
}

/**
 * Get Chakra profile by ID
 */
export function getChakraProfile(id: string): ChakraInfo {
  const found = CHAKRAS.find(c => c.id === id);
  return found || CHAKRAS[2]; // Default to Solar Plexus (528Hz)
}

/**
 * Formats duration nicely
 */
export function formatDuration(minutes: number): string {
  if (minutes >= 600) {
    const days = Math.round(minutes / (60 * 6));
    return `${days} Days Intensive`;
  }
  const hours = Math.floor(minutes / 60);
  const remMin = minutes % 60;
  if (hours > 0 && remMin > 0) return `${hours} hr ${remMin} min`;
  if (hours > 0) return `${hours} hr`;
  return `${minutes} min`;
}

/**
 * Get diagnosis recommendations based on concern key
 */
export function recommendTherapy(concernId: string): DiagnosticQuestion {
  const found = DIAGNOSTIC_CONCERNS.find(c => c.concernId === concernId);
  return found || DIAGNOSTIC_CONCERNS[0];
}
