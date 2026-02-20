import Image from "next/image";
import { PHONE, PHONE_HREF } from "@/lib/services";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&h=900&q=85&fit=crop&crop=center";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      {/* Background photo */}
      <Image
        src={HERO_IMAGE}
        alt="Residential home with green lawn served by Eagle Septic Pumping"
        fill
        priority
        className="object-cover object-center opacity-20"
        sizes="100vw"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-brand-800/80 to-brand-700/70" />

      <div className="container-max section-padding relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-500/20 px-4 py-2 text-sm font-semibold text-accent-400 ring-1 ring-accent-500/30">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent-400"></span>
            Available 24/7 for Emergencies
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Professional Septic{" "}
            <span className="text-accent-400">Pumping & Services</span>
          </h1>

          <p className="mb-8 text-lg text-brand-100 sm:text-xl">
            Trusted septic tank pumping, cleaning, and inspection services.
            Licensed & insured technicians ready to solve your septic problems —
            fast.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={PHONE_HREF} className="btn-primary text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              Call {PHONE}
            </a>
            <a href="#contact" className="btn-secondary text-base">
              Get a Free Estimate
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-brand-100">
            {[
              "Licensed & Insured",
              "Same-Day Service",
              "Free Estimates",
              "Family Owned",
            ].map((trust) => (
              <div key={trust} className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 text-accent-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                {trust}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
