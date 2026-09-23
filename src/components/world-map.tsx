import { geoGraticule, geoNaturalEarth1, geoPath } from "d3-geo";
import { select } from "d3-selection";
import "d3-transition";
import { zoom as d3Zoom, zoomIdentity, type D3ZoomEvent, type ZoomBehavior } from "d3-zoom";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import { recordForFeature } from "@/lib/countries";
import type { ColorScale } from "@/lib/map-scale";
import type { HoverState, MapCountry } from "@/lib/map-types";
import type { MetricId } from "@/lib/metrics";
import { cn } from "@/lib/utils";

type WorldTopology = Topology<{ countries: GeometryCollection<{ name: string }> }>;

type WorldMapProps = {
  metricId: MetricId;
  colorScale: ColorScale | null;
  selectedId: string | null;
  flyToId: string | null;
  flyNonce: number;
  onSelect: (id: string | null) => void;
  onHover: (hover: HoverState | null) => void;
  onReady: (countries: MapCountry[]) => void;
  onZoomApi: (api: MapZoomApi) => void;
};

export type MapZoomApi = {
  zoomIn: () => void;
  zoomOut: () => void;
  reset: () => void;
};

function featureId(f: Feature<Geometry, { name: string }>) {
  if (f.id == null || f.id === "") return `name:${f.properties.name}`;
  const raw = String(f.id);
  return /^\d+$/.test(raw) ? raw.padStart(3, "0") : raw;
}

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function WorldMap({
  metricId,
  colorScale,
  selectedId,
  flyToId,
  flyNonce,
  onSelect,
  onHover,
  onReady,
  onZoomApi,
}: WorldMapProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const worldRef = useRef<SVGGElement>(null);
  const zoomRef = useRef<ZoomBehavior<SVGSVGElement, unknown> | null>(null);
  const downRef = useRef<{ x: number; y: number } | null>(null);
  const countriesRef = useRef<MapCountry[]>([]);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [topology, setTopology] = useState<WorldTopology | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      setSize({ width: Math.max(1, rect.width), height: Math.max(1, rect.height) });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch("/data/countries-50m.json")
      .then((res) => {
        if (!res.ok) throw new Error("Could not load world boundaries.");
        return res.json() as Promise<WorldTopology>;
      })
      .then((data) => {
        if (!cancelled) setTopology(data);
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setLoadError(err instanceof Error ? err.message : "Could not load world boundaries.");
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const collection = useMemo(() => {
    if (!topology) return null;
    return feature(topology, topology.objects.countries) as FeatureCollection<
      Geometry,
      { name: string }
    >;
  }, [topology]);

  const layout = useMemo(() => {
    if (!collection || size.width < 8 || size.height < 8) {
      return { sphere: "", graticule: "", countries: [] as MapCountry[] };
    }
    const padX = Math.min(48, size.width * 0.04);
    const padY = Math.min(36, size.height * 0.06);
    const projection = geoNaturalEarth1().fitExtent(
      [
        [padX, padY],
        [size.width - padX, size.height - padY],
      ],
      { type: "Sphere" },
    );
    const path = geoPath(projection);
    const countries: MapCountry[] = [];
    for (const geoFeature of collection.features) {
      const id = featureId(geoFeature);
      if (id === "010") continue;
      const d = path(geoFeature);
      if (!d) continue;
      const topoName = geoFeature.properties.name;
      const record = recordForFeature(id, topoName);
      countries.push({
        featureKey: `${id}:${topoName}`,
        id,
        name: record?.name ?? topoName,
        path: d,
        centroid: path.centroid(geoFeature) as [number, number],
        bounds: path.bounds(geoFeature) as [[number, number], [number, number]],
        record,
      });
    }
    return {
      sphere: path({ type: "Sphere" }) ?? "",
      graticule: path(geoGraticule().step([20, 20])()) ?? "",
      countries,
    };
  }, [collection, size]);

  useEffect(() => {
    countriesRef.current = layout.countries;
    if (layout.countries.length) onReady(layout.countries);
  }, [layout.countries, onReady]);

  const applyZoom = useCallback((event: D3ZoomEvent<SVGSVGElement, unknown>) => {
    worldRef.current?.setAttribute("transform", event.transform.toString());
  }, []);

  useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl || size.width < 8) return;
    const svg = select(svgEl);
    const zoom = d3Zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 16])
      .extent([
        [0, 0],
        [size.width, size.height],
      ])
      .translateExtent([
        [-size.width * 0.35, -size.height * 0.35],
        [size.width * 1.35, size.height * 1.35],
      ])
      .on("zoom", applyZoom);
    svg.call(zoom);
    zoomRef.current = zoom;
    const duration = () => (prefersReducedMotion() ? 0 : 280);
    onZoomApi({
      zoomIn: () => {
        svg.transition().duration(duration()).call(zoom.scaleBy, 1.45);
      },
      zoomOut: () => {
        svg.transition().duration(duration()).call(zoom.scaleBy, 0.7);
      },
      reset: () => {
        svg.transition().duration(prefersReducedMotion() ? 0 : 500).call(zoom.transform, zoomIdentity);
      },
    });
    return () => {
      zoom.on("zoom", null);
      svg.on(".zoom", null);
    };
  }, [applyZoom, onZoomApi, size.height, size.width]);

  useEffect(() => {
    if (!flyToId || !svgRef.current || !zoomRef.current) return;
    const country = countriesRef.current.find((item) => item.featureKey === flyToId);
    if (!country) return;
    const [[x0, y0], [x1, y1]] = country.bounds;
    const dx = Math.max(x1 - x0, 8);
    const dy = Math.max(y1 - y0, 8);
    const cx = (x0 + x1) / 2;
    const cy = (y0 + y1) / 2;
    const scale = Math.max(1.2, Math.min(12, 0.62 / Math.max(dx / size.width, dy / size.height)));
    const transform = zoomIdentity.translate(size.width / 2, size.height / 2).scale(scale).translate(-cx, -cy);
    select(svgRef.current)
      .transition()
      .duration(prefersReducedMotion() ? 0 : 850)
      .call(zoomRef.current.transform, transform);
  }, [flyNonce, flyToId, size.height, size.width]);

  const selected = layout.countries.find((country) => country.featureKey === selectedId);

  return (
    <div ref={wrapRef} className="relative h-full w-full overflow-hidden bg-bg">
      {loadError ? (
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-muted">
          {loadError}
        </div>
      ) : null}
      {!topology && !loadError ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-40 w-2/3 max-w-md rounded-full bg-fg/4 shimmer" aria-hidden="true" />
        </div>
      ) : null}
      <svg
        ref={svgRef}
        className="block h-full w-full cursor-grab touch-none select-none active:cursor-grabbing"
        viewBox={`0 0 ${Math.max(size.width, 1)} ${Math.max(size.height, 1)}`}
        role="img"
        aria-label="World choropleth map"
      >
        <g ref={worldRef}>
          <path
            d={layout.sphere}
            className="fill-map-ocean stroke-fg/12"
            strokeWidth={1}
            onClick={() => onSelect(null)}
          />
          <path d={layout.graticule} className="pointer-events-none fill-none stroke-map-graticule" strokeWidth={0.6} />
          {layout.countries.map((country) => {
            const value = country.record?.[metricId] ?? null;
            const fill = value == null || !colorScale ? "var(--map-nodata)" : colorScale.color(value);
            const isSelected = country.featureKey === selectedId;
            return (
              <path
                key={country.featureKey}
                d={country.path}
                style={{ fill, ["--country-fill" as string]: fill }}
                data-country={country.featureKey}
                className={cn("country-path cursor-pointer stroke-bg", isSelected && "is-selected")}
                onPointerEnter={(event) =>
                  onHover({ id: country.featureKey, name: country.name, x: event.clientX, y: event.clientY })
                }
                onPointerMove={(event) =>
                  onHover({ id: country.featureKey, name: country.name, x: event.clientX, y: event.clientY })
                }
                onPointerLeave={() => onHover(null)}
                onPointerDown={(event) => {
                  downRef.current = { x: event.clientX, y: event.clientY };
                }}
                onPointerUp={(event) => {
                  const start = downRef.current;
                  downRef.current = null;
                  if (!start) return;
                  if (Math.hypot(event.clientX - start.x, event.clientY - start.y) > 6) return;
                  onSelect(country.featureKey === selectedId ? null : country.featureKey);
                  onHover(null);
                }}
              />
            );
          })}
          {selected ? <path d={selected.path} className="country-outline" /> : null}
        </g>
      </svg>
    </div>
  );
}
