import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: "1",
    title: "How does Cloverbloom work with owners?",
    content:
      "We partner with a limited number of Airbnb owners and run their properties with disciplined systems, clear communication, and data-driven decisions to improve performance without increasing owner involvement.",
  },
  {
    id: "2",
    title: "What makes Cloverbloom different?",
    content:
      "We treat every property like our own and stay proactive on pricing, guest experience, and operations so owners can rely on consistent results.",
  },
  {
    id: "3",
    title: "How do I get started?",
    content:
      "Schedule a call to review your property and goals. We’ll confirm fit, outline next steps, and build a plan to increase revenue while saving you time.",
  },
];

export function FAQSection() {
  return (
    <section className="w-full bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-4 py-12 text-center md:px-6">
        <h2 className="text-3xl font-bold tracking-tight">FAQ</h2>
        <p className="mt-3 mx-auto max-w-2xl text-base text-muted-foreground">
          What does working with you look like?
        </p>
        <div className="mt-8 mx-auto max-w-2xl text-left">
          <Accordion type="single" collapsible className="w-full space-y-2" defaultValue="1">
            {items.map((item) => (
              <AccordionItem
                value={item.id}
                key={item.id}
                className="rounded-lg border bg-background px-4 py-1"
              >
                <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="pb-2 text-muted-foreground">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
