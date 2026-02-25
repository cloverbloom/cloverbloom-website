import type { Metadata } from "next";
import NavbarDemo from "@/components/navbar-demo";
import FooterSection from "@/components/footer-section";

export const metadata: Metadata = {
  title: "Terms & Conditions | Cloverbloom",
  description: "Terms and Conditions for Cloverbloom California, LLC",
};

export default function TermsPage() {
  return (
    <div className="pt-12">
      <NavbarDemo />
      <main className="mx-auto max-w-3xl px-6 py-14">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm text-neutral-600">
            <span className="font-medium">Cloverbloom California, LLC</span>
            <br />
            <span className="font-medium">Last Updated:</span> January 2026
          </p>
        </header>

        <hr className="my-8 border-neutral-200" />

        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using www.cloverbloom.co (the “Website") or engaging
            services from Cloverbloom California, LLC (“Cloverbloom,” “Company,"
            “we,” “us,” or “our"), you agree to be bound by these Terms &
            Conditions.
          </p>
          <p>
            These Terms govern Website use only and do not replace any separate
            written management or consulting agreement signed between Cloverbloom
            and a client.
          </p>
        </Section>

        <Section title="2. Nature of Services">
          <p>
            Cloverbloom provides consulting and co-hosting services for
            short-term rental property owners.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>We do not collect rent directly.</li>
            <li>We do not hold client funds.</li>
            <li>We do not sign leases.</li>
            <li>
              We may manage and operate Airbnb accounts and may be listed as the
              primary host.
            </li>
          </ul>
          <p>
            Property owners remain fully responsible for property ownership,
            compliance, licensing, taxes, insurance, and regulatory obligations.
          </p>
        </Section>

        <Section title="3. Separate Management Agreement">
          <p>
            Clients who engage Cloverbloom services enter into a separate
            written agreement. In the event of a conflict between these Terms and
            a signed agreement, the signed agreement controls.
          </p>
        </Section>

        <Section title="4. Fees & Payment">
          <p>
            Management compensation is twenty percent (20%) of gross revenue
            generated from managed properties unless otherwise stated in a
            signed agreement.
          </p>
          <p>Payments are invoiced via Stripe.</p>
          <p>No refunds are provided.</p>
        </Section>

        <Section title="5. No Revenue Guarantees">
          <p>
            Cloverbloom does not guarantee occupancy rates, revenue increases,
            profit levels, or performance outcomes.
          </p>
          <p>
            Testimonials, screenshots, case studies, and revenue examples
            displayed on the Website represent past performance and do not
            guarantee similar results.
          </p>
        </Section>

        <Section title="6. Intellectual Property">
          <p>
            All Website content and business materials are the exclusive property
            of Cloverbloom, including but not limited to:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Brand name and trademarks</li>
            <li>Logos and visual assets</li>
            <li>Text, copy, and content</li>
            <li>Frameworks and systems</li>
            <li>Pricing strategies and methodologies</li>
            <li>Marketing materials</li>
            <li>Software, code, and design elements</li>
            <li>Training materials</li>
            <li>Analytics processes</li>
          </ul>
          <p>
            You may not reproduce, distribute, scrape, copy, reverse engineer, or
            use our intellectual property without written consent.
          </p>
        </Section>

        <Section title="7. Prohibited Conduct">
          <ul className="list-disc space-y-2 pl-5">
            <li>Scraping or harvesting Website data</li>
            <li>Copying content or branding</li>
            <li>Using Cloverbloom’s name without authorization</li>
            <li>Interfering with Website security</li>
            <li>Attempting unauthorized access to systems</li>
          </ul>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>
            To the fullest extent permitted by law, Cloverbloom’s total liability
            is limited to three (3) months of management fees paid.
          </p>
          <p>
            Cloverbloom is not liable for indirect, incidental, consequential, or
            special damages, including lost profits.
          </p>
        </Section>

        <Section title="9. Indemnification">
          <p>
            You agree to indemnify and hold harmless Cloverbloom from any claims,
            damages, losses, or liabilities arising from:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Your property</li>
            <li>Guest injuries or disputes</li>
            <li>Regulatory violations</li>
            <li>Tax obligations</li>
            <li>Misrepresentations by the property owner</li>
          </ul>
        </Section>

        <Section title="10. Arbitration & Class Action Waiver">
          <p>
            Any dispute arising out of or relating to these Terms shall be
            resolved by binding arbitration in San Diego County, California.
          </p>
          <p>
            You waive any right to participate in a class action lawsuit or
            class-wide arbitration.
          </p>
        </Section>

        <Section title="11. Governing Law">
          <p>
            These Terms are governed by the laws of the State of California.
            Venue for arbitration shall be San Diego County, California.
          </p>
        </Section>

        <Section title="12. Termination">
          <p>
            Cloverbloom reserves the right to refuse service, terminate access,
            or modify services at any time without notice.
          </p>
        </Section>

        <Section title="13. Force Majeure">
          <p>
            Cloverbloom is not liable for delays or failure to perform resulting
            from events beyond reasonable control, including natural disasters,
            platform outages, government actions, or third-party service failures.
          </p>
        </Section>

        <Section title="14. Severability">
          <p>
            If any provision of these Terms is found unenforceable, the remaining
            provisions shall remain in full force.
          </p>
        </Section>

        <Section title="15. Changes to Terms">
          <p>
            We may modify these Terms at any time. Continued use of the Website
            constitutes acceptance of updated Terms.
          </p>
        </Section>

        <Section title="16. Contact Information">
          <p>
            Cloverbloom California, LLC
            <br />
            6817 Florey St.
            <br />
            Email: garrett@cloverbloom.co
            <br />
            Phone: (970) 631-5800
          </p>
        </Section>
      </main>
      <FooterSection />
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="pt-3 text-xl font-semibold tracking-tight">{title}</h2>
      <div className="space-y-3 text-neutral-800 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
