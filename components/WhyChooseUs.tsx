const stats = [
  { value: "18+", label: "Years Experience" },
  { value: "4,200+", label: "Tanks Serviced" },
  { value: "24/7", label: "Emergency Service" },
  { value: "100%", label: "Licensed & Insured" },
];

const reasons = [
  {
    title: "Experienced & Certified",
    description:
      "Our team has over 18 years of hands-on experience with residential and commercial septic systems. Every technician is state-certified and background-checked.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
        <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.608 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
        <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    description:
      "No surprise charges. We provide upfront estimates before any work begins, so you know exactly what you're paying for. Free estimates on all services.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.756V6Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Modern Equipment",
    description:
      "We use high-capacity vacuum trucks and the latest diagnostic tools to complete jobs faster and more thoroughly — with less disruption to your property.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Environmentally Responsible",
    description:
      "Waste is transported to state-approved treatment facilities following all environmental regulations. We take our responsibility to the community seriously.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.24.780-.626.914l-.796.265c-.48.16-.797.617-.797 1.122v1.879c0 .539.386.996.917 1.086a8.25 8.25 0 0 0 9.416-9.97.75.75 0 1 0-1.4-.388c-.093.393.04.804.367 1.054l.6.45c.186.14.24.394.133.598a6.75 6.75 0 0 1-1.073 1.522l-.197.19a.75.75 0 0 1-1.04-.02l-.63-.63a1.5 1.5 0 0 1-.438-1.06V8.25a.75.75 0 0 0-.75-.75h-.797a.75.75 0 0 1-.708-.499l-.4-1.2a.75.75 0 0 0-.944-.45l-.645.215c-.316.105-.65.09-.94-.05l-.484-.243a.75.75 0 0 0-.966.263ZM4.5 12.75A.75.75 0 0 1 5.25 12h.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-1.5Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Locally Owned & Operated",
    description:
      "We're your neighbors — not a franchise. We care about the quality of work we do in our community and stand behind every job with our reputation.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </svg>
    ),
  },
  {
    title: "5-Star Service",
    description:
      "Hundreds of happy customers and consistently top-rated reviews. We treat your property with respect and always clean up completely before we leave.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
      </svg>
    ),
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-xl border border-gray-100 bg-gray-50 p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                {reason.icon}
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
