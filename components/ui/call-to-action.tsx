"use client";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { openEvaluationDialog } from "@/lib/evaluation-intake";

type CTAProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
};

function CTA({
  title = "Put your Airbnb on autopilot.",
  description = "Owning a short-term rental shouldn't feel like a second job. Replace day-to-day operational stress with professional strategies, clear communication, and performance-driven execution so your property runs better than ever with zero effort.",
  buttonLabel = "Create FREE Income Projection",
}: CTAProps) {
  return (
    <div className="w-full pt-10 pb-16 md:pt-12 md:pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto w-fit flex flex-col text-center bg-muted rounded-2xl p-6 md:p-8 gap-4 items-center">
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl font-bold tracking-tight max-w-xl">{title}</h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              {description}
            </p>
          </div>
          <div className="flex flex-row">
            <RainbowButton
              type="button"
              className="text-base"
              onClick={() => openEvaluationDialog()}
            >
              {buttonLabel}
            </RainbowButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CTA };
