"use client";

import { useState } from "react";
import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/services";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/commercial", label: "Commercial" },
    { href: "/pricing", label: "Pricing" },
    { href: "/service-areas", label: "Service Area" },
    { href: "/reviews", label: "Reviews" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const emergencyLink = { href: "/emergency", label: "⚠️ Emergency" };

  const bookLink = { href: "/book", label: "Book Service" };

  return (
    <header className="sticky top-0 z-50 bg-brand-900 shadow-lg">
      <div className="container-max flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-500 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </div>
          <div>
            <span className="block text-lg font-bold leading-tight text-white">
              Eagle Septic
            </span>
            <span className="block text-xs font-medium leading-tight text-brand-100">
              Pumping & Services
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-100 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={emergencyLink.href}
            className="rounded-lg bg-red-600 px-3 py-1.5 text-sm font-bold text-white shadow transition-colors hover:bg-red-700"
          >
            {emergencyLink.label}
          </Link>
          <Link
            href={bookLink.href}
            className="rounded-lg bg-accent-500 px-4 py-2 text-sm font-bold text-white shadow transition-colors hover:bg-accent-600"
          >
            {bookLink.label}
          </Link>
        </nav>

        {/* CTA phone */}
        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 rounded-lg bg-accent-500 px-4 py-2 text-sm font-bold text-white shadow transition-colors hover:bg-accent-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">{PHONE}</span>
            <span className="sm:hidden">Call Now</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded p-2 text-brand-100 hover:text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {menuOpen && (
        <nav className="border-t border-brand-800 bg-brand-900 px-4 pb-4 lg:hidden">
          <Link
            href={emergencyLink.href}
            onClick={() => setMenuOpen(false)}
            className="mt-3 block rounded-lg bg-red-600 px-3 py-2.5 text-center text-sm font-bold text-white hover:bg-red-700"
          >
            {emergencyLink.label}
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium text-brand-100 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={bookLink.href}
            onClick={() => setMenuOpen(false)}
            className="mt-2 block rounded-lg bg-accent-500 px-3 py-2.5 text-center text-sm font-bold text-white hover:bg-accent-600"
          >
            {bookLink.label}
          </Link>
        </nav>
      )}
    </header>
  );
}
