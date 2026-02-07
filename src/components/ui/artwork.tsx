import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ArtworkProps {
  /** The Lucide icon to display */
  icon: LucideIcon;
  /** Size variant */
  size?: "sm" | "default" | "lg";
  /** Additional CSS classes */
  className?: string;
}

const sizeClasses = {
  sm: "size-9 p-2 rounded-lg",
  default: "size-11 p-3 rounded-xl",
  lg: "size-14 p-4 rounded-2xl",
};

const iconSizes = {
  sm: "size-4",
  default: "size-5",
  lg: "size-6",
};

export function Artwork({ icon: Icon, size = "default", className }: ArtworkProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-muted/50",
        sizeClasses[size],
        className
      )}
    >
      <Icon className={cn("text-foreground", iconSizes[size])} />
    </div>
  );
}
