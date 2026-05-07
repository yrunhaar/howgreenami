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
    map: "Map",
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
  map: {
    title: "World map of per-capita CO2 emissions",
    subtitle:
      "Per-person CO2 by country. Tap or click any country for the full per-capita context, historical trajectory, and how its number compares to the Paris-aligned 2030 target.",
    metricPerCapita: "Per-capita CO2",
    metricGrid: "Grid carbon intensity",
    metricTotal: "Total emissions",
    legendLow: "Lower",
    legendHigh: "Higher",
    noDataLabel: "No data",
    source: "Per-capita CO2 from Our World in Data / Global Carbon Project (2022). Grid carbon intensity from IEA Electricity Information.",
    previewTitle: "Where countries sit on the world map",
    previewCta: "Open the full map",
  },
  country: {
    headlineTemplate: "¿Qué tan verde es la persona media en {country}?",
    verdictBelowParis: "Por debajo del objetivo París",
    verdictBelowWorld: "Por debajo de la media mundial",
    verdictAboveWorld: "Por encima de la media mundial",
    verdictHighest: "Entre los mayores emisores por persona",
    bodyTemplate:
      "{country} emite {value} tCO2 por persona al año, {worldComparison}, y {parisComparison}. Puesto {rank} de {total} países por emisiones per cápita.",
    bodyMultiplierAbove: "{factor}× la media mundial",
    bodyMultiplierBelow: "{factor}× menos que la media mundial",
    bodyParisAbove: "{factor}× el objetivo París para 2030",
    bodyParisBelow: "por debajo del objetivo París para 2030",
    statPerCapitaLabel: "CO2 per cápita",
    statPerCapitaSub: "por persona, al año",
    statTotalLabel: "Emisiones totales",
    statTotalSub: "{population} M de habitantes",
    statGridLabel: "Red eléctrica",
    statGridSub: "CO2 por kWh de electricidad",
    historyHeading: "Cómo cambiaron las emisiones de {country} con el tiempo",
    historyBodyTemplate:
      "Las emisiones per cápita de {country} alcanzaron su máximo de {peakValue} tCO2 en {peakYear}. Hoy: {todayValue} tCO2. {trend} La media mundial pasó de {worldStart} tCO2 en {worldYear} a {worldToday} tCO2 hoy.",
    historyTrendDropTemplate: "Eso es una caída del {pct}% desde {startYear}.",
    historyTrendRiseTemplate: "Eso es un aumento del {pct}% desde {startYear}.",
    historyTrendFlat: "Prácticamente plano durante el período.",
    calculatorHeadingTemplate: "Calcula tu propia huella en {country}",
    calculatorSubheadingTemplate:
      "Dieta, conducción, vuelos, calefacción. Convertimos tu estilo de vida en toneladas de CO2 al año y lo comparamos con la media de {country}.",
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
    landingTitle: "Tu informe personal de huella de carbono",
    landingFreeBadge: "Gratis. Sin registro, sin pago, sin correo electrónico",
    landingCta: "Generar mi informe",
    landingFeatureA: {
      title: "Tus toneladas, en contexto",
      body:
        "Calculado a partir de los factores de emisión de DEFRA y la intensidad de carbono de la red eléctrica de tu país. Comparado con tu país, el mundo y el objetivo París.",
    },
    landingFeatureB: {
      title: "Contexto nacional e histórico",
      body:
        "Dónde se sitúa tu país en la clasificación mundial de emisiones, y cómo han evolucionado sus emisiones de CO2 per cápita a lo largo de las décadas.",
    },
    landingFeatureC: {
      title: "Totalmente privado",
      body:
        "El informe se genera en tu navegador. No se envía nada a ningún servidor. Sin correo, sin cuenta, sin rastreo.",
    },
    landingPicker: {
      title: "Genera tu informe",
      subtitle: "Elige un país, introduce tus toneladas anuales y nosotros nos encargamos del resto.",
      countryLabel: "País",
      tonsLabel: "Tus emisiones anuales (tCO2)",
      tonsHelp: "Si has usado la calculadora, tu cifra aparece arriba. Si no, elige un valor representativo o usa primero la calculadora de la página principal.",
      generateButton: "Generar el PDF",
      generatingButton: "Generando...",
    },
    pdfPageLabel: "Página",
    pdfFooterAttribution: "howgreenami.org · Datos abiertos · Sin rastreo",
    pdfCoverGeneratedLabel: "Generado",
    pdfYourFootprintLabel: "Tu huella anual",
    pdfPercentileLeadIn: "Emites",
    pdfPercentilePopulation: "toneladas de CO2 equivalente al año",
    pdfCoverNarrativeAboveTemplate:
      "Tu huella anual de {tons} tCO2 está {factor}× por encima de la media mundial per cápita y {parisFactor}× por encima del presupuesto París para 2030. Las páginas siguientes desglosan de dónde vienen tus emisiones, cómo se comparan entre países y qué mueve más la cifra.",
    pdfCoverNarrativeBelowTemplate:
      "Tu huella anual de {tons} tCO2 está por debajo de la media mundial per cápita. Las páginas siguientes muestran tu desglose por categorías, dónde encaja tu país en el panorama mundial y qué empujaría la cifra todavía más abajo.",
    pdfSection1Title: "Dónde estás",
    pdfSection1Body:
      "Tres líneas de referencia: el presupuesto personal alineado con París para 2030, la media mundial per cápita y la media per cápita de tu país. Tu número aparece junto a ellas.",
    pdfSection2Title: "De dónde viene",
    pdfSection2Body:
      "Tus emisiones desglosadas por categoría. Dieta, transporte, vuelos, energía del hogar y consumo. La línea más grande suele ser la más fácil de mover.",
    pdfSection3Title: "Contexto del país",
    pdfSection3Body:
      "Las emisiones per cápita de tu país, comparadas con todos los demás del conjunto de datos, junto con la intensidad de carbono de la red y la producción nacional total.",
    pdfCrossCountryTitle: "Mismo estilo de vida, otro país",
    pdfCrossCountryBody:
      "Tu comportamiento se mantiene constante; solo cambian la red eléctrica y el sistema alimentario del país. Mismos vuelos, misma dieta, mismos kilómetros conducidos: distintos factores de emisión.",
    pdfCrossCountryColCountry: "País",
    pdfCrossCountryColPerCapita: "CO2 per cápita",
    pdfCrossCountryColRatio: "Frente a tu país",
    pdfCrossCountryInsight:
      "La diferencia en la intensidad de la red es el mayor multiplicador. El mismo coche eléctrico emite aproximadamente 6× menos por km en Francia que en Polonia. Misma tetera. Mismo aire acondicionado. Las mismas cifras detrás de tu comportamiento, resultados climáticos distintos.",
    pdfHistoricalTitle: "Cómo evolucionaron las emisiones",
    pdfHistoricalBody:
      "CO2 per cápita en tu país durante el período para el que Our World in Data dispone de registros de emisiones territoriales. Una línea más alta significa más emisiones por persona.",
    pdfHistoricalInsightTemplate:
      "Las emisiones per cápita de {country} eran de {firstValue} tCO2 en {firstYear}. En {lastYear}: {lastValue} tCO2. {direction} {magnitude} tCO2 por persona durante el período.",
    pdfHistoricalNoData:
      "No hay serie histórica de largo recorrido para este país. Las páginas anteriores de comparación entre países e instantánea siguen aplicándose.",
    pdfTakeawaysTitle: "Lo que de verdad mueve la cifra",
    pdfTakeawaysIntro:
      "Lectura personal de tu instantánea. Acciones ordenadas aproximadamente por carbono evitado por esfuerzo, no por facilidad.",
    pdfTakeawaysHigh:
      "Estás bastante por encima de la media del país. El mayor movimiento posible es casi con seguridad el avión: un solo viaje transatlántico de ida y vuelta son 1,6 tCO2, más que un año entero de conducción cuidadosa con un coche pequeño de gasolina.",
    pdfTakeawaysMedium:
      "Estás aproximadamente en la media del país. La palanca dominante a partir de aquí es mover una de las tres grandes categorías: dieta (carne roja a base vegetal), viajes (saltarse un vuelo de larga distancia) u hogar (aislar y electrificar la calefacción).",
    pdfTakeawaysLow:
      "Estás por debajo de la media del país. La palanca que queda es sobre todo sistémica: la red eléctrica de la que depende tu casa, el sistema alimentario del que se abastece tu supermercado y cómo construye el país las nuevas infraestructuras de transporte.",
    pdfTakeawaysGlobalContext:
      "La acción individual es parte del cuadro, no todo el cuadro. La palanca más grande es colectiva: cómo se construye la red, cómo se planifican las ciudades, cómo se grava la contaminación. Votar y dónde tienes el banco moldean el sistema en el que vives.",
    pdfMethodologyTitle: "Metodología",
    pdfMethodologyBody:
      "Dieta de Scarborough et al. 2023 (Nature Food). Transporte y calefacción de los Greenhouse Gas Reporting Conversion Factors 2024 de DEFRA (Reino Unido). Emisiones nacionales per cápita de Our World in Data / Global Carbon Project 2022. Intensidad de la red eléctrica de IEA Electricity Information 2023. El cálculo se realiza íntegramente en el navegador; no se envía nada a ningún servidor.",
    pdfTipTitle: "¿Te ha sido útil este informe?",
    pdfTipBody:
      "Es gratis y sin publicidad. Si te resulta útil, una pequeña aportación en Ko-fi me permite seguir construyendo herramientas educativas abiertas.",
    pdfFilenameTemplate: "howgreenami-{country}-{date}.pdf",
  },
};
