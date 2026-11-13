import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const dynamic = "force-static";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F4F4F5",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#0E7490",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {site.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              color: "#18181B",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#71717A",
              maxWidth: 820,
              lineHeight: 1.35,
            }}
          >
            {site.tagline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#A1A1AA",
            fontSize: 20,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span>{site.location}</span>
          <span>Web · Algo · AWS · DNS</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
