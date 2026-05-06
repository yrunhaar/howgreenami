import type { Dictionary } from "../dictionary";

export const pt: Dictionary = {
  meta: {
    siteTitle: "Qual é o tamanho da minha pegada de carbono?",
    homeTitleTemplate: "Qual é o tamanho da minha pegada de carbono? | howgreenami.org",
    homeDescription:
      "Uma ferramenta gratuita e aberta que converte o seu estilo de vida em toneladas de CO2 por ano e coloca esse número ao lado da média do seu país, da média mundial e do objetivo alinhado com o Acordo de Paris.",
    homeOgTitle: "Qual é o tamanho da sua pegada de carbono?",
    homeOgDescription:
      "Dieta, carro, voos, aquecimento. Veja as suas toneladas de CO2 ao lado da média nacional e do objetivo climático. Números reais, sem registo.",
    countryTitleTemplate: "{country}: CO2 per capita e o que significa para si",
    countryDescription:
      "{country} emite {value} toneladas de CO2 por pessoa por ano. Veja onde se enquadra e como se compara com o objetivo climático.",
  },
  nav: {
    home: "Quão ecológico sou?",
    compare: "Comparar países",
    methodology: "Metodologia",
    faq: "FAQ",
    about: "Sobre",
    report: "Relatório",
    menu: "Menu",
    close: "Fechar",
  },
  home: {
    headline: "Qual é o tamanho da sua pegada de carbono?",
    subheadline:
      "Dieta, carro, voos, aquecimento. Convertemos o seu estilo de vida em toneladas de CO2 por ano e comparamos com o seu país, o mundo e o objetivo de Paris.",
    chooseCountryLabel: "Onde vive?",
    geoDetectingLabel: "A detetar o seu país. .",
    geoDetectedLabel: "Achamos que está em {country}. Errado? Escolha outro país abaixo.",
    youAreInLabel: "A mostrar dados de {country}",
    orPick: "ou escolha um país",
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
    heading: "Conte-nos sobre o seu ano",
    intro:
      "Quatro passos curtos. Salte o que não souber. Os valores predefinidos refletem um estilo de vida típico no seu país.",
    stepLabel: "Passo {current} de {total}",
    steps: {
      diet: "Dieta",
      transport: "Transportes",
      home: "Casa",
      stuff: "Compras",
    },
    diet: {
      heading: "O que come numa semana típica?",
      help: "A dieta representa cerca de um quinto da pegada nos países ricos. A proteína animal domina o impacto.",
      options: {
        heavy_meat: "Muita carne",
        medium_meat: "Carne moderada",
        low_meat: "Pouca carne",
        pescatarian: "Pescetariano",
        vegetarian: "Vegetariano",
        vegan: "Vegano",
      },
      optionsHelp: {
        heavy_meat: "Carne em quase todas as refeições; >100 g/dia",
        medium_meat: "Carne quase todos os dias; 50-100 g/dia",
        low_meat: "Carne algumas vezes por semana; <50 g/dia",
        pescatarian: "Peixe, mas sem animais terrestres",
        vegetarian: "Sem carne nem peixe; lacticínios e ovos",
        vegan: "Sem produtos de origem animal",
      },
    },
    transport: {
      heading: "Como se desloca?",
      help: "Somamos carro, voos e transportes públicos. As distâncias são ida e volta.",
      carKmLabel: "Quilómetros de carro por ano",
      carKmHelp: "Toda a sua condução combinada. Um carro europeu típico faz 12 000 km/ano, um norte-americano 19 000.",
      carFuelLabel: "Combustível do carro",
      fuelOptions: {
        petrol: "Gasolina",
        diesel: "Gasóleo",
        hybrid: "Híbrido",
        plugin_hybrid: "Híbrido plug-in",
        electric: "Elétrico",
        none: "Sem carro",
      },
      flightsHeading: "Voos este ano",
      flightsShortLabel: "Curto curso (menos de 1500 km, p. ex. Lisboa-Paris)",
      flightsMediumLabel: "Médio curso (1500-5000 km, p. ex. Lisboa-Atenas)",
      flightsLongLabel: "Longo curso (mais de 5000 km, p. ex. Lisboa-Nova Iorque)",
      transitHeading: "Transportes públicos",
      transitRailLabel: "Comboio, km por ano",
      transitBusLabel: "Autocarro, km por ano",
    },
    home: {
      heading: "A sua casa",
      help: "Dividimos aquecimento e eletricidade pelo tamanho do agregado. Duas pessoas a partilhar uma casa contam metade cada.",
      householdSizeLabel: "Quantas pessoas vivem consigo (incluindo a si)?",
      heatingFuelLabel: "Como é aquecida a sua casa?",
      heatingFuelOptions: {
        gas: "Gás natural",
        oil: "Gasóleo de aquecimento",
        electric: "Eletricidade (bomba de calor ou resistiva)",
        district: "Aquecimento urbano",
        wood: "Lenha / biomassa",
        none: "Sem aquecimento",
      },
      heatingKWhLabel: "kWh de aquecimento por ano (opcional)",
      heatingKWhHelp: "Deixe em branco para usar a média nacional de 12 000 kWh/ano.",
      electricityKWhLabel: "kWh de eletricidade por ano (opcional)",
      electricityKWhHelp: "Deixe em branco para usar a média nacional de 3 800 kWh/ano.",
    },
    consumption: {
      heading: "Coisas que compra",
      help: "Roupa, eletrónica, mobiliário, serviços. Uma categoria aproximada.",
      options: {
        light: "Leve",
        moderate: "Moderado",
        heavy: "Intenso",
      },
      optionsHelp: {
        light: "Comprar pouco, reparar, em segunda mão sempre que possível",
        moderate: "Consumidor europeu/americano médio",
        heavy: "Compras novas frequentes, fast fashion, últimos gadgets",
      },
    },
    back: "Voltar",
    next: "Seguinte",
    seeResults: "Ver a minha pegada",
  },
  result: {
    heading: "A sua pegada anual",
    youEmitTemplate: "{tons} toneladas de CO2",
    perYearLabel: "por ano",
    percentileTemplate: "Top {percent}% em {country}",
    bottomPercentileTemplate: "Últimos {percent}% em {country}",
    compareHeading: "Como se compara",
    compareYou: "Você",
    compareCountryAvg: "Média em {country}",
    compareWorldAvg: "Média mundial",
    compareParisBudget: "Objetivo Paris (2030)",
    compareTop1: "Top 1% mundial",
    breakdownHeading: "De onde vem",
    breakdownLabels: {
      diet: "Comida",
      transport: "Carro e transportes",
      flights: "Voos",
      home: "Casa (aquecimento + eletricidade)",
      consumption: "Compras",
    },
    downloadReport: "Descarregar relatório (PDF)",
    recalculate: "Começar de novo",
    shareLine: "Emito {tons} toneladas de CO2 por ano. E você?",
  },
  comedic: {
    tagline: "O seu ano, em CO2.",
  },
  statistics: {
    heading: "Os números por trás",
    worldAverageLabel: "Média mundial",
    parisLabel: "Objetivo Paris",
    top1Label: "Top 1% mundial",
    bottom50Label: "Metade inferior mundial",
    perCapitaUnit: "tCO2 por pessoa/ano",
  },
  chart: {
    historicalHeading: "CO2 per capita ao longo do tempo",
    historicalSubtitle: "{country} face ao mundo, 1960-hoje",
    distributionHeading: "Onde se situa em {country}",
    distributionSubtitle: "Distribuição estimada das pegadas pessoais",
    yourPositionLabel: "Você",
    worldAverageLabel: "Média mundial",
    parisAlignedLabel: "Paris 2030",
  },
  compare: {
    heading: "CO2 per capita por país",
    intro:
      "Escolha países para comparar lado a lado. Mostra emissões anuais por pessoa, total nacional e a limpeza da rede elétrica.",
    addCountry: "Adicionar país",
    removeAria: "Remover {country}",
    columnCountry: "País",
    columnPerCapita: "CO2 per capita",
    columnTotal: "Emissões totais",
    columnGrid: "Intensidade carbónica da rede",
  },
  cta: {
    support: {
      heading: "Apoiar este projeto",
      body:
        "É gratuito, aberto, sem anúncios nem rastreio. Se ajudou, uma pequena gorjeta permite-me continuar a construir ferramentas educativas abertas.",
      ctaLabel: "Doar no Ko-fi",
    },
    furtherReading: {
      heading: "Leituras adicionais",
      body:
        "Livros que moldaram esta calculadora. Comprar via Bookshop.org reverte uma parte para livrarias independentes locais.",
      ctaLabel: "Ver lista de leituras",
      disclosure: "Ligação de afiliado Bookshop.",
    },
    sister: {
      heading: "Projetos irmãos",
      body: "Mesmo desenho, outra pergunta.",
      howpoorami: "Quão pobre sou?",
      howaffordable: "Posso comprar uma casa?",
    },
  },
  footer: {
    tagline: "Dados abertos, números reais, sem rastreio.",
    source: "Fontes de dados",
    license: "Licença",
    madeBy: "Feito por Yohan Runhaar",
    about: "Sobre",
    faq: "Perguntas frequentes",
    methodology: "Metodologia",
    github: "GitHub",
    support: "Me pague um café",
    buildDateTemplate: "Dados de {date}",
  },
  common: {
    tonsCO2Unit: "tCO2",
    perPersonPerYear: "por pessoa por ano",
    loading: "A carregar. .",
    errorTitle: "Algo correu mal",
    errorBody: "Atualize a página. Se continuar a acontecer, abra uma issue no GitHub.",
  },
  report: {
    title: "Relatório pessoal de pegada de carbono",
    subtitle: "O seu ano em CO2, em contexto.",
    preparedFor: "Preparado para: {country}, {date}",
    downloadButton: "Descarregar PDF",
    generatingLabel: "A gerar o relatório. .",
    methodology: "Como calculámos",
    source: "Fonte",
    footer: "howgreenami.org",
    cover: {
      heading: "A sua pegada de carbono anual",
      subhead: "{tons} tCO2 por ano",
    },
    summary: {
      heading: "Resumo",
      totalLabel: "Emissões anuais totais",
      comparedToCountry: "vs. média {country}",
      comparedToWorld: "vs. média mundial",
      comparedToParis: "vs. objetivo Paris",
    },
    breakdown: {
      heading: "De onde vem",
      explanation:
        "As suas próprias decisões, ordenadas por impacto. A linha maior é normalmente a mais fácil de mover.",
    },
    action: {
      heading: "O que mexe mesmo no número",
      intro: "A ação individual é parte do quadro, não o quadro inteiro. Estas são as coisas que costumam pesar mais.",
      diet: "Menos carne vermelha mexe na linha da dieta; totalmente vegetal mexe-a mais.",
      travel: "Um voo de longo curso evitado vale mais do que um ano a conduzir com cuidado.",
      home: "Primeiro isolar, depois eletrificar o aquecimento (bomba de calor), é a maior alavanca em casa.",
      system: "Votar, onde poupa e onde tem o banco moldam o sistema em que vive.",
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
