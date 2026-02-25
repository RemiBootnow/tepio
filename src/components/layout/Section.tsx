import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** Background color class (e.g., "bg-muted", "bg-primary") */
  background?: string;
  /** Additional wrapper classes for the outer section element */
  wrapperClassName?: string;
  /** HTML element to render as (default: "section") */
  as?: "section" | "div" | "header" | "footer" | "article";
}

/**
 * Section component for consistent page layouts.
 *
 * Features:
 * - Max width: 1200px
 * - Responsive horizontal padding:
 *   - <375px: 16px
 *   - 375px-394px: 20px
 *   - ≥395px: 24px
 * - Centered content with auto margins
 */
export function Section({
  children,
  className,
  background,
  wrapperClassName,
  as: Component = "section",
}: SectionProps) {
  return (
    <Component className={cn(background, wrapperClassName)}>
      <div
        className={cn(
          "mx-auto w-full max-w-5xl",
          // Responsive padding: 16px → 20px (at 375px) → 24px (at 395px)
          "px-4 min-[375px]:px-5 min-[395px]:px-6",
          className
        )}
      >
        {children}
      </div>
    </Component>
  );
}
