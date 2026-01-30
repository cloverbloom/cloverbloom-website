"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ icon, title, description, className }, ref) => {
    const titleId = React.useId();

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-start gap-4 rounded-2xl border border-white/20 bg-black/45 p-6 text-left text-white shadow-lg backdrop-blur-2xl",
          "transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-white/30 hover:bg-black/55",
          className
        )}
        aria-labelledby={titleId}
      >
        <div className="flex w-full justify-center">
          <div className="h-12 w-12">{icon}</div>
        </div>
        <div className="flex flex-col">
          <h3 id={titleId} className="text-lg font-semibold leading-none tracking-tight">
            {title}
          </h3>
          <p className="mt-2 text-sm text-white/80">{description}</p>
        </div>
      </div>
    );
  }
);
FeatureCard.displayName = "FeatureCard";

interface FeatureGridProps extends React.HTMLAttributes<HTMLDivElement> {
  features: FeatureCardProps[];
}

const FeatureGrid = React.forwardRef<HTMLDivElement, FeatureGridProps>(
  ({ features = [], className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    );
  }
);
FeatureGrid.displayName = "FeatureGrid";

export { FeatureGrid };
