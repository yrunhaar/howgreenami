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
    headlineTemplate: "Quanto è verde la persona media in {country}?",
    verdictBelowParis: "Sotto l'obiettivo di Parigi",
    verdictBelowWorld: "Sotto la media mondiale",
    verdictAboveWorld: "Sopra la media mondiale",
    verdictHighest: "Tra i maggiori emettitori per persona",
    bodyTemplate:
      "{country} emette {value} tCO2 per persona all'anno, {worldComparison}, e {parisComparison}. Posizione {rank} su {total} paesi per emissioni pro capite.",
    bodyMultiplierAbove: "{factor}× la media mondiale",
    bodyMultiplierBelow: "{factor}× in meno della media mondiale",
    bodyParisAbove: "{factor}× l'obiettivo di Parigi al 2030",
    bodyParisBelow: "sotto l'obiettivo di Parigi al 2030",
    statPerCapitaLabel: "CO2 pro capite",
    statPerCapitaSub: "per persona, all'anno",
    statTotalLabel: "Emissioni totali",
    statTotalSub: "{population} mln di persone",
    statGridLabel: "Rete elettrica",
    statGridSub: "CO2 per kWh di elettricità",
    historyHeading: "Come sono cambiate le emissioni di {country} nel tempo",
    historyBodyTemplate:
      "Le emissioni pro capite di {country} hanno raggiunto il picco di {peakValue} tCO2 nel {peakYear}. Oggi: {todayValue} tCO2. {trend} Nello stesso periodo la media mondiale è passata da {worldStart} tCO2 nel {worldYear} a {worldToday} tCO2 oggi.",
    historyTrendDropTemplate: "Un calo del {pct}% dal {startYear}.",
    historyTrendRiseTemplate: "Un aumento del {pct}% dal {startYear}.",
    historyTrendFlat: "Sostanzialmente stabile nel periodo.",
    calculatorHeadingTemplate: "Calcola la tua impronta in {country}",
    calculatorSubheadingTemplate:
      "Dieta, auto, voli, riscaldamento. Trasformiamo il tuo stile di vita in tonnellate di CO2 all'anno e lo confrontiamo con la media di {country}.",
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
    landingTitle: "Il tuo rapporto personale di impronta di carbonio",
    landingFreeBadge: "Gratis. Nessuna registrazione, nessun pagamento, nessuna email",
    landingCta: "Genera il mio rapporto",
    landingFeatureA: {
      title: "Le tue tonnellate, nel contesto",
      body:
        "Calcolato dai fattori di emissione DEFRA e dall'intensità della rete elettrica del tuo paese. Confrontato con il tuo paese, il mondo e l'obiettivo di Parigi.",
    },
    landingFeatureB: {
      title: "Contesto nazionale e storico",
      body:
        "Dove si colloca il tuo paese nella classifica mondiale delle emissioni e come sono evolute le emissioni di CO2 pro capite nei decenni.",
    },
    landingFeatureC: {
      title: "Completamente privato",
      body:
        "Il rapporto viene generato nel tuo browser. Nulla viene inviato a un server. Nessuna email, nessun account, nessun tracciamento.",
    },
    landingPicker: {
      title: "Genera il tuo rapporto",
      subtitle: "Scegli un paese, inserisci le tue tonnellate annuali, al resto ci pensiamo noi.",
      countryLabel: "Paese",
      tonsLabel: "Le tue emissioni annuali (tCO2)",
      tonsHelp: "Se hai usato il calcolatore, il tuo numero è mostrato sopra. Altrimenti scegli un valore rappresentativo o usa prima il calcolatore della pagina iniziale.",
      generateButton: "Genera il PDF",
      generatingButton: "Generazione...",
    },
    pdfPageLabel: "Pagina",
    pdfFooterAttribution: "howgreenami.org · Dati aperti · Nessun tracciamento",
    pdfCoverGeneratedLabel: "Generato",
    pdfYourFootprintLabel: "La tua impronta annuale",
    pdfPercentileLeadIn: "Emetti",
    pdfPercentilePopulation: "tonnellate di CO2 equivalente all'anno",
    pdfCoverNarrativeAboveTemplate:
      "La tua impronta annuale di {tons} tCO2 si colloca {factor}× sopra la media mondiale pro capite e {parisFactor}× sopra il budget di Parigi al 2030. Le pagine che seguono mostrano da dove provengono le tue emissioni, come si confrontano tra paesi e cosa fa muovere di più il numero.",
    pdfCoverNarrativeBelowTemplate:
      "La tua impronta annuale di {tons} tCO2 si colloca sotto la media mondiale pro capite. Le pagine che seguono mostrano la suddivisione per categoria, dove si colloca il tuo paese nel quadro globale e cosa farebbe scendere ulteriormente il numero.",
    pdfSection1Title: "Dove sei",
    pdfSection1Body:
      "Tre linee di riferimento: il budget personale allineato a Parigi per il 2030, la media mondiale pro capite e la media pro capite del tuo paese. Il tuo numero è tracciato accanto.",
    pdfSection2Title: "Da dove viene",
    pdfSection2Body:
      "Le tue emissioni divise per categoria. Dieta, trasporti, voli, energia domestica e consumi. La voce più grande è di solito la più facile da spostare.",
    pdfSection3Title: "Contesto del paese",
    pdfSection3Body:
      "Le emissioni pro capite del tuo paese, classificate rispetto a tutti gli altri paesi del dataset, con l'intensità della rete e le emissioni nazionali totali a contesto.",
    pdfCrossCountryTitle: "Stesso stile di vita, paese diverso",
    pdfCrossCountryBody:
      "Il tuo comportamento resta costante; cambiano solo la rete elettrica e il sistema alimentare del paese. Stessi voli, stessa dieta, stessi chilometri percorsi: fattori di emissione diversi.",
    pdfCrossCountryColCountry: "Paese",
    pdfCrossCountryColPerCapita: "CO2 pro capite",
    pdfCrossCountryColRatio: "Rispetto al tuo paese",
    pdfCrossCountryInsight:
      "Il divario nell'intensità della rete è il più grande moltiplicatore singolo. Lo stesso veicolo elettrico emette circa 6× in meno per km in Francia rispetto alla Polonia. Stesso bollitore. Stesso condizionatore. Stessi numeri dietro il tuo comportamento, esiti climatici diversi.",
    pdfHistoricalTitle: "Come sono evolute le emissioni",
    pdfHistoricalBody:
      "CO2 pro capite nel tuo paese nel periodo per cui Our World in Data dispone di registri di emissioni territoriali. Una linea più alta significa più emissioni per persona.",
    pdfHistoricalInsightTemplate:
      "Le emissioni pro capite di {country} erano {firstValue} tCO2 nel {firstYear}. Nel {lastYear}: {lastValue} tCO2. {direction} {magnitude} tCO2 a persona nel periodo.",
    pdfHistoricalNoData:
      "Nessuna serie storica di lungo periodo per questo paese. Le pagine di confronto tra paesi e di istantanea sopra restano valide.",
    pdfTakeawaysTitle: "Cosa muove davvero il numero",
    pdfTakeawaysIntro:
      "Lettura personale della tua istantanea. Azioni ordinate approssimativamente per carbonio risparmiato per sforzo, non per facilità.",
    pdfTakeawaysHigh:
      "Sei ben sopra la media nazionale. La leva più grande per te è quasi certamente l'aereo: un solo viaggio transatlantico di andata e ritorno equivale a 1,6 tCO2, più di un anno intero di guida attenta con una piccola auto a benzina.",
    pdfTakeawaysMedium:
      "Sei più o meno nella media nazionale. La leva dominante è spostare una delle tre grandi categorie: dieta (carne rossa verso vegetale), viaggi (un volo a lungo raggio in meno) o casa (isolare ed elettrificare il riscaldamento).",
    pdfTakeawaysLow:
      "Sei sotto la media nazionale. La leva che resta è soprattutto sistemica: la rete elettrica da cui dipende la tua casa, il sistema alimentare da cui si rifornisce il tuo supermercato e come il paese costruisce le nuove infrastrutture di trasporto.",
    pdfTakeawaysGlobalContext:
      "L'azione personale è parte del quadro, non tutto il quadro. La leva più grande è collettiva: come si costruisce la rete, come si pianificano le città, come si tassa l'inquinamento. Votare e la banca dove tieni i risparmi plasmano il sistema in cui vivi.",
    pdfMethodologyTitle: "Metodologia",
    pdfMethodologyBody:
      "Dieta da Scarborough et al. 2023 (Nature Food). Trasporti e riscaldamento dai Greenhouse Gas Reporting Conversion Factors 2024 di DEFRA (Regno Unito). Emissioni nazionali pro capite da Our World in Data / Global Carbon Project 2022. Intensità della rete elettrica da IEA Electricity Information 2023. Il calcolo viene eseguito interamente nel browser; nulla viene inviato a un server.",
    pdfTipTitle: "Ti è piaciuto questo rapporto?",
    pdfTipBody:
      "È gratis e senza pubblicità. Se ti è utile, una piccola mancia su Ko-fi mi permette di continuare a costruire strumenti educativi aperti.",
    pdfFilenameTemplate: "howgreenami-{country}-{date}.pdf",
  },
};
