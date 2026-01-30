import { RainbowButton } from "@/components/ui/rainbow-button";

function CTA() {
  return (
    <div className="w-full pt-10 pb-16 md:pt-12 md:pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto w-fit flex flex-col text-center bg-muted rounded-2xl p-6 md:p-8 gap-4 items-center">
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl font-bold tracking-tight max-w-xl">
              Put your Airbnb on autopilot.
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              Owning a short-term rental shouldn’t feel like a second job. I replace day-to-day
              operational stress with professional management, clear strategy, and performance-driven
              execution—so your property runs better without more effort from you.
            </p>
          </div>
          <div className="flex flex-row">
            <a
              href="https://cal.com/garrett-nelson/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RainbowButton className="text-base">
                Jump On a Call Today!
              </RainbowButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CTA };
