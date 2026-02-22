import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Septic System Resource Center | Free Homeowner Guides",
  description:
    "Free septic system guides for Central Valley homeowners. Learn how septic systems work, when to pump, warning signs, costs, and what to do in an emergency.",
  alternates: {
    canonical: "https://eaglesepticpumping.com/resources",
  },
  openGraph: {
    title: "Septic System Resource Center | Eagle Septic Pumping",
    description:
      "Free septic system guides for Central Valley homeowners — maintenance schedules, warning signs, costs, home buying checklists, and more.",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://eaglesepticpumping.com/resources" },
  ],
};

// Curated resource topics with featured article slugs
const topics = [
  {
    id: "fundamentals",
    title: "Septic System Fundamentals",
    categorySlug: "education",
    description:
      "New to septic systems? Start here. Understand how your system works, the difference between septic and sewer, tank sizing, and the different system types available.",
    color: "cyan",
    colorClasses: {
      bg: "bg-cyan-50",
      text: "text-cyan-700",
      border: "border-cyan-200",
      badge: "bg-cyan-100 text-cyan-700",
      iconBg: "bg-cyan-100",
    },
    slugs: [
      "how-does-a-septic-system-work",
      "septic-system-vs-sewer-system",
      "aerobic-septic-system",
      "septic-tank-size-guide",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance & Pumping",
    categorySlug: "maintenance",
    description:
      "Regular maintenance is the single most important thing you can do to protect your septic investment. Learn pumping schedules, what to flush, and how to keep your system running for decades.",
    color: "green",
    colorClasses: {
      bg: "bg-accent-50",
      text: "text-accent-700",
      border: "border-accent-200",
      badge: "bg-accent-100 text-accent-700",
      iconBg: "bg-accent-100",
    },
    slugs: [
      "how-often-pump-septic-tank",
      "septic-system-maintenance-guide",
      "what-not-to-flush-septic-system",
      "septic-safe-cleaning-products",
    ],
  },
  {
    id: "warning-signs",
    title: "Warning Signs & Troubleshooting",
    categorySlug: "troubleshooting",
    description:
      "Catch problems early before they become expensive failures. Know the warning signs of a full tank, drain field stress, alarm triggers, and what to do in a septic emergency.",
    color: "amber",
    colorClasses: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      border: "border-amber-200",
      badge: "bg-amber-100 text-amber-700",
      iconBg: "bg-amber-100",
    },
    slugs: [
      "warning-signs-septic-system-failing",
      "signs-septic-tank-is-full",
      "septic-tank-alarm-going-off",
      "septic-backup-after-heavy-rain",
    ],
  },
  {
    id: "costs",
    title: "Costs & Pricing",
    categorySlug: "cost-pricing",
    description:
      "Understand what septic services actually cost in the Central Valley — pumping, inspections, repairs, and full replacements — so you can budget accurately and avoid surprise bills.",
    color: "blue",
    colorClasses: {
      bg: "bg-brand-50",
      text: "text-brand-700",
      border: "border-brand-200",
      badge: "bg-brand-100 text-brand-700",
      iconBg: "bg-brand-100",
    },
    slugs: [
      "septic-tank-pumping-cost-central-valley",
      "septic-tank-inspection-cost",
      "drain-field-failure-signs-costs",
      "septic-system-replacement-cost",
    ],
  },
  {
    id: "home-buying",
    title: "Home Buying & Inspections",
    categorySlug: "inspections",
    description:
      "Buying or selling a home on septic? These guides walk you through what inspections uncover, what to ask sellers, and how to protect yourself from inheriting someone else's failing system.",
    color: "purple",
    colorClasses: {
      bg: "bg-purple-50",
      text: "text-purple-700",
      border: "border-purple-200",
      badge: "bg-purple-100 text-purple-700",
      iconBg: "bg-purple-100",
    },
    slugs: [
      "new-homeowner-septic-system-guide",
      "septic-inspection-home-buyers-guide",
      "septic-inspection-home-sale-guide",
      "septic-system-vs-sewer-system",
    ],
  },
  {
    id: "repairs",
    title: "Repairs & Drain Fields",
    categorySlug: "repairs",
    description:
      "Drain field problems are the most costly septic issue homeowners face. Learn what causes failure, how to recognize the early signs, and when repair vs. replacement makes financial sense.",
    color: "red",
    colorClasses: {
      bg: "bg-red-50",
      text: "text-red-700",
      border: "border-red-200",
      badge: "bg-red-100 text-red-700",
      iconBg: "bg-red-100",
    },
    slugs: [
      "drain-field-failure-signs-costs",
      "drain-field-repair-vs-replacement-central-valley",
      "warning-signs-septic-system-failing",
      "septic-system-replacement-cost",
    ],
  },
];

// Quick-answer questions displayed inline
const quickAnswers = [
  {
    question: "How often should I pump my septic tank?",
    answer:
      "Most households need pumping every 3–5 years. A family of 4 with a 1,000-gallon tank should pump every 3–4 years. Larger tanks or smaller households can go longer; garbage disposal use means shorter intervals.",
    slug: "how-often-pump-septic-tank",
  },
  {
    question: "What are the first signs my septic system is failing?",
    answer:
      "Slow drains throughout the house, gurgling pipes, sewage odors indoors or near the tank, wet soggy patches over the drain field, and unusually lush green grass above the field are the five key early warning signs.",
    slug: "warning-signs-septic-system-failing",
  },
  {
    question: "How long does a septic system last?",
    answer:
      "A properly maintained concrete or fiberglass tank lasts 40+ years. Drain fields typically last 25–30 years with good maintenance — but can fail in under 10 years if overloaded, flooded, or damaged by roots and heavy vehicles.",
    slug: "how-long-does-septic-system-last",
  },
  {
    question: "What should I never put down a septic drain?",
    answer:
      "Never flush 'flushable' wipes, paper towels, feminine hygiene products, medications, cooking grease, or harsh chemical drain cleaners. Even small amounts of these regularly can disrupt bacterial balance or clog your drain field.",
    slug: "what-not-to-flush-septic-system",
  },
  {
    question: "How much does septic pumping cost in the Central Valley?",
    answer:
      "Residential septic pumping in Stanislaus, San Joaquin, and Merced Counties typically runs $300–$600 depending on tank size and access. Larger tanks, difficult access, or high sludge levels can push prices higher.",
    slug: "septic-tank-pumping-cost-central-valley",
  },
  {
    question: "What happens if I never pump my septic tank?",
    answer:
      "Solids build up until they overflow the outlet baffle into your drain field. Once the drain field is clogged with solids, it cannot be unclogged — full replacement costs $15,000–$50,000. Regular pumping is the cheapest insurance you have.",
    slug: "what-happens-if-you-never-pump-septic-tank",
  },
];

// Build a lookup map of slug → post
const postBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-brand-900 py-16 sm:py-20">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-accent-500/20 px-4 py-2 text-sm font-semibold text-accent-400 ring-1 ring-accent-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.707V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                </svg>
                Free Homeowner Resource Library
              </div>
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Septic System Resource Center
              </h1>
              <p className="mb-8 text-lg text-brand-200 sm:text-xl">
                Everything Central Valley homeowners need to understand, maintain, and protect their
                septic system. Free guides written by licensed septic professionals — no sales pitch,
                just answers.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href="#quick-answers" className="btn-primary text-sm">
                  Quick Answers
                </a>
                <a href="#topics" className="rounded-lg border border-brand-400 px-5 py-2.5 text-sm font-semibold text-brand-100 transition-colors hover:border-white hover:text-white">
                  Browse All Topics
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <div className="border-b border-gray-100 bg-white py-6 shadow-sm">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
              {[
                { label: "Free guides published", value: `${posts.length}+` },
                { label: "Topics covered", value: "6" },
                { label: "Written by", value: "Licensed Pros" },
                { label: "Central Valley focused", value: "100%" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-bold text-brand-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick answers section */}
        <section id="quick-answers" className="bg-gray-50 py-16 sm:py-20">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-3xl font-bold text-gray-900">Quick Answers</h2>
              <p className="text-gray-600">
                The six questions Central Valley homeowners ask most often — answered directly.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {quickAnswers.map((qa) => (
                <div
                  key={qa.slug}
                  className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-3 text-base font-semibold text-gray-900">{qa.question}</h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">{qa.answer}</p>
                  <Link
                    href={`/blog/${qa.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-800"
                  >
                    Full guide
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Topic sections */}
        <section id="topics" className="py-16 sm:py-20">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-3xl font-bold text-gray-900">Browse by Topic</h2>
              <p className="text-gray-600">
                In-depth guides organized by what matters most to homeowners.
              </p>
            </div>

            <div className="space-y-12">
              {topics.map((topic, topicIdx) => {
                const topicPosts = topic.slugs
                  .map((slug) => postBySlug[slug])
                  .filter(Boolean);

                return (
                  <div key={topic.id} className={`rounded-2xl border ${topic.colorClasses.border} ${topic.colorClasses.bg} p-6 sm:p-8`}>
                    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <span className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${topic.colorClasses.badge}`}>
                          {topicPosts.length} guides
                        </span>
                        <h2 className={`text-2xl font-bold ${topic.colorClasses.text}`}>
                          {topic.title}
                        </h2>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-700">
                          {topic.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {topicPosts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          className="group flex flex-col rounded-xl border border-white/80 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                        >
                          <span className={`mb-2 self-start rounded-full px-2 py-0.5 text-xs font-medium ${topic.colorClasses.badge}`}>
                            {post.category}
                          </span>
                          <h3 className="mb-2 text-sm font-semibold leading-snug text-gray-900 group-hover:text-brand-700">
                            {post.title}
                          </h3>
                          <p className="mt-auto text-xs text-gray-500">{post.readingTime}</p>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-5 border-t border-white/50 pt-4">
                      <Link
                        href={`/blog/category/${topic.categorySlug}`}
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold ${topic.colorClasses.text} hover:underline`}
                      >
                        See all {topic.title.toLowerCase()} guides
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="bg-red-50 py-12">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-red-200 bg-white p-8 sm:flex-row">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Septic Emergency?</h3>
                  <p className="text-sm text-gray-600">
                    If you have sewage backing up, strong odors, or visible overflow — don&apos;t wait. Read our emergency guide or call us directly.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-shrink-0">
                <Link
                  href="/blog/septic-emergency-what-to-do"
                  className="rounded-lg border border-red-300 px-5 py-2.5 text-sm font-semibold text-red-700 transition-colors hover:bg-red-50"
                >
                  Emergency Guide
                </Link>
                <Link
                  href="/emergency"
                  className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-bold text-white shadow transition-colors hover:bg-red-700"
                >
                  Get Help Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Local resources section */}
        <section className="bg-gray-50 py-16 sm:py-20">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-3xl font-bold text-gray-900">Central Valley Specific Resources</h2>
              <p className="text-gray-600">
                Regulations, service area guides, and local requirements for Stanislaus, San Joaquin, and Merced Counties.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  slug: "stanislaus-county-septic-regulations",
                  title: "Stanislaus County Septic Regulations",
                  desc: "Permit requirements, inspection schedules, and compliance rules for septic systems in Stanislaus County.",
                  badge: "Regulations",
                },
                {
                  slug: "find-reliable-septic-company-central-valley",
                  title: "How to Find a Reliable Septic Company",
                  desc: "What to look for, what questions to ask, and red flags to avoid when hiring a septic service in the Central Valley.",
                  badge: "Hiring Guide",
                },
                {
                  slug: "commercial-septic-service-central-valley",
                  title: "Commercial Septic Service Guide",
                  desc: "Compliance documentation, service frequencies, and what businesses need to know about managing commercial septic systems.",
                  badge: "Commercial",
                },
              ].map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="mb-3 self-start rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-orange-700">
                    {item.badge}
                  </span>
                  <h3 className="mb-2 font-semibold text-gray-900 group-hover:text-brand-700">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-brand-900 py-16">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-white">Have a Question Not Covered Here?</h2>
              <p className="mb-8 text-brand-200">
                Browse all {posts.length}+ guides in our blog, check our FAQ, or call us directly — our technicians are happy to answer questions even if you&apos;re not ready to book service.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/blog" className="btn-primary text-sm">
                  Browse All {posts.length} Guides
                </Link>
                <Link href="/faq" className="rounded-lg border border-brand-400 px-5 py-2.5 text-sm font-semibold text-brand-100 transition-colors hover:border-white hover:text-white">
                  Frequently Asked Questions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
