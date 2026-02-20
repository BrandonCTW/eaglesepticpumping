"use client";

import { useState } from "react";
import { PHONE, PHONE_HREF } from "@/lib/services";

type WidgetState = "idle" | "open" | "submitting" | "success" | "error";

const SERVICE_OPTIONS = [
  "Septic Tank Pumping",
  "Tank Cleaning & Maintenance",
  "Septic Inspection",
  "Emergency Service",
  "Drain Field Repair",
  "New System Installation",
  "Not sure — need advice",
];

export default function CallbackWidget() {
  const [state, setState] = useState<WidgetState>("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          service: service || "General Inquiry",
          message: "Callback request submitted via website widget.",
        }),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  function close() {
    setState("idle");
    setName("");
    setPhone("");
    setService("");
  }

  const isModalOpen = state !== "idle";

  return (
    <>
      {/* Floating trigger button — hidden when modal is open */}
      {!isModalOpen && (
        <button
          onClick={() => setState("open")}
          className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-accent-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 lg:flex"
          aria-label="Request a free callback from Eagle Septic Pumping"
        >
          {/* Phone icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 flex-shrink-0"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
          <span>Free Callback</span>
        </button>
      )}

      {/* Modal overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:items-center sm:justify-end sm:pr-6 sm:pb-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="callback-widget-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          {/* Widget card */}
          <div className="relative w-full max-w-sm rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
            {/* Header */}
            <div className="flex items-center justify-between rounded-t-2xl bg-brand-900 px-5 py-4">
              <div>
                <p
                  id="callback-widget-title"
                  className="text-base font-bold text-white"
                >
                  Request a Free Callback
                </p>
                <p className="text-xs text-brand-200">
                  We call back within 1 hour during business hours
                </p>
              </div>
              <button
                onClick={close}
                className="rounded-lg p-1 text-brand-300 transition hover:text-white"
                aria-label="Close callback form"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-5">
              {state === "success" ? (
                <div className="py-4 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 text-accent-600"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="mb-1 font-bold text-gray-900">
                    Got it, {name}!
                  </p>
                  <p className="text-sm text-gray-600">
                    We'll call {phone} within 1 business hour. For faster help,
                    call us directly.
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="mt-4 block w-full rounded-lg bg-accent-500 py-2.5 text-center text-sm font-bold text-white transition hover:bg-accent-600"
                  >
                    Call {PHONE}
                  </a>
                  <button
                    onClick={close}
                    className="mt-2 block w-full text-sm text-gray-400 hover:text-gray-600"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {state === "error" && (
                    <p className="mb-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
                      Something went wrong. Please try calling us directly at{" "}
                      <a href={PHONE_HREF} className="font-semibold underline">
                        {PHONE}
                      </a>
                      .
                    </p>
                  )}

                  <div className="space-y-3">
                    <div>
                      <label
                        htmlFor="callback-name"
                        className="mb-1 block text-xs font-semibold text-gray-700"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="callback-name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Jane Smith"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="callback-phone"
                        className="mb-1 block text-xs font-semibold text-gray-700"
                      >
                        Best Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="callback-phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="(555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="callback-service"
                        className="mb-1 block text-xs font-semibold text-gray-700"
                      >
                        What do you need?
                      </label>
                      <select
                        id="callback-service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 transition focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                      >
                        <option value="">Select a service…</option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="mt-4 w-full rounded-lg bg-accent-500 py-3 text-sm font-bold text-white transition hover:bg-accent-600 disabled:opacity-60"
                  >
                    {state === "submitting" ? "Sending…" : "Request My Free Callback"}
                  </button>

                  <p className="mt-3 text-center text-xs text-gray-400">
                    Or call us now:{" "}
                    <a
                      href={PHONE_HREF}
                      className="font-semibold text-brand-700 hover:text-brand-900"
                    >
                      {PHONE}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
