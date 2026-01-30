"use client";

import { ArrowRight } from "lucide-react";

import { Banner } from "@/components/ui/banner";

function BannerNewFeature() {
  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <Banner
        variant="default"
        className="bg-black text-white border-white/10"
        rounded="none"
      >
        <div className="w-full">
          <p className="flex justify-center text-sm">
            <a
              href="https://cal.com/garrett-nelson/discovery-call"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="me-1 text-base leading-none">✨</span>
              <span className="font-semibold">Founding Clients Offer:</span>{" "}
              Save 5% On Management Fees
              <ArrowRight
                className="-mt-0.5 ms-2 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          </p>
        </div>
      </Banner>
    </div>
  );
}

export { BannerNewFeature };
