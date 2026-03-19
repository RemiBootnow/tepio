import Image from "next/image";
import { cn } from "@/lib/utils";

export interface LogoItem {
  src: string;
  alt: string;
  /** Width in px used on desktop. On mobile the logo fills its grid cell. */
  width: number;
}

interface LogoSectionProps {
  logos: LogoItem[];
  className?: string;
}

export function LogoSection({ logos, className }: LogoSectionProps) {
  return (
    <section
      className={cn(
        "border-b border-[#e2e6e6] py-10 px-4 min-[375px]:px-5 min-[395px]:px-6",
        className
      )}
    >
      {/* Mobile: 2×2 grid */}
      <div className="md:hidden grid grid-cols-2 gap-x-8 gap-y-8 max-w-sm mx-auto">
        {logos.map((logo) => (
          <div key={logo.alt} className="flex items-center justify-center">
            <div className="relative h-12 w-full">
              <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: single row */}
      <div className="hidden md:flex items-center justify-between mx-auto w-full max-w-5xl">
        {logos.map((logo) => (
          <div key={logo.alt} className="relative h-[60px]" style={{ width: logo.width }}>
            <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
