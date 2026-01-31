import React from "react";
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
      <AboutUsStats />
      <FAQs />
      <img
        src="/arrow-3.svg"
        alt=""
        className="pointer-events-none absolute left-[calc(50%+380px)] top-[calc(75%-160px)] hidden w-12 opacity-80 sm:block md:w-16"
        aria-hidden="true"
        draggable={false}
      />
      <CTA />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex w-full items-end justify-end pr-6 md:pr-10 2xl:pr-10 max-sm:static max-sm:mt-4 max-sm:-mb-2 max-sm:justify-center max-sm:pr-0">
        <img
          src="/footer-garrett.webp"
          alt="Garrett headshot"
          className="block h-64 w-auto object-contain max-sm:h-40 2xl:h-80"
          draggable={false}
        />
      </div>
    </section>
  );
}
