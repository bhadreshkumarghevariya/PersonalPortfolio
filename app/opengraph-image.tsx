import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#131720",
          color: "#f4f5f7",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#8ea2ff", fontSize: 30 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "#8ea2ff",
              display: "flex",
            }}
          />
          {siteConfig.name.split(" ")[0].toLowerCase()}.sec
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 600, letterSpacing: -2 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 40, color: "#8ea2ff" }}>{siteConfig.role}</div>
          <div style={{ fontSize: 28, color: "#a9b1c2", maxWidth: 900 }}>
            Threat detection · monitoring · incident response
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
