import Link from "next/link";

const columns = [
  {
    status: "All Clear",
    statusColor: "bg-accent-100 text-accent-800",
    borderColor: "border-accent-200",
    headerBg: "bg-accent-50",
    iconBg: "bg-accent-100",
    iconColor: "text-accent-700",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
      </svg>
    ),
    headline: "Your system looks healthy if…",
    signals: [
      "Tank was pumped within the last 3–5 years",
      "No sewage odors inside or around your property",
      "All drains flow at normal speed",
      "No wet spots or unusually lush grass over the drain field",
      "You know the location of your tank and access lids",
    ],
    cta: { text: "Maintain your healthy system", href: "/blog/how-often-pump-septic-tank" },
  },
  {
    status: "Schedule Service",
    statusColor: "bg-amber-100 text-amber-800",
    borderColor: "border-amber-200",
    headerBg: "bg-amber-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
      </svg>
    ),
    headline: "Time to schedule service if…",
    signals: [
      "It's been 3–5+ years since your last pump-out",
      "Drains seem slower than they used to be",
      "You occasionally notice a faint sewage smell outside",
      "Grass over the drain field is noticeably greener or faster-growing",
      "You're buying or selling a home with a septic system",
    ],
    cta: { text: "Understand warning signs", href: "/blog/warning-signs-septic-system-failing" },
  },
  {
    status: "Call Now",
    statusColor: "bg-red-100 text-red-800",
    borderColor: "border-red-200",
    headerBg: "bg-red-50",
    iconBg: "bg-red-100",
    iconColor: "text-red-700",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
        <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
      </svg>
    ),
    headline: "Get emergency help if…",
    signals: [
      "Sewage is backing up into sinks, tubs, or toilets",
      "Strong sewage smell inside your home",
      "Soggy or swampy ground near your septic tank or drain field",
      "Multiple drains are completely blocked at once",
      "Last pump-out was more than 7 years ago",
    ],
    cta: { text: "What to do in a septic emergency", href: "/blog/septic-emergency-what-to-do" },
  },
];

export default function SepticHealthCheck() {
  return (
    <section className="bg-gray-50 py-14 sm:py-20">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600">
            Homeowner Self-Assessment
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            How Healthy Is Your Septic System?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
            Match your situation to one of these three categories to know what action — if any — you
            should take next.
          </p>
        </div>

        {/* Three-column layout */}
        <div className="grid gap-6 md:grid-cols-3">
          {columns.map((col) => (
            <div
              key={col.status}
              className={`flex flex-col overflow-hidden rounded-2xl border ${col.borderColor} bg-white shadow-sm`}
            >
              {/* Column header */}
              <div className={`${col.headerBg} px-6 py-4`}>
                <div className="flex items-center gap-3">
                  <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${col.iconBg} ${col.iconColor}`}>
                    {col.icon}
                  </div>
                  <span className={`inline-block rounded-full px-3 py-1 text-sm font-bold ${col.statusColor}`}>
                    {col.status}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-800">{col.headline}</p>
              </div>

              {/* Signals list */}
              <ul className="flex flex-1 flex-col gap-3 px-6 py-5">
                {col.signals.map((signal) => (
                  <li key={signal} className="flex items-start gap-2.5 text-sm leading-snug text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.59L7.3 9.24a.75.75 0 00-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75z" clipRule="evenodd" />
                    </svg>
                    {signal}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="border-t border-gray-100 px-6 py-4">
                <Link
                  href={col.cta.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900 hover:underline"
                >
                  {col.cta.text}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Not sure which category you&apos;re in?{" "}
          <Link href="/resources" className="font-semibold text-brand-700 hover:underline">
            Browse our full homeowner resource center
          </Link>{" "}
          or{" "}
          <Link href="/faq" className="font-semibold text-brand-700 hover:underline">
            read our FAQ
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
