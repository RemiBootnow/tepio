"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "@untitledui-pro/icons/line";
import { Button } from "@/components/ui/button";

/**
 * Shows a "Retour" button only when the user navigated here from another page
 * on the site (i.e. there is browser history to go back to).
 */
export function BackToSiteButton() {
  const router = useRouter();

  // If opened directly (no referrer or external referrer), history.length is 1-2.
  // A same-origin navigation will have pushed at least one entry.
  const hasHistory = typeof window !== "undefined" && window.history.length > 1;

  if (!hasHistory) return null;

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={() => router.back()}
      className="absolute left-2"
    >
      <ArrowLeft className="size-5" />
      Retour
    </Button>
  );
}
