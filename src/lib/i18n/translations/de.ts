import type { Dictionary } from "../dictionary";

export const de: Dictionary = {
  meta: {
    siteTitle: "Wie groß ist mein CO2-Fußabdruck?",
    homeTitleTemplate: "Wie groß ist mein CO2-Fußabdruck? | howgreenami.org",
    homeDescription:
      "Ein kostenloses, offenes Tool, das Ihren Lebensstil in Tonnen CO2 pro Jahr umrechnet und diesen Wert dann neben den Landesdurchschnitt, den Weltdurchschnitt und das Paris-konforme Ziel stellt.",
    homeOgTitle: "Wie groß ist Ihr CO2-Fußabdruck?",
    homeOgDescription:
      "Ernährung, Auto, Flüge, Heizung. Sehen Sie Ihre Tonnen CO2 neben dem Landesdurchschnitt und dem Klimaziel. Echte Zahlen, kein Login.",
    countryTitleTemplate: "{country}: Pro-Kopf-CO2 und was es für Sie bedeutet",
    countryDescription:
      "{country} stößt {value} Tonnen CO2 pro Person und Jahr aus. Sehen Sie, wo Sie stehen, und wie das im Vergleich zum Klimaziel aussieht.",
  },
  nav: {
    home: "Wie grün bin ich?",
    compare: "Länder vergleichen",
    methodology: "Methodik",
    faq: "FAQ",
    about: "Über das Projekt",
    report: "Bericht",
    menu: "Menü",
    close: "Schließen",
  },
  home: {
    headline: "Wie groß ist Ihr CO2-Fußabdruck?",
    subheadline:
      "Ernährung, Auto, Flüge, Heizung. Wir rechnen Ihren Lebensstil in Tonnen CO2 pro Jahr um und vergleichen ihn mit Ihrem Land, der Welt und dem Paris-konformen Ziel.",
    chooseCountryLabel: "Wo wohnen Sie?",
    geoDetectingLabel: "Wir ermitteln Ihr Land. .",
    geoDetectedLabel: "Wir glauben, Sie sind in {country}. Falsch? Wählen Sie unten ein anderes Land.",
    youAreInLabel: "Daten für {country} werden angezeigt",
    orPick: "oder Land auswählen",
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
    heading: "Erzählen Sie uns von Ihrem Jahr",
    intro:
      "Vier kurze Schritte. Überspringen Sie, was Sie nicht wissen. Die Voreinstellungen entsprechen einem typischen Lebensstil in Ihrem Land.",
    stepLabel: "Schritt {current} von {total}",
    steps: {
      diet: "Ernährung",
      transport: "Verkehr",
      home: "Zuhause",
      stuff: "Konsum",
    },
    diet: {
      heading: "Was essen Sie in einer typischen Woche?",
      help: "Die Ernährung macht in reichen Ländern etwa ein Fünftel des Fußabdrucks aus. Tierisches Eiweiß dominiert dabei.",
      options: {
        heavy_meat: "Viel Fleisch",
        medium_meat: "Mittelmäßig Fleisch",
        low_meat: "Wenig Fleisch",
        pescatarian: "Pescetarisch",
        vegetarian: "Vegetarisch",
        vegan: "Vegan",
      },
      optionsHelp: {
        heavy_meat: "Fleisch zu fast jeder Mahlzeit; >100 g/Tag",
        medium_meat: "Fleisch fast täglich; 50-100 g/Tag",
        low_meat: "Fleisch ein paar Mal pro Woche; <50 g/Tag",
        pescatarian: "Fisch, aber keine Landtiere",
        vegetarian: "Kein Fleisch, kein Fisch; Milch und Eier",
        vegan: "Keine tierischen Produkte",
      },
    },
    transport: {
      heading: "Wie sind Sie unterwegs?",
      help: "Wir zählen Auto, Flüge und Bahn/Bus zusammen. Distanzen sind hin und zurück.",
      carKmLabel: "Autokilometer pro Jahr",
      carKmHelp: "Alle Ihre Fahrten zusammen. Ein typisches europäisches Auto fährt 12.000 km/Jahr, ein US-Auto 19.000 km.",
      carFuelLabel: "Kraftstoff",
      fuelOptions: {
        petrol: "Benzin",
        diesel: "Diesel",
        hybrid: "Hybrid",
        plugin_hybrid: "Plug-in-Hybrid",
        electric: "Elektrisch",
        none: "Kein Auto",
      },
      flightsHeading: "Flüge dieses Jahr",
      flightsShortLabel: "Kurzstrecke (unter 1500 km, z. B. Berlin-Paris)",
      flightsMediumLabel: "Mittelstrecke (1500-5000 km, z. B. Berlin-Athen)",
      flightsLongLabel: "Langstrecke (über 5000 km, z. B. Berlin-NYC)",
      transitHeading: "Öffentlicher Verkehr",
      transitRailLabel: "Zugkilometer pro Jahr",
      transitBusLabel: "Buskilometer pro Jahr",
    },
    home: {
      heading: "Ihr Zuhause",
      help: "Wir teilen Heizung und Strom durch die Haushaltsgröße. Zwei Personen in einer Wohnung bekommen also je die Hälfte.",
      householdSizeLabel: "Wie viele Personen wohnen mit Ihnen (Sie eingeschlossen)?",
      heatingFuelLabel: "Wie wird Ihre Wohnung beheizt?",
      heatingFuelOptions: {
        gas: "Erdgas",
        oil: "Heizöl",
        electric: "Strom (Wärmepumpe oder elektrisch)",
        district: "Fernwärme",
        wood: "Holz / Biomasse",
        none: "Keine Heizung",
      },
      heatingKWhLabel: "Heiz-kWh pro Jahr (optional)",
      heatingKWhHelp: "Leer lassen, um den Landesdurchschnitt von 12.000 kWh/Jahr zu verwenden.",
      electricityKWhLabel: "Strom-kWh pro Jahr (optional)",
      electricityKWhHelp: "Leer lassen, um den Landesdurchschnitt von 3.800 kWh/Jahr zu verwenden.",
    },
    consumption: {
      heading: "Was Sie kaufen",
      help: "Kleidung, Elektronik, Möbel, Dienstleistungen. Eine grobe Lebensstilkategorie.",
      options: {
        light: "Wenig",
        moderate: "Mittel",
        heavy: "Viel",
      },
      optionsHelp: {
        light: "Wenig kaufen, oft reparieren, Second-Hand wenn möglich",
        moderate: "Durchschnittlicher europäischer/amerikanischer Konsument",
        heavy: "Häufig Neukäufe, Fast Fashion, neueste Geräte",
      },
    },
    back: "Zurück",
    next: "Weiter",
    seeResults: "Mein Fußabdruck",
  },
  result: {
    heading: "Ihr Jahresfußabdruck",
    youEmitTemplate: "{tons} Tonnen CO2",
    perYearLabel: "pro Jahr",
    percentileTemplate: "Top {percent}% in {country}",
    bottomPercentileTemplate: "Untere {percent}% in {country}",
    compareHeading: "Wie Sie im Vergleich stehen",
    compareYou: "Sie",
    compareCountryAvg: "Durchschnitt in {country}",
    compareWorldAvg: "Weltdurchschnitt",
    compareParisBudget: "Paris-konformes Ziel (2030)",
    compareTop1: "Globale Top 1%",
    breakdownHeading: "Woraus es sich zusammensetzt",
    breakdownLabels: {
      diet: "Essen",
      transport: "Auto und Nahverkehr",
      flights: "Flüge",
      home: "Zuhause (Heizung + Strom)",
      consumption: "Konsum",
    },
    downloadReport: "Bericht herunterladen (PDF)",
    recalculate: "Von vorn beginnen",
    shareLine: "Ich verursache {tons} Tonnen CO2 pro Jahr. Und Sie?",
  },
  comedic: {
    tagline: "Ihr Jahr, in CO2.",
  },
  statistics: {
    heading: "Die Zahlen dahinter",
    worldAverageLabel: "Weltdurchschnitt",
    parisLabel: "Paris-konformes Ziel",
    top1Label: "Globale Top 1%",
    bottom50Label: "Globale untere Hälfte",
    perCapitaUnit: "tCO2 pro Person/Jahr",
  },
  chart: {
    historicalHeading: "Pro-Kopf-CO2 im Zeitverlauf",
    historicalSubtitle: "{country} im Vergleich zur Welt, 1960-heute",
    distributionHeading: "Wo Sie in {country} stehen",
    distributionSubtitle: "Geschätzte Verteilung persönlicher Fußabdrücke",
    yourPositionLabel: "Sie",
    worldAverageLabel: "Weltdurchschnitt",
    parisAlignedLabel: "Paris-konform 2030",
  },
  compare: {
    heading: "Pro-Kopf-CO2 nach Land",
    intro:
      "Wählen Sie Länder zum direkten Vergleich. Zeigt jährliche Pro-Kopf-Emissionen, Gesamtausstoß und wie sauber das Stromnetz ist.",
    addCountry: "Land hinzufügen",
    removeAria: "{country} entfernen",
    columnCountry: "Land",
    columnPerCapita: "Pro-Kopf-CO2",
    columnTotal: "Gesamtemissionen",
    columnGrid: "CO2-Intensität des Stromnetzes",
  },
  cta: {
    support: {
      heading: "Dieses Projekt unterstützen",
      body:
        "Kostenlos, offen, ohne Werbung, ohne Tracking. Wenn es geholfen hat, finanziert ein kleines Trinkgeld weitere offene Bildungstools.",
      ctaLabel: "Auf Ko-fi spenden",
    },
    furtherReading: {
      heading: "Weiterführende Literatur",
      body:
        "Bücher, die diesen Rechner geprägt haben. Käufe über Bookshop.org gehen anteilig an unabhängige Buchhandlungen.",
      ctaLabel: "Leseliste ansehen",
      disclosure: "Bookshop-Affiliate-Link.",
    },
    sister: {
      heading: "Schwesterprojekte",
      body: "Gleiches Design, andere Frage.",
      howpoorami: "Wie arm bin ich?",
      howaffordable: "Kann ich mir ein Haus leisten?",
    },
  },
  footer: {
    tagline: "Offene Daten, echte Zahlen, kein Tracking.",
    source: "Datenquellen",
    license: "Lizenz",
    madeBy: "Gemacht von Yohan Runhaar",
    about: "Über",
    faq: "FAQ",
    methodology: "Methodik",
    github: "GitHub",
    support: "Spendier mir einen Kaffee",
    buildDateTemplate: "Daten Stand {date}",
  },
  common: {
    tonsCO2Unit: "tCO2",
    perPersonPerYear: "pro Person und Jahr",
    loading: "Lädt. .",
    errorTitle: "Etwas ist schiefgelaufen",
    errorBody: "Bitte laden Sie die Seite neu. Falls es weiterhin auftritt, öffnen Sie bitte ein Issue auf GitHub.",
  },
  report: {
    title: "Persönlicher CO2-Fußabdruck-Bericht",
    subtitle: "Ihr Jahr in CO2, im Kontext.",
    preparedFor: "Erstellt für: {country}, {date}",
    downloadButton: "PDF herunterladen",
    generatingLabel: "Bericht wird erstellt. .",
    methodology: "So haben wir gerechnet",
    source: "Quelle",
    footer: "howgreenami.org",
    cover: {
      heading: "Ihr jährlicher CO2-Fußabdruck",
      subhead: "{tons} tCO2 pro Jahr",
    },
    summary: {
      heading: "Zusammenfassung",
      totalLabel: "Jährliche Gesamtemissionen",
      comparedToCountry: "vs. Durchschnitt {country}",
      comparedToWorld: "vs. Weltdurchschnitt",
      comparedToParis: "vs. Paris-konformes Ziel",
    },
    breakdown: {
      heading: "Woraus es sich zusammensetzt",
      explanation:
        "Ihre eigenen Entscheidungen, sortiert nach Wirkung. Der größte Posten lässt sich meist am leichtesten verändern.",
    },
    action: {
      heading: "Was die Zahl wirklich bewegt",
      intro: "Persönliches Handeln ist Teil des Bildes, nicht das ganze Bild. Das hier zählt am meisten.",
      diet: "Weniger rotes Fleisch verändert die Ernährungszeile; rein pflanzlich verändert sie am stärksten.",
      travel: "Ein ausgelassener Langstreckenflug schlägt ein Jahr sparsames Fahren.",
      home: "Erst dämmen, dann Heizung elektrifizieren (Wärmepumpe), das ist der größte Hebel zu Hause.",
      system: "Wahlen, Ersparnisse und die Bank, bei der Sie sind, prägen das System, in dem Sie leben.",
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
