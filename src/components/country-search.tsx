import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { COUNTRIES, countryMatchesQuery } from "@/lib/countries";
import { cn } from "@/lib/utils";

type CountrySearchProps = {
  onPick: (id: string) => void;
};

export function CountrySearch({ onPick }: CountrySearchProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    if (query.trim().length < 1) return [];
    return COUNTRIES.filter((c) => countryMatchesQuery(c, query)).slice(0, 8);
  }, [query]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "/" && !(event.target instanceof HTMLInputElement) && !(event.target instanceof HTMLTextAreaElement)) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onDoc = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const pick = (id: string) => {
    onPick(id);
    setQuery("");
    setOpen(false);
    inputRef.current?.blur();
  };

  return (
    <div ref={rootRef} className="relative w-full lg:max-w-72">
      <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" />
      <input
        ref={inputRef}
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          setOpen(true);
          setActive(0);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setActive((i) => Math.min(i + 1, Math.max(results.length - 1, 0)));
          } else if (event.key === "ArrowUp") {
            event.preventDefault();
            setActive((i) => Math.max(i - 1, 0));
          } else if (event.key === "Enter" && results[active]) {
            event.preventDefault();
            pick(results[active]!.id);
          } else if (event.key === "Escape") {
            setOpen(false);
            setQuery("");
          }
        }}
        placeholder="Search countries"
        aria-label="Search countries"
        className="h-11 w-full rounded-xl bg-fg/5 pr-10 pl-10 text-sm text-fg outline-none ring-ring placeholder:text-subtle focus:ring-2"
      />
      {query ? (
        <button
          type="button"
          className="absolute top-1/2 right-2 flex size-8 -translate-y-1/2 items-center justify-center rounded-md text-subtle hover:text-fg"
          onClick={() => {
            setQuery("");
            inputRef.current?.focus();
          }}
          aria-label="Clear search"
        >
          <X className="size-4" />
        </button>
      ) : (
        <kbd className="pointer-events-none absolute top-1/2 right-3 hidden -translate-y-1/2 rounded-md bg-fg/8 px-1.5 py-0.5 font-mono text-xs text-subtle md:inline">
          /
        </kbd>
      )}
      {open && results.length > 0 ? (
        <ul className="absolute top-[calc(100%+6px)] z-40 max-h-72 w-full overflow-auto rounded-xl bg-surface py-1 shadow-[var(--shadow-border)]">
          {results.map((country, index) => (
            <li key={country.id}>
              <button
                type="button"
                onMouseEnter={() => setActive(index)}
                onClick={() => pick(country.id)}
                className={cn(
                  "flex w-full items-center justify-between px-3 py-2.5 text-left text-sm",
                  index === active ? "bg-fg/8 text-fg" : "text-fg",
                )}
              >
                <span>{country.name}</span>
                <span className="font-mono text-xs text-subtle">{country.iso3}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
