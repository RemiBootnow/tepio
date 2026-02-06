"use client";

import { cn } from "@/lib/utils";
import { SelectOption } from "./select-option";
import { LucideIcon } from "lucide-react";

interface SelectOptionItem<T extends string> {
  value: T;
  label: string;
  description?: string;
  icon: LucideIcon;
}

interface SelectOptionGroupProps<T extends string> {
  /** Array of options to display */
  options: SelectOptionItem<T>[];
  /** Currently selected value */
  value: T | null;
  /** Called when an option is selected - receives the value */
  onSelect: (value: T) => void;
  /** Error message to display */
  error?: string;
  /** Additional CSS classes */
  className?: string;
}

export function SelectOptionGroup<T extends string>({
  options,
  value,
  onSelect,
  error,
  className,
}: SelectOptionGroupProps<T>) {
  return (
    <div className={cn("space-y-3", className)}>
      <div className="space-y-3" role="listbox">
        {options.map((option) => (
          <SelectOption
            key={option.value}
            icon={option.icon}
            label={option.label}
            description={option.description}
            selected={value === option.value}
            onClick={() => onSelect(option.value)}
          />
        ))}
      </div>
      {error && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
