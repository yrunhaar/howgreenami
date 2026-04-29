"use client";

import { useMemo, useState } from "react";
import { useDictionary, useLanguage } from "./LanguageProvider";
import {
  COUNTRIES,
  COUNTRY_CODES,
  GLOBAL_ANCHORS,
  type CountryCode,
  type CountryData,
  type HeatingFuel,
} from "@/data/carbon-data";
import {
  computeFootprint,
  defaultInputs,
  estimatePercentile,
  type FootprintInputs,
  type FootprintResult,
} from "@/lib/carbon-estimate";
import type { CarFuel, ConsumptionLevel, DietType } from "@/data/emission-factors";
import { formatTons } from "@/lib/format";
import { interpolate } from "@/lib/i18n";
import CarbonResult from "./CarbonResult";

interface Props {
  readonly initialCountry: CountryCode;
}

const STEP_KEYS = ["diet", "transport", "home", "stuff"] as const;
type StepKey = (typeof STEP_KEYS)[number];

export default function CarbonCalculator({ initialCountry }: Props) {
  const t = useDictionary();
  const { locale } = useLanguage();
  const [countryCode, setCountryCode] = useState<CountryCode>(initialCountry);
  const country: CountryData = COUNTRIES[countryCode];
  const [inputs, setInputs] = useState<FootprintInputs>(() => defaultInputs(country));
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const result: FootprintResult = useMemo(
    () => computeFootprint(inputs, country),
    [inputs, country],
  );

  const percentile = estimatePercentile(result.totalTCO2, country.perCapitaCO2);

  const onCountryChange = (code: string) => {
    if (code in COUNTRIES) {
      const next = code as CountryCode;
      setCountryCode(next);
      setInputs((prev) => ({
        ...prev,
        home: { ...prev.home, heatingFuel: COUNTRIES[next].defaultHeatingFuel },
      }));
    }
  };

  if (showResult) {
    return (
      <CarbonResult
        country={country}
        inputs={inputs}
        result={result}
        percentile={percentile}
        onRecalculate={() => setShowResult(false)}
      />
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-4 mt-10">
      <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6">
        <div className="flex items-center justify-between text-sm text-text-muted mb-3">
          <span>
            {interpolate(t.calculator.stepLabel, {
              current: stepIndex + 1,
              total: STEP_KEYS.length,
            })}
          </span>
          <span>{t.calculator.steps[STEP_KEYS[stepIndex]]}</span>
        </div>

        <h2 className="text-2xl mb-2">{t.calculator.heading}</h2>
        <p className="text-text-muted mb-6">{t.calculator.intro}</p>

        <CountrySelectMini
          label={t.home.chooseCountryLabel}
          value={countryCode}
          onChange={onCountryChange}
        />

        <div className="mt-8">
          {STEP_KEYS[stepIndex] === "diet" && (
            <DietStep value={inputs.diet} onChange={(v) => setInputs({ ...inputs, diet: v })} />
          )}
          {STEP_KEYS[stepIndex] === "transport" && (
            <TransportStep value={inputs} onChange={setInputs} />
          )}
          {STEP_KEYS[stepIndex] === "home" && (
            <HomeStep value={inputs} onChange={setInputs} />
          )}
          {STEP_KEYS[stepIndex] === "stuff" && (
            <ConsumptionStep
              value={inputs.consumption}
              onChange={(v) => setInputs({ ...inputs, consumption: v })}
            />
          )}
        </div>

        <div className="mt-8 flex justify-between gap-3">
          <button
            type="button"
            disabled={stepIndex === 0}
            onClick={() => setStepIndex(Math.max(0, stepIndex - 1))}
            className="px-4 py-2 rounded-lg border border-border-subtle text-text-primary disabled:opacity-40"
          >
            {t.calculator.back}
          </button>
          {stepIndex < STEP_KEYS.length - 1 ? (
            <button
              type="button"
              onClick={() => setStepIndex(stepIndex + 1)}
              className="px-5 py-2 rounded-lg bg-accent-periwinkle text-white font-semibold"
            >
              {t.calculator.next} →
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowResult(true)}
              className="px-5 py-2 rounded-lg bg-accent-periwinkle text-white font-semibold"
            >
              {t.calculator.seeResults}
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-text-muted">
        Anchor: world average {formatTons(GLOBAL_ANCHORS.worldAverage, locale)} tCO2/yr · Paris-aligned 2030: {" "}
        {formatTons(GLOBAL_ANCHORS.parisAligned2030, locale)} tCO2/yr.
      </div>
    </section>
  );
}

function CountrySelectMini({
  value,
  onChange,
  label,
}: {
  value: CountryCode;
  onChange: (code: string) => void;
  label: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm text-text-muted mb-1">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded-lg border border-border-subtle bg-bg-card text-text-primary"
      >
        {COUNTRY_CODES.sort((a, b) =>
          COUNTRIES[a].name.localeCompare(COUNTRIES[b].name),
        ).map((code) => (
          <option key={code} value={code}>
            {COUNTRIES[code].flag} {COUNTRIES[code].name}
          </option>
        ))}
      </select>
    </label>
  );
}

function DietStep({
  value,
  onChange,
}: {
  value: DietType;
  onChange: (v: DietType) => void;
}) {
  const t = useDictionary();
  const opts: DietType[] = ["heavy_meat", "medium_meat", "low_meat", "pescatarian", "vegetarian", "vegan"];
  return (
    <div>
      <h3 className="text-xl mb-2">{t.calculator.diet.heading}</h3>
      <p className="text-sm text-text-muted mb-4">{t.calculator.diet.help}</p>
      <div className="grid sm:grid-cols-2 gap-2">
        {opts.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            className={`text-left p-3 rounded-lg border transition ${
              value === o
                ? "border-accent-periwinkle bg-accent-periwinkle/15"
                : "border-border-subtle hover:border-text-muted"
            }`}
          >
            <div className="font-semibold text-text-primary">{t.calculator.diet.options[o]}</div>
            <div className="text-xs text-text-muted mt-0.5">
              {t.calculator.diet.optionsHelp[o]}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function TransportStep({
  value,
  onChange,
}: {
  value: FootprintInputs;
  onChange: (v: FootprintInputs) => void;
}) {
  const t = useDictionary();
  const fuels: CarFuel[] = ["petrol", "diesel", "hybrid", "plugin_hybrid", "electric", "none"];
  return (
    <div className="space-y-5">
      <h3 className="text-xl mb-1">{t.calculator.transport.heading}</h3>
      <p className="text-sm text-text-muted">{t.calculator.transport.help}</p>

      <NumberField
        label={t.calculator.transport.carKmLabel}
        help={t.calculator.transport.carKmHelp}
        value={value.car.kmPerYear}
        onChange={(n) => onChange({ ...value, car: { ...value.car, kmPerYear: n } })}
      />
      <SelectField
        label={t.calculator.transport.carFuelLabel}
        value={value.car.fuel}
        options={fuels.map((f) => ({ value: f, label: t.calculator.transport.fuelOptions[f] }))}
        onChange={(v) => onChange({ ...value, car: { ...value.car, fuel: v as CarFuel } })}
      />

      <div className="pt-2">
        <h4 className="font-semibold mb-2">{t.calculator.transport.flightsHeading}</h4>
        <div className="grid grid-cols-3 gap-2">
          <NumberField
            label={t.calculator.transport.flightsShortLabel}
            value={value.flights.short}
            onChange={(n) => onChange({ ...value, flights: { ...value.flights, short: n } })}
          />
          <NumberField
            label={t.calculator.transport.flightsMediumLabel}
            value={value.flights.medium}
            onChange={(n) => onChange({ ...value, flights: { ...value.flights, medium: n } })}
          />
          <NumberField
            label={t.calculator.transport.flightsLongLabel}
            value={value.flights.long}
            onChange={(n) => onChange({ ...value, flights: { ...value.flights, long: n } })}
          />
        </div>
      </div>

      <div className="pt-2">
        <h4 className="font-semibold mb-2">{t.calculator.transport.transitHeading}</h4>
        <div className="grid grid-cols-2 gap-2">
          <NumberField
            label={t.calculator.transport.transitRailLabel}
            value={value.transit.kmPerYearRail}
            onChange={(n) => onChange({ ...value, transit: { ...value.transit, kmPerYearRail: n } })}
          />
          <NumberField
            label={t.calculator.transport.transitBusLabel}
            value={value.transit.kmPerYearBus}
            onChange={(n) => onChange({ ...value, transit: { ...value.transit, kmPerYearBus: n } })}
          />
        </div>
      </div>
    </div>
  );
}

function HomeStep({
  value,
  onChange,
}: {
  value: FootprintInputs;
  onChange: (v: FootprintInputs) => void;
}) {
  const t = useDictionary();
  const fuels: HeatingFuel[] = ["gas", "oil", "electric", "district", "wood", "none"];
  return (
    <div className="space-y-5">
      <h3 className="text-xl mb-1">{t.calculator.home.heading}</h3>
      <p className="text-sm text-text-muted">{t.calculator.home.help}</p>

      <NumberField
        label={t.calculator.home.householdSizeLabel}
        value={value.home.householdSize}
        onChange={(n) => onChange({ ...value, home: { ...value.home, householdSize: Math.max(1, n) } })}
      />
      <SelectField
        label={t.calculator.home.heatingFuelLabel}
        value={value.home.heatingFuel}
        options={fuels.map((f) => ({ value: f, label: t.calculator.home.heatingFuelOptions[f] }))}
        onChange={(v) =>
          onChange({ ...value, home: { ...value.home, heatingFuel: v as HeatingFuel } })
        }
      />
      <NumberField
        label={t.calculator.home.heatingKWhLabel}
        help={t.calculator.home.heatingKWhHelp}
        value={value.home.heatingKWhPerYear}
        onChange={(n) => onChange({ ...value, home: { ...value.home, heatingKWhPerYear: n } })}
      />
      <NumberField
        label={t.calculator.home.electricityKWhLabel}
        help={t.calculator.home.electricityKWhHelp}
        value={value.home.electricityKWhPerYear}
        onChange={(n) => onChange({ ...value, home: { ...value.home, electricityKWhPerYear: n } })}
      />
    </div>
  );
}

function ConsumptionStep({
  value,
  onChange,
}: {
  value: ConsumptionLevel;
  onChange: (v: ConsumptionLevel) => void;
}) {
  const t = useDictionary();
  const opts: ConsumptionLevel[] = ["light", "moderate", "heavy"];
  return (
    <div>
      <h3 className="text-xl mb-2">{t.calculator.consumption.heading}</h3>
      <p className="text-sm text-text-muted mb-4">{t.calculator.consumption.help}</p>
      <div className="grid sm:grid-cols-3 gap-2">
        {opts.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            className={`text-left p-3 rounded-lg border transition ${
              value === o
                ? "border-accent-periwinkle bg-accent-periwinkle/15"
                : "border-border-subtle hover:border-text-muted"
            }`}
          >
            <div className="font-semibold text-text-primary">
              {t.calculator.consumption.options[o]}
            </div>
            <div className="text-xs text-text-muted mt-0.5">
              {t.calculator.consumption.optionsHelp[o]}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function NumberField({
  label,
  help,
  value,
  onChange,
}: {
  label: string;
  help?: string;
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-text-primary">{label}</span>
      {help && <span className="block text-xs text-text-muted mt-0.5">{help}</span>}
      <input
        type="number"
        inputMode="numeric"
        min={0}
        value={Number.isFinite(value) ? value : 0}
        onChange={(e) => {
          const n = Number(e.target.value);
          onChange(Number.isFinite(n) ? n : 0);
        }}
        className="mt-1 w-full px-3 py-2 rounded-lg border border-border-subtle bg-bg-card text-text-primary"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-text-primary">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full px-3 py-2 rounded-lg border border-border-subtle bg-bg-card text-text-primary"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
