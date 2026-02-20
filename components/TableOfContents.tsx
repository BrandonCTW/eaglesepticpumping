"use client";

import { useEffect, useRef, useState } from "react";

export interface TocEntry {
  id: string;
  text: string;
  level: 2 | 3;
}

interface Props {
  entries: TocEntry[];
}

export default function TableOfContents({ entries }: Props) {
  const [activeId, setActiveId] = useState<string>("");
  const [open, setOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headingEls = entries
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (obs) => {
        // Pick the topmost visible heading
        const visible = obs
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    headingEls.forEach((el) => observerRef.current!.observe(el));
    return () => observerRef.current?.disconnect();
  }, [entries]);

  if (entries.length < 2) return null;

  const ListItems = () => (
    <ol className="space-y-1">
      {entries.map(({ id, text, level }) => (
        <li key={id} className={level === 3 ? "pl-4" : ""}>
          <a
            href={`#${id}`}
            onClick={() => setOpen(false)}
            className={`block rounded py-1 px-2 text-sm leading-snug transition-colors ${
              activeId === id
                ? "bg-brand-50 font-semibold text-brand-700"
                : "text-gray-600 hover:text-brand-700 hover:bg-gray-50"
            }`}
          >
            {text}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      {/* Mobile: collapsible strip above article */}
      <div className="lg:hidden mb-8 rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-gray-800"
          aria-expanded={open}
        >
          <span>In this article</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <div className="border-t border-gray-200 px-4 py-3">
            <ListItems />
          </div>
        )}
      </div>

      {/* Desktop: sticky sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            In this article
          </p>
          <ListItems />
        </div>
      </aside>
    </>
  );
}
