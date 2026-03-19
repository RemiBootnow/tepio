import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { SectionsShowcase } from "./SectionsShowcase";

export const metadata: Metadata = generatePageMetadata({
  title: "Section Components — Design System",
  description: "Showcase interactif des composants de section réutilisables.",
  noIndex: true,
});

export default function SectionsPage() {
  return <SectionsShowcase />;
}
