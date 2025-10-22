import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import { WebVitals } from "@/components/WebVitals";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ricksenergy.com'),
  title: {
    default: 'Ricks Energy Ltd - Premier Oil & Gas Services in Africa',
    template: '%s | Ricks Energy Ltd'
  },
  description: "Leading African energy services provider delivering world-class inspection, welding, fabrication, NDT, rope access, and comprehensive maintenance solutions across West, East, and Southern Africa. Petroleum Commission PC 2025 registered.",
  keywords: [
    'Oil & Gas Ghana',
    'NDT Inspection Africa',
    'Rope Access Services',
    'Welding Fabrication',
    'IRATA Training',
    'Mechanical Maintenance',
    'Petroleum Commission Ghana',
    'Energy Services West Africa',
    'Industrial Inspection',
    'Renewable Energy Africa',
    'Offshore Services Ghana',
    'Takoradi Oil Services'
  ],
  authors: [{ name: 'Ricks Energy Ltd' }],
  creator: 'Ricks Energy Ltd',
  publisher: 'Ricks Energy Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GH',
    url: 'https://ricksenergy.com',
    siteName: 'Ricks Energy Ltd',
    title: 'Ricks Energy Ltd - Premier Oil & Gas Services in Africa',
    description: 'Leading African energy services provider delivering world-class inspection, welding, fabrication, NDT, and maintenance solutions.',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Ricks Energy Ltd',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ricks Energy Ltd - Premier Oil & Gas Services',
    description: 'Leading African energy services provider across West, East, and Southern Africa.',
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://ricksenergy.com',
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
        <WebVitals />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
