"use client";

import { useState, FormEvent } from "react";

type Step = 1 | 2 | 3 | 4;

const SERVICE_OPTIONS = [
  { value: "Septic Tank Pumping", label: "Septic Tank Pumping", description: "Remove accumulated solids every 3–5 years" },
  { value: "Tank Cleaning & Maintenance", label: "Tank Cleaning & Maintenance", description: "Deep clean + baffle inspection" },
  { value: "Septic Inspection", label: "Septic Inspection", description: "Pre-sale, permit, or peace-of-mind inspection" },
  { value: "Emergency Septic Service", label: "Emergency Service", description: "Backup, overflow, or critical failure" },
  { value: "Drain Field Repair", label: "Drain Field Repair", description: "Failing leach field restoration" },
  { value: "New Septic System Installation", label: "New System Installation", description: "Full system design and install" },
  { value: "Not Sure / Need Inspection", label: "Not Sure — Need a Diagnosis", description: "Describe the problem and we'll advise" },
];

const URGENCY_OPTIONS = [
  { value: "emergency", label: "🚨 Emergency", sub: "Today or tomorrow" },
  { value: "soon", label: "⚡ Soon", sub: "Within this week" },
  { value: "flexible", label: "📅 Flexible", sub: "Within 2 weeks" },
  { value: "planning", label: "🗓️ Planning Ahead", sub: "Next month or later" },
];

const TANK_SIZES = [
  "Not Sure",
  "Under 1,000 gallons",
  "1,000–1,500 gallons",
  "1,500–2,500 gallons",
  "Over 2,500 gallons (commercial)",
];

const TIME_PREFS = [
  { value: "morning", label: "Morning (7am–12pm)" },
  { value: "afternoon", label: "Afternoon (12pm–5pm)" },
  { value: "any", label: "Any Time (most flexible)" },
];

interface FormData {
  // Step 1
  service: string;
  urgency: string;
  // Step 2
  propertyType: string;
  tankSize: string;
  city: string;
  address: string;
  // Step 3
  preferredDate: string;
  preferredTime: string;
  notes: string;
  // Step 4
  name: string;
  phone: string;
  email: string;
}

const initial: FormData = {
  service: "",
  urgency: "",
  propertyType: "",
  tankSize: "",
  city: "",
  address: "",
  preferredDate: "",
  preferredTime: "any",
  notes: "",
  name: "",
  phone: "",
  email: "",
};

function ProgressBar({ step }: { step: Step }) {
  const steps = ["Service", "Property", "Schedule", "Contact"];
  return (
    <div className="mb-8">
      <div className="mb-2 flex justify-between text-xs font-medium text-gray-500">
        {steps.map((label, i) => (
          <span
            key={label}
            className={i + 1 <= step ? "text-accent-600 font-semibold" : ""}
          >
            {label}
          </span>
        ))}
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-accent-500 transition-all duration-500"
          style={{ width: `${(step / 4) * 100}%` }}
        />
      </div>
    </div>
  );
}

export default function BookingForm() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormData>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const set = (field: keyof FormData, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const canAdvance1 = form.service && form.urgency;
  const canAdvance2 = form.propertyType && form.city;
  const canAdvance3 = form.preferredTime; // date optional
  const canSubmit = form.name && form.phone;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-10 text-center shadow-lg">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mb-2 text-2xl font-bold text-brand-900">Booking Request Received!</h2>
        <p className="mb-6 text-gray-600">
          Thanks, <strong>{form.name}</strong>! We'll confirm your{" "}
          <strong>{form.service}</strong> appointment and reach out to{" "}
          <strong>{form.phone}</strong> within 2 business hours.
        </p>
        {form.urgency === "emergency" && (
          <div className="mb-6 rounded-xl bg-red-50 p-4 text-sm text-red-700">
            <strong>Emergency request noted.</strong> For the fastest response, please also call us directly.
          </div>
        )}
        <p className="text-sm text-gray-500">
          Have questions? Reach us at{" "}
          <a href="mailto:info@eaglesepticpumping.com" className="text-accent-600 hover:underline">
            info@eaglesepticpumping.com
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-2xl bg-white p-8 shadow-lg sm:p-10">
        <ProgressBar step={step} />

        {/* Step 1: Service + Urgency */}
        {step === 1 && (
          <div>
            <h2 className="mb-1 text-xl font-bold text-brand-900">What service do you need?</h2>
            <p className="mb-6 text-sm text-gray-500">Select one — don't worry if you're unsure.</p>

            <div className="mb-6 grid gap-3">
              {SERVICE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => set("service", opt.value)}
                  className={`flex w-full items-start gap-3 rounded-xl border-2 p-4 text-left transition-colors ${
                    form.service === opt.value
                      ? "border-accent-500 bg-accent-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                      form.service === opt.value ? "border-accent-500 bg-accent-500" : "border-gray-300"
                    }`}
                  >
                    {form.service === opt.value && (
                      <div className="h-2 w-2 rounded-full bg-white" />
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-brand-900">{opt.label}</div>
                    <div className="text-xs text-gray-500">{opt.description}</div>
                  </div>
                </button>
              ))}
            </div>

            <h3 className="mb-3 font-semibold text-brand-900">How soon do you need service?</h3>
            <div className="mb-6 grid grid-cols-2 gap-3">
              {URGENCY_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => set("urgency", opt.value)}
                  className={`rounded-xl border-2 p-4 text-left transition-colors ${
                    form.urgency === opt.value
                      ? "border-accent-500 bg-accent-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="font-semibold text-brand-900">{opt.label}</div>
                  <div className="text-xs text-gray-500">{opt.sub}</div>
                </button>
              ))}
            </div>

            <button
              type="button"
              disabled={!canAdvance1}
              onClick={() => setStep(2)}
              className="w-full rounded-xl bg-accent-500 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next: Property Details →
            </button>
          </div>
        )}

        {/* Step 2: Property info */}
        {step === 2 && (
          <div>
            <h2 className="mb-1 text-xl font-bold text-brand-900">Tell us about your property</h2>
            <p className="mb-6 text-sm text-gray-500">This helps us send the right truck and give accurate pricing.</p>

            <div className="mb-5">
              <label className="mb-2 block text-sm font-semibold text-brand-900">Property type</label>
              <div className="grid grid-cols-2 gap-3">
                {["Residential", "Commercial"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => set("propertyType", type)}
                    className={`rounded-xl border-2 py-3 text-sm font-semibold transition-colors ${
                      form.propertyType === type
                        ? "border-accent-500 bg-accent-50 text-accent-700"
                        : "border-gray-200 text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="tankSize" className="mb-2 block text-sm font-semibold text-brand-900">
                Tank size (if known)
              </label>
              <select
                id="tankSize"
                value={form.tankSize}
                onChange={(e) => set("tankSize", e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
              >
                <option value="">Select tank size…</option>
                {TANK_SIZES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label htmlFor="city" className="mb-2 block text-sm font-semibold text-brand-900">
                City / Town <span className="text-red-500">*</span>
              </label>
              <input
                id="city"
                type="text"
                value={form.city}
                onChange={(e) => set("city", e.target.value)}
                placeholder="e.g. Modesto, Turlock, Ceres…"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="address" className="mb-2 block text-sm font-semibold text-brand-900">
                Street address{" "}
                <span className="text-xs font-normal text-gray-400">(optional — helps with scheduling)</span>
              </label>
              <input
                id="address"
                type="text"
                value={form.address}
                onChange={(e) => set("address", e.target.value)}
                placeholder="123 Main St"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 rounded-xl border border-gray-300 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              >
                ← Back
              </button>
              <button
                type="button"
                disabled={!canAdvance2}
                onClick={() => setStep(3)}
                className="flex-1 rounded-xl bg-accent-500 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next: Schedule →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Schedule */}
        {step === 3 && (
          <div>
            <h2 className="mb-1 text-xl font-bold text-brand-900">When works for you?</h2>
            <p className="mb-6 text-sm text-gray-500">We'll confirm availability when we contact you.</p>

            <div className="mb-5">
              <label htmlFor="preferredDate" className="mb-2 block text-sm font-semibold text-brand-900">
                Preferred date{" "}
                <span className="text-xs font-normal text-gray-400">(optional)</span>
              </label>
              <input
                id="preferredDate"
                type="date"
                value={form.preferredDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => set("preferredDate", e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm font-semibold text-brand-900">Preferred time window</label>
              <div className="grid gap-3">
                {TIME_PREFS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => set("preferredTime", opt.value)}
                    className={`rounded-xl border-2 py-3 text-sm font-semibold transition-colors ${
                      form.preferredTime === opt.value
                        ? "border-accent-500 bg-accent-50 text-accent-700"
                        : "border-gray-200 text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="notes" className="mb-2 block text-sm font-semibold text-brand-900">
                Notes or symptoms{" "}
                <span className="text-xs font-normal text-gray-400">(optional but helpful)</span>
              </label>
              <textarea
                id="notes"
                rows={3}
                value={form.notes}
                onChange={(e) => set("notes", e.target.value)}
                placeholder="e.g. slow drains, gurgling sounds, last pumped in 2019, tank lid is accessible…"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex-1 rounded-xl border border-gray-300 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              >
                ← Back
              </button>
              <button
                type="button"
                disabled={!canAdvance3}
                onClick={() => setStep(4)}
                className="flex-1 rounded-xl bg-accent-500 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next: Your Info →
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Contact info + submit */}
        {step === 4 && (
          <form onSubmit={handleSubmit}>
            <h2 className="mb-1 text-xl font-bold text-brand-900">Last step — how do we reach you?</h2>
            <p className="mb-6 text-sm text-gray-500">We'll call or text to confirm your appointment.</p>

            <div className="mb-5">
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-brand-900">
                Full name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                placeholder="Jane Smith"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-brand-900">
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                placeholder="(209) 555-0100"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-brand-900">
                Email address{" "}
                <span className="text-xs font-normal text-gray-400">(optional — for confirmation)</span>
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder="jane@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
              />
            </div>

            {/* Summary */}
            <div className="mb-6 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
              <p className="mb-2 font-semibold text-brand-900">Booking summary</p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li><span className="font-medium">Service:</span> {form.service}</li>
                <li><span className="font-medium">Urgency:</span> {URGENCY_OPTIONS.find(u => u.value === form.urgency)?.label}</li>
                <li><span className="font-medium">Property:</span> {form.propertyType} — {form.city}</li>
                {form.preferredDate && (
                  <li>
                    <span className="font-medium">Preferred:</span>{" "}
                    {new Date(form.preferredDate + "T12:00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })},{" "}
                    {TIME_PREFS.find(t => t.value === form.preferredTime)?.label}
                  </li>
                )}
              </ul>
            </div>

            {error && (
              <div className="mb-4 rounded-xl bg-red-50 p-4 text-sm text-red-700">{error}</div>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="flex-1 rounded-xl border border-gray-300 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={!canSubmit || submitting}
                className="flex-1 rounded-xl bg-accent-500 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting ? "Sending…" : "Request Appointment →"}
              </button>
            </div>

            <p className="mt-3 text-center text-xs text-gray-400">
              No payment required. We'll confirm within 2 business hours.
            </p>
          </form>
        )}
      </div>

      {/* Side trust card visible on larger screens */}
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-600 shadow-sm">
        <h3 className="mb-3 font-semibold text-brand-900">Why homeowners choose Eagle Septic</h3>
        <ul className="space-y-2">
          {[
            "Upfront pricing — no surprises after the job",
            "Licensed, bonded, and insured technicians",
            "All waste legally disposed at certified facilities",
            "Written service summary after every visit",
            "24/7 emergency response available",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
