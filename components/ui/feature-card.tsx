import React from "react";

import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/20 bg-black/45 p-6 text-center text-white backdrop-blur-2xl",
        "transition-all duration-300 ease-in-out",
        "hover:-translate-y-2 hover:shadow-2xl",
        className
      )}
    >
      <div className="mb-6 flex justify-center">
        <div className="h-12 w-12">{icon}</div>
      </div>
      <h3 className="mb-2 text-lg font-semibold tracking-tight">{title}</h3>
      <p className="text-sm leading-relaxed text-white/80">{description}</p>
    </div>
  );
};
