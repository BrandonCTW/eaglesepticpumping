import type { Metadata } from "next";
import "./globals.css";
import CallbackWidget from "@/components/CallbackWidget";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
  metadataBase: new URL("https://eaglesepticpumping.com"),
  title: {
    default: "Eagle Septic Pumping | Professional Septic Services",
    template: "%s | Eagle Septic Pumping",
  },
  description:
    "Eagle Septic Pumping offers professional septic tank pumping, cleaning, inspection, and emergency services. Licensed, insured, and available 24/7. Get a free estimate today.",
  keywords: [
    "septic tank pumping",
    "septic cleaning",
    "septic inspection",
    "emergency septic service",
    "septic maintenance",
  ],
  openGraph: {
    type: "website",
    siteName: "Eagle Septic Pumping",
    url: "https://eaglesepticpumping.com",
  },
  twitter: {
    card: "summary_large_image",
    site: "@eagleseptic",
    creator: "@eagleseptic",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pb-[68px] lg:pb-0">
        {children}
        <CallbackWidget />
        <MobileCTABar />
      </body>
    </html>
  );
}
