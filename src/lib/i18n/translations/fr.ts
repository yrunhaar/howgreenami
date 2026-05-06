import type { Dictionary } from "../dictionary";

export const fr: Dictionary = {
  meta: {
    siteTitle: "Quelle est mon empreinte carbone ?",
    homeTitleTemplate: "Quelle est mon empreinte carbone ? | howgreenami.org",
    homeDescription:
      "Un outil gratuit et ouvert qui convertit votre mode de vie en tonnes de CO2 par an, puis place ce chiffre à côté de la moyenne de votre pays, de la moyenne mondiale et de l'objectif aligné sur l'Accord de Paris.",
    homeOgTitle: "Quelle est votre empreinte carbone ?",
    homeOgDescription:
      "Alimentation, voiture, vols, chauffage. Voyez vos tonnes de CO2 face à la moyenne nationale et à l'objectif climatique. Vrais chiffres, sans inscription.",
    countryTitleTemplate: "{country} : CO2 par habitant et ce que cela signifie pour vous",
    countryDescription:
      "{country} émet {value} tonnes de CO2 par personne et par an. Voyez où vous vous situez, et comment cela se compare à l'objectif climatique.",
  },
  nav: {
    home: "Suis-je écologique ?",
    compare: "Comparer les pays",
    methodology: "Méthodologie",
    faq: "FAQ",
    about: "À propos",
    report: "Rapport",
    menu: "Menu",
    close: "Fermer",
  },
  home: {
    headline: "Quelle est votre empreinte carbone ?",
    subheadline:
      "Alimentation, voiture, vols, chauffage. Nous convertissons votre mode de vie en tonnes de CO2 par an, puis le comparons à votre pays, au monde et à l'objectif aligné sur l'Accord de Paris.",
    chooseCountryLabel: "Où vivez-vous ?",
    geoDetectingLabel: "Détection de votre pays. .",
    geoDetectedLabel: "Nous pensons que vous êtes en {country}. Faux ? Choisissez un autre pays ci-dessous.",
    youAreInLabel: "Données affichées pour {country}",
    orPick: "ou choisissez un pays",
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
    heading: "Parlez-nous de votre année",
    intro:
      "Quatre étapes courtes. Sautez ce que vous ignorez. Les valeurs par défaut reflètent un mode de vie typique dans votre pays.",
    stepLabel: "Étape {current} sur {total}",
    steps: {
      diet: "Alimentation",
      transport: "Transports",
      home: "Logement",
      stuff: "Achats",
    },
    diet: {
      heading: "Que mangez-vous lors d'une semaine type ?",
      help: "L'alimentation représente environ un cinquième de l'empreinte dans les pays riches. Les protéines animales dominent l'impact.",
      options: {
        heavy_meat: "Beaucoup de viande",
        medium_meat: "Viande modérée",
        low_meat: "Peu de viande",
        pescatarian: "Pescétarien",
        vegetarian: "Végétarien",
        vegan: "Végétalien",
      },
      optionsHelp: {
        heavy_meat: "Viande à presque tous les repas ; >100 g/jour",
        medium_meat: "Viande presque tous les jours ; 50-100 g/jour",
        low_meat: "Viande quelques fois par semaine ; <50 g/jour",
        pescatarian: "Poisson mais pas d'animaux terrestres",
        vegetarian: "Sans viande ni poisson ; produits laitiers et œufs",
        vegan: "Aucun produit animal",
      },
    },
    transport: {
      heading: "Comment vous déplacez-vous ?",
      help: "Nous additionnons voiture, vols et train/bus. Les distances sont aller-retour.",
      carKmLabel: "Kilomètres en voiture par an",
      carKmHelp: "Toute votre conduite combinée. Une voiture européenne typique fait 12 000 km/an, une américaine 19 000 km.",
      carFuelLabel: "Carburant",
      fuelOptions: {
        petrol: "Essence",
        diesel: "Diesel",
        hybrid: "Hybride",
        plugin_hybrid: "Hybride rechargeable",
        electric: "Électrique",
        none: "Pas de voiture",
      },
      flightsHeading: "Vols cette année",
      flightsShortLabel: "Court-courrier (moins de 1500 km, ex. Paris-Londres)",
      flightsMediumLabel: "Moyen-courrier (1500-5000 km, ex. Paris-Athènes)",
      flightsLongLabel: "Long-courrier (plus de 5000 km, ex. Paris-New York)",
      transitHeading: "Transports en commun",
      transitRailLabel: "Train, km par an",
      transitBusLabel: "Bus, km par an",
    },
    home: {
      heading: "Votre logement",
      help: "Nous répartissons chauffage et électricité selon la taille du foyer. Deux personnes partageant un logement comptent chacune pour la moitié.",
      householdSizeLabel: "Combien de personnes vivent avec vous (vous compris) ?",
      heatingFuelLabel: "Comment votre logement est-il chauffé ?",
      heatingFuelOptions: {
        gas: "Gaz naturel",
        oil: "Fioul",
        electric: "Électricité (pompe à chaleur ou résistif)",
        district: "Réseau de chaleur",
        wood: "Bois / biomasse",
        none: "Sans chauffage",
      },
      heatingKWhLabel: "kWh de chauffage par an (facultatif)",
      heatingKWhHelp: "Laissez vide pour utiliser la moyenne nationale de 12 000 kWh/an.",
      electricityKWhLabel: "kWh d'électricité par an (facultatif)",
      electricityKWhHelp: "Laissez vide pour utiliser la moyenne nationale de 3 800 kWh/an.",
    },
    consumption: {
      heading: "Ce que vous achetez",
      help: "Vêtements, électronique, mobilier, services. Une catégorie indicative.",
      options: {
        light: "Faible",
        moderate: "Modéré",
        heavy: "Important",
      },
      optionsHelp: {
        light: "Acheter peu, réparer, seconde main quand possible",
        moderate: "Consommateur européen/américain moyen",
        heavy: "Achats neufs fréquents, fast fashion, derniers gadgets",
      },
    },
    back: "Retour",
    next: "Suivant",
    seeResults: "Voir mon empreinte",
  },
  result: {
    heading: "Votre empreinte annuelle",
    youEmitTemplate: "{tons} tonnes de CO2",
    perYearLabel: "par an",
    percentileTemplate: "Top {percent}% en {country}",
    bottomPercentileTemplate: "Bas {percent}% en {country}",
    compareHeading: "Comment vous vous situez",
    compareYou: "Vous",
    compareCountryAvg: "Moyenne en {country}",
    compareWorldAvg: "Moyenne mondiale",
    compareParisBudget: "Objectif Paris (2030)",
    compareTop1: "Top 1% mondial",
    breakdownHeading: "D'où cela vient",
    breakdownLabels: {
      diet: "Alimentation",
      transport: "Voiture et transports",
      flights: "Vols",
      home: "Logement (chauffage + électricité)",
      consumption: "Achats",
    },
    downloadReport: "Télécharger le rapport (PDF)",
    recalculate: "Recommencer",
    shareLine: "J'émets {tons} tonnes de CO2 par an. Et vous ?",
  },
  comedic: {
    tagline: "Votre année, en CO2.",
  },
  statistics: {
    heading: "Les chiffres derrière",
    worldAverageLabel: "Moyenne mondiale",
    parisLabel: "Objectif Paris",
    top1Label: "Top 1% mondial",
    bottom50Label: "Moitié inférieure mondiale",
    perCapitaUnit: "tCO2 par personne/an",
  },
  chart: {
    historicalHeading: "CO2 par habitant dans le temps",
    historicalSubtitle: "{country} face au monde, 1960-aujourd'hui",
    distributionHeading: "Où vous vous situez en {country}",
    distributionSubtitle: "Distribution estimée des empreintes individuelles",
    yourPositionLabel: "Vous",
    worldAverageLabel: "Moyenne mondiale",
    parisAlignedLabel: "Paris 2030",
  },
  compare: {
    heading: "CO2 par habitant par pays",
    intro:
      "Choisissez des pays à comparer côte à côte. Affiche les émissions annuelles par personne, le total national et la propreté du réseau électrique.",
    addCountry: "Ajouter un pays",
    removeAria: "Retirer {country}",
    columnCountry: "Pays",
    columnPerCapita: "CO2 par habitant",
    columnTotal: "Émissions totales",
    columnGrid: "Intensité carbone du réseau",
  },
  cta: {
    support: {
      heading: "Soutenir ce projet",
      body:
        "Gratuit, ouvert, sans publicité ni traçage. Si cela vous a aidé, un petit pourboire me permet de continuer à construire des outils éducatifs ouverts.",
      ctaLabel: "Donner sur Ko-fi",
    },
    furtherReading: {
      heading: "Pour aller plus loin",
      body:
        "Livres qui ont façonné ce calculateur. Acheter via Bookshop.org reverse une part aux librairies indépendantes locales.",
      ctaLabel: "Voir la liste de lecture",
      disclosure: "Lien d'affiliation Bookshop.",
    },
    sister: {
      heading: "Projets jumeaux",
      body: "Même design, autre question.",
      howpoorami: "Suis-je pauvre ?",
      howaffordable: "Puis-je m'acheter une maison ?",
    },
  },
  footer: {
    tagline: "Données ouvertes, vrais chiffres, sans traçage.",
    source: "Sources",
    license: "Licence",
    madeBy: "Réalisé par Yohan Runhaar",
    about: "À propos",
    faq: "FAQ",
    methodology: "Méthodologie",
    github: "GitHub",
    support: "Offrez-moi un café",
    buildDateTemplate: "Données du {date}",
  },
  common: {
    tonsCO2Unit: "tCO2",
    perPersonPerYear: "par personne et par an",
    loading: "Chargement. .",
    errorTitle: "Quelque chose s'est mal passé",
    errorBody: "Rechargez la page. Si le problème persiste, ouvrez une issue sur GitHub.",
  },
  report: {
    title: "Rapport personnel d'empreinte carbone",
    subtitle: "Votre année en CO2, en contexte.",
    preparedFor: "Préparé pour : {country}, {date}",
    downloadButton: "Télécharger le PDF",
    generatingLabel: "Génération du rapport. .",
    methodology: "Comment nous avons calculé",
    source: "Source",
    footer: "howgreenami.org",
    cover: {
      heading: "Votre empreinte carbone annuelle",
      subhead: "{tons} tCO2 par an",
    },
    summary: {
      heading: "Résumé",
      totalLabel: "Émissions annuelles totales",
      comparedToCountry: "vs. moyenne {country}",
      comparedToWorld: "vs. moyenne mondiale",
      comparedToParis: "vs. objectif Paris",
    },
    breakdown: {
      heading: "D'où cela vient",
      explanation:
        "Vos propres choix, classés par impact. La plus grosse ligne est généralement la plus facile à bouger.",
    },
    action: {
      heading: "Ce qui change vraiment le chiffre",
      intro: "L'action individuelle fait partie du tableau, pas tout le tableau. Voici ce qui compte le plus.",
      diet: "Moins de viande rouge déplace la ligne alimentation ; le 100% végétal la déplace le plus.",
      travel: "Un long-courrier évité bat une année de conduite raisonnable.",
      home: "Isoler, puis électrifier le chauffage (pompe à chaleur), c'est le plus gros levier au logement.",
      system: "Voter, vos économies et où vous placez votre argent façonnent le système dans lequel vous vivez.",
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
