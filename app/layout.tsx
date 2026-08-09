import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const display = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "O Códice das Possibilidades",
  description: "A crônica de Cosmo DeWitte — mago, adivinho e cartógrafo de possibilidades.",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${serif.variable} ${display.variable} ${sans.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
