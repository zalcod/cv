import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zal Solmuş",
  description: "Personal website of Zal Solmuş",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      }
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
