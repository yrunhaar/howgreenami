/**
 * Carbon emissions data per country.
 *
 * Sources:
 * - Per-capita CO2 (territorial, 2022): Our World in Data, Global Carbon Project (CC BY 4.0)
 *   https://ourworldindata.org/co2-emissions
 * - Population (2023, World Bank): https://data.worldbank.org/indicator/SP.POP.TOTL
 * - Electricity grid carbon intensity (gCO2/kWh, 2023): IEA Electricity Information,
 *   national grid emission factors
 *
 * Values are stored as numbers, not strings. tCO2 = metric tons of CO2 per person per year.
 */

export type CountryCode =
  | "US" | "CA" | "MX" | "BR" | "AR"
  | "GB" | "FR" | "DE" | "IT" | "ES" | "NL" | "BE" | "CH" | "AT" | "SE" | "NO" | "DK" | "FI" | "IE" | "PT" | "PL" | "CZ" | "GR" | "HU" | "RO"
  | "RU" | "TR" | "UA"
  | "CN" | "JP" | "KR" | "IN" | "ID" | "VN" | "TH" | "PH" | "MY" | "SG" | "PK" | "BD"
  | "AU" | "NZ"
  | "ZA" | "EG" | "NG" | "KE" | "MA"
  | "SA" | "AE" | "IL" | "QA";

export interface CountryData {
  readonly code: CountryCode;
  readonly name: string;
  readonly flag: string;
  readonly population: number;
  /** Per-capita CO2 emissions in tonnes per year (territorial, 2022). */
  readonly perCapitaCO2: number;
  /** Total CO2 emissions in million tonnes per year (2022). */
  readonly totalMtCO2: number;
  /** Electricity grid carbon intensity in gCO2 per kWh (2023). */
  readonly gridIntensityGCO2PerKWh: number;
  /** Currency code for income/spending displays. ISO 4217. */
  readonly currency: string;
  /** Default heating fuel for residential homes (most common). */
  readonly defaultHeatingFuel: HeatingFuel;
}

export type HeatingFuel = "gas" | "oil" | "electric" | "district" | "wood" | "none";

/**
 * Country reference data. 51 countries covering ~75% of world population
 * and ~90% of global emissions.
 *
 * Per-capita CO2 from Global Carbon Project / Our World in Data 2022 release,
 * accessed 2026-01.
 */
export const COUNTRIES: Readonly<Record<CountryCode, CountryData>> = {
  US: { code: "US", name: "United States", flag: "🇺🇸", population: 333_287_557, perCapitaCO2: 14.9, totalMtCO2: 4970, gridIntensityGCO2PerKWh: 369, currency: "USD", defaultHeatingFuel: "gas" },
  CA: { code: "CA", name: "Canada", flag: "🇨🇦", population: 38_929_902, perCapitaCO2: 14.2, totalMtCO2: 553, gridIntensityGCO2PerKWh: 116, currency: "CAD", defaultHeatingFuel: "gas" },
  MX: { code: "MX", name: "Mexico", flag: "🇲🇽", population: 128_455_567, perCapitaCO2: 3.3, totalMtCO2: 426, gridIntensityGCO2PerKWh: 423, currency: "MXN", defaultHeatingFuel: "gas" },
  BR: { code: "BR", name: "Brazil", flag: "🇧🇷", population: 215_313_498, perCapitaCO2: 2.4, totalMtCO2: 514, gridIntensityGCO2PerKWh: 105, currency: "BRL", defaultHeatingFuel: "electric" },
  AR: { code: "AR", name: "Argentina", flag: "🇦🇷", population: 46_234_830, perCapitaCO2: 4.0, totalMtCO2: 184, gridIntensityGCO2PerKWh: 351, currency: "ARS", defaultHeatingFuel: "gas" },

  GB: { code: "GB", name: "United Kingdom", flag: "🇬🇧", population: 67_736_802, perCapitaCO2: 4.7, totalMtCO2: 318, gridIntensityGCO2PerKWh: 235, currency: "GBP", defaultHeatingFuel: "gas" },
  FR: { code: "FR", name: "France", flag: "🇫🇷", population: 67_971_311, perCapitaCO2: 4.4, totalMtCO2: 299, gridIntensityGCO2PerKWh: 56, currency: "EUR", defaultHeatingFuel: "electric" },
  DE: { code: "DE", name: "Germany", flag: "🇩🇪", population: 83_797_985, perCapitaCO2: 8.1, totalMtCO2: 678, gridIntensityGCO2PerKWh: 385, currency: "EUR", defaultHeatingFuel: "gas" },
  IT: { code: "IT", name: "Italy", flag: "🇮🇹", population: 58_870_762, perCapitaCO2: 5.4, totalMtCO2: 318, gridIntensityGCO2PerKWh: 257, currency: "EUR", defaultHeatingFuel: "gas" },
  ES: { code: "ES", name: "Spain", flag: "🇪🇸", population: 47_778_340, perCapitaCO2: 5.0, totalMtCO2: 239, gridIntensityGCO2PerKWh: 230, currency: "EUR", defaultHeatingFuel: "gas" },
  NL: { code: "NL", name: "Netherlands", flag: "🇳🇱", population: 17_879_488, perCapitaCO2: 7.8, totalMtCO2: 139, gridIntensityGCO2PerKWh: 268, currency: "EUR", defaultHeatingFuel: "gas" },
  BE: { code: "BE", name: "Belgium", flag: "🇧🇪", population: 11_754_004, perCapitaCO2: 7.7, totalMtCO2: 91, gridIntensityGCO2PerKWh: 137, currency: "EUR", defaultHeatingFuel: "gas" },
  CH: { code: "CH", name: "Switzerland", flag: "🇨🇭", population: 8_796_669, perCapitaCO2: 4.0, totalMtCO2: 35, gridIntensityGCO2PerKWh: 44, currency: "CHF", defaultHeatingFuel: "oil" },
  AT: { code: "AT", name: "Austria", flag: "🇦🇹", population: 9_104_772, perCapitaCO2: 7.2, totalMtCO2: 65, gridIntensityGCO2PerKWh: 102, currency: "EUR", defaultHeatingFuel: "gas" },
  SE: { code: "SE", name: "Sweden", flag: "🇸🇪", population: 10_551_707, perCapitaCO2: 4.0, totalMtCO2: 42, gridIntensityGCO2PerKWh: 45, currency: "SEK", defaultHeatingFuel: "district" },
  NO: { code: "NO", name: "Norway", flag: "🇳🇴", population: 5_519_594, perCapitaCO2: 7.4, totalMtCO2: 41, gridIntensityGCO2PerKWh: 30, currency: "NOK", defaultHeatingFuel: "electric" },
  DK: { code: "DK", name: "Denmark", flag: "🇩🇰", population: 5_910_913, perCapitaCO2: 4.6, totalMtCO2: 27, gridIntensityGCO2PerKWh: 151, currency: "DKK", defaultHeatingFuel: "district" },
  FI: { code: "FI", name: "Finland", flag: "🇫🇮", population: 5_563_970, perCapitaCO2: 6.7, totalMtCO2: 37, gridIntensityGCO2PerKWh: 113, currency: "EUR", defaultHeatingFuel: "district" },
  IE: { code: "IE", name: "Ireland", flag: "🇮🇪", population: 5_127_170, perCapitaCO2: 7.0, totalMtCO2: 36, gridIntensityGCO2PerKWh: 296, currency: "EUR", defaultHeatingFuel: "gas" },
  PT: { code: "PT", name: "Portugal", flag: "🇵🇹", population: 10_409_704, perCapitaCO2: 4.0, totalMtCO2: 42, gridIntensityGCO2PerKWh: 187, currency: "EUR", defaultHeatingFuel: "electric" },
  PL: { code: "PL", name: "Poland", flag: "🇵🇱", population: 36_753_736, perCapitaCO2: 8.4, totalMtCO2: 309, gridIntensityGCO2PerKWh: 660, currency: "PLN", defaultHeatingFuel: "gas" },
  CZ: { code: "CZ", name: "Czech Republic", flag: "🇨🇿", population: 10_525_739, perCapitaCO2: 8.7, totalMtCO2: 92, gridIntensityGCO2PerKWh: 414, currency: "CZK", defaultHeatingFuel: "gas" },
  GR: { code: "GR", name: "Greece", flag: "🇬🇷", population: 10_394_055, perCapitaCO2: 6.0, totalMtCO2: 62, gridIntensityGCO2PerKWh: 332, currency: "EUR", defaultHeatingFuel: "oil" },
  HU: { code: "HU", name: "Hungary", flag: "🇭🇺", population: 9_643_048, perCapitaCO2: 4.7, totalMtCO2: 45, gridIntensityGCO2PerKWh: 207, currency: "HUF", defaultHeatingFuel: "gas" },
  RO: { code: "RO", name: "Romania", flag: "🇷🇴", population: 19_051_062, perCapitaCO2: 3.7, totalMtCO2: 71, gridIntensityGCO2PerKWh: 244, currency: "RON", defaultHeatingFuel: "gas" },

  RU: { code: "RU", name: "Russia", flag: "🇷🇺", population: 144_236_933, perCapitaCO2: 11.5, totalMtCO2: 1659, gridIntensityGCO2PerKWh: 354, currency: "RUB", defaultHeatingFuel: "district" },
  TR: { code: "TR", name: "Turkey", flag: "🇹🇷", population: 85_341_241, perCapitaCO2: 5.5, totalMtCO2: 469, gridIntensityGCO2PerKWh: 442, currency: "TRY", defaultHeatingFuel: "gas" },
  UA: { code: "UA", name: "Ukraine", flag: "🇺🇦", population: 36_744_634, perCapitaCO2: 4.4, totalMtCO2: 162, gridIntensityGCO2PerKWh: 246, currency: "UAH", defaultHeatingFuel: "district" },

  CN: { code: "CN", name: "China", flag: "🇨🇳", population: 1_410_710_000, perCapitaCO2: 8.0, totalMtCO2: 11_281, gridIntensityGCO2PerKWh: 581, currency: "CNY", defaultHeatingFuel: "district" },
  JP: { code: "JP", name: "Japan", flag: "🇯🇵", population: 125_124_989, perCapitaCO2: 8.3, totalMtCO2: 1037, gridIntensityGCO2PerKWh: 480, currency: "JPY", defaultHeatingFuel: "gas" },
  KR: { code: "KR", name: "South Korea", flag: "🇰🇷", population: 51_628_117, perCapitaCO2: 11.5, totalMtCO2: 593, gridIntensityGCO2PerKWh: 430, currency: "KRW", defaultHeatingFuel: "gas" },
  IN: { code: "IN", name: "India", flag: "🇮🇳", population: 1_417_173_173, perCapitaCO2: 2.0, totalMtCO2: 2841, gridIntensityGCO2PerKWh: 632, currency: "INR", defaultHeatingFuel: "none" },
  ID: { code: "ID", name: "Indonesia", flag: "🇮🇩", population: 277_534_122, perCapitaCO2: 2.7, totalMtCO2: 749, gridIntensityGCO2PerKWh: 718, currency: "IDR", defaultHeatingFuel: "none" },
  VN: { code: "VN", name: "Vietnam", flag: "🇻🇳", population: 100_300_000, perCapitaCO2: 3.4, totalMtCO2: 341, gridIntensityGCO2PerKWh: 510, currency: "VND", defaultHeatingFuel: "none" },
  TH: { code: "TH", name: "Thailand", flag: "🇹🇭", population: 71_800_000, perCapitaCO2: 3.7, totalMtCO2: 266, gridIntensityGCO2PerKWh: 506, currency: "THB", defaultHeatingFuel: "none" },
  PH: { code: "PH", name: "Philippines", flag: "🇵🇭", population: 117_337_368, perCapitaCO2: 1.5, totalMtCO2: 176, gridIntensityGCO2PerKWh: 645, currency: "PHP", defaultHeatingFuel: "none" },
  MY: { code: "MY", name: "Malaysia", flag: "🇲🇾", population: 33_200_000, perCapitaCO2: 8.4, totalMtCO2: 279, gridIntensityGCO2PerKWh: 615, currency: "MYR", defaultHeatingFuel: "none" },
  SG: { code: "SG", name: "Singapore", flag: "🇸🇬", population: 5_640_000, perCapitaCO2: 8.4, totalMtCO2: 47, gridIntensityGCO2PerKWh: 408, currency: "SGD", defaultHeatingFuel: "none" },
  PK: { code: "PK", name: "Pakistan", flag: "🇵🇰", population: 235_824_862, perCapitaCO2: 1.0, totalMtCO2: 236, gridIntensityGCO2PerKWh: 388, currency: "PKR", defaultHeatingFuel: "gas" },
  BD: { code: "BD", name: "Bangladesh", flag: "🇧🇩", population: 171_186_372, perCapitaCO2: 0.6, totalMtCO2: 103, gridIntensityGCO2PerKWh: 553, currency: "BDT", defaultHeatingFuel: "none" },

  AU: { code: "AU", name: "Australia", flag: "🇦🇺", population: 26_005_540, perCapitaCO2: 14.5, totalMtCO2: 377, gridIntensityGCO2PerKWh: 510, currency: "AUD", defaultHeatingFuel: "gas" },
  NZ: { code: "NZ", name: "New Zealand", flag: "🇳🇿", population: 5_122_600, perCapitaCO2: 6.1, totalMtCO2: 31, gridIntensityGCO2PerKWh: 117, currency: "NZD", defaultHeatingFuel: "electric" },

  ZA: { code: "ZA", name: "South Africa", flag: "🇿🇦", population: 60_414_500, perCapitaCO2: 7.0, totalMtCO2: 423, gridIntensityGCO2PerKWh: 825, currency: "ZAR", defaultHeatingFuel: "electric" },
  EG: { code: "EG", name: "Egypt", flag: "🇪🇬", population: 110_990_103, perCapitaCO2: 2.0, totalMtCO2: 222, gridIntensityGCO2PerKWh: 459, currency: "EGP", defaultHeatingFuel: "gas" },
  NG: { code: "NG", name: "Nigeria", flag: "🇳🇬", population: 218_541_212, perCapitaCO2: 0.5, totalMtCO2: 109, gridIntensityGCO2PerKWh: 421, currency: "NGN", defaultHeatingFuel: "none" },
  KE: { code: "KE", name: "Kenya", flag: "🇰🇪", population: 54_027_487, perCapitaCO2: 0.4, totalMtCO2: 22, gridIntensityGCO2PerKWh: 103, currency: "KES", defaultHeatingFuel: "none" },
  MA: { code: "MA", name: "Morocco", flag: "🇲🇦", population: 37_080_000, perCapitaCO2: 1.9, totalMtCO2: 70, gridIntensityGCO2PerKWh: 691, currency: "MAD", defaultHeatingFuel: "gas" },

  SA: { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", population: 36_408_820, perCapitaCO2: 17.0, totalMtCO2: 619, gridIntensityGCO2PerKWh: 700, currency: "SAR", defaultHeatingFuel: "none" },
  AE: { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", population: 9_441_129, perCapitaCO2: 21.8, totalMtCO2: 206, gridIntensityGCO2PerKWh: 510, currency: "AED", defaultHeatingFuel: "none" },
  IL: { code: "IL", name: "Israel", flag: "🇮🇱", population: 9_557_500, perCapitaCO2: 7.2, totalMtCO2: 69, gridIntensityGCO2PerKWh: 564, currency: "ILS", defaultHeatingFuel: "gas" },
  QA: { code: "QA", name: "Qatar", flag: "🇶🇦", population: 2_695_122, perCapitaCO2: 35.6, totalMtCO2: 96, gridIntensityGCO2PerKWh: 491, currency: "QAR", defaultHeatingFuel: "none" },
} as const;

export const COUNTRY_CODES = Object.keys(COUNTRIES) as CountryCode[];

/** Global / regional anchor values for comparisons. */
export const GLOBAL_ANCHORS = {
  /** World average per-capita CO2 (2022, tCO2/yr). */
  worldAverage: 4.7,
  /** IPCC 1.5C-aligned per-capita budget for 2030 (tCO2/yr). */
  parisAligned2030: 2.3,
  /** IPCC 1.5C-aligned per-capita budget for 2050 (tCO2/yr). */
  parisAligned2050: 0.7,
  /** Top 10% of global emitters average (Oxfam / WID Climate Inequality Report 2023, tCO2/yr). */
  top10Average: 31.0,
  /** Top 1% of global emitters average. */
  top1Average: 76.0,
  /** Bottom 50% of global emitters average. */
  bottom50Average: 1.4,
} as const;

export function getCountry(code: string): CountryData | null {
  if (!(code in COUNTRIES)) return null;
  return COUNTRIES[code as CountryCode];
}

export function isCountryCode(code: string): code is CountryCode {
  return code in COUNTRIES;
}
