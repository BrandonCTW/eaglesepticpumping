import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { serviceAreas, getServiceArea, PHONE, PHONE_HREF } from "@/lib/serviceAreas";
import { getPostsBySlugs, getPostBySlug } from "@/lib/posts";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return serviceAreas.map((a) => ({ city: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const area = getServiceArea(city);
  if (!area) return {};
  const title = `Septic Pumping & Service in ${area.city}, ${area.stateAbbr} | Eagle Septic`;
  const description = `Licensed septic tank pumping, cleaning, inspection, and emergency service in ${area.city}, ${area.county} County. Eagle Septic Pumping — upfront pricing, same-day availability.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `https://eaglesepticpumping.com/service-areas/${area.slug}` },
    openGraph: { title, description, type: "website" },
  };
}

const SERVICES_SUMMARY = [
  { name: "Septic Tank Pumping", slug: "septic-tank-pumping", icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" },
  { name: "Tank Cleaning & Maintenance", slug: "tank-cleaning-maintenance", icon: "M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" },
  { name: "Septic Inspections", slug: "septic-inspections", icon: "M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { name: "Emergency Services", slug: "emergency-services", icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" },
  { name: "Drain Field Repair", slug: "drain-field-repair", icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" },
  { name: "New System Installation", slug: "new-system-installation", icon: "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375" },
];

// Slugs shown on every city page — broadly relevant to any homeowner
const CITY_PAGE_POST_SLUGS = [
  "how-often-pump-septic-tank",
  "warning-signs-septic-system-failing",
  "septic-tank-pumping-cost-central-valley",
  "septic-system-maintenance-guide",
];

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const area = getServiceArea(city);
  if (!area) notFound();

  // Check for a city-specific local guide (e.g. "septic-service-modesto-ca")
  const localGuide = getPostBySlug(`septic-service-${area.slug}-ca`);
  const cityPostSlugs = localGuide
    ? [localGuide.slug, ...CITY_PAGE_POST_SLUGS.slice(0, 3)]
    : CITY_PAGE_POST_SLUGS;
  const cityPosts = getPostsBySlugs(cityPostSlugs);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Plumber"],
    name: "Eagle Septic Pumping",
    description: `Licensed septic tank pumping and service in ${area.city}, ${area.county} County, ${area.state}.`,
    telephone: PHONE,
    url: `https://eaglesepticpumping.com/service-areas/${area.slug}`,
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: area.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${area.county} County, ${area.state}`,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "200",
      bestRating: "5",
      worstRating: "1",
    },
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
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://eaglesepticpumping.com/service-areas" },
      { "@type": "ListItem", position: 3, name: `${area.city}, ${area.stateAbbr}`, item: `https://eaglesepticpumping.com/service-areas/${area.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
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
        <section className="bg-brand-900 py-16 sm:py-20">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-sm text-brand-300">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/service-areas" className="hover:text-white">Service Areas</Link>
              <span>/</span>
              <span className="text-brand-100">{area.city}</span>
            </nav>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-400">
                  {area.county} County · {area.state}
                </p>
                <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
                  Septic Service in {area.city}, {area.stateAbbr}
                </h1>
                <p className="mb-8 text-lg text-brand-100">
                  Eagle Septic Pumping provides licensed septic pumping, cleaning,
                  inspection, and emergency service throughout {area.city} and{" "}
                  {area.county} County. Upfront pricing. Same-day availability.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-base font-bold text-white shadow hover:bg-accent-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                    Call {PHONE}
                  </a>
                  <a
                    href="/estimate"
                    className="inline-flex items-center rounded-lg border border-accent-400 px-6 py-3 text-base font-semibold text-accent-300 hover:bg-accent-500 hover:text-white hover:border-accent-500"
                  >
                    Free Estimate
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "18+", label: "Years in the Central Valley" },
                  { value: "4,200+", label: "Tanks Pumped" },
                  { value: "24/7", label: "Emergency Response" },
                  { value: "Licensed", label: "& Fully Insured" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-brand-800/60 p-5 text-center"
                  >
                    <p className="text-3xl font-bold text-accent-400">{stat.value}</p>
                    <p className="mt-1 text-sm text-brand-200">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About This City */}
        <section className="bg-white py-14 sm:py-16">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                Septic Service in {area.city}, {area.county} County
              </h2>
              <p className="mb-4 text-gray-600 leading-relaxed">{area.description}</p>
              <div className="rounded-xl border border-brand-100 bg-brand-50 p-5">
                <p className="text-sm font-semibold text-brand-800 mb-1">Local Note</p>
                <p className="text-sm text-brand-700">{area.localNote}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="bg-gray-50 py-14 sm:py-16">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Common Septic Issues in {area.city}
              </h2>
              <ul className="space-y-3">
                {area.commonIssues.map((issue) => (
                  <li key={issue} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500">
                      <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 1.999-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{issue}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-gray-500">
                Eagle Septic&apos;s technicians are familiar with {area.city}&apos;s soil conditions,
                drainage patterns, and local regulatory requirements. We bring the right
                equipment and knowledge to every job.
              </p>
            </div>
          </div>
        </section>

        {/* Services Available */}
        <section className="bg-white py-14 sm:py-16">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl text-center">
              Services Available in {area.city}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES_SUMMARY.map((svc) => (
                <a
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="group flex items-start gap-4 rounded-xl border border-gray-200 p-5 transition hover:border-brand-400 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-700 group-hover:bg-brand-600 group-hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={svc.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-brand-700">
                      {svc.name}
                    </p>
                    <p className="mt-0.5 text-sm text-brand-600 group-hover:text-brand-700">
                      Learn more →
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Cities */}
        <section className="bg-gray-50 py-12">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-xl font-bold text-gray-900 text-center">
              Also Serving Nearby Communities
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {area.nearbyCities.map((nearCity) => {
                const nearby = serviceAreas.find(
                  (a) => a.city === nearCity
                );
                if (nearby) {
                  return (
                    <a
                      key={nearCity}
                      href={`/service-areas/${nearby.slug}`}
                      className="rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 hover:border-brand-400 hover:text-brand-700"
                    >
                      {nearCity}
                    </a>
                  );
                }
                return (
                  <span
                    key={nearCity}
                    className="rounded-full border border-gray-200 bg-gray-100 px-4 py-1.5 text-sm text-gray-600"
                  >
                    {nearCity}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-14 sm:py-16">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl">
                Frequently Asked Questions — {area.city}
              </h2>
              <div className="space-y-6">
                {area.faq.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-xl border border-gray-200 p-6"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {cityPosts.length > 0 && (
          <section className="bg-gray-50 py-14 sm:py-16">
            <div className="container-max px-4 sm:px-6 lg:px-8">
              <h2 className="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl">
                Helpful Septic Resources
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {cityPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:border-brand-300 hover:shadow-md"
                  >
                    <div className="relative h-36 w-full flex-shrink-0 overflow-hidden">
                      <Image
                        src={post.coverImage.src}
                        alt={post.coverImage.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="mb-2 inline-block rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-brand-700">
                        {post.category}
                      </span>
                      <h3 className="mb-2 flex-1 text-sm font-semibold text-gray-900 group-hover:text-brand-700 leading-snug">
                        {post.title}
                      </h3>
                      <span className="mt-auto text-xs font-medium text-brand-700 group-hover:underline">
                        Read article →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-brand-900 py-14 sm:py-16">
          <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-3 text-3xl font-bold text-white">
              Ready to Schedule in {area.city}?
            </h2>
            <p className="mb-8 text-brand-100 max-w-xl mx-auto">
              Call now for upfront pricing and same-day availability. Eagle Septic
              Pumping — licensed, insured, and locally trusted in {area.county} County.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-7 py-3.5 text-base font-bold text-white shadow hover:bg-accent-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                Call {PHONE}
              </a>
              <a
                href="/estimate"
                className="inline-flex items-center rounded-lg border border-accent-400 px-7 py-3.5 text-base font-semibold text-accent-300 hover:bg-accent-500 hover:text-white hover:border-accent-500"
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
