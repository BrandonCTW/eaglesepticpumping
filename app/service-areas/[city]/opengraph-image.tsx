import { ImageResponse } from "next/og";
import { serviceAreas, getServiceArea } from "@/lib/serviceAreas";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return serviceAreas.map((a) => ({ city: a.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const area = getServiceArea(city);
  const cityName = area?.city ?? "Your Area";
  const county = area?.county ?? "Central Valley";
  const stateAbbr = area?.stateAbbr ?? "CA";

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

        {/* City info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              color: "#4ade80",
              fontSize: "20px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            {`${county} County · ${stateAbbr}`}
          </div>
          <div
            style={{
              color: "white",
              fontSize: "64px",
              fontWeight: "800",
              lineHeight: "1.05",
            }}
          >
            {`Septic Service in ${cityName}, ${stateAbbr}`}
          </div>
          <div
            style={{
              color: "#bae6fd",
              fontSize: "24px",
              lineHeight: "1.4",
            }}
          >
            Licensed pumping, cleaning, inspection & 24/7 emergency service
          </div>
        </div>

        {/* Trust badges + bar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div style={{ display: "flex", gap: "14px" }}>
            {["Same-Day Availability", "Upfront Pricing", "Locally Trusted"].map(
              (badge) => (
                <div
                  key={badge}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: "9999px",
                    padding: "10px 22px",
                    color: "#bae6fd",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  {badge}
                </div>
              )
            )}
          </div>
          <div
            style={{
              height: "8px",
              backgroundColor: "#16a34a",
              borderRadius: "4px",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
