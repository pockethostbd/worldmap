import { Minus, Plus, RotateCcw } from "lucide-react";
import type { MapZoomApi } from "@/components/world-map";
import { Button } from "@/components/ui/button";

type ZoomControlsProps = {
  api: MapZoomApi | null;
};

export function ZoomControls({ api }: ZoomControlsProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-surface/92 shadow-[var(--shadow-border)] backdrop-blur-sm">
      <Button variant="ghost" size="iconSm" onClick={() => api?.zoomIn()} aria-label="Zoom in" disabled={!api}>
        <Plus className="size-4" />
      </Button>
      <Button variant="ghost" size="iconSm" onClick={() => api?.zoomOut()} aria-label="Zoom out" disabled={!api}>
        <Minus className="size-4" />
      </Button>
      <Button variant="ghost" size="iconSm" onClick={() => api?.reset()} aria-label="Reset map view" disabled={!api}>
        <RotateCcw className="size-4" />
      </Button>
    </div>
  );
}
