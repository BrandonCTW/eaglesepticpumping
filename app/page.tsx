import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import RecentPosts from "@/components/RecentPosts";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { PHONE, EMAIL } from "@/lib/services";

export const metadata: Metadata = {
  title: { absolute: "Eagle Septic Pumping | Modesto & Central Valley Septic Services" },
  description:
    "Licensed septic tank pumping, cleaning, inspection & 24/7 emergency service in Modesto, Turlock, Ceres, and 20+ Central Valley communities. Free estimates — call today.",
  alternates: {
    canonical: "https://eaglesepticpumping.com",
  },
  openGraph: {
    title: "Eagle Septic Pumping | Modesto & Central Valley Septic Services",
    description:
      "Licensed septic tank pumping, cleaning, inspection & 24/7 emergency service in Modesto, Turlock, Ceres, and 20+ Central Valley communities. Free estimates.",
    url: "https://eaglesepticpumping.com",
    type: "website",
  },
  twitter: {
    title: "Eagle Septic Pumping | Modesto & Central Valley Septic Services",
    description:
      "Licensed septic tank pumping, cleaning & 24/7 emergency service across 20+ Central Valley communities. Free estimates.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Plumber"],
  name: "Eagle Septic Pumping",
  url: "https://eaglesepticpumping.com",
  telephone: PHONE,
  email: EMAIL,
  description:
    "Professional septic tank pumping, cleaning, inspection, and 24/7 emergency service for homeowners and businesses in California's Central Valley. Licensed and insured.",
  priceRange: "$$",
  areaServed: [
    { "@type": "City", "name": "Modesto", "sameAs": "https://www.wikidata.org/wiki/Q486974" },
    { "@type": "City", "name": "Turlock" },
    { "@type": "City", "name": "Ceres" },
    { "@type": "City", "name": "Riverbank" },
    { "@type": "City", "name": "Oakdale" },
    { "@type": "City", "name": "Patterson" },
    { "@type": "City", "name": "Waterford" },
    { "@type": "City", "name": "Hughson" },
    { "@type": "City", "name": "Escalon" },
    { "@type": "City", "name": "Newman" },
    { "@type": "City", "name": "Atwater" },
    { "@type": "City", "name": "Merced" },
    { "@type": "City", "name": "Stockton" },
    { "@type": "City", "name": "Tracy" },
    { "@type": "City", "name": "Manteca" },
    { "@type": "City", "name": "Ripon" },
    { "@type": "City", "name": "Los Banos" },
    { "@type": "City", "name": "Livingston" },
    { "@type": "City", "name": "Gustine" },
    { "@type": "City", "name": "Denair" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Septic Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Septic Tank Pumping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tank Cleaning & Maintenance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Septic Inspections" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "24/7 Emergency Septic Service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drain Field Repair & Restoration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "New Septic System Installation" } },
    ],
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Eagle Septic Pumping",
  url: "https://eaglesepticpumping.com",
  description:
    "Professional septic tank pumping, cleaning, inspection, and 24/7 emergency service for homeowners and businesses in California's Central Valley.",
  publisher: {
    "@type": "LocalBusiness",
    name: "Eagle Septic Pumping",
    url: "https://eaglesepticpumping.com",
    telephone: PHONE,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://eaglesepticpumping.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <ServiceArea />
        <FAQ />
        <RecentPosts />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
