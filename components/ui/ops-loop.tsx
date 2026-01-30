import React from "react";

export function OpsLoopSection() {
  return (
    <section className="w-full bg-white text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            One Standard. Two Forces.
          </h2>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            Our edge comes from a tight feedback loop between hands-on owner management
            and uncompromising cleaning execution.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Subtle circle guide */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10" />

          {/* Curved bi-directional arrow */}
          <svg
            className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[520px] -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 520 220"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M70 150 C180 20, 340 20, 450 150"
              stroke="#2154D6"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M450 150 L425 135"
              stroke="#2154D6"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M450 150 L435 175"
              stroke="#2154D6"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M450 80 C340 200, 180 200, 70 80"
              stroke="#2154D6"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M70 80 L95 95"
              stroke="#2154D6"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M70 80 L90 55"
              stroke="#2154D6"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>

          <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
            <div className="w-full max-w-md rounded-3xl border border-black/10 bg-white/80 p-6 shadow-lg backdrop-blur-xl">
              <h3 className="text-xl font-semibold">Garrett</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Direct response, guest communication, pricing, and daily operations —
                handled personally with no handoffs.
              </p>
            </div>

            <div className="w-full max-w-md rounded-3xl border border-black/10 bg-white/80 p-6 shadow-lg backdrop-blur-xl">
              <h3 className="text-xl font-semibold">Cleaners</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Execute strict checklists, report issues immediately, and operate under
                ruthless quality standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
