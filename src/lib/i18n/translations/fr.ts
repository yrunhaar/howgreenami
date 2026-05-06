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
    headlineTemplate: "À quel point la personne moyenne en {country} est-elle verte ?",
    verdictBelowParis: "Sous l'objectif aligné sur Paris",
    verdictBelowWorld: "Sous la moyenne mondiale",
    verdictAboveWorld: "Au-dessus de la moyenne mondiale",
    verdictHighest: "Parmi les plus gros émetteurs par personne",
    bodyTemplate:
      "{country} émet {value} tCO2 par personne et par an, {worldComparison}, et {parisComparison}. Classé {rank}e sur {total} pays par émissions par habitant.",
    bodyMultiplierAbove: "{factor}× la moyenne mondiale",
    bodyMultiplierBelow: "{factor}× moins que la moyenne mondiale",
    bodyParisAbove: "{factor}× l'objectif Paris pour 2030",
    bodyParisBelow: "sous l'objectif Paris pour 2030",
    statPerCapitaLabel: "CO2 par habitant",
    statPerCapitaSub: "par personne, par an",
    statTotalLabel: "Émissions totales",
    statTotalSub: "{population} M d'habitants",
    statGridLabel: "Réseau électrique",
    statGridSub: "CO2 par kWh d'électricité",
    historyHeading: "Comment les émissions de {country} ont évolué",
    historyBodyTemplate:
      "Les émissions par habitant de {country} ont atteint un pic de {peakValue} tCO2 en {peakYear}. Aujourd'hui : {todayValue} tCO2. {trend} Sur la même période, la moyenne mondiale est passée de {worldStart} tCO2 en {worldYear} à {worldToday} tCO2 aujourd'hui.",
    historyTrendDropTemplate: "Soit une baisse de {pct}% depuis {startYear}.",
    historyTrendRiseTemplate: "Soit une hausse de {pct}% depuis {startYear}.",
    historyTrendFlat: "Globalement stable sur la période.",
    calculatorHeadingTemplate: "Calculez votre propre empreinte en {country}",
    calculatorSubheadingTemplate:
      "Alimentation, voiture, avion, chauffage. Nous traduisons votre mode de vie en tonnes de CO2 par an et le comparons à la moyenne de {country}.",
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
    landingTitle: "Votre rapport personnel d'empreinte carbone",
    landingFreeBadge: "Gratuit. Sans inscription, sans paiement, sans e-mail",
    landingCta: "Générer mon rapport",
    landingFeatureA: {
      title: "Vos tonnes, dans leur contexte",
      body:
        "Calculé à partir des facteurs d'émission DEFRA et de l'intensité carbone du réseau électrique de votre pays. Comparé à votre pays, au monde et à l'objectif Paris.",
    },
    landingFeatureB: {
      title: "Contexte national et historique",
      body:
        "Où se situe votre pays dans le classement mondial des émissions, et comment ses émissions de CO2 par habitant ont évolué au fil des décennies.",
    },
    landingFeatureC: {
      title: "Entièrement privé",
      body:
        "Le rapport est généré dans votre navigateur. Rien n'est envoyé à un serveur. Pas d'e-mail, pas de compte, pas de pistage.",
    },
    landingPicker: {
      title: "Générez votre rapport",
      subtitle: "Choisissez un pays, indiquez vos tonnes annuelles, on s'occupe du reste.",
      countryLabel: "Pays",
      tonsLabel: "Vos émissions annuelles (tCO2)",
      tonsHelp: "Si vous avez utilisé le calculateur, votre chiffre apparaît ci-dessus. Sinon, choisissez une valeur représentative ou utilisez d'abord le calculateur de la page d'accueil.",
      generateButton: "Générer le PDF",
      generatingButton: "Génération...",
    },
    pdfPageLabel: "Page",
    pdfFooterAttribution: "howgreenami.org · Données ouvertes · Sans pistage",
    pdfCoverGeneratedLabel: "Généré",
    pdfYourFootprintLabel: "Votre empreinte annuelle",
    pdfPercentileLeadIn: "Vous émettez",
    pdfPercentilePopulation: "tonnes de CO2 équivalent par an",
    pdfCoverNarrativeAboveTemplate:
      "Votre empreinte annuelle de {tons} tCO2 se situe {factor}× au-dessus de la moyenne mondiale par habitant et {parisFactor}× au-dessus du budget Paris pour 2030. Les pages qui suivent détaillent l'origine de vos émissions, leur comparaison entre pays et ce qui fait le plus bouger le chiffre.",
    pdfCoverNarrativeBelowTemplate:
      "Votre empreinte annuelle de {tons} tCO2 se situe sous la moyenne mondiale par habitant. Les pages qui suivent montrent votre répartition par catégorie, la place de votre pays dans le tableau mondial et ce qui pousserait le chiffre encore plus bas.",
    pdfSection1Title: "Où vous vous situez",
    pdfSection1Body:
      "Trois lignes de référence : le budget personnel aligné sur Paris pour 2030, la moyenne mondiale par habitant et la moyenne par habitant de votre pays. Votre chiffre est tracé à côté.",
    pdfSection2Title: "D'où ça vient",
    pdfSection2Body:
      "Vos émissions ventilées par catégorie. Alimentation, transport, vols, énergie domestique et consommation. La plus grosse ligne est généralement la plus facile à faire bouger.",
    pdfSection3Title: "Contexte national",
    pdfSection3Body:
      "Les émissions par habitant de votre pays, classées par rapport à tous les autres pays du jeu de données, avec l'intensité du réseau et la production nationale totale en contexte.",
    pdfCrossCountryTitle: "Même mode de vie, autre pays",
    pdfCrossCountryBody:
      "Votre comportement reste constant ; seuls le réseau électrique et le système alimentaire du pays changent. Mêmes vols, même alimentation, mêmes kilomètres parcourus : facteurs d'émission différents.",
    pdfCrossCountryColCountry: "Pays",
    pdfCrossCountryColPerCapita: "CO2 par habitant",
    pdfCrossCountryColRatio: "Par rapport à votre pays",
    pdfCrossCountryInsight:
      "L'écart d'intensité du réseau est le plus grand multiplicateur. Le même véhicule électrique émet environ 6× moins par km en France qu'en Pologne. Même bouilloire. Même climatisation. Mêmes chiffres derrière votre comportement, des résultats climatiques différents.",
    pdfHistoricalTitle: "Comment les émissions ont évolué",
    pdfHistoricalBody:
      "CO2 par habitant dans votre pays sur la période pour laquelle Our World in Data dispose des registres d'émissions territoriales. Une ligne plus haute signifie plus d'émissions par personne.",
    pdfHistoricalInsightTemplate:
      "Les émissions par habitant de {country} étaient de {firstValue} tCO2 en {firstYear}. En {lastYear} : {lastValue} tCO2. {direction} {magnitude} tCO2 par personne sur la période.",
    pdfHistoricalNoData:
      "Pas de série historique de longue durée pour ce pays. Les pages de comparaison entre pays et d'instantané ci-dessus restent valables.",
    pdfTakeawaysTitle: "Ce qui fait vraiment bouger le chiffre",
    pdfTakeawaysIntro:
      "Lectures personnelles de votre instantané. Actions classées approximativement par carbone évité par effort, et non par facilité.",
    pdfTakeawaysHigh:
      "Vous êtes bien au-dessus de la moyenne nationale. Le plus gros levier pour vous est presque à coup sûr l'avion : un seul aller-retour transatlantique représente 1,6 tCO2, plus qu'une année entière de conduite sobre avec une petite voiture essence.",
    pdfTakeawaysMedium:
      "Vous êtes à peu près dans la moyenne nationale. Le levier dominant est de faire bouger l'une des trois grandes catégories : alimentation (viande rouge vers végétal), voyages (un vol long-courrier en moins) ou logement (isolation puis électrification du chauffage).",
    pdfTakeawaysLow:
      "Vous êtes sous la moyenne nationale. Le levier qui reste est surtout systémique : le réseau électrique qui alimente votre logement, le système alimentaire dont s'approvisionne votre supermarché et la façon dont le pays construit ses nouvelles infrastructures de transport.",
    pdfTakeawaysGlobalContext:
      "L'action individuelle fait partie du tableau, pas tout le tableau. Le levier le plus grand est collectif : comment le réseau est construit, comment les villes sont aménagées, comment la pollution est taxée. Voter et la banque où vous êtes façonnent le système dans lequel vous vivez.",
    pdfMethodologyTitle: "Méthodologie",
    pdfMethodologyBody:
      "Alimentation d'après Scarborough et al. 2023 (Nature Food). Transport et chauffage d'après les Greenhouse Gas Reporting Conversion Factors 2024 de DEFRA (Royaume-Uni). Émissions nationales par habitant d'après Our World in Data / Global Carbon Project 2022. Intensité du réseau électrique d'après IEA Electricity Information 2023. Le calcul s'exécute entièrement dans le navigateur ; rien n'est envoyé à un serveur.",
    pdfTipTitle: "Vous avez aimé ce rapport ?",
    pdfTipBody:
      "Il est gratuit et sans publicité. S'il est utile, un petit pourboire sur Ko-fi me permet de continuer à construire des outils pédagogiques ouverts.",
    pdfFilenameTemplate: "howgreenami-{country}-{date}.pdf",
  },
};
