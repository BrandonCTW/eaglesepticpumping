import type { Metadata } from "next";
import type { ReactElement } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services, PHONE, PHONE_HREF } from "@/lib/services";

export const metadata: Metadata = {
  title: { absolute: "Septic Services | Eagle Septic Pumping" },
  description:
    "Complete septic services: tank pumping, cleaning, inspections, emergency response, drain field repair, and new system installation. Licensed & insured. Free estimates.",
  alternates: {
    canonical: "https://eaglesepticpumping.com/services",
  },
  openGraph: {
    title: "Septic Services | Eagle Septic Pumping",
    description:
      "Complete septic services from routine pumping to emergency response and new installations. Licensed, insured, available 24/7.",
    type: "website",
  },
};

const serviceIcons: Record<string, ReactElement> = {
  "septic-tank-pumping": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
  ),
  "tank-cleaning-maintenance": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  ),
  "septic-inspections": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
  "emergency-services": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  ),
  "drain-field-repair": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  "new-system-installation": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://eaglesepticpumping.com/services" },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
      {/* Hero */}
      <section className="bg-brand-900 text-white">
        <div className="container-max section-padding">
          <nav className="mb-6 flex items-center gap-2 text-sm text-brand-300">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Complete Septic Services
          </h1>
          <p className="max-w-2xl text-lg text-brand-100 leading-relaxed">
            From routine pumping to 24/7 emergency response, we handle every
            aspect of your septic system. Licensed, insured, and family-owned
            with 18+ years of experience.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-gray-50">
        <div className="container-max section-padding">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md hover:ring-brand-300"
              >
                <div className="mb-4 inline-flex rounded-lg bg-brand-50 p-3 text-brand-700 group-hover:bg-brand-100">
                  {serviceIcons[service.slug]}
                </div>
                <h2 className="mb-2 text-xl font-semibold text-gray-900">
                  {service.title}
                </h2>
                <p className="mb-4 flex-1 text-gray-600">
                  {service.metaDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 group-hover:underline">
                  Learn more
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
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-gray-200">
        <div className="container-max py-10">
          <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
            {[
              { stat: "18+", label: "Years Experience" },
              { stat: "4,200+", label: "Tanks Serviced" },
              { stat: "24/7", label: "Emergency Response" },
              { stat: "100%", label: "Licensed & Insured" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-3xl font-bold text-brand-700">
                  {item.stat}
                </div>
                <div className="mt-1 text-sm text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-900 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            Not Sure What You Need?
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-brand-100 text-lg">
            Call us and describe what you&apos;re experiencing. We&apos;ll help
            you identify the right service and give you an honest estimate.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-8 py-3 text-base font-bold text-white hover:bg-accent-600 transition-colors"
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
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-base font-bold text-white hover:bg-white hover:text-brand-900 transition-colors"
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
