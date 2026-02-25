'use client';

import React from "react";
import Link from "next/link";
import { CircleAlert } from "lucide-react";

import { Alert } from "@/components/ui/alert";
import { openEvaluationDialog } from "@/lib/evaluation-intake";
import { NOTIFICATION_DURATION_MS } from "@/lib/notifications";

export default function FooterSection() {
  const [showCaseStudiesNotice, setShowCaseStudiesNotice] = React.useState(false);
  const caseStudiesTimeoutRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    return () => {
      if (caseStudiesTimeoutRef.current) {
        window.clearTimeout(caseStudiesTimeoutRef.current);
      }
    };
  }, []);

  const handleContactClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const trigger = document.querySelector("[data-contact-trigger]") as HTMLElement | null;
    trigger?.click();
  };
  const handleCaseStudiesClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (caseStudiesTimeoutRef.current) {
      window.clearTimeout(caseStudiesTimeoutRef.current);
    }
    setShowCaseStudiesNotice(true);
    caseStudiesTimeoutRef.current = window.setTimeout(() => {
      setShowCaseStudiesNotice(false);
    }, NOTIFICATION_DURATION_MS);
  };
  const handleTopClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };
  const handleEvaluationClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    openEvaluationDialog();
  };
  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    const banner = document.querySelector("[data-banner]") as HTMLElement | null;
    const safeOffset = banner ? banner.getBoundingClientRect().height : 0;
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
      <div className="space-y-6 px-8 py-8">
        <div className="flex items-center gap-6">
          <a
            href="#top"
            onClick={handleTopClick}
            className="text-white hover:text-white/90 hidden sm:block"
          >
            <img src="/logo-white.webp" alt="Cloverbloom" className="h-8 w-auto" />
          </a>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            <a href="#" onClick={handleEvaluationClick} className="hover:text-white">Income Projection</a>
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
              data-offset="0"
              onClick={handleAnchorClick}
              className="hover:text-white"
            >
              About
            </a>
            <a href="#" onClick={handleCaseStudiesClick} className="hover:text-white">Case Studies</a>
            <a href="#contact" onClick={handleContactClick} className="hover:text-white">Contact</a>
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
          </nav>
        </div>
        <p className="text-xs leading-relaxed text-white/80">
          Results vary by property, market, and owner involvement. Cloverbloom does not guarantee specific
          financial outcomes or performance beyond any guarantees expressly outlined in a written agreement.
          All information provided is for general informational purposes only and should not be construed as
          financial, legal, or investment advice. Any examples or references are illustrative and not
          indicative of typical results.
        </p>
        <div className="text-xs text-white/80">
          <p className="">© 2026 Cloverbloom California, LLC. All rights reserved.</p>
        </div>
      </div>
      <div
        className={`fixed bottom-6 right-6 z-[120] transition-all duration-300 ${
          showCaseStudiesNotice ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <Alert
          layout="row"
          variant="default"
          isNotification
          icon={<CircleAlert className="text-red-500" size={16} strokeWidth={2} />}
          className="border-border text-foreground"
        >
          <p className="text-sm text-foreground">Case Studies coming soon</p>
        </Alert>
      </div>
    </footer>
  );
}
