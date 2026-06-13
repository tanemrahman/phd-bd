import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TopBar } from "@/components/top-bar";

const display = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.phd-bd.com"),
  title: {
    default: "PHD — Program for Helpless and Lagged Societies | Bangladesh",
    template: "%s | PHD Bangladesh",
  },
  description:
    "PHD is a Bangladeshi development and humanitarian organization advancing climate resilience, livelihoods, health, education and women's empowerment — serving 5 million+ vulnerable people across 41 districts.",
  keywords: [
    "PHD Bangladesh",
    "NGO Bangladesh",
    "humanitarian",
    "climate resilience",
    "livelihoods",
    "WASH",
    "women empowerment",
    "disaster risk reduction",
  ],
  openGraph: {
    type: "website",
    siteName: "PHD Bangladesh",
    title: "PHD — Building resilient, dignified communities across Bangladesh",
    description:
      "Serving 5 million+ vulnerable people across Bangladesh through climate resilience, livelihoods, health and humanitarian response.",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <TopBar />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
