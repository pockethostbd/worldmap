import { useCallback, useMemo, useState } from "react";
import { CountryPanel } from "@/components/country-panel";
import { CountrySearch } from "@/components/country-search";
import { MapLegend } from "@/components/map-legend";
import { MapTooltip } from "@/components/map-tooltip";
import { MetricSwitcher } from "@/components/metric-switcher";
import { WorldMap, type MapZoomApi } from "@/components/world-map";
import { ZoomControls } from "@/components/zoom-controls";
import { createColorScale } from "@/lib/map-scale";
import type { HoverState, MapCountry } from "@/lib/map-types";
import { METRIC_BY_ID, type MetricId } from "@/lib/metrics";
import { cn } from "@/lib/utils";

function Mark() {
  return (
    <svg viewBox="0 0 32 32" className="size-7 text-primary" aria-hidden="true">
      <circle cx="16" cy="16" r="11.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="16" cy="16" rx="5" ry="11.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5 16h22M7.2 10.5h17.6M7.2 21.5h17.6" fill="none" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

export function MeridianApp() {
  const [metricId, setMetricId] = useState<MetricId>("gdp");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [flyToId, setFlyToId] = useState<string | null>(null);
  const [flyNonce, setFlyNonce] = useState(0);
  const [hover, setHover] = useState<HoverState | null>(null);
  const [countries, setCountries] = useState<MapCountry[]>([]);
  const [zoomApi, setZoomApi] = useState<MapZoomApi | null>(null);

  const metric = METRIC_BY_ID[metricId];
  const selectedFeature = selectedId ? (countries.find((c) => c.featureKey === selectedId) ?? null) : null;
  const selected = selectedFeature?.record ?? null;
  const hoveredFeature = hover ? countries.find((c) => c.featureKey === hover.id) : undefined;

  const values = useMemo(
    () => countries.map((c) => c.record?.[metricId]).filter((v): v is number => v != null),
    [countries, metricId],
  );
  const colorScale = useMemo(() => createColorScale(metric, values), [metric, values]);

  const onReady = useCallback((next: MapCountry[]) => {
    setCountries(next);
  }, []);

  const onZoomApi = useCallback((api: MapZoomApi) => {
    setZoomApi(api);
  }, []);

  const selectFeature = useCallback((featureKey: string | null, fly = false) => {
    setSelectedId(featureKey);
    if (featureKey && fly) {
      setFlyToId(featureKey);
      setFlyNonce((n) => n + 1);
    }
  }, []);

  const selectByIso = useCallback(
    (isoId: string, fly = true) => {
      const feature = countries.find((c) => c.record?.id === isoId);
      if (feature) selectFeature(feature.featureKey, fly);
    },
    [countries, selectFeature],
  );

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-bg text-fg">
      <header className="z-20 flex shrink-0 flex-col gap-3 border-b border-border px-3 py-3 sm:px-4 lg:flex-row lg:items-center lg:gap-4 lg:px-5">
        <div className="flex items-center gap-2.5">
          <Mark />
          <div className="min-w-0">
            <p className="font-display text-lg leading-none tracking-tight">Meridian</p>
            <p className="mt-0.5 text-xs text-subtle">Country metrics, mapped</p>
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <MetricSwitcher value={metricId} onChange={setMetricId} />
        </div>
        <div className="w-full lg:w-auto">
          <CountrySearch onPick={(id) => selectByIso(id, true)} />
        </div>
      </header>

      <div className="relative flex min-h-0 flex-1">
        <section className="relative min-w-0 flex-1">
          <WorldMap
            metricId={metricId}
            colorScale={colorScale}
            selectedId={selectedId}
            flyToId={flyToId}
            flyNonce={flyNonce}
            onSelect={(id) => selectFeature(id, false)}
            onHover={setHover}
            onReady={onReady}
            onZoomApi={onZoomApi}
          />
          <div className="pointer-events-none absolute inset-0 z-10">
            <div className="pointer-events-auto absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
              <MapLegend metric={metric} colorScale={colorScale} />
            </div>
            <div className="pointer-events-auto absolute right-3 bottom-24 sm:top-4 sm:right-4 sm:bottom-auto">
              <ZoomControls api={zoomApi} />
            </div>
          </div>
          <MapTooltip hover={hover} metric={metric} record={hoveredFeature?.record} />
        </section>

        <aside className="hidden w-[22.5rem] shrink-0 border-l border-border bg-surface/80 p-5 lg:block">
          <CountryPanel
            metric={metric}
            selected={selected}
            onSelect={(id) => selectByIso(id, true)}
            onClose={() => selectFeature(null)}
          />
        </aside>

        <div
          className={cn(
            "sheet-mobile absolute inset-x-0 bottom-0 z-30 overflow-hidden rounded-t-2xl bg-surface p-4 shadow-[var(--shadow-border)] transition-transform duration-300 ease-out lg:hidden",
            selected ? "translate-y-0" : "translate-y-full",
          )}
        >
          {selected ? (
            <CountryPanel
              metric={metric}
              selected={selected}
              onSelect={(id) => selectByIso(id, true)}
              onClose={() => selectFeature(null)}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
