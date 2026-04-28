/**
 * Emission factors for individual lifestyle activities.
 *
 * All values in kg CO2e (CO2-equivalent).
 *
 * Sources:
 * - Transport: UK DEFRA Greenhouse Gas Reporting Conversion Factors 2024
 *   https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2024
 *   (Open Government Licence v3.0)
 * - Diet: Poore J. and Nemecek T. (2018), "Reducing food's environmental impacts
 *   through producers and consumers", Science 360, 987-992. Per-capita annual diet
 *   emissions from Scarborough et al. (2023), Nature Food 4, 565-574.
 * - Heating fuels: DEFRA factors per kWh of energy delivered.
 * - Electricity: Country-specific grid intensity from `carbon-data.ts`.
 *
 * Values are conservative central estimates; real-world values vary by vehicle,
 * supply chain, and behaviour.
 */

export type DietType = "vegan" | "vegetarian" | "pescatarian" | "low_meat" | "medium_meat" | "heavy_meat";

/**
 * Annual food-system emissions per capita by diet type (tCO2e/yr).
 * Source: Scarborough et al. 2023 (UK cohort, EPIC-Oxford), values rounded.
 */
export const DIET_EMISSIONS_T_CO2_PER_YEAR: Readonly<Record<DietType, number>> = {
  vegan: 1.05,
  vegetarian: 1.39,
  pescatarian: 1.66,
  low_meat: 1.88,
  medium_meat: 2.42,
  heavy_meat: 3.32,
};

export type CarFuel = "petrol" | "diesel" | "hybrid" | "plugin_hybrid" | "electric" | "none";

/**
 * Per-km CO2e emissions for a car of average size.
 * Petrol/diesel from DEFRA average. Electric depends on grid intensity—
 * we apply 0.18 kWh/km consumption then multiply by grid factor.
 */
export const CAR_KG_CO2_PER_KM: Readonly<Record<Exclude<CarFuel, "electric" | "none">, number>> = {
  petrol: 0.171,
  diesel: 0.171,
  hybrid: 0.121,
  plugin_hybrid: 0.084,
};

/** Average passenger-EV consumption: 0.18 kWh/km. */
export const EV_KWH_PER_KM = 0.18;

/**
 * Flight emission factors from DEFRA (per passenger-km, with radiative forcing).
 * Long-haul includes higher altitude impact.
 */
export const FLIGHT_KG_CO2_PER_KM = {
  /** <463 km (e.g. London-Paris). */
  short: 0.158,
  /** 463-3700 km (e.g. London-Athens). */
  medium: 0.149,
  /** >3700 km (e.g. London-NYC). */
  long: 0.146,
} as const;

/** Approximate one-way distances (km) used to translate "flights/year" inputs. */
export const FLIGHT_TYPICAL_DISTANCE_KM = {
  short: 750,
  medium: 2500,
  long: 9000,
} as const;

/** Public transport per-passenger-km (DEFRA UK averages). */
export const TRANSIT_KG_CO2_PER_KM = {
  bus: 0.105,
  rail: 0.041,
  metro: 0.029,
  taxi: 0.150,
} as const;

/**
 * Heating fuel kg CO2e per kWh of heat delivered to the home.
 * Excludes electricity (handled per country grid).
 */
export const HEATING_KG_CO2_PER_KWH = {
  gas: 0.183,
  oil: 0.247,
  /** District heating average across EU; varies widely. */
  district: 0.140,
  /** Wood/biomass: short-cycle carbon, treated as non-fossil. */
  wood: 0.020,
  none: 0,
} as const;

/**
 * Approximate annual energy consumption in a typical home (kWh/yr).
 * Used as a default when the user does not supply their own number.
 *
 * Heating: ~12,000 kWh/yr for an average detached house in temperate climate.
 * Electricity (non-heating): ~3,800 kWh/yr for a 2-person household.
 */
export const HOME_DEFAULTS = {
  heatingKWhPerYear: 12_000,
  electricityKWhPerYear: 3_800,
} as const;

/**
 * Lifestyle "stuff" emissions (clothes, electronics, furniture, services).
 * Per-capita averages by spending intensity (rough OECD lifestyle estimates).
 */
export const CONSUMPTION_T_CO2_PER_YEAR = {
  light: 0.6,
  moderate: 1.4,
  heavy: 2.6,
} as const;

export type ConsumptionLevel = keyof typeof CONSUMPTION_T_CO2_PER_YEAR;
