import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "How Green Am I? — personal carbon footprint vs your country and the Paris-aligned target";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          background: "linear-gradient(135deg, #f5f0eb 0%, #ece5dd 100%)",
          color: "#1c1917",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 96, marginBottom: 24 }}>🌱</div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          How Green Am I?
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#44403c",
            marginTop: 28,
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Personal carbon footprint vs your country and the Paris-aligned target
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#78716c",
            marginTop: 56,
            display: "flex",
            gap: 32,
          }}
        >
          <span>50+ countries</span>
          <span>·</span>
          <span>8 languages</span>
          <span>·</span>
          <span>Open data</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
