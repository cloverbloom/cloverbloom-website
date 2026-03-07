"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { EvaluationIntakeDialog } from "@/components/ui/evaluation-intake-dialog";
import { openEvaluationDialog } from "@/lib/evaluation-intake";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
  { href: "#", label: "Income Projection", type: "evaluation" as const },
  {
    href: "https://cal.com/garrett-nelson/discovery-call",
    label: "Calendar",
    external: true,
  },
  { href: "/articles", label: "Articles" },
  { href: "#meet-garrett", label: "About" },
  { href: "#", label: "Contact", type: "dialog" as const },
];

export default function NavigationMenu4() {
  const pathname = usePathname();
  const router = useRouter();
  const mobileNavItemClass =
    "flex w-full items-center rounded-sm px-2 py-2 text-left text-sm leading-5";

  const handleEvaluationClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    openEvaluationDialog();
  };

  const handleNavAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    const target = document.querySelector(href);
    if (!target) {
      if (pathname !== "/") {
        event.preventDefault();
        router.push(`/${href}`);
      }
      return;
    }
    handleAnchorClick(event);
  };

  return (
    <Dialog>
      <header className="border-b border-transparent">
        <div className="flex h-16 items-center px-8 md:px-12 lg:px-16">
          <div className="relative flex w-full items-center justify-center md:justify-start md:gap-4">
            {/* Mobile menu trigger */}
            <Popover>
              <PopoverTrigger asChild>
                <Button className="group absolute left-0 size-11 cursor-pointer md:hidden" variant="ghost" size="icon">
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
                  <NavigationMenuList className="flex-col items-start gap-1 space-x-0">
                    {navigationLinks.map((link) => (
                      <NavigationMenuItem key={link.label} className="w-full">
                        {link.type === "dialog" ? (
                          <DialogTrigger asChild>
                            <button type="button" className={`${mobileNavItemClass} cursor-pointer`}>
                              {link.label}
                            </button>
                          </DialogTrigger>
                        ) : link.type === "evaluation" ? (
                          <button
                            type="button"
                            className={`${mobileNavItemClass} cursor-pointer`}
                            onClick={handleEvaluationClick}
                          >
                            {link.label}
                          </button>
                        ) : link.href.startsWith("/") && !link.external ? (
                          <Link href={link.href} className={`${mobileNavItemClass} cursor-pointer`}>
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            className={`${mobileNavItemClass} cursor-pointer`}
                            onClick={handleNavAnchorClick}
                            data-offset="0"
                          >
                            {link.label}
                          </a>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
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
                            className="text-muted-foreground hover:text-primary cursor-pointer py-1.5 px-2 font-medium"
                          >
                            {link.label}
                          </button>
                        </DialogTrigger>
                      ) : link.type === "evaluation" ? (
                        <button
                          type="button"
                          className="text-muted-foreground hover:text-primary cursor-pointer py-1.5 px-2 font-medium"
                          onClick={handleEvaluationClick}
                        >
                          {link.label}
                        </button>
                      ) : link.href.startsWith("/") && !link.external ? (
                        <NavigationMenuLink asChild>
                          <Link
                            href={link.href}
                            className="text-muted-foreground hover:text-primary cursor-pointer py-1.5 px-2 font-medium"
                          >
                            {link.label}
                          </Link>
                        </NavigationMenuLink>
                      ) : (
                        <NavigationMenuLink asChild>
                          <a
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            className="text-muted-foreground hover:text-primary cursor-pointer py-1.5 px-2 font-medium"
                            onClick={handleNavAnchorClick}
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
        </div>
        <div className="px-8 pb-2 text-center md:px-12 lg:px-16">
          <img
            src="/logo-blue.webp"
            alt="Cloverbloom logo"
            className="mx-auto mb-1.5 h-9 w-auto"
          />
          <p className="text-lg font-bold text-foreground">CLOVERBLOOM</p>
          <p className="text-xs tracking-wider text-muted-foreground">Property Solutions</p>
        </div>
      </header>
      <DialogContent onCloseAutoFocus={(event) => event.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="sr-only">Team contact</DialogTitle>
          <DialogDescription className="sr-only">
            Contact details for the Cloverbloom team.
          </DialogDescription>
        </DialogHeader>
        <TeamSection />
      </DialogContent>
      <EvaluationIntakeDialog />
    </Dialog>
  );
}
