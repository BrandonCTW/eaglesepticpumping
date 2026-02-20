import { ImageResponse } from "next/og";

export const alt = "Eagle Septic Pumping | Professional Septic Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
            style={{ color: "white", fontSize: "22px", fontWeight: "700" }}
          >
            Eagle Septic Pumping
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: "white",
            fontSize: "58px",
            fontWeight: "800",
            lineHeight: "1.15",
            maxWidth: "900px",
          }}
        >
          Professional Septic Services in California&apos;s Central Valley
        </div>

        {/* Trust badges + green bar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div style={{ display: "flex", gap: "16px" }}>
            {["Licensed & Insured", "24/7 Emergency Response", "Free Estimates"].map(
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
