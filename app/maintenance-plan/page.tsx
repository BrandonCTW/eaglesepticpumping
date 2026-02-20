import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PHONE, PHONE_HREF } from "@/lib/services";

export const metadata: Metadata = {
  title: "Annual Septic Maintenance Plan | Eagle Septic Pumping",
  description:
    "Protect your septic system year-round with Eagle Septic's annual maintenance plans. Starting at $299/year — includes scheduled pump-out, inspection, and priority service. Central Valley, CA.",
  alternates: {
    canonical: "https://eaglesepticpumping.com/maintenance-plan",
  },
  openGraph: {
    title: "Annual Septic Maintenance Plan | Eagle Septic Pumping",
    description:
      "Pre-schedule your septic service, lock in priority response, and save on every visit. Two plan tiers for homeowners in Modesto, Turlock, Ceres, and the Central Valley.",
    type: "website",
  },
};

const plans = [
  {
    name: "Essential Plan",
    price: "$299",
    period: "/year",
    tagline: "Best for most homeowners",
    accent: false,
    includes: [
      "Annual pump-out (up to 1,500-gallon tank)",
      "Sludge depth measurement & written record",
      "Visual inlet/outlet baffle inspection",
      "Service reminder — we call you before it's due",
      "Priority scheduling within 48 hours",
      "10% discount on any additional services during the year",
    ],
    notIncluded: [
      "Tank interior wash-down",
      "Effluent filter service",
      "Camera inspection",
    ],
    ctaText: "Sign Up — Essential",
  },
  {
    name: "Complete Care Plan",
    price: "$499",
    period: "/year",
    tagline: "Most popular for families & farms",
    accent: true,
    includes: [
      "Annual pump-out + full interior tank cleaning",
      "Sludge depth measurement & condition report with photos",
      "Baffle inspection and effluent filter service (if equipped)",
      "Visual drain field walk and assessment",
      "Service reminder — we call you before it's due",
      "Priority emergency dispatch — same-day guarantee",
      "15% discount on any repairs or additional services",
    ],
    notIncluded: [],
    ctaText: "Sign Up — Complete Care",
  },
];

const savings = [
  {
    scenario: "On-demand pump-out (every 3–5 years)",
    cost: "$400–$550 each visit",
    annual: "~$100–$183/yr",
    type: "ondemand",
  },
  {
    scenario: "Essential Plan (annual pump-out scheduled)",
    cost: "$299/year",
    annual: "$299/yr — includes priority service",
    type: "essential",
  },
  {
    scenario: "Complete Care Plan (pump-out + cleaning + field assessment)",
    cost: "$499/year",
    annual: "$499/yr — includes 15% off repairs",
    type: "complete",
  },
  {
    scenario: "Neglected tank → drain field failure (deferred maintenance)",
    cost: "$10,000–$30,000",
    annual: "One-time catastrophic cost",
    type: "danger",
  },
];

const faqs = [
  {
    question: "How do I sign up for a maintenance plan?",
    answer:
      "Call us or submit the estimate form on our website and mention you're interested in a maintenance plan. We'll confirm your tank size, service address, and last service date, then set you up in our system. No contract required — plans renew annually.",
  },
  {
    question: "When is the annual pump-out scheduled?",
    answer:
      "We contact you about 30 days before your annual service is due and schedule a time that works for you. You'll get a reminder call and a confirmation text. No need to remember — we handle it.",
  },
  {
    question: "What if my tank needs more than one pump-out in a year?",
    answer:
      "Your plan includes one annual pump-out. If your system requires additional service (high usage, larger household, etc.), your plan discount (10% or 15%) applies to any extra visits during the plan year.",
  },
  {
    question: "Does the plan cover repairs?",
    answer:
      "The plan itself doesn't cover repair costs, but your plan discount applies to any repair labor performed during your plan year. Essential Plan members save 10% and Complete Care members save 15% on all repairs.",
  },
  {
    question: "What if I sell my house mid-year?",
    answer:
      "We can transfer the remaining plan value to the new owner or prorate a refund — whichever works best for your situation. Just give us a call when you're under contract.",
  },
  {
    question: "Are there tanks too large for the standard plan?",
    answer:
      "The standard plans cover tanks up to 1,500 gallons. For larger residential tanks (2,000+ gallons) or commercial systems, call us for a custom maintenance quote — we service all sizes.",
  },
];

const BASE_URL = "https://eaglesepticpumping.com";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Maintenance Plan",
      item: `${BASE_URL}/maintenance-plan`,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Annual Septic Maintenance Plan",
  provider: {
    "@type": "LocalBusiness",
    name: "Eagle Septic Pumping",
    url: BASE_URL,
    telephone: PHONE,
    areaServed: "Central Valley, CA",
  },
  description:
    "Annual septic system maintenance plans for homeowners in Modesto, Turlock, Ceres, and the Central Valley. Includes scheduled pump-out, inspection, and priority dispatch.",
  offers: [
    {
      "@type": "Offer",
      name: "Essential Plan",
      price: "299",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "299",
        priceCurrency: "USD",
        unitText: "per year",
      },
      description:
        "Annual pump-out, written inspection report, priority scheduling, 10% discount on additional services.",
    },
    {
      "@type": "Offer",
      name: "Complete Care Plan",
      price: "499",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "499",
        priceCurrency: "USD",
        unitText: "per year",
      },
      description:
        "Annual pump-out + full cleaning, baffle and effluent filter service, drain field assessment, same-day emergency dispatch, 15% discount on repairs.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function MaintenancePlanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-brand-900 text-white">
          <div className="container-max section-padding">
            <nav className="mb-4 flex items-center gap-2 text-sm text-brand-300">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-brand-100">Maintenance Plan</span>
            </nav>
            <h1 className="mb-4 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Annual Septic Maintenance Plan
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-brand-100">
              Stop worrying about your septic system. Pre-schedule your annual
              service, lock in priority response, and save on everything we do —
              all for one flat yearly rate.
            </p>

            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                "No contract — renews annually",
                "We remind you when service is due",
                "Priority scheduling included",
                "Discount on all additional work",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full bg-brand-800 px-4 py-2 text-sm text-brand-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 flex-shrink-0 text-accent-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plan cards */}
        <section className="bg-gray-50">
          <div className="container-max section-padding">
            <h2 className="mb-3 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              Choose Your Plan
            </h2>
            <p className="mb-10 text-center text-gray-500 max-w-2xl mx-auto">
              Both plans include a scheduled annual pump-out and service
              reminders. The Complete Care Plan adds deeper cleaning, drain field
              assessment, and a larger repair discount.
            </p>

            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border-2 bg-white shadow-sm ${
                    plan.accent
                      ? "border-accent-500 shadow-accent-100 shadow-lg"
                      : "border-gray-200"
                  }`}
                >
                  {plan.accent && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-accent-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div
                    className={`rounded-t-2xl px-6 py-6 ${
                      plan.accent ? "bg-accent-500 text-white" : "bg-brand-900 text-white"
                    }`}
                  >
                    <p className="mb-1 text-sm font-medium opacity-80">
                      {plan.tagline}
                    </p>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <div className="mt-3 flex items-end gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="mb-1 text-sm opacity-80">{plan.period}</span>
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="flex-1 px-6 py-6">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                      What&apos;s included
                    </p>
                    <ul className="space-y-3">
                      {plan.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {plan.notIncluded.length > 0 && (
                      <div className="mt-5 border-t border-gray-100 pt-5">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Not included
                        </p>
                        <ul className="space-y-2">
                          {plan.notIncluded.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-4 w-4 flex-shrink-0 text-gray-300"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="px-6 pb-6">
                    <a
                      href={PHONE_HREF}
                      className={`block w-full rounded-lg px-4 py-3 text-center text-sm font-bold transition-colors ${
                        plan.accent
                          ? "bg-accent-500 text-white hover:bg-accent-600"
                          : "bg-brand-900 text-white hover:bg-brand-800"
                      }`}
                    >
                      {plan.ctaText}
                    </a>
                    <p className="mt-2 text-center text-xs text-gray-400">
                      Call to get started — no forms, no wait
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-gray-500">
              Have a tank larger than 1,500 gallons or a commercial property?{" "}
              <a href={PHONE_HREF} className="font-semibold text-brand-700 hover:underline">
                Call for a custom quote.
              </a>
            </p>
          </div>
        </section>

        {/* Why a plan beats on-demand */}
        <section className="bg-white">
          <div className="container-max section-padding">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                The Real Cost of On-Demand vs. Planned Maintenance
              </h2>
              <p className="mb-8 text-lg text-gray-500 leading-relaxed">
                Most homeowners wait until there&apos;s a problem. By then, a
                $350 pump-out has turned into an emergency call at twice the
                price — or worse, a drain field replacement. A maintenance plan
                changes that math entirely.
              </p>

              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="px-5 py-3 text-left font-semibold text-gray-700">Scenario</th>
                      <th className="px-5 py-3 text-left font-semibold text-gray-700 hidden sm:table-cell">Cost</th>
                      <th className="px-5 py-3 text-left font-semibold text-gray-700">Annualized</th>
                    </tr>
                  </thead>
                  <tbody>
                    {savings.map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-gray-100 last:border-0 ${
                          row.type === "danger"
                            ? "bg-red-50"
                            : row.type === "complete"
                            ? "bg-accent-50"
                            : row.type === "essential"
                            ? "bg-blue-50"
                            : ""
                        }`}
                      >
                        <td className={`px-5 py-4 font-medium ${
                          row.type === "danger" ? "text-red-800" :
                          row.type === "complete" ? "text-accent-800" :
                          row.type === "essential" ? "text-blue-800" :
                          "text-gray-700"
                        }`}>
                          {row.scenario}
                        </td>
                        <td className={`px-5 py-4 hidden sm:table-cell ${
                          row.type === "danger" ? "text-red-700 font-bold" :
                          "text-gray-600"
                        }`}>
                          {row.cost}
                        </td>
                        <td className={`px-5 py-4 font-semibold ${
                          row.type === "danger" ? "text-red-700" :
                          row.type === "complete" ? "text-accent-700" :
                          row.type === "essential" ? "text-blue-700" :
                          "text-gray-600"
                        }`}>
                          {row.annual}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-5 text-sm text-gray-500">
                A drain field replacement costs more than 20 years of Complete Care Plan
                coverage. Consistent maintenance is the only reliable way to prevent it.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-brand-50">
          <div className="container-max section-padding">
            <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              How the Plan Works
            </h2>
            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Sign Up in 5 Minutes",
                  desc: "Call us and we'll set up your plan over the phone. Tell us your tank size and last service date — that's all we need.",
                },
                {
                  step: "2",
                  title: "We Schedule Service",
                  desc: "We enter your system in our maintenance calendar and contact you 30 days before your service is due each year.",
                },
                {
                  step: "3",
                  title: "We Show Up — You Don't Stress",
                  desc: "Your technician arrives on schedule, services the system, and leaves you with a written condition report.",
                },
                {
                  step: "4",
                  title: "Discount Applies All Year",
                  desc: "Any repairs or additional visits during your plan year are automatically discounted at your plan rate.",
                },
              ].map((item) => (
                <div key={item.step} className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-900 text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mb-2 font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What customers say about maintenance */}
        <section className="bg-white">
          <div className="container-max section-padding">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
              What Plan Members Say
            </h2>
            <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
              {[
                {
                  name: "Tom B.",
                  location: "Oakdale, CA",
                  text: "Been using Eagle Septic for five years now. They're always on time, always thorough, and they remember my system from visit to visit. That kind of consistency is hard to find.",
                },
                {
                  name: "Carlos M.",
                  location: "Riverbank, CA",
                  text: "Already scheduled my next appointment at the time of service. These guys are upfront about pricing from the start — fair, fast, and they left the yard exactly as they found it.",
                },
              ].map((review) => (
                <blockquote
                  key={review.name}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
                >
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-gray-700">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <footer className="text-sm">
                    <strong className="text-brand-900">{review.name}</strong>
                    <span className="ml-2 text-gray-400">{review.location}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
            <p className="mt-6 text-center text-sm">
              <Link href="/reviews" className="font-semibold text-brand-700 hover:underline">
                Read all 200+ reviews →
              </Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50">
          <div className="container-max section-padding">
            <h2 className="mb-10 text-2xl font-bold text-gray-900 sm:text-3xl">
              Maintenance Plan FAQ
            </h2>
            <div className="max-w-3xl space-y-5">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-gray-200 bg-white p-6"
                >
                  <h3 className="mb-2 font-semibold text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-900 text-white">
          <div className="container-max section-padding">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
                Start Protecting Your System Today
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-brand-100">
                Sign up takes five minutes over the phone. We&apos;ll handle
                everything from there — reminders, scheduling, service, and
                follow-up. One less thing to think about.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-8 py-3 text-base font-bold text-white shadow-lg hover:bg-accent-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Call {PHONE}
                </a>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-base font-bold text-white hover:bg-white hover:text-brand-900 transition-colors"
                >
                  View Full Pricing
                </Link>
              </div>
              <p className="mt-6 text-sm text-brand-300">
                No contract. Cancel anytime. Plans start the day you sign up.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
