import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { serviceAreas } from "@/lib/serviceAreas";

export const metadata: Metadata = {
  title: { absolute: "Septic Service Areas | Eagle Septic Pumping — Central Valley, CA" },
  description:
    "Eagle Septic Pumping serves Modesto, Turlock, Stockton, Tracy, Manteca, Merced, and 14 more cities across Stanislaus, San Joaquin, and Merced counties. Licensed, insured, same-day service available.",
  alternates: { canonical: "https://eaglesepticpumping.com/service-areas" },
};

const PHONE = "(555) 867-5309";
const PHONE_HREF = "tel:+15558675309";

const countyGroups = [
  {
    county: "Stanislaus County",
    cities: ["modesto", "turlock", "ceres", "riverbank", "oakdale", "patterson", "waterford", "hughson", "newman", "denair"],
  },
  {
    county: "San Joaquin County",
    cities: ["stockton", "tracy", "manteca", "ripon", "escalon"],
  },
  {
    county: "Merced County",
    cities: ["atwater", "merced", "los-banos", "livingston", "gustine"],
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
    { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://eaglesepticpumping.com/service-areas" },
  ],
};

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-brand-900 py-16 sm:py-20">
          <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-400">
              Where We Work
            </p>
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              Septic Service Throughout the Central Valley
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-brand-100">
              Eagle Septic Pumping serves homeowners and businesses across Stanislaus,
              San Joaquin, and Merced counties — from Stockton and Tracy in the north
              to Los Banos and Gustine in the west. Licensed, insured, and locally based.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
                Get a Free Estimate
              </a>
            </div>
          </div>
        </section>

        {/* City Grid by County */}
        <section className="bg-white py-16 sm:py-20">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
              All Service Locations
            </h2>
            <div className="space-y-12">
              {countyGroups.map((group) => {
                const areas = serviceAreas.filter((a) => group.cities.includes(a.slug));
                return (
                  <div key={group.county}>
                    <h3 className="mb-6 text-xl font-semibold text-brand-800 border-b border-gray-200 pb-2">
                      {group.county}
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {areas.map((area, i) => {
                        const smRemainder = areas.length % 2;
                        const lgRemainder = areas.length % 3;
                        const isLast = i === areas.length - 1;
                        const smCenter = smRemainder === 1 && isLast ? "sm:col-start-2" : "";
                        const lgCenter = lgRemainder === 1 && isLast ? "lg:col-start-2" : "";
                        return (
                        <a
                          key={area.slug}
                          href={`/service-areas/${area.slug}`}
                          className={`group flex flex-col rounded-xl border border-gray-200 bg-gray-50 p-5 transition hover:border-brand-400 hover:bg-brand-50 hover:shadow-md${smCenter ? ` ${smCenter}` : ""}${lgCenter ? ` ${lgCenter}` : ""}`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 group-hover:bg-brand-600 group-hover:text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.43-4.577 3.43-7.328a6.75 6.75 0 00-13.5 0c0 2.75 1.485 5.25 3.43 7.328a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.079.694zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 group-hover:text-brand-700">
                                {area.city}, {area.stateAbbr}
                              </p>
                              <p className="mt-0.5 text-sm text-gray-500">Pop. {area.population}</p>
                            </div>
                          </div>
                          <p className="mt-3 text-sm text-gray-600 line-clamp-2">{area.description.split(".")[0]}.</p>
                          <span className="mt-3 text-sm font-semibold text-brand-600 group-hover:text-brand-700">
                            View service details →
                          </span>
                        </a>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Don't see your city */}
        <section className="bg-gray-50 py-12">
          <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Don&apos;t See Your City?
            </h2>
            <p className="mb-6 text-gray-600 max-w-xl mx-auto">
              We often travel beyond our standard coverage area for new customers.
              Give us a call — we&apos;ll tell you right away if we can reach you.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-6 py-3 text-base font-bold text-white hover:bg-brand-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              Call {PHONE}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
