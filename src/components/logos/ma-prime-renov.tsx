import { cn } from "@/lib/utils";
import Image from "next/image";

interface MaPrimeRenovLogoProps {
  className?: string;
}

export function MaPrimeRenovLogo({ className }: MaPrimeRenovLogoProps) {
  return (
    <Image
      src="/logo/ma-prime-renov.png"
      alt="Ma Prime Rénov'"
      width={34}
      height={30}
      className={cn("object-contain", className)}
    />
  );
}
