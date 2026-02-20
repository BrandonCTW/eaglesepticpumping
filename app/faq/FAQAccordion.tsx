"use client";

import { useState } from "react";

interface Question {
  q: string;
  a: string;
}

function FAQItem({ q, a }: Question) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-gray-900">{q}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`h-5 w-5 flex-shrink-0 text-brand-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed text-gray-600">{a}</p>
      )}
    </div>
  );
}

export default function FAQAccordion({ questions }: { questions: Question[] }) {
  return (
    <>
      {questions.map((item) => (
        <FAQItem key={item.q} q={item.q} a={item.a} />
      ))}
    </>
  );
}
