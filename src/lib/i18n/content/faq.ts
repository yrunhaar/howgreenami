/**
 * FAQ-page content per locale.
 */

import type { LocaleCode } from "../locales";

export interface FaqEntry {
  readonly question: string;
  readonly answer: readonly string[];
}

export interface FaqContent {
  readonly h1: string;
  readonly intro: string;
  readonly entries: readonly FaqEntry[];
}

const en: FaqContent = {
  h1: "Frequently asked questions",
  intro: "Short, plain answers. If you do not see your question, open an issue on GitHub.",
  entries: [
    {
      question: "Is my data sent anywhere?",
      answer: [
        "No. Everything runs in your browser. There is no backend. The site is static HTML, CSS, and JavaScript served from a CDN. No analytics, no tracking pixels, no cookies you did not opt into.",
      ],
    },
    {
      question: "Why does my country average differ from what I see elsewhere?",
      answer: [
        "We use territorial (production-based) emissions for 2022 from Our World in Data. Some calculators use consumption-based emissions, which add the carbon embedded in imports. Net importers like the UK and Switzerland look bigger under consumption-based; big exporters like China look smaller.",
        "Production-based numbers are the comparable apples-to-apples baseline used by the IPCC and UNFCCC.",
      ],
    },
    {
      question: "Why is my electric car not zero?",
      answer: [
        "Because the electricity to charge it is not zero. We multiply the EV's per-km kWh by your country's grid carbon intensity. France (56 g/kWh) makes EVs nearly carbon-free; Poland (660 g/kWh) makes the same EV emit about as much as a small efficient petrol car.",
      ],
    },
    {
      question: "Why is the flight number so high?",
      answer: [
        "Two reasons. First, you are likely flying further than you remember; one return long-haul is 18,000 km of cabin time. Second, planes emit at altitude and that has a non-CO2 warming effect (contrails, NOx). DEFRA applies a 1.9x multiplier to ground-level CO2; we follow that.",
        "If you only count CO2, divide the flight number by 1.9.",
      ],
    },
    {
      question: "How accurate is the number?",
      answer: [
        "Plus or minus 25-40 percent on the total. Diet and home heating are the most reliable categories. Stuff (consumption) is the most uncertain because it is so behaviour-dependent.",
        "Use the number to compare lifestyle changes against each other, not as a forensic audit.",
      ],
    },
    {
      question: "What does the percentile mean?",
      answer: [
        "It tells you where your number falls in your country's distribution of personal footprints. Top 10% in the US has a much bigger absolute footprint than top 10% in Brazil; the percentile is country-relative.",
      ],
    },
    {
      question: "Should I add offsets?",
      answer: [
        "No. We deliberately do not subtract offsets. The science on most voluntary offset programmes is contested, and even the good ones do not erase tonnes from your gross emissions; they fund avoidance or removal elsewhere.",
        "If you buy offsets, count them as a separate climate action, not as cancellation.",
      ],
    },
    {
      question: "Is going vegan really the biggest move?",
      answer: [
        "For diet, yes (meat-heavy to vegan saves about 2.3 tCO2/yr). But for an average European, a single skipped long-haul flight saves about as much as a full year vegan. Insulating a leaky house and switching to a heat pump is bigger than either.",
        "The biggest leverage usually lives in housing and air travel, not the dinner plate.",
      ],
    },
    {
      question: "Why is consumption only three buckets?",
      answer: [
        "Because line-item consumption emissions are very noisy. A more granular form would imply a precision we do not have. Three buckets is honest about the resolution of the data.",
      ],
    },
    {
      question: "How can I help?",
      answer: [
        "Open issues for data fixes or features. Star the GitHub repo. If the tool is useful, a small Ko-fi tip lets me build more open educational tools.",
      ],
    },
  ],
};

export const FAQ: Readonly<Record<LocaleCode, FaqContent>> = {
  en,
  es: en,
  de: en,
  fr: en,
  "zh-cn": en,
  ja: en,
  pt: en,
  it: en,
};
