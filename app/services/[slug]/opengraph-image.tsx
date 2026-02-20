import { ImageResponse } from "next/og";
import { services, getServiceBySlug } from "@/lib/services";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const title = service?.title ?? "Septic Services";
  const description = service?.heroSubheadline ?? "Professional, licensed septic service in California's Central Valley.";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0c4a6e",
          padding: "60px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              backgroundColor: "#16a34a",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "26px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            E
          </div>
          <span
            style={{ color: "#bae6fd", fontSize: "20px", fontWeight: "600" }}
          >
            Eagle Septic Pumping
          </span>
        </div>

        {/* Service name */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              backgroundColor: "#16a34a",
              borderRadius: "8px",
              padding: "8px 20px",
              display: "flex",
              alignSelf: "flex-start",
            }}
          >
            <span style={{ color: "white", fontSize: "16px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Our Services
            </span>
          </div>
          <div
            style={{
              color: "white",
              fontSize: "60px",
              fontWeight: "800",
              lineHeight: "1.1",
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: "#bae6fd",
              fontSize: "24px",
              lineHeight: "1.4",
              maxWidth: "850px",
            }}
          >
            {description.length > 120 ? description.slice(0, 117) + "…" : description}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            height: "8px",
            backgroundColor: "#16a34a",
            borderRadius: "4px",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
