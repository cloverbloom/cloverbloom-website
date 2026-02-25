"use client";

import React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { BGPattern } from "@/components/ui/bg-pattern";

export interface ProfileCardProps {
  name?: string;
  title?: string;
  bioParts?: [string, string, string];
  imageUrl?: string;
  className?: string;
}

export function ProfileCard(props: ProfileCardProps) {
  const {
    name = "Garrett Nelson",
    title = "Founder",
    bioParts = [
      "Garrett Nelson is a short-term rental investor and the founder of Cloverbloom, an expert Airbnb operation team that specializes in helping busy Airbnb owners earn more while reclaiming their time and peace of mind.",
      "\"I work with owners who want their Airbnb to function like an asset, not a second job.\"",
      "Previously working as an Industrial Automation Engineer for the past two years, a passion for real estate and business sparked a complete career change. After working with the BNB Investor Academy for the last 12 months, Cloverbloom was founded with one clear objective — give owners so much value they wish they'd started sooner.",
    ],
    imageUrl = "/meet-garrett.webp",
    className,
  } = props;

  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      id="meet-garrett"
      className={cn("relative w-full overflow-hidden bg-black text-white scroll-mt-[-33px]", className)}
      onMouseMove={handleMouseMove}
    >
      <div className="pointer-events-none absolute -inset-px" />
      <BGPattern variant="dots" mask="fade-edges" fill="rgba(255,255,255,0.45)" size={14} className="opacity-90" />
      <div className="relative mx-auto max-w-5xl px-4 py-16 md:px-8 lg:px-16">

        <div className="hidden md:flex relative items-center">
          <div className="h-[470px] w-[470px] overflow-hidden rounded-3xl bg-gray-200 flex-shrink-0">
            <img
              src={imageUrl}
              alt={name}
              width={470}
              height={470}
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="ml-[-70px] mt-16 z-10 w-full max-w-2xl rounded-3xl border border-white/20 bg-black/45 p-8 shadow-2xl backdrop-blur-2xl"
          >
            <div className="mb-5">
              <h3 className="mb-2 text-2xl font-bold text-white">{name}</h3>
              <p className="text-sm font-medium text-white/60">{title}</p>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-white/90">
              <p>{bioParts[0]}</p>
              <p className="font-semibold">{bioParts[1]}</p>
              <p>{bioParts[2]}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden"
        >
          <div className="mb-6 aspect-square overflow-hidden rounded-3xl bg-gray-200">
            <img
              src={imageUrl}
              alt={name}
              width={470}
              height={470}
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>

          <div className="rounded-3xl border border-white/20 bg-black/45 p-6 shadow-2xl backdrop-blur-2xl">
            <h3 className="mb-2 text-xl font-bold text-white">{name}</h3>
            <p className="mb-4 text-sm font-medium text-white/60">{title}</p>
            <div className="space-y-3 text-sm leading-relaxed text-white/90">
              <p>{bioParts[0]}</p>
              <p className="font-semibold">{bioParts[1]}</p>
              <p>{bioParts[2]}</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
