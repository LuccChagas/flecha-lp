import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = `${site.nome} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [pirulen, sansation, simbolo] = await Promise.all([
    readFile(join(process.cwd(), "src/fonts/Pirulen-Regular.otf")),
    readFile(join(process.cwd(), "src/fonts/Sansation-Regular.ttf")),
    readFile(join(process.cwd(), "public/brand/simbolo-branco.png")),
  ]);

  const simboloUri = `data:image/png;base64,${simbolo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #00506b 0%, #003043 48%, #001a24 100%)",
          fontFamily: "Sansation",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={simboloUri} alt="" width={104} height={104} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Pirulen",
              fontSize: 62,
              lineHeight: 1.1,
              color: "#F0EDE4",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
            }}
          >
            Leads que viram visita.
          </div>
          <div
            style={{
              fontFamily: "Pirulen",
              fontSize: 62,
              lineHeight: 1.1,
              color: "#8191A0",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
            }}
          >
            Visita que vira venda.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(240,237,228,0.18)",
            paddingTop: 32,
          }}
        >
          <div
            style={{
              fontFamily: "Pirulen",
              fontSize: 24,
              color: "#F0EDE4",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            Flecha Performance
          </div>
          <div style={{ fontSize: 24, color: "#8191A0" }}>
            Tráfego pago · Mercado imobiliário
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Pirulen", data: pirulen, style: "normal", weight: 400 },
        { name: "Sansation", data: sansation, style: "normal", weight: 400 },
      ],
    },
  );
}
