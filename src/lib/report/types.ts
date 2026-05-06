/**
 * Public types for the howgreenami PDF report generator.
 * Kept as a separate module so the heavy `generate-pdf.ts` (jsPDF + qrcode)
 * can stay client-only while the inputs flow through server-rendered
 * routes that just import these types.
 */

import type { CountryCode } from "@/data/carbon-data";
import type { LocaleCode } from "@/lib/i18n/locales";
import type { FootprintInputs, FootprintResult } from "@/lib/carbon-estimate";

export interface ReportInputs {
  readonly locale: LocaleCode;
  readonly countryCode: CountryCode;
  readonly inputs: FootprintInputs;
  readonly result: FootprintResult;
}
