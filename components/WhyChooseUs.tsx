const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "5,000+", label: "Tanks Serviced" },
  { value: "24/7", label: "Emergency Service" },
  { value: "100%", label: "Licensed & Insured" },
];

const reasons = [
  {
    title: "Experienced & Certified",
    description:
      "Our team has over 20 years of hands-on experience with residential and commercial septic systems. Every technician is state-certified and background-checked.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No surprise charges. We provide upfront estimates before any work begins, so you know exactly what you're paying for. Free estimates on all services.",
  },
  {
    title: "Modern Equipment",
    description:
      "We use high-capacity vacuum trucks and the latest diagnostic tools to complete jobs faster and more thoroughly — with less disruption to your property.",
  },
  {
    title: "Environmentally Responsible",
    description:
      "Waste is transported to state-approved treatment facilities following all environmental regulations. We take our responsibility to the community seriously.",
  },
  {
    title: "Locally Owned & Operated",
    description:
      "We're your neighbors — not a franchise. We care about the quality of work we do in our community and stand behind every job with our reputation.",
  },
  {
    title: "5-Star Service",
    description:
      "Hundreds of happy customers and consistently top-rated reviews. We treat your property with respect and always clean up completely before we leave.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white">
      <div className="container-max section-padding">
        {/* Stats bar */}
        <div className="mb-16 grid grid-cols-2 gap-6 rounded-2xl bg-brand-900 p-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-accent-400 sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-brand-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Eagle Septic?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We&apos;ve built our business on trust, transparency, and doing
            quality work every single time.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div key={reason.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-bold text-sm">
                  {i + 1}
                </div>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
