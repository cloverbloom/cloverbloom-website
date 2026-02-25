"use client";

import React from "react";
import { Bell } from "lucide-react";
import { CircleAlert } from "lucide-react";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TeamSection from "@/components/ui/team";

const getScrollOffset = () => {
  const banner = document.querySelector("[data-banner]") as HTMLElement | null;
  if (!banner) {
    return 0;
  }
  return banner.getBoundingClientRect().height;
};

const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  const href = event.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#")) return;
  const target = document.querySelector(href);
  if (!target) return;
  event.preventDefault();
  const offset = getScrollOffset();
  const extra = Number.parseFloat(event.currentTarget.dataset.offset ?? "0");
  const extraOffset = Number.isFinite(extra) ? extra : 0;
  const top = target.getBoundingClientRect().top + window.scrollY - offset + extraOffset;
  window.requestAnimationFrame(() => {
    window.scrollTo({ top, behavior: "smooth" });
    history.pushState(null, "", href);
  });
};

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  {
    href: "https://cal.com/garrett-nelson/discovery-call",
    label: "Calendar",
    external: true,
  },
  { href: "#meet-garrett", label: "About" },
  { href: "#", label: "Case Studies", type: "comingSoon" as const },
  { href: "#", label: "Contact", type: "dialog" as const },
];

// Custom NotificationMenu Component
function NotificationMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="size-8 relative">
          <Bell className="h-4 w-4" />
          <Badge
            variant="destructive"
            className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
          >
            2
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          Notifications
          <Badge variant="secondary" className="ml-2">
            2 new
          </Badge>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex-col items-start p-3">
          <div className="flex w-full items-center justify-between">
            <span className="font-medium">Effect on Annual Revenue</span>
            <span className="text-xs text-muted-foreground">Now</span>
          </div>
          <span className="text-sm text-muted-foreground mt-1">
            Studies show professional management increase annual revenue by 25-35% on average.
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex-col items-start p-3">
          <div className="flex w-full items-center justify-between">
            <span className="font-medium">Professional vs. DIY Pricing</span>
            <span className="text-xs text-muted-foreground">Now</span>
          </div>
          <span className="text-sm text-muted-foreground mt-1">
            Professional pricing strategies performs 15-20% better than manual pricing on average.
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function NavigationMenu4() {
  const [showCaseStudiesNotice, setShowCaseStudiesNotice] = React.useState(false);
  const caseStudiesTimeoutRef = React.useRef<number | null>(null);

  const handleCaseStudiesClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (caseStudiesTimeoutRef.current) {
      window.clearTimeout(caseStudiesTimeoutRef.current);
    }
    setShowCaseStudiesNotice(true);
    caseStudiesTimeoutRef.current = window.setTimeout(() => {
      setShowCaseStudiesNotice(false);
    }, 2000);
  };

  React.useEffect(() => {
    return () => {
      if (caseStudiesTimeoutRef.current) {
        window.clearTimeout(caseStudiesTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Dialog>
      <header className="border-b border-transparent">
        <div className="flex h-16 items-center justify-between gap-4 px-8 md:px-12 lg:px-16">
          <div className="flex items-center gap-4">
            {/* Mobile menu trigger */}
            <Popover>
              <PopoverTrigger asChild>
                <Button className="group size-11 md:hidden" variant="ghost" size="icon">
                  <svg
                    className="pointer-events-none"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L20 12"
                      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-64 p-2 md:hidden">
                <NavigationMenu className="max-w-none *:w-full">
                  <NavigationMenuList className="flex-col items-start gap-1 md:gap-2">
                    {navigationLinks.map((link) => (
                      <NavigationMenuItem key={link.label} className="w-full">
                        <NavigationMenuLink asChild>
                          {link.type === "dialog" ? (
                            <DialogTrigger asChild>
                              <a className="px-2 py-2">
                                {link.label}
                              </a>
                            </DialogTrigger>
                          ) : link.type === "comingSoon" ? (
                            <button
                              type="button"
                              className="w-full px-2 py-2 text-left"
                              onClick={handleCaseStudiesClick}
                            >
                              {link.label}
                            </button>
                          ) : (
                            <a
                              href={link.href}
                              target={link.external ? "_blank" : undefined}
                              rel={link.external ? "noopener noreferrer" : undefined}
                              className="px-2 py-2"
                              onClick={handleAnchorClick}
                              data-offset="0"
                            >
                              {link.label}
                            </a>
                          )}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
            {/* Logo */}
            <a href="#" className="text-primary hover:text-primary/90 order-first md:order-none">
              <img src="/logo-blue.webp" alt="Cloverbloom logo" className="h-10 w-auto shrink-0" />
            </a>
            {/* Desktop nav */}
            <div className="max-md:hidden">
              <NavigationMenu>
                <NavigationMenuList>
                  {navigationLinks.map((link) => (
                    <NavigationMenuItem key={link.label}>
                      {link.type === "dialog" ? (
                        <DialogTrigger asChild>
                          <button
                            data-contact-trigger
                            className="text-muted-foreground hover:text-primary py-1.5 px-2 font-medium"
                          >
                            {link.label}
                          </button>
                        </DialogTrigger>
                      ) : link.type === "comingSoon" ? (
                        <button
                          type="button"
                          className="text-muted-foreground hover:text-primary py-1.5 px-2 font-medium"
                          onClick={handleCaseStudiesClick}
                        >
                          {link.label}
                        </button>
                      ) : (
                        <NavigationMenuLink asChild>
                          <a
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            className="text-muted-foreground hover:text-primary py-1.5 px-2 font-medium"
                            onClick={handleAnchorClick}
                            data-offset="0"
                          >
                            {link.label}
                          </a>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
                <NavigationMenuViewport />
              </NavigationMenu>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <NotificationMenu />
          </div>
        </div>
      </header>
      <div
        className={`fixed bottom-6 right-6 z-[120] transition-all duration-300 ${
          showCaseStudiesNotice ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <Alert
          layout="row"
          variant="default"
          isNotification
          icon={<CircleAlert className="text-red-500" size={16} strokeWidth={2} />}
          className="border-border text-foreground"
        >
          <p className="text-sm text-foreground">Case Studies coming soon</p>
        </Alert>
      </div>
      <DialogContent onCloseAutoFocus={(event) => event.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="sr-only">Team contact</DialogTitle>
          <DialogDescription className="sr-only">
            Contact details for the Cloverbloom team.
          </DialogDescription>
        </DialogHeader>
        <TeamSection />
      </DialogContent>
    </Dialog>
  );
}
