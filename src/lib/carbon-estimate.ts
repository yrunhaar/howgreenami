/**
 * Carbon footprint estimation engine.
 *
 * Takes a structured `FootprintInputs` object describing the user's lifestyle and
 * returns a `FootprintResult` with category breakdown and total tCO2e/year.
 *
 * Activity factors come from `data/emission-factors.ts`. Country grid intensity
 * comes from `data/carbon-data.ts`.
 *
 * All math is pure and deterministic; no side effects, no I/O.
 */

import {
  CAR_KG_CO2_PER_KM,
  CONSUMPTION_T_CO2_PER_YEAR,
  DIET_EMISSIONS_T_CO2_PER_YEAR,
  EV_KWH_PER_KM,
  FLIGHT_KG_CO2_PER_KM,
  FLIGHT_TYPICAL_DISTANCE_KM,
  HEATING_KG_CO2_PER_KWH,
  HOME_DEFAULTS,
  TRANSIT_KG_CO2_PER_KM,
  type CarFuel,
  type ConsumptionLevel,
  type DietType,
} from "@/data/emission-factors";
import type { CountryData, HeatingFuel } from "@/data/carbon-data";

export interface FootprintInputs {
  readonly diet: DietType;
  readonly car: {
    readonly kmPerYear: number;
    readonly fuel: CarFuel;
  };
  readonly flights: {
    readonly short: number;
    readonly medium: number;
    readonly long: number;
  };
  readonly transit: {
    readonly kmPerYearRail: number;
    readonly kmPerYearBus: number;
  };
  readonly home: {
    readonly householdSize: number;
    readonly heatingFuel: HeatingFuel;
    /** kWh/yr — leave 0 to use country defaults. */
    readonly heatingKWhPerYear: number;
    /** kWh/yr — leave 0 to use country defaults. */
    readonly electricityKWhPerYear: number;
  };
  readonly consumption: ConsumptionLevel;
}

export interface CategoryBreakdown {
  readonly diet: number;
  readonly transport: number;
  readonly flights: number;
  readonly home: number;
  readonly consumption: number;
}

export interface FootprintResult {
  /** Total annual emissions, tonnes CO2e. */
  readonly totalTCO2: number;
  /** Per-category breakdown, tCO2e. */
  readonly breakdown: CategoryBreakdown;
}

/** Sensible defaults for a "median" lifestyle in the given country. */
export function defaultInputs(country: CountryData): FootprintInputs {
  return {
    diet: "medium_meat",
    car: {
      kmPerYear: 12_000,
      fuel: country.code === "NL" || country.code === "JP" ? "petrol" : "petrol",
    },
    flights: {
      short: 2,
      medium: 1,
      long: 0,
    },
    transit: {
      kmPerYearRail: 1_000,
      kmPerYearBus: 500,
    },
    home: {
      householdSize: 2,
      heatingFuel: country.defaultHeatingFuel,
      heatingKWhPerYear: 0,
      electricityKWhPerYear: 0,
    },
    consumption: "moderate",
  };
}

export function emptyInputs(country: CountryData): FootprintInputs {
  return {
    diet: "medium_meat",
    car: { kmPerYear: 0, fuel: "petrol" },
    flights: { short: 0, medium: 0, long: 0 },
    transit: { kmPerYearRail: 0, kmPerYearBus: 0 },
    home: {
      householdSize: 1,
      heatingFuel: country.defaultHeatingFuel,
      heatingKWhPerYear: 0,
      electricityKWhPerYear: 0,
    },
    consumption: "light",
  };
}

/** Compute total tCO2e/yr for the given inputs, using country grid intensity. */
export function computeFootprint(
  inputs: FootprintInputs,
  country: CountryData,
): FootprintResult {
  const diet = DIET_EMISSIONS_T_CO2_PER_YEAR[inputs.diet];

  const transport = computeTransport(inputs.car, inputs.transit, country);
  const flights = computeFlights(inputs.flights);
  const home = computeHome(inputs.home, country);
  const consumption = CONSUMPTION_T_CO2_PER_YEAR[inputs.consumption];

  const total = diet + transport + flights + home + consumption;

  return {
    totalTCO2: round1(total),
    breakdown: {
      diet: round1(diet),
      transport: round1(transport),
      flights: round1(flights),
      home: round1(home),
      consumption: round1(consumption),
    },
  };
}

function computeTransport(
  car: FootprintInputs["car"],
  transit: FootprintInputs["transit"],
  country: CountryData,
): number {
  let kgCO2 = 0;

  if (car.fuel === "electric") {
    kgCO2 += car.kmPerYear * EV_KWH_PER_KM * (country.gridIntensityGCO2PerKWh / 1000);
  } else if (car.fuel !== "none") {
    kgCO2 += car.kmPerYear * CAR_KG_CO2_PER_KM[car.fuel];
  }

  kgCO2 += transit.kmPerYearRail * TRANSIT_KG_CO2_PER_KM.rail;
  kgCO2 += transit.kmPerYearBus * TRANSIT_KG_CO2_PER_KM.bus;

  return kgCO2 / 1000;
}

function computeFlights(flights: FootprintInputs["flights"]): number {
  const km =
    flights.short * FLIGHT_TYPICAL_DISTANCE_KM.short * 2 +
    flights.medium * FLIGHT_TYPICAL_DISTANCE_KM.medium * 2 +
    flights.long * FLIGHT_TYPICAL_DISTANCE_KM.long * 2;

  const kgCO2 =
    flights.short * FLIGHT_TYPICAL_DISTANCE_KM.short * 2 * FLIGHT_KG_CO2_PER_KM.short +
    flights.medium * FLIGHT_TYPICAL_DISTANCE_KM.medium * 2 * FLIGHT_KG_CO2_PER_KM.medium +
    flights.long * FLIGHT_TYPICAL_DISTANCE_KM.long * 2 * FLIGHT_KG_CO2_PER_KM.long;

  void km;
  return kgCO2 / 1000;
}

function computeHome(home: FootprintInputs["home"], country: CountryData): number {
  const householdSize = Math.max(1, home.householdSize);

  const heatingKWh = home.heatingKWhPerYear || HOME_DEFAULTS.heatingKWhPerYear;
  const electricityKWh = home.electricityKWhPerYear || HOME_DEFAULTS.electricityKWhPerYear;

  let kgCO2 = 0;
  if (home.heatingFuel === "electric") {
    kgCO2 += heatingKWh * (country.gridIntensityGCO2PerKWh / 1000);
  } else {
    kgCO2 += heatingKWh * HEATING_KG_CO2_PER_KWH[home.heatingFuel];
  }
  kgCO2 += electricityKWh * (country.gridIntensityGCO2PerKWh / 1000);

  return (kgCO2 / 1000) / householdSize;
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

/**
 * What percentile of the country's footprint distribution does the given
 * total fall into?
 *
 * We approximate per-country distribution as a log-normal around the country
 * mean (perCapitaCO2). This is a stand-in for the household-CO2 distribution
 * in the absence of public micro-data; broadly correct for ranking purposes.
 */
export function estimatePercentile(
  totalTCO2: number,
  countryMean: number,
): number {
  if (totalTCO2 <= 0 || countryMean <= 0) return 0;
  const sigma = 0.55;
  const mu = Math.log(countryMean) - (sigma * sigma) / 2;
  const x = Math.log(totalTCO2);
  const z = (x - mu) / sigma;
  const p = 0.5 * (1 + erf(z / Math.SQRT2));
  return Math.round(Math.max(0, Math.min(100, p * 100)));
}

/** Abramowitz & Stegun approximation for the error function. */
function erf(x: number): number {
  const sign = Math.sign(x);
  const a = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * a);
  const y =
    1 -
    (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) *
      t *
      Math.exp(-a * a);
  return sign * y;
}
