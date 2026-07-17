import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "../src/styles/globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ouestwebcalvados.netlify.app"),
  title: {
    default: "Ouest Web Calvados — Création de sites vitrines en Normandie",
    template: "%s | Ouest Web Calvados",
  },
  description:
    "Sites vitrines pour artisans, commerces et indépendants du Calvados. Tarifs clairs, livraison en 7 jours et référencement local.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Ouest Web Calvados",
    title: "Ouest Web Calvados — Sites vitrines en Normandie",
    description:
      "Un site clair, livré en 7 jours, pour présenter votre activité et faciliter la prise de contact.",
    images: [{ url: "/projects/vire-et-son-grenier-site.png", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f0f0f0",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
