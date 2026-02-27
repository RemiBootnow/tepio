import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography";
import { Carousel } from "@/components/ui/carousel";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="bg-background py-16 md:py-30 overflow-x-hidden">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-10">

        {/* Left: bleeds to screen edge, text left edge aligns with 1024px container */}
        <div className="px-5 min-[395px]:px-6 md:pl-[max(24px,calc((100vw-1024px)/2))] flex-1 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Heading as="h2">+1500 projets accompagnés</Heading>
            <p className="text-base text-muted-foreground leading-6">
              Profitez d&apos;équipements haut de gamme, livrés et installés
              chez vous, avec garantie incluse.
            </p>
          </div>
          <Button asChild className="w-fit rounded-full" size="lg">
            <Link href="/estimation">Estimer mon projet</Link>
          </Button>
        </div>

        {/* Right: 492px = (1024 - 40) / 2, right edge aligned with 1024px container */}
        <div
          className="flex-1 min-w-0 lg:flex-none lg:w-123"
          style={{ marginRight: "max(0px, calc((100vw - 1024px) / 2))" }}
        >
          <Carousel variant="left-aligned">
            {testimonials.map((t) => (
              <TestimonialCard
                key={t.id}
                quote={t.quote}
                author={t.author}
                product={t.product}
                image={t.image}
              />
            ))}
          </Carousel>
        </div>

      </div>
    </section>
  );
}
