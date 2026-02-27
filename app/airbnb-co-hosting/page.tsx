import type { Metadata } from "next";
import Link from "next/link";
import NavbarDemo from "@/components/navbar-demo";
import FooterSection from "@/components/footer-section";

export const metadata: Metadata = {
  title: "Airbnb Co-Hosting Services | Cloverbloom",
  description:
    "Airbnb co-hosting services by Cloverbloom: guest communication, pricing optimization, calendar management, turnover coordination, and performance-focused STR operations.",
  alternates: {
    canonical: "/airbnb-co-hosting",
  },
  openGraph: {
    title: "Airbnb Co-Hosting Services | Cloverbloom",
    description:
      "Hands-on Airbnb co-hosting built for owners who want stronger performance without running day-to-day operations.",
    url: "https://cloverbloom.co/airbnb-co-hosting",
  },
};

export default function AirbnbCoHostingPage() {
  return (
    <div className="pt-12">
      <NavbarDemo />
      <main className="mx-auto max-w-4xl px-6 py-14">
        <header className="space-y-4">
          <p className="text-sm font-semibold tracking-wide text-[#2154D6] uppercase">
            Service
          </p>
          <h1 className="text-4xl font-bold tracking-tight">
            Airbnb Co-Hosting Services
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Cloverbloom helps Airbnb owners run high-performing short-term rentals
            without managing every guest message, pricing decision, and operational
            task themselves.
          </p>
        </header>

        <section className="mt-10 space-y-5">
          <h2 className="text-2xl font-semibold">What Cloverbloom Handles</h2>
          <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-neutral-800">
            <li>24/7 guest communication and support</li>
            <li>Dynamic pricing optimization and occupancy strategy</li>
            <li>Calendar management, check-in and check-out coordination</li>
            <li>Cleaner scheduling and quality-control workflows</li>
            <li>Emergency maintenance coordination with local vendors</li>
            <li>Listing performance reviews and operational improvements</li>
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">Who It Is For</h2>
          <p className="text-base leading-relaxed text-neutral-800">
            This service is built for owners who treat their rental like a business
            asset and want consistent execution, stronger guest experience, and
            better performance without becoming full-time operators.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">Next Step</h2>
          <p className="text-base leading-relaxed text-neutral-800">
            Start with a discovery call and a performance review of your current
            listing and market.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://cal.com/garrett-nelson/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-[#2154D6] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1b47b4]"
            >
              Book Discovery Call
            </Link>
            <Link
              href="/airbnb-management-san-diego"
              className="inline-flex rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Explore San Diego Service
            </Link>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}
