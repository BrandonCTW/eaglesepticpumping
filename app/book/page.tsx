import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { PHONE, PHONE_HREF, EMAIL } from "@/lib/services";

export const metadata: Metadata = {
  title: "Book Service | Eagle Septic Pumping",
  description:
    "Schedule septic tank pumping, cleaning, inspection, or emergency service online. Eagle Septic Pumping serves Modesto, Turlock, Ceres, and all of California's Central Valley.",
  openGraph: {
    title: "Book Septic Service | Eagle Septic Pumping",
    description:
      "Schedule your septic service online in minutes. Same-day emergency response available.",
    url: "https://eaglesepticpumping.com/book",
  },
  alternates: { canonical: "https://eaglesepticpumping.com/book" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
    { "@type": "ListItem", position: 2, name: "Book Service", item: "https://eaglesepticpumping.com/book" },
  ],
};

export default function BookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-brand-900 py-14 text-white">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="mb-3 inline-block rounded-full bg-accent-500 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                Online Booking
              </span>
              <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
                Schedule Your Septic Service
              </h1>
              <p className="text-brand-200">
                Fill out the form below and we'll confirm your appointment within 2 business hours.
                For same-day or emergency service, call us directly.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Emergency: Call {PHONE}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 rounded-lg border border-brand-600 px-5 py-2.5 text-sm font-semibold text-brand-200 transition-colors hover:border-white hover:text-white"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <div className="border-b border-gray-100 bg-white py-4">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-6 text-center text-sm text-gray-600 sm:gap-10">
              {[
                { icon: "🛡️", text: "Licensed & Insured" },
                { icon: "⚡", text: "Same-Day Emergency" },
                { icon: "💰", text: "Upfront Pricing" },
                { icon: "⭐", text: "4.9★ Rating (127 Reviews)" },
                { icon: "📅", text: "Confirmation in 2 Hours" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 font-medium">
                  <span>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking form */}
        <section className="bg-gray-50 py-16">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <BookingForm />
          </div>
        </section>

        {/* FAQ below form */}
        <section className="bg-white py-16">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-2xl font-bold text-brand-900">
                Booking FAQs
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "How quickly can you get out to my property?",
                    a: "For standard services, we typically schedule within 1–3 business days. Emergency service is available 24/7 — call us directly for same-day response.",
                  },
                  {
                    q: "What should I do to prepare?",
                    a: "Know the approximate location of your septic tank lid if possible. Make sure the area is accessible (no vehicles parked over the tank). Our tech will handle the rest.",
                  },
                  {
                    q: "How will I know my appointment is confirmed?",
                    a: "We'll reach out by phone or email within 2 business hours to confirm your appointment date, time window, and upfront pricing.",
                  },
                  {
                    q: "Do you require a deposit to book?",
                    a: "No deposit required. Payment is collected after service is completed. We accept cash, check, and major credit cards.",
                  },
                  {
                    q: "What if I'm not sure what service I need?",
                    a: "That's completely fine — select 'Not Sure / Need Inspection' and briefly describe what's happening. We'll diagnose the issue and recommend the right service.",
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                    <h3 className="mb-2 font-semibold text-brand-900">{q}</h3>
                    <p className="text-sm text-gray-600">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
