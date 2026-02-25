"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Heading } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Estimer votre projet en ligne",
    description:
      "Répondez à un quiz rapide en ligne pour estimer votre projet en 1 minute.",
    image: "/home/process/block-1.jpg",
    imageMobile: "/home/process/block-1-mobile.jpg",
  },
  {
    title: "Recevez un devis tout inclus",
    description:
      "Un expert vous contacte sous 24h avec un devis personnalisé et vos aides déduites.",
    image: "/home/process/block-2.jpg",
    imageMobile: "/home/process/block-2-mobile.jpg",
  },
  {
    title: "Profitez de votre nouveau confort",
    description:
      "Votre installation est réalisée en 1 journée par un artisan RGE certifié.",
    image: "/home/process/block-3.jpg",
    imageMobile: "/home/process/block-3-mobile.jpg",
  },
];

function StepCard({
  step,
  isActive,
  onClick,
}: {
  step: (typeof steps)[0];
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative rounded-3xl transition-all duration-300 px-10",
        isActive
          ? "bg-white py-8"
          : "bg-white/50 py-5 cursor-pointer hover:bg-white/70"
      )}
    >
      {/* Progress bar — remounts on each activation, animates 0→100% in 3s */}
      {isActive && (
        <div className="absolute left-5 top-8 bottom-8 w-1 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="rounded-full w-full"
            initial={{ height: "0%" }}
            animate={{ height: "100%" }}
            transition={{ duration: 3, ease: "linear" }}
            style={{ backgroundColor: "var(--dark-background)" }}
          />
        </div>
      )}

      <div className="flex flex-col">
        <p className="font-heading font-medium text-xl leading-6 tracking-tight text-foreground">
          {step.title}
        </p>
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              key="desc"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="mt-2 text-base text-muted-foreground leading-6">
                {step.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => {
      setActiveStep((s) => (s + 1) % steps.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [activeStep, isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#faf6f1] overflow-hidden h-[120vh] md:h-screen flex items-start md:items-center"
    >
      {/* ── Image — bottom on mobile / right side on desktop ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[55%] md:inset-y-0 md:right-0 md:left-auto md:w-[55%] md:h-full">
        {/* Mobile: top fade */}
        <div
          className="absolute top-0 left-0 right-0 h-24 z-10 pointer-events-none md:hidden"
          style={{ background: "linear-gradient(to bottom, #faf6f1, transparent)" }}
        />
        {/* Desktop: left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-48 z-10 pointer-events-none hidden md:block"
          style={{ background: "linear-gradient(to right, #faf6f1, transparent)" }}
        />

        <AnimatePresence mode="sync">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Mobile image */}
            <Image
              src={steps[activeStep].imageMobile}
              alt={steps[activeStep].title}
              fill
              className="object-cover object-top md:hidden"
              priority={activeStep === 0}
            />
            {/* Desktop image */}
            <Image
              src={steps[activeStep].image}
              alt={steps[activeStep].title}
              fill
              className="object-cover hidden md:block"
              priority={activeStep === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Step cards ── */}
      <div className="relative z-10 w-full px-4 min-[375px]:px-5 min-[395px]:px-6 pt-16 md:mx-auto md:max-w-5xl md:px-6 md:flex md:items-center md:h-full md:py-16">
        <div className="flex flex-col gap-6 md:gap-8 md:w-105 lg:w-118">
          <Heading as="h2" className="text-center">
            Votre projet en 3 étapes
          </Heading>
          <div className="flex flex-col gap-3 md:gap-4">
            {steps.map((step, i) => (
              <StepCard
                key={i}
                step={step}
                isActive={activeStep === i}
                onClick={activeStep !== i ? () => setActiveStep(i) : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
