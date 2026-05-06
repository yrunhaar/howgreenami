/**
 * Client-side PDF report generator for howgreenami.org.
 *
 * Builds a multi-page personal carbon footprint report from the user's
 * computed FootprintResult + country data + active locale. All work
 * happens in the browser via jsPDF — nothing leaves the device, satisfying
 * the privacy promise on the landing page.
 *
 * Structure (one page each unless flagged):
 *   1. Cover                   — headline tCO2 + verdict + country snapshot
 *   2. Where you stand          — bar chart vs Paris budget / world / country
 *   3. Where it comes from      — category breakdown (diet, transport, etc.)
 *   4. Country context          — country ranking + grid intensity + total
 *   5. Same lifestyle, different country — table of comparisons
 *   6. How emissions evolved    — historical line chart
 *   7. What moves the number    — practical takeaways
 *   8. Methodology + Ko-fi      — closing
 */

import jsPDF from "jspdf";
import QRCode from "qrcode";
import {
  COUNTRIES,
  COUNTRY_CODES,
  GLOBAL_ANCHORS,
  type CountryCode,
  type CountryData,
} from "@/data/carbon-data";
import { HISTORICAL_PER_CAPITA } from "@/data/historical-emissions";
import { computeFootprint } from "@/lib/carbon-estimate";
import { getDictionary } from "@/lib/i18n";
import { interpolate } from "@/lib/i18n/dictionary";
import { localizedCountryName } from "@/lib/i18n/country-names";
import type { ReportInputs } from "./types";

const KOFI_URL = "https://ko-fi.com/yrunhaar";

const PAGE_W = 210;
const PAGE_H = 297;
const M = 18;
const W = PAGE_W - M * 2;

/** Site-derived palette flattened to RGB triples for jsPDF. */
const C = {
  ink: [28, 25, 23] as const,
  body: [68, 64, 60] as const,
  muted: [120, 113, 108] as const,
  rule: [214, 207, 199] as const,
  bandSoft: [245, 240, 235] as const,
  amber: [153, 119, 0] as const,
  amberSoft: [255, 247, 220] as const,
  rose: [165, 64, 78] as const,
  roseSoft: [253, 232, 235] as const,
  sage: [45, 142, 122] as const,
  sageSoft: [222, 240, 235] as const,
  periwinkle: [49, 112, 160] as const,
  periwinkleSoft: [222, 235, 247] as const,
  lavender: [123, 58, 150] as const,
};
type Color = readonly [number, number, number];

interface DrawContext {
  readonly doc: jsPDF;
  readonly t: ReturnType<typeof getDictionary>;
  readonly country: CountryData;
  readonly localeName: string;
  cursorY: number;
  pageNumber: number;
}

// ─── helpers ───────────────────────────────────────────────────────────────

function setText(doc: jsPDF, c: Color): void { doc.setTextColor(c[0], c[1], c[2]); }
function setFill(doc: jsPDF, c: Color): void { doc.setFillColor(c[0], c[1], c[2]); }
function setStroke(doc: jsPDF, c: Color): void { doc.setDrawColor(c[0], c[1], c[2]); }

function ensureSpace(ctx: DrawContext, needed: number): void {
  if (ctx.cursorY + needed > PAGE_H - M - 14) {
    drawFooter(ctx);
    ctx.doc.addPage();
    ctx.pageNumber += 1;
    ctx.cursorY = M;
  }
}

function newPage(ctx: DrawContext): void {
  drawFooter(ctx);
  ctx.doc.addPage();
  ctx.pageNumber += 1;
  ctx.cursorY = M;
}

function drawFooter(ctx: DrawContext): void {
  const { doc, t, pageNumber } = ctx;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  setText(doc, C.muted);
  doc.text(t.report.pdfFooterAttribution, M, PAGE_H - 9);
  doc.text(`${t.report.pdfPageLabel} ${pageNumber}`, PAGE_W - M, PAGE_H - 9, {
    align: "right",
  });
}

function sectionHeading(
  ctx: DrawContext,
  number: string,
  text: string,
  accent: Color = C.sage,
): void {
  ensureSpace(ctx, 22);
  ctx.cursorY += 4;
  const { doc } = ctx;
  setFill(doc, accent);
  const chipW = 7;
  const chipH = 7;
  const chipY = ctx.cursorY;
  doc.roundedRect(M, chipY, chipW, chipH, 1.4, 1.4, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  setText(doc, [255, 255, 255]);
  doc.text(number, M + chipW / 2, chipY + chipH / 2 + 1.4, { align: "center" });
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  setText(doc, C.ink);
  doc.text(text, M + chipW + 4, chipY + chipH / 2 + 1.6);
  ctx.cursorY = chipY + chipH + 6;
}

function paragraph(
  ctx: DrawContext,
  text: string,
  opts: { readonly size?: number; readonly weight?: "normal" | "bold"; readonly color?: Color; readonly leadingMm?: number; readonly marginBottom?: number; readonly maxWidth?: number; readonly x?: number } = {},
): void {
  const {
    size = 10.5, weight = "normal", color = C.body, leadingMm = 4.6,
    marginBottom = 4, maxWidth = W, x = M,
  } = opts;
  const { doc } = ctx;
  doc.setFont("helvetica", weight);
  doc.setFontSize(size);
  setText(doc, color);
  const lines = doc.splitTextToSize(text, maxWidth) as string[];
  ensureSpace(ctx, lines.length * leadingMm + marginBottom);
  doc.text(lines, x, ctx.cursorY + leadingMm * 0.7);
  ctx.cursorY += lines.length * leadingMm + marginBottom;
}

// ─── pages ─────────────────────────────────────────────────────────────────

function drawCover(ctx: DrawContext, totalTons: number): void {
  const { doc, t, country, localeName } = ctx;
  const date = new Date().toISOString().split("T")[0];

  // Top sage band
  setFill(doc, C.sageSoft);
  doc.rect(0, 0, PAGE_W, 118, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(30);
  setText(doc, C.ink);
  const titleLines = doc.splitTextToSize(
    t.report.title,
    PAGE_W - M * 2 - 70,
  ) as string[];
  doc.text(titleLines, M, 38);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(13);
  setText(doc, C.body);
  doc.text(
    interpolate(t.report.preparedFor, { country: localeName, date }),
    M,
    38 + titleLines.length * 9 + 4,
  );

  doc.setFontSize(9);
  setText(doc, C.muted);
  doc.text(`${t.report.pdfCoverGeneratedLabel}: ${date}`, M, 78);

  setText(doc, C.sage);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text(t.report.pdfPercentileLeadIn, M, 92);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(64);
  doc.text(`${totalTons.toFixed(1)}`, M, 116);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  setText(doc, C.body);
  doc.text(t.report.pdfPercentilePopulation, M, 124);

  // Right card with country chip + per-capita number
  const cardW = 70;
  const cardH = 32;
  const cardX = PAGE_W - M - cardW;
  const cardY = 84;
  setFill(doc, [255, 255, 255]);
  setStroke(doc, C.rule);
  doc.setLineWidth(0.4);
  doc.roundedRect(cardX, cardY, cardW, cardH, 3, 3, "FD");
  setText(doc, C.muted);
  doc.setFontSize(8.5);
  doc.text(
    interpolate(t.result.compareCountryAvg, { country: localeName }),
    cardX + 4,
    cardY + 8,
  );
  setText(doc, C.ink);
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text(`${country.perCapitaCO2} tCO2`, cardX + 4, cardY + 22);

  ctx.cursorY = 140;

  // Cover narrative
  const vsWorld = totalTons / GLOBAL_ANCHORS.worldAverage;
  const vsParis = totalTons / GLOBAL_ANCHORS.parisAligned2030;
  const above = vsWorld >= 1;
  const narrative = above
    ? interpolate(t.report.pdfCoverNarrativeAboveTemplate, {
        tons: totalTons.toFixed(1),
        factor: vsWorld.toFixed(1),
        parisFactor: vsParis.toFixed(1),
      })
    : interpolate(t.report.pdfCoverNarrativeBelowTemplate, {
        tons: totalTons.toFixed(1),
      });
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10.5);
  setText(doc, C.body);
  const lines = doc.splitTextToSize(narrative, W) as string[];
  doc.text(lines, M, ctx.cursorY);
  ctx.cursorY += lines.length * 5.5 + 4;

  // 4-cell snapshot strip
  type Cell = { readonly label: string; readonly value: string };
  const cells: readonly Cell[] = [
    { label: t.statistics.worldAverageLabel, value: `${GLOBAL_ANCHORS.worldAverage} tCO2` },
    { label: t.statistics.parisLabel, value: `${GLOBAL_ANCHORS.parisAligned2030} tCO2` },
    { label: t.statistics.top1Label, value: `${GLOBAL_ANCHORS.top1Average} tCO2` },
    { label: t.statistics.bottom50Label, value: `${GLOBAL_ANCHORS.bottom50Average} tCO2` },
  ];
  const stripY = ctx.cursorY;
  const stripH = 28;
  const cellW = W / cells.length;
  setFill(doc, [255, 255, 255]);
  setStroke(doc, C.rule);
  doc.setLineWidth(0.4);
  doc.roundedRect(M, stripY, W, stripH, 2.5, 2.5, "FD");
  for (let i = 0; i < cells.length; i++) {
    const x = M + i * cellW;
    if (i > 0) {
      setStroke(doc, C.rule);
      doc.setLineWidth(0.3);
      doc.line(x, stripY + 4, x, stripY + stripH - 4);
    }
    setText(doc, C.muted);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(cells[i].label, x + 4, stripY + 7);
    setText(doc, C.ink);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(cells[i].value, x + 4, stripY + 18);
  }
  ctx.cursorY = stripY + stripH + 6;
}

function drawWhereYouStand(ctx: DrawContext, totalTons: number): void {
  const { doc, t, country } = ctx;
  newPage(ctx);
  sectionHeading(ctx, "1", t.report.pdfSection1Title, C.sage);
  paragraph(ctx, t.report.pdfSection1Body, { marginBottom: 8 });

  type Bar = { readonly label: string; readonly value: number; readonly color: Color };
  const bars: readonly Bar[] = [
    { label: t.result.compareYou, value: totalTons, color: C.sage },
    { label: interpolate(t.result.compareCountryAvg, { country: ctx.localeName }), value: country.perCapitaCO2, color: C.periwinkle },
    { label: t.result.compareWorldAvg, value: GLOBAL_ANCHORS.worldAverage, color: C.muted },
    { label: t.result.compareParisBudget, value: GLOBAL_ANCHORS.parisAligned2030, color: C.amber },
    { label: t.result.compareTop1, value: GLOBAL_ANCHORS.top1Average, color: C.rose },
  ];
  const max = Math.max(...bars.map((b) => b.value), 1);
  const barWMax = W - 60;
  const rowH = 13;
  for (let i = 0; i < bars.length; i++) {
    const b = bars[i];
    const y = ctx.cursorY + i * rowH;
    setText(doc, C.body);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    const lab = doc.splitTextToSize(b.label, 56) as string[];
    doc.text(lab.slice(0, 1), M, y - 3);
    setFill(doc, C.bandSoft);
    doc.roundedRect(M + 56, y - 8, barWMax, 6, 1, 1, "F");
    setFill(doc, b.color);
    const w = Math.max(1, (b.value / max) * barWMax);
    doc.roundedRect(M + 56, y - 8, w, 6, 1, 1, "F");
    setText(doc, C.ink);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.text(`${b.value.toFixed(1)} tCO2`, M + W, y - 3, { align: "right" });
    setStroke(doc, C.rule);
    doc.setLineWidth(0.2);
    doc.line(M, y, M + W, y);
  }
  ctx.cursorY += bars.length * rowH + 6;
}

function drawBreakdown(ctx: DrawContext, inputs: ReportInputs): void {
  const { doc, t } = ctx;
  newPage(ctx);
  sectionHeading(ctx, "2", t.report.pdfSection2Title, C.periwinkle);
  paragraph(ctx, t.report.pdfSection2Body, { marginBottom: 8 });

  const breakdown = inputs.result.breakdown;
  const total = Math.max(0.001, inputs.result.totalTCO2);

  type Row = { readonly key: string; readonly label: string; readonly value: number; readonly color: Color };
  const rows: readonly Row[] = (
    [
      { key: "diet", label: t.result.breakdownLabels.diet, value: breakdown.diet, color: C.sage },
      { key: "transport", label: t.result.breakdownLabels.transport, value: breakdown.transport, color: C.periwinkle },
      { key: "flights", label: t.result.breakdownLabels.flights, value: breakdown.flights, color: C.rose },
      { key: "home", label: t.result.breakdownLabels.home, value: breakdown.home, color: C.amber },
      { key: "consumption", label: t.result.breakdownLabels.consumption, value: breakdown.consumption, color: C.lavender },
    ] as const
  ).slice().sort((a, b) => b.value - a.value);

  const labelW = 50;
  const valueW = 28;
  const ratioW = 18;
  const barX = M + labelW + valueW + 4;
  const barWMax = W - labelW - valueW - ratioW - 4;
  const rowH = 13;

  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    const y = ctx.cursorY + (i + 1) * rowH;
    setText(doc, C.body);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.text(r.label, M + 1, y - 3);
    setText(doc, C.ink);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.text(`${r.value.toFixed(1)} t`, M + labelW, y - 3);
    setFill(doc, C.bandSoft);
    doc.roundedRect(barX, y - 8, barWMax, 6, 1, 1, "F");
    setFill(doc, r.color);
    const fraction = r.value / total;
    doc.roundedRect(barX, y - 8, Math.max(1, fraction * barWMax), 6, 1, 1, "F");
    setText(doc, C.muted);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.text(`${Math.round(fraction * 100)}%`, M + W, y - 3, { align: "right" });
    setStroke(doc, C.rule);
    doc.setLineWidth(0.2);
    doc.line(M, y, M + W, y);
  }
  ctx.cursorY += (rows.length + 1) * rowH + 6;
}

function drawCountryContext(ctx: DrawContext): void {
  const { doc, t, country, localeName } = ctx;
  newPage(ctx);
  sectionHeading(ctx, "3", t.report.pdfSection3Title, C.amber);
  paragraph(ctx, t.report.pdfSection3Body, { marginBottom: 8 });

  // Rank + 3 stats
  const ranked = [...COUNTRY_CODES].sort(
    (a, b) => COUNTRIES[b].perCapitaCO2 - COUNTRIES[a].perCapitaCO2,
  );
  const rank = ranked.indexOf(country.code) + 1;
  const total = ranked.length;

  type Stat = { readonly label: string; readonly value: string };
  const stats: readonly Stat[] = [
    { label: t.country.statPerCapitaLabel, value: `${country.perCapitaCO2} tCO2` },
    { label: t.country.statTotalLabel, value: `${country.totalMtCO2.toLocaleString()} Mt` },
    { label: t.country.statGridLabel, value: `${country.gridIntensityGCO2PerKWh} g/kWh` },
  ];
  const statY = ctx.cursorY;
  const statH = 28;
  const cellW = W / stats.length;
  setFill(doc, [255, 255, 255]);
  setStroke(doc, C.rule);
  doc.setLineWidth(0.4);
  doc.roundedRect(M, statY, W, statH, 2.5, 2.5, "FD");
  for (let i = 0; i < stats.length; i++) {
    const x = M + i * cellW;
    if (i > 0) {
      setStroke(doc, C.rule);
      doc.setLineWidth(0.3);
      doc.line(x, statY + 4, x, statY + statH - 4);
    }
    setText(doc, C.muted);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(stats[i].label, x + 4, statY + 7);
    setText(doc, C.ink);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text(stats[i].value, x + 4, statY + 20);
  }
  ctx.cursorY = statY + statH + 8;

  // Rank line
  setText(doc, C.body);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10.5);
  doc.text(
    `${localeName}: rank ${rank} of ${total} by per-capita CO2.`,
    M,
    ctx.cursorY,
  );
  ctx.cursorY += 8;
}

function pickCrossCountries(userCode: CountryCode): readonly CountryCode[] {
  const baseline: CountryCode[] = ["FR", "GB", "US", "DE", "CN", "IN"];
  const filtered = baseline.filter((c) => c !== userCode);
  return [userCode, ...filtered.slice(0, 5)];
}

function drawCrossCountry(ctx: DrawContext, inputs: ReportInputs): void {
  const { doc, t, country } = ctx;
  newPage(ctx);
  sectionHeading(ctx, "4", t.report.pdfCrossCountryTitle, C.lavender);
  paragraph(ctx, t.report.pdfCrossCountryBody, { marginBottom: 8 });

  const codes = pickCrossCountries(country.code);

  // Header
  const tableY = ctx.cursorY + 2;
  const colCountry = M;
  const colPerCapita = M + 70;
  const colVs = M + W;
  const rowH = 11;
  const chipW = 11;
  const chipH = 6;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  setText(doc, C.muted);
  doc.text(t.report.pdfCrossCountryColCountry.toUpperCase(), colCountry, tableY);
  doc.text(t.report.pdfCrossCountryColPerCapita.toUpperCase(), colPerCapita, tableY);
  doc.text(t.report.pdfCrossCountryColRatio.toUpperCase(), colVs, tableY, { align: "right" });
  setStroke(doc, C.rule);
  doc.setLineWidth(0.3);
  doc.line(M, tableY + 2, M + W, tableY + 2);

  for (let i = 0; i < codes.length; i++) {
    const code = codes[i];
    const c = COUNTRIES[code];
    const isYou = code === country.code;

    // Compute "same lifestyle" footprint with this country's grid + diet factors:
    // we rerun computeFootprint with the user's inputs but in the new country.
    const same = computeFootprint(inputs.inputs, c);
    const ratio = same.totalTCO2 / Math.max(0.001, inputs.result.totalTCO2);

    const y = tableY + 8 + i * rowH;
    const chipY = y - chipH + 0.5;
    setFill(doc, isYou ? C.amberSoft : C.bandSoft);
    setStroke(doc, isYou ? C.amber : C.rule);
    doc.setLineWidth(0.3);
    doc.roundedRect(colCountry, chipY, chipW, chipH, 1.2, 1.2, "FD");
    setText(doc, isYou ? C.amber : C.muted);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.text(code, colCountry + chipW / 2, chipY + chipH - 1.6, { align: "center" });

    setText(doc, C.ink);
    doc.setFont("helvetica", isYou ? "bold" : "normal");
    doc.setFontSize(10);
    doc.text(c.name, colCountry + chipW + 3, y);

    setText(doc, C.body);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.text(`${same.totalTCO2.toFixed(1)} tCO2`, colPerCapita, y);

    setText(doc, isYou ? C.amber : C.ink);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(`${ratio.toFixed(2)}×`, colVs, y, { align: "right" });

    setStroke(doc, C.rule);
    doc.line(M, y + 3, M + W, y + 3);
  }
  ctx.cursorY = tableY + 8 + codes.length * rowH + 8;
  paragraph(ctx, t.report.pdfCrossCountryInsight, { marginBottom: 4 });
}

function drawHistoricalConcentration(ctx: DrawContext): void {
  const { doc, t, country, localeName } = ctx;
  newPage(ctx);
  sectionHeading(ctx, "5", t.report.pdfHistoricalTitle, C.rose);

  const series = HISTORICAL_PER_CAPITA[country.code] ?? [];
  if (series.length < 2) {
    paragraph(ctx, t.report.pdfHistoricalNoData, { marginBottom: 4 });
    return;
  }

  paragraph(ctx, t.report.pdfHistoricalBody, { marginBottom: 6 });

  const chartX = M;
  const chartY = ctx.cursorY;
  const chartW = W;
  const chartH = 80;
  const padL = 18;
  const padB = 12;

  const minYear = series[0].year;
  const maxYear = series[series.length - 1].year;
  const maxValue = Math.max(...series.map((p) => p.perCapitaCO2));
  const yMax = Math.ceil(maxValue / 5) * 5 + 2;

  setFill(doc, [255, 255, 255]);
  setStroke(doc, C.rule);
  doc.setLineWidth(0.3);
  doc.roundedRect(chartX, chartY, chartW, chartH, 1.5, 1.5, "FD");

  const xScale = (yr: number): number =>
    chartX + padL + ((yr - minYear) / Math.max(1, maxYear - minYear)) * (chartW - padL - 4);
  const yScale = (val: number): number =>
    chartY + chartH - padB - (val / yMax) * (chartH - padB - 6);

  setStroke(doc, C.rule);
  doc.setLineWidth(0.2);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  setText(doc, C.muted);
  for (let v = 0; v <= yMax; v += 5) {
    const y = yScale(v);
    doc.line(chartX + padL, y, chartX + chartW - 4, y);
    doc.text(`${v} t`, chartX + padL - 2, y + 1.5, { align: "right" });
  }
  for (const yr of [minYear, Math.round((minYear + maxYear) / 2), maxYear]) {
    doc.text(`${yr}`, xScale(yr), chartY + chartH - 2, { align: "center" });
  }
  setStroke(doc, C.sage);
  doc.setLineWidth(1.2);
  for (let i = 1; i < series.length; i++) {
    const a = series[i - 1];
    const b = series[i];
    doc.line(xScale(a.year), yScale(a.perCapitaCO2), xScale(b.year), yScale(b.perCapitaCO2));
  }
  ctx.cursorY = chartY + chartH + 6;

  const first = series[0];
  const last = series[series.length - 1];
  const delta = last.perCapitaCO2 - first.perCapitaCO2;
  const direction = delta > 0.2 ? "+" : delta < -0.2 ? "−" : "≈";
  paragraph(
    ctx,
    interpolate(t.report.pdfHistoricalInsightTemplate, {
      country: localeName,
      firstYear: first.year,
      firstValue: first.perCapitaCO2.toFixed(1),
      lastYear: last.year,
      lastValue: last.perCapitaCO2.toFixed(1),
      direction,
      magnitude: Math.abs(delta).toFixed(1),
    }),
    { marginBottom: 4 },
  );
}

function drawTakeaways(ctx: DrawContext, totalTons: number): void {
  const { t, country } = ctx;
  newPage(ctx);
  sectionHeading(ctx, "6", t.report.pdfTakeawaysTitle, C.amber);
  paragraph(ctx, t.report.pdfTakeawaysIntro, { marginBottom: 8 });

  const ratio = totalTons / Math.max(0.5, country.perCapitaCO2);
  const bullets: string[] = [];
  if (ratio >= 1.2) bullets.push(t.report.pdfTakeawaysHigh);
  else if (ratio >= 0.8) bullets.push(t.report.pdfTakeawaysMedium);
  else bullets.push(t.report.pdfTakeawaysLow);

  bullets.push(t.report.pdfTakeawaysGlobalContext);
  bullets.push(`• ${t.report.action.diet}`);
  bullets.push(`• ${t.report.action.travel}`);
  bullets.push(`• ${t.report.action.home}`);
  bullets.push(`• ${t.report.action.system}`);

  for (const b of bullets) paragraph(ctx, b, { marginBottom: 6 });
}

async function drawClosing(ctx: DrawContext): Promise<void> {
  const { doc, t } = ctx;
  newPage(ctx);
  sectionHeading(ctx, "7", t.report.pdfMethodologyTitle, C.muted);
  paragraph(ctx, t.report.pdfMethodologyBody, { marginBottom: 8 });

  // Tip ribbon at bottom
  const ribbonH = 26;
  const ribbonY = PAGE_H - M - 14 - ribbonH;
  const ribbonX = M;
  const ribbonW = W;

  setFill(doc, C.sageSoft);
  setStroke(doc, C.sage);
  doc.setLineWidth(0.4);
  doc.roundedRect(ribbonX, ribbonY, ribbonW, ribbonH, 2.5, 2.5, "FD");

  setText(doc, C.ink);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text(t.report.pdfTipTitle, ribbonX + 6, ribbonY + 8);

  setText(doc, C.body);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  const tipLines = doc.splitTextToSize(t.report.pdfTipBody, ribbonW - 36) as string[];
  doc.text(tipLines.slice(0, 2), ribbonX + 6, ribbonY + 13);

  try {
    const qrDataUrl = await QRCode.toDataURL(KOFI_URL, {
      margin: 0,
      scale: 4,
      color: { dark: "#1c1917", light: "#deeaeb" },
    });
    const qrSize = ribbonH - 6;
    const qrX = ribbonX + ribbonW - qrSize - 4;
    const qrY = ribbonY + 3;
    doc.addImage(qrDataUrl, "PNG", qrX, qrY, qrSize, qrSize);
  } catch {
    // non-fatal
  }
}

// ─── public ───────────────────────────────────────────────────────────────

export async function generateReportPdf(inputs: ReportInputs): Promise<void> {
  const { locale, countryCode } = inputs;
  const t = getDictionary(locale);
  const country = COUNTRIES[countryCode];
  if (!country) throw new Error(`Unknown country code: ${countryCode}`);
  const localeName = localizedCountryName(countryCode, locale, country.name);

  const totalTons = inputs.result.totalTCO2;

  const doc = new jsPDF({ unit: "mm", format: "a4" });
  doc.setProperties({
    title: t.report.title,
    subject: interpolate(t.report.preparedFor, {
      country: localeName,
      date: new Date().toISOString().split("T")[0],
    }),
    creator: "howgreenami.org",
    author: "howgreenami.org",
  });

  const ctx: DrawContext = {
    doc,
    t,
    country,
    localeName,
    cursorY: M,
    pageNumber: 1,
  };

  drawCover(ctx, totalTons);
  drawWhereYouStand(ctx, totalTons);
  drawBreakdown(ctx, inputs);
  drawCountryContext(ctx);
  drawCrossCountry(ctx, inputs);
  drawHistoricalConcentration(ctx);
  drawTakeaways(ctx, totalTons);
  await drawClosing(ctx);
  drawFooter(ctx);

  const dateStr = new Date().toISOString().split("T")[0];
  const filename = interpolate(t.report.pdfFilenameTemplate, {
    country: countryCode.toLowerCase(),
    date: dateStr,
  });
  doc.save(filename);
}
