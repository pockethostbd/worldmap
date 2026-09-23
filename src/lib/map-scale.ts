import { interpolateRgbBasis } from "d3-interpolate";
import { scaleSequential, scaleSequentialLog } from "d3-scale";
import type { Metric } from "@/lib/metrics";

export type ColorScale = {
  domain: [number, number];
  interpolator: (t: number) => string;
  color: (value: number) => string;
  ticks: number[];
};

function readToken(name: string, fallback: string) {
  if (typeof document === "undefined") return fallback;
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}

export function createInterpolator() {
  return interpolateRgbBasis([
    readToken("--map-low", "#163b36"),
    readToken("--map-mid", "#3f8f7c"),
    readToken("--map-high", "#dbeee6"),
  ]);
}

function uniqueSorted(values: number[]) {
  return Array.from(new Set(values.filter((v) => Number.isFinite(v)))).sort((a, b) => a - b);
}

function logTicks(min: number, max: number): number[] {
  if (min <= 0) min = 0.01;
  const ticks = [min];
  const logMin = Math.log10(min);
  const logMax = Math.log10(max);
  const steps = 3;
  for (let i = 1; i < steps; i += 1) {
    ticks.push(10 ** (logMin + ((logMax - logMin) * i) / steps));
  }
  ticks.push(max);
  return ticks;
}

export function createColorScale(metric: Metric, values: number[]): ColorScale | null {
  const sorted = uniqueSorted(values);
  if (sorted.length < 2) return null;

  const interpolator = createInterpolator();
  let min = sorted[0]!;
  const max = sorted[sorted.length - 1]!;

  if (metric.scale === "log") {
    min = Math.max(min, 0.05);
    const scale = scaleSequentialLog(interpolator).domain([min, max]).clamp(true);
    return {
      domain: [min, max],
      interpolator,
      color: (value) => scale(Math.max(value, min)),
      ticks: logTicks(min, max),
    };
  }

  const scale = scaleSequential(interpolator).domain([min, max]).clamp(true);
  const mid = sorted[Math.floor(sorted.length / 2)]!;
  return {
    domain: [min, max],
    interpolator,
    color: (value) => scale(value),
    ticks: [min, mid, max],
  };
}

export function quantile(sorted: number[], q: number) {
  if (sorted.length === 0) return 0;
  const i = (sorted.length - 1) * q;
  const lo = Math.floor(i);
  const hi = Math.ceil(i);
  if (lo === hi) return sorted[lo]!;
  return sorted[lo]! * (hi - i) + sorted[hi]! * (i - lo);
}
