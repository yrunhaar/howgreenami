import type { Metadata } from "next";
import { Playfair_Display, Fira_Code } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SupportRail from "@/components/SupportRail";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { buildHreflangAlternates } from "@/lib/i18n/urls";
import { SITE_URL } from "@/lib/seo";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://howgreenami.org"),
  title: {
    default: "How Green Am I? · Personal Carbon Footprint Calculator",
    template: "%s | How Green Am I?",
  },
  description:
    "Find out where you really stand on carbon. Diet, driving, flying, heating: see your tonnes of CO2 next to your country average, the world average, and the Paris-aligned target. Open data for 50+ countries, 8 languages, no tracking.",
  keywords: [
    "how green am I",
    "carbon footprint calculator",
    "personal carbon footprint",
    "CO2 emissions per person",
    "Paris Agreement target",
    "1.5C target",
    "climate impact calculator",
    "diet carbon emissions",
    "flight carbon emissions",
    "household emissions",
    "carbon footprint by country",
    "Our World in Data",
    "DEFRA emission factors",
    "carbon inequality",
    "climate inequality",
  ],
  alternates: {
    canonical: SITE_URL,
    languages: buildHreflangAlternates(SITE_URL, "/"),
  },
  openGraph: {
    type: "website",
    title: "How Green Am I? · See Where You Stand on Carbon",
    description:
      "Diet, driving, flying, heating. See your tonnes of CO2 next to your country average and the climate target. Real numbers, no login.",
    siteName: "How Green Am I?",
    locale: "en_US",
    url: "https://howgreenami.org",
    images: [
      {
        url: "https://howgreenami.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "How Green Am I? · Personal carbon footprint vs your country and the Paris target",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Green Am I? · Personal Carbon Footprint",
    description:
      "Real emission factors, real country averages, real climate targets. See your tonnes of CO2.",
    images: ["https://howgreenami.org/og-image.png"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
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
};

/**
 * Inline boot script. set theme before React hydration to prevent flash.
 * Resolution order:
 *   1. user's stored preference (localStorage 'theme'),
 *   2. system preference if explicitly dark (prefers-color-scheme: dark),
 *   3. default to light.
 */
const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      var theme = stored || 'light';
      document.documentElement.setAttribute('data-theme', theme);
    } catch(e) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${firaCode.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "How Green Am I?",
              description:
                "Interactive personal carbon footprint calculator with country, world, and Paris-aligned comparisons.",
              applicationCategory: "EnvironmentalApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen">
        <ThemeProvider>
          <LanguageProvider>
            <Navigation />
            {children}
            <SupportRail />
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
