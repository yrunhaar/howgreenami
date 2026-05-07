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
    map: "Map",
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
    headlineTemplate: "Wie grün lebt der Durchschnittsmensch in {country}?",
    verdictBelowParis: "Unter dem Paris-konformen Ziel",
    verdictBelowWorld: "Unter dem Weltdurchschnitt",
    verdictAboveWorld: "Über dem Weltdurchschnitt",
    verdictHighest: "Unter den höchsten Pro-Kopf-Emittenten",
    bodyTemplate:
      "{country} emittiert {value} tCO2 pro Person und Jahr, {worldComparison}, und {parisComparison}. Platz {rank} von {total} Ländern nach Pro-Kopf-Emissionen.",
    bodyMultiplierAbove: "{factor}× der Weltdurchschnitt",
    bodyMultiplierBelow: "{factor}× weniger als der Weltdurchschnitt",
    bodyParisAbove: "{factor}× das Paris-konforme Ziel für 2030",
    bodyParisBelow: "unter dem Paris-konformen Ziel für 2030",
    statPerCapitaLabel: "CO2 pro Kopf",
    statPerCapitaSub: "pro Person, pro Jahr",
    statTotalLabel: "Gesamtemissionen",
    statTotalSub: "{population} Mio. Menschen",
    statGridLabel: "Stromnetz",
    statGridSub: "CO2 pro kWh Strom",
    historyHeading: "Wie sich die Emissionen in {country} im Lauf der Zeit verändert haben",
    historyBodyTemplate:
      "Die Pro-Kopf-Emissionen in {country} erreichten in {peakYear} mit {peakValue} tCO2 ihren Höchststand. Heute: {todayValue} tCO2. {trend} Der Weltdurchschnitt im gleichen Zeitraum stieg von {worldStart} tCO2 in {worldYear} auf {worldToday} tCO2 heute.",
    historyTrendDropTemplate: "Das ist ein Rückgang von {pct}% seit {startYear}.",
    historyTrendRiseTemplate: "Das ist ein Anstieg von {pct}% seit {startYear}.",
    historyTrendFlat: "Im Zeitraum weitgehend stabil.",
    calculatorHeadingTemplate: "Berechnen Sie Ihren eigenen Fußabdruck in {country}",
    calculatorSubheadingTemplate:
      "Ernährung, Auto, Fliegen, Heizen. Wir rechnen Ihren Lebensstil in Tonnen CO2 pro Jahr um und vergleichen ihn mit dem Durchschnitt von {country}.",
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
    landingTitle: "Ihr persönlicher CO2-Fußabdruck-Bericht",
    landingFreeBadge: "Kostenlos. Keine Anmeldung, keine Zahlung, keine E-Mail nötig",
    landingCta: "Bericht erstellen",
    landingFeatureA: {
      title: "Ihre Tonnen, im Kontext",
      body:
        "Berechnet aus DEFRA-Emissionsfaktoren und der Stromnetz-Intensität Ihres Landes. Verglichen mit Ihrem Land, der Welt und dem Paris-konformen Ziel.",
    },
    landingFeatureB: {
      title: "Länder- und historischer Kontext",
      body:
        "Wo Ihr Land in der globalen Emissionsrangliste steht und wie sich seine Pro-Kopf-Emissionen über Jahrzehnte entwickelt haben.",
    },
    landingFeatureC: {
      title: "Vollständig privat",
      body:
        "Der Bericht wird in Ihrem Browser erstellt. Es wird nichts an einen Server gesendet. Keine E-Mail, kein Konto, kein Tracking.",
    },
    landingPicker: {
      title: "Bericht erstellen",
      subtitle: "Wählen Sie ein Land, geben Sie Ihre jährlichen Tonnen ein, den Rest erledigen wir.",
      countryLabel: "Land",
      tonsLabel: "Ihre jährlichen Emissionen (tCO2)",
      tonsHelp: "Wenn Sie den Rechner verwendet haben, steht Ihre Zahl oben. Andernfalls wählen Sie einen repräsentativen Wert oder nutzen zuerst den Rechner auf der Startseite.",
      generateButton: "PDF erstellen",
      generatingButton: "Wird erstellt...",
    },
    pdfPageLabel: "Seite",
    pdfFooterAttribution: "howgreenami.org · Offene Daten · Kein Tracking",
    pdfCoverGeneratedLabel: "Erstellt",
    pdfYourFootprintLabel: "Ihr jährlicher Fußabdruck",
    pdfPercentileLeadIn: "Sie emittieren",
    pdfPercentilePopulation: "Tonnen CO2-Äquivalent pro Jahr",
    pdfCoverNarrativeAboveTemplate:
      "Ihr jährlicher Fußabdruck von {tons} tCO2 liegt {factor}× über dem weltweiten Pro-Kopf-Durchschnitt und {parisFactor}× über dem Paris-konformen 2030-Budget. Die folgenden Seiten zeigen, woher Ihre Emissionen stammen, wie sie über Ländergrenzen hinweg verglichen werden und was die Zahl am stärksten verändert.",
    pdfCoverNarrativeBelowTemplate:
      "Ihr jährlicher Fußabdruck von {tons} tCO2 liegt unter dem weltweiten Pro-Kopf-Durchschnitt. Die folgenden Seiten zeigen Ihre Kategorienaufteilung, wo Ihr Land im globalen Bild steht und was die Zahl noch weiter senken würde.",
    pdfSection1Title: "Wo Sie stehen",
    pdfSection1Body:
      "Drei Referenzlinien: das Paris-konforme persönliche Budget für 2030, der weltweite Pro-Kopf-Durchschnitt und der Pro-Kopf-Durchschnitt Ihres Landes. Ihre Zahl wird daneben dargestellt.",
    pdfSection2Title: "Woraus es sich zusammensetzt",
    pdfSection2Body:
      "Ihre Emissionen, aufgeteilt nach Kategorien. Ernährung, Verkehr, Flüge, Energie zu Hause und Konsum. Der größte Posten lässt sich meist am leichtesten verändern.",
    pdfSection3Title: "Länderkontext",
    pdfSection3Body:
      "Die Pro-Kopf-Emissionen Ihres Landes im Vergleich zu allen anderen Ländern im Datensatz, ergänzt um die Stromnetz-Intensität und die nationalen Gesamtemissionen.",
    pdfCrossCountryTitle: "Gleicher Lebensstil, anderes Land",
    pdfCrossCountryBody:
      "Ihr Verhalten bleibt gleich; nur das Stromnetz und das Ernährungssystem des Landes ändern sich. Gleiche Flüge, gleiche Ernährung, gleiche gefahrene Kilometer: andere Emissionsfaktoren.",
    pdfCrossCountryColCountry: "Land",
    pdfCrossCountryColPerCapita: "CO2 pro Kopf",
    pdfCrossCountryColRatio: "Im Vergleich zu Ihrem Land",
    pdfCrossCountryInsight:
      "Der Unterschied in der Netzintensität ist der größte Einzelmultiplikator. Dasselbe Elektroauto emittiert in Frankreich rund 6× weniger pro km als in Polen. Gleicher Wasserkocher. Gleiche Klimaanlage. Dieselben Zahlen hinter Ihrem Verhalten, andere klimatische Folgen.",
    pdfHistoricalTitle: "Wie sich die Emissionen entwickelt haben",
    pdfHistoricalBody:
      "Pro-Kopf-CO2 in Ihrem Land über den Zeitraum, für den Our World in Data territoriale Emissionsdaten vorliegen. Eine höhere Linie bedeutet höhere Pro-Kopf-Emissionen.",
    pdfHistoricalInsightTemplate:
      "Die Pro-Kopf-Emissionen in {country} betrugen {firstValue} tCO2 im Jahr {firstYear}. Bis {lastYear}: {lastValue} tCO2. {direction} {magnitude} tCO2 pro Person im Zeitraum.",
    pdfHistoricalNoData:
      "Keine langfristige historische Reihe für dieses Land verfügbar. Die Länder- und Snapshot-Seiten oben gelten weiterhin.",
    pdfTakeawaysTitle: "Was die Zahl wirklich bewegt",
    pdfTakeawaysIntro:
      "Persönliche Lesart Ihrer Momentaufnahme. Maßnahmen ungefähr nach Wirkung pro Aufwand sortiert, nicht nach Bequemlichkeit.",
    pdfTakeawaysHigh:
      "Sie liegen deutlich über dem Landesdurchschnitt. Der größte Einzelhebel für Sie ist mit ziemlicher Sicherheit das Fliegen: ein einziger Transatlantik-Hin- und Rückflug entspricht 1,6 tCO2, mehr als ein ganzes Jahr sparsames Fahren mit einem kleinen Benziner.",
    pdfTakeawaysMedium:
      "Sie liegen ungefähr im Landesdurchschnitt. Der dominante Hebel besteht darin, eine der drei großen Kategorien zu verschieben: Ernährung (rotes Fleisch zu pflanzlich), Reisen (ein Langstreckenflug weniger) oder Zuhause (dämmen und Heizung elektrifizieren).",
    pdfTakeawaysLow:
      "Sie liegen unter dem Landesdurchschnitt. Der verbleibende Hebel ist überwiegend systemisch: das Stromnetz, an dem Ihr Zuhause hängt, das Ernährungssystem, aus dem Ihr Supermarkt bezieht, und wie das Land neue Verkehrsinfrastruktur baut.",
    pdfTakeawaysGlobalContext:
      "Persönliches Handeln ist Teil des Bildes, nicht das ganze Bild. Der größere Hebel ist kollektiv: wie das Netz aufgebaut wird, wie Städte geplant werden, wie Verschmutzung besteuert wird. Wahlen und die Bank, bei der Sie sind, prägen das System, in dem Sie leben.",
    pdfMethodologyTitle: "Methodik",
    pdfMethodologyBody:
      "Ernährung nach Scarborough et al. 2023 (Nature Food). Verkehr und Heizen nach den Greenhouse Gas Reporting Conversion Factors 2024 von DEFRA (UK). Pro-Kopf-Emissionen der Länder von Our World in Data / Global Carbon Project 2022. Stromnetz-Intensität nach IEA Electricity Information 2023. Die Berechnung läuft vollständig im Browser; nichts wird an einen Server gesendet.",
    pdfTipTitle: "Hat Ihnen dieser Bericht gefallen?",
    pdfTipBody:
      "Er ist kostenlos und werbefrei. Wenn er nützlich war, lässt mich ein kleiner Ko-fi-Beitrag weiter offene Bildungswerkzeuge bauen.",
    pdfFilenameTemplate: "howgreenami-{country}-{date}.pdf",
  },
};
