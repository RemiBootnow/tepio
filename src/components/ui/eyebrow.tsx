import { Star01 } from "@untitledui-pro/icons/line";
import { cn } from "@/lib/utils";

interface EyebrowBaseProps {
  colorMode?: "light" | "dark";
  className?: string;
}

interface EyebrowTextProps extends EyebrowBaseProps {
  variant?: "text";
  children: React.ReactNode;
}

interface EyebrowRatingProps extends EyebrowBaseProps {
  variant: "rating";
  rating: number;
  reviewCount: number;
  reviewLabel?: string;
}

type EyebrowProps = EyebrowTextProps | EyebrowRatingProps;

export function Eyebrow(props: EyebrowProps) {
  const { colorMode = "light", className } = props;
  const isDark = colorMode === "dark";

  if (props.variant === "rating") {
    const { rating, reviewCount, reviewLabel = "avis" } = props;
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star01 key={i} className="size-4 fill-primary text-primary" />
          ))}
        </div>
        <span className={cn("text-sm font-medium", isDark ? "text-white" : "text-foreground")}>
          {rating} sur {reviewCount} {reviewLabel}
        </span>
      </div>
    );
  }

  return (
    <p
      className={cn(
        "text-sm font-semibold uppercase tracking-wider",
        isDark ? "text-white/50" : "text-muted-foreground",
        className
      )}
    >
      {props.children}
    </p>
  );
}
