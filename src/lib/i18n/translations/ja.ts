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
    map: "Map",
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
    headlineTemplate: "{country} の平均的な人はどれくらいグリーンですか？",
    verdictBelowParis: "パリ協定の目標を下回る",
    verdictBelowWorld: "世界平均を下回る",
    verdictAboveWorld: "世界平均を上回る",
    verdictHighest: "一人あたり排出量の上位",
    bodyTemplate:
      "{country} は一人あたり年間 {value} tCO2 を排出しており、{worldComparison}、{parisComparison}。一人あたり排出量で {total} カ国中 {rank} 位です。",
    bodyMultiplierAbove: "世界平均の {factor} 倍",
    bodyMultiplierBelow: "世界平均の {factor} 分の 1",
    bodyParisAbove: "2030 年パリ目標の {factor} 倍",
    bodyParisBelow: "2030 年パリ目標を下回る",
    statPerCapitaLabel: "一人あたり CO2",
    statPerCapitaSub: "一人あたり、年間",
    statTotalLabel: "総排出量",
    statTotalSub: "人口 {population} 百万人",
    statGridLabel: "電力系統",
    statGridSub: "電力 1 kWh あたりの CO2",
    historyHeading: "{country} の排出量の推移",
    historyBodyTemplate:
      "{country} の一人あたり排出量は {peakYear} 年に {peakValue} tCO2 でピークに達しました。現在：{todayValue} tCO2。{trend} 同じ期間に世界平均は {worldYear} 年の {worldStart} tCO2 から現在の {worldToday} tCO2 まで変化しました。",
    historyTrendDropTemplate: "{startYear} 年以来 {pct}% 減少しています。",
    historyTrendRiseTemplate: "{startYear} 年以来 {pct}% 増加しています。",
    historyTrendFlat: "期間を通じてほぼ横ばいです。",
    calculatorHeadingTemplate: "{country} でのご自分のフットプリントを計算する",
    calculatorSubheadingTemplate:
      "食事、車、飛行機、暖房。あなたの生活スタイルを年間の CO2 トン数に換算し、{country} の平均と比較します。",
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
    landingTitle: "あなたの個人カーボンフットプリント・レポート",
    landingFreeBadge: "無料。登録、支払い、メール不要",
    landingCta: "レポートを作成",
    landingFeatureA: {
      title: "あなたのトン数を、文脈とともに",
      body:
        "DEFRA の排出係数と、お住まいの国の電力系統の炭素強度から計算します。あなたの国、世界、パリ協定目標と比較します。",
    },
    landingFeatureB: {
      title: "国別および歴史的な文脈",
      body:
        "あなたの国が世界の排出量ランキングのどこに位置し、一人あたり CO2 が数十年でどう変化したかを示します。",
    },
    landingFeatureC: {
      title: "完全にプライベート",
      body:
        "レポートはブラウザ内で生成されます。サーバーには何も送信されません。メール不要、アカウント不要、トラッキングなし。",
    },
    landingPicker: {
      title: "レポートを作成する",
      subtitle: "国を選び、年間トン数を入力してください。残りはこちらで処理します。",
      countryLabel: "国",
      tonsLabel: "あなたの年間排出量 (tCO2)",
      tonsHelp: "計算機をすでに使用された場合、上に数値が表示されています。そうでなければ代表的な値を選ぶか、まずホームページの計算機をお使いください。",
      generateButton: "PDF を作成",
      generatingButton: "作成中...",
    },
    pdfPageLabel: "ページ",
    pdfFooterAttribution: "howgreenami.org · オープンデータ · トラッキングなし",
    pdfCoverGeneratedLabel: "作成日",
    pdfYourFootprintLabel: "あなたの年間フットプリント",
    pdfPercentileLeadIn: "あなたの排出量",
    pdfPercentilePopulation: "年間 CO2 換算トン",
    pdfCoverNarrativeAboveTemplate:
      "あなたの年間 {tons} tCO2 のフットプリントは、世界一人あたり平均の {factor} 倍、2030 年パリ協定予算の {parisFactor} 倍にあたります。以下のページでは、排出がどこから来るのか、国境を越えた比較、そして数字を最も動かす要因を分解します。",
    pdfCoverNarrativeBelowTemplate:
      "あなたの年間 {tons} tCO2 のフットプリントは、世界一人あたり平均を下回っています。以下のページではカテゴリー別の内訳、世界における自国の位置、そしてさらに数字を下げるために何が効くかを示します。",
    pdfSection1Title: "あなたの位置",
    pdfSection1Body:
      "3 つの基準線があります。2030 年パリ協定対応の個人予算、世界一人あたり平均、そしてあなたの国の一人あたり平均です。あなたの数値はその横にプロットされます。",
    pdfSection2Title: "どこから来ているか",
    pdfSection2Body:
      "排出量をカテゴリー別に分解します。食事、交通、飛行機、家庭エネルギー、消費。最も大きな項目が、たいてい一番動かしやすい項目です。",
    pdfSection3Title: "国別の文脈",
    pdfSection3Body:
      "あなたの国の一人あたり排出量を、データセット内の他のすべての国と比較してランク付けし、系統強度と国全体の排出量を文脈として示します。",
    pdfCrossCountryTitle: "同じ生活、違う国",
    pdfCrossCountryBody:
      "行動は一定のままで、変わるのはその国の電力系統と食料システムだけです。同じフライト、同じ食事、同じ走行距離。異なる排出係数。",
    pdfCrossCountryColCountry: "国",
    pdfCrossCountryColPerCapita: "一人あたり CO2",
    pdfCrossCountryColRatio: "あなたの国との比",
    pdfCrossCountryInsight:
      "系統の炭素強度の差は、もっとも大きな単一の倍率です。同じ EV でも、フランスではポーランドの約 6 分の 1 の排出量で 1 km を走ります。同じ電気ケトル、同じエアコン、同じ行動の数字。けれど気候への結果は別物です。",
    pdfHistoricalTitle: "排出量の推移",
    pdfHistoricalBody:
      "Our World in Data に領域排出量の記録がある期間における、あなたの国の一人あたり CO2 です。線が高いほど一人あたりの排出量が多いことを意味します。",
    pdfHistoricalInsightTemplate:
      "{country} の一人あたり排出量は {firstYear} 年に {firstValue} tCO2 でした。{lastYear} 年には {lastValue} tCO2。期間中に一人あたり {direction} {magnitude} tCO2 の変化です。",
    pdfHistoricalNoData:
      "この国には長期の歴史的シリーズがありません。上記の国別比較とスナップショットのページは引き続き有効です。",
    pdfTakeawaysTitle: "実際に数字を動かすもの",
    pdfTakeawaysIntro:
      "あなたのスナップショットに対する個人的な読み解きです。アクションは難易度ではなく、努力あたりの CO2 削減量で大まかに並べています。",
    pdfTakeawaysHigh:
      "あなたは国の平均をかなり上回っています。最大の単一のレバーはほぼ確実に飛行機です。大西洋横断の往復 1 回で 1.6 tCO2、小型ガソリン車を 1 年丁寧に運転するよりも多い量です。",
    pdfTakeawaysMedium:
      "あなたはおおよそ国の平均にいます。ここから効くのは、3 つの大きなカテゴリーのいずれかを動かすことです。食事 (赤身肉から植物性へ)、移動 (長距離フライト 1 回を見送る)、住まい (断熱と暖房の電化)。",
    pdfTakeawaysLow:
      "あなたは国の平均を下回っています。残されたレバーはほとんどシステム的なものです。家庭が依存する電力系統、スーパーが調達する食料システム、そして国が新しい交通インフラをどう建設するか。",
    pdfTakeawaysGlobalContext:
      "個人の行動は全体像の一部であり、すべてではありません。より大きなレバーは集合的なもの。系統の構築、都市の区画、汚染への課税。投票やどの銀行を使うかが、あなたの暮らすシステムを形づくります。",
    pdfMethodologyTitle: "方法論",
    pdfMethodologyBody:
      "食事は Scarborough et al. 2023 (Nature Food)。交通と暖房は英国 DEFRA の Greenhouse Gas Reporting Conversion Factors 2024。国別一人あたり排出量は Our World in Data / Global Carbon Project 2022。電力系統強度は IEA Electricity Information 2023。計算はすべてブラウザ内で実行され、サーバーには何も送信されません。",
    pdfTipTitle: "このレポートは役に立ちましたか？",
    pdfTipBody:
      "無料、広告なしで提供しています。お役に立ったなら、Ko-fi でのささやかな支援が、オープンな教育ツールの開発を続ける助けになります。",
    pdfFilenameTemplate: "howgreenami-{country}-{date}.pdf",
  },
};
