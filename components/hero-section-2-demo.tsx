"use client";

import React from "react";

import { HeroSection } from "@/components/ui/hero-section-2";

export default function HeroSectionDemo() {
  return (
    <div className="w-full">
      <HeroSection
        title={
          <>
            How Can I Turn Your Airbnb <br />
            Into A <span className="text-[#2154D6]">Hands-Free Asset</span>?
          </>
        }
        subtitle="With obsessive management that makes you more money without Airbnb being a second job."
        callToAction={{
          text: "",
          href: "https://cal.com/garrett-nelson/discovery-call",
        }}
        bottomAction={{
          text: "Get Your FREE Income Projection",
          href: "https://cal.com/garrett-nelson/discovery-call",
        }}
        backgroundImages={["/hero-garrett.webp", "/hero-garrett.webp", "/hero-garrett.webp"]}
        contactInfo={{
          website: "",
          phone: "+1 (970) 631-5800",
          address: "San Diego, CA",
          email: "garrett@cloverbloom.co",
        }}
      />
    </div>
  );
}
