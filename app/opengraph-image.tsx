import { ImageResponse } from "next/og";

export const alt = "Okoye’s Log — technical notes and project stories by David Okoye";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f4ed",
          color: "#262626",
          padding: "72px 84px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: "0.08em" }}>
          BLOG.OKOYEDAVID.COM
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 700, letterSpacing: "-0.04em" }}>
            Okoye’s Log
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 34 }}>
            Technical notes from things I build.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24 }}>By David Okoye</div>
      </div>
    ),
    size,
  );
}
