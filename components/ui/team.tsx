"use client";

import React from "react";
import { createPortal } from "react-dom";

import { Alert } from "@/components/ui/alert";
import { CircleCheck } from "lucide-react";

const members = [
  {
    name: "Garrett Nelson",
    role: "Founder",
    avatar: "/footer-garrett.webp",
    phone: "+1 (970) 631-5800",
    email: "garrett@cloverbloom.co",
    linkedin: "https://www.linkedin.com/in/garrettfnelson",
    location: "San Diego, CA",
  },
];

export default function TeamSection() {
  const [copied, setCopied] = React.useState<null | "phone" | "email">(null);
  const [mounted, setMounted] = React.useState(false);

  const handleCopy = async (value: string, type: "phone" | "email") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(type);
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section>
      <div className="mx-auto w-fit">
        <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Get in touch directly with our team.
        </p>
        <div className="grid gap-4">
          {members.map((member, index) => (
            <div
              key={index}
              className="w-72 rounded-2xl border border-white/40 bg-white/60 p-5 shadow-sm"
            >
              <div className="overflow-hidden rounded-2xl border border-white/60">
                <img
                  className="h-[22rem] w-full object-cover"
                  src={member.avatar}
                  alt={member.name}
                  height="880"
                  width="420"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 text-left">
                <div className="text-lg font-semibold text-foreground">
                  {member.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {member.role}
                </div>
              </div>
              <div className="mt-2 space-y-1.5 text-sm text-left">
                <button
                  type="button"
                  className="flex w-full items-center justify-start gap-2 text-left text-foreground/80 hover:text-foreground cursor-pointer"
                  onClick={() => handleCopy(member.phone, "phone")}
                >
                  <span className="inline-flex items-center justify-center">
                    <svg
                      className="h-4 w-4 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  {member.phone}
                </button>
                <button
                  type="button"
                  className="flex w-full items-center justify-start gap-2 text-left text-foreground/80 hover:text-foreground cursor-pointer"
                  onClick={() => handleCopy(member.email, "email")}
                >
                  <span className="inline-flex items-center justify-center">
                    <svg
                      className="h-4 w-4 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="m22 6-10 7L2 6" />
                    </svg>
                  </span>
                  {member.email}
                </button>
                <a
                  className="flex w-full items-center justify-start gap-2 text-left text-foreground/80 hover:text-foreground cursor-pointer"
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-flex items-center justify-center">
                    <svg
                      className="h-4 w-4 text-primary"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.5 4.7 5.8V21h-4v-5.2c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9z" />
                    </svg>
                  </span>
                  www.linkedin.com/garrettfnelson
                </a>
                <div className="flex w-full items-center justify-start gap-2 text-left text-foreground/80">
                  <span className="inline-flex items-center justify-center">
                    <svg
                      className="h-4 w-4 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  {member.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {mounted &&
        createPortal(
          <div
            className={`fixed bottom-6 right-6 z-[120] transition-all duration-300 ${
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
          </div>,
          document.body
        )}
    </section>
  );
}
