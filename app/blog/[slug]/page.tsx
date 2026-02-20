import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts, getPostBySlug, getRelatedPosts, categoryToSlug, type BlogSection } from "@/lib/posts";
import { services, getServiceBySlug, PHONE, PHONE_HREF } from "@/lib/services";
import TableOfContents, { type TocEntry } from "@/components/TableOfContents";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://eaglesepticpumping.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [{ url: post.coverImage.src, alt: post.coverImage.alt }],
    },
  };
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function buildToc(sections: BlogSection[]): TocEntry[] {
  return sections
    .filter((s): s is Extract<BlogSection, { type: "heading" }> => s.type === "heading")
    .map((s) => ({ id: slugify(s.text), text: s.text, level: s.level }));
}

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case "heading":
      if (section.level === 2) {
        return (
          <h2
            key={index}
            id={slugify(section.text)}
            className="mt-10 mb-4 text-2xl font-bold text-gray-900 scroll-mt-24"
          >
            {section.text}
          </h2>
        );
      }
      return (
        <h3 key={index} id={slugify(section.text)} className="mt-6 mb-3 text-xl font-semibold text-gray-900 scroll-mt-24">
          {section.text}
        </h3>
      );

    case "paragraph":
      return (
        <p key={index} className="mb-5 text-gray-700 leading-relaxed text-lg">
          {section.text}
        </p>
      );

    case "list":
      return section.ordered ? (
        <ol key={index} className="mb-5 ml-6 list-decimal space-y-2">
          {section.items.map((item, i) => (
            <li key={i} className="text-gray-700 leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
      ) : (
        <ul key={index} className="mb-5 space-y-2">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mt-1 h-4 w-4 flex-shrink-0 text-accent-500"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );

    case "callout":
      if (section.variant === "warning") {
        return (
          <div
            key={index}
            className="my-6 rounded-xl border border-amber-200 bg-amber-50 p-5"
          >
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500"
              >
                <path
                  fillRule="evenodd"
                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-semibold text-amber-900">{section.title}</p>
                <p className="mt-1 text-sm text-amber-800 leading-relaxed">{section.text}</p>
              </div>
            </div>
          </div>
        );
      }
      return (
        <div
          key={index}
          className="my-6 rounded-xl border border-brand-200 bg-brand-50 p-5"
        >
          <div className="flex items-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-semibold text-brand-900">{section.title}</p>
              <p className="mt-1 text-sm text-brand-800 leading-relaxed">{section.text}</p>
            </div>
          </div>
        </div>
      );
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const tocEntries = buildToc(post.sections);

  const related = getRelatedPosts(slug, post.category, 3);
  const relatedServices = post.relatedServiceSlugs
    .map((s) => getServiceBySlug(s))
    .filter(Boolean) as typeof services;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: post.coverImage.src,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: "Eagle Septic Pumping",
      url: "https://eaglesepticpumping.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Eagle Septic Pumping",
      url: "https://eaglesepticpumping.com",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://eaglesepticpumping.com/blog" },
      { "@type": "ListItem", position: 3, name: post.category, item: `https://eaglesepticpumping.com/blog/category/${categoryToSlug(post.category)}` },
      { "@type": "ListItem", position: 4, name: post.title, item: `https://eaglesepticpumping.com/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        {/* Article hero */}
        <section className="bg-brand-900 text-white">
          <div className="container-max section-padding">
            <nav className="mb-4 flex items-center gap-2 text-sm text-brand-300">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
              <span>/</span>
              <span className="text-brand-100 line-clamp-1">{post.title}</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Link
                href={`/blog/category/${categoryToSlug(post.category)}`}
                className="rounded-full bg-brand-700 px-3 py-1 text-xs font-semibold text-brand-100 hover:bg-brand-600 transition-colors"
              >
                {post.category}
              </Link>
              <span className="text-sm text-brand-300">{post.readingTime}</span>
              <span className="text-sm text-brand-300">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-brand-100 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* Cover image */}
        <div className="bg-white">
          <div className="container-max pt-8 pb-0">
            <div className="mx-auto max-w-3xl">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-lg sm:h-80 lg:h-96">
                <Image
                  src={post.coverImage.src}
                  alt={post.coverImage.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 768px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Article body */}
        <section className="bg-white">
          <div className="container-max section-padding">
            <div className="mx-auto max-w-5xl lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 xl:grid-cols-[260px_1fr]">
              {/* TOC — renders mobile strip inline, desktop sticky sidebar */}
              <TableOfContents entries={tocEntries} />

              <div className="min-w-0">
              {post.sections.map((section, i) => renderSection(section, i))}

              {/* In-article CTA */}
              <div className="mt-12 rounded-2xl bg-brand-900 p-8 text-white text-center">
                <h2 className="mb-3 text-xl font-bold sm:text-2xl">
                  Need a septic inspection or pump-out?
                </h2>
                <p className="mb-6 text-brand-100">
                  Licensed, insured technicians. Free estimates. Same-day emergency service available.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row justify-center">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-base font-bold text-white hover:bg-accent-600 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Call {PHONE}
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-base font-bold text-white hover:bg-white hover:text-brand-900 transition-colors"
                  >
                    Get a Free Estimate
                  </a>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related services */}
        {relatedServices.length > 0 && (
          <section className="bg-white border-t border-gray-100">
            <div className="container-max section-padding">
              <div className="mx-auto max-w-3xl">
                <h2 className="mb-5 text-xl font-bold text-gray-900">
                  Professional Septic Services
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {relatedServices.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      className="group flex flex-col rounded-xl border border-gray-200 bg-gray-50 p-5 transition-colors hover:border-brand-300 hover:bg-brand-50"
                    >
                      <h3 className="font-semibold text-gray-900 group-hover:text-brand-700">
                        {svc.shortTitle}
                      </h3>
                      <p className="mt-1 flex-1 text-sm text-gray-500 leading-relaxed line-clamp-2">
                        {svc.metaDescription}
                      </p>
                      <span className="mt-3 text-sm font-medium text-brand-700 group-hover:underline">
                        Learn more →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Related posts */}
        {related.length > 0 && (
          <section className="bg-gray-50">
            <div className="container-max section-padding">
              <h2 className="mb-8 text-2xl font-bold text-gray-900">More {post.category} Articles</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group block rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:border-brand-300 hover:bg-brand-50"
                  >
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      {rel.category}
                    </span>
                    <h3 className="mt-2 font-bold text-gray-900 leading-snug group-hover:text-brand-700">
                      {rel.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-2 leading-relaxed">
                      {rel.excerpt}
                    </p>
                    <span className="mt-3 inline-block text-sm font-medium text-brand-700 group-hover:underline">
                      Read →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
