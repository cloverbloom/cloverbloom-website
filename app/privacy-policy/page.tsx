import type { Metadata } from "next";
import NavbarDemo from "@/components/navbar-demo";
import FooterSection from "@/components/footer-section";

export const metadata: Metadata = {
  title: "Privacy Policy | Cloverbloom",
  description: "Privacy Policy for Cloverbloom California, LLC",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-12">
      <NavbarDemo />
      <main className="mx-auto max-w-3xl px-6 py-14">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-neutral-600">
            <span className="font-medium">Cloverbloom California, LLC</span>
            <br />
            <span className="font-medium">Last Updated:</span> January 2026
          </p>
        </header>

        <hr className="my-8 border-neutral-200" />

        <section className="space-y-10">
        <Section title="1. Introduction">
          <p>
            Cloverbloom California, LLC (“Cloverbloom,” “Company,” “we,” “us,” or “our")
            operates www.cloverbloom.co (the “Website") and provides short-term rental
            consulting and property management services.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard
            information when you:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Visit our Website</li>
            <li>Submit forms</li>
            <li>Communicate with us</li>
            <li>Receive marketing or outreach communications</li>
            <li>Engage our services</li>
          </ul>
          <p>By using our Website or communicating with us, you acknowledge this Policy.</p>
        </Section>

        <Section title="2. Company Information">
          <address className="not-italic">
            <div>Cloverbloom California, LLC</div>
            <div>6817 Florey St.</div>
            <div>San Diego, CA 92122</div>
            <div>
              Email:{" "}
              <a className="underline" href="mailto:garrett@cloverbloom.co">
                garrett@cloverbloom.co
              </a>
            </div>
            <div>
              Phone:{" "}
              <a className="underline" href="tel:+19706315800">
                (970) 631-5800
              </a>
            </div>
          </address>
        </Section>

        <Section title="3. Categories of Information We Collect">
          <SubSection title="A. Information You Provide Directly">
            <ul className="list-disc space-y-2 pl-5">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Property address</li>
              <li>Airbnb listing URL</li>
              <li>Revenue and performance data</li>
              <li>Business goals</li>
              <li>Message content</li>
              <li>Payment information (processed via Stripe)</li>
            </ul>
          </SubSection>

          <SubSection title="B. Information Collected Automatically">
            <ul className="list-disc space-y-2 pl-5">
              <li>IP address</li>
              <li>Device type</li>
              <li>Browser type</li>
              <li>Pages visited</li>
              <li>Date and time of visit</li>
              <li>Referral source</li>
              <li>Advertising interaction data</li>
            </ul>

            <p className="mt-4">We use:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Cookies</li>
              <li>Google Analytics</li>
              <li>Google Ads tracking</li>
              <li>Meta (Facebook) Pixel</li>
              <li>Retargeting technologies</li>
            </ul>
          </SubSection>
        </Section>

        <Section title="4. Information Collected from Public Sources">
          <p>
            Cloverbloom may collect business-related contact information from publicly
            available sources, including:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Public property listings</li>
            <li>Short-term rental platforms</li>
            <li>Public business directories</li>
            <li>Government records</li>
          </ul>
          <p className="mt-4">
            This information may include name, phone number, property address, or
            publicly listed email address.
          </p>
          <p>
            We use this information solely for legitimate business outreach related to
            property management and consulting services.
          </p>
          <p>
            If you prefer not to be contacted, you may request removal at any time.
          </p>
        </Section>

        <Section title="5. How We Use Information">
          <p>We use collected information to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Respond to inquiries</li>
            <li>Evaluate potential client properties</li>
            <li>Provide consulting and management services</li>
            <li>Send business communications</li>
            <li>Send newsletters</li>
            <li>Conduct SMS campaigns</li>
            <li>Conduct cold outreach</li>
            <li>Run advertising and retargeting campaigns</li>
            <li>Process payments</li>
            <li>Improve our Website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-4">We do not sell personal information.</p>
        </Section>

        <Section title="6. SMS Communications & TCPA Notice">
          <SubSection title="A. Opt-In SMS">
            <p>If you opt in to SMS communications:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Message frequency may vary</li>
              <li>Message and data rates may apply</li>
              <li>Reply STOP to unsubscribe</li>
              <li>Reply HELP for assistance</li>
            </ul>
            <p className="mt-4">
              Consent to receive SMS messages is not a condition of purchase.
            </p>
          </SubSection>

          <SubSection title="B. Business Outreach SMS">
            <p>
              Cloverbloom may send SMS communications to property owners using publicly
              available contact information for legitimate business purposes.
            </p>
            <p>
              If you receive such communication and wish to opt out, reply STOP or
              contact us directly.
            </p>
            <p>We honor opt-out requests promptly.</p>
          </SubSection>
        </Section>

        <Section title="7. Email Communications">
          <p>We may send:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Direct responses to inquiries</li>
            <li>Marketing emails</li>
            <li>Service-related updates</li>
            <li>Business outreach emails</li>
          </ul>
          <p className="mt-4">You may unsubscribe from marketing emails at any time.</p>
        </Section>

        <Section title="8. Cookies & Tracking Technologies">
          <p>We use cookies and similar technologies to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Analyze traffic</li>
            <li>Measure ad performance</li>
            <li>Retarget visitors</li>
            <li>Improve user experience</li>
          </ul>
          <p className="mt-4">
            You may disable cookies in your browser settings. Disabling cookies may
            limit Website functionality.
          </p>
        </Section>

        <Section title="9. Third-Party Service Providers">
          <p>We use third-party providers, including:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Cloudflare (Hosting & Security)</li>
            <li>Google (Analytics & Ads)</li>
            <li>Meta (Advertising & Pixel)</li>
            <li>Stripe (Payment Processing)</li>
            <li>Twilio (SMS Communication)</li>
            <li>Cal.com (Scheduling)</li>
            <li>Notion (CRM)</li>
            <li>Google Workspace (Email & Storage)</li>
          </ul>
          <p className="mt-4">
            These providers process information in accordance with their own privacy
            policies.
          </p>
        </Section>

        <Section title="10. Data Storage & Security">
          <p>
            We store data using secure cloud-based systems including Notion and Google
            Drive.
          </p>
          <p>
            We implement commercially reasonable safeguards to protect information. No
            system can guarantee absolute security.
          </p>
        </Section>

        <Section title="11. Data Retention">
          <p>We retain information as long as necessary to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Provide services</li>
            <li>Maintain business records</li>
            <li>Comply with legal obligations</li>
            <li>Enforce agreements</li>
          </ul>
          <p className="mt-4">
            Data is securely deleted or anonymized when no longer required.
          </p>
        </Section>

        <Section title="12. California Privacy Rights (CCPA)">
          <p>If you are a California resident, you have the right to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Request access to personal information</li>
            <li>Request deletion of personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request disclosure of categories of data collected</li>
            <li>Request disclosure of purposes for collection</li>
            <li>Opt out of “sale” or “sharing” of personal data</li>
          </ul>
          <p className="mt-4">
            Cloverbloom does not sell personal information.
          </p>
          <p>
            To exercise your rights, contact{" "}
            <a className="underline" href="mailto:garrett@cloverbloom.co">
              garrett@cloverbloom.co
            </a>
            . We will respond within the timeframe required by law.
          </p>
        </Section>

        <Section title="13. Do Not Track Signals">
          <p>Our Website does not respond to “Do Not Track” browser signals.</p>
        </Section>

        <Section title="14. Business Transfers">
          <p>
            If Cloverbloom undergoes a merger, acquisition, restructuring, or sale,
            information may be transferred as part of that transaction.
          </p>
        </Section>

        <Section title="15. Children’s Privacy">
          <p>
            Our services are not directed to individuals under 18. We do not knowingly
            collect information from minors.
          </p>
        </Section>

        <Section title="16. External Links">
          <p>
            Our Website may contain links to third-party websites. We are not
            responsible for their privacy practices.
          </p>
        </Section>

        <Section title="17. Changes to This Policy">
          <p>
            We may update this Privacy Policy at any time. Updates will be posted with
            a revised “Last Updated” date. Continued use of the Website constitutes
            acceptance of changes.
          </p>
        </Section>

        <Section title="18. Contact Us">
          <address className="not-italic">
            <div>Cloverbloom California, LLC</div>
            <div>6817 Florey St.</div>
            <div>
              Email:{" "}
              <a className="underline" href="mailto:garrett@cloverbloom.co">
                garrett@cloverbloom.co
              </a>
            </div>
            <div>
              Phone:{" "}
              <a className="underline" href="tel:+19706315800">
                (970) 631-5800
              </a>
            </div>
          </address>
        </Section>

        <aside className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-sm text-neutral-700">
          <p className="font-medium">Important Operational Warning</p>
          <p className="mt-2">
            Because Cloverbloom runs cold SMS outreach using publicly available contact
            information, Cloverbloom must honor opt-outs promptly and avoid deceptive
            messaging. If you receive a message and wish to opt out, reply STOP or
            contact us.
          </p>
        </aside>
        </section>
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
      <div className="space-y-3 text-neutral-800 leading-relaxed">{children}</div>
    </section>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <h3 className="pt-2 text-base font-semibold">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
