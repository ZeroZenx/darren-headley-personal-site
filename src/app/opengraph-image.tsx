import { ImageResponse } from "next/og";

export const alt = "Darren Headley - AI and Digital Transformation Executive";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(115deg, #03060b 0%, #07111f 48%, #02050a 100%)",
          color: "white",
          display: "flex",
          height: "100%",
          overflow: "hidden",
          padding: "64px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(214,174,95,0.85), rgba(14,165,168,0.65), transparent)",
            height: 2,
            left: 64,
            position: "absolute",
            top: 302,
            width: 640,
          }}
        />
        <div
          style={{
            border: "1px solid rgba(214,174,95,0.24)",
            height: 520,
            position: "absolute",
            right: -40,
            top: 55,
            transform: "rotate(-8deg)",
            width: 520,
          }}
        />
        <div
          style={{
            border: "1px solid rgba(14,165,168,0.22)",
            height: 410,
            position: "absolute",
            right: 80,
            top: 100,
            transform: "rotate(12deg)",
            width: 410,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 760 }}>
          <div
            style={{
              color: "#d6ae5f",
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            AI & Digital
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 0.95,
              marginTop: 18,
              textTransform: "uppercase",
            }}
          >
            Transformation Executive
          </div>
          <div
            style={{
              color: "#d6ae5f",
              fontSize: 42,
              fontWeight: 700,
              marginTop: 34,
            }}
          >
            Darren Headley
          </div>
          <div
            style={{
              color: "#d7dee9",
              fontSize: 28,
              lineHeight: 1.35,
              marginTop: 22,
            }}
          >
            Cybersecurity | Enterprise Technology | Innovation Leadership
          </div>
        </div>
      </div>
    ),
    size,
  );
}
