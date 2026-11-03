import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#1718DF",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://shvaaskriya.com'),
  title: "Shvaas Kriya Retreat | Rishikesh & Online Sanctuary",
  description:
    "A space to reconnect through breath, sound & stillness. Explore mindful sessions, soulful retreats in Rishikesh, and learning journeys rooted in presence.",
  icons: {
    icon: "/images/shvaas-logo.png",
    shortcut: "/images/shvaas-logo.png",
    apple: "/images/shvaas-logo.png",
  },
  openGraph: {
    title: "Shvaas Kriya Retreat | Breathe · Listen · Reconnect",
    description:
      "A space to reconnect through breath, sound & stillness. Mindful sessions, soulful retreats in Rishikesh, and learning journeys.",
    images: ["/images/shvaas-logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/shvaas-logo.png"],
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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Cinzel:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f6f9fc] text-[#1e293b] antialiased selection:bg-[#1718DF]/20 selection:text-[#0E1338] overflow-x-hidden">
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
