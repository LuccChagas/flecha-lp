import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import Analytics from "@/components/Analytics";
import "./globals.css";

const pirulen = localFont({
  src: "../fonts/Pirulen-Regular.woff2",
  variable: "--font-pirulen",
  display: "swap",
  weight: "400",
  preload: true,
});

const sansation = localFont({
  src: [
    { path: "../fonts/Sansation-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/Sansation-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Sansation-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sansation",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nome} — ${site.tagline}`,
    template: `%s · ${site.nome}`,
  },
  description: site.descricao,
  keywords: [
    "tráfego pago",
    "gestor de tráfego",
    "marketing imobiliário",
    "anúncios para imobiliária",
    "leads imobiliários",
    "Meta Ads imóveis",
    "Google Ads imobiliário",
  ],
  authors: [{ name: site.nome }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.nome,
    title: `${site.nome} — ${site.tagline}`,
    description: site.descricao,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.nome} — ${site.tagline}`,
    description: site.descricao,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#003E52",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${pirulen.variable} ${sansation.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
