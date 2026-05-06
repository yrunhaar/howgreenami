import type { Dictionary } from "../dictionary";

export const en: Dictionary = {
  meta: {
    siteTitle: "How big is my carbon footprint?",
    homeTitleTemplate: "How big is my carbon footprint? | howgreenami.org",
    homeDescription:
      "A free, open tool that turns your lifestyle into tonnes of CO2 per year, then puts that number next to your country average, the world average, and the Paris-aligned target.",
    homeOgTitle: "How big is your carbon footprint?",
    homeOgDescription:
      "Diet, driving, flying, heating. See your tonnes-of-CO2 next to the country average and the climate target. Real numbers, no login.",
    countryTitleTemplate: "{country}: per-capita CO2, what it means for you",
    countryDescription:
      "{country} emits {value} tonnes of CO2 per person per year. See where you fit, and how that compares to the climate target.",
  },
  nav: {
    home: "How Green Am I?",
    compare: "Compare countries",
    methodology: "Methodology",
    faq: "FAQ",
    about: "About",
    report: "Get a report",
    menu: "Menu",
    close: "Close",
  },
  home: {
    headline: "How big is your carbon footprint?",
    subheadline:
      "Diet, driving, flying, heating. We turn your lifestyle into tonnes of CO2 per year, then compare it to your country, the world, and the Paris-aligned target.",
    chooseCountryLabel: "Where do you live?",
    geoDetectingLabel: "Detecting your country. .",
    geoDetectedLabel: "We think you are in {country}. Wrong? Pick another below.",
    youAreInLabel: "Showing data for {country}",
    orPick: "or pick a country",
  },
  country: {
    headlineTemplate: "How green is the average person in {country}?",
    verdictBelowParis: "Below the Paris-aligned target",
    verdictBelowWorld: "Below the world average",
    verdictAboveWorld: "Above the world average",
    verdictHighest: "Among the highest emitters per person",
    bodyTemplate:
      "{country} emits {value} tCO2 per person per year, {worldComparison}, and {parisComparison}. Ranked {rank} of {total} countries by per-capita emissions.",
    bodyMultiplierAbove: "{factor}× the world average",
    bodyMultiplierBelow: "{factor}× lower than the world average",
    bodyParisAbove: "{factor}× the Paris-aligned 2030 target",
    bodyParisBelow: "below the Paris-aligned 2030 target",
    statPerCapitaLabel: "Per-capita CO2",
    statPerCapitaSub: "per person, per year",
    statTotalLabel: "Total emissions",
    statTotalSub: "{population}M people",
    statGridLabel: "Electricity grid",
    statGridSub: "CO2 per kWh of electricity",
    historyHeading: "How {country}'s emissions changed over time",
    historyBodyTemplate:
      "{country} per-capita emissions peaked at {peakValue} tCO2 in {peakYear}. Today: {todayValue} tCO2. {trend} The world average over the same period went from {worldStart} tCO2 in {worldYear} to {worldToday} tCO2 today.",
    historyTrendDropTemplate: "That's a {pct}% drop since {startYear}.",
    historyTrendRiseTemplate: "That's a {pct}% rise since {startYear}.",
    historyTrendFlat: "Roughly flat across the period.",
    calculatorHeadingTemplate: "Calculate your own footprint in {country}",
    calculatorSubheadingTemplate:
      "Diet, driving, flying, heating. We turn your lifestyle into tonnes of CO2 per year and compare it to {country}'s average.",
  },
  calculator: {
    heading: "Tell us about your year",
    intro:
      "Four short steps. Skip what you do not know. Defaults reflect a typical lifestyle in your country.",
    stepLabel: "Step {current} of {total}",
    steps: {
      diet: "Diet",
      transport: "Travel",
      home: "Home",
      stuff: "Stuff",
    },
    diet: {
      heading: "What do you eat in a typical week?",
      help: "Diet is around a fifth of a typical footprint in rich countries. Animal protein dominates the impact.",
      options: {
        heavy_meat: "Heavy meat eater",
        medium_meat: "Medium meat eater",
        low_meat: "Low meat",
        pescatarian: "Pescatarian",
        vegetarian: "Vegetarian",
        vegan: "Vegan",
      },
      optionsHelp: {
        heavy_meat: "Meat at most meals; >100 g/day",
        medium_meat: "Meat most days; 50-100 g/day",
        low_meat: "Meat a few times a week; <50 g/day",
        pescatarian: "Fish but no land animals",
        vegetarian: "No meat or fish; dairy and eggs",
        vegan: "No animal products",
      },
    },
    transport: {
      heading: "How do you get around?",
      help: "We sum your driving, flying, and rail/bus. Distances are round-trip.",
      carKmLabel: "Car kilometres per year",
      carKmHelp: "All your driving combined. A typical European car drives 12,000 km/year, US 19,000 km.",
      carFuelLabel: "Car fuel",
      fuelOptions: {
        petrol: "Petrol",
        diesel: "Diesel",
        hybrid: "Hybrid",
        plugin_hybrid: "Plug-in hybrid",
        electric: "Electric",
        none: "No car",
      },
      flightsHeading: "Flights this year",
      flightsShortLabel: "Short-haul (under 1500 km, e.g. London-Paris)",
      flightsMediumLabel: "Medium-haul (1500-5000 km, e.g. London-Athens)",
      flightsLongLabel: "Long-haul (over 5000 km, e.g. London-NYC)",
      transitHeading: "Public transport",
      transitRailLabel: "Train kilometres per year",
      transitBusLabel: "Bus kilometres per year",
    },
    home: {
      heading: "Your home",
      help: "We split heating and electricity by your household size, so two people sharing one home each get half.",
      householdSizeLabel: "How many people live with you (including you)?",
      heatingFuelLabel: "How is your home heated?",
      heatingFuelOptions: {
        gas: "Natural gas",
        oil: "Heating oil",
        electric: "Electricity (heat pump or resistive)",
        district: "District heating",
        wood: "Wood / biomass",
        none: "No heating",
      },
      heatingKWhLabel: "Heating kWh per year (optional)",
      heatingKWhHelp: "Leave blank to use a country-typical 12,000 kWh/yr.",
      electricityKWhLabel: "Electricity kWh per year (optional)",
      electricityKWhHelp: "Leave blank to use a country-typical 3,800 kWh/yr.",
    },
    consumption: {
      heading: "Stuff you buy",
      help: "Clothes, electronics, furniture, services. A rough lifestyle category.",
      options: {
        light: "Light",
        moderate: "Moderate",
        heavy: "Heavy",
      },
      optionsHelp: {
        light: "Buy little, repair often, second-hand where possible",
        moderate: "Average European/American consumer",
        heavy: "Frequent new purchases, fast fashion, latest gadgets",
      },
    },
    back: "Back",
    next: "Next",
    seeResults: "See my footprint",
  },
  result: {
    heading: "Your annual footprint",
    youEmitTemplate: "{tons} tonnes CO2",
    perYearLabel: "per year",
    percentileTemplate: "Top {percent}% in {country}",
    bottomPercentileTemplate: "Bottom {percent}% in {country}",
    compareHeading: "How you compare",
    compareYou: "You",
    compareCountryAvg: "Average in {country}",
    compareWorldAvg: "World average",
    compareParisBudget: "Paris-aligned target (2030)",
    compareTop1: "Global top 1%",
    breakdownHeading: "Where it comes from",
    breakdownLabels: {
      diet: "Food",
      transport: "Driving and transit",
      flights: "Flights",
      home: "Home (heating + electricity)",
      consumption: "Stuff",
    },
    downloadReport: "Download report (PDF)",
    recalculate: "Start over",
    shareLine: "I emit {tons} tonnes CO2 per year. How about you?",
  },
  comedic: {
    tagline:
      "Your year, in CO2.",
  },
  statistics: {
    heading: "The numbers behind the curtain",
    worldAverageLabel: "World average",
    parisLabel: "Paris-aligned target",
    top1Label: "Global top 1%",
    bottom50Label: "Global bottom half",
    perCapitaUnit: "tCO2 per person/year",
  },
  chart: {
    historicalHeading: "Per-capita CO2 over time",
    historicalSubtitle: "{country} versus the world, 1960-today",
    distributionHeading: "Where you sit in {country}",
    distributionSubtitle: "Estimated distribution of personal footprints",
    yourPositionLabel: "You",
    worldAverageLabel: "World average",
    parisAlignedLabel: "Paris-aligned 2030",
  },
  compare: {
    heading: "Per-capita CO2 by country",
    intro:
      "Pick countries to compare side by side. Shows annual per-capita emissions, total national output, and how clean the electricity grid is.",
    addCountry: "Add country",
    removeAria: "Remove {country}",
    columnCountry: "Country",
    columnPerCapita: "Per-capita CO2",
    columnTotal: "Total emissions",
    columnGrid: "Grid carbon intensity",
  },
  cta: {
    support: {
      heading: "Support this project",
      body:
        "This is free, open, no ads, no tracking. If it helped, a small tip lets me keep building open educational tools.",
      ctaLabel: "Tip on Ko-fi",
    },
    furtherReading: {
      heading: "Further reading",
      body:
        "Books that shaped this calculator. Buying through Bookshop.org sends a share to local independent bookshops.",
      ctaLabel: "See the reading list",
      disclosure: "Bookshop affiliate link.",
    },
    sister: {
      heading: "Sister projects",
      body: "Same design, different question.",
      howpoorami: "How poor am I?",
      howaffordable: "Can I afford a house?",
    },
  },
  footer: {
    tagline: "Open data, real numbers, no tracking.",
    source: "Data sources",
    license: "License",
    madeBy: "Made by Yohan Runhaar",
    about: "About",
    faq: "FAQ",
    methodology: "Methodology",
    github: "GitHub",
    support: "Buy me a coffee",
    buildDateTemplate: "Data built {date}",
  },
  common: {
    tonsCO2Unit: "tCO2",
    perPersonPerYear: "per person per year",
    loading: "Loading. .",
    errorTitle: "Something went wrong",
    errorBody: "Refresh the page. If it keeps happening, please open an issue on GitHub.",
  },
  report: {
    title: "Personal Carbon Footprint Report",
    subtitle: "Your year in CO2, in context.",
    preparedFor: "Prepared for: {country}, {date}",
    downloadButton: "Download PDF",
    generatingLabel: "Generating your report. .",
    methodology: "How we calculated this",
    source: "Source",
    footer: "howgreenami.org",
    cover: {
      heading: "Your annual carbon footprint",
      subhead: "{tons} tCO2 per year",
    },
    summary: {
      heading: "Summary",
      totalLabel: "Total annual emissions",
      comparedToCountry: "vs. {country} average",
      comparedToWorld: "vs. world average",
      comparedToParis: "vs. Paris-aligned target",
    },
    breakdown: {
      heading: "Where it comes from",
      explanation:
        "These are your own choices, sorted by impact. The biggest single line is usually the easiest to move.",
    },
    action: {
      heading: "What actually shifts the number",
      intro: "Personal action is part of the picture, not the whole picture. Here is what tends to matter most.",
      diet: "Less red meat moves the diet line; full plant-based moves it most.",
      travel: "One long-haul flight skipped beats a year of careful driving.",
      home: "Insulating, then electrifying heat (heat pump), is the biggest home move.",
      system: "Voting, savings, and where you bank shape the system you live in.",
    },
    landingTitle: "Your Personal Carbon Footprint Report",
    landingFreeBadge: "Free. No signup, no payment, no email required",
    landingCta: "Generate my report",
    landingFeatureA: {
      title: "Your tonnes, in context",
      body:
        "Computed from DEFRA emission factors and your country's electricity grid intensity. Compared to your country, the world, and the Paris-aligned target.",
    },
    landingFeatureB: {
      title: "Country and historical context",
      body:
        "Where your country sits in the global emissions league, and how its per-capita CO2 evolved over decades.",
    },
    landingFeatureC: {
      title: "Fully private",
      body:
        "The report is built in your browser. Nothing is sent to a server. No email, no account, no tracking.",
    },
    landingPicker: {
      title: "Generate your report",
      subtitle: "Pick a country, enter your annual tonnes, and we'll do the rest.",
      countryLabel: "Country",
      tonsLabel: "Your annual emissions (tCO2)",
      tonsHelp: "If you've used the calculator, your number is shown above. Otherwise pick a representative value or use the home page calculator first.",
      generateButton: "Generate the PDF",
      generatingButton: "Generating...",
    },
    pdfPageLabel: "Page",
    pdfFooterAttribution: "howgreenami.org · Open data · No tracking",
    pdfCoverGeneratedLabel: "Generated",
    pdfYourFootprintLabel: "Your annual footprint",
    pdfPercentileLeadIn: "You emit",
    pdfPercentilePopulation: "tonnes of CO2 equivalent per year",
    pdfCoverNarrativeAboveTemplate:
      "Your annual footprint of {tons} tCO2 sits {factor}× above the world per-capita average and {parisFactor}× above the Paris-aligned 2030 budget. The pages that follow break down where your emissions come from, how they compare across borders, and what shifts the number most.",
    pdfCoverNarrativeBelowTemplate:
      "Your annual footprint of {tons} tCO2 sits below the world per-capita average. The pages that follow show your category breakdown, where your country fits in the global picture, and what would push the number further down.",
    pdfSection1Title: "Where you stand",
    pdfSection1Body:
      "Three reference lines: the Paris-aligned 2030 personal budget, the world per-capita average, and your country's per-capita average. Your number is plotted alongside.",
    pdfSection2Title: "Where it comes from",
    pdfSection2Body:
      "Your emissions split by category. Diet, transport, flights, home energy, and consumption. The biggest line is usually the easiest to move.",
    pdfSection3Title: "Country context",
    pdfSection3Body:
      "Your country's per-capita emissions, ranked against every other country in the dataset, with grid intensity and total national output for context.",
    pdfCrossCountryTitle: "Same lifestyle, different country",
    pdfCrossCountryBody:
      "Your behavior held constant; only the country grid and food system change. Same flights, same diet, same kilometres driven — different emission factors.",
    pdfCrossCountryColCountry: "Country",
    pdfCrossCountryColPerCapita: "Per-capita CO2",
    pdfCrossCountryColRatio: "Vs your country",
    pdfCrossCountryInsight:
      "The grid intensity gap is the largest single multiplier. The same EV emits roughly 6× less per km in France than in Poland. Same kettle. Same air-con. Same numbers behind your behavior — different climate outcomes.",
    pdfHistoricalTitle: "How emissions evolved",
    pdfHistoricalBody:
      "Per-capita CO2 in your country across the period for which Our World in Data has territorial-emissions records. Higher line means higher per-person output.",
    pdfHistoricalInsightTemplate:
      "{country} per-capita emissions were {firstValue} tCO2 in {firstYear}. By {lastYear}: {lastValue} tCO2. {direction} {magnitude} tCO2 per person over the period.",
    pdfHistoricalNoData:
      "No long-running historical series for this country. The cross-country and snapshot pages above still apply.",
    pdfTakeawaysTitle: "What actually moves the number",
    pdfTakeawaysIntro:
      "Personal reads of your snapshot. Action ranked roughly by carbon-per-effort, not by ease.",
    pdfTakeawaysHigh:
      "You sit well above the country average. The biggest single move for you is almost certainly air travel: one transatlantic return is 1.6 tCO2, more than a full year of careful driving on a small petrol car.",
    pdfTakeawaysMedium:
      "You sit roughly at the country average. The dominant lever from here is shifting one of the big three categories: diet (red meat → plant-based), travel (one long-haul flight skipped), or home (insulation + electrify heat).",
    pdfTakeawaysLow:
      "You sit below the country average. The remaining lever is mostly systemic: the grid your home runs on, the food system your supermarket sources from, and how the country builds new transport infrastructure.",
    pdfTakeawaysGlobalContext:
      "Personal action is part of the picture, not the whole picture. The bigger lever is collective: how the grid is built, how cities are zoned, how pollution is taxed. Voting and where you bank shape the system you live in.",
    pdfMethodologyTitle: "Methodology",
    pdfMethodologyBody:
      "Diet from Scarborough et al. 2023 (Nature Food). Transport and heating from UK DEFRA Greenhouse Gas Reporting Conversion Factors 2024. Per-capita country emissions from Our World in Data / Global Carbon Project 2022. Electricity grid intensity from IEA Electricity Information 2023. Computation runs entirely client-side; nothing is sent to a server.",
    pdfTipTitle: "Like this report?",
    pdfTipBody:
      "It's free and ad-free. If it's useful, a small Ko-fi tip lets me keep building open educational tools.",
    pdfFilenameTemplate: "howgreenami-{country}-{date}.pdf",
  },
};

