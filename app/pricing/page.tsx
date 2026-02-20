import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PHONE, PHONE_HREF } from "@/lib/services";

export const metadata: Metadata = {
  title: "Septic Service Pricing & Cost Guide",
  description:
    "Transparent pricing for septic tank pumping, inspections, drain field repair, and emergency service. Residential pumping starts at $300. Get a free estimate today.",
  alternates: {
    canonical: "https://eaglesepticpumping.com/pricing",
  },
  openGraph: {
    title: "Septic Service Pricing | Eagle Septic Pumping",
    description:
      "Transparent pricing for septic tank pumping, inspections, drain field repair, and emergency service. Free estimates — no surprises.",
    type: "website",
  },
};

const services = [
  {
    name: "Septic Tank Pumping",
    slug: "septic-tank-pumping",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.107 1.115 1.886v.01c0 .375.11.724.3 1.015A3.75 3.75 0 0012.75 21h-1.5a3.75 3.75 0 003.375-2.1c.19-.291.3-.64.3-1.015v-.01c0-.779.43-1.488 1.115-1.886A8.25 8.25 0 0012 .75z" />
        <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.51A6.75 6.75 0 0012 19.5c.71 0 1.4-.1 2.05-.29a.75.75 0 01.43 1.44A8.25 8.25 0 0112 21a8.25 8.25 0 01-3.48-.75.75.75 0 01-.507-.85z" clipRule="evenodd" />
      </svg>
    ),
    rangeLabel: "Most common",
    priceRange: "$300 – $550",
    priceNote: "1,000–1,500 gallon residential tank",
    included: [
      "Full vacuum pump-out of liquid, sludge, and scum",
      "Visual inspection of inlet/outlet baffles",
      "Sludge depth measurement and written record",
      "Waste transported to licensed facility",
      "Technician recommendation for next service date",
    ],
    factors: [
      "Tank size (gallons)",
      "Depth and accessibility of access lid",
      "Last pumping date (very full tanks take longer)",
      "Rural vs. urban distance surcharges",
    ],
  },
  {
    name: "Septic Tank Cleaning",
    slug: "septic-tank-cleaning",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.818a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.845-.143z" clipRule="evenodd" />
      </svg>
    ),
    rangeLabel: "Full service",
    priceRange: "$400 – $750",
    priceNote: "Includes pump-out plus interior wash-down",
    included: [
      "Everything in standard pump-out",
      "High-pressure interior wall rinse",
      "Baffle and filter inspection and cleaning",
      "Effluent filter cleaning or replacement (if equipped)",
      "Lid sealing and condition check",
    ],
    factors: [
      "Tank condition and buildup level",
      "Presence of effluent filter (adds labor)",
      "Number of compartments",
      "Time since last service",
    ],
  },
  {
    name: "Septic Inspection",
    slug: "septic-system-inspections",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
      </svg>
    ),
    rangeLabel: "Standard inspection",
    priceRange: "$175 – $400",
    priceNote: "Home sale or routine inspection",
    included: [
      "Tank locate and lid expose",
      "Liquid level and sludge depth measurement",
      "Baffle condition check",
      "Visual drain field assessment",
      "Written inspection report",
      "Findings reviewed with homeowner",
    ],
    factors: [
      "Type: visual vs. full load-test inspection",
      "Camera inspection add-on (+$150–$300)",
      "Home sale vs. routine inspection",
      "Number of tanks on property",
    ],
  },
  {
    name: "Emergency Septic Service",
    slug: "emergency-septic-service",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
      </svg>
    ),
    rangeLabel: "After-hours premium",
    priceRange: "$500 – $1,200",
    priceNote: "Nights, weekends, holidays",
    included: [
      "Same-day or same-night dispatch",
      "Full pump-out and emergency assessment",
      "Immediate action to stop backup",
      "Written assessment and repair recommendations",
      "Follow-up scheduling for any additional repairs",
    ],
    factors: [
      "Time of day/night (after-hours rate applies)",
      "Severity of backup or overflow",
      "Weekend vs. weekday",
      "Depth of excavation required",
    ],
  },
  {
    name: "Drain Field Repair",
    slug: "drain-field-repair-restoration",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clipRule="evenodd" />
      </svg>
    ),
    rangeLabel: "Wide range by scope",
    priceRange: "$3,000 – $15,000",
    priceNote: "Partial repair to full field replacement",
    included: [
      "Diagnostic assessment and field locating",
      "Excavation and pipe inspection",
      "Repair or replacement of damaged sections",
      "Gravel bed restoration or aerobic treatment",
      "Permit coordination (where required)",
      "Post-repair inspection",
    ],
    factors: [
      "Extent of damage (partial repair vs. full replacement)",
      "Field size and soil conditions",
      "Permit requirements in your jurisdiction",
      "Accessibility and excavation complexity",
    ],
  },
  {
    name: "New System Installation",
    slug: "new-septic-system-installation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.641l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.306zm-9.87 8.04A1.5 1.5 0 104.313 16.9l5.37-6.351a7.52 7.52 0 01-.45-2.33L4.313 14.79a1.5 1.5 0 00-.184.878z" clipRule="evenodd" />
      </svg>
    ),
    rangeLabel: "Full project",
    priceRange: "$10,000 – $30,000",
    priceNote: "Conventional system, varies by property",
    included: [
      "Soil perc test coordination",
      "System design and permit application",
      "Tank supply and installation",
      "Drain field excavation and installation",
      "Electrical connections (aerobic systems)",
      "Final inspection and documentation",
    ],
    factors: [
      "System type (conventional, aerobic, mound, etc.)",
      "Soil percolation results",
      "Property size and setback requirements",
      "Local permit fees",
      "Tank material (concrete vs. poly)",
    ],
  },
];

const faqs = [
  {
    question: "Are these prices estimates or guaranteed quotes?",
    answer:
      "The ranges above are typical market prices for our service area. Your actual quote depends on your specific tank size, location, and system condition. We provide free, no-obligation estimates before any work begins — no surprises on the final invoice.",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "We accept cash, check, and all major credit cards. Payment is due at time of service for routine pump-outs and inspections. For larger projects like drain field repairs, we offer a deposit/completion structure.",
  },
  {
    question: "Do you charge extra to locate the tank lid?",
    answer:
      "If we need to probe and locate your tank access lid (common on older systems), there may be a small locate fee ($50–$75). Excavating a buried lid runs $100–$200 depending on depth. These are disclosed in advance.",
  },
  {
    question: "Is there a service call fee?",
    answer:
      "We don't charge a separate service call fee for routine work — the pump-out or inspection price is all-inclusive. Emergency after-hours calls include a dispatch premium reflected in the pricing range above.",
  },
  {
    question: "Does insurance cover septic repairs?",
    answer:
      "Standard homeowners insurance typically excludes septic systems. Some service line protection add-ons or home warranties may cover partial repair costs. We can provide detailed invoices to support any claim you file.",
  },
  {
    question: "Can I get a discount for scheduling in advance?",
    answer:
      "Yes — we offer discounts for customers who pre-schedule their next pump-out at the time of service. Ask your technician about our maintenance plan pricing.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
    { "@type": "ListItem", position: 2, name: "Pricing", item: "https://eaglesepticpumping.com/pricing" },
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

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Eagle Septic Pumping",
            url: "https://eaglesepticpumping.com",
            telephone: PHONE,
            priceRange: "$$",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Septic Services",
              itemListElement: services.map((s) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: s.name,
                  url: `https://eaglesepticpumping.com/services/${s.slug}`,
                },
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "USD",
                  description: s.priceRange,
                },
              })),
            },
          }),
        }}
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
              <span className="text-brand-100">Pricing</span>
            </nav>
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Septic Service Pricing
            </h1>
            <p className="max-w-2xl text-lg text-brand-100 leading-relaxed">
              We believe in honest, upfront pricing. Below are typical cost ranges
              for each of our services. Every job gets a free estimate before we
              start — no hidden fees, no surprises.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-base font-bold text-white shadow-lg hover:bg-accent-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                Call for a Free Estimate
              </a>
              <Link
                href="/estimate"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-base font-bold text-white hover:bg-white hover:text-brand-900 transition-colors"
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-b border-gray-200 bg-gray-50">
          <div className="container-max px-4 py-5 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 sm:gap-10">
              {[
                "Free estimates on all services",
                "No hidden fees",
                "Price locked before work begins",
                "Licensed & insured",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-accent-500">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service pricing cards */}
        <section className="bg-white">
          <div className="container-max section-padding">
            <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
              Pricing by Service
            </h2>
            <p className="mb-10 max-w-2xl text-gray-500 text-lg">
              Prices vary based on tank size, access conditions, and system complexity.
              These ranges reflect typical residential jobs in our service area.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.slug}
                  className="flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  {/* Card header */}
                  <div className="rounded-t-2xl bg-brand-900 px-6 py-5 text-white">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-700 text-accent-400">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold">{service.name}</h3>
                    <p className="mt-1 text-sm text-brand-300">{service.rangeLabel}</p>
                  </div>

                  {/* Price */}
                  <div className="border-b border-gray-100 px-6 py-4">
                    <p className="text-3xl font-bold text-gray-900">{service.priceRange}</p>
                    <p className="mt-1 text-sm text-gray-500">{service.priceNote}</p>
                  </div>

                  {/* Included */}
                  <div className="flex-1 px-6 py-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                      What&apos;s included
                    </p>
                    <ul className="space-y-2">
                      {service.included.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Price factors */}
                    <div className="mt-5 rounded-lg bg-gray-50 p-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Price depends on
                      </p>
                      <ul className="space-y-1">
                        {service.factors.map((f) => (
                          <li key={f} className="text-xs text-gray-500 leading-relaxed">
                            · {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="px-6 pb-6">
                    <Link
                      href={`/services/${service.slug}`}
                      className="block w-full rounded-lg border border-brand-200 bg-brand-50 px-4 py-2.5 text-center text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-100"
                    >
                      Learn about this service →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost comparison / cost of neglect */}
        <section className="bg-gray-50">
          <div className="container-max section-padding">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                  The Cost of Regular Maintenance vs. Neglect
                </h2>
                <p className="mb-6 text-gray-600 leading-relaxed text-lg">
                  The math on septic maintenance is simple: a $400 pump-out every 3–5 years
                  costs about $80–$133 per year. A drain field replacement costs $10,000–$30,000.
                  Regular service is the best investment most homeowners rarely think about.
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Routine pump-out (every 3–5 years)", cost: "$300–$550", type: "good" },
                    { label: "Tank cleaning (every 5–7 years)", cost: "$400–$750", type: "good" },
                    { label: "Annual inspection", cost: "$175–$400", type: "good" },
                    { label: "Baffle repair (deferred maintenance)", cost: "$500–$1,500", type: "warn" },
                    { label: "Drain field restoration (early-stage failure)", cost: "$3,000–$8,000", type: "warn" },
                    { label: "Full drain field replacement", cost: "$10,000–$20,000", type: "bad" },
                    { label: "Full system replacement", cost: "$15,000–$30,000", type: "bad" },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className={`flex items-center justify-between rounded-lg px-4 py-3 ${
                        row.type === "good"
                          ? "border border-accent-200 bg-accent-50"
                          : row.type === "warn"
                          ? "border border-amber-200 bg-amber-50"
                          : "border border-red-200 bg-red-50"
                      }`}
                    >
                      <span
                        className={`text-sm ${
                          row.type === "good"
                            ? "text-accent-800"
                            : row.type === "warn"
                            ? "text-amber-800"
                            : "text-red-800"
                        }`}
                      >
                        {row.label}
                      </span>
                      <span
                        className={`ml-4 font-bold tabular-nums ${
                          row.type === "good"
                            ? "text-accent-700"
                            : row.type === "warn"
                            ? "text-amber-700"
                            : "text-red-700"
                        }`}
                      >
                        {row.cost}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-brand-900 p-8 text-white lg:sticky lg:top-24">
                <h3 className="mb-2 text-xl font-bold">Get Your Free Estimate</h3>
                <p className="mb-6 text-brand-100 text-sm leading-relaxed">
                  Tell us your tank size and last service date and we&apos;ll give
                  you an accurate price range over the phone — usually in under
                  5 minutes.
                </p>
                <a
                  href={PHONE_HREF}
                  className="mb-4 flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-5 py-3 text-base font-bold text-white hover:bg-accent-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  Call {PHONE}
                </a>
                <Link
                  href="/estimate"
                  className="flex items-center justify-center rounded-lg border-2 border-brand-600 px-5 py-3 text-base font-bold text-white hover:bg-brand-800 transition-colors"
                >
                  Try the Cost Estimator
                </Link>
                <div className="mt-6 space-y-3 border-t border-brand-700 pt-6 text-sm text-brand-200">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-accent-400">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Free estimate — no obligation
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-accent-400">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Price confirmed before we start
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-accent-400">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Emergency service available 24/7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white">
          <div className="container-max section-padding">
            <h2 className="mb-10 text-2xl font-bold text-gray-900 sm:text-3xl">
              Pricing FAQ
            </h2>
            <div className="max-w-3xl space-y-5">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-6"
                >
                  <h3 className="mb-2 font-semibold text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section className="bg-brand-900 text-white">
          <div className="container-max section-padding text-center">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
              Ready for an exact quote?
            </h2>
            <p className="mb-7 text-brand-100 text-lg max-w-xl mx-auto">
              Call us or fill out our contact form and we&apos;ll get back to you
              within the hour. Free estimates always — no commitment required.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row justify-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-8 py-3 text-base font-bold text-white hover:bg-accent-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                Call {PHONE}
              </a>
              <Link
                href="/estimate"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-base font-bold text-white hover:bg-white hover:text-brand-900 transition-colors"
              >
                Free Estimate Tool
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
