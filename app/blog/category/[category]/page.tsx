import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  getAllCategories,
  getPostsByCategory,
  slugToCategory,
  categoryToSlug,
} from "@/lib/posts";

interface Props {
  params: Promise<{ category: string }>;
}

const categoryDescriptions: Record<string, string> = {
  Maintenance:
    "Practical guides to keep your septic system running reliably for decades. Learn pumping schedules, maintenance habits, and how to protect your drain field.",
  Troubleshooting:
    "Identify warning signs early and understand what common septic problems mean — before a small issue becomes a costly repair.",
  "Cost & Pricing":
    "Transparent breakdowns of septic service costs so you know exactly what to expect. No hidden fees, no surprises.",
  Pricing:
    "Septic service pricing guides and cost breakdowns for pumping, inspections, repairs, and new installations.",
  Inspections:
    "What septic inspections cover, when you need them, and how to prepare — whether for routine maintenance or a real estate transaction.",
  "Home Buying":
    "Everything buyers and sellers need to know about septic inspections, disclosures, and protecting your investment.",
  Repairs:
    "When things go wrong: drain field failures, tank damage, and emergency repairs — and what they realistically cost.",
  "Local Guide":
    "Septic regulations, soil conditions, and service information specific to our Central Valley service area.",
  "Hiring Guide":
    "How to choose the right septic company, what questions to ask, and what red flags to watch out for.",
  Regulations:
    "California and county-level septic regulations that affect your system — what's required and what to expect.",
  Commercial:
    "Septic solutions for restaurants, offices, and commercial properties. Industrial-scale pumping and compliance guidance.",
};

const categoryColors: Record<string, { badge: string; heading: string }> = {
  Maintenance: { badge: "bg-accent-100 text-accent-800", heading: "text-accent-700" },
  Troubleshooting: { badge: "bg-amber-100 text-amber-800", heading: "text-amber-700" },
  "Cost & Pricing": { badge: "bg-brand-100 text-brand-800", heading: "text-brand-700" },
  Pricing: { badge: "bg-brand-100 text-brand-800", heading: "text-brand-700" },
  Inspections: { badge: "bg-sky-100 text-sky-800", heading: "text-sky-700" },
  "Home Buying": { badge: "bg-emerald-100 text-emerald-800", heading: "text-emerald-700" },
  Repairs: { badge: "bg-red-100 text-red-800", heading: "text-red-700" },
  "Local Guide": { badge: "bg-purple-100 text-purple-800", heading: "text-purple-700" },
  "Hiring Guide": { badge: "bg-teal-100 text-teal-800", heading: "text-teal-700" },
  Regulations: { badge: "bg-orange-100 text-orange-800", heading: "text-orange-700" },
  Commercial: { badge: "bg-indigo-100 text-indigo-800", heading: "text-indigo-700" },
};

export async function generateStaticParams() {
  return getAllCategories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = slugToCategory(slug);
  if (!category) return {};

  const description =
    categoryDescriptions[category] ??
    `Browse all Eagle Septic Pumping articles about ${category}.`;

  return {
    title: `${category} — Septic Tips & Guides | Eagle Septic Pumping`,
    description,
    alternates: {
      canonical: `https://eaglesepticpumping.com/blog/category/${slug}`,
    },
    openGraph: {
      title: `${category} Articles | Eagle Septic Pumping`,
      description,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = slugToCategory(slug);
  if (!category) notFound();

  const categoryPosts = getPostsByCategory(category);
  if (categoryPosts.length === 0) notFound();

  const allCategories = getAllCategories();
  const description =
    categoryDescriptions[category] ??
    `Browse all Eagle Septic Pumping articles about ${category}.`;
  const colors = categoryColors[category] ?? {
    badge: "bg-gray-100 text-gray-700",
    heading: "text-gray-700",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://eaglesepticpumping.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: category,
        item: `https://eaglesepticpumping.com/blog/category/${slug}`,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category} — Septic Tips & Guides`,
    description,
    url: `https://eaglesepticpumping.com/blog/category/${slug}`,
    hasPart: categoryPosts.map((p) => ({
      "@type": "Article",
      headline: p.title,
      url: `https://eaglesepticpumping.com/blog/${p.slug}`,
      datePublished: p.publishedAt,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-brand-900 text-white">
          <div className="container-max section-padding">
            <nav className="mb-4 flex items-center gap-2 text-sm text-brand-300">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white">Blog</Link>
              <span>/</span>
              <span className="text-brand-100">{category}</span>
            </nav>
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-4 ${colors.badge}`}
            >
              {category}
            </span>
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              {category}
            </h1>
            <p className="max-w-2xl text-lg text-brand-100 leading-relaxed">
              {description}
            </p>
            <p className="mt-3 text-sm text-brand-300">
              {categoryPosts.length} article{categoryPosts.length !== 1 ? "s" : ""}
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="bg-gray-50">
          <div className="container-max section-padding">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-colors hover:border-brand-300 hover:bg-brand-50"
                >
                  <div className="relative h-44 w-full flex-shrink-0">
                    <Image
                      src={post.coverImage.src}
                      alt={post.coverImage.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs text-gray-400">{post.readingTime}</span>
                    </div>
                    <h2 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-brand-700 leading-snug">
                      {post.title}
                    </h2>
                    <p className="flex-1 text-sm text-gray-500 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="text-sm font-medium text-brand-700 group-hover:underline">
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other categories */}
        <section className="bg-white">
          <div className="container-max section-padding">
            <h2 className="mb-6 text-xl font-bold text-gray-900">Browse Other Topics</h2>
            <div className="flex flex-wrap gap-3">
              {allCategories
                .filter((c) => c.category !== category)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/blog/category/${c.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-400 hover:text-brand-700 transition-colors"
                  >
                    {c.category}
                    <span className="rounded-full bg-gray-200 px-1.5 py-0.5 text-xs text-gray-500">
                      {c.count}
                    </span>
                  </Link>
                ))}
            </div>
            <div className="mt-6">
              <Link
                href="/blog"
                className="text-sm font-medium text-brand-700 hover:underline"
              >
                ← All articles
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-900 text-white">
          <div className="container-max section-padding text-center">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
              Have a question about your system?
            </h2>
            <p className="mb-7 text-brand-100 text-lg max-w-xl mx-auto">
              Our licensed technicians can assess your septic system and answer any
              questions. Free estimates, no pressure.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row justify-center">
              <a
                href="tel:+15558675309"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-7 py-3 text-base font-bold text-white hover:bg-accent-600 transition-colors"
              >
                Call for a Free Estimate
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-7 py-3 text-base font-bold text-white hover:bg-white hover:text-brand-900 transition-colors"
              >
                Send a Message
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
