import { ImageResponse } from "next/og";

export const alt = "Atlas Systems - Sistemas, páginas e automações para negócios modernos";
export const size = {
  width: 1200,
  height: 675,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
      style={{
        alignItems: "center",
        background:
          "radial-gradient(circle at 78% 18%, rgba(34, 211, 238, 0.28), transparent 30%), linear-gradient(135deg, #050816 0%, #070b14 58%, #0d1324 100%)",
        color: "#ffffff",
        display: "flex",
        fontFamily: "Arial, sans-serif",
        height: "100%",
        justifyContent: "center",
        overflow: "hidden",
        padding: 64,
        position: "relative",
        width: "100%",
      }}
      >
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          display: "flex",
          height: "100%",
          left: 0,
          opacity: 0.9,
          position: "absolute",
          top: 0,
          width: "100%",
        }}
      />

      <div
        style={{
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 42,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: 64,
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", gap: 20 }}>
          <div
            style={{
              alignItems: "center",
              background: "rgba(34, 211, 238, 0.11)",
              border: "1px solid rgba(34, 211, 238, 0.34)",
              borderRadius: 24,
              color: "#a5f3fc",
              display: "flex",
              fontSize: 30,
              fontWeight: 800,
              height: 76,
              justifyContent: "center",
              width: 76,
            }}
          >
            AS
          </div>
          <div style={{ color: "#ffffff", display: "flex", fontSize: 38, fontWeight: 800 }}>
            Atlas Systems
          </div>
        </div>

        <div
          style={{
            color: "#ffffff",
            display: "flex",
            fontSize: 72,
            fontWeight: 850,
            lineHeight: 1.04,
            marginTop: 64,
            maxWidth: 880,
          }}
        >
          Sistemas, páginas e automações
        </div>
        <div
          style={{
            color: "#dbeafe",
            display: "flex",
            fontSize: 42,
            fontWeight: 700,
            lineHeight: 1.12,
            marginTop: 18,
          }}
        >
          para negócios modernos
        </div>

        <div
          style={{
            alignItems: "center",
            color: "#a5f3fc",
            display: "flex",
            fontSize: 22,
            fontWeight: 700,
            gap: 14,
            marginTop: 58,
          }}
        >
          <div
            style={{
              background: "linear-gradient(90deg, #22d3ee, #38bdf8)",
              borderRadius: 999,
              display: "flex",
              height: 6,
              width: 190,
            }}
          />
          SaaS • Sistemas • Automações • Landing Pages
        </div>
      </div>
      </div>
    ),
    size,
  );
}
