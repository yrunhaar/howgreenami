import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SupportRail from "@/components/SupportRail";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { buildHreflangAlternates } from "@/lib/i18n/urls";
import { SITE_URL, SITE_NAME, SITE_OG_IMAGE } from "@/lib/seo";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "How big is my carbon footprint? | mycarbonfootprint.org",
    template: "%s | mycarbonfootprint.org",
  },
  description:
    "A free, open tool that turns your lifestyle into tonnes of CO2 per year, then puts that number next to your country average, the world average, and the Paris-aligned target.",
  keywords: [
    "carbon footprint calculator",
    "personal carbon footprint",
    "CO2 emissions per person",
    "Paris Agreement target",
    "climate impact",
    "diet carbon emissions",
    "flight carbon emissions",
    "household emissions",
    "carbon footprint by country",
    "1.5C target",
  ],
  alternates: {
    canonical: SITE_URL,
    languages: buildHreflangAlternates(SITE_URL, "/"),
  },
  openGraph: {
    type: "website",
    title: "How big is your carbon footprint?",
    description:
      "Diet, driving, flying, heating. See your tonnes of CO2 next to the country average and the climate target. Real numbers, no login.",
    siteName: SITE_NAME,
    locale: "en_US",
    url: SITE_URL,
    images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630, alt: "mycarbonfootprint.org" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How big is your carbon footprint?",
    description:
      "Real numbers, real comparisons. Tonnes of CO2 per year, alongside your country, the world, and the Paris target.",
    images: [SITE_OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    } catch(e) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  })();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
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
              name: SITE_NAME,
              description:
                "Free personal carbon footprint calculator. Compare your tonnes of CO2 to your country and to climate targets.",
              applicationCategory: "EnvironmentalApplication",
              operatingSystem: "Any",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <Navigation />
            <main className="flex-1">{children}</main>
            <SupportRail />
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
