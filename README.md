# mycarbonfootprint.org

How big is your carbon footprint? An open, free, multi-language tool that turns your lifestyle into a tonnes-of-CO2e estimate, then puts it next to your country average, the world average, and the Paris-aligned budget.

No login. No tracking. Static pages, all data baked at build time.

## What you get

- Personal carbon footprint estimate from diet, transport, home, and consumption
- Comparison to your country's per-capita average and to the global 4.7 tCO2 mean
- Distance from the IPCC 1.5C pathway target (~2.3 tCO2/yr/person by 2030)
- Per-country footprint distribution and historical trajectory
- 8 languages: English, Spanish, German, French, Italian, Portuguese, Japanese, Simplified Chinese

## Data sources

- Per-capita CO2 emissions: Our World in Data, Global Carbon Project (CC BY 4.0)
- Activity emission factors: UK DEFRA Greenhouse Gas Reporting (Open Government Licence)
- Diet emissions: Poore and Nemecek (2018), Science 360, 987-992
- Electricity grid carbon intensity: IEA Electricity Information (public summary)
- IPCC pathways: AR6 Working Group III (2022)

See `DATA_SOURCES.md` for the full provenance trail.

## Stack

Next.js 16, React 19, TypeScript 5, Tailwind 4, @visx for charts, jsPDF for reports. Static export, no runtime server.

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:3004
pnpm build        # produces out/
pnpm test         # vitest
```

## Sister projects

Same design system, same data philosophy, different question:

- howpoorami.org - personal wealth percentiles
- canIaffordahouse.org - housing affordability across countries

All three by Yohan Runhaar - https://yohanrunhaar.com

## License

Code: MIT. Data is included under each upstream source's license; see `DATA_SOURCES.md`.
