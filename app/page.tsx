import { BannerNewFeature } from "@/components/banner-demo";
import HeroSectionDemo from "@/components/hero-section-2-demo";
import NavbarDemo from "@/components/navbar-demo";
import { AboutCloverbloom } from "@/components/ui/about-cloverbloom";
import { FeatureCards } from "@/components/ui/feature-cards";
import { ProfileCard } from "@/components/ui/profile-card";
import { RainbowButton } from "@/components/ui/rainbow-button";
import FooterSection from "@/components/footer-section";

export default function Home() {
  return (
    <div className="pt-12">
      <BannerNewFeature />
      <NavbarDemo />
      <div className="relative">
        <HeroSectionDemo />
        <img
          src="/arrow-01.svg"
          alt=""
          className="pointer-events-none absolute left-[calc(40%+115px)] top-[calc(32%-85px)] w-44 origin-center rotate-[-5deg] opacity-80 md:w-64 lg:w-80"
          aria-hidden="true"
          draggable={false}
        />
        <div className="h-0" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 -mb-4 flex w-full items-end justify-end pr-10 md:pr-16">
          <div className="pointer-events-auto flex flex-col items-center gap-4">
            <a
              href="https://cal.com/garrett-nelson/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RainbowButton className="text-base">Get Started Today!</RainbowButton>
            </a>
            <img
              src="/hero-garrett.png"
              alt="Garrett"
              className="block h-[320px] w-auto object-contain"
              draggable={false}
            />
          </div>
        </div>
      </div>
      <div className="py-2 md:py-4">
        <ProfileCard />
      </div>
      <div className="pt-8 md:pt-12">
        <AboutCloverbloom />
      </div>
      <FooterSection />
    </div>
  );
}
