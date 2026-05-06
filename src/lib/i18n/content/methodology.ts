/**
 * Methodology-page long-form content per locale.
 */

import type { LocaleCode } from "../locales";

export interface MethodologyContent {
  readonly h1: string;
  readonly intro: string;
  readonly sections: readonly {
    readonly heading: string;
    readonly body: readonly string[];
  }[];
  readonly sources: readonly { readonly title: string; readonly url: string; readonly note: string }[];
  readonly assumptions: {
    readonly heading: string;
    readonly body: readonly string[];
  };
}

const en: MethodologyContent = {
  h1: "Methodology",
  intro:
    "How the calculator turns your answers into tonnes of CO2 equivalent, and where every number comes from. No magic, no proprietary models.",
  sections: [
    {
      heading: "1. Diet",
      body: [
        "We use per-capita annual diet emissions from Scarborough et al. (2023, Nature Food), based on the EPIC-Oxford cohort. Six diet categories: heavy meat (>100 g/day), medium meat (50-100 g/day), low meat (<50 g/day), pescatarian, vegetarian, vegan.",
        "Values: heavy 3.32, medium 2.42, low 1.88, pescatarian 1.66, vegetarian 1.39, vegan 1.05 tCO2e/yr. These cover food production from farm to retail; they do not include cooking energy (which sits under home electricity).",
      ],
    },
    {
      heading: "2. Driving",
      body: [
        "Per-km factors from UK DEFRA Greenhouse Gas Reporting Conversion Factors 2024:",
        "Petrol/diesel average: 0.171 kg CO2e/km. Hybrid: 0.121. Plug-in hybrid: 0.084.",
        "For electric cars we apply 0.18 kWh/km consumption and multiply by your country's grid carbon intensity, so the same EV in France emits roughly 6x less than in Poland.",
      ],
    },
    {
      heading: "3. Flying",
      body: [
        "Per-passenger-km factors from DEFRA, including a 1.9x multiplier for non-CO2 high-altitude effects (radiative forcing): short 0.158, medium 0.149, long 0.146 kg CO2e/passenger-km.",
        "Typical round-trip distances: short 1500 km, medium 5000 km, long 18000 km. So one long-haul return is roughly 2.6 tCO2 by itself.",
      ],
    },
    {
      heading: "4. Home heating + electricity",
      body: [
        "Heating fuels (DEFRA, kg CO2e/kWh): natural gas 0.183, oil 0.247, district heat 0.140 (EU average), wood/biomass 0.020 (short-cycle).",
        "If your heating is electric, we apply your country's grid intensity instead. Electric resistive heating in France emits ~3 g CO2/kWh of heat; in Poland it emits ~119 g.",
        "Defaults if you skip the kWh fields: 12,000 kWh/yr heating, 3,800 kWh/yr electricity. Both are then divided by household size.",
      ],
    },
    {
      heading: "5. Stuff",
      body: [
        "Lifestyle consumption (clothes, electronics, furniture, services) is grouped into three OECD-style buckets: light 0.6, moderate 1.4, heavy 2.6 tCO2e/yr.",
        "These are rough averages, not granular line items. The big variance in this category is fast fashion and electronics churn.",
      ],
    },
    {
      heading: "6. Country comparisons",
      body: [
        "Per-capita country averages are territorial CO2 (production-based) for 2022 from the Global Carbon Project via Our World in Data. Consumption-based (importing the embodied carbon of imports) values would be a few percent higher for net importers like the UK and a few percent lower for big exporters like China.",
        "Population values are from the World Bank for 2023.",
        "Grid carbon intensity is from IEA Electricity Information for 2023.",
      ],
    },
    {
      heading: "7. Percentile estimation",
      body: [
        "There is no public micro-data on personal carbon footprints by country. We approximate the within-country distribution as log-normal around the country mean, with sigma ~0.55 (calibrated against UK and US household survey distributions).",
        "Treat the percentile as a ranking signal, not a precise statistic. The total tCO2 number is more reliable than the percentile.",
      ],
    },
  ],
  sources: [
    {
      title: "Our World in Data — CO2 emissions",
      url: "https://ourworldindata.org/co2-emissions",
      note: "Per-capita and total CO2 by country, 1750-present. CC BY 4.0.",
    },
    {
      title: "Global Carbon Project",
      url: "https://www.globalcarbonproject.org/",
      note: "Source for the OWID country series.",
    },
    {
      title: "UK DEFRA Greenhouse Gas Reporting Conversion Factors 2024",
      url: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2024",
      note: "Activity emission factors for transport, fuels, heating. Open Government Licence v3.0.",
    },
    {
      title: "Scarborough et al. (2023), Nature Food 4, 565-574",
      url: "https://www.nature.com/articles/s43016-023-00795-w",
      note: "Per-capita diet emissions by dietary pattern.",
    },
    {
      title: "Poore and Nemecek (2018), Science 360, 987-992",
      url: "https://www.science.org/doi/10.1126/science.aaq0216",
      note: "Foundational meta-analysis of food-system emissions.",
    },
    {
      title: "IEA Electricity Information",
      url: "https://www.iea.org/data-and-statistics/data-product/electricity-information",
      note: "Country-level grid carbon intensity.",
    },
    {
      title: "World Bank — Population",
      url: "https://data.worldbank.org/indicator/SP.POP.TOTL",
      note: "Country populations, 2023.",
    },
    {
      title: "World Inequality Lab — Climate Inequality Report 2023",
      url: "https://wid.world/news-article/climate-inequality-report-2023/",
      note: "Top 1 / top 10 / bottom 50 global emitter averages.",
    },
    {
      title: "IPCC AR6 Working Group III",
      url: "https://www.ipcc.ch/report/ar6/wg3/",
      note: "Per-capita Paris-aligned budget for 1.5C pathway.",
    },
  ],
  assumptions: {
    heading: "Key assumptions and caveats",
    body: [
      "Territorial emissions only. Imports' embedded carbon is not added to your country.",
      "No offsets are subtracted. They live in a separate accounting universe.",
      "Household energy is split equally between residents.",
      "The 1.9x flight multiplier reflects current scientific consensus on aviation non-CO2 effects.",
      "All numbers are estimates. The smallest decimal in this report is more precise than the underlying data.",
    ],
  },
};

const es: MethodologyContent = {
  h1: "Metodología",
  intro:
    "Cómo la calculadora convierte tus respuestas en toneladas de CO2 equivalente y de dónde sale cada número. Sin magia, sin modelos propietarios.",
  sections: [
    {
      heading: "1. Dieta",
      body: [
        "Usamos las emisiones anuales per cápita por dieta de Scarborough et al. (2023, Nature Food), basadas en la cohorte EPIC-Oxford. Seis categorías de dieta: mucha carne (>100 g/día), carne media (50-100 g/día), poca carne (<50 g/día), pescetariana, vegetariana, vegana.",
        "Valores: mucha 3,32, media 2,42, poca 1,88, pescetariana 1,66, vegetariana 1,39, vegana 1,05 tCO2e/año. Cubren la producción de alimentos de la granja al comercio; no incluyen la energía de cocinado (que va con la electricidad del hogar).",
      ],
    },
    {
      heading: "2. Conducción",
      body: [
        "Factores por km de los UK DEFRA Greenhouse Gas Reporting Conversion Factors 2024:",
        "Gasolina/diésel media: 0,171 kg CO2e/km. Híbrido: 0,121. Híbrido enchufable: 0,084.",
        "Para coches eléctricos aplicamos un consumo de 0,18 kWh/km y lo multiplicamos por la intensidad de carbono de la red de tu país, de modo que el mismo coche eléctrico en Francia emite cerca de 6 veces menos que en Polonia.",
      ],
    },
    {
      heading: "3. Vuelos",
      body: [
        "Factores por pasajero-km de DEFRA, incluyendo un multiplicador 1,9x por los efectos no-CO2 a gran altitud (forzamiento radiativo): corto 0,158, medio 0,149, largo 0,146 kg CO2e/pasajero-km.",
        "Distancias típicas de ida y vuelta: corto 1500 km, medio 5000 km, largo 18000 km. Así, un solo vuelo de largo recorrido ida y vuelta supone por sí mismo unas 2,6 tCO2.",
      ],
    },
    {
      heading: "4. Calefacción del hogar + electricidad",
      body: [
        "Combustibles de calefacción (DEFRA, kg CO2e/kWh): gas natural 0,183, gasóleo 0,247, calefacción de distrito 0,140 (media UE), madera/biomasa 0,020 (ciclo corto).",
        "Si tu calefacción es eléctrica, aplicamos en su lugar la intensidad de la red de tu país. La calefacción eléctrica resistiva en Francia emite ~3 g CO2/kWh de calor; en Polonia emite ~119 g.",
        "Valores por defecto si te saltas los campos de kWh: 12.000 kWh/año de calefacción, 3.800 kWh/año de electricidad. Después se dividen entre el tamaño del hogar.",
      ],
    },
    {
      heading: "5. Cosas",
      body: [
        "El consumo de estilo de vida (ropa, electrónica, mobiliario, servicios) se agrupa en tres tramos al estilo OCDE: ligero 0,6, moderado 1,4, intenso 2,6 tCO2e/año.",
        "Son medias gruesas, no líneas detalladas. La gran variabilidad en esta categoría está en la moda rápida y en la rotación de electrónica.",
      ],
    },
    {
      heading: "6. Comparaciones por país",
      body: [
        "Las medias per cápita por país son CO2 territorial (basado en producción) para 2022, del Global Carbon Project vía Our World in Data. Los valores basados en consumo (que añaden el carbono incorporado en las importaciones) serían algunos puntos porcentuales mayores para importadores netos como el Reino Unido, y algunos puntos menores para grandes exportadores como China.",
        "Los datos de población son del Banco Mundial para 2023.",
        "La intensidad de carbono de la red proviene de IEA Electricity Information para 2023.",
      ],
    },
    {
      heading: "7. Estimación del percentil",
      body: [
        "No hay microdatos públicos de huellas de carbono personales por país. Aproximamos la distribución dentro de cada país como log-normal en torno a la media nacional, con sigma ~0,55 (calibrada con distribuciones de encuestas de hogares de Reino Unido y EE. UU.).",
        "Trata el percentil como una señal de posicionamiento, no como una estadística precisa. El número total en tCO2 es más fiable que el percentil.",
      ],
    },
  ],
  sources: [
    {
      title: "Our World in Data, emisiones de CO2",
      url: "https://ourworldindata.org/co2-emissions",
      note: "CO2 per cápita y total por país, desde 1750. CC BY 4.0.",
    },
    {
      title: "Global Carbon Project",
      url: "https://www.globalcarbonproject.org/",
      note: "Fuente de la serie por país de OWID.",
    },
    {
      title: "UK DEFRA Greenhouse Gas Reporting Conversion Factors 2024",
      url: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2024",
      note: "Factores de emisión por actividad para transporte, combustibles y calefacción. Open Government Licence v3.0.",
    },
    {
      title: "Scarborough et al. (2023), Nature Food 4, 565-574",
      url: "https://www.nature.com/articles/s43016-023-00795-w",
      note: "Emisiones de dieta per cápita por patrón alimentario.",
    },
    {
      title: "Poore y Nemecek (2018), Science 360, 987-992",
      url: "https://www.science.org/doi/10.1126/science.aaq0216",
      note: "Metaanálisis fundacional de las emisiones del sistema alimentario.",
    },
    {
      title: "IEA Electricity Information",
      url: "https://www.iea.org/data-and-statistics/data-product/electricity-information",
      note: "Intensidad de carbono de la red por país.",
    },
    {
      title: "Banco Mundial, población",
      url: "https://data.worldbank.org/indicator/SP.POP.TOTL",
      note: "Poblaciones por país, 2023.",
    },
    {
      title: "World Inequality Lab, Climate Inequality Report 2023",
      url: "https://wid.world/news-article/climate-inequality-report-2023/",
      note: "Medias del 1% superior, 10% superior y 50% inferior de emisores globales.",
    },
    {
      title: "IPCC AR6 Grupo de Trabajo III",
      url: "https://www.ipcc.ch/report/ar6/wg3/",
      note: "Presupuesto per cápita alineado con París para una trayectoria de 1,5 °C.",
    },
  ],
  assumptions: {
    heading: "Supuestos y advertencias clave",
    body: [
      "Solo emisiones territoriales. El carbono incorporado de las importaciones no se suma a tu país.",
      "No se restan compensaciones. Viven en un universo contable aparte.",
      "La energía del hogar se reparte por igual entre los residentes.",
      "El multiplicador 1,9x para vuelos refleja el consenso científico actual sobre los efectos no-CO2 de la aviación.",
      "Todos los números son estimaciones. El decimal más fino de este informe es más preciso que los datos subyacentes.",
    ],
  },
};

const de: MethodologyContent = {
  h1: "Methodik",
  intro:
    "Wie der Rechner Ihre Antworten in Tonnen CO2-Äquivalent umrechnet und woher jede Zahl stammt. Keine Magie, keine proprietären Modelle.",
  sections: [
    {
      heading: "1. Ernährung",
      body: [
        "Wir verwenden jährliche Pro-Kopf-Emissionen je Ernährungsweise aus Scarborough et al. (2023, Nature Food), basierend auf der EPIC-Oxford-Kohorte. Sechs Ernährungskategorien: viel Fleisch (>100 g/Tag), mittel Fleisch (50-100 g/Tag), wenig Fleisch (<50 g/Tag), pescetarisch, vegetarisch, vegan.",
        "Werte: viel 3,32, mittel 2,42, wenig 1,88, pescetarisch 1,66, vegetarisch 1,39, vegan 1,05 tCO2e/Jahr. Sie umfassen die Lebensmittelproduktion vom Hof bis zum Handel; sie enthalten keine Kochenergie (die unter Haushaltsstrom fällt).",
      ],
    },
    {
      heading: "2. Autofahren",
      body: [
        "Faktoren pro km aus den UK DEFRA Greenhouse Gas Reporting Conversion Factors 2024:",
        "Benzin/Diesel im Mittel: 0,171 kg CO2e/km. Hybrid: 0,121. Plug-in-Hybrid: 0,084.",
        "Für Elektroautos setzen wir 0,18 kWh/km Verbrauch an und multiplizieren mit der Netz-CO2-Intensität Ihres Landes, sodass dasselbe E-Auto in Frankreich rund 6-mal weniger emittiert als in Polen.",
      ],
    },
    {
      heading: "3. Fliegen",
      body: [
        "Faktoren pro Passagier-km von DEFRA, inklusive eines 1,9x-Multiplikators für Nicht-CO2-Effekte in großer Höhe (Strahlungsantrieb): kurz 0,158, mittel 0,149, lang 0,146 kg CO2e/Passagier-km.",
        "Typische Hin- und Rückflugdistanzen: kurz 1500 km, mittel 5000 km, lang 18000 km. Ein einziger Langstrecken-Rückflug schlägt also bereits mit etwa 2,6 tCO2 zu Buche.",
      ],
    },
    {
      heading: "4. Heizen + Strom zu Hause",
      body: [
        "Heizenergieträger (DEFRA, kg CO2e/kWh): Erdgas 0,183, Heizöl 0,247, Fernwärme 0,140 (EU-Mittel), Holz/Biomasse 0,020 (Kurzzyklus).",
        "Wenn Sie elektrisch heizen, nutzen wir stattdessen die Netzintensität Ihres Landes. Eine elektrische Widerstandsheizung emittiert in Frankreich ~3 g CO2/kWh Wärme; in Polen ~119 g.",
        "Standardwerte, falls Sie die kWh-Felder leer lassen: 12.000 kWh/Jahr Heizung, 3.800 kWh/Jahr Strom. Beide werden dann durch die Haushaltsgröße geteilt.",
      ],
    },
    {
      heading: "5. Konsumgüter",
      body: [
        "Lebensstilkonsum (Kleidung, Elektronik, Möbel, Dienstleistungen) wird in drei OECD-artige Klassen gruppiert: leicht 0,6, mittel 1,4, schwer 2,6 tCO2e/Jahr.",
        "Es handelt sich um grobe Mittelwerte, nicht um Einzelposten. Die größte Streuung in dieser Kategorie kommt von Fast Fashion und schnellem Elektronikwechsel.",
      ],
    },
    {
      heading: "6. Ländervergleiche",
      body: [
        "Pro-Kopf-Länderdurchschnitte sind territoriale CO2-Emissionen (produktionsbasiert) für 2022 aus dem Global Carbon Project über Our World in Data. Konsumbasierte Werte (mit dem in Importen verkörperten Kohlenstoff) wären für Nettoimporteure wie das Vereinigte Königreich einige Prozent höher und für große Exporteure wie China einige Prozent niedriger.",
        "Bevölkerungswerte stammen von der Weltbank für 2023.",
        "Die Netz-CO2-Intensität stammt aus IEA Electricity Information für 2023.",
      ],
    },
    {
      heading: "7. Perzentilschätzung",
      body: [
        "Es gibt keine öffentlichen Mikrodaten zu persönlichen CO2-Fußabdrücken nach Land. Wir nähern die landesinterne Verteilung als log-normal um den Landesmittelwert an, mit Sigma ~0,55 (kalibriert anhand britischer und US-amerikanischer Haushaltsumfrageverteilungen).",
        "Behandeln Sie das Perzentil als Rangsignal, nicht als präzise Statistik. Der Gesamtwert in tCO2 ist verlässlicher als das Perzentil.",
      ],
    },
  ],
  sources: [
    {
      title: "Our World in Data, CO2-Emissionen",
      url: "https://ourworldindata.org/co2-emissions",
      note: "Pro-Kopf- und Gesamt-CO2 nach Land, 1750-heute. CC BY 4.0.",
    },
    {
      title: "Global Carbon Project",
      url: "https://www.globalcarbonproject.org/",
      note: "Quelle der OWID-Länderzeitreihe.",
    },
    {
      title: "UK DEFRA Greenhouse Gas Reporting Conversion Factors 2024",
      url: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2024",
      note: "Aktivitätsemissionsfaktoren für Verkehr, Brennstoffe, Heizung. Open Government Licence v3.0.",
    },
    {
      title: "Scarborough et al. (2023), Nature Food 4, 565-574",
      url: "https://www.nature.com/articles/s43016-023-00795-w",
      note: "Pro-Kopf-Emissionen nach Ernährungsmuster.",
    },
    {
      title: "Poore und Nemecek (2018), Science 360, 987-992",
      url: "https://www.science.org/doi/10.1126/science.aaq0216",
      note: "Grundlegende Metaanalyse der Emissionen des Lebensmittelsystems.",
    },
    {
      title: "IEA Electricity Information",
      url: "https://www.iea.org/data-and-statistics/data-product/electricity-information",
      note: "Netz-CO2-Intensität auf Länderebene.",
    },
    {
      title: "Weltbank, Bevölkerung",
      url: "https://data.worldbank.org/indicator/SP.POP.TOTL",
      note: "Länderbevölkerungen, 2023.",
    },
    {
      title: "World Inequality Lab, Climate Inequality Report 2023",
      url: "https://wid.world/news-article/climate-inequality-report-2023/",
      note: "Durchschnitte des oberen 1 / oberen 10 / unteren 50 Prozent globaler Emittenten.",
    },
    {
      title: "IPCC AR6 Arbeitsgruppe III",
      url: "https://www.ipcc.ch/report/ar6/wg3/",
      note: "Pro-Kopf-Paris-konformes Budget für den 1,5-°C-Pfad.",
    },
  ],
  assumptions: {
    heading: "Wichtige Annahmen und Vorbehalte",
    body: [
      "Nur territoriale Emissionen. Der eingebettete Kohlenstoff von Importen wird Ihrem Land nicht zugerechnet.",
      "Es werden keine Kompensationen abgezogen. Sie leben in einem getrennten Buchhaltungsuniversum.",
      "Haushaltsenergie wird gleichmäßig auf die Bewohner aufgeteilt.",
      "Der 1,9x-Multiplikator für Flüge spiegelt den aktuellen wissenschaftlichen Konsens zu Nicht-CO2-Effekten der Luftfahrt wider.",
      "Alle Zahlen sind Schätzungen. Die kleinste Dezimalstelle in diesem Bericht ist präziser als die zugrunde liegenden Daten.",
    ],
  },
};

const fr: MethodologyContent = {
  h1: "Méthodologie",
  intro:
    "Comment le calculateur transforme vos réponses en tonnes de CO2 équivalent, et d'où vient chaque nombre. Pas de magie, pas de modèles propriétaires.",
  sections: [
    {
      heading: "1. Alimentation",
      body: [
        "Nous utilisons les émissions annuelles par habitant selon le régime alimentaire de Scarborough et al. (2023, Nature Food), à partir de la cohorte EPIC-Oxford. Six catégories de régime : forte consommation de viande (>100 g/jour), moyenne (50-100 g/jour), faible (<50 g/jour), pesco-végétarien, végétarien, végétalien.",
        "Valeurs : forte 3,32, moyenne 2,42, faible 1,88, pesco-végétarien 1,66, végétarien 1,39, végétalien 1,05 tCO2e/an. Elles couvrent la production alimentaire de la ferme au commerce ; elles n'incluent pas l'énergie de cuisson (qui relève de l'électricité domestique).",
      ],
    },
    {
      heading: "2. Voiture",
      body: [
        "Facteurs par km issus des UK DEFRA Greenhouse Gas Reporting Conversion Factors 2024 :",
        "Essence/diesel moyen : 0,171 kg CO2e/km. Hybride : 0,121. Hybride rechargeable : 0,084.",
        "Pour les voitures électriques, nous appliquons une consommation de 0,18 kWh/km et multiplions par l'intensité carbone du réseau de votre pays, de sorte que la même voiture électrique en France émet environ 6 fois moins qu'en Pologne.",
      ],
    },
    {
      heading: "3. Avion",
      body: [
        "Facteurs par passager-km de DEFRA, incluant un multiplicateur 1,9x pour les effets non-CO2 en haute altitude (forçage radiatif) : court 0,158, moyen 0,149, long 0,146 kg CO2e/passager-km.",
        "Distances aller-retour typiques : court 1500 km, moyen 5000 km, long 18000 km. Ainsi, un seul vol long-courrier aller-retour pèse à lui seul environ 2,6 tCO2.",
      ],
    },
    {
      heading: "4. Chauffage + électricité du logement",
      body: [
        "Combustibles de chauffage (DEFRA, kg CO2e/kWh) : gaz naturel 0,183, fioul 0,247, chauffage urbain 0,140 (moyenne UE), bois/biomasse 0,020 (cycle court).",
        "Si votre chauffage est électrique, nous appliquons à la place l'intensité du réseau de votre pays. Le chauffage électrique par effet Joule en France émet ~3 g CO2/kWh de chaleur ; en Pologne, ~119 g.",
        "Valeurs par défaut si vous laissez les champs kWh vides : 12 000 kWh/an de chauffage, 3 800 kWh/an d'électricité. Toutes deux sont ensuite divisées par la taille du foyer.",
      ],
    },
    {
      heading: "5. Biens",
      body: [
        "La consommation de mode de vie (vêtements, électronique, mobilier, services) est regroupée en trois catégories de type OCDE : légère 0,6, modérée 1,4, lourde 2,6 tCO2e/an.",
        "Ce sont des moyennes grossières, pas des lignes détaillées. La grande variabilité de cette catégorie tient à la fast fashion et à la rotation de l'électronique.",
      ],
    },
    {
      heading: "6. Comparaisons par pays",
      body: [
        "Les moyennes par habitant et par pays sont les émissions territoriales de CO2 (basées sur la production) pour 2022, issues du Global Carbon Project via Our World in Data. Les valeurs basées sur la consommation (qui ajoutent le carbone incorporé dans les importations) seraient quelques pour cent plus élevées pour les importateurs nets comme le Royaume-Uni, et quelques pour cent plus faibles pour les grands exportateurs comme la Chine.",
        "Les valeurs de population proviennent de la Banque mondiale pour 2023.",
        "L'intensité carbone du réseau provient d'IEA Electricity Information pour 2023.",
      ],
    },
    {
      heading: "7. Estimation du centile",
      body: [
        "Il n'existe pas de microdonnées publiques sur les empreintes carbone personnelles par pays. Nous approchons la distribution intra-pays par une loi log-normale autour de la moyenne nationale, avec un sigma ~0,55 (calibré sur les distributions des enquêtes ménages du Royaume-Uni et des États-Unis).",
        "Considérez le centile comme un signal de classement, pas comme une statistique précise. Le total en tCO2 est plus fiable que le centile.",
      ],
    },
  ],
  sources: [
    {
      title: "Our World in Data, émissions de CO2",
      url: "https://ourworldindata.org/co2-emissions",
      note: "CO2 par habitant et total par pays, de 1750 à aujourd'hui. CC BY 4.0.",
    },
    {
      title: "Global Carbon Project",
      url: "https://www.globalcarbonproject.org/",
      note: "Source de la série par pays d'OWID.",
    },
    {
      title: "UK DEFRA Greenhouse Gas Reporting Conversion Factors 2024",
      url: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2024",
      note: "Facteurs d'émission d'activité pour les transports, combustibles, chauffage. Open Government Licence v3.0.",
    },
    {
      title: "Scarborough et al. (2023), Nature Food 4, 565-574",
      url: "https://www.nature.com/articles/s43016-023-00795-w",
      note: "Émissions alimentaires par habitant selon le régime.",
    },
    {
      title: "Poore et Nemecek (2018), Science 360, 987-992",
      url: "https://www.science.org/doi/10.1126/science.aaq0216",
      note: "Méta-analyse fondatrice des émissions du système alimentaire.",
    },
    {
      title: "IEA Electricity Information",
      url: "https://www.iea.org/data-and-statistics/data-product/electricity-information",
      note: "Intensité carbone du réseau par pays.",
    },
    {
      title: "Banque mondiale, population",
      url: "https://data.worldbank.org/indicator/SP.POP.TOTL",
      note: "Populations par pays, 2023.",
    },
    {
      title: "World Inequality Lab, Climate Inequality Report 2023",
      url: "https://wid.world/news-article/climate-inequality-report-2023/",
      note: "Moyennes du top 1 / top 10 / bottom 50 des émetteurs mondiaux.",
    },
    {
      title: "IPCC AR6 Groupe de travail III",
      url: "https://www.ipcc.ch/report/ar6/wg3/",
      note: "Budget par habitant aligné sur Paris pour une trajectoire 1,5 °C.",
    },
  ],
  assumptions: {
    heading: "Hypothèses et mises en garde clés",
    body: [
      "Émissions territoriales uniquement. Le carbone incorporé dans les importations n'est pas ajouté à votre pays.",
      "Aucune compensation n'est soustraite. Elles vivent dans un univers comptable séparé.",
      "L'énergie du foyer est répartie à parts égales entre les résidents.",
      "Le multiplicateur de 1,9x pour les vols reflète le consensus scientifique actuel sur les effets non-CO2 de l'aviation.",
      "Tous les chiffres sont des estimations. La plus petite décimale de ce rapport est plus précise que les données sous-jacentes.",
    ],
  },
};

const it: MethodologyContent = {
  h1: "Metodologia",
  intro:
    "Come il calcolatore trasforma le tue risposte in tonnellate di CO2 equivalente e da dove proviene ogni numero. Niente magie, niente modelli proprietari.",
  sections: [
    {
      heading: "1. Dieta",
      body: [
        "Usiamo le emissioni annuali pro capite per dieta da Scarborough et al. (2023, Nature Food), basate sulla coorte EPIC-Oxford. Sei categorie di dieta: molta carne (>100 g/giorno), media (50-100 g/giorno), poca (<50 g/giorno), pescetariana, vegetariana, vegana.",
        "Valori: molta 3,32, media 2,42, poca 1,88, pescetariana 1,66, vegetariana 1,39, vegana 1,05 tCO2e/anno. Coprono la produzione alimentare dalla fattoria al commercio; non includono l'energia di cottura (che rientra nell'elettricità domestica).",
      ],
    },
    {
      heading: "2. Auto",
      body: [
        "Fattori per km dai UK DEFRA Greenhouse Gas Reporting Conversion Factors 2024:",
        "Benzina/diesel media: 0,171 kg CO2e/km. Ibrida: 0,121. Ibrida plug-in: 0,084.",
        "Per le auto elettriche applichiamo un consumo di 0,18 kWh/km e moltiplichiamo per l'intensità di carbonio della rete del tuo paese, così la stessa auto elettrica in Francia emette circa 6 volte meno che in Polonia.",
      ],
    },
    {
      heading: "3. Volo",
      body: [
        "Fattori per passeggero-km di DEFRA, incluso un moltiplicatore 1,9x per gli effetti non-CO2 ad alta quota (forzante radiativo): corto 0,158, medio 0,149, lungo 0,146 kg CO2e/passeggero-km.",
        "Distanze tipiche andata e ritorno: corto 1500 km, medio 5000 km, lungo 18000 km. Quindi un singolo volo a lungo raggio andata e ritorno pesa di per sé circa 2,6 tCO2.",
      ],
    },
    {
      heading: "4. Riscaldamento + elettricità domestica",
      body: [
        "Combustibili di riscaldamento (DEFRA, kg CO2e/kWh): gas naturale 0,183, gasolio 0,247, teleriscaldamento 0,140 (media UE), legna/biomassa 0,020 (ciclo breve).",
        "Se il tuo riscaldamento è elettrico, applichiamo invece l'intensità della rete del tuo paese. Il riscaldamento elettrico a resistenza in Francia emette ~3 g CO2/kWh di calore; in Polonia ~119 g.",
        "Valori predefiniti se salti i campi kWh: 12.000 kWh/anno di riscaldamento, 3.800 kWh/anno di elettricità. Entrambi vengono poi divisi per la dimensione del nucleo familiare.",
      ],
    },
    {
      heading: "5. Beni",
      body: [
        "I consumi di stile di vita (vestiti, elettronica, mobili, servizi) sono raggruppati in tre fasce di stampo OCSE: leggero 0,6, moderato 1,4, intenso 2,6 tCO2e/anno.",
        "Sono medie grossolane, non voci dettagliate. La grande variabilità di questa categoria deriva dal fast fashion e dal ricambio dell'elettronica.",
      ],
    },
    {
      heading: "6. Confronti tra paesi",
      body: [
        "Le medie pro capite per paese sono CO2 territoriali (basate sulla produzione) per il 2022, dal Global Carbon Project tramite Our World in Data. I valori basati sui consumi (che aggiungono il carbonio incorporato nelle importazioni) sarebbero qualche punto percentuale più alti per importatori netti come il Regno Unito e qualche punto più bassi per grandi esportatori come la Cina.",
        "I dati di popolazione sono della Banca Mondiale per il 2023.",
        "L'intensità di carbonio della rete proviene da IEA Electricity Information per il 2023.",
      ],
    },
    {
      heading: "7. Stima del percentile",
      body: [
        "Non esistono microdati pubblici sulle impronte di carbonio personali per paese. Approssimiamo la distribuzione interna a ciascun paese come log-normale attorno alla media nazionale, con sigma ~0,55 (calibrata sulle distribuzioni delle indagini sui nuclei familiari di Regno Unito e USA).",
        "Considera il percentile come un segnale di posizionamento, non come una statistica precisa. Il totale in tCO2 è più affidabile del percentile.",
      ],
    },
  ],
  sources: [
    {
      title: "Our World in Data, emissioni di CO2",
      url: "https://ourworldindata.org/co2-emissions",
      note: "CO2 pro capite e totale per paese, dal 1750 a oggi. CC BY 4.0.",
    },
    {
      title: "Global Carbon Project",
      url: "https://www.globalcarbonproject.org/",
      note: "Fonte della serie per paese di OWID.",
    },
    {
      title: "UK DEFRA Greenhouse Gas Reporting Conversion Factors 2024",
      url: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2024",
      note: "Fattori di emissione per attività relativi a trasporti, combustibili, riscaldamento. Open Government Licence v3.0.",
    },
    {
      title: "Scarborough et al. (2023), Nature Food 4, 565-574",
      url: "https://www.nature.com/articles/s43016-023-00795-w",
      note: "Emissioni alimentari pro capite per modello dietetico.",
    },
    {
      title: "Poore e Nemecek (2018), Science 360, 987-992",
      url: "https://www.science.org/doi/10.1126/science.aaq0216",
      note: "Meta-analisi fondante delle emissioni del sistema alimentare.",
    },
    {
      title: "IEA Electricity Information",
      url: "https://www.iea.org/data-and-statistics/data-product/electricity-information",
      note: "Intensità di carbonio della rete a livello di paese.",
    },
    {
      title: "Banca Mondiale, popolazione",
      url: "https://data.worldbank.org/indicator/SP.POP.TOTL",
      note: "Popolazioni per paese, 2023.",
    },
    {
      title: "World Inequality Lab, Climate Inequality Report 2023",
      url: "https://wid.world/news-article/climate-inequality-report-2023/",
      note: "Medie del top 1 / top 10 / bottom 50 degli emettitori globali.",
    },
    {
      title: "IPCC AR6 Gruppo di lavoro III",
      url: "https://www.ipcc.ch/report/ar6/wg3/",
      note: "Budget pro capite allineato con Parigi per un percorso a 1,5 °C.",
    },
  ],
  assumptions: {
    heading: "Ipotesi e avvertenze chiave",
    body: [
      "Solo emissioni territoriali. Il carbonio incorporato nelle importazioni non viene aggiunto al tuo paese.",
      "Nessuna compensazione viene sottratta. Vivono in un universo contabile separato.",
      "L'energia domestica è suddivisa equamente tra i residenti.",
      "Il moltiplicatore 1,9x per i voli riflette l'attuale consenso scientifico sugli effetti non-CO2 dell'aviazione.",
      "Tutti i numeri sono stime. Il decimale più piccolo in questo report è più preciso dei dati sottostanti.",
    ],
  },
};

const pt: MethodologyContent = {
  h1: "Metodologia",
  intro:
    "Como a calculadora transforma as suas respostas em toneladas de CO2 equivalente, e de onde vem cada número. Sem magia, sem modelos proprietários.",
  sections: [
    {
      heading: "1. Dieta",
      body: [
        "Usamos as emissões anuais per capita por dieta de Scarborough et al. (2023, Nature Food), com base na coorte EPIC-Oxford. Seis categorias de dieta: muita carne (>100 g/dia), média (50-100 g/dia), pouca (<50 g/dia), pescetariana, vegetariana, vegana.",
        "Valores: muita 3,32, média 2,42, pouca 1,88, pescetariana 1,66, vegetariana 1,39, vegana 1,05 tCO2e/ano. Cobrem a produção alimentar da quinta ao retalho; não incluem a energia de cozedura (que entra na eletricidade da casa).",
      ],
    },
    {
      heading: "2. Conduzir",
      body: [
        "Fatores por km dos UK DEFRA Greenhouse Gas Reporting Conversion Factors 2024:",
        "Gasolina/gasóleo média: 0,171 kg CO2e/km. Híbrido: 0,121. Híbrido plug-in: 0,084.",
        "Para carros elétricos aplicamos um consumo de 0,18 kWh/km e multiplicamos pela intensidade de carbono da rede do seu país, pelo que o mesmo elétrico em França emite cerca de 6 vezes menos do que na Polónia.",
      ],
    },
    {
      heading: "3. Voar",
      body: [
        "Fatores por passageiro-km da DEFRA, incluindo um multiplicador de 1,9x para os efeitos não-CO2 a grande altitude (forçamento radiativo): curto 0,158, médio 0,149, longo 0,146 kg CO2e/passageiro-km.",
        "Distâncias típicas ida e volta: curto 1500 km, médio 5000 km, longo 18000 km. Assim, um único voo de longo curso ida e volta representa por si só cerca de 2,6 tCO2.",
      ],
    },
    {
      heading: "4. Aquecimento + eletricidade da casa",
      body: [
        "Combustíveis de aquecimento (DEFRA, kg CO2e/kWh): gás natural 0,183, gasóleo de aquecimento 0,247, aquecimento urbano 0,140 (média UE), lenha/biomassa 0,020 (ciclo curto).",
        "Se o seu aquecimento for elétrico, aplicamos antes a intensidade da rede do seu país. O aquecimento elétrico por resistência em França emite ~3 g CO2/kWh de calor; na Polónia ~119 g.",
        "Valores por defeito se saltar os campos kWh: 12.000 kWh/ano de aquecimento, 3.800 kWh/ano de eletricidade. Ambos são depois divididos pelo tamanho do agregado.",
      ],
    },
    {
      heading: "5. Coisas",
      body: [
        "O consumo de estilo de vida (roupa, eletrónica, mobiliário, serviços) é agrupado em três escalões ao estilo OCDE: ligeiro 0,6, moderado 1,4, intenso 2,6 tCO2e/ano.",
        "São médias grosseiras, não rubricas detalhadas. A grande variabilidade desta categoria está na fast fashion e na rotação de eletrónica.",
      ],
    },
    {
      heading: "6. Comparações entre países",
      body: [
        "As médias per capita por país são CO2 territoriais (com base na produção) para 2022, do Global Carbon Project via Our World in Data. Os valores baseados no consumo (que somam o carbono incorporado nas importações) seriam alguns pontos percentuais maiores para importadores líquidos como o Reino Unido e alguns pontos menores para grandes exportadores como a China.",
        "Os valores de população são do Banco Mundial para 2023.",
        "A intensidade de carbono da rede provém de IEA Electricity Information para 2023.",
      ],
    },
    {
      heading: "7. Estimativa do percentil",
      body: [
        "Não existem microdados públicos sobre pegadas de carbono pessoais por país. Aproximamos a distribuição interna de cada país como log-normal em torno da média nacional, com sigma ~0,55 (calibrado contra distribuições de inquéritos a famílias do Reino Unido e dos EUA).",
        "Trate o percentil como um sinal de posicionamento, não como uma estatística precisa. O total em tCO2 é mais fiável do que o percentil.",
      ],
    },
  ],
  sources: [
    {
      title: "Our World in Data, emissões de CO2",
      url: "https://ourworldindata.org/co2-emissions",
      note: "CO2 per capita e total por país, de 1750 até hoje. CC BY 4.0.",
    },
    {
      title: "Global Carbon Project",
      url: "https://www.globalcarbonproject.org/",
      note: "Fonte da série por país do OWID.",
    },
    {
      title: "UK DEFRA Greenhouse Gas Reporting Conversion Factors 2024",
      url: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2024",
      note: "Fatores de emissão por atividade para transportes, combustíveis e aquecimento. Open Government Licence v3.0.",
    },
    {
      title: "Scarborough et al. (2023), Nature Food 4, 565-574",
      url: "https://www.nature.com/articles/s43016-023-00795-w",
      note: "Emissões alimentares per capita por padrão de dieta.",
    },
    {
      title: "Poore e Nemecek (2018), Science 360, 987-992",
      url: "https://www.science.org/doi/10.1126/science.aaq0216",
      note: "Meta-análise fundadora das emissões do sistema alimentar.",
    },
    {
      title: "IEA Electricity Information",
      url: "https://www.iea.org/data-and-statistics/data-product/electricity-information",
      note: "Intensidade de carbono da rede ao nível de cada país.",
    },
    {
      title: "Banco Mundial, população",
      url: "https://data.worldbank.org/indicator/SP.POP.TOTL",
      note: "Populações por país, 2023.",
    },
    {
      title: "World Inequality Lab, Climate Inequality Report 2023",
      url: "https://wid.world/news-article/climate-inequality-report-2023/",
      note: "Médias do top 1 / top 10 / bottom 50 dos emissores globais.",
    },
    {
      title: "IPCC AR6 Grupo de Trabalho III",
      url: "https://www.ipcc.ch/report/ar6/wg3/",
      note: "Orçamento per capita alinhado com Paris para uma trajetória de 1,5 °C.",
    },
  ],
  assumptions: {
    heading: "Pressupostos e ressalvas principais",
    body: [
      "Apenas emissões territoriais. O carbono incorporado nas importações não é somado ao seu país.",
      "Não são subtraídas compensações. Vivem num universo contabilístico separado.",
      "A energia da casa é repartida igualmente entre os residentes.",
      "O multiplicador de 1,9x para voos reflete o consenso científico atual sobre os efeitos não-CO2 da aviação.",
      "Todos os números são estimativas. A casa decimal mais pequena deste relatório é mais precisa do que os dados subjacentes.",
    ],
  },
};

const ja: MethodologyContent = {
  h1: "方法論",
  intro:
    "計算ツールがあなたの回答をどのように二酸化炭素換算トン (tCO2) に変換しているか、そしてすべての数値の出所を説明します。魔法はなく、独自モデルもありません。",
  sections: [
    {
      heading: "1. 食事",
      body: [
        "Scarborough et al. (2023, Nature Food) による EPIC-Oxford コホートに基づく、食事別の年間 1 人あたり排出量を使用しています。食事は 6 区分です。多肉食 (>100 g/日)、中肉食 (50-100 g/日)、少肉食 (<50 g/日)、ペスカタリアン、ベジタリアン、ヴィーガン。",
        "値: 多肉 3.32、中肉 2.42、少肉 1.88、ペスカタリアン 1.66、ベジタリアン 1.39、ヴィーガン 1.05 tCO2e/年。これらは農場から小売までの食料生産を対象とし、調理エネルギーは含みません (家庭電力に計上されます)。",
      ],
    },
    {
      heading: "2. 自動車",
      body: [
        "km あたりの係数は UK DEFRA Greenhouse Gas Reporting Conversion Factors 2024 から取得しています。",
        "ガソリン/ディーゼル平均: 0.171 kg CO2e/km。ハイブリッド: 0.121。プラグインハイブリッド: 0.084。",
        "電気自動車については 0.18 kWh/km の消費量を用い、あなたの国の電力網の炭素強度を掛け合わせます。そのため同じ電気自動車でも、フランスでの排出量はポーランドの約 6 分の 1 になります。",
      ],
    },
    {
      heading: "3. 飛行機",
      body: [
        "DEFRA による旅客 km あたりの係数で、高高度の非 CO2 効果 (放射強制力) について 1.9x の補正を含みます。短距離 0.158、中距離 0.149、長距離 0.146 kg CO2e/旅客 km。",
        "往復距離の目安: 短距離 1500 km、中距離 5000 km、長距離 18000 km。長距離往復 1 回だけで約 2.6 tCO2 になります。",
      ],
    },
    {
      heading: "4. 家庭の暖房 + 電力",
      body: [
        "暖房用燃料 (DEFRA、kg CO2e/kWh): 都市ガス 0.183、灯油 0.247、地域熱供給 0.140 (EU 平均)、薪/バイオマス 0.020 (短期循環)。",
        "暖房が電気の場合は、代わりにあなたの国の電力網強度を適用します。電気抵抗暖房はフランスでは熱 1 kWh あたり約 3 g CO2、ポーランドでは約 119 g を排出します。",
        "kWh の入力をスキップした場合のデフォルト値: 暖房 12,000 kWh/年、電気 3,800 kWh/年。いずれも世帯人数で割ります。",
      ],
    },
    {
      heading: "5. 物の購入",
      body: [
        "ライフスタイル消費 (衣料、電子機器、家具、サービス) は OECD 風の 3 区分にまとめています。少 0.6、中 1.4、多 2.6 tCO2e/年。",
        "これは粗い平均値であり、品目別の積み上げではありません。このカテゴリーで大きなばらつきを生むのは、ファストファッションと電子機器の買い替え頻度です。",
      ],
    },
    {
      heading: "6. 国別比較",
      body: [
        "国別 1 人あたり平均は、領域内 CO2 (生産ベース) で 2022 年のもの、出典は Global Carbon Project (Our World in Data 経由)。消費ベース (輸入品の体化炭素を含める) の値だと、英国のような純輸入国では数 % 高く、中国のような大輸出国では数 % 低くなります。",
        "人口は世界銀行 2023 年のデータです。",
        "電力網の炭素強度は IEA Electricity Information 2023 年版を用いています。",
      ],
    },
    {
      heading: "7. パーセンタイル推定",
      body: [
        "国別の個人カーボンフットプリントに関する公的なミクロデータは存在しません。私たちは国内の分布を、国の平均値を中心とする対数正規分布、シグマ ~0.55 (英国および米国の世帯調査分布で較正) として近似しています。",
        "パーセンタイルは順位の目安として扱い、精密な統計値とはみなさないでください。合計の tCO2 値の方がパーセンタイルよりも信頼できます。",
      ],
    },
  ],
  sources: [
    {
      title: "Our World in Data, CO2 emissions",
      url: "https://ourworldindata.org/co2-emissions",
      note: "国別の 1 人あたりおよび総 CO2 排出量、1750 年から現在まで。CC BY 4.0。",
    },
    {
      title: "Global Carbon Project",
      url: "https://www.globalcarbonproject.org/",
      note: "OWID 国別シリーズの一次ソース。",
    },
    {
      title: "UK DEFRA Greenhouse Gas Reporting Conversion Factors 2024",
      url: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2024",
      note: "交通、燃料、暖房に関する活動排出係数。Open Government Licence v3.0。",
    },
    {
      title: "Scarborough et al. (2023), Nature Food 4, 565-574",
      url: "https://www.nature.com/articles/s43016-023-00795-w",
      note: "食事パターン別の 1 人あたり食事排出量。",
    },
    {
      title: "Poore and Nemecek (2018), Science 360, 987-992",
      url: "https://www.science.org/doi/10.1126/science.aaq0216",
      note: "食料システム排出に関する基礎的なメタ分析。",
    },
    {
      title: "IEA Electricity Information",
      url: "https://www.iea.org/data-and-statistics/data-product/electricity-information",
      note: "国別の電力網炭素強度。",
    },
    {
      title: "World Bank, Population",
      url: "https://data.worldbank.org/indicator/SP.POP.TOTL",
      note: "国別人口、2023 年。",
    },
    {
      title: "World Inequality Lab, Climate Inequality Report 2023",
      url: "https://wid.world/news-article/climate-inequality-report-2023/",
      note: "世界の上位 1% / 上位 10% / 下位 50% 排出者の平均値。",
    },
    {
      title: "IPCC AR6 第 III 作業部会",
      url: "https://www.ipcc.ch/report/ar6/wg3/",
      note: "1.5 °C 経路における Paris-aligned な 1 人あたり予算。",
    },
  ],
  assumptions: {
    heading: "主要な前提と注意点",
    body: [
      "対象は領域内排出のみです。輸入品の体化炭素はあなたの国に加算されません。",
      "オフセットは差し引きません。それは別の会計世界に存在します。",
      "家庭エネルギーは居住者間で均等に按分します。",
      "1.9x の航空補正係数は、航空機の非 CO2 効果に関する現在の科学的コンセンサスを反映しています。",
      "すべての数値は推定値です。本レポートで最も小さい桁は、元データよりも精密に見えてしまいます。",
    ],
  },
};

const zhCn: MethodologyContent = {
  h1: "方法说明",
  intro:
    "计算器如何把你的答案换算成二氧化碳当量吨数 (tCO2)，以及每个数字的来源。没有黑箱，也没有自家专有模型。",
  sections: [
    {
      heading: "1. 饮食",
      body: [
        "我们使用 Scarborough et al. (2023, Nature Food) 基于 EPIC-Oxford 队列的人均年度饮食排放数据。饮食分为六类：高肉量 (每日 >100 g)、中肉量 (每日 50-100 g)、低肉量 (每日 <50 g)、鱼食者、素食者、纯素食者。",
        "数值：高肉 3.32、中肉 2.42、低肉 1.88、鱼食 1.66、素食 1.39、纯素 1.05 tCO2e/年。涵盖从农场到零售的食物生产，不包括烹饪能耗（计入家庭电力）。",
      ],
    },
    {
      heading: "2. 开车",
      body: [
        "每公里系数取自 UK DEFRA Greenhouse Gas Reporting Conversion Factors 2024：",
        "汽油/柴油平均：0.171 kg CO2e/km。混合动力：0.121。插电式混合动力：0.084。",
        "对于电动汽车，我们采用 0.18 kWh/km 的耗电量，并乘以你所在国家电网的碳强度，因此同一辆电动车在法国的排放约比波兰少 6 倍。",
      ],
    },
    {
      heading: "3. 飞行",
      body: [
        "每旅客公里系数取自 DEFRA，并对高空非 CO2 效应（辐射强迫）使用 1.9x 倍数：短途 0.158、中途 0.149、长途 0.146 kg CO2e/旅客公里。",
        "典型往返距离：短途 1500 km、中途 5000 km、长途 18000 km。所以一次长途往返本身就约为 2.6 tCO2。",
      ],
    },
    {
      heading: "4. 家庭取暖 + 电力",
      body: [
        "取暖燃料 (DEFRA, kg CO2e/kWh)：天然气 0.183、燃油 0.247、区域供暖 0.140 (欧盟均值)、木材/生物质 0.020 (短周期)。",
        "若你使用电取暖，则改为乘以你所在国家的电网强度。电阻式电取暖在法国每 kWh 热量排放约 3 g CO2；在波兰约为 119 g。",
        "若你跳过 kWh 字段，默认值为：取暖 12,000 kWh/年、电力 3,800 kWh/年。两者随后再除以家庭人数。",
      ],
    },
    {
      heading: "5. 物品",
      body: [
        "生活方式消费（衣物、电子产品、家具、服务）按 OECD 风格分为三档：轻 0.6、中 1.4、重 2.6 tCO2e/年。",
        "这些只是粗略平均值，不是逐项明细。该类别中差异最大的部分来自快时尚和电子产品的频繁更换。",
      ],
    },
    {
      heading: "6. 国家对比",
      body: [
        "各国人均均值采用 2022 年的领土排放（生产口径）CO2，来源是 Global Carbon Project（经 Our World in Data 提供）。基于消费的数据（把进口品所体现的碳计入）会让英国这样的净进口国高出几个百分点，让中国这样的大出口国低几个百分点。",
        "人口数据来自 2023 年的世界银行。",
        "电网碳强度来自 IEA Electricity Information 2023 年。",
      ],
    },
    {
      heading: "7. 百分位估计",
      body: [
        "公开的国别个人碳足迹微观数据并不存在。我们将每个国家内部的分布近似为以国家均值为中心的对数正态分布，sigma 约为 0.55（用英美两国家庭调查分布校准）。",
        "请把百分位当作排名信号，而不是精确统计。tCO2 总量比百分位更可靠。",
      ],
    },
  ],
  sources: [
    {
      title: "Our World in Data，CO2 排放",
      url: "https://ourworldindata.org/co2-emissions",
      note: "各国人均与总 CO2 排放，1750 年至今。CC BY 4.0。",
    },
    {
      title: "Global Carbon Project",
      url: "https://www.globalcarbonproject.org/",
      note: "OWID 国别序列的源头。",
    },
    {
      title: "UK DEFRA Greenhouse Gas Reporting Conversion Factors 2024",
      url: "https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2024",
      note: "交通、燃料、取暖等活动排放系数。Open Government Licence v3.0。",
    },
    {
      title: "Scarborough et al. (2023), Nature Food 4, 565-574",
      url: "https://www.nature.com/articles/s43016-023-00795-w",
      note: "按饮食模式划分的人均饮食排放。",
    },
    {
      title: "Poore and Nemecek (2018), Science 360, 987-992",
      url: "https://www.science.org/doi/10.1126/science.aaq0216",
      note: "食物系统排放的奠基性元分析。",
    },
    {
      title: "IEA Electricity Information",
      url: "https://www.iea.org/data-and-statistics/data-product/electricity-information",
      note: "各国电网碳强度。",
    },
    {
      title: "世界银行，人口",
      url: "https://data.worldbank.org/indicator/SP.POP.TOTL",
      note: "各国人口，2023 年。",
    },
    {
      title: "World Inequality Lab，Climate Inequality Report 2023",
      url: "https://wid.world/news-article/climate-inequality-report-2023/",
      note: "全球前 1% / 前 10% / 后 50% 排放者的平均水平。",
    },
    {
      title: "IPCC AR6 第三工作组",
      url: "https://www.ipcc.ch/report/ar6/wg3/",
      note: "与 1.5 °C 路径相符的 Paris-aligned 人均预算。",
    },
  ],
  assumptions: {
    heading: "关键假设与注意事项",
    body: [
      "仅计算领土排放。进口品所体现的碳不会被加到你的国家头上。",
      "不扣减任何抵消量。它们处于另一套独立的核算体系。",
      "家庭能耗按住户人数平均分摊。",
      "1.9x 飞行倍数反映了当前关于航空非 CO2 效应的科学共识。",
      "所有数字都是估算。这份报告里最小的小数位看起来比底层数据本身更精确。",
    ],
  },
};

export const METHODOLOGY: Readonly<Record<LocaleCode, MethodologyContent>> = {
  en,
  es,
  de,
  fr,
  "zh-cn": zhCn,
  ja,
  pt,
  it,
};
