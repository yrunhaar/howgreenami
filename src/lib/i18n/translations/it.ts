import type { Dictionary } from "../dictionary";

export const it: Dictionary = {
  meta: {
    siteTitle: "Quanto è grande la mia impronta di carbonio?",
    homeTitleTemplate: "Quanto è grande la mia impronta di carbonio? | howgreenami.org",
    homeDescription:
      "Uno strumento gratuito e aperto che traduce il tuo stile di vita in tonnellate di CO2 all'anno e mette quel numero accanto alla media del tuo paese, alla media mondiale e all'obiettivo allineato all'Accordo di Parigi.",
    homeOgTitle: "Quanto è grande la tua impronta di carbonio?",
    homeOgDescription:
      "Dieta, auto, voli, riscaldamento. Vedi le tue tonnellate di CO2 accanto alla media del paese e all'obiettivo climatico. Numeri reali, nessun login.",
    countryTitleTemplate: "{country}: CO2 pro capite e cosa significa per te",
    countryDescription:
      "{country} emette {value} tonnellate di CO2 per persona all'anno. Vedi dove ti collochi e come si confronta con l'obiettivo climatico.",
  },
  nav: {
    home: "Quanto sono verde?",
    compare: "Confronta paesi",
    methodology: "Metodologia",
    faq: "FAQ",
    about: "Sul progetto",
    report: "Rapporto",
    menu: "Menu",
    close: "Chiudi",
  },
  home: {
    headline: "Quanto è grande la tua impronta di carbonio?",
    subheadline:
      "Dieta, auto, voli, riscaldamento. Convertiamo il tuo stile di vita in tonnellate di CO2 all'anno e lo confrontiamo con il tuo paese, il mondo e l'obiettivo di Parigi.",
    chooseCountryLabel: "Dove vivi?",
    geoDetectingLabel: "Stiamo rilevando il tuo paese. .",
    geoDetectedLabel: "Pensiamo che tu sia in {country}. Sbagliato? Scegli un altro paese sotto.",
    youAreInLabel: "Mostro i dati per {country}",
    orPick: "o scegli un paese",
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
    heading: "Parlaci del tuo anno",
    intro:
      "Quattro passi brevi. Salta ciò che non sai. I valori predefiniti riflettono uno stile di vita tipico nel tuo paese.",
    stepLabel: "Passo {current} di {total}",
    steps: {
      diet: "Dieta",
      transport: "Trasporti",
      home: "Casa",
      stuff: "Acquisti",
    },
    diet: {
      heading: "Cosa mangi in una settimana tipica?",
      help: "La dieta vale circa un quinto dell'impronta nei paesi ricchi. La proteina animale domina l'impatto.",
      options: {
        heavy_meat: "Molta carne",
        medium_meat: "Carne moderata",
        low_meat: "Poca carne",
        pescatarian: "Pescetariano",
        vegetarian: "Vegetariano",
        vegan: "Vegano",
      },
      optionsHelp: {
        heavy_meat: "Carne a quasi tutti i pasti; >100 g/giorno",
        medium_meat: "Carne quasi ogni giorno; 50-100 g/giorno",
        low_meat: "Carne qualche volta a settimana; <50 g/giorno",
        pescatarian: "Pesce, ma niente animali terrestri",
        vegetarian: "Niente carne né pesce; latticini e uova",
        vegan: "Nessun prodotto animale",
      },
    },
    transport: {
      heading: "Come ti sposti?",
      help: "Sommiamo auto, voli e treno/autobus. Le distanze sono andata e ritorno.",
      carKmLabel: "Chilometri in auto all'anno",
      carKmHelp: "Tutta la guida sommata. Un'auto europea tipica fa 12.000 km/anno, una statunitense 19.000.",
      carFuelLabel: "Carburante dell'auto",
      fuelOptions: {
        petrol: "Benzina",
        diesel: "Diesel",
        hybrid: "Ibrida",
        plugin_hybrid: "Ibrida plug-in",
        electric: "Elettrica",
        none: "Senza auto",
      },
      flightsHeading: "Voli quest'anno",
      flightsShortLabel: "Corto raggio (sotto 1500 km, es. Roma-Parigi)",
      flightsMediumLabel: "Medio raggio (1500-5000 km, es. Roma-Atene)",
      flightsLongLabel: "Lungo raggio (oltre 5000 km, es. Roma-New York)",
      transitHeading: "Trasporto pubblico",
      transitRailLabel: "Treno, km all'anno",
      transitBusLabel: "Autobus, km all'anno",
    },
    home: {
      heading: "La tua casa",
      help: "Dividiamo riscaldamento ed elettricità per il numero di persone in casa. Due persone che condividono un'abitazione contano metà ciascuna.",
      householdSizeLabel: "Quante persone vivono con te (incluso te)?",
      heatingFuelLabel: "Come è riscaldata la tua casa?",
      heatingFuelOptions: {
        gas: "Gas naturale",
        oil: "Gasolio",
        electric: "Elettricità (pompa di calore o resistivo)",
        district: "Teleriscaldamento",
        wood: "Legna / biomassa",
        none: "Senza riscaldamento",
      },
      heatingKWhLabel: "kWh di riscaldamento all'anno (opzionale)",
      heatingKWhHelp: "Lascia vuoto per usare la media nazionale di 12.000 kWh/anno.",
      electricityKWhLabel: "kWh di elettricità all'anno (opzionale)",
      electricityKWhHelp: "Lascia vuoto per usare la media nazionale di 3.800 kWh/anno.",
    },
    consumption: {
      heading: "Cose che compri",
      help: "Vestiti, elettronica, mobili, servizi. Una categoria indicativa.",
      options: {
        light: "Leggero",
        moderate: "Moderato",
        heavy: "Intenso",
      },
      optionsHelp: {
        light: "Comprare poco, riparare, seconda mano quando possibile",
        moderate: "Consumatore europeo/americano medio",
        heavy: "Acquisti nuovi frequenti, fast fashion, ultimi gadget",
      },
    },
    back: "Indietro",
    next: "Avanti",
    seeResults: "Vedi la mia impronta",
  },
  result: {
    heading: "La tua impronta annuale",
    youEmitTemplate: "{tons} tonnellate di CO2",
    perYearLabel: "all'anno",
    percentileTemplate: "Top {percent}% in {country}",
    bottomPercentileTemplate: "Ultimo {percent}% in {country}",
    compareHeading: "Come ti collochi",
    compareYou: "Tu",
    compareCountryAvg: "Media in {country}",
    compareWorldAvg: "Media mondiale",
    compareParisBudget: "Obiettivo Parigi (2030)",
    compareTop1: "Top 1% mondiale",
    breakdownHeading: "Da dove viene",
    breakdownLabels: {
      diet: "Cibo",
      transport: "Auto e trasporti",
      flights: "Voli",
      home: "Casa (riscaldamento + elettricità)",
      consumption: "Acquisti",
    },
    downloadReport: "Scarica rapporto (PDF)",
    recalculate: "Ricomincia",
    shareLine: "Emetto {tons} tonnellate di CO2 all'anno. E tu?",
  },
  comedic: {
    tagline: "Il tuo anno, in CO2.",
  },
  statistics: {
    heading: "I numeri dietro le quinte",
    worldAverageLabel: "Media mondiale",
    parisLabel: "Obiettivo Parigi",
    top1Label: "Top 1% mondiale",
    bottom50Label: "Metà inferiore mondiale",
    perCapitaUnit: "tCO2 per persona/anno",
  },
  chart: {
    historicalHeading: "CO2 pro capite nel tempo",
    historicalSubtitle: "{country} contro il mondo, 1960-oggi",
    distributionHeading: "Dove ti collochi in {country}",
    distributionSubtitle: "Distribuzione stimata delle impronte personali",
    yourPositionLabel: "Tu",
    worldAverageLabel: "Media mondiale",
    parisAlignedLabel: "Parigi 2030",
  },
  compare: {
    heading: "CO2 pro capite per paese",
    intro:
      "Scegli paesi da confrontare fianco a fianco. Mostra emissioni annuali per persona, totale nazionale e quanto è pulita la rete elettrica.",
    addCountry: "Aggiungi paese",
    removeAria: "Rimuovi {country}",
    columnCountry: "Paese",
    columnPerCapita: "CO2 pro capite",
    columnTotal: "Emissioni totali",
    columnGrid: "Intensità carbonica della rete",
  },
  cta: {
    support: {
      heading: "Sostieni il progetto",
      body:
        "È gratuito, aperto, senza pubblicità né tracciamento. Se ti è stato utile, una piccola donazione mi aiuta a continuare a costruire strumenti educativi aperti.",
      ctaLabel: "Donazione su Ko-fi",
    },
    furtherReading: {
      heading: "Letture consigliate",
      body:
        "Libri che hanno dato forma a questo calcolatore. Comprare tramite Bookshop.org gira una quota alle librerie indipendenti.",
      ctaLabel: "Vedi lista letture",
      disclosure: "Link di affiliazione Bookshop.",
    },
    sister: {
      heading: "Progetti gemelli",
      body: "Stesso design, altra domanda.",
      howpoorami: "Quanto sono povero?",
      howaffordable: "Posso permettermi una casa?",
    },
  },
  footer: {
    tagline: "Dati aperti, numeri reali, nessun tracciamento.",
    source: "Fonti dati",
    license: "Licenza",
    madeBy: "Realizzato da Yohan Runhaar",
    about: "Informazioni",
    faq: "FAQ",
    methodology: "Metodologia",
    github: "GitHub",
    support: "Offrimi un caffè",
    buildDateTemplate: "Dati al {date}",
  },
  common: {
    tonsCO2Unit: "tCO2",
    perPersonPerYear: "per persona all'anno",
    loading: "Caricamento. .",
    errorTitle: "Qualcosa è andato storto",
    errorBody: "Ricarica la pagina. Se il problema persiste, apri una issue su GitHub.",
  },
  report: {
    title: "Rapporto personale di impronta di carbonio",
    subtitle: "Il tuo anno in CO2, nel contesto.",
    preparedFor: "Preparato per: {country}, {date}",
    downloadButton: "Scarica PDF",
    generatingLabel: "Generazione del rapporto. .",
    methodology: "Come abbiamo calcolato",
    source: "Fonte",
    footer: "howgreenami.org",
    cover: {
      heading: "La tua impronta di carbonio annuale",
      subhead: "{tons} tCO2 all'anno",
    },
    summary: {
      heading: "Sintesi",
      totalLabel: "Emissioni annuali totali",
      comparedToCountry: "vs. media {country}",
      comparedToWorld: "vs. media mondiale",
      comparedToParis: "vs. obiettivo Parigi",
    },
    breakdown: {
      heading: "Da dove viene",
      explanation:
        "Le tue scelte, ordinate per impatto. La voce più grande è di solito la più facile da spostare.",
    },
    action: {
      heading: "Cosa muove davvero il numero",
      intro: "L'azione individuale è parte del quadro, non tutto il quadro. Ecco cosa di solito conta di più.",
      diet: "Meno carne rossa sposta la voce dieta; pienamente vegetale la sposta di più.",
      travel: "Un volo a lungo raggio saltato batte un anno di guida attenta.",
      home: "Isolare, poi elettrificare il riscaldamento (pompa di calore), è la mossa più grande in casa.",
      system: "Votare, dove risparmi e dove tieni i soldi danno forma al sistema in cui vivi.",
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
