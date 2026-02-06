"use client";

import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Artwork } from "./artwork";
import { LucideIcon } from "lucide-react";

interface SelectOptionProps {
  /** The Lucide icon to display */
  icon: LucideIcon;
  /** The label text */
  label: string;
  /** Optional description text */
  description?: string;
  /** Click handler - typically used to select and go to next step */
  onClick: () => void;
  /** Whether the option is selected */
  selected?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export function SelectOption({
  icon,
  label,
  description,
  onClick,
  selected = false,
  className,
}: SelectOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-3 rounded-3xl border p-3 text-left shadow-xs transition-all cursor-pointer",
        "hover:border-border-hover active:scale-[0.99]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        selected ? "border-foreground" : "border-border bg-background",
        className
      )}
    >
      <Artwork icon={icon} />
      <div className="flex-1 min-w-0">
        <p className="text-base font-medium text-foreground">{label}</p>
        {description && (
          <p className="text-sm text-muted-foreground truncate">{description}</p>
        )}
      </div>
      <ChevronRight className="size-6 text-muted-foreground shrink-0" />
    </button>
  );
}
