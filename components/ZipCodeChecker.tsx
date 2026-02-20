"use client";

import { useState } from "react";
import { ZIP_CODE_MAP, serviceAreas } from "@/lib/serviceAreas";
import { PHONE_HREF } from "@/lib/services";

type ResultState = "idle" | "found" | "not-found";

export default function ZipCodeChecker() {
  const [zip, setZip] = useState("");
  const [result, setResult] = useState<ResultState>("idle");
  const [city, setCity] = useState("");
  const [citySlug, setCitySlug] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value.replace(/\D/g, "").slice(0, 5);
    setZip(val);

    if (val.length === 5) {
      const slug = ZIP_CODE_MAP[val];
      if (slug) {
        const area = serviceAreas.find((a) => a.slug === slug);
        setCity(area?.city ?? slug);
        setCitySlug(slug);
        setResult("found");
      } else {
        setCity("");
        setCitySlug("");
        setResult("not-found");
      }
    } else {
      setResult("idle");
    }
  }

  return (
    <div className="flex h-80 flex-col items-center justify-center gap-4 p-8 text-center">
      {/* Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-10 w-10 text-brand-400"
      >
        <path
          fillRule="evenodd"
          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.43-4.577 3.43-7.328a6.75 6.75 0 00-13.5 0c0 2.75 1.485 5.25 3.43 7.328a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.079.694zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>

      <div>
        <p className="text-lg font-semibold text-brand-900">
          Check Your Service Area
        </p>
        <p className="mt-0.5 text-sm text-brand-700">
          Enter your zip code to confirm we cover your location
        </p>
      </div>

      {/* Input */}
      <div className="w-full max-w-[220px]">
        <input
          type="text"
          inputMode="numeric"
          value={zip}
          onChange={handleChange}
          placeholder="e.g. 95350"
          maxLength={5}
          aria-label="Enter your zip code"
          className="w-full rounded-lg border border-brand-300 bg-white px-4 py-3 text-center text-xl font-mono tracking-widest text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
        />
      </div>

      {/* Results */}
      {result === "found" && (
        <div className="w-full max-w-xs rounded-xl border border-green-200 bg-green-50 p-4">
          <p className="font-semibold text-green-800">
            ✓ Yes! We serve {city}, CA
          </p>
          <div className="mt-3 flex flex-col gap-2">
            <a
              href={`/service-areas/${citySlug}`}
              className="block rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-800"
            >
              Book Service in {city}
            </a>
            <a
              href={PHONE_HREF}
              className="block rounded-lg border border-brand-300 px-4 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50"
            >
              Call Us Now
            </a>
          </div>
        </div>
      )}

      {result === "not-found" && (
        <div className="w-full max-w-xs rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="font-semibold text-amber-800">
            Zip {zip} isn&apos;t on our list
          </p>
          <p className="mt-1 text-xs text-amber-700">
            We often travel beyond our listed areas — call to confirm!
          </p>
          <a
            href={PHONE_HREF}
            className="mt-3 block rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-800"
          >
            Call to Confirm Coverage
          </a>
        </div>
      )}

      {result === "idle" && (
        <p className="text-xs text-brand-600">
          Serving Stanislaus, Merced &amp; San Joaquin counties
        </p>
      )}
    </div>
  );
}
