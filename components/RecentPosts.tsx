import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/posts";

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

export default function RecentPosts() {
  const recent = [...posts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="container-max section-padding">
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600">
              Free Resources
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Septic System Guides
            </h2>
            <p className="mt-3 max-w-xl text-gray-600">
              Practical answers to common septic questions — from pumping schedules to warning
              signs — written by our licensed technicians.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900"
          >
            View all guides
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((post) => (
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
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      categoryColors[post.category] ?? "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readingTime}</span>
                </div>
                <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-snug text-gray-900 group-hover:text-brand-700">
                  {post.title}
                </h3>
                <p className="flex-1 line-clamp-3 text-sm leading-relaxed text-gray-500">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-700 group-hover:underline">
                  Read guide →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
