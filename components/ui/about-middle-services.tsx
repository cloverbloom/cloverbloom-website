"use client";

import React from "react";
import {
  CalendarDays,
  ClipboardCheck,
  Gauge,
  Megaphone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

type ServiceItemData = {
  icon: React.ReactNode;
  title: string;
  description: string;
  position: "left" | "right";
};

const services: ServiceItemData[] = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Guest Screening and 24/7 Guest Communication",
    description:
      "To handle any guest requests or issues during their stay.",
    position: "left",
  },
  {
    icon: <CalendarDays className="h-6 w-6" />,
    title: "Coordinating Check-Ins/Outs and Turnover",
    description:
      "Common guest requests like early check-in, late check-out, and converting additional nights.",
    position: "right",
  },
  {
    icon: <ClipboardCheck className="h-6 w-6" />,
    title: "Cleaning Coordination",
    description:
      "Including quality control to ensure top notch cleanliness which is the leading driver of 5 star reviews.",
    position: "left",
  },
  {
    icon: <Gauge className="h-6 w-6" />,
    title: "Pricing Optimization",
    description:
      "Adjusting nightly rates depending on seasonality, comparable homes, orphan nights, and market occupancy, which will in turn increase your occupancy.",
    position: "left",
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Managing Emergency Maintenance Issues",
    description:
      "Including coordinating with local vendors like plumbers, electricians, HVAC technicians, etc. as needed at zero-markup for services.",
    position: "right",
  },
  {
    icon: <Megaphone className="h-6 w-6" />,
    title: "Marketing Optimization",
    description:
      "To get you to the front of the Airbnb explore page and keep you there.",
    position: "right",
  },
];

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  direction: "left" | "right";
}

function ServiceItem({ icon, title, description, direction }: ServiceItemProps) {
  return (
    <motion.div
      className="group rounded-2xl border border-white/40 bg-white/65 p-5 shadow-sm backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/75"
      initial={{ opacity: 0, x: direction === "left" ? -16 : 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.25, once: true }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="rounded-lg bg-[#2154D6]/10 p-3 text-[#2154D6] transition-colors duration-300 group-hover:bg-[#2154D6]/15">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <p className="pl-12 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </motion.div>
  );
}

export function AboutMiddleServices() {
  return (
    <div className="relative isolate mx-auto max-w-6xl px-6 py-8 md:py-10">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,#000_38%,transparent_90%)]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 18% 30%, rgba(33,84,214,0.11) 0 1px, transparent 1px 24px), repeating-radial-gradient(circle at 80% 70%, rgba(33,84,214,0.1) 0 1px, transparent 1px 26px), repeating-radial-gradient(circle at 50% 48%, rgba(33,84,214,0.09) 0 1px, transparent 1px 30px)",
        }}
      />
      <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="space-y-6 md:space-y-7">
          {services
            .filter((service) => service.position === "left")
            .map((service) => (
              <ServiceItem
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                direction="left"
              />
            ))}
        </div>

        <div className="order-first mb-6 flex items-center justify-center md:order-none md:mb-0">
          <motion.div
            className="relative w-full max-w-sm"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.35, once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex h-[430px] w-full items-center justify-center">
              <img
                src="/logo-blue.svg"
                alt="Cloverbloom logo"
                className="w-full max-w-[360px] object-contain"
                draggable={false}
              />
            </div>
          </motion.div>
        </div>

        <div className="space-y-6 md:space-y-7">
          {services
            .filter((service) => service.position === "right")
            .map((service) => (
              <ServiceItem
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                direction="right"
              />
            ))}
        </div>
      </div>
    </div>
  );
}
