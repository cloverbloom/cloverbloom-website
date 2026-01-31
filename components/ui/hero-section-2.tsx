"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Mail, MapPin, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { Alert } from "@/components/ui/alert";
import { CircleCheck } from "lucide-react";

// Icon component for contact details
const InfoIcon = ({
  type,
}: {
  type: "website" | "phone" | "address" | "email";
}) => {
  const icons = {
    website: <Globe className="h-5 w-5 text-primary" />,
    phone: <Phone className="h-5 w-5 text-primary" />,
    address: <MapPin className="h-5 w-5 text-primary" />,
    email: <Mail className="h-5 w-5 text-primary" />,
  };

  return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
};

// Prop types for the HeroSection component
interface HeroSectionProps
  extends Omit<
    React.HTMLAttributes<HTMLElement>,
    | "title"
    | "onDrag"
    | "onDragStart"
    | "onDragEnd"
    | "onAnimationStart"
    | "onAnimationEnd"
    | "onAnimationIteration"
  > {
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImages: [string, string, string];
  contactInfo: {
    website: string;
    phone: string;
    address: string;
    email: string;
  };
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      logo,
      slogan,
      title,
      subtitle,
      callToAction,
      backgroundImages,
      contactInfo,
      ...props
    },
    ref
  ) => {
    // Animation variants for the container to orchestrate children animations
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    // Animation variants for individual text/UI elements
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    };

    const [copied, setCopied] = React.useState<null | "phone" | "email">(null);

    const handleCopy = async (value: string, type: "phone" | "email") => {
      try {
        await navigator.clipboard.writeText(value);
        setCopied(type);
        window.setTimeout(() => setCopied(null), 2000);
      } catch {
        setCopied(null);
      }
    };

    const contactItems = [
      contactInfo.website && { type: "website" as const, value: contactInfo.website },
      contactInfo.phone && { type: "phone" as const, value: contactInfo.phone },
      contactInfo.email && { type: "email" as const, value: contactInfo.email },
      contactInfo.address && { type: "address" as const, value: contactInfo.address },
    ].filter(Boolean) as { type: "website" | "phone" | "email" | "address"; value: string }[];

    const contactGridCols =
      contactItems.length >= 4
        ? "sm:grid-cols-4"
        : contactItems.length === 3
          ? "sm:grid-cols-3"
          : contactItems.length === 2
            ? "sm:grid-cols-2"
            : "sm:grid-cols-1";

    return (
      <>
        <motion.section
          ref={ref}
          className={cn(
            "relative flex w-full flex-col overflow-hidden bg-background text-foreground md:flex-row",
            className
          )}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          {...props}
        >
          {/* Left Side: Content */}
          <div className="relative z-10 flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
              {/* Top Section: Logo & Main Content */}
              <div>
                <motion.header className="mb-12" variants={itemVariants}>
                  {logo && (
                    <div className="flex items-center">
                      <img src={logo.url} alt={logo.alt} className="mr-3 h-8" />
                      <div>
                        {logo.text && (
                          <p className="text-lg font-bold text-foreground">
                            {logo.text}
                          </p>
                        )}
                        {slogan && (
                          <p className="text-xs tracking-wider text-muted-foreground">
                            {slogan}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </motion.header>

                <motion.main variants={containerVariants}>
                  <motion.h1
                    className="text-4xl font-bold leading-tight text-foreground md:text-5xl"
                    variants={itemVariants}
                  >
                    {title}
                  </motion.h1>
                  <motion.div
                    className="my-6 h-1 w-20 bg-primary"
                    variants={itemVariants}
                  ></motion.div>
                  <motion.p
                    className="mb-8 max-w-md text-lg text-muted-foreground"
                    variants={itemVariants}
                  >
                    {subtitle}
                  </motion.p>
                  <motion.a
                    href={callToAction.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold tracking-widest text-primary transition-colors hover:text-primary/80"
                    variants={itemVariants}
                  >
                    {callToAction.text}
                  </motion.a>
                </motion.main>
              </div>

              {/* Bottom Section: Footer Info */}
              <motion.footer className="mt-12 w-full" variants={itemVariants}>
                <div
                  className={cn(
                    "grid grid-cols-1 gap-6 text-xs text-muted-foreground",
                    contactGridCols
                  )}
                >
                  {contactItems.map((item) =>
                    item.type === "phone" || item.type === "email" ? (
                      <button
                        key={`${item.type}-${item.value}`}
                        type="button"
                        className="flex items-center text-left cursor-pointer"
                        onClick={() => handleCopy(item.value, item.type)}
                      >
                        <InfoIcon type={item.type} />
                        <span>{item.value}</span>
                      </button>
                    ) : (
                      <div
                        key={`${item.type}-${item.value}`}
                        className="flex items-center"
                      >
                        <InfoIcon type={item.type} />
                        <span>{item.value}</span>
                      </div>
                    )
                  )}
                </div>
              </motion.footer>
          </div>

          {/* Right Side: Spacer for layout */}
          <div className="w-full md:w-1/2 lg:w-2/5" aria-hidden="true" />
        </motion.section>
        <div
          className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
            copied ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Alert
            layout="row"
            variant="default"
            isNotification
            icon={<CircleCheck className="text-emerald-500" size={16} strokeWidth={2} />}
            className="border-border text-foreground"
          >
            <p className="text-sm text-foreground">Copied to clipboard</p>
          </Alert>
        </div>
      </>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
