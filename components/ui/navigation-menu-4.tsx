"use client";

import React from "react";
import Link from "next/link";

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
  { href: "#meet-garrett", label: "About" },
  { href: "#", label: "Contact", type: "dialog" as const },
];

export default function NavigationMenu4() {
  const handleEvaluationClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    openEvaluationDialog();
  };

  return (
    <Dialog>
      <header className="border-b border-transparent">
        <div className="flex h-16 items-center justify-between gap-4 px-8 md:px-12 lg:px-16">
          <div className="flex items-center gap-4">
            {/* Mobile menu trigger */}
            <Popover>
              <PopoverTrigger asChild>
                <Button className="group size-11 cursor-pointer md:hidden" variant="ghost" size="icon">
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
                              <a className="cursor-pointer px-2 py-2">
                                {link.label}
                              </a>
                            </DialogTrigger>
                          ) : link.type === "evaluation" ? (
                            <button
                              type="button"
                              className="w-full cursor-pointer px-2 py-2 text-left"
                              onClick={handleEvaluationClick}
                            >
                              {link.label}
                            </button>
                          ) : (
                            <a
                              href={link.href}
                              target={link.external ? "_blank" : undefined}
                              rel={link.external ? "noopener noreferrer" : undefined}
                              className="cursor-pointer px-2 py-2"
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
            <Link href="/" className="text-primary hover:text-primary/90 order-first cursor-pointer md:order-none">
              <img src="/logo-blue.webp" alt="Cloverbloom logo" className="h-10 w-auto shrink-0" />
            </Link>
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
                      ) : (
                        <NavigationMenuLink asChild>
                          <a
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            className="text-muted-foreground hover:text-primary cursor-pointer py-1.5 px-2 font-medium"
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
        </div>
        <div className="px-8 pb-2 text-center md:px-12 lg:px-16">
          <p className="text-lg font-bold text-foreground">CLOVERBLOOM</p>
          <p className="text-xs tracking-wider text-muted-foreground">STR Operations</p>
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
