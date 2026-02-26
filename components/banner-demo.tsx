"use client";

import { Banner } from "@/components/ui/banner";

function BannerNewFeature() {
  return (
    <div className="fixed left-0 right-0 top-0 z-50" data-banner>
      <Banner
        variant="default"
        className="bg-black text-white border-white/10"
        rounded="none"
      >
        <div className="w-full">
          <p className="flex justify-center px-2 text-center text-[12px] font-bold leading-tight sm:px-0 sm:text-sm sm:font-normal sm:whitespace-normal">
            <a href="tel:+19706315800" className="group">
              <span className="hidden font-semibold sm:inline">
                Looking to improve your property&apos;s performance?{" "}
              </span>
              <span>Contact me directly at (970) 631-5800</span>
            </a>
          </p>
        </div>
      </Banner>
    </div>
  );
}

export { BannerNewFeature };
