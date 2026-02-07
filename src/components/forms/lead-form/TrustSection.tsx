"use client";

import { RepubliqueFrancaiseLogo } from "@/components/logos/republique-francaise";
import { CEELogo } from "@/components/logos/cee";
import { MaPrimeRenovLogo } from "@/components/logos/ma-prime-renov";
import { TrustpilotLogo } from "@/components/logos/trustpilot";

export function TrustSection() {
  return (
    <div className="flex flex-col items-center gap-8 pt-8">
      {/* Separator line */}
      <div className="h-px w-90 max-w-full bg-border" />

      {/* Trust content */}
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-muted-foreground">
          768+ clients et partenaires de confiance
        </p>

        {/* Logo boxes */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
          {/* République Française */}
          <div className="flex h-9 items-center justify-center rounded-lg border border-border px-1.5 md:h-12 md:rounded-xl md:p-2">
            <RepubliqueFrancaiseLogo className="h-6 w-auto md:h-8" />
          </div>

          {/* CEE */}
          <div className="flex h-9 items-center justify-center rounded-lg border border-border px-1.5 md:h-12 md:rounded-xl md:p-2">
            <CEELogo className="h-6 w-auto md:h-8" />
          </div>

          {/* Ma Prime Rénov' */}
          <div className="flex h-9 items-center justify-center rounded-lg border border-border px-1.5 md:h-12 md:rounded-xl md:p-2">
            <MaPrimeRenovLogo className="h-5 w-auto md:h-7" />
          </div>

          {/* Trustpilot */}
          <div className="flex h-9 items-center gap-1.5 rounded-lg border border-border px-1.5 md:h-12 md:gap-2 md:rounded-xl md:px-2">
            <TrustpilotLogo className="h-4 w-auto md:h-6" />
            <span className="text-[10px] text-foreground md:text-xs">250+ Avis - 4,7</span>
          </div>
        </div>
      </div>
    </div>
  );
}
