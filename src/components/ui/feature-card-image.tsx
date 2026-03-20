import Image from "next/image";
import { Heading } from "@/components/ui/typography";

interface FeatureCardImageProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
}

export function FeatureCardImage({
  imageSrc,
  imageAlt,
  title,
}: FeatureCardImageProps) {
  return (
    <div className="relative rounded-3xl overflow-hidden w-full h-full">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
      />
      <div className="relative z-10 h-full flex items-start p-8">
        <Heading as="h3" className="text-white">
          {title}
        </Heading>
      </div>
    </div>
  );
}
