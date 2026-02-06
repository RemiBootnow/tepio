"use client";

import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  current: number;
  total: number;
  className?: string;
}

export function StepIndicator({ current, total, className }: StepIndicatorProps) {
  return (
    <div className={cn("flex justify-center gap-1", className)}>
      {Array.from({ length: total }, (_, i) => {
        const stepNumber = i + 1;
        const isActive = stepNumber === current;

        return (
          <div
            key={stepNumber}
            className={cn(
              "h-1.5 rounded-[6px] transition-all duration-200",
              isActive ? "w-12 bg-neutral" : "w-6 bg-muted"
            )}
          />
        );
      })}
    </div>
  );
}
