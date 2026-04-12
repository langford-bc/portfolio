import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Deen Karim — Communications Strategist",
  description:
    "Portfolio of Deen Karim — communications strategist and editorial leader based in Hamburg, Germany. 20+ years helping organisations in technology, healthcare, financial services, and energy communicate with clarity and credibility.",
  openGraph: {
    title: "Deen Karim — Communications Strategist",
    description:
      "Communications strategist and editorial leader based in Hamburg. I help companies in competitive and regulated sectors solve complex business challenges through editorial-quality content and brand strategy.",
    url: "https://deen-karim.netlify.app",
    siteName: "Deen Karim",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
