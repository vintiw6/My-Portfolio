import type { Metadata, Viewport } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "System 26 — Vinayak Tiwari",
  description:
    "Vinayak Tiwari's portfolio, reimagined as a Windows XP-style desktop. ML Engineer and Data Scientist.",
};

export const viewport: Viewport = {
  themeColor: "#245edb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={vt323.variable}>{children}</body>
    </html>
  );
}
