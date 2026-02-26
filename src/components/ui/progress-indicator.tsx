import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
  count: number;
  active: number;
  onDotClick?: (index: number) => void;
  className?: string;
}

export function ProgressIndicator({
  count,
  active,
  onDotClick,
  className,
}: ProgressIndicatorProps) {
  return (
    <div className={cn("flex gap-2 items-center justify-center", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick?.(i)}
          aria-label={`Go to item ${i + 1}`}
          className={cn(
            "size-2 rounded-full transition-all duration-300",
            i === active ? "bg-foreground" : "bg-muted"
          )}
        />
      ))}
    </div>
  );
}
