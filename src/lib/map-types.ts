import type { CountryRecord } from "@/lib/countries";

export type MapCountry = {
  featureKey: string;
  id: string;
  name: string;
  path: string;
  centroid: [number, number];
  bounds: [[number, number], [number, number]];
  record: CountryRecord | undefined;
};

export type HoverState = {
  id: string;
  name: string;
  x: number;
  y: number;
};
