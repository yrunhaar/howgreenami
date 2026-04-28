/**
 * Methodology-page long-form content per locale.
 */

import type { LocaleCode } from "../locales";

export interface MethodologyContent {
  readonly h1: string;
  readonly intro: string;
  readonly sections: readonly {
    readonly heading: string;
    readonly body: readonly string[];
  }[];
  readonly sources: readonly { readonly title: string; readonly url: string; readonly note: string }[];
  readonly assumptions: {
    readonly heading: string;
    readonly body: readonly string[];
  };
}

const en: MethodologyContent = {
  h1: "Methodology",
  intro:
    "How the calculator turns your answers into tonnes of CO2 equivalent, and where every number comes from. No magic, no proprietary models.",
  sections: [
    {
      heading: "1. Diet",
      body: [
        "We use per-capita annual diet emissions from Scarborough et al. (2023, Nature Food), based on the EPIC-Oxford cohort. Six diet categories: heavy meat (>100 g/day), medium meat (50-100 g/day), low meat (<50 g/day), pescatarian, vegetarian, vegan.",
        "Values: heavy 3.32, medium 2.42, low 1.88, pescatarian 1.66, vegetarian 1.39, vegan 1.05 tCO2e/yr. These cover food production from farm to retail; they do not include cooking energy (which sits under home electricity).",
      ],
    },
    {
      heading: "2. Driving",
      body: [
        "Per-km factors from UK DEFRA Greenhouse Gas Reporting Conversion Factors 2024:",
        "Petrol/diesel average: 0.171 kg CO2e/km. Hybrid: 0.121. Plug-in hybrid: 0.084.",
        "For electric cars we apply 0.18 kWh/km consumption and multiply by your country's grid carbon intensity, so the same EV in France emits roughly 6x less than in Poland.",
      ],
    },
    {
      heading: "3. Flying",
      body: [
        "Per-passenger-km factors from DEFRA, including a 1.9x multiplier for non-CO2 high-altitude effects (radiative forcing): short 0.158, medium 0.149, long 0.146 kg CO2e/passenger-km.",
        "Typical round-trip distances: short 1500 km, medium 5000 km, long 18000 km. So one long-haul return is roughly 2.6 tCO2 by itself.",
      ],
    },
    {
      heading: "4. Home heating + electricity",
      body: [
        "Heating fuels (DEFRA, kg CO2e/kWh): natural gas 0.183, oil 0.247, district heat 0.140 (EU average), wood/biomass 0.020 (short-cycle).",
        "If your heating is electric, we apply your country's grid intensity instead. Electric resistive heating in France emits ~3 g CO2/kWh of heat; in Poland it emits ~119 g.",
        "Defaults if you skip the kWh fields: 12,000 kWh/yr heating, 3,800 kWh/yr electricity. Both are then divided by household size.",
      ],
    },
    {
      heading: "5. Stuff",
      body: [
        "Lifestyle consumption (clothes, electronics, furniture, services) is grouped into three OECD-style buckets: light 0.6, moderate 1.4, heavy 2.6 tCO2e/yr.",
        "These are rough averages, not granular line items. The big variance in this category is fast fashion and electronics churn.",
      ],
    },
    {
      heading: "6. Country comparisons",
      body: [
        "Per-capita country averages are territorial CO2 (production-based) for 2022 from the Global Carbon Project via Our World in Data. Consumption-based (importing the embodied carbon of imports) values would be a few percent higher for net importers like the UK and a few percent lower for big exporters like China.",
        "Population values are from the World Bank for 2023.",
        "Grid carbon intensity is from IEA Electricity Information for 2023.",
      ],
    },
    {
      heading: "7. Percentile estimation",
      body: [
        "There is no public micro-data on personal carbon footprints by country. We approximate the within-country distribution as log-normal around the country mean, with sigma ~0.55 (calibrated against UK and US household survey distributions).",
        "Treat the percentile as a ranking signal, not a precise statistic. The total tCO2 number is more reliable than the percentile.",
      ],
    },
  ],
  sources: [
    {
      title: "Our World in Data — CO2 emissions",
      url: "https://ourworldindata.org/co2-emissions",
      note: "Per-capita and total CO2 by country, 1750-present. CC BY 4.0.",
    },
    {
      title: "Global Carbon Project",
      url: "https://www.globalcarbonproject.org/",
      note: "Source for the OWID country series.",
    },
    {
      title: "UK DEFRA Greenhouse Gas Reporting Conversion Factors 2024",
      url: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2024",
      note: "Activity emission factors for transport, fuels, heating. Open Government Licence v3.0.",
    },
    {
      title: "Scarborough et al. (2023), Nature Food 4, 565-574",
      url: "https://www.nature.com/articles/s43016-023-00795-w",
      note: "Per-capita diet emissions by dietary pattern.",
    },
    {
      title: "Poore and Nemecek (2018), Science 360, 987-992",
      url: "https://www.science.org/doi/10.1126/science.aaq0216",
      note: "Foundational meta-analysis of food-system emissions.",
    },
    {
      title: "IEA Electricity Information",
      url: "https://www.iea.org/data-and-statistics/data-product/electricity-information",
      note: "Country-level grid carbon intensity.",
    },
    {
      title: "World Bank — Population",
      url: "https://data.worldbank.org/indicator/SP.POP.TOTL",
      note: "Country populations, 2023.",
    },
    {
      title: "World Inequality Lab — Climate Inequality Report 2023",
      url: "https://wid.world/news-article/climate-inequality-report-2023/",
      note: "Top 1 / top 10 / bottom 50 global emitter averages.",
    },
    {
      title: "IPCC AR6 Working Group III",
      url: "https://www.ipcc.ch/report/ar6/wg3/",
      note: "Per-capita Paris-aligned budget for 1.5C pathway.",
    },
  ],
  assumptions: {
    heading: "Key assumptions and caveats",
    body: [
      "Territorial emissions only. Imports' embedded carbon is not added to your country.",
      "No offsets are subtracted. They live in a separate accounting universe.",
      "Household energy is split equally between residents.",
      "The 1.9x flight multiplier reflects current scientific consensus on aviation non-CO2 effects.",
      "All numbers are estimates. The smallest decimal in this report is more precise than the underlying data.",
    ],
  },
};

export const METHODOLOGY: Readonly<Record<LocaleCode, MethodologyContent>> = {
  en,
  es: en,
  de: en,
  fr: en,
  "zh-cn": en,
  ja: en,
  pt: en,
  it: en,
};
