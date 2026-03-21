import React from "react";
import { TextContent } from "@/components/blocks/text-content";

interface FeaturesSectionProps {
  // TextContent
  eyebrow?: string;
  title: string;
  titleLevel?: 1 | 2;
  subtitle?: string;
  primaryButtonLabel?: string;
  primaryButtonLink?: string;
  primaryButtonColor?: "neutral" | "primary";
  secondaryButtonLabel?: string;
  secondaryButtonLink?: string;
  // Section
  colorMode?: "light" | "dark";
  background?: string;
  children: React.ReactNode;
}

export function FeaturesSection({
  eyebrow,
  title,
  titleLevel,
  subtitle,
  primaryButtonLabel,
  primaryButtonLink,
  primaryButtonColor,
  secondaryButtonLabel,
  secondaryButtonLink,
  colorMode = "light",
  background,
  children,
}: FeaturesSectionProps) {
  const bg = background ?? (colorMode === "dark" ? "bg-[#01322d]" : "bg-background");
  const isDark = colorMode === "dark";

  const childArray = React.Children.toArray(children);
  const count = childArray.length;
  const remainder = count % 3;

  function getColSpan(index: number): string {
    const inLastRow = remainder !== 0 && index >= count - remainder;
    if (!inLastRow) return "col-span-6 md:col-span-3 lg:col-span-2";
    if (remainder === 2) return "col-span-6 md:col-span-3"; // 3 cols at lg → 2 items fill the row
    return "col-span-6"; // remainder === 1 → full width
  }

  return (
    <section className={`relative ${bg} py-16 md:py-30 overflow-hidden`}>
      {isDark && (
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1331px] h-[425px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(4,100,80,0.5) 0%, transparent 70%)",
          }}
        />
      )}

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 min-[395px]:px-6 flex flex-col gap-10 md:gap-20 items-center">
        <TextContent
          eyebrow={eyebrow}
          title={title}
          titleLevel={titleLevel}
          subtitle={subtitle}
          primaryButtonLabel={primaryButtonLabel}
          primaryButtonLink={primaryButtonLink}
          primaryButtonColor={primaryButtonColor}
          secondaryButtonLabel={secondaryButtonLabel}
          secondaryButtonLink={secondaryButtonLink}
          colorMode={colorMode}
          align="left"
          className="md:items-center md:text-center w-full md:max-w-[600px]"
          subtitleClassName="md:max-w-120 md:mx-auto"
        />

        <div className="grid grid-cols-6 gap-5 w-full">
          {childArray.map((child, i) => (
            <div key={i} className={getColSpan(i)}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
