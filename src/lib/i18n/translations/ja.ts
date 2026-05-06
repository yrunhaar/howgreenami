import type { Dictionary } from "../dictionary";

export const ja: Dictionary = {
  meta: {
    siteTitle: "私のカーボンフットプリントはどれくらい？",
    homeTitleTemplate: "私のカーボンフットプリントはどれくらい？| howgreenami.org",
    homeDescription:
      "あなたのライフスタイルを年間のCO2トン数に換算し、その数字をお住まいの国の平均、世界平均、パリ協定目標と並べて表示する、無料でオープンなツールです。",
    homeOgTitle: "あなたのカーボンフットプリントはどれくらい？",
    homeOgDescription:
      "食生活、車、飛行機、暖房。あなたのCO2トン数を、国の平均と気候目標と並べて確認できます。本物の数字、ログイン不要。",
    countryTitleTemplate: "{country}：一人当たりCO2と、それがあなたにとって意味すること",
    countryDescription:
      "{country} は一人当たり年間 {value} トンのCO2を排出しています。あなたの位置と、気候目標との比較を確認しましょう。",
  },
  nav: {
    home: "私はどれだけグリーン？",
    compare: "国を比較",
    methodology: "計算方法",
    faq: "よくある質問",
    about: "このプロジェクトについて",
    report: "レポート",
    menu: "メニュー",
    close: "閉じる",
  },
  home: {
    headline: "あなたのカーボンフットプリントはどれくらい？",
    subheadline:
      "食生活、車、飛行機、暖房。あなたのライフスタイルを年間のCO2トン数に換算し、お住まいの国、世界、パリ協定目標と比較します。",
    chooseCountryLabel: "お住まいの国は？",
    geoDetectingLabel: "国を判定中. .",
    geoDetectedLabel: "{country} にいらっしゃるようです。違う場合は下から選択してください。",
    youAreInLabel: "{country} のデータを表示中",
    orPick: "または国を選択",
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
    heading: "あなたの一年について教えてください",
    intro:
      "短い4ステップです。わからないところは飛ばしてください。デフォルト値はお住まいの国の典型的なライフスタイルを反映しています。",
    stepLabel: "ステップ {current} / {total}",
    steps: {
      diet: "食生活",
      transport: "移動",
      home: "住まい",
      stuff: "消費",
    },
    diet: {
      heading: "普段の一週間で何を食べますか？",
      help: "食生活は先進国でフットプリントの約5分の1を占めます。動物性タンパク質の影響が大きいです。",
      options: {
        heavy_meat: "肉中心",
        medium_meat: "肉は普通",
        low_meat: "肉は少なめ",
        pescatarian: "ペスカタリアン",
        vegetarian: "ベジタリアン",
        vegan: "ヴィーガン",
      },
      optionsHelp: {
        heavy_meat: "ほぼ毎食肉を食べる；1日 100g 超",
        medium_meat: "ほぼ毎日肉を食べる；1日 50-100g",
        low_meat: "週に数回肉を食べる；1日 50g 未満",
        pescatarian: "魚は食べるが陸の動物は食べない",
        vegetarian: "肉も魚も食べない；乳製品と卵はOK",
        vegan: "動物性食品を一切食べない",
      },
    },
    transport: {
      heading: "どのように移動しますか？",
      help: "車、飛行機、鉄道・バスを合計します。距離は往復で計算します。",
      carKmLabel: "年間の車の走行距離（km）",
      carKmHelp: "すべての運転を合算してください。典型的な欧州車で年 12,000 km、米国車で 19,000 km です。",
      carFuelLabel: "車の燃料",
      fuelOptions: {
        petrol: "ガソリン",
        diesel: "ディーゼル",
        hybrid: "ハイブリッド",
        plugin_hybrid: "プラグインハイブリッド",
        electric: "電気自動車",
        none: "車なし",
      },
      flightsHeading: "今年の飛行機",
      flightsShortLabel: "短距離（1500 km 未満、例：東京-ソウル）",
      flightsMediumLabel: "中距離（1500-5000 km、例：東京-シンガポール）",
      flightsLongLabel: "長距離（5000 km 超、例：東京-ニューヨーク）",
      transitHeading: "公共交通",
      transitRailLabel: "年間の鉄道距離（km）",
      transitBusLabel: "年間のバス距離（km）",
    },
    home: {
      heading: "あなたの住まい",
      help: "暖房と電気は世帯人数で按分します。2人で1軒に住んでいれば、それぞれ半分ずつになります。",
      householdSizeLabel: "ご自身を含めて何人で住んでいますか？",
      heatingFuelLabel: "住まいの暖房は何ですか？",
      heatingFuelOptions: {
        gas: "都市ガス",
        oil: "灯油",
        electric: "電気（ヒートポンプまたは電熱）",
        district: "地域熱供給",
        wood: "薪 / バイオマス",
        none: "暖房なし",
      },
      heatingKWhLabel: "年間の暖房 kWh（任意）",
      heatingKWhHelp: "空欄にすると国の平均値 12,000 kWh/年 を使います。",
      electricityKWhLabel: "年間の電気 kWh（任意）",
      electricityKWhHelp: "空欄にすると国の平均値 3,800 kWh/年 を使います。",
    },
    consumption: {
      heading: "あなたが買うもの",
      help: "衣服、電子機器、家具、サービス。おおまかなライフスタイル区分です。",
      options: {
        light: "少なめ",
        moderate: "普通",
        heavy: "多め",
      },
      optionsHelp: {
        light: "買い物は少なく、よく修理する、可能なら中古",
        moderate: "平均的な欧米の消費者",
        heavy: "新品を頻繁に購入、ファストファッション、最新ガジェット",
      },
    },
    back: "戻る",
    next: "次へ",
    seeResults: "私のフットプリントを見る",
  },
  result: {
    heading: "あなたの年間フットプリント",
    youEmitTemplate: "{tons} トン CO2",
    perYearLabel: "年間",
    percentileTemplate: "{country} の上位 {percent}%",
    bottomPercentileTemplate: "{country} の下位 {percent}%",
    compareHeading: "あなたの位置",
    compareYou: "あなた",
    compareCountryAvg: "{country} の平均",
    compareWorldAvg: "世界平均",
    compareParisBudget: "パリ協定目標（2030年）",
    compareTop1: "世界の上位 1%",
    breakdownHeading: "排出の内訳",
    breakdownLabels: {
      diet: "食事",
      transport: "車と公共交通",
      flights: "飛行機",
      home: "住まい（暖房 + 電気）",
      consumption: "消費",
    },
    downloadReport: "レポートをダウンロード（PDF）",
    recalculate: "やり直す",
    shareLine: "私は年間 {tons} トン CO2 を排出しています。あなたは？",
  },
  comedic: {
    tagline: "あなたの一年を、CO2 で。",
  },
  statistics: {
    heading: "舞台裏の数字",
    worldAverageLabel: "世界平均",
    parisLabel: "パリ協定目標",
    top1Label: "世界の上位 1%",
    bottom50Label: "世界の下位 50%",
    perCapitaUnit: "tCO2 / 人 / 年",
  },
  chart: {
    historicalHeading: "一人当たり CO2 の推移",
    historicalSubtitle: "{country} と世界、1960 年から現在まで",
    distributionHeading: "{country} の中でのあなたの位置",
    distributionSubtitle: "個人のフットプリントの推定分布",
    yourPositionLabel: "あなた",
    worldAverageLabel: "世界平均",
    parisAlignedLabel: "パリ協定 2030",
  },
  compare: {
    heading: "国別の一人当たり CO2",
    intro:
      "国を選んで横並びで比較できます。年間の一人当たり排出量、国全体の排出量、電力網のクリーンさを表示します。",
    addCountry: "国を追加",
    removeAria: "{country} を削除",
    columnCountry: "国",
    columnPerCapita: "一人当たり CO2",
    columnTotal: "総排出量",
    columnGrid: "電力網の炭素強度",
  },
  cta: {
    support: {
      heading: "このプロジェクトを支援する",
      body:
        "無料、オープン、広告なし、トラッキングなしです。役に立ったなら、少額のチップでオープンな教育ツールを作り続けられます。",
      ctaLabel: "Ko-fi で支援する",
    },
    furtherReading: {
      heading: "おすすめの参考書",
      body:
        "この計算ツールに影響を与えた本です。Bookshop.org 経由で購入すると、地元の独立系書店に一部が分配されます。",
      ctaLabel: "ブックリストを見る",
      disclosure: "Bookshop アフィリエイトリンクです。",
    },
    sister: {
      heading: "姉妹プロジェクト",
      body: "同じデザイン、別の問い。",
      howpoorami: "私はどれくらい貧しい？",
      howaffordable: "家を買える？",
    },
  },
  footer: {
    tagline: "オープンデータ、本物の数字、トラッキングなし。",
    source: "データ出典",
    license: "ライセンス",
    madeBy: "Yohan Runhaar 作",
    about: "概要",
    faq: "よくある質問",
    methodology: "手法",
    github: "GitHub",
    support: "コーヒーをおごる",
    buildDateTemplate: "データ更新日 {date}",
  },
  common: {
    tonsCO2Unit: "tCO2",
    perPersonPerYear: "1人あたり年間",
    loading: "読み込み中. .",
    errorTitle: "問題が発生しました",
    errorBody: "ページを再読み込みしてください。問題が続く場合は、GitHub で issue を開いてください。",
  },
  report: {
    title: "個人カーボンフットプリント・レポート",
    subtitle: "あなたの一年を CO2 で、文脈とともに。",
    preparedFor: "対象：{country}、{date}",
    downloadButton: "PDF をダウンロード",
    generatingLabel: "レポートを作成中. .",
    methodology: "計算方法について",
    source: "出典",
    footer: "howgreenami.org",
    cover: {
      heading: "あなたの年間カーボンフットプリント",
      subhead: "年間 {tons} tCO2",
    },
    summary: {
      heading: "サマリー",
      totalLabel: "年間総排出量",
      comparedToCountry: "vs. {country} 平均",
      comparedToWorld: "vs. 世界平均",
      comparedToParis: "vs. パリ協定目標",
    },
    breakdown: {
      heading: "排出の内訳",
      explanation:
        "あなた自身の選択を、影響の大きさ順に並べたものです。一番大きな項目が、たいてい一番動かしやすい項目です。",
    },
    action: {
      heading: "実際に数字を動かすもの",
      intro: "個人の行動は全体の一部であって、すべてではありません。一般に効くのは以下のものです。",
      diet: "赤身肉を減らすと食事の項目が動きます。完全植物性にするともっと動きます。",
      travel: "長距離フライトを1回見送るほうが、1年間気をつけて運転するより効きます。",
      home: "まず断熱、次に暖房を電化（ヒートポンプ）するのが、家の中で最大の一手です。",
      system: "投票、貯蓄の使い道、どの銀行を使うかが、あなたの暮らす社会システムを形づくります。",
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
