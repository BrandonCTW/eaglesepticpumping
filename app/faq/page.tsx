import React from "react";
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

const categoryIconMap: Record<string, React.ReactNode> = {
  basics: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  pumping: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
    </svg>
  ),
  "warning-signs": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
    </svg>
  ),
  cost: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
    </svg>
  ),
  "eagle-septic": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
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
                className="flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm ring-1 ring-brand-200 transition-colors hover:bg-brand-50 hover:text-brand-900"
              >
                <span className="[&>svg]:h-3.5 [&>svg]:w-3.5">{categoryIconMap[cat.id]}</span>
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
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex-shrink-0 rounded-xl bg-brand-100 p-2.5 text-brand-700">
                      {categoryIconMap[cat.id]}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {cat.title}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {cat.questions.length} questions
                      </p>
                    </div>
                  </div>
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
