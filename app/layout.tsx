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
  title: "Cloverbloom Co-Hosting | Turn Your Airbnb Into a Hands-Free Asset",
  description:
    "Cloverbloom helps Airbnb owners run high-performing, hands-free assets. We handle guest communication, pricing optimization, calendar coordination, and turnover operations so Airbnb does not become a second job.",
  keywords: [
    "Cloverbloom",
    "Airbnb co-hosting",
    "Airbnb operational management",
    "short-term rental co-hosting",
    "Airbnb pricing",
    "Airbnb optimization",
    "hands-free Airbnb",
  ],
  openGraph: {
    title: "Cloverbloom Co-Hosting",
    description:
      "Turn your Airbnb into a hands-free asset with hands-on co-hosting focused on pricing, performance, and operations.",
    url: "https://cloverbloom.co",
    siteName: "Cloverbloom",
    images: [
      {
        url: "/meta-image.webp",
        width: 1200,
        height: 630,
        alt: "Cloverbloom STR Operations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloverbloom Co-Hosting",
    description:
      "Turn your Airbnb into a hands-free asset with hands-on co-hosting focused on pricing, performance, and operations.",
    images: ["/meta-image.webp"],
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
