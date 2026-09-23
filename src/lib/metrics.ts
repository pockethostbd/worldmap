export type MetricId = "gdp" | "life" | "hdi" | "co2" | "density";

export type ScaleKind = "linear" | "log";

export type Metric = {
  id: MetricId;
  label: string;
  shortLabel: string;
  unit: string;
  description: string;
  scale: ScaleKind;
  format: (value: number) => string;
  formatShort: (value: number) => string;
};

function groupInt(value: number) {
  const sign = value < 0 ? "-" : "";
  const abs = Math.round(Math.abs(value)).toString();
  return sign + abs.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function trimFixed(value: number, digits: number) {
  const n = Number(value.toFixed(digits));
  return String(n);
}

function usd(value: number) {
  return `$${groupInt(value)}`;
}

function usdShort(value: number) {
  if (value >= 1000) {
    const k = value / 1000;
    return `$${trimFixed(k, k >= 100 ? 0 : 1)}k`;
  }
  return usd(value);
}

export const METRICS: Metric[] = [
  {
    id: "gdp",
    label: "GDP per capita",
    shortLabel: "GDP / capita",
    unit: "PPP, current int. $",
    description:
      "Purchasing-power income per person. A wide, log-scaled view of living standards across economies.",
    scale: "log",
    format: usd,
    formatShort: usdShort,
  },
  {
    id: "life",
    label: "Life expectancy",
    shortLabel: "Life exp.",
    unit: "years at birth",
    description:
      "Average years a newborn would live if current mortality patterns held. A compact summary of health conditions.",
    scale: "linear",
    format: (v) => `${trimFixed(v, 1)} yrs`,
    formatShort: (v) => trimFixed(v, 1),
  },
  {
    id: "hdi",
    label: "Human development",
    shortLabel: "HDI",
    unit: "HDI, 0–1",
    description:
      "Composite of health, education, and income. Higher values mark longer lives, more schooling, and greater means.",
    scale: "linear",
    format: (v) => trimFixed(v, 3),
    formatShort: (v) => trimFixed(v, 3),
  },
  {
    id: "co2",
    label: "CO₂ per capita",
    shortLabel: "CO₂ / capita",
    unit: "tonnes / person",
    description:
      "Territory-based carbon dioxide from fossil fuels and industry, divided by population. Energy systems show through.",
    scale: "log",
    format: (v) => `${trimFixed(v, 1)} t`,
    formatShort: (v) => trimFixed(v, 1),
  },
  {
    id: "density",
    label: "Population density",
    shortLabel: "Density",
    unit: "people / km²",
    description:
      "People per square kilometre of land. City-states and river valleys read hot; deserts and tundra stay cool.",
    scale: "log",
    format: (v) => `${groupInt(v)} /km²`,
    formatShort: (v) => groupInt(v),
  },
];

export const METRIC_BY_ID = Object.fromEntries(METRICS.map((m) => [m.id, m])) as Record<
  MetricId,
  Metric
>;
