import type { Metadata, Viewport } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Astúries 2026 · Família Avellà",
  description: "Guia interactiva del viatge familiar a Astúries del 16 al 23 d’agost de 2026.",
  icons: { icon: `${basePath}/favicon.svg`, shortcut: `${basePath}/favicon.svg` },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0b3f38" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ca"><body>{children}</body></html>;
}

