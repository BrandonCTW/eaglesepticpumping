import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { PHONE, PHONE_HREF, EMAIL } from "@/lib/services";

export const metadata: Metadata = {
  title: "Contact Eagle Septic Pumping | Free Estimates · (555) 867-5309",
  description:
    "Contact Eagle Septic Pumping for a free estimate or to schedule service. Call anytime — 24/7 emergency response. Serving Modesto, Turlock, Ceres, and the Central Valley.",
  openGraph: {
    title: "Contact Eagle Septic Pumping",
    description:
      "Reach our team for a free estimate or emergency service. Fast response, upfront pricing.",
    url: "https://eaglesepticpumping.com/contact",
  },
  alternates: {
    canonical: "https://eaglesepticpumping.com/contact",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Eagle Septic Pumping",
  url: "https://eaglesepticpumping.com/contact",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Eagle Septic Pumping",
    telephone: PHONE,
    email: EMAIL,
    url: "https://eaglesepticpumping.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "16:00",
      },
    ],
  },
};

const quickStats = [
  { label: "Response Time", value: "< 1 Hour", sub: "during business hours" },
  { label: "Emergency Line", value: "24/7", sub: "always answered" },
  { label: "Free Estimates", value: "Always", sub: "no obligation" },
  { label: "Service Area", value: "12 Cities", sub: "Central Valley, CA" },
];

const serviceAreas = [
  "Modesto",
  "Turlock",
  "Ceres",
  "Riverbank",
  "Oakdale",
  "Patterson",
  "Waterford",
  "Hughson",
  "Escalon",
  "Newman",
  "Atwater",
  "Merced",
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://eaglesepticpumping.com/contact" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-brand-900 py-12 sm:py-16">
          <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-400">
              Get in Touch
            </p>
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Contact Eagle Septic Pumping
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-200">
              Questions about pricing? Ready to book? Need emergency service?
              We&apos;re here to help — call anytime or fill out the form below
              and we&apos;ll respond within the hour.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-base font-bold text-white shadow-lg transition-colors hover:bg-accent-600"
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
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-600 px-6 py-3 text-base font-bold text-white transition-colors hover:border-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Quick stats bar */}
        <section className="border-b border-gray-200 bg-white">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 divide-x divide-gray-200 lg:grid-cols-4 lg:divide-x">
              {quickStats.map((stat) => (
                <div key={stat.label} className="py-6 text-center px-4">
                  <p className="text-2xl font-extrabold text-brand-800">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-gray-700">
                    {stat.label}
                  </p>
                  <p className="text-xs text-gray-500">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact form section */}
        <ContactSection />

        {/* Service area callout */}
        <section className="bg-gray-50 py-12">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Serving 12 Cities Across California&apos;s Central Valley
              </h2>
              <p className="mt-3 text-gray-600">
                Not sure if we cover your area? Call us — if you&apos;re in the
                Central Valley, chances are good we do.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {serviceAreas.map((city) => (
                  <a
                    key={city}
                    href={`/service-areas/${city.toLowerCase()}`}
                    className="rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm font-medium text-brand-700 transition-colors hover:bg-brand-50 hover:border-brand-400"
                  >
                    {city}
                  </a>
                ))}
              </div>
              <p className="mt-6 text-sm text-gray-500">
                <a
                  href="/service-areas"
                  className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-900"
                >
                  View full service area map →
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
