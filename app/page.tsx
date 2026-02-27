import type { Metadata } from "next";
import { BannerNewFeature } from "@/components/banner-demo";
import HeroSectionDemo from "@/components/hero-section-2-demo";
import NavbarDemo from "@/components/navbar-demo";
import { AboutCloverbloom } from "@/components/ui/about-cloverbloom";
import { ProfileCard } from "@/components/ui/profile-card";
import FooterSection from "@/components/footer-section";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cloverbloom",
  url: "https://cloverbloom.co/",
  logo: "https://cloverbloom.co/logo-blue.webp",
  email: "garrett@cloverbloom.co",
  telephone: "+1-970-631-5800",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6817 Florey St.",
    addressLocality: "San Diego",
    addressRegion: "CA",
    postalCode: "92122",
    addressCountry: "US",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Cloverbloom",
  image: "https://cloverbloom.co/meta-image.webp",
  url: "https://cloverbloom.co/",
  telephone: "+1-970-631-5800",
  email: "garrett@cloverbloom.co",
  areaServed: [
    {
      "@type": "City",
      name: "San Diego",
    },
    {
      "@type": "AdministrativeArea",
      name: "California",
    },
  ],
  serviceType: [
    "Airbnb co-hosting",
    "Short-term rental operations",
    "Airbnb pricing optimization",
    "Guest communication management",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "6817 Florey St.",
    addressLocality: "San Diego",
    addressRegion: "CA",
    postalCode: "92122",
    addressCountry: "US",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Cloverbloom STR Operations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cloverbloom STR Operations is a hands-on co-hosting service that manages guest communication, pricing, calendar operations, and listing optimization so owners can run Airbnb like an asset, not a second job.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with a discovery call. Cloverbloom reviews your listing, market, and goals to confirm fit and performance upside, then provides a clear implementation plan.",
      },
    },
    {
      "@type": "Question",
      name: "Who is it a good fit for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cloverbloom is a fit for owners who want stronger short-term rental performance without running daily operations, especially active listings with room to improve pricing and execution.",
      },
    },
    {
      "@type": "Question",
      name: "Who will I work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You work directly with Cloverbloom's lead operator, Garrett Nelson. Strategy and execution remain with one accountable operator.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Cloverbloom different?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cloverbloom is operator-led and execution-first, combining pricing, guest communication, and operations under one accountable system with strict cleaning quality control.",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="pt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BannerNewFeature />
      <NavbarDemo />
      <div className="relative">
        <HeroSectionDemo />
        <div className="h-0" aria-hidden="true" />
        <div className="pointer-events-none static z-20 mt-4 flex w-full max-w-[1440px] items-center justify-center pr-0 xl:absolute xl:bottom-0 xl:left-1/2 xl:mt-0 xl:-translate-x-1/2 xl:items-end xl:justify-end xl:pr-16">
          <div className="pointer-events-auto flex flex-col items-center">
            <img
              src="/hero-garrett.webp"
              alt="Garrett"
              className="block h-[175px] w-auto object-contain xl:h-[224px]"
              draggable={false}
            />
          </div>
        </div>
      </div>
      <div className="pt-0 pb-2 md:pb-4">
        <ProfileCard />
      </div>
      <div className="pt-8 md:pt-12">
        <AboutCloverbloom />
      </div>
      <div>
        <FooterSection />
      </div>
    </div>
  );
}
