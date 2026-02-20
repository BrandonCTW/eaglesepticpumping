import { ImageResponse } from "next/og";
import { posts, getPostBySlug } from "@/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? "Septic System Guide";
  const category = post?.category ?? "Guide";
  const excerpt = post?.excerpt ?? "";

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

        {/* Post info */}
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
            <span
              style={{
                color: "white",
                fontSize: "16px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {category}
            </span>
          </div>
          <div
            style={{
              color: "white",
              fontSize: title.length > 60 ? "46px" : "58px",
              fontWeight: "800",
              lineHeight: "1.1",
              maxWidth: "950px",
            }}
          >
            {title}
          </div>
          {excerpt && (
            <div
              style={{
                color: "#bae6fd",
                fontSize: "22px",
                lineHeight: "1.4",
                maxWidth: "850px",
              }}
            >
              {excerpt.length > 130 ? excerpt.slice(0, 127) + "…" : excerpt}
            </div>
          )}
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
