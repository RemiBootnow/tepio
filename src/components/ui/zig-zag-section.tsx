import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

interface ZigZagSectionProps {
  imageSrc: string;
  imageAlt: string;
  /** Which side the image appears on desktop. On mobile, image is always on top. */
  imagePosition?: "left" | "right";
  title: React.ReactNode;
  description: React.ReactNode;
  cta?: { label: string; href: string };
  /** Background color of the image panel (e.g. "bg-primary", "bg-muted"). Defaults to bg-muted. */
  imageBg?: string;
  className?: string;
}

export function ZigZagSection({
  imageSrc,
  imageAlt,
  imagePosition = "left",
  title,
  description,
  cta,
  imageBg = "bg-muted",
  className,
}: ZigZagSectionProps) {
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
          {/* Image panel — width fills container, height is natural */}
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
          <div className="w-full md:flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Heading as="h2">{title}</Heading>
              <p className="text-base text-[#678481] leading-6">{description}</p>
            </div>
            {cta && (
              <Button asChild size="lg" className="rounded-full w-fit">
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
