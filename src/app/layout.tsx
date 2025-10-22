import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Ricks Energy Limited - Oil & Gas Services in Ghana",
  description: "Ghanaian-owned Oil & Gas service provider offering inspection, welding, fabrication, NDT, mechanical services, and maintenance for offshore and onshore operations in Ghana and beyond.",
  keywords: "Oil and Gas Ghana, NDT services, fabric maintenance, rigging services, mechanical services, Takoradi, offshore services, petroleum commission Ghana",
  authors: [{ name: "Ricks Energy Limited" }],
  openGraph: {
    title: "Ricks Energy Limited - Oil & Gas Services in Ghana",
    description: "Leading indigenous services provider of inspection, welding, fabrication, and maintenance for the Oil & Gas industry in Ghana.",
    type: "website",
    locale: "en_GH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
