const testimonials = [
  {
    name: "Michael R.",
    location: "Modesto, CA",
    service: "Septic Pumping",
    rating: 5,
    date: "January 2026",
    text: "Called at 8am and they were at my house by noon. The tech was professional, explained everything he was doing, and the price was exactly what they quoted over the phone. No surprises. Will be calling Eagle Septic every time.",
  },
  {
    name: "Sandra K.",
    location: "Turlock, CA",
    service: "Emergency Service",
    rating: 5,
    date: "December 2025",
    text: "Sewage backup on a Sunday morning — every homeowner's nightmare. Eagle Septic answered immediately and had someone out within two hours. They cleared the blockage fast and charged a fair emergency rate. Absolute lifesavers.",
  },
  {
    name: "Dave & Pam L.",
    location: "Ceres, CA",
    service: "Full Inspection",
    rating: 5,
    date: "November 2025",
    text: "We were buying a house and needed a septic inspection before closing. Eagle Septic fit us in on short notice, gave us a thorough written report, and even walked us through what to watch for as new owners. Exactly the kind of service we needed.",
  },
  {
    name: "Carlos M.",
    location: "Riverbank, CA",
    service: "Tank Cleaning",
    rating: 5,
    date: "October 2025",
    text: "My system was way overdue for cleaning and I was nervous about the cost. These guys were upfront about pricing from the start. Fair, fast, and left the yard just as clean as they found it. Already scheduled my next appointment.",
  },
  {
    name: "Jennifer T.",
    location: "Patterson, CA",
    service: "Drain Field Repair",
    rating: 5,
    date: "September 2025",
    text: "Had a failing drain field that two other companies told me needed full replacement. Eagle Septic diagnosed the actual problem, repaired it for a fraction of the price, and it's been running perfectly for three months. Honest and knowledgeable.",
  },
  {
    name: "Tom B.",
    location: "Oakdale, CA",
    service: "Routine Maintenance",
    rating: 5,
    date: "August 2025",
    text: "Been using Eagle Septic for five years now. They're always on time, always thorough, and they remember my system from visit to visit. That kind of consistency is hard to find. Wouldn't use anyone else.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Customer Reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hundreds of homeowners across the Central Valley trust Eagle Septic for reliable, honest service.
          </p>

          {/* Aggregate rating badge */}
          <div className="inline-flex items-center gap-3 mt-6 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-bold text-brand-900 text-lg">4.9</span>
            <span className="text-gray-500 text-sm">· 200+ Google Reviews</span>
          </div>
        </div>

        {/* Review grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200"
            >
              {/* Stars + service badge */}
              <div className="flex items-center justify-between">
                <StarRating count={t.rating} />
                <span className="text-xs font-medium text-accent-600 bg-accent-50 px-2.5 py-1 rounded-full">
                  {t.service}
                </span>
              </div>

              {/* Review text */}
              <blockquote className="text-gray-700 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Reviewer info */}
              <footer className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="font-semibold text-brand-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.location}</p>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400">
                  {/* Google G icon */}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" aria-label="Google Review">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-xs text-gray-400">{t.date}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 flex flex-col items-center gap-4">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Get Your Free Estimate
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="/reviews"
            className="text-sm text-gray-500 hover:text-brand-700 underline underline-offset-2"
          >
            Read all 200+ customer reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
