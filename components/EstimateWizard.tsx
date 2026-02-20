"use client";

import { useState } from "react";
import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/services";

// ─── Types ───────────────────────────────────────────────────────────────────

type ServiceType =
  | "pumping"
  | "cleaning"
  | "inspection"
  | "emergency"
  | "drainfield"
  | "notsure";

type TankSize = "unknown" | "small" | "medium" | "standard" | "large" | "xlarge";
type LastService = "recent" | "moderate" | "overdue" | "never" | "unknown";
type AccessType = "easy" | "unknown" | "buried";

interface Answers {
  service: ServiceType | null;
  tankSize: TankSize | null;
  lastService: LastService | null;
  access: AccessType | null;
}

interface Estimate {
  low: number;
  high: number;
  urgency: "low" | "medium" | "high";
  recommendation: string;
  nextStep: string;
}

// ─── Pricing Logic ───────────────────────────────────────────────────────────

function computeEstimate(answers: Answers): Estimate {
  const { service, tankSize, lastService, access } = answers;

  if (service === "emergency") {
    return {
      low: 500,
      high: 1200,
      urgency: "high",
      recommendation:
        "Emergency service is available 24/7. Call us now for immediate dispatch — our team will be on-site as quickly as possible.",
      nextStep: "Call immediately for fastest response.",
    };
  }

  if (service === "drainfield") {
    return {
      low: 3000,
      high: 15000,
      urgency: "high",
      recommendation:
        "Drain field repair costs vary widely based on damage extent, soil conditions, and permit requirements. A site assessment is required for an accurate quote.",
      nextStep: "Call to schedule a free diagnostic assessment.",
    };
  }

  if (service === "inspection") {
    let low = 175;
    let high = 400;
    return {
      low,
      high,
      urgency: "low",
      recommendation:
        "Septic inspections are typically required for home sales and recommended every 3 years. We provide a full written report reviewed with you on-site.",
      nextStep: "Schedule a convenient time — most inspections take 1–2 hours.",
    };
  }

  // pumping / cleaning / notsure
  let low = service === "cleaning" ? 400 : 300;
  let high = service === "cleaning" ? 750 : 550;

  // Tank size modifier
  const sizeAdj: Record<TankSize, [number, number]> = {
    unknown: [0, 50],
    small: [-75, -50],
    medium: [-50, -25],
    standard: [0, 0],
    large: [50, 75],
    xlarge: [100, 200],
  };
  if (tankSize) {
    low += sizeAdj[tankSize][0];
    high += sizeAdj[tankSize][1];
  }

  // Last service modifier
  const serviceAdj: Record<LastService, [number, number]> = {
    recent: [-25, 0],
    moderate: [0, 0],
    overdue: [50, 100],
    never: [75, 150],
    unknown: [25, 75],
  };
  if (lastService) {
    low += serviceAdj[lastService][0];
    high += serviceAdj[lastService][1];
  }

  // Access modifier
  const accessAdj: Record<AccessType, [number, number]> = {
    easy: [0, 0],
    unknown: [50, 75],
    buried: [100, 200],
  };
  if (access) {
    low += accessAdj[access][0];
    high += accessAdj[access][1];
  }

  // Clamp to reasonable range
  low = Math.max(200, low);
  high = Math.max(low + 100, high);

  // Urgency
  let urgency: "low" | "medium" | "high" = "low";
  if (lastService === "overdue" || lastService === "never") urgency = "medium";

  // Recommendation text
  let recommendation = "";
  let nextStep = "";

  if (lastService === "never" || lastService === "overdue") {
    recommendation =
      "Based on your answers, your system may be overdue for service. Overfull tanks can cause backups, drain field damage, and costly repairs. We recommend scheduling soon.";
    nextStep = "We recommend scheduling within the next 30 days.";
    urgency = "medium";
  } else if (lastService === "recent") {
    recommendation =
      "Your system sounds well-maintained. A routine pump-out or cleaning keeps your tank healthy and extends the life of your drain field significantly.";
    nextStep = "Schedule at your convenience — routine service takes 1–2 hours.";
  } else {
    recommendation =
      "Regular pumping every 3–5 years is the best way to protect your drain field investment. We'll assess the system on-site and let you know exactly what's needed.";
    nextStep = "Call or request a quote online — we typically schedule within 48 hours.";
  }

  if (access === "buried") {
    recommendation += " Note: We'll need to locate and expose your tank lid, which is included in the access estimate above.";
  }

  return { low, high, urgency, recommendation, nextStep };
}

// ─── Step configs ─────────────────────────────────────────────────────────────

function useSteps(service: ServiceType | null) {
  // Which steps are required depends on service
  const needsTankSize =
    service === "pumping" || service === "cleaning" || service === "notsure";
  const needsLastService =
    service === "pumping" ||
    service === "cleaning" ||
    service === "notsure" ||
    service === "inspection";
  const needsAccess =
    service === "pumping" || service === "cleaning" || service === "notsure";

  const steps = ["service"];
  if (needsTankSize) steps.push("tankSize");
  if (needsLastService) steps.push("lastService");
  if (needsAccess) steps.push("access");
  steps.push("result");
  return steps;
}

// ─── Option Card ─────────────────────────────────────────────────────────────

function OptionCard({
  selected,
  onClick,
  icon,
  label,
  sublabel,
}: {
  selected: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-start gap-4 rounded-xl border-2 p-4 text-left transition-all ${
        selected
          ? "border-brand-600 bg-brand-50 shadow-sm"
          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
      }`}
    >
      <div
        className={`mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${
          selected ? "bg-brand-600 text-white" : "bg-gray-100 text-gray-500"
        }`}
      >
        {icon}
      </div>
      <div>
        <p
          className={`font-semibold ${
            selected ? "text-brand-900" : "text-gray-900"
          }`}
        >
          {label}
        </p>
        {sublabel && (
          <p className="mt-0.5 text-sm text-gray-500">{sublabel}</p>
        )}
      </div>
      {selected && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="ml-auto h-5 w-5 flex-shrink-0 text-brand-600"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function EstimateWizard() {
  const [answers, setAnswers] = useState<Answers>({
    service: null,
    tankSize: null,
    lastService: null,
    access: null,
  });
  const [currentStep, setCurrentStep] = useState(0);

  // Lead capture form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const steps = useSteps(answers.service);
  const totalSteps = steps.length;
  const stepKey = steps[currentStep];

  function canAdvance() {
    if (stepKey === "service") return answers.service !== null;
    if (stepKey === "tankSize") return answers.tankSize !== null;
    if (stepKey === "lastService") return answers.lastService !== null;
    if (stepKey === "access") return answers.access !== null;
    return false;
  }

  function advance() {
    if (currentStep < totalSteps - 1) setCurrentStep((s) => s + 1);
  }

  function back() {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  }

  // When service changes, reset downstream answers and recalculate steps
  function pickService(s: ServiceType) {
    setAnswers({ service: s, tankSize: null, lastService: null, access: null });
    // Auto-advance for emergency/drainfield since they need minimal info
    if (s === "emergency" || s === "drainfield") {
      setCurrentStep(1); // Jump to result
    }
  }

  // Auto-jump for emergency/drainfield — steps are [service, result]
  const effectiveSteps = useSteps(answers.service);
  const onResultStep = steps[currentStep] === "result";
  const estimate =
    onResultStep && answers.service
      ? computeEstimate(answers)
      : null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitting(true);

    const est = estimate ? `$${estimate.low}–$${estimate.high}` : "unknown";
    const service = answers.service ?? "unknown";
    const message = `Estimate request via website calculator.\nService: ${service}\nTank size: ${answers.tankSize ?? "n/a"}\nLast serviced: ${answers.lastService ?? "n/a"}\nAccess: ${answers.access ?? "n/a"}\nEstimated range: ${est}`;

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email: "", service, message }),
      });
    } catch {
      // fail silently — still show confirmation
    }

    setSubmitted(true);
    setSubmitting(false);
  }

  const urgencyColors = {
    low: "bg-accent-50 border-accent-200 text-accent-800",
    medium: "bg-amber-50 border-amber-200 text-amber-800",
    high: "bg-red-50 border-red-200 text-red-800",
  };

  const urgencyLabels = {
    low: "Routine — schedule at your convenience",
    medium: "Overdue — we recommend scheduling soon",
    high: "Urgent — contact us today",
  };

  return (
    <main>
        {/* Page header */}
        <section className="bg-brand-900 text-white">
          <div className="container-max section-padding">
            <nav className="mb-4 flex items-center gap-2 text-sm text-brand-300">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-brand-100">Free Estimate</span>
            </nav>
            <h1 className="mb-3 text-3xl font-bold sm:text-4xl">
              Get Your Free Septic Estimate
            </h1>
            <p className="max-w-xl text-brand-100 text-lg leading-relaxed">
              Answer 3–4 quick questions and we&apos;ll show you a personalized
              cost range for your situation — no commitment required.
            </p>
          </div>
        </section>

        {/* Estimator wizard */}
        <section className="bg-gray-50 py-12">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              {/* Progress bar */}
              {!onResultStep && (
                <div className="mb-8">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>Step {currentStep + 1} of {totalSteps - 1}</span>
                    <span>{Math.round(((currentStep) / (totalSteps - 1)) * 100)}% complete</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-brand-600 transition-all duration-500"
                      style={{
                        width: `${(currentStep / (totalSteps - 1)) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              )}

              {/* ── Step: Service ── */}
              {stepKey === "service" && (
                <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                  <h2 className="mb-2 text-xl font-bold text-gray-900">
                    What service do you need?
                  </h2>
                  <p className="mb-6 text-gray-500">
                    Not sure? Choose &ldquo;Not Sure&rdquo; and we&apos;ll help
                    you figure it out.
                  </p>
                  <div className="space-y-3">
                    <OptionCard
                      selected={answers.service === "pumping"}
                      onClick={() => pickService("pumping")}
                      label="Septic Tank Pumping"
                      sublabel="Regular pump-out to remove waste — most common service"
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                          <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.107 1.115 1.886v.01c0 .375.11.724.3 1.015A3.75 3.75 0 0012.75 21h-1.5a3.75 3.75 0 003.375-2.1c.19-.291.3-.64.3-1.015v-.01c0-.779.43-1.488 1.115-1.886A8.25 8.25 0 0012 .75z" />
                        </svg>
                      }
                    />
                    <OptionCard
                      selected={answers.service === "cleaning"}
                      onClick={() => pickService("cleaning")}
                      label="Tank Cleaning & Maintenance"
                      sublabel="Full pump-out plus interior wash-down and filter cleaning"
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                          <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.818a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.845-.143z" clipRule="evenodd" />
                        </svg>
                      }
                    />
                    <OptionCard
                      selected={answers.service === "inspection"}
                      onClick={() => pickService("inspection")}
                      label="Septic Inspection"
                      sublabel="For home sales, routine checkups, or peace of mind"
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                          <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                        </svg>
                      }
                    />
                    <OptionCard
                      selected={answers.service === "emergency"}
                      onClick={() => pickService("emergency")}
                      label="Emergency Service (24/7)"
                      sublabel="Sewage backup, strong odors, wet spots in yard"
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                          <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                        </svg>
                      }
                    />
                    <OptionCard
                      selected={answers.service === "drainfield"}
                      onClick={() => pickService("drainfield")}
                      label="Drain Field Repair or Replacement"
                      sublabel="Soggy yard, slow drains, system failing"
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clipRule="evenodd" />
                        </svg>
                      }
                    />
                    <OptionCard
                      selected={answers.service === "notsure"}
                      onClick={() => pickService("notsure")}
                      label="Not Sure What I Need"
                      sublabel="Answer a few questions and we'll recommend the right service"
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                        </svg>
                      }
                    />
                  </div>

                  {answers.service && (
                    <button
                      onClick={advance}
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-700 px-6 py-3 text-base font-bold text-white hover:bg-brand-800 transition-colors"
                    >
                      Continue
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                  )}
                </div>
              )}

              {/* ── Step: Tank Size ── */}
              {stepKey === "tankSize" && (
                <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                  <h2 className="mb-2 text-xl font-bold text-gray-900">
                    What size is your septic tank?
                  </h2>
                  <p className="mb-6 text-gray-500">
                    Check your county health permit, your home inspection report,
                    or just pick &ldquo;Not Sure&rdquo; — we&apos;ll verify
                    on-site.
                  </p>
                  <div className="space-y-3">
                    {[
                      {
                        value: "small" as TankSize,
                        label: "Small (~500 gallons)",
                        sublabel: "Typical for 1–2 bedroom homes or seasonal cabins",
                      },
                      {
                        value: "medium" as TankSize,
                        label: "Medium (~750 gallons)",
                        sublabel: "Common for older 2–3 bedroom homes",
                      },
                      {
                        value: "standard" as TankSize,
                        label: "Standard (~1,000 gallons)",
                        sublabel: "Most common for 3–4 bedroom homes",
                      },
                      {
                        value: "large" as TankSize,
                        label: "Large (~1,250 gallons)",
                        sublabel: "4–5 bedroom homes or high-use households",
                      },
                      {
                        value: "xlarge" as TankSize,
                        label: "Extra Large (~1,500+ gallons)",
                        sublabel: "Large homes, ADUs, or commercial properties",
                      },
                      {
                        value: "unknown" as TankSize,
                        label: "Not Sure",
                        sublabel: "We'll check the permit records or measure on-site",
                      },
                    ].map((opt) => (
                      <OptionCard
                        key={opt.value}
                        selected={answers.tankSize === opt.value}
                        onClick={() =>
                          setAnswers((a) => ({ ...a, tankSize: opt.value }))
                        }
                        label={opt.label}
                        sublabel={opt.sublabel}
                        icon={
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                            <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
                            <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
                            <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
                            <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
                          </svg>
                        }
                      />
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={back}
                      className="flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                      </svg>
                      Back
                    </button>
                    <button
                      onClick={advance}
                      disabled={!canAdvance()}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand-700 px-5 py-3 text-sm font-bold text-white hover:bg-brand-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Continue
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* ── Step: Last Service ── */}
              {stepKey === "lastService" && (
                <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                  <h2 className="mb-2 text-xl font-bold text-gray-900">
                    When was your septic tank last pumped?
                  </h2>
                  <p className="mb-6 text-gray-500">
                    This affects how much buildup we&apos;ll need to remove and
                    the overall service time.
                  </p>
                  <div className="space-y-3">
                    {[
                      {
                        value: "recent" as LastService,
                        label: "Within the last 2 years",
                        sublabel: "System should be in good shape",
                      },
                      {
                        value: "moderate" as LastService,
                        label: "2–5 years ago",
                        sublabel: "Right on schedule for routine service",
                      },
                      {
                        value: "overdue" as LastService,
                        label: "5+ years ago",
                        sublabel: "Likely overdue — heavier buildup expected",
                      },
                      {
                        value: "never" as LastService,
                        label: "Never / Just moved in",
                        sublabel: "Unknown history — we'll assess on-site",
                      },
                      {
                        value: "unknown" as LastService,
                        label: "Not Sure",
                        sublabel: "We'll check the records or assess the tank level",
                      },
                    ].map((opt) => (
                      <OptionCard
                        key={opt.value}
                        selected={answers.lastService === opt.value}
                        onClick={() =>
                          setAnswers((a) => ({ ...a, lastService: opt.value }))
                        }
                        label={opt.label}
                        sublabel={opt.sublabel}
                        icon={
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                          </svg>
                        }
                      />
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={back}
                      className="flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                      </svg>
                      Back
                    </button>
                    <button
                      onClick={advance}
                      disabled={!canAdvance()}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand-700 px-5 py-3 text-sm font-bold text-white hover:bg-brand-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Continue
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* ── Step: Access ── */}
              {stepKey === "access" && (
                <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                  <h2 className="mb-2 text-xl font-bold text-gray-900">
                    Do you know where your tank lid is?
                  </h2>
                  <p className="mb-6 text-gray-500">
                    Locating and exposing a buried lid adds time and cost. If
                    you&apos;re not sure, that&apos;s totally normal — we handle
                    it.
                  </p>
                  <div className="space-y-3">
                    <OptionCard
                      selected={answers.access === "easy"}
                      onClick={() =>
                        setAnswers((a) => ({ ...a, access: "easy" }))
                      }
                      label="Yes — lid is visible or easy to find"
                      sublabel="Lid is above ground, marked, or I know where it is"
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                      }
                    />
                    <OptionCard
                      selected={answers.access === "unknown"}
                      onClick={() =>
                        setAnswers((a) => ({ ...a, access: "unknown" }))
                      }
                      label="Not sure where the lid is"
                      sublabel="We'll need to probe and locate it ($50–$75 locate fee)"
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                        </svg>
                      }
                    />
                    <OptionCard
                      selected={answers.access === "buried"}
                      onClick={() =>
                        setAnswers((a) => ({ ...a, access: "buried" }))
                      }
                      label="Lid is buried underground"
                      sublabel="We'll need to dig to expose it ($100–$200 excavation fee)"
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                          <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-1.5 0v4.93l-2.006.53a.75.75 0 00.512 1.41l.494-.13v8.71a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25v-8.71l.494.13a.75.75 0 00.512-1.41l-.494-.13V4.338l-3.5.926V3.705z" />
                        </svg>
                      }
                    />
                  </div>
                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={back}
                      className="flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                      </svg>
                      Back
                    </button>
                    <button
                      onClick={advance}
                      disabled={!canAdvance()}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand-700 px-5 py-3 text-sm font-bold text-white hover:bg-brand-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      See My Estimate
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* ── Step: Result ── */}
              {stepKey === "result" && estimate && (
                <div className="space-y-5">
                  {/* Estimate card */}
                  <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                    <div className="mb-1 text-sm font-semibold uppercase tracking-wider text-gray-400">
                      Your Estimated Range
                    </div>
                    <div className="mb-4 text-5xl font-bold text-brand-900">
                      ${estimate.low.toLocaleString()}–${estimate.high.toLocaleString()}
                    </div>
                    <p className="text-sm text-gray-500">
                      Based on your answers. Final price confirmed before we
                      start — no surprises.
                    </p>

                    {/* Urgency badge */}
                    <div
                      className={`mt-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium ${urgencyColors[estimate.urgency]}`}
                    >
                      <span
                        className={`inline-block h-2 w-2 rounded-full ${
                          estimate.urgency === "high"
                            ? "bg-red-500"
                            : estimate.urgency === "medium"
                            ? "bg-amber-500"
                            : "bg-accent-500"
                        }`}
                      />
                      {urgencyLabels[estimate.urgency]}
                    </div>

                    {/* Recommendation */}
                    <div className="mt-5 rounded-xl bg-gray-50 p-4">
                      <p className="text-sm leading-relaxed text-gray-700">
                        {estimate.recommendation}
                      </p>
                    </div>

                    {/* Next step */}
                    <p className="mt-4 text-sm font-medium text-brand-700">
                      📋 {estimate.nextStep}
                    </p>
                  </div>

                  {/* Lead capture or confirmation */}
                  {submitted ? (
                    <div className="rounded-2xl bg-accent-50 border border-accent-200 p-6 text-center sm:p-8">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto mb-3 h-12 w-12 text-accent-500">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      <h3 className="mb-2 text-xl font-bold text-accent-900">
                        Request Received!
                      </h3>
                      <p className="text-accent-800">
                        We&apos;ll call you within the hour to confirm your
                        estimate and schedule service. Thank you!
                      </p>
                    </div>
                  ) : (
                    <div className="rounded-2xl bg-brand-900 p-6 text-white sm:p-8">
                      <h3 className="mb-1 text-xl font-bold">
                        Get Your Confirmed Quote
                      </h3>
                      <p className="mb-5 text-brand-200 text-sm">
                        Enter your name and phone number and we&apos;ll call you
                        within the hour with an exact price — free, no
                        obligation.
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-3">
                        <div>
                          <label className="mb-1 block text-sm font-medium text-brand-100">
                            Your Name
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Jane Smith"
                            required
                            className="w-full rounded-lg border border-brand-700 bg-brand-800 px-4 py-2.5 text-white placeholder-brand-400 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/30"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block text-sm font-medium text-brand-100">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="(555) 123-4567"
                            required
                            className="w-full rounded-lg border border-brand-700 bg-brand-800 px-4 py-2.5 text-white placeholder-brand-400 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/30"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={submitting || !name.trim() || !phone.trim()}
                          className="w-full rounded-lg bg-accent-500 px-5 py-3 text-base font-bold text-white hover:bg-accent-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {submitting ? "Sending…" : "Send My Estimate Request"}
                        </button>
                      </form>

                      <div className="mt-5 border-t border-brand-700 pt-5">
                        <p className="mb-3 text-center text-sm text-brand-300">
                          Or call us directly right now:
                        </p>
                        <a
                          href={PHONE_HREF}
                          className="flex items-center justify-center gap-2 rounded-lg border-2 border-brand-600 px-5 py-3 text-base font-bold text-white hover:bg-brand-800 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                          </svg>
                          Call {PHONE}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Start over */}
                  <div className="text-center">
                    <button
                      onClick={() => {
                        setAnswers({ service: null, tankSize: null, lastService: null, access: null });
                        setCurrentStep(0);
                        setSubmitted(false);
                        setName("");
                        setPhone("");
                      }}
                      className="text-sm text-gray-500 underline hover:text-gray-700"
                    >
                      Start over with different answers
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-t border-gray-200 bg-white py-8">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              {[
                "Free estimates — no obligation",
                "Price locked before we start",
                "Licensed & insured (C-42)",
                "18+ years serving the Central Valley",
                "24/7 emergency availability",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-accent-500">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
    </main>
  );
}
