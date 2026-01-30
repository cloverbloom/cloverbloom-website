"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
  {
    title: "Obsessive Management",
    description:
      "I don’t just manage—I look for opportunities to go above and beyond for you and your guests. Details are owned end-to-end, with nothing slipping through the cracks.",
    icon: {
      src: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-XimLfa9nmGlBpUT8xFkxuwQFz2hhXO.png&w=320&q=75",
      alt: "Obsessive Management icon",
    },
  },
  {
    title: "Market Awareness",
    description:
      "I am constantly reviewing performance data across the country. I understand what’s working, what’s changing, and address specifics your property can improve upon.",
    icon: {
      src: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-CK4odMSKWdmIj0ueBtNq9HOZR6Fbgv.png&w=320&q=75",
      alt: "Market Awareness icon",
    },
  },
  {
    title: "Unimpeachable Character",
    description:
      "I operate as if these were my own properties. I answer the phone, respond to guests, and solve problems—every time, without deflection or delay.",
    icon: {
      src: "https://ouch-prod-var-cdn.icons8.com/ui/illustrations/previews/xm6Sq4gQXXmQh4TS.webp",
      alt: "Unimpeachable Character icon",
    },
  },
];

export function MeetGarrettTimeline({ className }: { className?: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={sectionRef} className={`relative mx-auto max-w-[360px] py-16 ${className ?? ""}`}>
      <div className="relative -mt-[65px]">
        <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/20">
          <motion.div
            className="absolute left-0 top-0 h-full w-px bg-white/60"
            style={{ scaleY: lineScale, transformOrigin: "top" }}
          />
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="h-0" aria-hidden="true" />
        {features.map((feature, index) => {
          const start = index / features.length;
          const end = (index + 1) / features.length;
          const opacity = useTransform(scrollYProgress, [start, end], [0.6, 1]);
          const scale = useTransform(scrollYProgress, [start, end], [1, 1.03]);

          return (
            <motion.div
              key={feature.title}
              style={{ opacity, scale }}
              className="w-full rounded-3xl border border-white/20 bg-black/45 p-6 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex flex-col items-start gap-4">
                <img src={feature.icon.src} alt={feature.icon.alt} className="h-12 w-12" />
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-white/80">{feature.description}</p>
              </div>
            </motion.div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
