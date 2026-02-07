"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import { searchCommunes, PostalCodeCity } from "@/lib/api/postal-code";

interface CitySearchProps {
  postalCode: string;
  city: string;
  onSelect: (postalCode: string, city: string) => void;
  error?: string;
}

export function CitySearch({ postalCode, city, onSelect, error }: CitySearchProps) {
  const [query, setQuery] = useState(
    postalCode && city ? `${postalCode} — ${city}` : ""
  );
  const [results, setResults] = useState<PostalCodeCity[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const search = useCallback(async (q: string) => {
    if (q.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);
    const communes = await searchCommunes(q);
    setResults(communes);
    setIsOpen(communes.length > 0);
    setActiveIndex(-1);
    setIsLoading(false);
  }, []);

  const handleChange = (value: string) => {
    setQuery(value);
    // Clear selection when user types
    if (postalCode || city) {
      onSelect("", "");
    }

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => search(value), 300);
  };

  const handleSelect = (item: PostalCodeCity) => {
    setQuery(`${item.postalCode} — ${item.name}`);
    onSelect(item.postalCode, item.name);
    setIsOpen(false);
    setActiveIndex(-1);
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleSelect(results[activeIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cleanup debounce
  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <Input
        ref={inputRef}
        id="citySearch"
        type="text"
        placeholder="Code postal ou ville"
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => {
          if (results.length > 0 && !postalCode) setIsOpen(true);
        }}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        aria-invalid={!!error}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        role="combobox"
      />

      {isOpen && (
        <ul
          role="listbox"
          className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-xl border border-border bg-background shadow-lg"
        >
          {isLoading ? (
            <li className="px-4 py-3 text-sm text-muted-foreground">
              Recherche...
            </li>
          ) : (
            results.map((item, index) => (
              <li
                key={`${item.postalCode}-${item.code}`}
                role="option"
                aria-selected={index === activeIndex}
                className={`flex cursor-pointer items-center gap-3 px-4 py-3 text-sm transition-colors ${
                  index === activeIndex
                    ? "bg-muted"
                    : "hover:bg-muted/50"
                }`}
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSelect(item);
                }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <MapPin className="size-4 shrink-0 text-muted-foreground" />
                <span>
                  <span className="font-medium">{item.name}</span>
                  <span className="ml-2 text-muted-foreground">
                    {item.postalCode}
                  </span>
                </span>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
