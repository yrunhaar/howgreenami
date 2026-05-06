/**
 * About-page long-form content per locale.
 * English is canonical; other locales fall back to English when not yet
 * translated (matches the site's progressive translation policy).
 */

import type { LocaleCode } from "../locales";

export interface AboutContent {
  readonly h1: string;
  readonly intro: string;
  readonly howItWorks: {
    readonly heading: string;
    readonly body: string[];
  };
  readonly why: {
    readonly heading: string;
    readonly body: string[];
  };
  readonly limits: {
    readonly heading: string;
    readonly body: string[];
  };
  readonly contact: {
    readonly heading: string;
    readonly body: string;
  };
}

const en: AboutContent = {
  h1: "About howgreenami.org",
  intro:
    "This is a free, open tool that turns your year of choices into a single number: tonnes of CO2 equivalent. It places that number next to your country average, the world average, and the Paris-aligned target for 2030. No login. No tracking. Static pages.",
  howItWorks: {
    heading: "How it works",
    body: [
      "You answer four short questions: what you eat, how you travel, how your home is heated and lit, and roughly how much stuff you buy.",
      "Each answer turns into kilograms of CO2 using emission factors from public sources. Diet uses peer-reviewed cohort estimates. Transport and heating use the UK DEFRA conversion factors. Electricity uses your country grid's carbon intensity from the IEA.",
      "We sum the categories, divide household energy by household size, and round to one decimal place.",
      "The percentile is an estimate of where your number falls in your country's personal-footprint distribution, modelled as a log-normal around the country mean. It is a ranking signal, not a survey.",
    ],
  },
  why: {
    heading: "Why this exists",
    body: [
      "Most carbon calculators either ask too many questions or hand-wave the math. The numbers behind them are not always traceable.",
      "We open-source the data and the math. Every emission factor links back to a public source. The calculator runs entirely in your browser; nothing is sent anywhere.",
      "If you find a number that looks wrong, please open an issue on GitHub.",
    ],
  },
  limits: {
    heading: "What this is not",
    body: [
      "It is not a life cycle assessment. It is a back-of-the-envelope estimate that is good enough to compare lifestyles and bad enough to be worth scrutinizing.",
      "Personal footprints are part of the picture. The bigger lever is collective: how the grid is built, how cities are zoned, how we tax pollution. Voting and where you bank shape the system you live in.",
      "Offsets are not subtracted from your number. We treat them as separate from your gross emissions for clarity.",
    ],
  },
  contact: {
    heading: "Who made this",
    body:
      "Yohan Runhaar (yohanrunhaar.com), with help from open data communities. Same family as howpoorami.org and howaffordable.org.",
  },
};

const es: AboutContent = {
  h1: "Acerca de howgreenami.org",
  intro:
    "Esta es una herramienta gratuita y abierta que convierte un año de tus decisiones en un solo número: toneladas de CO2 equivalente. Coloca ese número junto a la media de tu país, la media mundial y el objetivo alineado con París para 2030. Sin inicio de sesión. Sin seguimiento. Páginas estáticas.",
  howItWorks: {
    heading: "Cómo funciona",
    body: [
      "Respondes cuatro preguntas breves: qué comes, cómo te desplazas, cómo se calienta e ilumina tu hogar y, a grandes rasgos, cuántas cosas compras.",
      "Cada respuesta se traduce en kilogramos de CO2 usando factores de emisión de fuentes públicas. La dieta usa estimaciones de cohorte revisadas por pares. El transporte y la calefacción utilizan los factores de conversión del DEFRA del Reino Unido. La electricidad usa la intensidad de carbono de la red de tu país según la IEA.",
      "Sumamos las categorías, dividimos la energía del hogar entre el tamaño del hogar y redondeamos a un decimal.",
      "El percentil es una estimación de dónde se sitúa tu número dentro de la distribución personal de huella de carbono de tu país, modelada como una log-normal en torno a la media nacional. Es una señal de posicionamiento, no una encuesta.",
    ],
  },
  why: {
    heading: "Por qué existe",
    body: [
      "La mayoría de las calculadoras de carbono o piden demasiadas preguntas o pasan por encima de las cuentas. Los números que hay detrás no siempre son rastreables.",
      "Nosotros publicamos los datos y las cuentas en abierto. Cada factor de emisión enlaza a una fuente pública. La calculadora se ejecuta enteramente en tu navegador; no se envía nada a ningún sitio.",
      "Si encuentras un número que parece erróneo, por favor abre un issue en GitHub.",
    ],
  },
  limits: {
    heading: "Lo que no es",
    body: [
      "No es un análisis de ciclo de vida. Es una estimación a vuelapluma, lo bastante buena para comparar estilos de vida y lo bastante imperfecta como para merecer escrutinio.",
      "Las huellas personales son una parte del cuadro. La palanca mayor es colectiva: cómo se construye la red eléctrica, cómo se zonifican las ciudades, cómo se grava la contaminación. Tu voto y el banco con el que operas dan forma al sistema en el que vives.",
      "Las compensaciones no se restan de tu número. Las tratamos como algo separado de tus emisiones brutas, por claridad.",
    ],
  },
  contact: {
    heading: "Quién lo ha hecho",
    body:
      "Yohan Runhaar (yohanrunhaar.com), con ayuda de las comunidades de datos abiertos. Misma familia que howpoorami.org y howaffordable.org.",
  },
};

const de: AboutContent = {
  h1: "Über howgreenami.org",
  intro:
    "Dies ist ein kostenloses, offenes Werkzeug, das ein Jahr Ihrer Entscheidungen in eine einzige Zahl verwandelt: Tonnen CO2-Äquivalent. Es stellt diese Zahl neben den Durchschnitt Ihres Landes, den Weltdurchschnitt und das Paris-konforme Ziel für 2030. Kein Login. Kein Tracking. Statische Seiten.",
  howItWorks: {
    heading: "So funktioniert es",
    body: [
      "Sie beantworten vier kurze Fragen: was Sie essen, wie Sie reisen, wie Ihre Wohnung beheizt und beleuchtet wird und ungefähr, wie viele Dinge Sie kaufen.",
      "Jede Antwort wird über Emissionsfaktoren aus öffentlichen Quellen in Kilogramm CO2 umgerechnet. Die Ernährung nutzt peer-reviewte Kohortenschätzungen. Verkehr und Heizung verwenden die Umrechnungsfaktoren der britischen DEFRA. Strom nutzt die Kohlenstoffintensität Ihres Landesnetzes laut IEA.",
      "Wir summieren die Kategorien, teilen die Haushaltsenergie durch die Haushaltsgröße und runden auf eine Nachkommastelle.",
      "Das Perzentil ist eine Schätzung, wo Ihre Zahl in der landesspezifischen Verteilung persönlicher Fußabdrücke liegt, modelliert als Log-Normalverteilung um den Landesmittelwert. Es ist ein Rangsignal, keine Erhebung.",
    ],
  },
  why: {
    heading: "Warum es das gibt",
    body: [
      "Die meisten CO2-Rechner stellen entweder zu viele Fragen oder umgehen die Mathematik. Die zugrunde liegenden Zahlen sind nicht immer nachvollziehbar.",
      "Wir legen Daten und Berechnungen offen. Jeder Emissionsfaktor verweist auf eine öffentliche Quelle. Der Rechner läuft vollständig in Ihrem Browser; es wird nichts irgendwohin gesendet.",
      "Wenn Sie eine Zahl finden, die falsch aussieht, eröffnen Sie bitte ein Issue auf GitHub.",
    ],
  },
  limits: {
    heading: "Was es nicht ist",
    body: [
      "Es ist keine Ökobilanz. Es ist eine Überschlagsschätzung, gut genug, um Lebensstile zu vergleichen, und schlecht genug, um genauer hinzusehen.",
      "Persönliche Fußabdrücke sind ein Teil des Bildes. Der größere Hebel ist kollektiv: wie das Stromnetz gebaut wird, wie Städte zoniert werden, wie wir Verschmutzung besteuern. Wahlen und die Wahl Ihrer Bank prägen das System, in dem Sie leben.",
      "Kompensationen werden nicht von Ihrer Zahl abgezogen. Wir behandeln sie der Klarheit halber getrennt von Ihren Bruttoemissionen.",
    ],
  },
  contact: {
    heading: "Wer das gemacht hat",
    body:
      "Yohan Runhaar (yohanrunhaar.com), mit Hilfe aus Open-Data-Communities. Gleiche Familie wie howpoorami.org und howaffordable.org.",
  },
};

const fr: AboutContent = {
  h1: "À propos de howgreenami.org",
  intro:
    "C'est un outil gratuit et ouvert qui transforme une année de vos choix en un seul nombre : des tonnes de CO2 équivalent. Il place ce nombre à côté de la moyenne de votre pays, de la moyenne mondiale et de l'objectif aligné sur Paris pour 2030. Pas de connexion. Pas de pistage. Pages statiques.",
  howItWorks: {
    heading: "Comment ça marche",
    body: [
      "Vous répondez à quatre courtes questions : ce que vous mangez, comment vous vous déplacez, comment votre logement est chauffé et éclairé, et grosso modo combien de choses vous achetez.",
      "Chaque réponse est convertie en kilogrammes de CO2 à l'aide de facteurs d'émission issus de sources publiques. L'alimentation utilise des estimations de cohorte évaluées par les pairs. Le transport et le chauffage utilisent les facteurs de conversion du DEFRA britannique. L'électricité utilise l'intensité carbone du réseau de votre pays selon l'IEA.",
      "Nous additionnons les catégories, divisons l'énergie du foyer par la taille du ménage, et arrondissons à une décimale.",
      "Le centile est une estimation de la position de votre chiffre dans la distribution des empreintes personnelles de votre pays, modélisée comme une log-normale autour de la moyenne nationale. C'est un signal de classement, pas une enquête.",
    ],
  },
  why: {
    heading: "Pourquoi cet outil existe",
    body: [
      "La plupart des calculateurs carbone soit posent trop de questions, soit évacuent les calculs. Les chiffres qui les sous-tendent ne sont pas toujours traçables.",
      "Nous ouvrons les données et les calculs. Chaque facteur d'émission renvoie à une source publique. Le calculateur s'exécute entièrement dans votre navigateur ; rien n'est envoyé nulle part.",
      "Si vous trouvez un chiffre qui semble faux, ouvrez s'il vous plaît un issue sur GitHub.",
    ],
  },
  limits: {
    heading: "Ce que ce n'est pas",
    body: [
      "Ce n'est pas une analyse de cycle de vie. C'est une estimation au dos d'une enveloppe, assez bonne pour comparer des modes de vie et assez imparfaite pour mériter d'être examinée.",
      "Les empreintes personnelles ne sont qu'une partie du tableau. Le levier le plus important est collectif : comment le réseau est construit, comment les villes sont zonées, comment on taxe la pollution. Votre vote et votre banque façonnent le système dans lequel vous vivez.",
      "Les compensations ne sont pas soustraites de votre chiffre. Nous les traitons comme distinctes de vos émissions brutes, par souci de clarté.",
    ],
  },
  contact: {
    heading: "Qui a fait ça",
    body:
      "Yohan Runhaar (yohanrunhaar.com), avec l'aide des communautés de données ouvertes. Même famille que howpoorami.org et howaffordable.org.",
  },
};

const it: AboutContent = {
  h1: "Informazioni su howgreenami.org",
  intro:
    "Questo è uno strumento gratuito e aperto che trasforma un anno delle tue scelte in un singolo numero: tonnellate di CO2 equivalente. Mette quel numero accanto alla media del tuo paese, alla media mondiale e all'obiettivo allineato con Parigi per il 2030. Nessun login. Nessun tracciamento. Pagine statiche.",
  howItWorks: {
    heading: "Come funziona",
    body: [
      "Rispondi a quattro brevi domande: cosa mangi, come ti sposti, come la tua casa viene riscaldata e illuminata, e grossomodo quanta roba compri.",
      "Ogni risposta diventa chilogrammi di CO2 usando fattori di emissione da fonti pubbliche. La dieta usa stime di coorte sottoposte a peer review. Trasporti e riscaldamento usano i fattori di conversione del DEFRA del Regno Unito. L'elettricità usa l'intensità di carbonio della rete del tuo paese secondo l'IEA.",
      "Sommiamo le categorie, dividiamo l'energia domestica per la dimensione del nucleo familiare e arrotondiamo a un decimale.",
      "Il percentile è una stima di dove cade il tuo numero nella distribuzione delle impronte personali del tuo paese, modellata come una log-normale attorno alla media nazionale. È un segnale di posizionamento, non un sondaggio.",
    ],
  },
  why: {
    heading: "Perché esiste",
    body: [
      "La maggior parte dei calcolatori di CO2 o pone troppe domande o glissa sui calcoli. I numeri dietro non sono sempre tracciabili.",
      "Noi rendiamo aperti dati e calcoli. Ogni fattore di emissione rimanda a una fonte pubblica. Il calcolatore gira interamente nel tuo browser; nulla viene inviato da nessuna parte.",
      "Se trovi un numero che sembra sbagliato, apri per favore un issue su GitHub.",
    ],
  },
  limits: {
    heading: "Cosa non è",
    body: [
      "Non è un'analisi del ciclo di vita. È una stima a spanne, abbastanza buona per confrontare stili di vita e abbastanza imperfetta da meritare di essere esaminata.",
      "Le impronte personali sono parte del quadro. La leva più grande è collettiva: come si costruisce la rete elettrica, come si zonizzano le città, come si tassa l'inquinamento. Il voto e la scelta della tua banca plasmano il sistema in cui vivi.",
      "Le compensazioni non vengono sottratte dal tuo numero. Le trattiamo come separate dalle tue emissioni lorde, per chiarezza.",
    ],
  },
  contact: {
    heading: "Chi l'ha fatto",
    body:
      "Yohan Runhaar (yohanrunhaar.com), con l'aiuto delle comunità di dati aperti. Stessa famiglia di howpoorami.org e howaffordable.org.",
  },
};

const pt: AboutContent = {
  h1: "Sobre o howgreenami.org",
  intro:
    "Esta é uma ferramenta gratuita e aberta que transforma um ano das suas escolhas num único número: toneladas de CO2 equivalente. Coloca esse número ao lado da média do seu país, da média mundial e do objetivo alinhado com Paris para 2030. Sem registo. Sem seguimento. Páginas estáticas.",
  howItWorks: {
    heading: "Como funciona",
    body: [
      "Responde a quatro perguntas breves: o que come, como se desloca, como a sua casa é aquecida e iluminada, e, grosso modo, quantas coisas compra.",
      "Cada resposta transforma-se em quilogramas de CO2 usando fatores de emissão de fontes públicas. A dieta usa estimativas de coorte revistas por pares. Transportes e aquecimento usam os fatores de conversão do DEFRA do Reino Unido. A eletricidade usa a intensidade de carbono da rede do seu país segundo a IEA.",
      "Somamos as categorias, dividimos a energia da casa pelo tamanho do agregado e arredondamos a uma casa decimal.",
      "O percentil é uma estimativa de onde o seu número se situa na distribuição das pegadas pessoais do seu país, modelada como uma log-normal em torno da média nacional. É um sinal de posicionamento, não um inquérito.",
    ],
  },
  why: {
    heading: "Porque é que existe",
    body: [
      "A maioria das calculadoras de carbono ou faz perguntas a mais ou despacha as contas. Os números que as sustentam nem sempre são rastreáveis.",
      "Nós abrimos os dados e os cálculos. Cada fator de emissão liga a uma fonte pública. A calculadora corre inteiramente no seu navegador; nada é enviado para lugar nenhum.",
      "Se encontrar um número que pareça errado, abra por favor um issue no GitHub.",
    ],
  },
  limits: {
    heading: "O que isto não é",
    body: [
      "Não é uma análise de ciclo de vida. É uma estimativa rápida, suficientemente boa para comparar estilos de vida e suficientemente imperfeita para merecer escrutínio.",
      "As pegadas pessoais são parte do quadro. A maior alavanca é coletiva: como se constrói a rede elétrica, como se zonam as cidades, como se taxa a poluição. O voto e o banco onde tem conta moldam o sistema em que vive.",
      "As compensações não são subtraídas ao seu número. Tratamo-las como separadas das suas emissões brutas, por clareza.",
    ],
  },
  contact: {
    heading: "Quem fez isto",
    body:
      "Yohan Runhaar (yohanrunhaar.com), com a ajuda de comunidades de dados abertos. Mesma família de howpoorami.org e howaffordable.org.",
  },
};

const ja: AboutContent = {
  h1: "howgreenami.org について",
  intro:
    "これは、あなたの一年間の選択を一つの数値、すなわち二酸化炭素換算トン数 (tCO2) に変える、無料で開かれたツールです。その数値を、あなたの国の平均、世界平均、そして 2030 年に向けたパリ協定整合の目標と並べて表示します。ログイン不要。トラッキングなし。静的ページのみです。",
  howItWorks: {
    heading: "仕組み",
    body: [
      "短い 4 つの質問にお答えいただきます。何を食べるか、どのように移動するか、住まいがどう暖房・照明されるか、そしてだいたいどれくらいの物を買うかです。",
      "各回答は、公開ソースの排出係数を用いて二酸化炭素のキログラム数に変換されます。食生活は査読済みのコホート推定値を使用します。交通と暖房は英国 DEFRA の換算係数を使用します。電力はあなたの国の送電網の炭素強度を IEA から取得します。",
      "カテゴリーを合計し、世帯エネルギーを世帯人数で割り、小数第 1 位に丸めます。",
      "パーセンタイルは、あなたの数値が自国の個人カーボンフットプリント分布のどこに位置するかの推定値で、国の平均値を中心とする対数正規分布としてモデル化しています。順位の目安であり、調査値ではありません。",
    ],
  },
  why: {
    heading: "なぜ存在するのか",
    body: [
      "多くの CO2 計算ツールは、質問を求めすぎるか、計算をぼかすかのどちらかです。背後にある数字は必ずしも追跡可能ではありません。",
      "私たちはデータと計算を全てオープンソースにしています。すべての排出係数は公開ソースにリンクされています。計算は完全にあなたのブラウザ内で行われ、どこにも送信されません。",
      "おかしな数値を見つけた場合は、GitHub に issue を立てていただければと思います。",
    ],
  },
  limits: {
    heading: "これは何ではないか",
    body: [
      "これはライフサイクル評価ではありません。生活様式を比較するには十分良く、精査に値するくらいには粗い、いわば紙の裏での見積もりです。",
      "個人のフットプリントは全体像の一部にすぎません。より大きなレバーは集合的なもの、つまり送電網の作り方、都市のゾーニング、汚染への課税方法です。投票先と取引銀行があなたの暮らす制度を形づくります。",
      "オフセットはあなたの数値から差し引きません。明確さのため、総排出量とは別物として扱います。",
    ],
  },
  contact: {
    heading: "作った人",
    body:
      "Yohan Runhaar (yohanrunhaar.com)、オープンデータコミュニティの協力を得て制作しました。howpoorami.org および howaffordable.org と同じファミリーです。",
  },
};

const zhCn: AboutContent = {
  h1: "关于 howgreenami.org",
  intro:
    "这是一款免费、开放的工具，它把你一年的生活选择换算成一个数字：二氧化碳当量吨数 (tCO2)。然后把这个数字与你的国家平均水平、世界平均水平以及 2030 年与巴黎协定一致的目标并列展示。无需登录。不做追踪。全部静态页面。",
  howItWorks: {
    heading: "工作原理",
    body: [
      "你回答四个简短问题：你吃什么、怎么出行、家里如何取暖与照明，以及大致买了多少东西。",
      "每个答案都会通过公开来源的排放因子换算为千克二氧化碳。饮食使用经同行评议的队列研究估计值。交通与取暖使用英国 DEFRA 的换算系数。电力则按 IEA 提供的本国电网碳强度计算。",
      "我们将各类别求和，把家庭能耗按家庭人数平均，最后保留一位小数。",
      "百分位是一个估计值，表示你的数字在本国个人碳足迹分布中所处的位置，采用以国家均值为中心的对数正态分布建模。它是排名信号，不是调查统计。",
    ],
  },
  why: {
    heading: "为什么有这个工具",
    body: [
      "多数碳排计算器要么问得太多，要么对计算一笔带过。其背后的数字并不总是可追溯。",
      "我们把数据和算法全部开源。每一个排放因子都链接回公开来源。计算完全在你的浏览器中完成，任何数据都不会被发送到任何地方。",
      "如果你发现有数字看起来不对，请在 GitHub 上提交 issue。",
    ],
  },
  limits: {
    heading: "它不是什么",
    body: [
      "它不是生命周期评估。它是一份信封背面式的估算：好到足以比较不同生活方式，糙到值得被审视。",
      "个人足迹只是图景的一部分。更大的杠杆是集体性的：电网怎么建、城市怎么规划、对污染怎么征税。你投谁的票、把钱存在哪家银行，塑造着你身处的系统。",
      "我们不会把抵消量从你的数字中扣除。为了清晰，我们把它们与总排放分开核算。",
    ],
  },
  contact: {
    heading: "由谁制作",
    body:
      "Yohan Runhaar (yohanrunhaar.com)，并得到开放数据社区的协助。与 howpoorami.org 和 howaffordable.org 同属一个家族。",
  },
};

export const ABOUT: Readonly<Record<LocaleCode, AboutContent>> = {
  en,
  es,
  de,
  fr,
  "zh-cn": zhCn,
  ja,
  pt,
  it,
};
