import { cn } from "@/lib/utils";
import Image from "next/image";

interface RepubliqueFrancaiseLogoProps {
  className?: string;
}

export function RepubliqueFrancaiseLogo({ className }: RepubliqueFrancaiseLogoProps) {
  return (
    <Image
      src="/logo/republique-francaise.png"
      alt="République Française"
      width={34}
      height={30}
      className={cn("object-contain", className)}
    />
  );
}
