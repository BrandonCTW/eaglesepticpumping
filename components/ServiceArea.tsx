import ZipCodeChecker from "@/components/ZipCodeChecker";

const areas = [
  { city: "Modesto", slug: "modesto" },
  { city: "Turlock", slug: "turlock" },
  { city: "Ceres", slug: "ceres" },
  { city: "Riverbank", slug: "riverbank" },
  { city: "Oakdale", slug: "oakdale" },
  { city: "Patterson", slug: "patterson" },
  { city: "Waterford", slug: "waterford" },
  { city: "Hughson", slug: "hughson" },
  { city: "Escalon", slug: "escalon" },
  { city: "Newman", slug: "newman" },
  { city: "Atwater", slug: "atwater" },
  { city: "Merced", slug: "merced" },
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-gray-50">
      <div className="container-max section-padding">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Service Area
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              Eagle Septic Pumping proudly serves homeowners and businesses
              throughout California&apos;s Central Valley — Stanislaus, Merced,
              and surrounding counties. Not sure if we cover your area? Give us
              a call — we&apos;ll let you know right away.
            </p>
            <div className="mb-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {areas.map((area) => (
                <a
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-gray-700 shadow-sm transition hover:bg-brand-50 hover:text-brand-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 flex-shrink-0 text-brand-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.43-4.577 3.43-7.328a6.75 6.75 0 00-13.5 0c0 2.75 1.485 5.25 3.43 7.328a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.079.694zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {area.city}
                </a>
              ))}
            </div>
            <a
              href="/service-areas"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-800"
            >
              View all service locations →
            </a>
            <p className="mt-3 text-sm text-gray-500">
              Don&apos;t see your city? We often service nearby areas — call to
              confirm coverage.
            </p>
          </div>

          {/* Zip code service area checker */}
          <div className="relative overflow-hidden rounded-2xl bg-brand-100 shadow-lg">
            <ZipCodeChecker />
          </div>
        </div>
      </div>
    </section>
  );
}
