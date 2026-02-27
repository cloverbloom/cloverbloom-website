import type { Metadata } from "next";
import Link from "next/link";
import NavbarDemo from "@/components/navbar-demo";
import FooterSection from "@/components/footer-section";

export const metadata: Metadata = {
  title: "San Diego Airbnb Management | Cloverbloom",
  description:
    "San Diego Airbnb management and co-hosting by Cloverbloom. Improve occupancy, guest satisfaction, and nightly rate performance with operator-led execution.",
  alternates: {
    canonical: "/airbnb-management-san-diego",
  },
  openGraph: {
    title: "San Diego Airbnb Management | Cloverbloom",
    description:
      "Operator-led Airbnb management in San Diego focused on pricing, guest communication, and operational execution.",
    url: "https://cloverbloom.co/airbnb-management-san-diego",
  },
};

export default function AirbnbManagementSanDiegoPage() {
  return (
    <div className="pt-12">
      <NavbarDemo />
      <main className="mx-auto max-w-4xl px-6 py-14">
        <header className="space-y-4">
          <p className="text-sm font-semibold tracking-wide text-[#2154D6] uppercase">
            Location
          </p>
          <h1 className="text-4xl font-bold tracking-tight">
            San Diego Airbnb Management
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Cloverbloom provides performance-focused Airbnb management in San Diego
            for owners who want reliable operations and stronger property outcomes.
          </p>
        </header>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">Local STR Operations in San Diego</h2>
          <p className="text-base leading-relaxed text-neutral-800">
            San Diego is a competitive short-term rental market where listing
            quality, response speed, and pricing precision materially affect
            occupancy and revenue. Cloverbloom coordinates guest communication,
            calendar and turnover execution, and pricing strategy to keep your
            operation consistent.
          </p>
        </section>

        <section className="mt-10 space-y-5">
          <h2 className="text-2xl font-semibold">Services for San Diego Hosts</h2>
          <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-neutral-800">
            <li>Listing optimization and ongoing performance reviews</li>
            <li>Guest messaging and support from inquiry through checkout</li>
            <li>Nightly rate strategy based on seasonality and local demand</li>
            <li>Cleaning, turnover, and readiness coordination</li>
            <li>Issue triage and vendor coordination for maintenance events</li>
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">Talk With Cloverbloom</h2>
          <p className="text-base leading-relaxed text-neutral-800">
            If you own a short-term rental in San Diego and want expert execution
            without day-to-day management burden, schedule a discovery call.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://cal.com/garrett-nelson/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-[#2154D6] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1b47b4]"
            >
              Schedule Discovery Call
            </Link>
            <Link
              href="/airbnb-co-hosting"
              className="inline-flex rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted"
            >
              View Co-Hosting Service
            </Link>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}
