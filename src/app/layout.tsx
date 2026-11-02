import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moksham Healings | Himalayan Sound Sanctuary Dharamshala",
  description:
    "Experience master Tibetan singing bowls, sacred vibrational therapy, chakra balancing, and certified teacher training in Dharamshala, Himachal Pradesh.",
  openGraph: {
    title: "Moksham Healings | Himalayan Sound Therapy Dharamshala",
    description:
      "Master Tibetan singing bowls, sacred vibrational therapy, and certified practitioner courses nestled in Dharamshala, India.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        {/* Google Fonts Preconnect and Direct Stylesheet */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Elsie:wght@400;900&family=Cinzel:wght@400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f6f9fc] text-[#1e293b] antialiased selection:bg-[#663366]/20 selection:text-[#4a1e4a] overflow-x-hidden">
        {children}
        {/* CRM Lead Tracker Script */}
        <Script
          src="/crm-lead-tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
