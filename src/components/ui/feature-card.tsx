import { Icon, type IconName } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: IconName;
  title: string;
  description: string;
  colorMode?: "light" | "dark";
}

export function FeatureCard({
  icon,
  title,
  description,
  colorMode = "light",
}: FeatureCardProps) {
  const isDark = colorMode === "dark";
  return (
    <div
      className={cn(
        "rounded-3xl p-6 flex flex-col gap-6 h-full",
        isDark ? "bg-white/5" : "bg-muted"
      )}
    >
      <Icon name={icon} color={isDark ? "white" : "dark"} size="big" className="shrink-0" />
      <div className="flex flex-col gap-2">
        <p
          className={cn(
            "font-medium text-[22px] leading-8",
            isDark ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </p>
        <p
          className={cn(
            "text-base leading-6",
            isDark ? "text-white" : "text-foreground"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
