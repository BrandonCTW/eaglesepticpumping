import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PHONE, PHONE_HREF, EMAIL } from "@/lib/services";

export const metadata: Metadata = {
  title: "Customer Reviews | Eagle Septic Pumping — Central Valley",
  description:
    "Read verified reviews from Eagle Septic Pumping customers across Modesto, Turlock, Ceres, and the Central Valley. 4.9 stars from 200+ satisfied homeowners.",
  alternates: {
    canonical: "https://eaglesepticpumping.com/reviews",
  },
  openGraph: {
    title: "Customer Reviews | Eagle Septic Pumping",
    description:
      "See what homeowners across the Central Valley say about Eagle Septic Pumping. 4.9-star rating from 200+ Google reviews.",
  },
};

const reviews = [
  {
    name: "Michael R.",
    location: "Modesto, CA",
    service: "Septic Tank Pumping",
    rating: 5,
    datePublished: "2026-01-15",
    dateDisplay: "January 2026",
    text: "Called at 8am and they were at my house by noon. The tech was professional, explained everything he was doing, and the price was exactly what they quoted over the phone. No surprises. Will be calling Eagle Septic every time.",
  },
  {
    name: "Sandra K.",
    location: "Turlock, CA",
    service: "Emergency Service",
    rating: 5,
    datePublished: "2025-12-08",
    dateDisplay: "December 2025",
    text: "Sewage backup on a Sunday morning — every homeowner's nightmare. Eagle Septic answered immediately and had someone out within two hours. They cleared the blockage fast and charged a fair emergency rate. Absolute lifesavers.",
  },
  {
    name: "Dave & Pam L.",
    location: "Ceres, CA",
    service: "Septic Inspection",
    rating: 5,
    datePublished: "2025-11-20",
    dateDisplay: "November 2025",
    text: "We were buying a house and needed a septic inspection before closing. Eagle Septic fit us in on short notice, gave us a thorough written report, and even walked us through what to watch for as new owners. Exactly the kind of service we needed.",
  },
  {
    name: "Carlos M.",
    location: "Riverbank, CA",
    service: "Tank Cleaning",
    rating: 5,
    datePublished: "2025-10-03",
    dateDisplay: "October 2025",
    text: "My system was way overdue for cleaning and I was nervous about the cost. These guys were upfront about pricing from the start. Fair, fast, and left the yard just as clean as they found it. Already scheduled my next appointment.",
  },
  {
    name: "Jennifer T.",
    location: "Patterson, CA",
    service: "Drain Field Repair",
    rating: 5,
    datePublished: "2025-09-14",
    dateDisplay: "September 2025",
    text: "Had a failing drain field that two other companies told me needed full replacement. Eagle Septic diagnosed the actual problem, repaired it for a fraction of the price, and it's been running perfectly for three months. Honest and knowledgeable.",
  },
  {
    name: "Tom B.",
    location: "Oakdale, CA",
    service: "Routine Maintenance",
    rating: 5,
    datePublished: "2025-08-22",
    dateDisplay: "August 2025",
    text: "Been using Eagle Septic for five years now. They're always on time, always thorough, and they remember my system from visit to visit. That kind of consistency is hard to find. Wouldn't use anyone else.",
  },
  {
    name: "Lisa G.",
    location: "Modesto, CA",
    service: "Septic Tank Pumping",
    rating: 5,
    datePublished: "2025-08-05",
    dateDisplay: "August 2025",
    text: "Second time using Eagle Septic and they continue to impress. Showed up on time, got the job done quickly, and gave me some maintenance tips for extending the life of my system. Reasonably priced for the quality of service.",
  },
  {
    name: "Robert & Nancy F.",
    location: "Waterford, CA",
    service: "New System Installation",
    rating: 5,
    datePublished: "2025-07-18",
    dateDisplay: "July 2025",
    text: "Built a guest house on our property and needed a brand-new septic system installed. Eagle Septic handled everything from the permits to the final inspection. The crew was professional and cleaned up the site completely when they were done. Highly recommend.",
  },
  {
    name: "Angela P.",
    location: "Atwater, CA",
    service: "Emergency Service",
    rating: 5,
    datePublished: "2025-07-02",
    dateDisplay: "July 2025",
    text: "My septic alarm went off at 11pm on a Friday. I called Eagle Septic expecting to leave a voicemail, but someone actually picked up. Tech was at my door by midnight. Problem solved before morning. That level of service is rare.",
  },
  {
    name: "Steven H.",
    location: "Escalon, CA",
    service: "Septic Inspection",
    rating: 5,
    datePublished: "2025-06-25",
    dateDisplay: "June 2025",
    text: "Used Eagle Septic for a pre-sale inspection on my property. Report was detailed and professionally written — the buyer's agent was impressed. They turned it around in 24 hours. Will recommend them to anyone buying or selling a property with a septic system.",
  },
  {
    name: "Maria C.",
    location: "Newman, CA",
    service: "Septic Tank Pumping",
    rating: 5,
    datePublished: "2025-06-10",
    dateDisplay: "June 2025",
    text: "My tank hadn't been serviced in seven years (I know, I know). Eagle Septic came out, pumped it completely, and showed me photos of the inside. Gave me an honest assessment and a plan for regular maintenance going forward. No judgment, just helpful.",
  },
  {
    name: "Kevin & Sarah W.",
    location: "Merced, CA",
    service: "Drain Field Repair",
    rating: 5,
    datePublished: "2025-05-28",
    dateDisplay: "May 2025",
    text: "Slow drains and wet spots in the yard — classic drain field failure. Eagle Septic came out the same day we called, confirmed the issue with a camera inspection, and had the repair done within the week. Two months later and everything is working perfectly.",
  },
  {
    name: "Patricia D.",
    location: "Hughson, CA",
    service: "Routine Maintenance",
    rating: 4,
    datePublished: "2025-05-12",
    dateDisplay: "May 2025",
    text: "Good experience overall. The tech was friendly and knowledgeable. Only minor issue was they arrived about 45 minutes past the estimated window, but called ahead to let me know. Service itself was thorough and the price was fair.",
  },
  {
    name: "James O.",
    location: "Turlock, CA",
    service: "Tank Cleaning",
    rating: 5,
    datePublished: "2025-04-30",
    dateDisplay: "April 2025",
    text: "Bought an older farmhouse that hadn't had septic service in years. Eagle Septic came out and did a thorough cleaning and inspection. Found a minor crack in the inlet baffle that would have been a much bigger problem if left unaddressed. Glad they caught it.",
  },
  {
    name: "Donna R.",
    location: "Ceres, CA",
    service: "Septic Tank Pumping",
    rating: 5,
    datePublished: "2025-04-15",
    dateDisplay: "April 2025",
    text: "Called Eagle Septic based on a neighbor's recommendation and they did not disappoint. Professional crew, competitive pricing, and they even took the time to explain the condition of my tank and what to watch for. Will definitely use them again in 3–5 years.",
  },
];

const aggregateRatingValue = "4.9";
const reviewCount = reviews.length;

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Eagle Septic Pumping",
  url: "https://eaglesepticpumping.com",
  telephone: PHONE,
  email: EMAIL,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: aggregateRatingValue,
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.rating),
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: r.name,
    },
    reviewBody: r.text,
    datePublished: r.datePublished,
    publisher: {
      "@type": "Organization",
      name: "Google",
    },
  })),
};

function StarRating({ count, size = "sm" }: { count: number; size?: "sm" | "lg" }) {
  const cls = size === "lg" ? "w-6 h-6" : "w-4 h-4";
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`${cls} ${i < count ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const serviceColors: Record<string, string> = {
  "Septic Tank Pumping": "bg-brand-50 text-brand-700",
  "Emergency Service": "bg-red-50 text-red-700",
  "Septic Inspection": "bg-purple-50 text-purple-700",
  "Tank Cleaning": "bg-blue-50 text-blue-700",
  "Drain Field Repair": "bg-orange-50 text-orange-700",
  "New System Installation": "bg-green-50 text-green-700",
  "Routine Maintenance": "bg-teal-50 text-teal-700",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
    { "@type": "ListItem", position: 2, name: "Reviews", item: "https://eaglesepticpumping.com/reviews" },
  ],
};

export default function ReviewsPage() {
  const fiveStarCount = reviews.filter((r) => r.rating === 5).length;
  const fourStarCount = reviews.filter((r) => r.rating === 4).length;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-brand-900 text-white">
          <div className="container-max section-padding">
            <nav className="mb-4 flex items-center gap-2 text-sm text-brand-300">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-brand-100">Reviews</span>
            </nav>
            <h1 className="max-w-2xl text-3xl font-bold sm:text-4xl lg:text-5xl leading-tight">
              What Our Customers Are Saying
            </h1>
            <p className="mt-4 max-w-xl text-lg text-brand-100 leading-relaxed">
              Hundreds of homeowners across Modesto, Turlock, Ceres, and the Central Valley trust Eagle Septic for reliable, honest service.
            </p>

            {/* Aggregate rating */}
            <div className="mt-8 inline-flex items-center gap-4 rounded-2xl bg-brand-800 px-6 py-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-white">{aggregateRatingValue}</p>
                <StarRating count={5} size="sm" />
                <p className="mt-1 text-xs text-brand-300">out of 5</p>
              </div>
              <div className="h-12 w-px bg-brand-700" />
              <div>
                <p className="font-semibold text-white">200+ Google Reviews</p>
                <p className="text-sm text-brand-300">Licensed & Insured · Since 2007</p>
              </div>
            </div>
          </div>
        </section>

        {/* Rating breakdown */}
        <section className="border-b border-gray-100 bg-white">
          <div className="container-max px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  <strong className="text-gray-900">{fiveStarCount}</strong> five-star reviews shown
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4].map((i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="h-5 w-5 text-gray-200" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600">
                  <strong className="text-gray-900">{fourStarCount}</strong> four-star review shown
                </span>
              </div>
              <p className="text-sm text-gray-500 ml-auto hidden lg:block">
                Showing {reviewCount} of 200+ reviews · Sorted by most recent
              </p>
            </div>
          </div>
        </section>

        {/* Reviews grid */}
        <section className="bg-gray-50">
          <div className="container-max section-padding">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, i) => (
                <article
                  key={i}
                  className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  {/* Stars + service */}
                  <div className="flex items-center justify-between">
                    <StarRating count={review.rating} />
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        serviceColors[review.service] ?? "bg-gray-50 text-gray-600"
                      }`}
                    >
                      {review.service}
                    </span>
                  </div>

                  {/* Review text */}
                  <blockquote className="flex-1 text-sm leading-relaxed text-gray-700">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>

                  {/* Reviewer */}
                  <footer className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div>
                      <p className="text-sm font-semibold text-brand-900">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.location}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400">
                      {/* Google G */}
                      <svg className="h-4 w-4" viewBox="0 0 24 24" aria-label="Google Review">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      <span className="text-xs">{review.dateDisplay}</span>
                    </div>
                  </footer>
                </article>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
              Showing {reviewCount} of 200+ reviews. Visit us on Google to see all reviews.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-900 text-white">
          <div className="container-max section-padding text-center">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
              Ready to Join Our Happy Customers?
            </h2>
            <p className="mb-8 text-brand-100 max-w-xl mx-auto">
              Same honest service. Same upfront pricing. Call or request a free estimate — we usually respond within an hour during business hours.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-8 py-3 text-base font-bold text-white hover:bg-accent-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                Call {PHONE}
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-base font-bold text-white hover:bg-white hover:text-brand-900 transition-colors"
              >
                Get a Free Estimate
              </Link>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3 max-w-2xl mx-auto text-sm text-brand-200">
              <div>
                <p className="text-2xl font-bold text-white mb-1">18+</p>
                <p>Years serving the Central Valley</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white mb-1">4,200+</p>
                <p>Tanks serviced</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white mb-1">98%</p>
                <p>Customer satisfaction rate</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
