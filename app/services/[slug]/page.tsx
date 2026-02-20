import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  services,
  getServiceBySlug,
  getRelatedServices,
  PHONE,
  PHONE_HREF,
} from "@/lib/services";
import { serviceAreas } from "@/lib/serviceAreas";
import { getPostsBySlugs } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://eaglesepticpumping.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: "website",
    },
  };
}

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5 flex-shrink-0 text-accent-500"
  >
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
      clipRule="evenodd"
    />
  </svg>
);

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.relatedSlugs);
  const relatedPosts = getPostsBySlugs(service.relatedPostSlugs);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": ["LocalBusiness", "Plumber"],
      name: "Eagle Septic Pumping",
      telephone: PHONE,
      url: "https://eaglesepticpumping.com",
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "200",
        bestRating: "5",
        worstRating: "1",
      },
    },
    serviceType: service.title,
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${area.county} County, ${area.state}`,
      },
    })),
    url: `https://eaglesepticpumping.com/services/${service.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://eaglesepticpumping.com/services" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://eaglesepticpumping.com/services/${service.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200 px-4 py-3">
        <div className="container-max flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-brand-700">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-brand-700">
            Services
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{service.title}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-brand-900 text-white">
        <div className="container-max section-padding">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              {service.heroHeadline}
            </h1>
            <p className="mb-8 text-lg text-brand-100 leading-relaxed">
              {service.heroSubheadline}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-base font-bold text-white shadow-lg hover:bg-accent-600 transition-colors"
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
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-base font-bold text-white hover:bg-white hover:text-brand-900 transition-colors"
              >
                Get a Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + What's Included */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                About This Service
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.overview}
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6 lg:p-8">
              <h3 className="mb-5 text-xl font-bold text-gray-900">
                What&apos;s Included
              </h3>
              <ul className="space-y-3">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50">
        <div className="container-max section-padding">
          <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            How It Works
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step) => (
              <div key={step.step} className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-900 text-lg font-bold text-white">
                  {step.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            Signs You Need This Service
          </h2>
          <p className="mb-10 max-w-2xl text-gray-600 text-lg">
            Don&apos;t wait until a small issue becomes an emergency. Watch for these warning signs.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {service.warningSigns.map((sign) => (
              <div
                key={sign.title}
                className="rounded-xl border border-amber-200 bg-amber-50 p-5"
              >
                <h3 className="mb-2 font-semibold text-gray-900 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 flex-shrink-0 text-amber-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {sign.title}
                </h3>
                <p className="text-gray-600 text-sm">{sign.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50">
        <div className="container-max section-padding">
          <h2 className="mb-10 text-2xl font-bold text-gray-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl space-y-6">
            {service.faq.map((item) => (
              <div
                key={item.question}
                className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
              >
                <h3 className="mb-3 font-semibold text-gray-900 text-lg">
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="bg-white">
          <div className="container-max section-padding">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">
              Related Services
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group rounded-xl border border-gray-200 bg-gray-50 p-5 hover:border-brand-300 hover:bg-brand-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-brand-700">
                    {rel.shortTitle}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                    {rel.metaDescription}
                  </p>
                  <span className="mt-3 inline-block text-sm font-medium text-brand-700 group-hover:underline">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50">
          <div className="container-max section-padding">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">
              Helpful Reading
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-brand-300 hover:shadow-md"
                >
                  <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
                    {post.category}
                  </span>
                  <h3 className="mb-2 flex-1 text-base font-semibold text-gray-900 group-hover:text-brand-700 leading-snug">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-500 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="text-sm font-medium text-brand-700 group-hover:underline">
                    Read article →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="bg-brand-900 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            Ready to Schedule?
          </h2>
          <p className="mb-8 text-brand-100 text-lg max-w-xl mx-auto">
            Call for a free estimate or use our contact form. We respond within
            1 hour during business hours.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-8 py-3 text-base font-bold text-white hover:bg-accent-600 transition-colors"
            >
              Call {PHONE}
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-base font-bold text-white hover:bg-white hover:text-brand-900 transition-colors"
            >
              Contact Form
            </a>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
