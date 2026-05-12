import { ImageResponse } from "next/og";

export const alt = "Atlas Systems - Sistemas, páginas e automações para negócios modernos";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
      style={{
        alignItems: "stretch",
        background: "#050816",
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
          background:
            "radial-gradient(circle at 78% 18%, rgba(34, 211, 238, 0.26), transparent 30%), radial-gradient(circle at 14% 82%, rgba(56, 189, 248, 0.18), transparent 28%), linear-gradient(135deg, #050816 0%, #070b14 55%, #0d1324 100%)",
          display: "flex",
          height: "100%",
          left: 0,
          position: "absolute",
          top: 0,
          width: "100%",
        }}
      />
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
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
          boxShadow: "0 34px 100px rgba(0,0,0,0.42)",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: 56,
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
          <div style={{ alignItems: "center", display: "flex", gap: 18 }}>
            <div
              style={{
                alignItems: "center",
                background: "rgba(34, 211, 238, 0.11)",
                border: "1px solid rgba(34, 211, 238, 0.34)",
                borderRadius: 22,
                color: "#a5f3fc",
                display: "flex",
                fontSize: 28,
                fontWeight: 800,
                height: 72,
                justifyContent: "center",
                width: 72,
              }}
            >
              AS
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: "#ffffff", fontSize: 34, fontWeight: 800 }}>
                Atlas Systems
              </div>
              <div style={{ color: "#aab4c5", fontSize: 20, marginTop: 6 }}>
                Tecnologia para negócios modernos
              </div>
            </div>
          </div>

          <div
            style={{
              background: "rgba(34, 211, 238, 0.10)",
              border: "1px solid rgba(34, 211, 238, 0.26)",
              borderRadius: 999,
              color: "#a5f3fc",
              display: "flex",
              fontSize: 18,
              fontWeight: 700,
              padding: "14px 22px",
            }}
          >
            SaaS • Sistemas • Automações
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 850 }}>
          <div
            style={{
              color: "#ffffff",
              display: "flex",
              fontSize: 74,
              fontWeight: 850,
              letterSpacing: -1,
              lineHeight: 1.02,
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
              background: "linear-gradient(90deg, #22d3ee, #38bdf8)",
              borderRadius: 999,
              display: "flex",
              height: 6,
              marginTop: 34,
              width: 260,
            }}
          />
        </div>

        <div style={{ alignItems: "center", display: "flex", gap: 18 }}>
          {["Landing Pages", "Agendamentos", "Dashboards", "Integrações"].map((item) => (
            <div
              key={item}
              style={{
                background: "rgba(255,255,255,0.055)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: 18,
                color: "#cbd5e1",
                display: "flex",
                fontSize: 20,
                fontWeight: 650,
                padding: "16px 20px",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      </div>
    ),
    size,
  );
}
