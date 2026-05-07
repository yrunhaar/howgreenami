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
    map: "Map",
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
    headlineTemplate: "{country} 的普通人有多绿色？",
    verdictBelowParis: "低于巴黎协定目标",
    verdictBelowWorld: "低于世界平均水平",
    verdictAboveWorld: "高于世界平均水平",
    verdictHighest: "人均排放量最高之列",
    bodyTemplate:
      "{country} 人均年排放 {value} tCO2，{worldComparison}，{parisComparison}。在 {total} 个国家中按人均排放排第 {rank} 位。",
    bodyMultiplierAbove: "世界平均的 {factor} 倍",
    bodyMultiplierBelow: "比世界平均低 {factor} 倍",
    bodyParisAbove: "2030 年巴黎协定目标的 {factor} 倍",
    bodyParisBelow: "低于 2030 年巴黎协定目标",
    statPerCapitaLabel: "人均 CO2",
    statPerCapitaSub: "每人每年",
    statTotalLabel: "总排放量",
    statTotalSub: "{population} 百万人口",
    statGridLabel: "电网",
    statGridSub: "每 kWh 电的 CO2",
    historyHeading: "{country} 的排放量如何随时间变化",
    historyBodyTemplate:
      "{country} 的人均排放量在 {peakYear} 年达到峰值 {peakValue} tCO2。如今：{todayValue} tCO2。{trend} 同期世界平均水平从 {worldYear} 年的 {worldStart} tCO2 变为如今的 {worldToday} tCO2。",
    historyTrendDropTemplate: "自 {startYear} 年以来下降了 {pct}%。",
    historyTrendRiseTemplate: "自 {startYear} 年以来上升了 {pct}%。",
    historyTrendFlat: "在整个时期内基本持平。",
    calculatorHeadingTemplate: "在 {country} 计算你自己的碳足迹",
    calculatorSubheadingTemplate:
      "饮食、驾驶、飞行、取暖。我们把你的生活方式换算成每年 CO2 吨数，并与 {country} 的平均值对比。",
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
    landingTitle: "你的个人碳足迹报告",
    landingFreeBadge: "免费。无需注册、无需付款、无需邮箱",
    landingCta: "生成我的报告",
    landingFeatureA: {
      title: "你的吨数，配上参照",
      body:
        "基于 DEFRA 排放因子和你所在国家的电网碳强度计算。与你所在国家、世界以及巴黎协定目标进行对比。",
    },
    landingFeatureB: {
      title: "国家与历史背景",
      body:
        "你所在国家在全球排放排名中的位置，以及其人均 CO2 数十年来的变化轨迹。",
    },
    landingFeatureC: {
      title: "完全私密",
      body:
        "报告在你的浏览器中生成。不向任何服务器发送数据。无邮箱，无账户，无追踪。",
    },
    landingPicker: {
      title: "生成你的报告",
      subtitle: "选择一个国家，输入你的年排放吨数，剩下的交给我们。",
      countryLabel: "国家",
      tonsLabel: "你的年排放量 (tCO2)",
      tonsHelp: "如果你已经使用过计算器，你的数字会显示在上方。否则请选择一个具有代表性的值，或先使用主页的计算器。",
      generateButton: "生成 PDF",
      generatingButton: "生成中...",
    },
    pdfPageLabel: "第页",
    pdfFooterAttribution: "howgreenami.org · 开放数据 · 不追踪",
    pdfCoverGeneratedLabel: "生成于",
    pdfYourFootprintLabel: "你的年度足迹",
    pdfPercentileLeadIn: "你排放",
    pdfPercentilePopulation: "吨 CO2 当量每年",
    pdfCoverNarrativeAboveTemplate:
      "你年度 {tons} tCO2 的足迹是世界人均水平的 {factor} 倍，是 2030 年巴黎协定预算的 {parisFactor} 倍。后续页面会逐项分析你的排放来源、跨国对比，以及对数字影响最大的因素。",
    pdfCoverNarrativeBelowTemplate:
      "你年度 {tons} tCO2 的足迹低于世界人均水平。后续页面展示你的分类构成、你所在国家在全球版图中的位置，以及还有哪些杠杆能让数字继续下降。",
    pdfSection1Title: "你处于何位置",
    pdfSection1Body:
      "三条参考线：2030 年巴黎协定个人预算、世界人均水平、你所在国家的人均水平。你的数字将与之并列绘制。",
    pdfSection2Title: "排放从何而来",
    pdfSection2Body:
      "你的排放按类别拆分：饮食、交通、飞行、家庭能源、消费。最大的一项通常也是最容易改变的一项。",
    pdfSection3Title: "国家背景",
    pdfSection3Body:
      "你所在国家的人均排放量，相对于数据集中其他国家的排名，并附上电网强度与全国总排放作为背景。",
    pdfCrossCountryTitle: "同样的生活，不同的国家",
    pdfCrossCountryBody:
      "保持你的行为不变，只改变所在国家的电网与食物系统。同样的航班、同样的饮食、同样的行驶里程：不同的排放因子。",
    pdfCrossCountryColCountry: "国家",
    pdfCrossCountryColPerCapita: "人均 CO2",
    pdfCrossCountryColRatio: "对比你的国家",
    pdfCrossCountryInsight:
      "电网强度的差距是最大的单一倍数。同一辆电动车在法国行驶 1 km 的排放约为波兰的六分之一。同一只电热水壶。同一台空调。你行为背后的数字相同，但气候后果完全不同。",
    pdfHistoricalTitle: "排放如何演变",
    pdfHistoricalBody:
      "Our World in Data 拥有领土排放记录的时段内，你所在国家的人均 CO2。曲线越高，意味着人均排放越高。",
    pdfHistoricalInsightTemplate:
      "{country} 的人均排放在 {firstYear} 年为 {firstValue} tCO2。到 {lastYear} 年为 {lastValue} tCO2。整个时期内人均 {direction} {magnitude} tCO2。",
    pdfHistoricalNoData:
      "该国家没有长期的历史序列。上面的跨国对比和快照页面仍然适用。",
    pdfTakeawaysTitle: "真正能改变这个数字的因素",
    pdfTakeawaysIntro:
      "对你这一刻数据的个人解读。行动按每单位努力的碳减排量大致排序，而不是按容易程度。",
    pdfTakeawaysHigh:
      "你明显高于该国平均水平。对你而言最大的单一杠杆几乎可以肯定是飞行：一次跨大西洋往返就是 1.6 tCO2，比一辆小型汽油车一整年小心驾驶的排放还要多。",
    pdfTakeawaysMedium:
      "你大致处于该国平均水平。从这里能起作用的杠杆是改变三大类别之一：饮食（红肉转向植物性）、出行（少坐一次长途飞机）或住房（保温加上供暖电气化）。",
    pdfTakeawaysLow:
      "你低于该国平均水平。剩下的杠杆主要是系统性的：你家所依赖的电网、超市的食物供应系统，以及国家如何建设新的交通基础设施。",
    pdfTakeawaysGlobalContext:
      "个人行动是图景的一部分，并非全部。更大的杠杆是集体性的：电网如何建设、城市如何规划、污染如何征税。投票和你把钱存在哪家银行，塑造着你所生活的系统。",
    pdfMethodologyTitle: "方法论",
    pdfMethodologyBody:
      "饮食数据来自 Scarborough et al. 2023 (Nature Food)。交通和取暖来自英国 DEFRA 的 Greenhouse Gas Reporting Conversion Factors 2024。各国人均排放来自 Our World in Data / Global Carbon Project 2022。电网碳强度来自 IEA Electricity Information 2023。计算完全在浏览器内运行，不向任何服务器发送数据。",
    pdfTipTitle: "喜欢这份报告吗？",
    pdfTipBody:
      "它免费、无广告。如果你觉得有用，在 Ko-fi 上的小额支持能让我继续构建开放的教育工具。",
    pdfFilenameTemplate: "howgreenami-{country}-{date}.pdf",
  },
};
