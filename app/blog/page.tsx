import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts, getAllCategories } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Septic System Tips & Guides",
  description:
    "Expert advice on septic tank maintenance, pumping schedules, warning signs, and how to protect your drain field. Written by licensed septic professionals.",
  alternates: {
    canonical: "https://eaglesepticpumping.com/blog",
  },
  openGraph: {
    title: "Septic System Tips & Guides | Eagle Septic Pumping",
    description:
      "Expert advice on septic tank maintenance, pumping schedules, warning signs, and how to protect your drain field.",
    type: "website",
  },
};

const categoryColors: Record<string, string> = {
  Maintenance: "bg-accent-50 text-accent-700",
  Troubleshooting: "bg-amber-50 text-amber-700",
  "Cost & Pricing": "bg-brand-50 text-brand-700",
  "Local Guide": "bg-purple-50 text-purple-700",
  "Hiring Guide": "bg-teal-50 text-teal-700",
  Regulations: "bg-orange-50 text-orange-700",
  Commercial: "bg-indigo-50 text-indigo-700",
  Repairs: "bg-red-50 text-red-700",
  Education: "bg-cyan-50 text-cyan-700",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://eaglesepticpumping.com/blog" },
  ],
};

export default function BlogPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const [featured, ...rest] = sorted;
  const allCategories = getAllCategories();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        {/* Page header */}
        <section className="bg-brand-900 text-white">
          <div className="container-max section-padding">
            <nav className="mb-4 flex items-center gap-2 text-sm text-brand-300">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-brand-100">Blog</span>
            </nav>
            <h1 className="text-3xl font-bold sm:text-4xl">
              Septic System Tips &amp; Guides
            </h1>
            <p className="mt-3 max-w-2xl text-brand-100 text-lg">
              Practical advice from licensed septic professionals — pumping schedules, warning
              signs, maintenance habits, and how to avoid costly repairs.
            </p>
          </div>
        </section>

        {/* Category filter */}
        <section className="border-b border-gray-200 bg-white">
          <div className="container-max px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 mr-1">
                Browse by topic:
              </span>
              {allCategories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/blog/category/${c.slug}`}
                  className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 hover:border-brand-400 hover:text-brand-700 transition-colors"
                >
                  {c.category}
                  <span className="rounded-full bg-gray-200 px-1.5 py-0.5 text-xs text-gray-500">
                    {c.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured post */}
        <section className="bg-white">
          <div className="container-max section-padding">
            <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Latest Article
            </p>
            <Link
              href={`/blog/${featured.slug}`}
              className="group block overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 transition-colors hover:border-brand-300 hover:bg-brand-50"
            >
              {/* Cover image */}
              <div className="relative h-56 w-full sm:h-72 lg:h-80">
                <Image
                  src={featured.coverImage.src}
                  alt={featured.coverImage.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span
                  className={`absolute bottom-4 left-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${
                    categoryColors[featured.category] ?? "bg-gray-100/90 text-gray-700"
                  }`}
                >
                  {featured.category}
                </span>
              </div>
              {/* Text */}
              <div className="p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-sm text-gray-400">{featured.readingTime}</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-sm text-gray-400">
                    {new Date(featured.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900 group-hover:text-brand-700 sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">{featured.excerpt}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-brand-700 group-hover:underline">
                  Read article →
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Rest of posts */}
        {rest.length > 0 && (
          <section className="bg-gray-50">
            <div className="container-max section-padding">
              <p className="mb-8 text-sm font-semibold uppercase tracking-wider text-gray-400">
                More Articles
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-colors hover:border-brand-300 hover:bg-brand-50"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-44 w-full flex-shrink-0">
                      <Image
                        src={post.coverImage.src}
                        alt={post.coverImage.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    {/* Text */}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            categoryColors[post.category] ?? "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-400">{post.readingTime}</span>
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-brand-700 leading-snug">
                        {post.title}
                      </h3>
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
        )}

        {/* CTA */}
        <section className="bg-brand-900 text-white">
          <div className="container-max section-padding text-center">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
              Have a question about your system?
            </h2>
            <p className="mb-7 text-brand-100 text-lg max-w-xl mx-auto">
              Our licensed technicians can assess your septic system and answer any questions. Free
              estimates, no pressure.
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
