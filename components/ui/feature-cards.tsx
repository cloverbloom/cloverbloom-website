import React from "react";

const features = [
  {
    title: "Obsessive Management",
    description:
      "I don’t just manage—I look for opportunities to go above and beyond for you and your guests. Details are owned end-to-end, with nothing slipping through the cracks.",
    icon: {
      src: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-XimLfa9nmGlBpUT8xFkxuwQFz2hhXO.png&w=320&q=75",
      alt: "Obsessive Management icon",
    },
  },
  {
    title: "Market Awareness",
    description:
      "I am constantly reviewing performance data across the country. I understand what’s working, what’s changing, and address specifics your property can improve upon.",
    icon: {
      src: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-CK4odMSKWdmIj0ueBtNq9HOZR6Fbgv.png&w=320&q=75",
      alt: "Market Awareness icon",
    },
  },
  {
    title: "Unimpeachable Character",
    description:
      "I operate as if these were my own properties. I answer the phone, respond to guests, and solve problems—every time, without deflection or delay.",
    icon: {
      src: "https://ouch-prod-var-cdn.icons8.com/ui/illustrations/previews/xm6Sq4gQXXmQh4TS.webp",
      alt: "Unimpeachable Character icon",
    },
  },
];

export function FeatureCards() {
  return (
    <section className="w-full bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex w-full max-w-[360px] flex-col items-start gap-4 rounded-xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <img src={feature.icon.src} alt={feature.icon.alt} className="h-12 w-12" />
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
