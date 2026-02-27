import React from "react";
import { AboutMiddleServices } from "@/components/ui/about-middle-services";
import { AboutUsStats } from "@/components/ui/about-us-stats";
import FAQs from "@/components/ui/faqs-component";
import { CTA } from "@/components/ui/call-to-action";

export function AboutCloverbloom() {
  return (
    <section id="about-cloverbloom" className="relative w-full bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-4 py-4 text-center md:px-6">
        <h2 className="text-4xl font-bold tracking-tight">
          About <span className="text-[#2154D6]">Cloverbloom</span>
        </h2>
        <p className="mt-2 mx-auto max-w-3xl text-lg text-muted-foreground">
          At <span className="font-semibold text-foreground">Cloverbloom</span>, our mission is simple: to help Airbnb owners operate their
          properties as durable, high-performing assets. We work closely with a
          limited number of clients, applying disciplined systems and data-driven
          decisions to improve performance without increasing owner involvement.
        </p>
      </div>
      <AboutMiddleServices />
      <AboutUsStats />
      <FAQs />
      <div className="relative">
        <img
          src="/arrow-3.svg"
          alt=""
          className="pointer-events-none absolute left-[calc(50%+320px)] top-0 hidden w-12 -translate-y-2/3 opacity-80 sm:block md:left-[calc(50%+360px)] md:w-16 lg:left-[calc(50%+390px)]"
          aria-hidden="true"
          draggable={false}
        />
        <CTA />
      </div>
      <div className="pointer-events-none static -mb-px z-10 flex w-full items-center justify-center pr-0 xl:absolute xl:inset-x-0 xl:bottom-0 xl:items-end xl:justify-end xl:pr-10 2xl:pr-10">
        <img
          src="/footer-garrett.webp"
          alt="Garrett headshot"
          className="block h-[208px] w-auto object-contain xl:h-64 2xl:h-80"
          draggable={false}
        />
      </div>
    </section>
  );
}
