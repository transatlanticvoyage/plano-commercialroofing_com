import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Plano Commercial Roofing | Top Commercial Roofing Contractor in DFW",
    template: "%s | Plano Commercial Roofing"
  },
  description: "Premier commercial roofing contractor in Plano, TX. Expert TPO, EPDM, metal roofing installation & repair. GAF Master Elite certified. 24/7 emergency service. Call (469) 555-0100",
  keywords: "commercial roofing Plano TX, commercial roof repair, TPO roofing, EPDM roofing, metal roofing, roof replacement Plano, emergency roof repair DFW",
  openGraph: {
    title: "Plano Commercial Roofing | Top Commercial Roofing Contractor in DFW",
    description: "Premier commercial roofing contractor in Plano, TX. Expert TPO, EPDM, metal roofing installation & repair. GAF Master Elite certified.",
    url: "https://planocommercialroofing.com",
    siteName: "Plano Commercial Roofing",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Plano Commercial Roofing | Top Commercial Roofing Contractor in DFW",
    description: "Premier commercial roofing contractor in Plano, TX. Expert TPO, EPDM, metal roofing installation & repair. GAF Master Elite certified.",
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://planocommercialroofing.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
