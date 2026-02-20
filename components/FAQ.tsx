"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How often should I pump my septic tank?",
    answer:
      "Most residential septic tanks need pumping every 3–5 years, depending on household size and tank capacity. A family of four with a 1,000-gallon tank typically pumps every 3–4 years. We can assess your system and give you a specific recommendation during your service visit.",
  },
  {
    question: "What are the warning signs that my septic system needs service?",
    answer:
      "Watch for slow or gurgling drains, sewage odors inside or outside the home, wet or spongy ground near the drain field, unusually lush green grass over the septic area, or sewage backing up into toilets and sinks. If you notice any of these, call us right away — catching problems early avoids expensive repairs.",
  },
  {
    question: "How much does septic pumping cost?",
    answer:
      "Residential septic pumping typically ranges from $300–$600 depending on tank size and accessibility. We provide a firm quote before we start — no surprise fees. Call us or fill out our contact form for a free estimate specific to your property.",
  },
  {
    question: "Do you offer emergency service after hours?",
    answer:
      "Yes. We offer 24/7 emergency service for sewage backups, overflows, and urgent system failures. Call our main number any time of day or night and we'll dispatch a technician as quickly as possible. Emergency rates apply outside normal business hours.",
  },
  {
    question: "How long does septic pumping take?",
    answer:
      "A standard residential pumping typically takes 30–60 minutes once the technician is on site. If we're also inspecting the system or if the tank requires additional cleaning, plan for 1–2 hours. We'll give you a time estimate when you schedule.",
  },
  {
    question: "Do I need to be home during the service?",
    answer:
      "You don't need to be present for basic pumping if we already know the tank location and have clear access. For first-time customers or if the location is uncertain, we recommend being there for at least the start of the visit. We'll confirm the details when you schedule.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the greater Central Valley area including Modesto, Turlock, Ceres, Riverbank, Oakdale, Patterson, and surrounding communities. Call us if you're unsure whether we cover your location — we'll let you know immediately and can often accommodate nearby areas.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Eagle Septic is fully licensed and insured in California. Our technicians are trained and certified, and we carry general liability and workers' compensation insurance on every job. We're happy to provide proof of insurance on request.",
  },
  {
    question: "What should I do to prepare for a septic service visit?",
    answer:
      "Locate your septic tank access risers or lids before we arrive — this saves time and reduces costs. Clear any vehicles, equipment, or debris from the area around the tank. If you don't know the tank location, we can help locate it, though an additional fee may apply.",
  },
  {
    question: "Can I use additives or chemicals to maintain my septic system?",
    answer:
      "Most septic additives provide little to no benefit and some can actually harm your system by disrupting the natural bacterial balance. The best maintenance is regular pumping, water conservation, and avoiding flushing non-biodegradable materials. We'll give you straightforward maintenance advice during your service visit.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-brand-600 transition-transform duration-200 flex-shrink-0 ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="section-padding bg-white">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Common Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about septic service. Don&apos;t see your question?{" "}
              <a href="tel:+15558675309" className="text-brand-600 font-semibold hover:underline">
                Call us directly.
              </a>
            </p>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-inset"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-semibold text-brand-900 text-base leading-snug">
                    {faq.question}
                  </span>
                  <ChevronIcon open={openIndex === i} />
                </button>

                {openIndex === i && (
                  <div className="px-6 pb-5 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">Still have questions? We&apos;re happy to help.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+15558675309" className="btn-primary inline-flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
              <a href="#contact" className="btn-secondary inline-flex items-center justify-center gap-2">
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
