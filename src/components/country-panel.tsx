import { X } from "lucide-react";
import { COUNTRIES, type CountryRecord } from "@/lib/countries";
import { quantile } from "@/lib/map-scale";
import { METRICS, type Metric, type MetricId } from "@/lib/metrics";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CountryPanelProps = {
  metric: Metric;
  selected: CountryRecord | null;
  onSelect: (id: string) => void;
  onClose: () => void;
};

function ranked(metricId: MetricId) {
  return [...COUNTRIES].sort((a, b) => b[metricId] - a[metricId]);
}

function percentileOf(value: number, metricId: MetricId) {
  const values = COUNTRIES.map((c) => c[metricId]).sort((a, b) => a - b);
  const below = values.filter((v) => v < value).length;
  return below / Math.max(values.length - 1, 1);
}

function Bar({ value, metricId }: { value: number; metricId: MetricId }) {
  const pct = Math.max(4, Math.min(100, percentileOf(value, metricId) * 100));
  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-fg/8">
      <div
        className="h-full rounded-full bg-primary transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function RankRow({
  rank,
  country,
  metric,
  active,
  onSelect,
}: {
  rank: number;
  country: CountryRecord;
  metric: Metric;
  active?: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(country.id)}
      className={cn(
        "grid w-full grid-cols-[1.5rem_1fr_auto] items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm",
        active ? "bg-fg/8" : "hover:bg-fg/5",
      )}
    >
      <span className="font-mono text-xs text-subtle tabular-nums">{rank}</span>
      <span className="truncate text-fg">{country.name}</span>
      <span className="font-mono text-xs text-muted tabular-nums">{metric.formatShort(country[metric.id])}</span>
    </button>
  );
}

export function CountryPanel({ metric, selected, onSelect, onClose }: CountryPanelProps) {
  const list = ranked(metric.id);
  const values = list.map((c) => c[metric.id]).sort((a, b) => a - b);
  const low = values[0] ?? 0;
  const high = values[values.length - 1] ?? 0;
  const median = quantile(values, 0.5);
  const rank = selected ? list.findIndex((c) => c.id === selected.id) + 1 : 0;

  if (!selected) {
    return (
      <div className="flex h-full flex-col">
        <p className="font-display text-xl leading-tight text-fg text-balance">{metric.label}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted text-pretty">{metric.description}</p>
        <dl className="mt-5 grid grid-cols-3 gap-2">
          {[
            ["Low", metric.formatShort(low)],
            ["Median", metric.formatShort(median)],
            ["High", metric.formatShort(high)],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-fg/5 px-2.5 py-2">
              <dt className="text-xs text-subtle">{label}</dt>
              <dd className="mt-1 font-mono text-sm text-fg tabular-nums">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 min-h-0 flex-1 overflow-auto pr-1">
          <p className="text-xs font-medium tracking-wide text-subtle uppercase">Highest</p>
          <div className="mt-1">
            {list.slice(0, 6).map((country, i) => (
              <RankRow key={country.id} rank={i + 1} country={country} metric={metric} onSelect={onSelect} />
            ))}
          </div>
          <p className="mt-4 text-xs font-medium tracking-wide text-subtle uppercase">Lowest</p>
          <div className="mt-1">
            {list.slice(-5).reverse().map((country) => (
              <RankRow
                key={country.id}
                rank={list.findIndex((c) => c.id === country.id) + 1}
                country={country}
                metric={metric}
                onSelect={onSelect}
              />
            ))}
          </div>
        </div>
        <p className="mt-4 text-xs text-subtle">Click a country on the map, or search, to inspect it.</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-display text-2xl leading-tight text-fg text-balance">{selected.name}</p>
          <p className="mt-1 text-sm text-muted">
            {selected.region} · {selected.iso3}
          </p>
        </div>
        <Button variant="ghost" size="iconSm" onClick={onClose} aria-label="Clear selection">
          <X className="size-4" />
        </Button>
      </div>
      <p className="mt-5 font-mono text-3xl tracking-tight text-fg tabular-nums">{metric.format(selected[metric.id])}</p>
      <p className="mt-1 text-sm text-muted">{metric.label}</p>
      <p className="mt-3 text-sm text-fg">
        Rank <span className="font-mono tabular-nums">{rank}</span>
        <span className="text-subtle"> of {list.length}</span>
      </p>
      <Bar value={selected[metric.id]} metricId={metric.id} />
      <p className="mt-2 text-xs text-subtle">
        World median {metric.format(median)} · {Math.round(percentileOf(selected[metric.id], metric.id) * 100)}th percentile
      </p>
      <div className="mt-6 min-h-0 flex-1 overflow-auto pr-1">
        <p className="text-xs font-medium tracking-wide text-subtle uppercase">All indicators</p>
        <ul className="mt-2 space-y-3">
          {METRICS.map((item) => (
            <li key={item.id}>
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-sm text-muted">{item.shortLabel}</span>
                <span className="font-mono text-sm text-fg tabular-nums">{item.format(selected[item.id])}</span>
              </div>
              <div className="mt-1.5">
                <Bar value={selected[item.id]} metricId={item.id} />
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs font-medium tracking-wide text-subtle uppercase">Nearby in rank</p>
        <div className="mt-1">
          {list.slice(Math.max(0, rank - 3), Math.min(list.length, rank + 2)).map((country) => (
            <RankRow
              key={country.id}
              rank={list.findIndex((c) => c.id === country.id) + 1}
              country={country}
              metric={metric}
              active={country.id === selected.id}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
