import Image from "next/image";
import { TextContent } from "@/components/blocks/text-content";

const GRADIENT_COLORS = {
  green: "1,50,45",    // #01322D
  black: "0,0,0",      // #000000
  white: "255,255,255", // #FFFFFF
  beige: "250,246,241", // #FAF6F1
} as const;

type GradientColor = keyof typeof GRADIENT_COLORS;

interface HeroSectionProps {
  // Background media
  videoSrc?: string;
  videoMobileSrc?: string;
  posterSrc?: string;
  posterMobileSrc?: string;

  // Content
  /** Slot rendered above TextContent — e.g. <Eyebrow variant="rating" /> */
  eyebrow?: React.ReactNode;
  title: string;
  titleLevel?: 1 | 2;
  subtitle?: string;
  primaryButtonLabel?: string;
  primaryButtonLink?: string;
  primaryButtonColor?: "neutral" | "primary";
  secondaryButtonLabel?: string;
  secondaryButtonLink?: string;
  colorMode?: "light" | "dark";
  /** Color of the left-to-right gradient overlay. Defaults to "green". */
  gradientColor?: GradientColor;
  /** Slot rendered between subtitle and buttons — e.g. a checklist */
  children?: React.ReactNode;
}

export function HeroSection({
  videoSrc,
  videoMobileSrc,
  posterSrc,
  posterMobileSrc,
  eyebrow,
  title,
  titleLevel = 1,
  subtitle,
  primaryButtonLabel,
  primaryButtonLink,
  primaryButtonColor,
  secondaryButtonLabel,
  secondaryButtonLink,
  colorMode = "dark",
  gradientColor = "green",
  children,
}: HeroSectionProps) {
  const hasMobileVideo = !!videoMobileSrc;
  const hasMobilePoster = !hasMobileVideo && !!posterMobileSrc;
  const hasMobileOverride = hasMobileVideo || hasMobilePoster;
  const rgb = GRADIENT_COLORS[gradientColor];

  return (
    <section className="relative w-full h-[120vh] md:h-screen -mt-17 overflow-hidden">
      {/* ── Desktop background (absolute, full-cover) ── */}
      <div className="hidden md:block absolute inset-0">
        {videoSrc && (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={posterSrc}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        {!videoSrc && posterSrc && (
          <Image
            src={posterSrc}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        )}
        {/* Left-to-right gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              `linear-gradient(89deg, rgba(${rgb},0.85) 0%, rgba(${rgb},0.7) 37%, rgba(${rgb},0.1) 65%, rgba(${rgb},0) 80%)`,
          }}
        />
      </div>

      {/* ── Mobile background ── */}
      <div className="md:hidden absolute inset-0">
        {hasMobileVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={posterMobileSrc ?? posterSrc}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoMobileSrc} type="video/mp4" />
          </video>
        )}
        {!hasMobileVideo && videoSrc && !hasMobilePoster && (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={posterSrc}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        {hasMobilePoster && (
          <>
            {/* Solid color block at the top */}
            <div
              className="absolute inset-x-0 top-0 h-95"
              style={{ backgroundColor: `rgb(${rgb})` }}
            />
            {/* Mobile image below the color block */}
            <Image
              src={posterMobileSrc}
              alt=""
              fill
              className="object-cover object-top top-95! h-[calc(100%-380px)]!"
              sizes="100vw"
              priority
            />
            {/* Top-down gradient on the image: solid at top → transparent at 1/3 */}
            <div
              className="absolute inset-x-0 top-95 w-full h-[calc(100%-380px)]"
              style={{
                background:
                  `linear-gradient(180deg, rgba(${rgb},1) 0%, rgba(${rgb},0) 33%)`,
              }}
            />
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-5xl px-4 min-[375px]:px-5 min-[395px]:px-6 h-full flex items-start md:items-center">
        <div className="flex flex-col gap-6 max-w-130 pt-22 md:py-24">
          {eyebrow}
          <TextContent
            title={title}
            titleLevel={titleLevel}
            subtitle={subtitle}
            primaryButtonLabel={primaryButtonLabel}
            primaryButtonLink={primaryButtonLink}
            primaryButtonColor={primaryButtonColor}
            secondaryButtonLabel={secondaryButtonLabel}
            secondaryButtonLink={secondaryButtonLink}
            colorMode={colorMode}
          >
            {children}
          </TextContent>
        </div>
      </div>
    </section>
  );
}
