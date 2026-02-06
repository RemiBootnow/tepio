"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface RadioCardOption<T extends string> {
  value: T;
  label: string;
  description?: string;
  icon?: LucideIcon;
}

interface RadioCardGroupProps<T extends string> {
  name: string;
  options: RadioCardOption<T>[];
  value: T | null;
  onChange: (value: T) => void;
  error?: string;
  columns?: 1 | 2 | 3;
  className?: string;
}

export function RadioCardGroup<T extends string>({
  name,
  options,
  value,
  onChange,
  error,
  columns = 1,
  className,
}: RadioCardGroupProps<T>) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div
        className={cn("grid gap-3", gridCols[columns])}
        role="radiogroup"
        aria-label={name}
      >
        {options.map((option) => {
          const isSelected = value === option.value;
          const Icon = option.icon;

          return (
            <label
              key={option.value}
              className={cn(
                "relative flex cursor-pointer rounded-xl border-2 p-4 transition-all",
                "hover:border-primary/50 hover:bg-muted/50",
                "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
                isSelected
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card",
                "min-h-[72px]"
              )}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={isSelected}
                onChange={() => onChange(option.value)}
                className="sr-only"
              />
              <div className="flex items-center gap-4 w-full">
                {Icon && (
                  <div
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg",
                      isSelected
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p
                    className={cn(
                      "font-medium",
                      isSelected ? "text-primary" : "text-foreground"
                    )}
                  >
                    {option.label}
                  </p>
                  {option.description && (
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {option.description}
                    </p>
                  )}
                </div>
                <div
                  className={cn(
                    "h-5 w-5 shrink-0 rounded-full border-2 flex items-center justify-center",
                    isSelected ? "border-primary" : "border-muted-foreground/30"
                  )}
                >
                  {isSelected && (
                    <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                  )}
                </div>
              </div>
            </label>
          );
        })}
      </div>
      {error && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
