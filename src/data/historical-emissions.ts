/**
 * Historical per-capita CO2 emissions for select countries, 1960-2022.
 * Source: Our World in Data, Global Carbon Project (CC BY 4.0).
 *
 * Values are tonnes of CO2 per person per year (territorial emissions).
 * Decade averages used to keep the file compact while still telling the story.
 */

import type { CountryCode } from "./carbon-data";

export interface HistoricalPoint {
  readonly year: number;
  readonly perCapitaCO2: number;
}

/** Selected countries with rich historical data. Others fall back to the world series. */
export const HISTORICAL_PER_CAPITA: Partial<Record<CountryCode, readonly HistoricalPoint[]>> = {
  US: [
    { year: 1960, perCapitaCO2: 16.0 },
    { year: 1970, perCapitaCO2: 21.1 },
    { year: 1980, perCapitaCO2: 20.5 },
    { year: 1990, perCapitaCO2: 19.5 },
    { year: 2000, perCapitaCO2: 20.4 },
    { year: 2010, perCapitaCO2: 17.4 },
    { year: 2015, perCapitaCO2: 16.0 },
    { year: 2019, perCapitaCO2: 15.8 },
    { year: 2020, perCapitaCO2: 14.0 },
    { year: 2022, perCapitaCO2: 14.9 },
  ],
  GB: [
    { year: 1960, perCapitaCO2: 11.1 },
    { year: 1970, perCapitaCO2: 11.6 },
    { year: 1980, perCapitaCO2: 10.4 },
    { year: 1990, perCapitaCO2: 10.0 },
    { year: 2000, perCapitaCO2: 9.5 },
    { year: 2010, perCapitaCO2: 7.9 },
    { year: 2015, perCapitaCO2: 6.5 },
    { year: 2019, perCapitaCO2: 5.4 },
    { year: 2020, perCapitaCO2: 4.7 },
    { year: 2022, perCapitaCO2: 4.7 },
  ],
  DE: [
    { year: 1960, perCapitaCO2: 13.5 },
    { year: 1970, perCapitaCO2: 14.3 },
    { year: 1980, perCapitaCO2: 14.1 },
    { year: 1990, perCapitaCO2: 12.5 },
    { year: 2000, perCapitaCO2: 10.4 },
    { year: 2010, perCapitaCO2: 9.6 },
    { year: 2015, perCapitaCO2: 9.1 },
    { year: 2019, perCapitaCO2: 8.4 },
    { year: 2020, perCapitaCO2: 7.7 },
    { year: 2022, perCapitaCO2: 8.1 },
  ],
  FR: [
    { year: 1960, perCapitaCO2: 6.0 },
    { year: 1970, perCapitaCO2: 9.4 },
    { year: 1980, perCapitaCO2: 9.7 },
    { year: 1990, perCapitaCO2: 6.7 },
    { year: 2000, perCapitaCO2: 6.4 },
    { year: 2010, perCapitaCO2: 5.7 },
    { year: 2015, perCapitaCO2: 4.9 },
    { year: 2019, perCapitaCO2: 4.9 },
    { year: 2020, perCapitaCO2: 4.4 },
    { year: 2022, perCapitaCO2: 4.4 },
  ],
  CN: [
    { year: 1960, perCapitaCO2: 1.2 },
    { year: 1970, perCapitaCO2: 1.0 },
    { year: 1980, perCapitaCO2: 1.5 },
    { year: 1990, perCapitaCO2: 2.2 },
    { year: 2000, perCapitaCO2: 2.7 },
    { year: 2010, perCapitaCO2: 6.6 },
    { year: 2015, perCapitaCO2: 7.4 },
    { year: 2019, perCapitaCO2: 7.6 },
    { year: 2020, perCapitaCO2: 7.7 },
    { year: 2022, perCapitaCO2: 8.0 },
  ],
  IN: [
    { year: 1960, perCapitaCO2: 0.27 },
    { year: 1970, perCapitaCO2: 0.36 },
    { year: 1980, perCapitaCO2: 0.46 },
    { year: 1990, perCapitaCO2: 0.69 },
    { year: 2000, perCapitaCO2: 0.93 },
    { year: 2010, perCapitaCO2: 1.40 },
    { year: 2015, perCapitaCO2: 1.70 },
    { year: 2019, perCapitaCO2: 1.85 },
    { year: 2020, perCapitaCO2: 1.74 },
    { year: 2022, perCapitaCO2: 2.0 },
  ],
  JP: [
    { year: 1960, perCapitaCO2: 2.5 },
    { year: 1970, perCapitaCO2: 7.7 },
    { year: 1980, perCapitaCO2: 7.9 },
    { year: 1990, perCapitaCO2: 8.7 },
    { year: 2000, perCapitaCO2: 9.7 },
    { year: 2010, perCapitaCO2: 9.0 },
    { year: 2015, perCapitaCO2: 9.5 },
    { year: 2019, perCapitaCO2: 8.7 },
    { year: 2020, perCapitaCO2: 8.1 },
    { year: 2022, perCapitaCO2: 8.3 },
  ],
  AU: [
    { year: 1960, perCapitaCO2: 8.6 },
    { year: 1970, perCapitaCO2: 11.6 },
    { year: 1980, perCapitaCO2: 13.8 },
    { year: 1990, perCapitaCO2: 15.5 },
    { year: 2000, perCapitaCO2: 18.2 },
    { year: 2010, perCapitaCO2: 17.6 },
    { year: 2015, perCapitaCO2: 16.2 },
    { year: 2019, perCapitaCO2: 16.0 },
    { year: 2020, perCapitaCO2: 15.0 },
    { year: 2022, perCapitaCO2: 14.5 },
  ],
};

/** World per-capita CO2 (used as fallback and global comparison). */
export const HISTORICAL_WORLD: readonly HistoricalPoint[] = [
  { year: 1960, perCapitaCO2: 3.1 },
  { year: 1970, perCapitaCO2: 4.0 },
  { year: 1980, perCapitaCO2: 4.4 },
  { year: 1990, perCapitaCO2: 4.1 },
  { year: 2000, perCapitaCO2: 4.0 },
  { year: 2010, perCapitaCO2: 4.7 },
  { year: 2015, perCapitaCO2: 4.8 },
  { year: 2019, perCapitaCO2: 4.9 },
  { year: 2020, perCapitaCO2: 4.5 },
  { year: 2022, perCapitaCO2: 4.7 },
];
