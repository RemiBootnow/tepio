import { TestimonialsSection as TestimonialsSectionBase } from "@/components/sections/testimonials-section";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <TestimonialsSectionBase
      title="+1500 projets accompagnés"
      subtitle="Profitez d'équipements haut de gamme, livrés et installés chez vous, avec garantie incluse."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      testimonials={testimonials}
    />
  );
}
