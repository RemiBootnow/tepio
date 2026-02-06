import { cn } from "@/lib/utils";
import Image from "next/image";

interface TrustpilotLogoProps {
  className?: string;
}

export function TrustpilotLogo({ className }: TrustpilotLogoProps) {
  return (
    <Image
      src="/logo/trustpilot.png"
      alt="Trustpilot"
      width={74}
      height={24}
      className={cn("object-contain", className)}
    />
  );
}
