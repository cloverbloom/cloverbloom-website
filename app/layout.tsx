import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cloverbloom.co"),
  title: "Cloverbloom Co-Hosting | Hands-On Airbnb Management",
  description:
    "Cloverbloom Co-Hosting is a hands-on Airbnb co-hosting partner. We handle guest communication, pricing, calendar management, and optimization so your property performs like an asset, not a second job.",
  keywords: [
    "Cloverbloom",
    "Airbnb co-hosting",
    "Airbnb management",
    "short-term rental management",
    "Airbnb pricing",
    "Airbnb optimization",
    "property management",
  ],
  openGraph: {
    title: "Cloverbloom Co-Hosting",
    description:
      "Hands-on Airbnb co-hosting focused on performance, pricing, and operations.",
    url: "https://cloverbloom.co",
    siteName: "Cloverbloom",
    images: [
      {
        url: "/footer-garrett.webp",
        width: 1200,
        height: 630,
        alt: "Garrett Nelson - Cloverbloom",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloverbloom Co-Hosting",
    description:
      "Hands-on Airbnb co-hosting focused on performance, pricing, and operations.",
    images: ["/footer-garrett.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="top">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
