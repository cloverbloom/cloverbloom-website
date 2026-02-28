import type { Metadata } from "next";
import Link from "next/link";
import NavbarDemo from "@/components/navbar-demo";
import FooterSection from "@/components/footer-section";
import { getPublishedArticles } from "@/lib/articles";

const formatDate = (value: string): string => {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
};

export const metadata: Metadata = {
  title: "Articles | Cloverbloom",
  description:
    "Cloverbloom articles on Airbnb operations, pricing strategy, and short-term rental management execution.",
  alternates: {
    canonical: "/articles",
  },
  openGraph: {
    title: "Articles | Cloverbloom",
    description:
      "Read Cloverbloom articles on short-term rental operations, co-hosting systems, and performance strategy.",
    url: "https://cloverbloom.co/articles",
  },
};

export default function ArticlesPage() {
  const articles = getPublishedArticles();

  return (
    <div className="pt-12">
      <NavbarDemo />
      <main className="mx-auto max-w-4xl px-6 py-14">
        <header className="space-y-4">
          <p className="text-sm font-semibold tracking-wide text-[#2154D6] uppercase">
            Cloverbloom Library
          </p>
          <h1 className="text-4xl font-bold tracking-tight">Articles</h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Practical reads on Airbnb operations, guest experience systems, and performance-focused
            execution for STR owners.
          </p>
        </header>

        {articles.length === 0 ? (
          <section className="mt-10 rounded-xl border border-dashed border-border bg-muted/25 p-6">
            <h2 className="text-xl font-semibold">No published articles yet</h2>
            <p className="mt-2 text-base leading-relaxed text-neutral-800">
              The article system is live and ready. Add your copy in <code>lib/articles.ts</code> and
              set <code>published: true</code> when each article is ready to publish.
            </p>
          </section>
        ) : (
          <section className="mt-10 grid gap-6">
            {articles.map((article) => (
              <article key={article.slug} className="overflow-hidden rounded-xl border border-border">
                <Link href={`/articles/${article.slug}`} className="block">
                  <img
                    src={article.coverImage.src}
                    alt={article.coverImage.alt}
                    className="h-56 w-full object-cover"
                    loading="lazy"
                  />
                </Link>
                <div className="p-6">
                  <p className="text-xs font-semibold tracking-wide text-[#2154D6] uppercase">
                    {formatDate(article.publishedAt)} | {article.readingTime}
                  </p>
                  {article.coverImage.credit ? (
                    <p className="mt-1 text-xs text-muted-foreground">Photo: {article.coverImage.credit}</p>
                  ) : null}
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                    <Link href={`/articles/${article.slug}`} className="hover:text-[#2154D6]">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-neutral-800">{article.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#2154D6]/10 px-2.5 py-1 text-xs font-medium text-[#2154D6]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}
      </main>
      <FooterSection />
    </div>
  );
}
