import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EstimateWizard from "@/components/EstimateWizard";

export const metadata: Metadata = {
  title: "Free Septic Cost Estimator — Instant Price Range",
  description:
    "Get an instant personalized estimate for septic tank pumping, cleaning, inspection, or emergency service. Answer 3 quick questions and see your cost range — free, no obligation.",
  alternates: {
    canonical: "https://eaglesepticpumping.com/estimate",
  },
  openGraph: {
    title: "Free Septic Cost Estimator | Eagle Septic Pumping",
    description:
      "Personalized septic service estimates in under 60 seconds. No commitment required.",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eaglesepticpumping.com" },
    { "@type": "ListItem", position: 2, name: "Get an Estimate", item: "https://eaglesepticpumping.com/estimate" },
  ],
};

export default function EstimatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <EstimateWizard />
      <Footer />
    </>
  );
}
