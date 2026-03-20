import Image from "next/image";
import { TextContent } from "@/components/blocks/text-content";

interface CtaSectionBaseProps {
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
  colorMode?: "light" | "dark";
}

interface CtaSectionBackgroundProps extends CtaSectionBaseProps {
  /** Background image — section becomes 100vh with text centered over the image. */
  backgroundSrc: string;
  backgroundAlt: string;
  imageSrc?: never;
  imageAlt?: never;
}

interface CtaSectionImageBelowProps extends CtaSectionBaseProps {
  /** Image below the text — full-width (100vw), 640px height. */
  imageSrc: string;
  imageAlt: string;
  backgroundSrc?: never;
  backgroundAlt?: never;
}

type CtaSectionProps = CtaSectionBackgroundProps | CtaSectionImageBelowProps;

export function CtaSection(props: CtaSectionProps) {
  const {
    eyebrow,
    title,
    titleLevel,
    subtitle,
    primaryButtonLabel,
    primaryButtonLink,
    primaryButtonColor,
    secondaryButtonLabel,
    secondaryButtonLink,
    colorMode = props.backgroundSrc ? "dark" : "light",
  } = props;

  const textContent = (
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
      align="center"
      className="max-w-2xl"
    />
  );

  // Variant: background image — 100vh, text centered over image
  if (props.backgroundSrc) {
    return (
      <section className="relative w-full h-screen overflow-hidden">
        <Image
          src={props.backgroundSrc}
          alt={props.backgroundAlt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-start justify-center pt-20 px-5 min-[395px]:px-6">
          {textContent}
        </div>
      </section>
    );
  }

  // Variant: image below — text section + full-width image
  return (
    <section className="bg-background overflow-hidden">
      <div className="flex items-center justify-center px-5 min-[395px]:px-6 py-16 md:py-30">
        {textContent}
      </div>
      {props.imageSrc && (
        <div className="relative w-full h-[400px] md:h-[640px]">
          <Image
            src={props.imageSrc}
            alt={props.imageAlt}
            fill
            className="object-cover"
          />
        </div>
      )}
    </section>
  );
}
