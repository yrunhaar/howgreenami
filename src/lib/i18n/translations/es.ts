import type { Dictionary } from "../dictionary";

export const es: Dictionary = {
  meta: {
    siteTitle: "¿Qué huella de carbono dejo?",
    homeTitleTemplate: "¿Qué huella de carbono dejo? | howgreenami.org",
    homeDescription:
      "Una herramienta gratuita y abierta que convierte tu estilo de vida en toneladas de CO2 al año, y la compara con la media de tu país, la mundial y el objetivo del Acuerdo de París.",
    homeOgTitle: "¿Qué huella de carbono dejas?",
    homeOgDescription:
      "Dieta, coche, vuelos, calefacción. Mira tus toneladas de CO2 frente al promedio de tu país y al objetivo climático.",
    countryTitleTemplate: "{country}: CO2 per cápita y qué significa para ti",
    countryDescription:
      "{country} emite {value} toneladas de CO2 por persona al año. Mira dónde encajas y cómo se compara con el objetivo climático.",
  },
  nav: {
    home: "¿Qué tan verde soy?",
    compare: "Comparar países",
    methodology: "Metodología",
    faq: "Preguntas",
    about: "Sobre el proyecto",
    report: "Informe",
    menu: "Menú",
    close: "Cerrar",
  },
  home: {
    headline: "¿Qué huella de carbono dejas?",
    subheadline:
      "Dieta, coche, vuelos, calefacción. Convertimos tu estilo de vida en toneladas de CO2 al año y lo comparamos con tu país, el mundo y el objetivo de París.",
    chooseCountryLabel: "¿Dónde vives?",
    geoDetectingLabel: "Detectando tu país. .",
    geoDetectedLabel: "Creemos que estás en {country}. ¿No es así? Elige otro abajo.",
    youAreInLabel: "Mostrando datos de {country}",
    orPick: "o elige un país",
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
    heading: "Cuéntanos sobre tu año",
    intro:
      "Cuatro pasos cortos. Salta lo que no sepas. Los valores por defecto reflejan un estilo de vida típico en tu país.",
    stepLabel: "Paso {current} de {total}",
    steps: {
      diet: "Dieta",
      transport: "Transporte",
      home: "Hogar",
      stuff: "Compras",
    },
    diet: {
      heading: "¿Qué comes en una semana típica?",
      help: "La dieta supone aproximadamente una quinta parte de la huella en países ricos. La proteína animal domina el impacto.",
      options: {
        heavy_meat: "Mucha carne",
        medium_meat: "Carne moderada",
        low_meat: "Poca carne",
        pescatarian: "Pescetariano",
        vegetarian: "Vegetariano",
        vegan: "Vegano",
      },
      optionsHelp: {
        heavy_meat: "Carne en casi todas las comidas; >100 g/día",
        medium_meat: "Carne casi a diario; 50-100 g/día",
        low_meat: "Carne unas veces a la semana; <50 g/día",
        pescatarian: "Pescado, pero sin animales terrestres",
        vegetarian: "Sin carne ni pescado; lácteos y huevos",
        vegan: "Sin productos de origen animal",
      },
    },
    transport: {
      heading: "¿Cómo te mueves?",
      help: "Sumamos coche, vuelos y transporte público. Las distancias son ida y vuelta.",
      carKmLabel: "Kilómetros en coche al año",
      carKmHelp: "Toda tu conducción combinada. Un coche europeo típico recorre 12 000 km/año, uno estadounidense 19 000.",
      carFuelLabel: "Combustible del coche",
      fuelOptions: {
        petrol: "Gasolina",
        diesel: "Diésel",
        hybrid: "Híbrido",
        plugin_hybrid: "Híbrido enchufable",
        electric: "Eléctrico",
        none: "Sin coche",
      },
      flightsHeading: "Vuelos este año",
      flightsShortLabel: "Corto (menos de 1500 km)",
      flightsMediumLabel: "Medio (1500-5000 km)",
      flightsLongLabel: "Largo (más de 5000 km)",
      transitHeading: "Transporte público",
      transitRailLabel: "Tren, km/año",
      transitBusLabel: "Autobús, km/año",
    },
    home: {
      heading: "Tu casa",
      help: "Repartimos calefacción y electricidad entre los miembros del hogar.",
      householdSizeLabel: "¿Cuántas personas viven contigo (tú incluido)?",
      heatingFuelLabel: "¿Cómo se calienta tu casa?",
      heatingFuelOptions: {
        gas: "Gas natural",
        oil: "Gasóleo",
        electric: "Electricidad (bomba de calor o resistivo)",
        district: "Calefacción de distrito",
        wood: "Leña / biomasa",
        none: "Sin calefacción",
      },
      heatingKWhLabel: "kWh de calefacción al año (opcional)",
      heatingKWhHelp: "Déjalo en blanco para usar el promedio nacional de 12 000 kWh/año.",
      electricityKWhLabel: "kWh de electricidad al año (opcional)",
      electricityKWhHelp: "Déjalo en blanco para usar el promedio nacional de 3800 kWh/año.",
    },
    consumption: {
      heading: "Cosas que compras",
      help: "Ropa, electrónica, muebles, servicios. Una categoría aproximada.",
      options: {
        light: "Ligero",
        moderate: "Moderado",
        heavy: "Intenso",
      },
      optionsHelp: {
        light: "Comprar poco, reparar, segunda mano",
        moderate: "Consumidor europeo/estadounidense medio",
        heavy: "Compras frecuentes, moda rápida, últimos gadgets",
      },
    },
    back: "Atrás",
    next: "Siguiente",
    seeResults: "Ver mi huella",
  },
  result: {
    heading: "Tu huella anual",
    youEmitTemplate: "{tons} toneladas de CO2",
    perYearLabel: "al año",
    percentileTemplate: "Top {percent}% en {country}",
    bottomPercentileTemplate: "Bajo {percent}% en {country}",
    compareHeading: "Cómo te comparas",
    compareYou: "Tú",
    compareCountryAvg: "Media de {country}",
    compareWorldAvg: "Media mundial",
    compareParisBudget: "Objetivo París (2030)",
    compareTop1: "Top 1% mundial",
    breakdownHeading: "De dónde viene",
    breakdownLabels: {
      diet: "Comida",
      transport: "Coche y transporte",
      flights: "Vuelos",
      home: "Hogar (calefacción + electricidad)",
      consumption: "Compras",
    },
    downloadReport: "Descargar informe (PDF)",
    recalculate: "Empezar de nuevo",
    shareLine: "Emito {tons} toneladas de CO2 al año. ¿Y tú?",
  },
  comedic: {
    tagline: "Tu año, en CO2.",
  },
  statistics: {
    heading: "Los números detrás",
    worldAverageLabel: "Media mundial",
    parisLabel: "Objetivo París",
    top1Label: "Top 1% mundial",
    bottom50Label: "Mitad inferior mundial",
    perCapitaUnit: "tCO2 por persona/año",
  },
  chart: {
    historicalHeading: "CO2 per cápita en el tiempo",
    historicalSubtitle: "{country} frente al mundo, 1960-hoy",
    distributionHeading: "Dónde estás en {country}",
    distributionSubtitle: "Distribución estimada de huellas personales",
    yourPositionLabel: "Tú",
    worldAverageLabel: "Media mundial",
    parisAlignedLabel: "Objetivo París 2030",
  },
  compare: {
    heading: "CO2 per cápita por país",
    intro:
      "Elige países para compararlos. Muestra emisiones anuales por persona, total nacional y limpieza de la red eléctrica.",
    addCountry: "Añadir país",
    removeAria: "Quitar {country}",
    columnCountry: "País",
    columnPerCapita: "CO2 per cápita",
    columnTotal: "Emisiones totales",
    columnGrid: "Intensidad de la red",
  },
  cta: {
    support: {
      heading: "Apoya el proyecto",
      body:
        "Es gratis, abierto, sin anuncios ni rastreo. Si te ayudó, una pequeña propina me permite seguir construyendo herramientas educativas abiertas.",
      ctaLabel: "Donar en Ko-fi",
    },
    furtherReading: {
      heading: "Lecturas recomendadas",
      body:
        "Libros que dieron forma a esta calculadora. Comprar a través de Bookshop.org reparte una parte con librerías independientes.",
      ctaLabel: "Ver lista de lectura",
      disclosure: "Enlace de afiliado de Bookshop.",
    },
    sister: {
      heading: "Proyectos hermanos",
      body: "Mismo diseño, otra pregunta.",
      howpoorami: "¿Qué tan pobre soy?",
      howaffordable: "¿Puedo permitirme una casa?",
    },
  },
  footer: {
    tagline: "Datos abiertos, números reales, sin rastreo.",
    source: "Fuentes",
    license: "Licencia",
    madeBy: "Hecho por Yohan Runhaar",
    about: "Acerca de",
    faq: "Preguntas frecuentes",
    methodology: "Metodología",
    github: "GitHub",
    support: "Invítame a un café",
    buildDateTemplate: "Datos del {date}",
  },
  common: {
    tonsCO2Unit: "tCO2",
    perPersonPerYear: "por persona y año",
    loading: "Cargando. .",
    errorTitle: "Algo salió mal",
    errorBody: "Recarga la página. Si sigue ocurriendo, abre un issue en GitHub.",
  },
  report: {
    title: "Informe personal de huella de carbono",
    subtitle: "Tu año en CO2, en contexto.",
    preparedFor: "Preparado para: {country}, {date}",
    downloadButton: "Descargar PDF",
    generatingLabel: "Generando tu informe. .",
    methodology: "Cómo lo calculamos",
    source: "Fuente",
    footer: "howgreenami.org",
    cover: {
      heading: "Tu huella de carbono anual",
      subhead: "{tons} tCO2 al año",
    },
    summary: {
      heading: "Resumen",
      totalLabel: "Emisiones anuales totales",
      comparedToCountry: "vs. media de {country}",
      comparedToWorld: "vs. media mundial",
      comparedToParis: "vs. objetivo París",
    },
    breakdown: {
      heading: "De dónde viene",
      explanation:
        "Tus propias decisiones, ordenadas por impacto. La línea más grande suele ser la más fácil de mover.",
    },
    action: {
      heading: "Lo que de verdad mueve la aguja",
      intro: "La acción individual es parte del cuadro, no todo. Esto suele ser lo que más importa.",
      diet: "Menos carne roja mueve la dieta; basado en plantas la mueve más.",
      travel: "Saltarse un vuelo de larga distancia gana a un año de conducción cuidadosa.",
      home: "Aislar y luego electrificar la calefacción (bomba de calor) es lo más grande en casa.",
      system: "Votar, dónde ahorras y dónde abres cuenta moldea el sistema en el que vives.",
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
