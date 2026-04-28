/**
 * Dictionary shape - every translated locale must provide all keys.
 *
 * Strings may include placeholders like `{country}`, `{value}`, `{percent}`
 * which are interpolated by `interpolate()` in `index.ts`.
 */

export interface Dictionary {
  readonly meta: {
    readonly siteTitle: string;
    /** Used in `<title>` of pages. */
    readonly homeTitleTemplate: string;
    /** Used in `<meta name="description">` of pages. */
    readonly homeDescription: string;
    readonly homeOgTitle: string;
    readonly homeOgDescription: string;
    readonly countryTitleTemplate: string;
    readonly countryDescription: string;
  };
  readonly nav: {
    readonly home: string;
    readonly compare: string;
    readonly methodology: string;
    readonly faq: string;
    readonly about: string;
    readonly report: string;
    readonly menu: string;
    readonly close: string;
  };
  readonly home: {
    readonly headline: string;
    readonly subheadline: string;
    readonly chooseCountryLabel: string;
    readonly geoDetectingLabel: string;
    readonly geoDetectedLabel: string;
    readonly youAreInLabel: string;
    readonly orPick: string;
  };
  readonly calculator: {
    readonly heading: string;
    readonly intro: string;
    readonly stepLabel: string;
    /** Step labels */
    readonly steps: {
      readonly diet: string;
      readonly transport: string;
      readonly home: string;
      readonly stuff: string;
    };
    readonly diet: {
      readonly heading: string;
      readonly help: string;
      readonly options: {
        readonly heavy_meat: string;
        readonly medium_meat: string;
        readonly low_meat: string;
        readonly pescatarian: string;
        readonly vegetarian: string;
        readonly vegan: string;
      };
      readonly optionsHelp: {
        readonly heavy_meat: string;
        readonly medium_meat: string;
        readonly low_meat: string;
        readonly pescatarian: string;
        readonly vegetarian: string;
        readonly vegan: string;
      };
    };
    readonly transport: {
      readonly heading: string;
      readonly help: string;
      readonly carKmLabel: string;
      readonly carKmHelp: string;
      readonly carFuelLabel: string;
      readonly fuelOptions: {
        readonly petrol: string;
        readonly diesel: string;
        readonly hybrid: string;
        readonly plugin_hybrid: string;
        readonly electric: string;
        readonly none: string;
      };
      readonly flightsHeading: string;
      readonly flightsShortLabel: string;
      readonly flightsMediumLabel: string;
      readonly flightsLongLabel: string;
      readonly transitHeading: string;
      readonly transitRailLabel: string;
      readonly transitBusLabel: string;
    };
    readonly home: {
      readonly heading: string;
      readonly help: string;
      readonly householdSizeLabel: string;
      readonly heatingFuelLabel: string;
      readonly heatingFuelOptions: {
        readonly gas: string;
        readonly oil: string;
        readonly electric: string;
        readonly district: string;
        readonly wood: string;
        readonly none: string;
      };
      readonly heatingKWhLabel: string;
      readonly heatingKWhHelp: string;
      readonly electricityKWhLabel: string;
      readonly electricityKWhHelp: string;
    };
    readonly consumption: {
      readonly heading: string;
      readonly help: string;
      readonly options: {
        readonly light: string;
        readonly moderate: string;
        readonly heavy: string;
      };
      readonly optionsHelp: {
        readonly light: string;
        readonly moderate: string;
        readonly heavy: string;
      };
    };
    readonly back: string;
    readonly next: string;
    readonly seeResults: string;
  };
  readonly result: {
    readonly heading: string;
    readonly youEmitTemplate: string;
    readonly perYearLabel: string;
    /** "Top {percent}% of {country}" */
    readonly percentileTemplate: string;
    /** "Bottom {percent}% of {country}" */
    readonly bottomPercentileTemplate: string;
    readonly compareHeading: string;
    readonly compareYou: string;
    readonly compareCountryAvg: string;
    readonly compareWorldAvg: string;
    readonly compareParisBudget: string;
    readonly compareTop1: string;
    readonly breakdownHeading: string;
    readonly breakdownLabels: {
      readonly diet: string;
      readonly transport: string;
      readonly flights: string;
      readonly home: string;
      readonly consumption: string;
    };
    readonly downloadReport: string;
    readonly recalculate: string;
    readonly shareLine: string;
  };
  readonly comedic: {
    /** Headline-style line above the result. {tons} interpolated. */
    readonly tagline: string;
  };
  readonly statistics: {
    readonly heading: string;
    readonly worldAverageLabel: string;
    readonly parisLabel: string;
    readonly top1Label: string;
    readonly bottom50Label: string;
    readonly perCapitaUnit: string;
  };
  readonly chart: {
    readonly historicalHeading: string;
    readonly historicalSubtitle: string;
    readonly distributionHeading: string;
    readonly distributionSubtitle: string;
    readonly yourPositionLabel: string;
    readonly worldAverageLabel: string;
    readonly parisAlignedLabel: string;
  };
  readonly compare: {
    readonly heading: string;
    readonly intro: string;
    readonly addCountry: string;
    readonly removeAria: string;
    readonly columnCountry: string;
    readonly columnPerCapita: string;
    readonly columnTotal: string;
    readonly columnGrid: string;
  };
  readonly cta: {
    readonly support: {
      readonly heading: string;
      readonly body: string;
      readonly ctaLabel: string;
    };
    readonly furtherReading: {
      readonly heading: string;
      readonly body: string;
      readonly ctaLabel: string;
      readonly disclosure: string;
    };
    readonly sister: {
      readonly heading: string;
      readonly body: string;
      readonly howpoorami: string;
      readonly canIaffordahouse: string;
    };
  };
  readonly footer: {
    readonly tagline: string;
    readonly source: string;
    readonly license: string;
    readonly madeBy: string;
  };
  readonly common: {
    readonly tonsCO2Unit: string;
    readonly perPersonPerYear: string;
    readonly loading: string;
    readonly errorTitle: string;
    readonly errorBody: string;
  };
  readonly report: {
    readonly title: string;
    readonly subtitle: string;
    readonly preparedFor: string;
    readonly downloadButton: string;
    readonly generatingLabel: string;
    readonly methodology: string;
    readonly source: string;
    readonly footer: string;
    readonly cover: {
      readonly heading: string;
      readonly subhead: string;
    };
    readonly summary: {
      readonly heading: string;
      readonly totalLabel: string;
      readonly comparedToCountry: string;
      readonly comparedToWorld: string;
      readonly comparedToParis: string;
    };
    readonly breakdown: {
      readonly heading: string;
      readonly explanation: string;
    };
    readonly action: {
      readonly heading: string;
      readonly intro: string;
      readonly diet: string;
      readonly travel: string;
      readonly home: string;
      readonly system: string;
    };
  };
}

export type Dict = Dictionary;

/**
 * Replace `{name}` placeholders in `template` with values from `vars`.
 * Unknown placeholders are left in place; missing values render as empty strings.
 */
export function interpolate(
  template: string,
  vars: Readonly<Record<string, string | number>>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => {
    if (key in vars) return String(vars[key]);
    return match;
  });
}

