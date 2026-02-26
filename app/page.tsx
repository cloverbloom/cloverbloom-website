import { BannerNewFeature } from "@/components/banner-demo";
import HeroSectionDemo from "@/components/hero-section-2-demo";
import NavbarDemo from "@/components/navbar-demo";
import { AboutCloverbloom } from "@/components/ui/about-cloverbloom";
import { ProfileCard } from "@/components/ui/profile-card";
import FooterSection from "@/components/footer-section";

export default function Home() {
  return (
    <div className="pt-12">
      <BannerNewFeature />
      <NavbarDemo />
      <div className="relative">
        <HeroSectionDemo />
        <div className="h-0" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 -mb-4 flex w-full max-w-[1440px] -translate-x-1/2 items-end justify-end pr-10 md:pr-16 max-sm:static max-sm:mt-4 max-sm:translate-x-0 max-sm:items-center max-sm:justify-center max-sm:pr-0">
          <div className="pointer-events-auto flex flex-col items-center">
            <img
              src="/hero-garrett.webp"
              alt="Garrett"
              className="block h-[224px] w-auto object-contain max-sm:h-[146px]"
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
      <div>
        <FooterSection />
      </div>
    </div>
  );
}
