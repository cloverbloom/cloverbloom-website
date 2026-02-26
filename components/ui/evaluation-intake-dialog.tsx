"use client";

import React from "react";
import { CircleAlert, CircleCheck } from "lucide-react";

import { Alert } from "@/components/ui/alert";
import { RainbowButton } from "@/components/ui/rainbow-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { OPEN_EVALUATION_DIALOG_EVENT } from "@/lib/evaluation-intake";
import { NOTIFICATION_DURATION_MS } from "@/lib/notifications";

export function EvaluationIntakeDialog() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submissionNotice, setSubmissionNotice] = React.useState<"none" | "success" | "error">("none");
  const notificationTimeoutRef = React.useRef<number | null>(null);

  const showSubmissionNotification = (status: "success" | "error") => {
    if (notificationTimeoutRef.current) {
      window.clearTimeout(notificationTimeoutRef.current);
    }
    setSubmissionNotice(status);
    notificationTimeoutRef.current = window.setTimeout(() => {
      setSubmissionNotice("none");
      notificationTimeoutRef.current = null;
    }, NOTIFICATION_DURATION_MS);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(
      Array.from(formData.entries()).map(([key, value]) => [key, typeof value === "string" ? value : ""])
    );

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/income-projection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setIsOpen(false);
      showSubmissionNotification("success");
    } catch {
      showSubmissionNotification("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  React.useEffect(() => {
    const openDialog = () => setIsOpen(true);
    window.addEventListener(OPEN_EVALUATION_DIALOG_EVENT, openDialog);
    return () => {
      window.removeEventListener(OPEN_EVALUATION_DIALOG_EVENT, openDialog);
      if (notificationTimeoutRef.current) {
        window.clearTimeout(notificationTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="max-h-[85vh] w-[min(92vw,760px)] overflow-y-auto"
          onCloseAutoFocus={(event) => event.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle>FREE STR Income Projection Form</DialogTitle>
            <DialogDescription>
              Share a few details about your listing and we will follow-up shortly with a full
              report.
            </DialogDescription>
          </DialogHeader>
          <form className="relative mt-2 space-y-4" onSubmit={handleSubmit}>
            <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="income-projection-website">Website</label>
              <input
                id="income-projection-website"
                name="website"
                type="text"
                autoComplete="off"
                tabIndex={-1}
              />
            </div>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <CircleAlert
                className="mt-0.5 h-4 w-4 shrink-0 text-black"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
              <p>All fields are required except &#39;Any additional notes&#39;</p>
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-base font-bold text-foreground">Personal</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-1.5 text-sm text-foreground">
                    Name
                    <input
                      name="name"
                      type="text"
                      required
                      className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="space-y-1.5 text-sm text-foreground">
                    E-mail
                    <input
                      name="email"
                      type="email"
                      required
                      className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="you@example.com"
                    />
                  </label>
                  <label className="space-y-1.5 text-sm text-foreground">
                    Phone Number
                    <input
                      name="phoneNumber"
                      type="tel"
                      required
                      className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="(555) 555-5555"
                    />
                  </label>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-base font-bold text-foreground">Airbnb</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-1.5 text-sm text-foreground sm:col-span-2">
                    Airbnb Link
                    <input
                      name="airbnbLink"
                      type="url"
                      required
                      className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="https://www.airbnb.com/rooms/123456"
                    />
                  </label>
                  <label className="space-y-1.5 text-sm text-foreground">
                    Address
                    <input
                      name="address"
                      type="text"
                      required
                      className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="123 Main St"
                    />
                  </label>
                  <label className="space-y-1.5 text-sm text-foreground">
                    City
                    <input
                      name="city"
                      type="text"
                      required
                      className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="City"
                    />
                  </label>
                  <label className="space-y-1.5 text-sm text-foreground">
                    State
                    <input
                      name="state"
                      type="text"
                      required
                      className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="State"
                    />
                  </label>
                  <label className="space-y-1.5 text-sm text-foreground">
                    Type of Property
                    <select
                      name="propertyType"
                      required
                      defaultValue=""
                      className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                      <option value="" disabled>
                        Select property type
                      </option>
                      <option value="single-family">Single-family home</option>
                      <option value="condo">Condo</option>
                      <option value="townhome">Townhome</option>
                      <option value="apartment">Apartment</option>
                      <option value="multi-unit">Multi-unit</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                  <label className="space-y-1.5 text-sm text-foreground">
                    Estimated Revenue (Past 12 Months)
                    <input
                      name="estimatedRevenue12Mo"
                      type="text"
                      required
                      className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="$75,000"
                    />
                  </label>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-base font-bold text-foreground">Notes</p>
                <label className="block space-y-1.5 text-sm text-foreground">
                  How did you hear about Cloverbloom?
                  <input
                    name="heardAbout"
                    type="text"
                    required
                    className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    placeholder="Referral, Google, social media, etc."
                  />
                </label>
                <label className="block space-y-1.5 text-sm text-foreground">
                  Any additional notes?
                  <textarea
                    name="anythingElse"
                    rows={4}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    placeholder="Add any other questions, concerns, property goals, etc."
                  />
                </label>
              </div>
            </div>
            <RainbowButton type="submit" className="w-full text-sm" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Get my Income Projection report"}
            </RainbowButton>
          </form>
        </DialogContent>
      </Dialog>
      {submissionNotice !== "none" && (
        <div className="fixed bottom-6 right-6 z-[120] transition-all duration-300">
          <Alert
            layout="row"
            variant="default"
            isNotification
            icon={
              submissionNotice === "success" ? (
                <CircleCheck className="text-emerald-500" size={16} strokeWidth={2} />
              ) : (
                <CircleAlert className="text-red-500" size={16} strokeWidth={2} />
              )
            }
            className="border-border text-foreground"
          >
            <p className="text-sm text-foreground">
              {submissionNotice === "success"
                ? "Submitted successfully. We will be in touch shortly!"
                : "Submission failed. Please try again."}
            </p>
          </Alert>
        </div>
      )}
    </>
  );
}
