import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { VercelAnalytics } from "@/components/VercelAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL('https://zalsolmus.com'),
  title: {
    default: "Zal Solmuş",
    template: "%s | Zal Solmuş",
  },
  description: "Yazılım Geliştirici | Dijital Dönüşüm Uzmanı. Mobil, Web ve AI projeleri ile iş süreçlerinizi modernize ediyorum.",
  keywords: ["Zal Solmuş", "Software Developer", "Digital Transformation", "Flutter", "Mobile App Development", "Yazılım Geliştirici", "Dijital Dönüşüm"],
  authors: [{ name: "Zal Solmuş", url: "https://zalsolmus.com" }],
  creator: "Zal Solmuş",
  openGraph: {
    title: "Zal Solmuş",
    description: "Yazılım Geliştirici | Dijital Dönüşüm",
    url: 'https://zalsolmus.com',
    siteName: 'Zal Solmuş',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://zalsolmus.com/opengraph-image.png', // Assuming we might add one later or it exists
        width: 1200,
        height: 630,
        alt: 'Zal Solmuş',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zal Solmuş",
    description: "Yazılım Geliştirici | Dijital Dönüşüm",
    creator: "@zalsolmus", // Adjust if known, otherwise generic
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <VercelAnalytics />
      </body>
    </html>
  );
}
