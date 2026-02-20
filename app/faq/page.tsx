import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PHONE, PHONE_HREF } from "@/lib/services";
import { faqCategories } from "@/lib/faqData";
import FAQAccordion from "./FAQAccordion";

export const metadata: Metadata = {
  title: "Septic System FAQ | Common Questions Answered",
  description:
    "Answers to the most common questions about septic tanks, pumping schedules, warning signs, costs, and Eagle Septic's services in Modesto and the Central Valley.",
  openGraph: {
    title: "Septic System FAQ | Eagle Septic Pumping",
    description:
      "Everything you need to know about septic maintenance, costs, warning signs, and scheduling service in Modesto, Turlock, and surrounding areas.",
    type: "website",
    url: "https://eaglesepticpumping.com/faq",
  },
  alternates: {
    canonical: "https://eaglesepticpumping.com/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((cat) =>
    cat.questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://eaglesepticpumping.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "FAQ",
      item: "https://eaglesepticpumping.com/faq",
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-brand-900 py-14 text-white">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <nav className="mb-4 text-sm text-brand-200">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>FAQ</span>
            </nav>
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
              Frequently Asked Questions
            </h1>
            <p className="max-w-2xl text-lg text-brand-100">
              Answers to the most common questions about septic systems,
              maintenance schedules, costs, and how Eagle Septic Pumping works.
            </p>
          </div>
        </section>

        {/* Category jump links */}
        <section className="border-b border-gray-200 bg-gray-50 py-4">
          <div className="container-max flex flex-wrap gap-3 px-4 sm:px-6 lg:px-8">
            {faqCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm ring-1 ring-brand-200 transition-colors hover:bg-brand-50 hover:text-brand-900"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </section>

        {/* Accordion sections */}
        <section className="py-16">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl space-y-14">
              {faqCategories.map((cat) => (
                <div key={cat.id} id={cat.id} className="scroll-mt-24">
                  <h2 className="mb-1 text-2xl font-bold text-gray-900">
                    {cat.title}
                  </h2>
                  <p className="mb-6 text-sm text-gray-500">
                    {cat.questions.length} questions
                  </p>
                  <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white px-6 shadow-sm">
                    <FAQAccordion questions={cat.questions} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-900 py-14 text-white">
          <div className="container-max px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
              Still have questions?
            </h2>
            <p className="mb-8 text-brand-100">
              Our team is ready to help — call us anytime or request a free
              estimate.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={PHONE_HREF}
                className="rounded-lg bg-accent-500 px-8 py-3 text-base font-bold text-white shadow transition-colors hover:bg-accent-600"
              >
                Call {PHONE}
              </a>
              <a
                href="/contact"
                className="rounded-lg border border-brand-400 px-8 py-3 text-base font-semibold text-brand-100 transition-colors hover:border-white hover:text-white"
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
