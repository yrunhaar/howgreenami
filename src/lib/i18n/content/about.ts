/**
 * About-page long-form content per locale.
 * English is canonical; other locales fall back to English when not yet
 * translated (matches the site's progressive translation policy).
 */

import type { LocaleCode } from "../locales";

export interface AboutContent {
  readonly h1: string;
  readonly intro: string;
  readonly howItWorks: {
    readonly heading: string;
    readonly body: string[];
  };
  readonly why: {
    readonly heading: string;
    readonly body: string[];
  };
  readonly limits: {
    readonly heading: string;
    readonly body: string[];
  };
  readonly contact: {
    readonly heading: string;
    readonly body: string;
  };
}

const en: AboutContent = {
  h1: "About mycarbonfootprint.org",
  intro:
    "This is a free, open tool that turns your year of choices into a single number: tonnes of CO2 equivalent. It places that number next to your country average, the world average, and the Paris-aligned target for 2030. No login. No tracking. Static pages.",
  howItWorks: {
    heading: "How it works",
    body: [
      "You answer four short questions: what you eat, how you travel, how your home is heated and lit, and roughly how much stuff you buy.",
      "Each answer turns into kilograms of CO2 using emission factors from public sources. Diet uses peer-reviewed cohort estimates. Transport and heating use the UK DEFRA conversion factors. Electricity uses your country grid's carbon intensity from the IEA.",
      "We sum the categories, divide household energy by household size, and round to one decimal place.",
      "The percentile is an estimate of where your number falls in your country's personal-footprint distribution, modelled as a log-normal around the country mean. It is a ranking signal, not a survey.",
    ],
  },
  why: {
    heading: "Why this exists",
    body: [
      "Most carbon calculators either ask too many questions or hand-wave the math. The numbers behind them are not always traceable.",
      "We open-source the data and the math. Every emission factor links back to a public source. The calculator runs entirely in your browser; nothing is sent anywhere.",
      "If you find a number that looks wrong, please open an issue on GitHub.",
    ],
  },
  limits: {
    heading: "What this is not",
    body: [
      "It is not a life cycle assessment. It is a back-of-the-envelope estimate that is good enough to compare lifestyles and bad enough to be worth scrutinizing.",
      "Personal footprints are part of the picture. The bigger lever is collective: how the grid is built, how cities are zoned, how we tax pollution. Voting and where you bank shape the system you live in.",
      "Offsets are not subtracted from your number. We treat them as separate from your gross emissions for clarity.",
    ],
  },
  contact: {
    heading: "Who made this",
    body:
      "Yohan Runhaar (yohanrunhaar.com), with help from open data communities. Same family as howpoorami.org and canIaffordahouse.org.",
  },
};

export const ABOUT: Readonly<Record<LocaleCode, AboutContent>> = {
  en,
  es: en,
  de: en,
  fr: en,
  "zh-cn": en,
  ja: en,
  pt: en,
  it: en,
};
