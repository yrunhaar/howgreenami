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
    map: "Map",
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
    headlineTemplate: "Quão verde é a pessoa média em {country}?",
    verdictBelowParis: "Abaixo da meta alinhada com Paris",
    verdictBelowWorld: "Abaixo da média mundial",
    verdictAboveWorld: "Acima da média mundial",
    verdictHighest: "Entre os maiores emissores por pessoa",
    bodyTemplate:
      "{country} emite {value} tCO2 por pessoa por ano, {worldComparison}, e {parisComparison}. Posição {rank} de {total} países por emissões per capita.",
    bodyMultiplierAbove: "{factor}× a média mundial",
    bodyMultiplierBelow: "{factor}× menos do que a média mundial",
    bodyParisAbove: "{factor}× a meta de Paris para 2030",
    bodyParisBelow: "abaixo da meta de Paris para 2030",
    statPerCapitaLabel: "CO2 per capita",
    statPerCapitaSub: "por pessoa, por ano",
    statTotalLabel: "Emissões totais",
    statTotalSub: "{population} M de habitantes",
    statGridLabel: "Rede elétrica",
    statGridSub: "CO2 por kWh de eletricidade",
    historyHeading: "Como mudaram as emissões de {country} ao longo do tempo",
    historyBodyTemplate:
      "As emissões per capita de {country} atingiram o pico de {peakValue} tCO2 em {peakYear}. Hoje: {todayValue} tCO2. {trend} No mesmo período, a média mundial passou de {worldStart} tCO2 em {worldYear} para {worldToday} tCO2 hoje.",
    historyTrendDropTemplate: "Isso é uma queda de {pct}% desde {startYear}.",
    historyTrendRiseTemplate: "Isso é uma subida de {pct}% desde {startYear}.",
    historyTrendFlat: "Praticamente estável ao longo do período.",
    calculatorHeadingTemplate: "Calcule a sua própria pegada em {country}",
    calculatorSubheadingTemplate:
      "Dieta, condução, voos, aquecimento. Convertemos o seu estilo de vida em toneladas de CO2 por ano e comparamos com a média de {country}.",
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
    landingTitle: "O seu relatório pessoal de pegada de carbono",
    landingFreeBadge: "Gratuito. Sem registo, sem pagamento, sem email",
    landingCta: "Gerar o meu relatório",
    landingFeatureA: {
      title: "As suas toneladas, em contexto",
      body:
        "Calculado a partir dos fatores de emissão da DEFRA e da intensidade de carbono da rede elétrica do seu país. Comparado com o seu país, o mundo e a meta de Paris.",
    },
    landingFeatureB: {
      title: "Contexto nacional e histórico",
      body:
        "Onde o seu país se posiciona no ranking global de emissões e como evoluíram as suas emissões de CO2 per capita ao longo das décadas.",
    },
    landingFeatureC: {
      title: "Totalmente privado",
      body:
        "O relatório é gerado no seu browser. Nada é enviado para um servidor. Sem email, sem conta, sem rastreio.",
    },
    landingPicker: {
      title: "Gere o seu relatório",
      subtitle: "Escolha um país, indique as suas toneladas anuais e nós tratamos do resto.",
      countryLabel: "País",
      tonsLabel: "As suas emissões anuais (tCO2)",
      tonsHelp: "Se já usou a calculadora, o seu valor aparece acima. Caso contrário, escolha um valor representativo ou use primeiro a calculadora da página inicial.",
      generateButton: "Gerar o PDF",
      generatingButton: "A gerar...",
    },
    pdfPageLabel: "Página",
    pdfFooterAttribution: "howgreenami.org · Dados abertos · Sem rastreio",
    pdfCoverGeneratedLabel: "Gerado",
    pdfYourFootprintLabel: "A sua pegada anual",
    pdfPercentileLeadIn: "Emite",
    pdfPercentilePopulation: "toneladas de CO2 equivalente por ano",
    pdfCoverNarrativeAboveTemplate:
      "A sua pegada anual de {tons} tCO2 está {factor}× acima da média mundial per capita e {parisFactor}× acima do orçamento de Paris para 2030. As páginas seguintes detalham de onde vêm as suas emissões, como se comparam entre países e o que mais altera o número.",
    pdfCoverNarrativeBelowTemplate:
      "A sua pegada anual de {tons} tCO2 está abaixo da média mundial per capita. As páginas seguintes mostram a sua repartição por categoria, onde o seu país encaixa no panorama global e o que poderia baixar ainda mais o número.",
    pdfSection1Title: "Onde está",
    pdfSection1Body:
      "Três linhas de referência: o orçamento pessoal alinhado com Paris para 2030, a média mundial per capita e a média per capita do seu país. O seu número é traçado ao lado.",
    pdfSection2Title: "De onde vem",
    pdfSection2Body:
      "As suas emissões divididas por categoria. Dieta, transportes, voos, energia doméstica e consumo. A maior rubrica é geralmente a mais fácil de mover.",
    pdfSection3Title: "Contexto do país",
    pdfSection3Body:
      "As emissões per capita do seu país, comparadas com todos os outros países do conjunto de dados, com a intensidade da rede e as emissões nacionais totais como contexto.",
    pdfCrossCountryTitle: "Mesmo estilo de vida, outro país",
    pdfCrossCountryBody:
      "O seu comportamento mantém-se constante; só mudam a rede elétrica e o sistema alimentar do país. Os mesmos voos, a mesma dieta, os mesmos quilómetros percorridos: fatores de emissão diferentes.",
    pdfCrossCountryColCountry: "País",
    pdfCrossCountryColPerCapita: "CO2 per capita",
    pdfCrossCountryColRatio: "Face ao seu país",
    pdfCrossCountryInsight:
      "A diferença na intensidade da rede é o maior multiplicador. O mesmo veículo elétrico emite cerca de 6× menos por km em França do que na Polónia. A mesma chaleira. O mesmo ar condicionado. Os mesmos números por trás do seu comportamento, resultados climáticos diferentes.",
    pdfHistoricalTitle: "Como evoluíram as emissões",
    pdfHistoricalBody:
      "CO2 per capita no seu país no período para o qual a Our World in Data tem registos de emissões territoriais. Uma linha mais alta significa mais emissões por pessoa.",
    pdfHistoricalInsightTemplate:
      "As emissões per capita de {country} eram de {firstValue} tCO2 em {firstYear}. Em {lastYear}: {lastValue} tCO2. {direction} {magnitude} tCO2 por pessoa ao longo do período.",
    pdfHistoricalNoData:
      "Sem série histórica de longo prazo para este país. As páginas anteriores de comparação entre países e instantâneo continuam a aplicar-se.",
    pdfTakeawaysTitle: "O que verdadeiramente move o número",
    pdfTakeawaysIntro:
      "Leitura pessoal do seu instantâneo. Ações ordenadas aproximadamente pelo carbono evitado por esforço, não pela facilidade.",
    pdfTakeawaysHigh:
      "Está bastante acima da média do país. A maior alavanca para si é quase certamente o avião: uma única ida e volta transatlântica equivale a 1,6 tCO2, mais do que um ano inteiro de condução cuidadosa num pequeno carro a gasolina.",
    pdfTakeawaysMedium:
      "Está aproximadamente na média do país. A alavanca dominante é mexer numa das três grandes categorias: dieta (carne vermelha para base vegetal), viagens (um voo de longo curso a menos) ou casa (isolar e eletrificar o aquecimento).",
    pdfTakeawaysLow:
      "Está abaixo da média do país. A alavanca que resta é sobretudo sistémica: a rede elétrica de que depende a sua casa, o sistema alimentar de onde se abastece o seu supermercado e como o país constrói novas infraestruturas de transporte.",
    pdfTakeawaysGlobalContext:
      "A ação individual é parte do quadro, não o quadro todo. A maior alavanca é coletiva: como se constrói a rede, como se planeiam as cidades, como se taxa a poluição. Votar e o banco onde tem conta moldam o sistema em que vive.",
    pdfMethodologyTitle: "Metodologia",
    pdfMethodologyBody:
      "Dieta a partir de Scarborough et al. 2023 (Nature Food). Transportes e aquecimento a partir dos Greenhouse Gas Reporting Conversion Factors 2024 da DEFRA (Reino Unido). Emissões nacionais per capita da Our World in Data / Global Carbon Project 2022. Intensidade da rede elétrica da IEA Electricity Information 2023. O cálculo corre inteiramente no browser; nada é enviado para um servidor.",
    pdfTipTitle: "Gostou deste relatório?",
    pdfTipBody:
      "É gratuito e sem publicidade. Se for útil, uma pequena contribuição no Ko-fi permite-me continuar a construir ferramentas educativas abertas.",
    pdfFilenameTemplate: "howgreenami-{country}-{date}.pdf",
  },
};
