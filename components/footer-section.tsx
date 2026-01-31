'use client';

import type React from "react";

export default function FooterSection() {
  const handleContactClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const trigger = document.querySelector("[data-contact-trigger]") as HTMLElement | null;
    trigger?.click();
  };
  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    const value = getComputedStyle(document.documentElement).scrollPaddingTop;
    const offset = Number.parseFloat(value);
    const safeOffset = Number.isFinite(offset) ? offset : 0;
    const extra = Number.parseFloat(event.currentTarget.dataset.offset ?? "0");
    const extraOffset = Number.isFinite(extra) ? extra : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - safeOffset + extraOffset;
    window.requestAnimationFrame(() => {
      window.scrollTo({ top, behavior: "smooth" });
      history.pushState(null, "", href);
    });
  };

  return (
    <footer className="w-full bg-[#2154D6] text-white">
      <div className="px-8 py-8">
        <div className="flex items-center gap-6">
          <a href="#top" className="text-white hover:text-white/90 hidden sm:block">
            <img src="/logo-white.webp" alt="Cloverbloom" className="h-8 w-auto" />
          </a>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            <a
              href="https://cal.com/garrett-nelson/discovery-call"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Calendar
            </a>
            <a
              href="#meet-garrett"
              data-offset="65"
              onClick={handleAnchorClick}
              className="hover:text-white"
            >
              About
            </a>
            <a href="#about-cloverbloom" onClick={handleAnchorClick} className="hover:text-white">Case Studies</a>
            <a
              href="https://www.linkedin.com/in/garrettfnelson"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="#contact" onClick={handleContactClick} className="hover:text-white">Contact</a>
          </nav>
        </div>
        <p className="mt-6 text-xs leading-relaxed text-white/80">
          Results vary by property, market, and owner involvement. Cloverbloom does not guarantee specific
          financial outcomes or performance beyond any guarantees expressly outlined in a written agreement.
          All information provided is for general informational purposes only and should not be construed as
          financial, legal, or investment advice. Any examples or references are illustrative and not
          indicative of typical results.
        </p>
        <p className="mt-3 text-xs text-white/80">
          © 2026 Cloverbloom Wyoming LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
