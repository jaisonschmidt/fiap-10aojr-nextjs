import { ImageResponse } from "next/og";
import { resume } from "@/data/resume";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const { profile } = resume;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          color: "#171717",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700 }}>{profile.name}</div>
        <div style={{ fontSize: 36, color: "#52525b", marginTop: 12 }}>
          {profile.role}
        </div>
      </div>
    ),
    size,
  );
}
