import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const baseUrl = "https://rizz-verse.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "RizzVerse | Personal AI Rizz Guru & Lab",
    template: "%s | RizzVerse"
  },
  description: "AI-powered attraction engineering. Generate personalized pickup lines, optimize for platform algorithms, and hear your rizz in premium neural voices.",
  keywords: ["AI Rizz", "Pickup Lines", "Attraction Engine", "Social Synergy", "Rizz Lab", "Dating AI"],
  authors: [{ name: "Anubhav" }],
  creator: "Anubhav",
  publisher: "RizzVerse",

  openGraph: {
    title: "RizzVerse | Where Words Steal Hearts",
    description: "Neural-powered charisma for the modern age. Elevate your game with AI-crafted charm.",
    url: baseUrl,
    siteName: "RizzVerse",
    images: [
      {
        url: "/seo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RizzVerse - Advanced AI Attraction Lab",
      },
      {
        url: "/seo/og-square.jpg",
        width: 1080,
        height: 1080,
        alt: "RizzVerse Logo",
      }
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "RizzVerse | The Science of Attraction",
    description: "Personal AI Rizz Guru & Attraction Laboratory. Craft the perfect opener in seconds.",
    images: ["/seo/og-hd.jpg"],
  },

  alternates: {
    canonical: baseUrl,
  },

  icons: {
    icon: [
      { url: "/favicons/favicon.ico" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicons/safari-pinned-tab.svg",
      },
    ],
  },

  manifest: "/manifest.webmanifest",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RizzVerse",
    "url": baseUrl,
    "logo": `${baseUrl}favicons/android-chrome-512x512.png`,
    "description": "Enterprise-grade AI-powered attraction engineering."
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#FF69B4" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased font-outfit`}
      >
        <ThemeProvider>
          <ServiceWorkerRegistration />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
