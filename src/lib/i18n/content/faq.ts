/**
 * FAQ-page content per locale.
 */

import type { LocaleCode } from "../locales";

export interface FaqEntry {
  readonly question: string;
  readonly answer: readonly string[];
}

export interface FaqContent {
  readonly h1: string;
  readonly intro: string;
  readonly entries: readonly FaqEntry[];
}

const en: FaqContent = {
  h1: "Frequently asked questions",
  intro: "Short, plain answers. If you do not see your question, open an issue on GitHub.",
  entries: [
    {
      question: "Is my data sent anywhere?",
      answer: [
        "No. Everything runs in your browser. There is no backend. The site is static HTML, CSS, and JavaScript served from a CDN. No analytics, no tracking pixels, no cookies you did not opt into.",
      ],
    },
    {
      question: "Why does my country average differ from what I see elsewhere?",
      answer: [
        "We use territorial (production-based) emissions for 2022 from Our World in Data. Some calculators use consumption-based emissions, which add the carbon embedded in imports. Net importers like the UK and Switzerland look bigger under consumption-based; big exporters like China look smaller.",
        "Production-based numbers are the comparable apples-to-apples baseline used by the IPCC and UNFCCC.",
      ],
    },
    {
      question: "Why is my electric car not zero?",
      answer: [
        "Because the electricity to charge it is not zero. We multiply the EV's per-km kWh by your country's grid carbon intensity. France (56 g/kWh) makes EVs nearly carbon-free; Poland (660 g/kWh) makes the same EV emit about as much as a small efficient petrol car.",
      ],
    },
    {
      question: "Why is the flight number so high?",
      answer: [
        "Two reasons. First, you are likely flying further than you remember; one return long-haul is 18,000 km of cabin time. Second, planes emit at altitude and that has a non-CO2 warming effect (contrails, NOx). DEFRA applies a 1.9x multiplier to ground-level CO2; we follow that.",
        "If you only count CO2, divide the flight number by 1.9.",
      ],
    },
    {
      question: "How accurate is the number?",
      answer: [
        "Plus or minus 25-40 percent on the total. Diet and home heating are the most reliable categories. Stuff (consumption) is the most uncertain because it is so behaviour-dependent.",
        "Use the number to compare lifestyle changes against each other, not as a forensic audit.",
      ],
    },
    {
      question: "What does the percentile mean?",
      answer: [
        "It tells you where your number falls in your country's distribution of personal footprints. Top 10% in the US has a much bigger absolute footprint than top 10% in Brazil; the percentile is country-relative.",
      ],
    },
    {
      question: "Should I add offsets?",
      answer: [
        "No. We deliberately do not subtract offsets. The science on most voluntary offset programmes is contested, and even the good ones do not erase tonnes from your gross emissions; they fund avoidance or removal elsewhere.",
        "If you buy offsets, count them as a separate climate action, not as cancellation.",
      ],
    },
    {
      question: "Is going vegan really the biggest move?",
      answer: [
        "For diet, yes (meat-heavy to vegan saves about 2.3 tCO2/yr). But for an average European, a single skipped long-haul flight saves about as much as a full year vegan. Insulating a leaky house and switching to a heat pump is bigger than either.",
        "The biggest leverage usually lives in housing and air travel, not the dinner plate.",
      ],
    },
    {
      question: "Why is consumption only three buckets?",
      answer: [
        "Because line-item consumption emissions are very noisy. A more granular form would imply a precision we do not have. Three buckets is honest about the resolution of the data.",
      ],
    },
    {
      question: "How can I help?",
      answer: [
        "Open issues for data fixes or features. Star the GitHub repo. If the tool is useful, a small Ko-fi tip lets me build more open educational tools.",
      ],
    },
  ],
};

const es: FaqContent = {
  h1: "Preguntas frecuentes",
  intro: "Respuestas breves y sencillas. Si no ves tu pregunta, abre un issue en GitHub.",
  entries: [
    {
      question: "¿Se envían mis datos a algún sitio?",
      answer: [
        "No. Todo se ejecuta en tu navegador. No hay backend. El sitio es HTML, CSS y JavaScript estático servido desde una CDN. Sin analítica, sin píxeles de seguimiento, sin cookies a las que no hayas dado tu consentimiento.",
      ],
    },
    {
      question: "¿Por qué la media de mi país difiere de la que veo en otros sitios?",
      answer: [
        "Usamos emisiones territoriales (basadas en producción) para 2022 de Our World in Data. Algunas calculadoras usan emisiones basadas en consumo, que añaden el carbono incorporado en las importaciones. Los importadores netos como Reino Unido y Suiza aparecen más altos en consumo; los grandes exportadores como China aparecen más bajos.",
        "Los números basados en producción son la base comparable, manzanas con manzanas, que usan el IPCC y la CMNUCC.",
      ],
    },
    {
      question: "¿Por qué mi coche eléctrico no es cero?",
      answer: [
        "Porque la electricidad con la que lo cargas no es cero. Multiplicamos los kWh por km del eléctrico por la intensidad de carbono de la red de tu país. Francia (56 g/kWh) hace que los eléctricos sean casi sin carbono; Polonia (660 g/kWh) hace que el mismo coche eléctrico emita aproximadamente lo mismo que un coche de gasolina pequeño y eficiente.",
      ],
    },
    {
      question: "¿Por qué el número de los vuelos es tan alto?",
      answer: [
        "Por dos razones. Primero, probablemente vuelas más lejos de lo que recuerdas; un solo largo recorrido ida y vuelta son 18.000 km en cabina. Segundo, los aviones emiten en altitud y eso tiene un efecto no-CO2 sobre el clima (estelas, NOx). DEFRA aplica un multiplicador de 1,9x al CO2 a nivel del suelo; nosotros seguimos ese criterio.",
        "Si solo cuentas CO2, divide el número de los vuelos entre 1,9.",
      ],
    },
    {
      question: "¿Qué precisión tiene el número?",
      answer: [
        "Más o menos un 25-40 por ciento sobre el total. La dieta y la calefacción del hogar son las categorías más fiables. El consumo de cosas es el más incierto porque depende mucho del comportamiento.",
        "Usa el número para comparar cambios de estilo de vida entre sí, no como auditoría forense.",
      ],
    },
    {
      question: "¿Qué significa el percentil?",
      answer: [
        "Te dice dónde se sitúa tu número dentro de la distribución de huellas personales de tu país. El 10% superior en EE. UU. tiene una huella absoluta mucho mayor que el 10% superior en Brasil; el percentil es relativo al país.",
      ],
    },
    {
      question: "¿Debería sumar compensaciones?",
      answer: [
        "No. Deliberadamente no restamos compensaciones. La ciencia sobre la mayoría de los programas voluntarios de compensación está en disputa, e incluso los buenos no borran toneladas de tus emisiones brutas; financian evitación o eliminación en otro lugar.",
        "Si compras compensaciones, cuéntalas como acción climática aparte, no como cancelación.",
      ],
    },
    {
      question: "¿Hacerse vegano es realmente el mayor cambio?",
      answer: [
        "Para la dieta, sí (pasar de mucha carne a vegano ahorra unos 2,3 tCO2/año). Pero para un europeo medio, dejar de hacer un solo vuelo de largo recorrido ahorra aproximadamente lo mismo que un año entero siendo vegano. Aislar una casa con fugas y cambiar a una bomba de calor es mayor que cualquiera de los dos.",
        "La mayor palanca suele estar en la vivienda y los viajes en avión, no en el plato.",
      ],
    },
    {
      question: "¿Por qué solo tres tramos para el consumo?",
      answer: [
        "Porque las emisiones del consumo línea por línea son muy ruidosas. Un formulario más detallado implicaría una precisión que no tenemos. Tres tramos son honestos con la resolución de los datos.",
      ],
    },
    {
      question: "¿Cómo puedo ayudar?",
      answer: [
        "Abre issues para correcciones de datos o funcionalidades. Pon una estrella al repositorio en GitHub. Si la herramienta te resulta útil, una pequeña propina en Ko-fi me permite construir más herramientas educativas abiertas.",
      ],
    },
  ],
};

const de: FaqContent = {
  h1: "Häufig gestellte Fragen",
  intro: "Kurze, einfache Antworten. Wenn Ihre Frage fehlt, eröffnen Sie ein Issue auf GitHub.",
  entries: [
    {
      question: "Werden meine Daten irgendwohin gesendet?",
      answer: [
        "Nein. Alles läuft in Ihrem Browser. Es gibt kein Backend. Die Seite ist statisches HTML, CSS und JavaScript, ausgeliefert über ein CDN. Keine Analytics, keine Tracking-Pixel, keine Cookies, denen Sie nicht zugestimmt haben.",
      ],
    },
    {
      question: "Warum unterscheidet sich der Durchschnitt meines Landes von dem, was ich anderswo sehe?",
      answer: [
        "Wir verwenden territoriale (produktionsbasierte) Emissionen für 2022 von Our World in Data. Manche Rechner nutzen konsumbasierte Emissionen, die den in Importen eingebetteten Kohlenstoff hinzurechnen. Nettoimporteure wie das Vereinigte Königreich und die Schweiz sehen unter Konsumbasis größer aus; große Exporteure wie China sehen kleiner aus.",
        "Produktionsbasierte Zahlen sind die vergleichbare Apfel-mit-Apfel-Basis, die IPCC und UNFCCC verwenden.",
      ],
    },
    {
      question: "Warum ist mein Elektroauto nicht null?",
      answer: [
        "Weil der Strom zum Laden nicht null ist. Wir multiplizieren die kWh pro km des E-Autos mit der Netz-CO2-Intensität Ihres Landes. Frankreich (56 g/kWh) macht E-Autos nahezu CO2-frei; Polen (660 g/kWh) lässt dasselbe E-Auto etwa so viel emittieren wie einen kleinen effizienten Benziner.",
      ],
    },
    {
      question: "Warum ist die Flugzahl so hoch?",
      answer: [
        "Zwei Gründe. Erstens fliegen Sie wahrscheinlich weiter, als Sie sich erinnern; ein Langstrecken-Hin- und Rückflug sind 18.000 km Kabinenzeit. Zweitens emittieren Flugzeuge in der Höhe, und das hat einen Nicht-CO2-Erwärmungseffekt (Kondensstreifen, NOx). DEFRA wendet einen 1,9x-Multiplikator auf das bodennahe CO2 an; wir folgen dem.",
        "Wenn Sie nur CO2 zählen, teilen Sie die Flugzahl durch 1,9.",
      ],
    },
    {
      question: "Wie genau ist die Zahl?",
      answer: [
        "Plus/minus 25-40 Prozent beim Gesamtwert. Ernährung und Heizen sind die zuverlässigsten Kategorien. Konsumgüter sind am unsichersten, weil sie stark verhaltensabhängig sind.",
        "Nutzen Sie die Zahl, um Lebensstiländerungen miteinander zu vergleichen, nicht als forensische Prüfung.",
      ],
    },
    {
      question: "Was bedeutet das Perzentil?",
      answer: [
        "Es sagt Ihnen, wo Ihre Zahl in der Verteilung der persönlichen Fußabdrücke Ihres Landes liegt. Die obersten 10 % in den USA haben einen viel größeren absoluten Fußabdruck als die obersten 10 % in Brasilien; das Perzentil ist landesrelativ.",
      ],
    },
    {
      question: "Soll ich Kompensationen hinzurechnen?",
      answer: [
        "Nein. Wir ziehen Kompensationen bewusst nicht ab. Die Wissenschaft zu den meisten freiwilligen Kompensationsprogrammen ist umstritten, und selbst die guten löschen keine Tonnen aus Ihren Bruttoemissionen; sie finanzieren Vermeidung oder Entnahme an anderer Stelle.",
        "Wenn Sie Kompensationen kaufen, zählen Sie sie als separate Klimamaßnahme, nicht als Auslöschung.",
      ],
    },
    {
      question: "Ist Veganerwerden wirklich der größte Hebel?",
      answer: [
        "Bei der Ernährung ja (von viel Fleisch zu vegan spart etwa 2,3 tCO2/Jahr). Aber für eine durchschnittliche Europäerin oder einen durchschnittlichen Europäer spart ein einziger ausgelassener Langstreckenflug ungefähr so viel wie ein ganzes Jahr vegan. Ein zugiges Haus zu dämmen und auf eine Wärmepumpe umzusteigen, ist größer als beides.",
        "Der größte Hebel liegt meist in Wohnen und Flugreisen, nicht auf dem Teller.",
      ],
    },
    {
      question: "Warum nur drei Klassen für Konsum?",
      answer: [
        "Weil Konsumemissionen auf Posten-Ebene sehr verrauscht sind. Ein feineres Formular würde eine Präzision suggerieren, die wir nicht haben. Drei Klassen sind ehrlich gegenüber der Datenauflösung.",
      ],
    },
    {
      question: "Wie kann ich helfen?",
      answer: [
        "Eröffnen Sie Issues für Datenkorrekturen oder Funktionen. Sterne für das GitHub-Repository. Wenn das Werkzeug nützlich ist, hilft mir ein kleiner Ko-fi-Beitrag, mehr offene Bildungswerkzeuge zu bauen.",
      ],
    },
  ],
};

const fr: FaqContent = {
  h1: "Questions fréquentes",
  intro: "Réponses courtes et simples. Si vous ne voyez pas votre question, ouvrez un issue sur GitHub.",
  entries: [
    {
      question: "Mes données sont-elles envoyées quelque part ?",
      answer: [
        "Non. Tout s'exécute dans votre navigateur. Il n'y a pas de backend. Le site est constitué de HTML, CSS et JavaScript statiques servis depuis un CDN. Pas d'analytique, pas de pixels de pistage, pas de cookies auxquels vous n'auriez pas consenti.",
      ],
    },
    {
      question: "Pourquoi la moyenne de mon pays diffère de ce que je vois ailleurs ?",
      answer: [
        "Nous utilisons les émissions territoriales (basées sur la production) pour 2022 d'Our World in Data. Certains calculateurs utilisent des émissions basées sur la consommation, qui ajoutent le carbone incorporé dans les importations. Les importateurs nets comme le Royaume-Uni et la Suisse paraissent plus élevés en base consommation ; les grands exportateurs comme la Chine paraissent plus faibles.",
        "Les chiffres basés sur la production sont la base comparable, à pommes-pour-pommes, utilisée par le GIEC et la CCNUCC.",
      ],
    },
    {
      question: "Pourquoi ma voiture électrique n'est-elle pas à zéro ?",
      answer: [
        "Parce que l'électricité qui la recharge n'est pas à zéro. Nous multiplions les kWh par km du véhicule électrique par l'intensité carbone du réseau de votre pays. La France (56 g/kWh) rend les VE quasiment décarbonés ; la Pologne (660 g/kWh) fait que la même voiture électrique émet à peu près autant qu'une petite voiture essence efficace.",
      ],
    },
    {
      question: "Pourquoi le chiffre des vols est-il si élevé ?",
      answer: [
        "Deux raisons. D'abord, vous volez probablement plus loin que vous ne le pensez ; un seul aller-retour long-courrier représente 18 000 km en cabine. Ensuite, les avions émettent en altitude, ce qui a un effet réchauffant non-CO2 (traînées, NOx). DEFRA applique un multiplicateur de 1,9x au CO2 au sol ; nous suivons cette approche.",
        "Si vous ne comptez que le CO2, divisez le chiffre des vols par 1,9.",
      ],
    },
    {
      question: "Quelle est la précision du chiffre ?",
      answer: [
        "Plus ou moins 25-40 pour cent sur le total. L'alimentation et le chauffage sont les catégories les plus fiables. Les biens (consommation) sont les plus incertains parce qu'ils dépendent fortement du comportement.",
        "Utilisez ce chiffre pour comparer des changements de mode de vie entre eux, pas comme un audit médico-légal.",
      ],
    },
    {
      question: "Que signifie le centile ?",
      answer: [
        "Il indique la position de votre chiffre dans la distribution des empreintes personnelles de votre pays. Les 10 % du haut aux États-Unis ont une empreinte absolue bien plus grande que les 10 % du haut au Brésil ; le centile est relatif au pays.",
      ],
    },
    {
      question: "Dois-je ajouter des compensations ?",
      answer: [
        "Non. Nous ne soustrayons délibérément pas les compensations. La science sur la plupart des programmes de compensation volontaire est contestée, et même les bons ne suppriment pas de tonnes de vos émissions brutes ; ils financent une évitement ou une élimination ailleurs.",
        "Si vous achetez des compensations, comptez-les comme une action climatique distincte, pas comme une annulation.",
      ],
    },
    {
      question: "Devenir végétalien est-il vraiment le plus gros levier ?",
      answer: [
        "Pour l'alimentation, oui (passer d'une alimentation très carnée au végétalisme épargne environ 2,3 tCO2/an). Mais pour une Européenne ou un Européen moyen, un seul vol long-courrier auquel on renonce épargne à peu près autant qu'une année entière de végétalisme. Isoler une maison passoire et passer à une pompe à chaleur est plus important que l'un comme l'autre.",
        "Le plus grand levier se trouve généralement dans le logement et les voyages en avion, pas dans l'assiette.",
      ],
    },
    {
      question: "Pourquoi seulement trois tranches pour la consommation ?",
      answer: [
        "Parce que les émissions de consommation poste par poste sont très bruitées. Un formulaire plus fin laisserait croire à une précision que nous n'avons pas. Trois tranches sont honnêtes vis-à-vis de la résolution des données.",
      ],
    },
    {
      question: "Comment puis-je aider ?",
      answer: [
        "Ouvrez des issues pour des corrections de données ou des fonctionnalités. Mettez une étoile au dépôt GitHub. Si l'outil vous est utile, un petit pourboire sur Ko-fi me permet de construire plus d'outils éducatifs ouverts.",
      ],
    },
  ],
};

const it: FaqContent = {
  h1: "Domande frequenti",
  intro: "Risposte brevi e semplici. Se non trovi la tua domanda, apri un issue su GitHub.",
  entries: [
    {
      question: "I miei dati vengono inviati da qualche parte?",
      answer: [
        "No. Tutto gira nel tuo browser. Non c'è alcun backend. Il sito è HTML, CSS e JavaScript statici serviti da una CDN. Niente analytics, niente pixel di tracciamento, nessun cookie a cui tu non abbia acconsentito.",
      ],
    },
    {
      question: "Perché la media del mio paese è diversa da quella che vedo altrove?",
      answer: [
        "Usiamo emissioni territoriali (basate sulla produzione) per il 2022 da Our World in Data. Alcuni calcolatori usano emissioni basate sui consumi, che aggiungono il carbonio incorporato nelle importazioni. Gli importatori netti come Regno Unito e Svizzera risultano più alti in base consumi; i grandi esportatori come la Cina risultano più bassi.",
        "I numeri basati sulla produzione sono la base comparabile, mele con mele, usata da IPCC e UNFCCC.",
      ],
    },
    {
      question: "Perché la mia auto elettrica non è zero?",
      answer: [
        "Perché l'elettricità per ricaricarla non è zero. Moltiplichiamo i kWh per km dell'elettrica per l'intensità di carbonio della rete del tuo paese. La Francia (56 g/kWh) rende le elettriche quasi a zero emissioni; la Polonia (660 g/kWh) fa sì che la stessa elettrica emetta circa quanto una piccola auto a benzina efficiente.",
      ],
    },
    {
      question: "Perché il numero dei voli è così alto?",
      answer: [
        "Due motivi. Primo, probabilmente voli più lontano di quanto ricordi; un singolo lungo raggio andata e ritorno sono 18.000 km di tempo a bordo. Secondo, gli aerei emettono in quota e questo ha un effetto riscaldante non-CO2 (scie, NOx). DEFRA applica un moltiplicatore 1,9x alla CO2 a livello del suolo; noi seguiamo lo stesso criterio.",
        "Se conti solo la CO2, dividi il numero dei voli per 1,9.",
      ],
    },
    {
      question: "Quanto è accurato il numero?",
      answer: [
        "Più o meno il 25-40 per cento sul totale. Dieta e riscaldamento di casa sono le categorie più affidabili. I beni (consumi) sono i più incerti perché dipendono molto dai comportamenti.",
        "Usa il numero per confrontare cambiamenti di stile di vita tra loro, non come revisione forense.",
      ],
    },
    {
      question: "Cosa significa il percentile?",
      answer: [
        "Ti dice dove si colloca il tuo numero nella distribuzione delle impronte personali del tuo paese. Il 10% più alto negli USA ha un'impronta assoluta molto maggiore del 10% più alto in Brasile; il percentile è relativo al paese.",
      ],
    },
    {
      question: "Devo aggiungere compensazioni?",
      answer: [
        "No. Deliberatamente non sottraiamo le compensazioni. La scienza sulla maggior parte dei programmi volontari di compensazione è contestata, e anche i migliori non cancellano tonnellate dalle tue emissioni lorde; finanziano evitamento o rimozione altrove.",
        "Se compri compensazioni, contale come un'azione climatica separata, non come annullamento.",
      ],
    },
    {
      question: "Diventare vegano è davvero la mossa più importante?",
      answer: [
        "Per la dieta, sì (passare da molta carne a vegano risparmia circa 2,3 tCO2/anno). Ma per un europeo medio, un singolo volo a lungo raggio evitato risparmia circa quanto un intero anno da vegano. Isolare una casa colabrodo e passare a una pompa di calore pesa più di entrambi.",
        "La leva più grande di solito sta nell'abitazione e nei viaggi aerei, non nel piatto.",
      ],
    },
    {
      question: "Perché solo tre fasce per i consumi?",
      answer: [
        "Perché le emissioni dei consumi voce per voce sono molto rumorose. Un modulo più dettagliato suggerirebbe una precisione che non abbiamo. Tre fasce sono oneste rispetto alla risoluzione dei dati.",
      ],
    },
    {
      question: "Come posso aiutare?",
      answer: [
        "Apri issue per correzioni di dati o nuove funzioni. Metti una stella al repository su GitHub. Se lo strumento ti è utile, una piccola mancia su Ko-fi mi permette di costruire più strumenti educativi aperti.",
      ],
    },
  ],
};

const pt: FaqContent = {
  h1: "Perguntas frequentes",
  intro: "Respostas curtas e claras. Se não vir a sua pergunta, abra um issue no GitHub.",
  entries: [
    {
      question: "Os meus dados são enviados para algum lado?",
      answer: [
        "Não. Tudo corre no seu navegador. Não existe backend. O site é HTML, CSS e JavaScript estáticos servidos a partir de uma CDN. Sem analytics, sem pixéis de seguimento, sem cookies a que não tenha dado o seu consentimento.",
      ],
    },
    {
      question: "Porque é que a média do meu país difere da que vejo noutros lados?",
      answer: [
        "Usamos emissões territoriais (com base na produção) para 2022, do Our World in Data. Algumas calculadoras usam emissões com base no consumo, que somam o carbono incorporado nas importações. Importadores líquidos como o Reino Unido e a Suíça parecem maiores em base consumo; grandes exportadores como a China parecem menores.",
        "Os números com base na produção são a referência comparável, maçãs com maçãs, usada pelo IPCC e pela UNFCCC.",
      ],
    },
    {
      question: "Porque é que o meu carro elétrico não é zero?",
      answer: [
        "Porque a eletricidade que o carrega não é zero. Multiplicamos os kWh por km do elétrico pela intensidade de carbono da rede do seu país. França (56 g/kWh) torna os elétricos quase isentos de carbono; a Polónia (660 g/kWh) faz com que o mesmo elétrico emita aproximadamente tanto quanto um pequeno carro a gasolina eficiente.",
      ],
    },
    {
      question: "Porque é que o valor dos voos é tão alto?",
      answer: [
        "Dois motivos. Primeiro, provavelmente voa mais longe do que se lembra; um só voo de longo curso ida e volta corresponde a 18.000 km em cabine. Segundo, os aviões emitem em altitude e isso tem um efeito de aquecimento não-CO2 (rastos de condensação, NOx). A DEFRA aplica um multiplicador de 1,9x à CO2 ao nível do solo; nós seguimos o mesmo critério.",
        "Se contar apenas CO2, divida o valor dos voos por 1,9.",
      ],
    },
    {
      question: "Que precisão tem o número?",
      answer: [
        "Mais ou menos 25-40 por cento sobre o total. Dieta e aquecimento da casa são as categorias mais fiáveis. As coisas (consumo) são as mais incertas porque dependem muito do comportamento.",
        "Use o número para comparar mudanças de estilo de vida entre si, não como auditoria forense.",
      ],
    },
    {
      question: "O que significa o percentil?",
      answer: [
        "Diz-lhe onde se situa o seu número na distribuição das pegadas pessoais do seu país. Os 10% do topo nos EUA têm uma pegada absoluta muito maior do que os 10% do topo no Brasil; o percentil é relativo ao país.",
      ],
    },
    {
      question: "Devo somar compensações?",
      answer: [
        "Não. Deliberadamente não subtraímos compensações. A ciência sobre a maior parte dos programas voluntários de compensação é contestada, e mesmo os bons não apagam toneladas das suas emissões brutas; financiam evitamento ou remoção noutro lugar.",
        "Se comprar compensações, contabilize-as como uma ação climática separada, não como anulação.",
      ],
    },
    {
      question: "Tornar-se vegano é mesmo o maior passo?",
      answer: [
        "Para a dieta, sim (passar de muita carne para vegano poupa cerca de 2,3 tCO2/ano). Mas para um europeu médio, deixar de fazer um único voo de longo curso poupa aproximadamente tanto como um ano inteiro vegano. Isolar uma casa com fugas e mudar para uma bomba de calor pesa mais do que ambos.",
        "A maior alavanca costuma estar na habitação e nas viagens aéreas, não no prato.",
      ],
    },
    {
      question: "Porque é que o consumo tem apenas três escalões?",
      answer: [
        "Porque as emissões de consumo item a item são muito ruidosas. Um formulário mais detalhado sugeriria uma precisão que não temos. Três escalões são honestos quanto à resolução dos dados.",
      ],
    },
    {
      question: "Como posso ajudar?",
      answer: [
        "Abra issues para correções de dados ou novas funcionalidades. Dê uma estrela ao repositório no GitHub. Se a ferramenta lhe for útil, uma pequena gorjeta no Ko-fi permite-me construir mais ferramentas educativas abertas.",
      ],
    },
  ],
};

const ja: FaqContent = {
  h1: "よくある質問",
  intro: "短く、率直に答えます。質問が見当たらない場合は GitHub に issue を立ててください。",
  entries: [
    {
      question: "私のデータはどこかに送られますか？",
      answer: [
        "いいえ。すべてがあなたのブラウザ内で動作します。バックエンドはありません。本サイトは静的な HTML、CSS、JavaScript で構成され、CDN から配信されています。アナリティクスもトラッキングピクセルもなく、同意していない Cookie は使われません。",
      ],
    },
    {
      question: "国平均が他で見る数値と違うのはなぜですか？",
      answer: [
        "私たちは Our World in Data の 2022 年の領域内排出量 (生産ベース) を使用しています。一部の計算ツールは消費ベースの排出量を使い、輸入品に体化した炭素を加算します。英国やスイスのような純輸入国は消費ベースだとより大きく、中国のような大輸出国はより小さく見えます。",
        "生産ベースの数値は IPCC や UNFCCC が用いる、リンゴ同士で比較できるベースラインです。",
      ],
    },
    {
      question: "電気自動車がゼロにならないのはなぜですか？",
      answer: [
        "充電に使われる電気がゼロではないからです。電気自動車の km あたり kWh に、あなたの国の電力網炭素強度を掛け合わせます。フランス (56 g/kWh) では電気自動車はほぼゼロカーボンになりますが、ポーランド (660 g/kWh) では同じ電気自動車が小型で効率の良いガソリン車と同程度の排出をすることになります。",
      ],
    },
    {
      question: "飛行機の数値が大きすぎませんか？",
      answer: [
        "理由は 2 つあります。第一に、人は自分の記憶よりも遠くまで飛んでいる傾向があります。長距離往復 1 回で機内時間は 18,000 km です。第二に、航空機は高高度で排出するため、CO2 以外の温暖化効果 (飛行機雲、NOx) があります。DEFRA は地表 CO2 に 1.9x の補正をかけており、私たちもそれに従います。",
        "CO2 のみを数えたい場合は、飛行機の数値を 1.9 で割ってください。",
      ],
    },
    {
      question: "数値の精度はどのくらいですか？",
      answer: [
        "合計で ±25-40% 程度です。最も信頼できるのは食事と家庭の暖房です。物 (消費) は行動に強く依存するため、最も不確かです。",
        "この数値はライフスタイル変更を相互に比較するために使ってください。法的監査のような厳密さで使うものではありません。",
      ],
    },
    {
      question: "パーセンタイルとは何を意味しますか？",
      answer: [
        "あなたの数値が、自国の個人フットプリント分布のどこに位置するかを示します。米国の上位 10% はブラジルの上位 10% よりも絶対値ではるかに大きなフットプリントを持ちます。パーセンタイルは各国相対の指標です。",
      ],
    },
    {
      question: "オフセットを加えるべきですか？",
      answer: [
        "いいえ。私たちは意図的にオフセットを差し引きません。多くの自主的オフセット制度の科学的根拠には議論があり、優良なものでさえあなたの総排出量からトン数を消し去るわけではなく、別の場所で回避や除去を資金援助しているにすぎません。",
        "オフセットを購入する場合は、別個の気候アクションとして扱い、相殺とは見なさないでください。",
      ],
    },
    {
      question: "ヴィーガンになるのが本当に最大の手段ですか？",
      answer: [
        "食事に関しては、はい (多肉食からヴィーガンへの転換で年間およそ 2.3 tCO2 の削減です)。しかし平均的な欧州人にとって、長距離フライトを 1 回見送るだけで、ヴィーガンとして過ごす 1 年とほぼ同じ削減量になります。隙間風だらけの家を断熱しヒートポンプに切り替えることは、いずれよりも大きな効果があります。",
        "最大のレバーは通常、住まいと航空移動にあり、食卓ではありません。",
      ],
    },
    {
      question: "なぜ消費は 3 区分しかないのですか？",
      answer: [
        "品目別の消費排出量は非常にノイズが大きいからです。より細かいフォームにすると、実際にはない精度があるかのような印象を与えてしまいます。3 区分はデータの解像度に対して誠実な選択です。",
      ],
    },
    {
      question: "どうすれば手伝えますか？",
      answer: [
        "データの修正や新機能の issue を立ててください。GitHub リポジトリにスターを付けてください。本ツールが役立ったなら、Ko-fi での少額の支援が、よりオープンな教育ツールを作る助けになります。",
      ],
    },
  ],
};

const zhCn: FaqContent = {
  h1: "常见问题",
  intro: "简短直白的回答。如果你没看到自己的问题，请在 GitHub 上提交 issue。",
  entries: [
    {
      question: "我的数据会被发送到任何地方吗？",
      answer: [
        "不会。一切都在你的浏览器里运行，没有后端。网站只是从 CDN 提供的静态 HTML、CSS 和 JavaScript。没有数据分析、没有追踪像素、没有未经你同意的 Cookie。",
      ],
    },
    {
      question: "为什么我国家的平均值和其他地方看到的不一样？",
      answer: [
        "我们使用 Our World in Data 提供的 2022 年领土排放（生产口径）。一些计算器使用基于消费的排放数据，把进口品中所体现的碳也算进来。英国、瑞士这样的净进口国在消费口径下看起来更高；中国这样的出口大国看起来更低。",
        "生产口径数据是 IPCC 与 UNFCCC 所采用的、可在统一基准上做苹果对苹果比较的基线。",
      ],
    },
    {
      question: "为什么我的电动车不是零排放？",
      answer: [
        "因为给它充电的电力不是零碳的。我们用电动车的每公里 kWh 乘以你所在国家电网的碳强度。法国 (56 g/kWh) 让电动车几乎是零碳；波兰 (660 g/kWh) 则让同一辆电动车的排放接近一辆高效小型汽油车。",
      ],
    },
    {
      question: "为什么飞行的数值这么高？",
      answer: [
        "两个原因。第一，你飞的距离往往比记忆中更远；一次长途往返就意味着 18,000 km 的舱内时间。第二，飞机在高空排放，会带来 CO2 之外的升温效应（凝结尾迹、NOx）。DEFRA 对地面 CO2 使用 1.9x 倍数，我们也照此处理。",
        "如果你只想计算纯 CO2，把飞行数值除以 1.9 即可。",
      ],
    },
    {
      question: "这个数字有多准？",
      answer: [
        "整体上下浮动 25-40%。饮食和家庭取暖是最可靠的两类。物品类（消费）最不确定，因为它高度依赖个人行为。",
        "把这个数字用来比较不同生活方式之间的差异，而不是当作司法级的核算。",
      ],
    },
    {
      question: "百分位是什么意思？",
      answer: [
        "它告诉你，你的数值落在本国个人足迹分布的哪个位置。美国的前 10% 在绝对值上远高于巴西的前 10%；百分位只是国家内部的相对位置。",
      ],
    },
    {
      question: "我应该把抵消量加上吗？",
      answer: [
        "不。我们刻意不扣减抵消量。大多数自愿抵消项目的科学性仍有争议，即便是优质项目也不会从你的总排放中真的抹去吨数；它们只是去别的地方资助避免或移除。",
        "如果你购买了抵消，把它当作另一项独立的气候行动来记账，而不是冲销。",
      ],
    },
    {
      question: "改吃纯素真的是最大的一步吗？",
      answer: [
        "就饮食而言，是的（从高肉量改为纯素，每年大约能减少 2.3 tCO2）。但对一个普通欧洲人来说，少坐一次长途飞机的减排量，就接近一整年纯素的效果。把漏风的房子做保温并改用热泵，比上述任何一项都更显著。",
        "最大的杠杆通常在住房和航空旅行里，而不在餐桌上。",
      ],
    },
    {
      question: "为什么消费只有三档？",
      answer: [
        "因为按品目计算的消费排放噪声非常大。更细致的表单会让人误以为我们有那种精度。三档对底层数据的分辨率来说是诚实的选择。",
      ],
    },
    {
      question: "我能怎么帮忙？",
      answer: [
        "为数据修正或新功能提交 issue。给 GitHub 仓库点个 star。如果工具对你有用，在 Ko-fi 上的一点小费能让我继续做更多开放的教育型工具。",
      ],
    },
  ],
};

export const FAQ: Readonly<Record<LocaleCode, FaqContent>> = {
  en,
  es,
  de,
  fr,
  "zh-cn": zhCn,
  ja,
  pt,
  it,
};
