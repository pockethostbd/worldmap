import type { CountryRecord } from "@/lib/countries";
import type { HoverState } from "@/lib/map-types";
import type { Metric } from "@/lib/metrics";

type MapTooltipProps = {
  hover: HoverState | null;
  metric: Metric;
  record: CountryRecord | undefined;
};

export function MapTooltip({ hover, metric, record }: MapTooltipProps) {
  if (!hover) return null;
  const value = record?.[metric.id];
  const vw = typeof window === "undefined" ? 1280 : window.innerWidth;
  const vh = typeof window === "undefined" ? 800 : window.innerHeight;
  const left = hover.x + 16 > vw - 200 ? hover.x - 176 : hover.x + 16;
  const top = hover.y + 16 > vh - 88 ? hover.y - 72 : hover.y + 16;

  return (
    <div
      className="pointer-events-none fixed z-50 w-44 rounded-lg bg-surface px-3 py-2 shadow-[var(--shadow-border)]"
      style={{ left, top }}
      role="status"
    >
      <p className="truncate text-sm font-medium text-fg">{hover.name}</p>
      <p className="mt-0.5 font-mono text-sm text-fg tabular-nums">
        {value == null ? "No data" : metric.format(value)}
      </p>
    </div>
  );
}
