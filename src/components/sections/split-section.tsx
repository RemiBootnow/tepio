import Image from "next/image";
import { cn } from "@/lib/utils";
import { TextContent } from "@/components/blocks/text-content";

interface SplitSectionProps {
  imageSrc: string;
  imageAlt: string;
  /** Which side the image appears on desktop. On mobile, image is always on top. */
  imagePosition?: "left" | "right";
  /** Background color of the image panel (e.g. "bg-primary", "bg-muted"). Defaults to bg-muted. */
  imageBg?: string;
  className?: string;
  // TextContent props
  eyebrow?: string;
  title: string;
  titleLevel?: 1 | 2;
  subtitle?: string;
  primaryButtonLabel?: string;
  primaryButtonLink?: string;
  primaryButtonColor?: "neutral" | "primary";
  secondaryButtonLabel?: string;
  secondaryButtonLink?: string;
  colorMode?: "light" | "dark";
}

export function SplitSection({
  imageSrc,
  imageAlt,
  imagePosition = "left",
  imageBg = "bg-muted",
  className,
  eyebrow,
  title,
  titleLevel,
  subtitle,
  primaryButtonLabel,
  primaryButtonLink,
  primaryButtonColor,
  secondaryButtonLabel,
  secondaryButtonLink,
  colorMode,
}: SplitSectionProps) {
  return (
    <section className={cn("py-16 md:py-20", className)}>
      <div className="w-full max-w-5xl mx-auto px-5 min-[395px]:px-6">
        {/*
          Image is always first in DOM so it appears on top on mobile (flex-col).
          On desktop, imagePosition="right" uses flex-row-reverse to push it right.
        */}
        <div
          className={cn(
            "flex flex-col md:flex-row gap-10 md:gap-20 items-center",
            imagePosition === "right" && "md:flex-row-reverse"
          )}
        >
          {/* Image panel */}
          <div
            className={cn(
              "w-full md:flex-1 rounded-3xl overflow-hidden shrink-0",
              imageBg
            )}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto"
            />
          </div>

          {/* Text panel */}
          <div className="w-full md:flex-1">
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
            />
          </div>
        </div>
      </div>
    </section>
  );
}
