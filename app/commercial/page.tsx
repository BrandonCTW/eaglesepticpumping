import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PHONE, PHONE_HREF } from "@/lib/services";

export const metadata: Metadata = {
  title: "Commercial Septic Services | Eagle Septic Pumping — Central Valley",
  description:
    "Commercial septic pumping, cleaning, and maintenance for restaurants, farms, apartment complexes, and businesses across California's Central Valley. Scheduled maintenance contracts available. Call for a free site assessment.",
  alternates: {
    canonical: "https://eaglesepticpumping.com/commercial",
  },
  openGraph: {
    title: "Commercial Septic Services | Eagle Septic Pumping",
    description:
      "Scheduled maintenance, emergency response, and full-service septic solutions for commercial properties and agricultural operations across the Central Valley.",
    type: "website",
  },
};

const commercialTypes = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
        <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clipRule="evenodd" />
      </svg>
    ),
    title: "Restaurants & Food Service",
    description:
      "Grease trap overflows and high-use systems demand more frequent service. We work around your schedule — nights, early mornings, or between shifts — so your kitchen never shuts down.",
    details: [
      "Grease trap pumping and cleaning",
      "High-frequency pump-out schedules",
      "Health department compliance documentation",
      "Emergency response for FOG (fats, oils, grease) blockages",
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-1.5 0v4.93l-1.006.365a.75.75 0 00.512 1.41l15-5.453zM16.491 9.954l-5.984 2.178L6 10.508V14a.75.75 0 01-1.5 0V9.964l-.005-.002A.75.75 0 004 10.514L4 14a.75.75 0 001.5 0v-1.5l10.391-3.784-.39 3.784a.75.75 0 001.49.154l.5-4.84A.75.75 0 0016.49 9.954z" />
        <path d="M5 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM19.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </svg>
    ),
    title: "Agricultural & Farm Properties",
    description:
      "The Central Valley's farms and ranches often have oversized systems serving bunkhouses, processing facilities, and multiple structures. We have the equipment for large-volume agricultural jobs.",
    details: [
      "Large-capacity tank pumping (5,000+ gallons)",
      "Multi-structure farm system service",
      "Seasonal scheduling for harvest operations",
      "Holding tank pumping for remote locations",
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path fillRule="evenodd" d="M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 010 1.5h-.75A.75.75 0 016 6.75zM6.75 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 010-1.5zM6 12.75A.75.75 0 016.75 12h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-.75 3.75A.75.75 0 0110.5 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM16.5 6.75v15h5.25a.75.75 0 000-1.5H21v-12a.75.75 0 000-1.5h-4.5zm1.5 4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 2.25a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75h-.008zM18 17.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
      </svg>
    ),
    title: "Apartment & Multi-Family",
    description:
      "Shared systems serving multiple units fail fast when neglected. Our preventive maintenance plans catch problems before they become tenant complaints or code violations.",
    details: [
      "Multi-unit septic system service",
      "Regular inspection reports for property records",
      "Priority scheduling for tenant-affecting emergencies",
      "Annual maintenance contracts with fixed pricing",
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
        <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
      </svg>
    ),
    title: "Industrial & Commercial",
    description:
      "Processing plants, auto shops, car washes, and other commercial operations generate waste streams that require specialized handling and compliance documentation.",
    details: [
      "High-volume pumping for industrial sites",
      "Compliance documentation for environmental audits",
      "Portable restroom and holding tank service",
      "Scheduled contracts with guaranteed response times",
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
      </svg>
    ),
    title: "RV Parks & Campgrounds",
    description:
      "Seasonal surges and high-use dump stations require a reliable service partner. We offer custom maintenance schedules aligned with your peak season.",
    details: [
      "Dump station cleaning and maintenance",
      "Seasonal pump-out scheduling",
      "Large holding tank service",
      "Emergency dispatch during peak season",
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
      </svg>
    ),
    title: "Churches & Event Venues",
    description:
      "High-attendance events stress septic systems designed for average weekly use. Pre-event inspections and pumping protect you from embarrassing, costly failures during your busiest days.",
    details: [
      "Pre-event pumping and inspection",
      "Portable restroom placement coordination",
      "Annual maintenance for intermittent-use facilities",
      "Priority scheduling around your event calendar",
    ],
  },
];

const contractBenefits = [
  {
    title: "Fixed Annual Pricing",
    description:
      "Lock in your service rate for the year. No price surprises — and you'll always have budget certainty for maintenance costs.",
  },
  {
    title: "Priority Scheduling",
    description:
      "Contract clients get first call on emergency dispatch and preferred scheduling during peak service periods.",
  },
  {
    title: "Compliance Documentation",
    description:
      "We provide detailed service records after every visit — formatted for health department, environmental, and insurance requirements.",
  },
  {
    title: "Annual System Inspection",
    description:
      "Every contract includes a full annual inspection — tank condition, baffle integrity, drain field assessment — at no extra charge.",
  },
  {
    title: "Dedicated Account Contact",
    description:
      "Your business gets a direct line to our commercial scheduler. No hold queues, no starting over — someone who knows your property.",
  },
  {
    title: "Flexible Service Windows",
    description:
      "We schedule around your operations — early mornings, after close, weekends. We work when it's least disruptive for your business.",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Free Site Assessment",
    description:
      "We visit your property to evaluate your system — tank size, access conditions, usage volume, and current condition. No charge, no obligation.",
  },
  {
    step: 2,
    title: "Custom Maintenance Plan",
    description:
      "Based on your system and business type, we recommend a service frequency and put together a written proposal with flat annual pricing.",
  },
  {
    step: 3,
    title: "Scheduled Service Begins",
    description:
      "We show up on schedule, complete the work efficiently, and leave your site exactly as we found it. You receive a service report after each visit.",
  },
  {
    step: 4,
    title: "Annual Review",
    description:
      "Each year we review system condition, assess whether frequency adjustments are needed, and renew your contract — often at the same rate.",
  },
];

const faqs = [
  {
    question: "How often does a commercial septic system need to be pumped?",
    answer:
      "It depends on tank capacity and daily usage. A restaurant with a 2,000-gallon tank and heavy FOG output may need service every 1–3 months. A small office building on a 1,500-gallon system might need annual pumping. We assess your specific situation and recommend a schedule accordingly — we don't apply a one-size-fits-all formula.",
  },
  {
    question: "Do you provide compliance documentation for health inspections?",
    answer:
      "Yes. We provide written service reports for every visit, including tank condition, sludge levels, and any issues observed. These records are formatted to satisfy Stanislaus County and Merced County environmental health requirements. We can also provide annual system inspection letters on request.",
  },
  {
    question: "Can you service our system outside of business hours?",
    answer:
      "Absolutely. For restaurants, food processing operations, and retail businesses, we regularly schedule service before opening or after closing. Weekend and early-morning appointments are available — this is one of the main reasons commercial clients choose us.",
  },
  {
    question: "Do you offer maintenance contracts?",
    answer:
      "Yes. We offer annual maintenance contracts for commercial and agricultural properties. Contracts include a set number of scheduled pump-outs per year, one full annual inspection, compliance documentation, and priority emergency response. Pricing is fixed for the contract term — no surprise charges.",
  },
  {
    question: "What's the largest tank you can pump?",
    answer:
      "Our vacuum trucks handle tanks up to 10,000+ gallons in a single visit for most standard waste types. For very large agricultural or industrial tanks, we coordinate multiple truck visits or staged pumping. Contact us with your tank specifications and we'll confirm capacity and logistics.",
  },
  {
    question: "What areas do you serve for commercial clients?",
    answer:
      "We serve commercial and agricultural properties across Stanislaus County, Merced County, and San Joaquin County — the same coverage area as our residential service. This includes Modesto, Turlock, Ceres, Fresno-adjacent areas, Stockton, Tracy, Manteca, Merced, and surrounding communities.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
    { "@type": "ListItem", position: 2, name: "Commercial Services", item: "https://eaglesepticpumping.com/commercial" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Eagle Septic Pumping",
  url: "https://eaglesepticpumping.com",
  telephone: PHONE,
  description:
    "Commercial septic pumping, cleaning, grease trap service, and maintenance contracts for restaurants, farms, apartment complexes, and industrial facilities in California's Central Valley.",
  areaServed: [
    { "@type": "County", name: "Stanislaus County", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "County", name: "Merced County", containedInPlace: { "@type": "State", name: "California" } },
    { "@type": "County", name: "San Joaquin County", containedInPlace: { "@type": "State", name: "California" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Commercial Septic Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Septic Tank Pumping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Grease Trap Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agricultural Septic Service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Maintenance Contracts" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function CommercialPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-brand-900 text-white">
          <div className="container-max section-padding">
            <nav className="mb-4 flex items-center gap-2 text-sm text-brand-300">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-brand-100">Commercial Services</span>
            </nav>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-500/20 px-3 py-1.5 text-sm font-semibold text-accent-400 ring-1 ring-accent-500/30">
                  Commercial & Agricultural
                </div>
                <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl leading-tight">
                  Commercial Septic Pumping & Maintenance
                </h1>
                <p className="text-lg text-brand-100 leading-relaxed mb-8">
                  Restaurants, farms, apartment complexes, and industrial operations across
                  the Central Valley trust Eagle Septic for reliable service, flexible
                  scheduling, and the compliance documentation their businesses require.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-base font-bold text-white shadow hover:bg-accent-600 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                    Call for a Free Site Assessment
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-base font-bold text-white hover:bg-white hover:text-brand-900 transition-colors"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>

              {/* Stats card */}
              <div className="rounded-2xl bg-brand-800 p-8">
                <h2 className="mb-6 text-lg font-semibold text-white">Why Businesses Choose Eagle Septic</h2>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { value: "18+", label: "Years of commercial service" },
                    { value: "24/7", label: "Emergency response" },
                    { value: "10K+", label: "Gallon capacity trucks" },
                    { value: "100%", label: "Compliance documentation" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-brand-700 p-4 text-center">
                      <p className="text-2xl font-extrabold text-accent-400">{stat.value}</p>
                      <p className="mt-1 text-xs text-brand-200">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-2 text-sm text-brand-200">
                  {[
                    "Flexible scheduling — nights, weekends, early mornings",
                    "Annual maintenance contracts with fixed pricing",
                    "Service records formatted for compliance audits",
                    "Dedicated commercial account contact",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-400">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries served */}
        <section className="bg-white">
          <div className="container-max section-padding">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-500">
                Every commercial property has different usage patterns, system sizes, and compliance requirements.
                We know the difference.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {commercialTypes.map((type) => (
                <div
                  key={type.title}
                  className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    {type.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{type.title}</h3>
                  <p className="mb-4 text-sm text-gray-600 leading-relaxed flex-1">{type.description}</p>
                  <ul className="space-y-1.5">
                    {type.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent-500">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance contracts */}
        <section className="bg-gray-50">
          <div className="container-max section-padding">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                  Commercial Maintenance Contracts
                </h2>
                <p className="mb-8 text-lg text-gray-600 leading-relaxed">
                  Stop reacting to problems and start preventing them. Our maintenance contracts
                  give commercial and agricultural clients predictable service, fixed annual
                  pricing, and the documentation their operations require.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {contractBenefits.map((benefit) => (
                    <div key={benefit.title} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                      <h3 className="mb-1.5 font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How it works */}
              <div className="rounded-2xl bg-brand-900 p-8 text-white lg:sticky lg:top-24">
                <h3 className="mb-6 text-xl font-bold">How It Works</h3>
                <ol className="space-y-5">
                  {processSteps.map((step) => (
                    <li key={step.step} className="flex gap-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-white">
                        {step.step}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{step.title}</p>
                        <p className="mt-1 text-sm text-brand-200 leading-relaxed">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 space-y-3 border-t border-brand-700 pt-8">
                  <a
                    href={PHONE_HREF}
                    className="flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-5 py-3 font-bold text-white hover:bg-accent-600 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                    Call {PHONE}
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center rounded-lg border-2 border-brand-600 px-5 py-3 font-bold text-white hover:bg-brand-800 transition-colors"
                  >
                    Request a Proposal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agricultural callout */}
        <section className="bg-white">
          <div className="container-max section-padding">
            <div className="overflow-hidden rounded-2xl bg-brand-50 ring-1 ring-brand-200">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
                    Central Valley Agriculture
                  </div>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                    Serving the Valley&apos;s Farms & Agricultural Operations
                  </h2>
                  <p className="mb-6 text-gray-600 leading-relaxed">
                    Stanislaus and Merced counties are home to some of California&apos;s most
                    productive farmland. Dairies, packing houses, processing facilities, and
                    worker housing all generate significant septic demands — often with
                    oversized tanks in remote locations.
                  </p>
                  <p className="mb-6 text-gray-600 leading-relaxed">
                    Our trucks are equipped for large-volume pumping and we&apos;re familiar
                    with the access challenges common to agricultural properties. We work
                    around harvest schedules and can service multiple structures in a single
                    visit to minimize disruption.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Dairy and livestock operation waste management",
                      "Packing house and processing facility service",
                      "Farm labor housing and bunkhouse septic",
                      "Remote and hard-to-access tank locations",
                      "Multi-tank property coordination",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 flex-shrink-0 text-accent-500">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center bg-brand-900 p-8 text-white lg:p-12">
                  <h3 className="mb-4 text-xl font-bold">Large-Volume Equipment</h3>
                  <div className="space-y-5">
                    {[
                      { label: "Vacuum truck capacity", value: "Up to 4,000 gal per load" },
                      { label: "Maximum tank size serviced", value: "10,000+ gallons" },
                      { label: "Access road requirement", value: "Minimum 12-ft clearance" },
                      { label: "Multi-truck coordination", value: "Available for large jobs" },
                    ].map((spec) => (
                      <div key={spec.label} className="border-b border-brand-700 pb-4 last:border-0 last:pb-0">
                        <p className="text-sm text-brand-300">{spec.label}</p>
                        <p className="mt-0.5 font-semibold text-white">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                  <a
                    href={PHONE_HREF}
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-5 py-3 font-bold text-white hover:bg-accent-600 transition-colors"
                  >
                    Discuss Your Property
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50">
          <div className="container-max section-padding">
            <h2 className="mb-10 text-2xl font-bold text-gray-900 sm:text-3xl">
              Commercial Septic FAQs
            </h2>
            <div className="max-w-3xl space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-gray-200 bg-white p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">{faq.question}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-900 text-white">
          <div className="container-max section-padding">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
                  Get a Free Commercial Site Assessment
                </h2>
                <p className="text-brand-100 text-lg leading-relaxed">
                  We&apos;ll visit your property, evaluate your system, and provide a written
                  proposal — including maintenance contract options — at no cost or obligation.
                  Most assessments are completed within 48 hours of your call.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-7 py-3 text-base font-bold text-white hover:bg-accent-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  Call {PHONE}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white px-7 py-3 text-base font-bold text-white hover:bg-white hover:text-brand-900 transition-colors"
                >
                  Request a Proposal
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
