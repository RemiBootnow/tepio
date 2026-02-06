import { cn } from "@/lib/utils";
import Image from "next/image";

interface CEELogoProps {
  className?: string;
}

export function CEELogo({ className }: CEELogoProps) {
  return (
    <Image
      src="/logo/cee.png"
      alt="CEE - Certificats d'Économies d'Énergie"
      width={33}
      height={30}
      className={cn("object-contain", className)}
    />
  );
}
