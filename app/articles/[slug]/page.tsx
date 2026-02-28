import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NavbarDemo from "@/components/navbar-demo";
import FooterSection from "@/components/footer-section";
import { CTA } from "@/components/ui/call-to-action";
import {
  type ArticleBodyBlock,
  getArticleBySlug,
  getArticleSlugs,
  getPublishedArticles,
} from "@/lib/articles";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const formatDate = (value: string): string => {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
};

const renderBodyBlock = (block: ArticleBodyBlock, index: number) => {
  if (block.type === "heading") {
    return (
      <h2 key={`${block.type}-${index}`} className="text-2xl font-semibold tracking-tight text-foreground">
        {block.text}
      </h2>
    );
  }

  if (block.type === "list") {
    if (block.ordered) {
      return (
        <ol key={`${block.type}-${index}`} className="list-decimal space-y-2 pl-5 text-base leading-relaxed">
          {block.items.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`}>{item}</li>
          ))}
        </ol>
      );
    }

    return (
      <ul key={`${block.type}-${index}`} className="list-disc space-y-2 pl-5 text-base leading-relaxed">
        {block.items.map((item, itemIndex) => (
          <li key={`${item}-${itemIndex}`}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "resourceList") {
    return (
      <section key={`${block.type}-${index}`} className="space-y-3 rounded-xl bg-muted/30 p-4">
        {block.title ? <p className="text-sm font-semibold tracking-wide text-[#2154D6] uppercase">{block.title}</p> : null}
        <ul className="space-y-2 text-base leading-relaxed text-neutral-800">
          {block.items.map((item) => (
            <li key={item.url}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[#2154D6] underline-offset-2 hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote key={`${block.type}-${index}`} className="rounded-lg border-l-4 border-[#2154D6] bg-muted/40 px-4 py-3">
        <p className="text-base leading-relaxed text-neutral-800">{block.text}</p>
        {block.citation ? (
          <cite className="mt-2 block text-sm text-muted-foreground not-italic">{block.citation}</cite>
        ) : null}
      </blockquote>
    );
  }

  if (block.type === "image") {
    return (
      <figure key={`${block.type}-${index}`} className="space-y-2">
        <img src={block.src} alt={block.alt} className="w-full rounded-xl object-cover" loading="lazy" />
        {block.caption || block.credit ? (
          <figcaption className="text-sm text-muted-foreground">
            {block.caption}
            {block.caption && block.credit ? " " : ""}
            {block.credit ? `(${block.credit})` : ""}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <p key={`${block.type}-${index}`} className="text-base leading-relaxed text-neutral-800">
      {block.text}
    </p>
  );
};

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Cloverbloom",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const articleUrl = `https://cloverbloom.co/articles/${article.slug}`;

  return {
    title: `${article.title} | Cloverbloom`,
    description: article.description,
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: articleUrl,
      type: "article",
      images: [article.coverImage.src],
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      authors: [article.author],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.coverImage.src],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }
  const otherArticles = getPublishedArticles().filter((item) => item.slug !== article.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: [article.coverImage.src],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Cloverbloom",
      logo: {
        "@type": "ImageObject",
        url: "https://cloverbloom.co/logo-blue.webp",
      },
    },
    mainEntityOfPage: `https://cloverbloom.co/articles/${article.slug}`,
  };

  return (
    <div className="pt-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <NavbarDemo />
      <main className="mx-auto max-w-3xl px-6 py-14">
        <Link href="/articles" className="text-sm font-semibold text-[#2154D6] hover:text-[#1b47b4]">
          Back to articles
        </Link>

        <article className="mt-6">
          <header className="space-y-4 border-b border-border pb-8">
            <img
              src={article.coverImage.src}
              alt={article.coverImage.alt}
              className="h-[320px] w-full rounded-2xl object-cover"
            />
            {article.coverImage.credit ? (
              <p className="text-sm text-muted-foreground">Photo: {article.coverImage.credit}</p>
            ) : null}
            <p className="text-xs font-semibold tracking-wide text-[#2154D6] uppercase">
              {formatDate(article.publishedAt)} | {article.readingTime}
            </p>
            <h1 className="text-4xl font-bold tracking-tight">{article.title}</h1>
            <p className="text-lg text-muted-foreground">{article.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#2154D6]/10 px-2.5 py-1 text-xs font-medium text-[#2154D6]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="mt-10 space-y-6">{article.body.map(renderBodyBlock)}</div>
        </article>
      </main>
      <section className="relative">
        <CTA
          title={article.cta.title}
          description={article.cta.description}
          buttonLabel={article.cta.buttonLabel}
        />
      </section>
      {otherArticles.length > 0 ? (
        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div className="rounded-2xl border border-border bg-muted/20 p-6 md:p-8">
            <p className="text-sm font-semibold tracking-wide text-[#2154D6] uppercase">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">More Articles to Read</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {otherArticles.map((item) => (
                <article key={item.slug} className="overflow-hidden rounded-xl border border-border bg-background">
                  <Link href={`/articles/${item.slug}`} className="block">
                    <img
                      src={item.coverImage.src}
                      alt={item.coverImage.alt}
                      className="h-28 w-full object-cover"
                      loading="lazy"
                    />
                  </Link>
                  <div className="p-4">
                    <p className="text-[11px] font-semibold tracking-wide text-[#2154D6] uppercase">
                      {formatDate(item.publishedAt)} | {item.readingTime}
                    </p>
                    {item.coverImage.credit ? (
                      <p className="mt-1 text-xs text-muted-foreground">Photo: {item.coverImage.credit}</p>
                    ) : null}
                    <h3 className="mt-2 text-base font-semibold tracking-tight leading-snug">
                      <Link href={`/articles/${item.slug}`} className="hover:text-[#2154D6]">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <section className="relative">
        <div className="pointer-events-none static -mb-px z-10 flex w-full items-center justify-center pr-0 xl:absolute xl:inset-x-0 xl:bottom-0 xl:items-end xl:justify-end xl:pr-10 2xl:pr-10">
          <img
            src="/footer-garrett.webp"
            alt="Garrett headshot"
            className="block h-[208px] w-auto object-contain xl:h-64 2xl:h-80"
            draggable={false}
          />
        </div>
      </section>
      <FooterSection />
    </div>
  );
}
