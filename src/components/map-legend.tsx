import type { ColorScale } from "@/lib/map-scale";
import type { Metric } from "@/lib/metrics";

type MapLegendProps = {
  metric: Metric;
  colorScale: ColorScale | null;
};

export function MapLegend({ metric, colorScale }: MapLegendProps) {
  if (!colorScale) return null;
  const stops = Array.from({ length: 12 }, (_, i) => colorScale.interpolator(i / 11));
  const [min, max] = colorScale.domain;

  return (
    <div className="pointer-events-none w-[min(18rem,calc(100vw-2rem))] rounded-xl bg-surface/92 px-3 py-3 shadow-[var(--shadow-border)] backdrop-blur-sm">
      <p className="text-xs font-medium tracking-wide text-muted uppercase">{metric.shortLabel}</p>
      <div
        className="mt-2 h-2 overflow-hidden rounded-full"
        style={{ backgroundImage: `linear-gradient(to right, ${stops.join(", ")})` }}
        aria-hidden="true"
      />
      <div className="mt-1.5 flex justify-between font-mono text-xs text-muted tabular-nums">
        <span>{metric.formatShort(min)}</span>
        <span>{metric.formatShort(max)}</span>
      </div>
      <p className="mt-1 text-xs text-subtle">{metric.unit}</p>
    </div>
  );
}
