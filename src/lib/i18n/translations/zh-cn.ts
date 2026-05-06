import type { Dictionary } from "../dictionary";

export const zhCn: Dictionary = {
  meta: {
    siteTitle: "我的碳足迹有多大？",
    homeTitleTemplate: "我的碳足迹有多大？| howgreenami.org",
    homeDescription:
      "一个免费、开放的工具，将你的生活方式换算成每年排放的二氧化碳吨数，并将这一数字与所在国家平均值、世界平均值以及《巴黎协定》目标进行对照。",
    homeOgTitle: "你的碳足迹有多大？",
    homeOgDescription:
      "饮食、开车、飞行、取暖。看看你的二氧化碳吨数与所在国家平均值和气候目标的差距。真实数据，无需登录。",
    countryTitleTemplate: "{country}：人均二氧化碳排放及其对你的意义",
    countryDescription:
      "{country} 每人每年排放 {value} 吨二氧化碳。看看你处在哪里，以及与气候目标相比如何。",
  },
  nav: {
    home: "我有多绿？",
    compare: "国家对比",
    methodology: "方法论",
    faq: "常见问题",
    about: "关于",
    report: "报告",
    menu: "菜单",
    close: "关闭",
  },
  home: {
    headline: "你的碳足迹有多大？",
    subheadline:
      "饮食、开车、飞行、取暖。我们将你的生活方式换算成每年的二氧化碳吨数，并与你所在的国家、世界平均值和《巴黎协定》目标进行比较。",
    chooseCountryLabel: "你住在哪里？",
    geoDetectingLabel: "正在检测你所在的国家. .",
    geoDetectedLabel: "我们认为你在 {country}。不对？请在下方选择其他国家。",
    youAreInLabel: "正在显示 {country} 的数据",
    orPick: "或选择国家",
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
    heading: "告诉我们你的这一年",
    intro:
      "四个简短步骤。不知道的可以跳过。默认值反映你所在国家的典型生活方式。",
    stepLabel: "第 {current} 步，共 {total} 步",
    steps: {
      diet: "饮食",
      transport: "出行",
      home: "家庭",
      stuff: "消费",
    },
    diet: {
      heading: "你一周通常吃什么？",
      help: "在富裕国家，饮食约占碳足迹的五分之一。动物蛋白是其中影响最大的部分。",
      options: {
        heavy_meat: "重度肉食者",
        medium_meat: "中度肉食者",
        low_meat: "少量肉食",
        pescatarian: "鱼素食",
        vegetarian: "素食",
        vegan: "纯素",
      },
      optionsHelp: {
        heavy_meat: "几乎每餐都吃肉；每天 >100 克",
        medium_meat: "几乎每天吃肉；每天 50-100 克",
        low_meat: "每周吃几次肉；每天 <50 克",
        pescatarian: "吃鱼，但不吃陆生动物",
        vegetarian: "不吃肉和鱼；吃乳制品和蛋",
        vegan: "不吃任何动物制品",
      },
    },
    transport: {
      heading: "你怎么出行？",
      help: "我们把开车、飞行和火车/公交加在一起。距离按往返计算。",
      carKmLabel: "每年开车公里数",
      carKmHelp: "你所有驾驶里程的总和。一辆典型的欧洲汽车一年开 12,000 公里，美国 19,000 公里。",
      carFuelLabel: "汽车燃料",
      fuelOptions: {
        petrol: "汽油",
        diesel: "柴油",
        hybrid: "混合动力",
        plugin_hybrid: "插电混合动力",
        electric: "电动",
        none: "无车",
      },
      flightsHeading: "今年的航班",
      flightsShortLabel: "短途（1500 公里以内，例如北京-上海）",
      flightsMediumLabel: "中途（1500-5000 公里，例如北京-新加坡）",
      flightsLongLabel: "长途（5000 公里以上，例如北京-纽约）",
      transitHeading: "公共交通",
      transitRailLabel: "每年火车公里数",
      transitBusLabel: "每年公交公里数",
    },
    home: {
      heading: "你的家",
      help: "我们按家庭人数分摊取暖和电力。两个人合住一套房子，各算一半。",
      householdSizeLabel: "和你一起住的有多少人（包括你自己）？",
      heatingFuelLabel: "你家用什么取暖？",
      heatingFuelOptions: {
        gas: "天然气",
        oil: "燃油",
        electric: "电（热泵或电阻式）",
        district: "集中供暖",
        wood: "木柴 / 生物质",
        none: "不取暖",
      },
      heatingKWhLabel: "每年取暖 kWh（可选）",
      heatingKWhHelp: "留空则使用国家平均值 12,000 kWh/年。",
      electricityKWhLabel: "每年用电 kWh（可选）",
      electricityKWhHelp: "留空则使用国家平均值 3,800 kWh/年。",
    },
    consumption: {
      heading: "你买的东西",
      help: "衣服、电子产品、家具、服务。一个粗略的生活方式分类。",
      options: {
        light: "少",
        moderate: "中等",
        heavy: "多",
      },
      optionsHelp: {
        light: "买得少，常修理，尽量买二手",
        moderate: "普通欧美消费者",
        heavy: "经常买新品、快时尚、追逐最新数码",
      },
    },
    back: "上一步",
    next: "下一步",
    seeResults: "查看我的足迹",
  },
  result: {
    heading: "你的年度足迹",
    youEmitTemplate: "{tons} 吨二氧化碳",
    perYearLabel: "每年",
    percentileTemplate: "{country} 前 {percent}%",
    bottomPercentileTemplate: "{country} 后 {percent}%",
    compareHeading: "你处在哪里",
    compareYou: "你",
    compareCountryAvg: "{country} 平均值",
    compareWorldAvg: "世界平均值",
    compareParisBudget: "巴黎目标（2030）",
    compareTop1: "全球前 1%",
    breakdownHeading: "排放来源",
    breakdownLabels: {
      diet: "食物",
      transport: "驾车与公共交通",
      flights: "航班",
      home: "家庭（取暖+电力）",
      consumption: "消费",
    },
    downloadReport: "下载报告（PDF）",
    recalculate: "重新开始",
    shareLine: "我每年排放 {tons} 吨二氧化碳。你呢？",
  },
  comedic: {
    tagline: "你的一年，用二氧化碳来表示。",
  },
  statistics: {
    heading: "幕后的数字",
    worldAverageLabel: "世界平均值",
    parisLabel: "巴黎协定目标",
    top1Label: "全球前 1%",
    bottom50Label: "全球后 50%",
    perCapitaUnit: "tCO2 每人每年",
  },
  chart: {
    historicalHeading: "人均二氧化碳排放历年变化",
    historicalSubtitle: "{country} 与世界对比，1960 年至今",
    distributionHeading: "你在 {country} 的位置",
    distributionSubtitle: "个人碳足迹的估算分布",
    yourPositionLabel: "你",
    worldAverageLabel: "世界平均值",
    parisAlignedLabel: "巴黎 2030",
  },
  compare: {
    heading: "各国人均二氧化碳排放",
    intro:
      "选择国家进行并排比较。显示每年人均排放、国家总排放，以及电网的清洁程度。",
    addCountry: "添加国家",
    removeAria: "移除 {country}",
    columnCountry: "国家",
    columnPerCapita: "人均二氧化碳",
    columnTotal: "总排放量",
    columnGrid: "电网碳强度",
  },
  cta: {
    support: {
      heading: "支持本项目",
      body:
        "免费、开放，无广告，无追踪。如果对你有帮助，一点小小的打赏可以让我继续做开放的教育工具。",
      ctaLabel: "在 Ko-fi 打赏",
    },
    furtherReading: {
      heading: "延伸阅读",
      body:
        "塑造了这个计算器的几本书。通过 Bookshop.org 购买，会有一部分收入分给本地独立书店。",
      ctaLabel: "查看书单",
      disclosure: "Bookshop 联盟链接。",
    },
    sister: {
      heading: "姊妹项目",
      body: "同样的设计，不同的问题。",
      howpoorami: "我有多穷？",
      howaffordable: "我能买得起房吗？",
    },
  },
  footer: {
    tagline: "开放数据，真实数字，不追踪。",
    source: "数据来源",
    license: "许可证",
    madeBy: "由 Yohan Runhaar 制作",
    about: "关于",
    faq: "常见问题",
    methodology: "方法说明",
    github: "GitHub",
    support: "请我喝杯咖啡",
    buildDateTemplate: "数据更新于 {date}",
  },
  common: {
    tonsCO2Unit: "tCO2",
    perPersonPerYear: "每人每年",
    loading: "加载中. .",
    errorTitle: "出错了",
    errorBody: "请刷新页面。如果问题持续出现，请在 GitHub 上提交 issue。",
  },
  report: {
    title: "个人碳足迹报告",
    subtitle: "你这一年的二氧化碳排放，配上参照。",
    preparedFor: "为以下情况准备：{country}，{date}",
    downloadButton: "下载 PDF",
    generatingLabel: "正在生成报告. .",
    methodology: "我们如何计算",
    source: "来源",
    footer: "howgreenami.org",
    cover: {
      heading: "你的年度碳足迹",
      subhead: "每年 {tons} tCO2",
    },
    summary: {
      heading: "概要",
      totalLabel: "年度总排放",
      comparedToCountry: "对比 {country} 平均值",
      comparedToWorld: "对比世界平均值",
      comparedToParis: "对比巴黎目标",
    },
    breakdown: {
      heading: "排放来源",
      explanation:
        "你自己的选择，按影响排序。最大的那一项通常也是最容易调整的。",
    },
    action: {
      heading: "真正能改变数字的事",
      intro: "个人行动是图景的一部分，不是全部。下面这些通常最重要。",
      diet: "少吃红肉，饮食那一栏会变化；完全植物性饮食变化最大。",
      travel: "少飞一次长途航班，胜过一整年小心驾车。",
      home: "先做保温，再把取暖电气化（热泵），是家里最大的一步。",
      system: "投票、储蓄方式，以及你把钱存在哪家银行，会塑造你所处的整个系统。",
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
