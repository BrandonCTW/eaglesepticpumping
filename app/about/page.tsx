import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Eagle Septic Pumping",
  description:
    "Eagle Septic Pumping is a family-owned septic service company serving California's Central Valley. Learn about our team, our story, and our commitment to honest, reliable service.",
  alternates: {
    canonical: "https://eaglesepticpumping.com/about",
  },
  openGraph: {
    title: "About Eagle Septic Pumping | Family-Owned & Local",
    description:
      "Meet the team behind Eagle Septic Pumping — licensed, experienced, and committed to the Central Valley community since day one.",
  },
};

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
      </svg>
    ),
    title: "Honesty First",
    description:
      "We give you straight answers and fair pricing — no upsells, no surprises. You'll always know exactly what the job requires and what it costs before we start.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
        <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
        <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
      </svg>
    ),
    title: "Certified Expertise",
    description:
      "Our technicians are fully licensed and stay current on California's evolving septic regulations. We bring real expertise to every job — from routine pumping to complex repairs.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
      </svg>
    ),
    title: "On-Time, Every Time",
    description:
      "We respect your schedule. Our team arrives in the promised window and completes work efficiently — because we know your time matters as much as your septic system.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    ),
    title: "Community Roots",
    description:
      "We live and work in the Central Valley. Every job we do is for a neighbor, and we treat every property with the care we'd want shown to our own home.",
  },
];

const team = [
  {
    name: "Mike Ramirez",
    role: "Owner & Lead Technician",
    bio: "With over 18 years in the septic industry, Mike founded Eagle Septic Pumping to bring honest, expert service to the Central Valley. He holds a California State Contractor's License and personally oversees every major job.",
    initials: "MR",
  },
  {
    name: "Carlos Vega",
    role: "Senior Technician",
    bio: "Carlos brings 12 years of field experience and specializes in drain field diagnostics and repair. Customers consistently praise his thorough explanations and attention to detail.",
    initials: "CV",
  },
  {
    name: "Sarah Thompson",
    role: "Office Manager",
    bio: "Sarah keeps everything running smoothly — from scheduling and estimates to follow-up calls. She's the friendly voice you'll hear when you call us and the reason jobs never fall through the cracks.",
    initials: "ST",
  },
];

const certifications = [
  "California Contractor's License (C-42 Sanitation Systems)",
  "Fully Insured — General Liability & Workers' Compensation",
  "OSHA-Certified Confined Space Entry",
  "California State Water Board Compliance Training",
  "Environmental Waste Disposal Certified",
];

const stats = [
  { value: "18+", label: "Years Serving Central Valley" },
  { value: "4,200+", label: "Tanks Pumped & Serviced" },
  { value: "98%", label: "Customer Satisfaction Rate" },
  { value: "24/7", label: "Emergency Response" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://eaglesepticpumping.com/about" },
  ],
};

export default function AboutPage() {
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
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <nav className="mb-6 text-sm text-brand-300">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">About Us</span>
            </nav>
            <div className="max-w-3xl">
              <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
                Family-Owned. Local. Trusted.
              </h1>
              <p className="text-xl leading-relaxed text-brand-200">
                Eagle Septic Pumping has been serving homeowners and businesses
                across California&apos;s Central Valley for nearly two decades.
                We&apos;re not a franchise — we&apos;re your neighbors.
              </p>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-accent-600">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-px bg-accent-700 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-accent-600 px-6 py-8 text-center text-white">
                  <p className="text-3xl font-extrabold sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium text-accent-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-white">
          <div className="container-max section-padding px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                  Our Story
                </h2>
                <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                  <p>
                    Eagle Septic Pumping was founded with a simple belief: septic
                    service should be straightforward, affordable, and done right
                    the first time. Too many homeowners had been overcharged by
                    companies that treated them as a number — we set out to change
                    that.
                  </p>
                  <p>
                    We started small — one truck, one crew, and a commitment to
                    doing honest work for our community. Word spread quickly. Over
                    the years, we&apos;ve grown into a full-service operation, but
                    our values haven&apos;t changed: treat every customer like
                    family, explain everything clearly, and never cut corners.
                  </p>
                  <p>
                    Today, Eagle Septic serves Stanislaus County, Merced County,
                    and the surrounding Central Valley region. Whether you need
                    routine pumping, an emergency call at 2am, or a full system
                    inspection before buying a home — we&apos;re the team locals
                    trust.
                  </p>
                </div>
              </div>

              {/* Visual callout card */}
              <div className="rounded-2xl bg-brand-50 p-8 lg:p-10">
                <blockquote className="mb-6 border-l-4 border-accent-500 pl-6">
                  <p className="text-xl font-medium italic text-gray-700">
                    &ldquo;A septic problem never happens at a convenient time. We
                    built this company to be there when it matters most — with a
                    fair price and a team you can trust in your yard.&rdquo;
                  </p>
                  <footer className="mt-4 text-sm font-semibold text-gray-500">
                    — Mike Ramirez, Founder &amp; Owner
                  </footer>
                </blockquote>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                    <p className="text-2xl font-bold text-brand-700">A+</p>
                    <p className="text-xs text-gray-500 mt-1">BBB Rating</p>
                  </div>
                  <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                    <p className="text-2xl font-bold text-brand-700">5★</p>
                    <p className="text-xs text-gray-500 mt-1">Google Reviews</p>
                  </div>
                  <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                    <p className="text-2xl font-bold text-brand-700">Local</p>
                    <p className="text-xs text-gray-500 mt-1">Family-Owned</p>
                  </div>
                  <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                    <p className="text-2xl font-bold text-brand-700">CA</p>
                    <p className="text-xs text-gray-500 mt-1">Licensed &amp; Insured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-gray-50">
          <div className="container-max section-padding px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                What We Stand For
              </h2>
              <p className="text-lg text-gray-600">
                These aren&apos;t just words on a wall — they&apos;re the
                standards we hold ourselves to on every single job.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    {v.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-white">
          <div className="container-max section-padding px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Meet the Team
              </h2>
              <p className="text-lg text-gray-600">
                When you hire Eagle Septic, you&apos;re hiring people who take
                pride in their craft and your property.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center rounded-2xl bg-gray-50 p-8 text-center"
                >
                  {/* Avatar placeholder */}
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-brand-700 text-2xl font-bold text-white">
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="mb-4 text-sm font-medium text-accent-600">{member.role}</p>
                  <p className="text-sm leading-relaxed text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-brand-900">
          <div className="container-max section-padding px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                  Licensed, Certified &amp; Insured
                </h2>
                <p className="mb-8 text-lg text-brand-200">
                  We hold every credential required by the State of California —
                  not because we have to, but because you deserve a company that
                  takes its responsibilities seriously.
                </p>
                <ul className="space-y-3">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-brand-100">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-brand-800 p-8 lg:p-10">
                <h3 className="mb-4 text-xl font-bold text-white">
                  Why It Matters to You
                </h3>
                <div className="space-y-4 text-brand-200">
                  <p>
                    An unlicensed septic contractor can void your homeowner&apos;s
                    insurance and leave you liable for county code violations.
                    Always verify credentials before letting anyone work on your
                    system.
                  </p>
                  <p>
                    Our license number is available on request, and we&apos;re happy
                    to provide proof of insurance before we arrive. We operate
                    fully above-board — always.
                  </p>
                </div>
                <a
                  href="/#contact"
                  className="mt-6 inline-block rounded-lg bg-accent-500 px-6 py-3 text-sm font-bold text-white hover:bg-accent-600"
                >
                  Request Proof of Insurance
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50">
          <div className="container-max section-padding px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-100 sm:p-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Ready to Work With a Team You Can Trust?
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Call us for a free estimate or fill out our contact form — we
                typically respond within the hour during business hours.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="tel:+15558675309"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-accent-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  (555) 867-5309
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-brand-800"
                >
                  Get a Free Estimate
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Schema.org: Organization + team members */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Eagle Septic Pumping",
            description:
              "Family-owned septic pumping and service company serving California's Central Valley. Licensed, insured, and available 24/7.",
            url: "https://eaglesepticpumping.com",
            telephone: "+15558675309",
            foundingDate: "2006",
            founders: [
              {
                "@type": "Person",
                name: "Mike Ramirez",
                jobTitle: "Owner & Lead Technician",
              },
            ],
            employee: team.map((m) => ({
              "@type": "Person",
              name: m.name,
              jobTitle: m.role,
            })),
            areaServed: {
              "@type": "State",
              name: "California Central Valley",
            },
            hasCredential: [
              "California Contractor's License C-42",
              "General Liability Insurance",
              "Workers' Compensation Insurance",
            ],
          }),
        }}
      />

      <Footer />
    </>
  );
}
