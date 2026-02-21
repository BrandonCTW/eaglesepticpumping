import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PHONE, PHONE_HREF } from "@/lib/services";
import { serviceAreas } from "@/lib/serviceAreas";

export const metadata: Metadata = {
  title: { absolute: "Septic Inspection for Real Estate | Eagle Septic Pumping" },
  description:
    "Certified septic inspections for home buyers, sellers, and real estate agents in California's Central Valley. Written reports within 24 hours. Free quotes. Schedule before your closing date.",
  alternates: {
    canonical: "https://eaglesepticpumping.com/real-estate-inspections",
  },
  openGraph: {
    title: "Real Estate Septic Inspections | Eagle Septic Pumping",
    description:
      "Protect your real estate transaction with a certified septic inspection. Reports within 24 hours. Serving Modesto, Stockton, Merced, and all Central Valley communities.",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://eaglesepticpumping.com/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Real Estate Inspections",
      item: "https://eaglesepticpumping.com/real-estate-inspections",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do lenders require a septic inspection to close?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many conventional and government-backed lenders require a septic inspection before approving a home loan. FHA and USDA loans typically mandate a septic inspection and may require repairs before funding. Eagle Septic provides written reports that satisfy most lender requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I get a written septic inspection report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eagle Septic delivers written inspection reports within 24 hours of the service visit — typically the same business day. Rush scheduling is available for closing deadlines.",
      },
    },
    {
      "@type": "Question",
      name: "What does a real estate septic inspection include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our inspection includes tank pumping, full tank structural evaluation, inlet and outlet baffle assessment, distribution box inspection, drain field surface evaluation and probing, and a written report with photos. Camera inspection is available as an add-on.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a real estate septic inspection cost in the Central Valley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Real estate septic inspections including pumping typically run $350–$600 depending on tank size and access. Eagle Septic provides an upfront quote before scheduling. Call for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Can Eagle Septic coordinate directly with my real estate agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work closely with realtors throughout the Central Valley. We can schedule directly, send reports to agents and escrow officers, and communicate around closing timelines.",
      },
    },
    {
      "@type": "Question",
      name: "What if the septic inspection finds a problem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eagle Septic provides an honest, detailed report. If repairs are needed, we give you a clear scope and estimate so buyers and sellers can negotiate accordingly. We can also complete many repairs ourselves, reducing the number of contractors involved.",
      },
    },
  ],
};

const whatIsIncluded = [
  {
    title: "Tank Pumping Prior to Inspection",
    description:
      "We pump the tank first so we can clearly evaluate baffle condition, tank walls, and effluent levels without interference from floating solids.",
  },
  {
    title: "Tank Structural Evaluation",
    description:
      "We inspect the tank for cracks, corrosion, root intrusion, and structural integrity — issues that affect system lifespan and value.",
  },
  {
    title: "Inlet & Outlet Baffle Assessment",
    description:
      "Baffles direct flow and protect the drain field. We check for deterioration, displacement, or absence — a common source of system failure.",
  },
  {
    title: "Distribution Box Inspection",
    description:
      "We evaluate the D-box for cracks, settling, and uneven distribution to the drain field laterals.",
  },
  {
    title: "Drain Field Evaluation",
    description:
      "Surface observation and probe testing reveal saturation, pooling, or failing absorption — the most costly component to replace.",
  },
  {
    title: "Written Report with Photos",
    description:
      "You receive a signed written report documenting every component's condition, deficiencies found, and recommended next steps. Delivered within 24 hours.",
  },
];

const whoNeedsThis = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    audience: "Home Buyers",
    reason:
      "Don't inherit a failing system. A pre-close inspection reveals the true cost of ownership and gives you negotiating leverage if repairs are needed.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    audience: "Home Sellers",
    reason:
      "A clean inspection report builds buyer confidence and prevents last-minute surprises that delay or kill deals. Know your system's status before listing.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    audience: "Real Estate Agents",
    reason:
      "We work around your closing timeline, deliver reports fast, and communicate directly with escrow. Refer with confidence — your clients are in experienced hands.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    audience: "Lenders & Escrow Officers",
    reason:
      "Eagle Septic provides written reports that meet FHA, USDA, and conventional lender requirements. We're responsive, professional, and respect closing deadlines.",
  },
];

const process = [
  {
    step: 1,
    title: "Call or Schedule Online",
    description:
      "Tell us this is for a real estate transaction and share your closing timeline. We prioritize real estate inspections and offer rush scheduling.",
  },
  {
    step: 2,
    title: "On-Site Inspection",
    description:
      "Our licensed technician arrives on time, pumps the tank, and conducts a thorough evaluation of all accessible system components.",
  },
  {
    step: 3,
    title: "Written Report Within 24 Hours",
    description:
      "You receive a signed, photo-documented written report emailed to you, your agent, and escrow — whoever you need.",
  },
  {
    step: 4,
    title: "Repair Estimates if Needed",
    description:
      "If issues are found, we provide a clear, honest repair estimate. Many repairs can be completed by Eagle Septic directly, keeping your transaction on track.",
  },
];

export default function RealEstateInspectionsPage() {
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
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-brand-900 text-white">
          <div className="container-max section-padding">
            <nav className="mb-6 flex items-center gap-2 text-sm text-brand-300">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white">Services</Link>
              <span>/</span>
              <span className="text-white">Real Estate Inspections</span>
            </nav>
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-accent-500/20 px-4 py-2 text-sm font-semibold text-accent-400 ring-1 ring-accent-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                Reports Within 24 Hours
              </div>
              <h1 className="mb-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Septic Inspections for{" "}
                <span className="text-accent-400">Real Estate Transactions</span>
              </h1>
              <p className="mb-8 text-lg text-brand-100 leading-relaxed sm:text-xl">
                Certified septic inspections with written reports for home buyers, sellers, and
                agents throughout California&apos;s Central Valley. We work around your closing
                timeline — not the other way around.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={PHONE_HREF} className="btn-primary text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  Call {PHONE}
                </a>
                <Link href="/book" className="btn-secondary text-base">
                  Schedule Inspection
                </Link>
              </div>
              {/* Quick trust stats */}
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-brand-200">
                {[
                  "Reports within 24 hours",
                  "FHA & USDA compliant",
                  "Licensed & insured",
                  "18+ years experience",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-accent-400">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who needs this */}
        <section className="bg-white">
          <div className="container-max section-padding">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                Who We Help
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                Whether you&apos;re on the buy side, sell side, or facilitating the
                transaction, Eagle Septic provides the information you need to close with
                confidence.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whoNeedsThis.map((item) => (
                <div key={item.audience} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                  <div className="mb-4 inline-flex rounded-lg bg-brand-100 p-3 text-brand-700">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.audience}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-gray-50">
          <div className="container-max section-padding">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                What&apos;s Included in Every Inspection
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                We don&apos;t do drive-by inspections. Every real estate septic inspection is
                a thorough, documented evaluation from tank to drain field.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whatIsIncluded.map((item, i) => (
                <div key={i} className="flex gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-100 text-accent-700 text-sm font-bold">
                      {i + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl bg-brand-50 border border-brand-200 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-brand-900">Optional: Camera Inspection Add-On</p>
                  <p className="text-sm text-brand-700">
                    Full video documentation of the tank interior and pipes. Ideal for older systems,
                    disputed conditions, or when lenders require visual evidence.
                  </p>
                </div>
                <a href={PHONE_HREF} className="inline-flex flex-shrink-0 items-center gap-2 rounded-lg bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-800 transition-colors">
                  Ask About Camera
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white">
          <div className="container-max section-padding">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                How It Works
              </h2>
              <p className="mx-auto max-w-xl text-gray-600">
                From scheduling to written report — we keep it simple and keep you on
                track for closing.
              </p>
            </div>
            <div className="relative mx-auto max-w-3xl">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200 sm:left-8" aria-hidden="true" />
              <div className="space-y-8">
                {process.map((step) => (
                  <div key={step.step} className="relative flex gap-5 sm:gap-8">
                    <div className="relative z-10 flex-shrink-0 flex h-10 w-10 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-brand-700 text-white font-bold text-sm sm:text-base">
                      {step.step}
                    </div>
                    <div className="pt-1.5 sm:pt-4">
                      <h3 className="mb-1 font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing callout */}
        <section className="bg-brand-50 border-y border-brand-200">
          <div className="container-max py-12">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-4 text-2xl font-bold text-brand-900 sm:text-3xl">
                Transparent Pricing — No Surprises
              </h2>
              <p className="mb-8 text-brand-700 max-w-2xl mx-auto">
                A real estate septic inspection including pumping typically runs{" "}
                <strong>$350–$600</strong> depending on tank size and site access. We provide
                an upfront quote before scheduling — no hidden fees, no surprise charges.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center">
                <a href={PHONE_HREF} className="btn-primary text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  Get a Free Quote
                </a>
                <Link href="/pricing" className="btn-secondary text-base">
                  View Full Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Realtor section */}
        <section className="bg-white">
          <div className="container-max section-padding">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-2xl bg-gray-900 text-white p-8 sm:p-12">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                  <div className="flex-1">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent-500/20 px-3 py-1 text-xs font-semibold text-accent-400 ring-1 ring-accent-500/30">
                      For Real Estate Agents
                    </div>
                    <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                      Your Reliable Septic Partner
                    </h2>
                    <p className="mb-4 text-gray-300 leading-relaxed">
                      When you refer clients to Eagle Septic, you get a professional who
                      respects your timeline, communicates clearly, and doesn&apos;t drop balls
                      before closing.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {[
                        "Rush scheduling available for tight closing timelines",
                        "Reports delivered to agents, buyers, and escrow simultaneously",
                        "Direct communication — we answer the phone",
                        "If repairs are needed, we provide estimates same day",
                        "No upselling — honest assessments only",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-400">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-shrink-0 flex flex-col gap-3">
                    <a
                      href={PHONE_HREF}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3 font-bold text-white hover:bg-accent-600 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                      </svg>
                      Call {PHONE}
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-lg border-2 border-gray-600 px-6 py-3 font-bold text-white hover:border-white transition-colors"
                    >
                      Send a Message
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-gray-50">
          <div className="container-max section-padding">
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                Service Area
              </h2>
              <p className="mx-auto max-w-xl text-gray-600">
                We serve home buyers, sellers, and agents throughout California&apos;s Central
                Valley — from Stockton and Modesto to Merced and Los Banos.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm font-medium text-brand-700 hover:bg-brand-50 hover:border-brand-400 transition-colors"
                >
                  {area.city}, {area.stateAbbr}
                </Link>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-gray-500">
              Don&apos;t see your city?{" "}
              <a href={PHONE_HREF} className="text-brand-700 underline hover:text-brand-900">
                Call to confirm coverage
              </a>{" "}
              — we often travel beyond our standard service area.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white">
          <div className="container-max section-padding">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqSchema.mainEntity.map((item) => (
                  <div key={item.name} className="rounded-xl border border-gray-200 p-6">
                    <h3 className="mb-2 font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.acceptedAnswer.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-900 text-white">
          <div className="container-max section-padding text-center">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Schedule Your Real Estate Inspection Today
            </h2>
            <p className="mb-8 mx-auto max-w-xl text-brand-100 text-lg">
              Don&apos;t let a septic system stall your closing. Call Eagle Septic now —
              we&apos;ll get you scheduled, complete the inspection, and have your written
              report ready before your deadline.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row justify-center">
              <a href={PHONE_HREF} className="btn-primary text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                Call {PHONE}
              </a>
              <Link href="/book" className="btn-secondary text-base">
                Book Online
              </Link>
            </div>
            <p className="mt-6 text-sm text-brand-300">
              Also serving:{" "}
              <Link href="/services/septic-inspections" className="text-brand-100 underline hover:text-white">
                routine septic inspections
              </Link>
              {" · "}
              <Link href="/services/septic-tank-pumping" className="text-brand-100 underline hover:text-white">
                tank pumping
              </Link>
              {" · "}
              <Link href="/services/emergency-services" className="text-brand-100 underline hover:text-white">
                24/7 emergency service
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
