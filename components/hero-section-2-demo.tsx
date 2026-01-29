"use client";

import React from "react";

import { HeroSection } from "@/components/ui/hero-section-2";

export default function HeroSectionDemo() {
  return (
    <div className="w-full">
      <HeroSection
        logo={{
          url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=200&q=80",
          alt: "Company Logo",
          text: "Your Logo",
        }}
        slogan="ELEVATE YOUR PERSPECTIVE"
        title={
          <>
            Each Peak <br />
            <span className="text-primary">Teaches Something</span>
          </>
        }
        subtitle="Discover breathtaking landscapes and challenge yourself with our guided mountain expeditions. Join a community of adventurers."
        callToAction={{
          text: "JOIN US TO EXPLORE",
          href: "#explore",
        }}
        backgroundImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80"
        contactInfo={{
          website: "yourwebsite.com",
          phone: "+1 (555) 123-4567",
          address: "20 Fieldstone Dr, Roswell, GA",
        }}
      />
    </div>
  );
}
