import Image from "next/image";
import { Heading } from "@/components/ui/typography";

interface FeatureCardImageProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  colorMode?: "light" | "dark";
}

export function FeatureCardImage({
  imageSrc,
  imageAlt,
  title,
  colorMode = "dark",
}: FeatureCardImageProps) {
  return (
    <div className="relative rounded-3xl overflow-hidden w-full h-full">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="relative z-10 h-full flex items-start p-8">
        <Heading
          as="h3"
          className={colorMode === "dark" ? "text-white" : "text-foreground"}
        >
          {title}
        </Heading>
      </div>
    </div>
  );
}
