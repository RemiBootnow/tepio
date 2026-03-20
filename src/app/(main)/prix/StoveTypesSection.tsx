import { CenterCarouselSection } from "@/components/sections/center-carousel-section";
import { FeatureCardImage } from "@/components/ui/feature-card-image";

// @IMAGE stove-type-granules.jpg (3:4, 1K)
//   CONTEXT: FeatureCardImage — pellet stove type card. Solid dark green background filling entire image, subject in lower 2/3.
//   PROMPT: A sleek modern cylindrical pellet stove with a visible warm amber flame behind its glass door, placed in the lower two-thirds of the frame against a solid deep dark green background (similar to #01322D) that fills the entire image uniformly. The stove has clean lines and a matte-black finish. No floor, no room context — just the stove floating on the solid color. No visible text, no documents, no writing of any kind. 3:4 portrait format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

// @IMAGE stove-type-bois.jpg (3:4, 1K)
//   CONTEXT: FeatureCardImage — wood stove type card. Solid muted beige background filling entire image, subject in lower 2/3.
//   PROMPT: A traditional cast-iron wood-burning stove with a visible warm orange flame behind its glass door, placed in the lower two-thirds of the frame against a solid warm beige background that fills the entire image uniformly. The stove has a classic rounded design with a black matte finish. No floor, no room context — just the stove on the solid color. No visible text, no documents, no writing of any kind. 3:4 portrait format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

// @IMAGE stove-type-mixte.jpg (3:4, 1K)
//   CONTEXT: FeatureCardImage — hybrid stove type card. Solid dark background filling entire image, subject in lower 2/3.
//   PROMPT: A modern hybrid stove (wood and pellet combined) with a warm amber flame visible behind a large glass door, placed in the lower two-thirds of the frame against a solid charcoal dark background that fills the entire image uniformly. The stove has a contemporary rectangular design with a matte-black steel body. No floor, no room context — just the stove on the solid color. No visible text, no documents, no writing of any kind. 3:4 portrait format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

// @IMAGE stove-type-insert.jpg (3:4, 1K)
//   CONTEXT: FeatureCardImage — fireplace insert type card. Solid dark green background filling entire image, subject in lower 2/3.
//   PROMPT: A modern fireplace insert with a wide panoramic glass front showing a warm orange flame, placed in the lower two-thirds of the frame against a solid deep dark green background (similar to #01322D) that fills the entire image uniformly. The insert has a sleek rectangular steel frame with a black finish. No wall, no mantelpiece — just the insert on the solid color. No visible text, no documents, no writing of any kind. 3:4 portrait format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function StoveTypesSection() {
  return (
    <CenterCarouselSection
      eyebrow="Types de poêles"
      title="Quel type de poêle pour votre logement ?"
      subtitle="Chaque type de poêle a ses caractéristiques et son budget. Explorez les options pour trouver celle qui correspond à vos besoins."
    >
      <FeatureCardImage
        imageSrc="/prix/stove-type-granules.jpg"
        imageAlt="Poêle à granulés moderne"
        title="Poêle à granulés"
        colorMode="dark"
      />
      <FeatureCardImage
        imageSrc="/prix/stove-type-bois.jpg"
        imageAlt="Poêle à bois traditionnel"
        title="Poêle à bois"
        colorMode="light"
      />
      <FeatureCardImage
        imageSrc="/prix/stove-type-mixte.jpg"
        imageAlt="Poêle mixte bois et granulés"
        title="Poêle mixte"
        colorMode="dark"
      />
      <FeatureCardImage
        imageSrc="/prix/stove-type-insert.jpg"
        imageAlt="Insert de cheminée moderne"
        title="Insert cheminée"
        colorMode="dark"
      />
    </CenterCarouselSection>
  );
}
