import { useLayoutEffect, useRef, useState } from "react";
import { METRICS, type MetricId } from "@/lib/metrics";
import { cn } from "@/lib/utils";

type MetricSwitcherProps = {
  value: MetricId;
  onChange: (id: MetricId) => void;
};

export function MetricSwitcher({ value, onChange }: MetricSwitcherProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const [pill, setPill] = useState({ x: 0, width: 0, ready: false });

  useLayoutEffect(() => {
    const root = listRef.current;
    if (!root) return;
    const active = root.querySelector<HTMLButtonElement>(`[data-metric="${value}"]`);
    if (!active) return;
    setPill({ x: active.offsetLeft, width: active.offsetWidth, ready: true });
  }, [value]);

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label="Map metric"
      className="relative flex min-h-11 items-center gap-0.5 overflow-x-auto rounded-xl bg-fg/5 p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-1 bottom-1 rounded-lg bg-surface shadow-[var(--shadow-border)]",
          pill.ready && "transition-[transform,width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        )}
        style={{ width: pill.width, transform: `translateX(${pill.x}px)` }}
      />
      {METRICS.map((metric) => {
        const active = metric.id === value;
        return (
          <button
            key={metric.id}
            type="button"
            role="tab"
            data-metric={metric.id}
            aria-selected={active}
            onClick={() => onChange(metric.id)}
            className={cn(
              "relative z-10 shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150",
              active ? "text-fg" : "text-muted hover:text-fg",
            )}
          >
            {metric.shortLabel}
          </button>
        );
      })}
    </div>
  );
}
