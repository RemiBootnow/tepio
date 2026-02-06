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
        <div className="flex flex-wrap justify-center gap-2">
          {/* République Française */}
          <div className="flex h-12 items-center justify-center rounded-xl border border-border p-2">
            <RepubliqueFrancaiseLogo />
          </div>

          {/* CEE */}
          <div className="flex h-12 items-center justify-center rounded-xl border border-border p-2">
            <CEELogo />
          </div>

          {/* Ma Prime Rénov' */}
          <div className="flex h-12 items-center justify-center rounded-xl border border-border p-2">
            <MaPrimeRenovLogo />
          </div>

          {/* Trustpilot */}
          <div className="flex h-12 items-center gap-2 rounded-xl border border-border px-2">
            <TrustpilotLogo />
            <span className="text-xs text-foreground">250+ Avis - 4,7</span>
          </div>
        </div>
      </div>
    </div>
  );
}
