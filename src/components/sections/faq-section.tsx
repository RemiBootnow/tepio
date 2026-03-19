"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "@untitledui-pro/icons/line";
import { Heading } from "@/components/ui/typography";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  label?: string;
  title: string;
  items: FaqItem[];
}

export function FaqSection({ label = "FAQ", title, items }: FaqSectionProps) {
  return (
    <section className="bg-background py-16 md:py-30">
      <div className="w-full max-w-5xl mx-auto px-5 min-[395px]:px-6">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">

          {/* Left: eyebrow + heading */}
          <div className="flex flex-col gap-8 md:flex-1">
            <p className="text-[#678481] opacity-70 text-2xl font-medium leading-6">{label}</p>
            <Heading as="h2">{title}</Heading>
          </div>

          {/* Right: accordion */}
          <div className="md:flex-1 md:pt-16">
            <AccordionPrimitive.Root type="single" collapsible defaultValue="item-0">
              {items.map((item, i) => (
                <AccordionPrimitive.Item
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-[#e6ebeb]"
                >
                  <AccordionPrimitive.Header>
                    <AccordionPrimitive.Trigger className="flex gap-5 items-start py-5 w-full text-left cursor-pointer group">
                      <span className="shrink-0 mt-0.5">
                        <Plus className="size-6 text-foreground group-data-[state=open]:hidden" />
                        <Minus className="size-6 text-foreground hidden group-data-[state=open]:block" />
                      </span>
                      <span className="text-base font-medium text-foreground leading-6">
                        {item.question}
                      </span>
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <p className="pl-11 pb-5 text-[#678481] text-base leading-6">
                      {item.answer}
                    </p>
                  </AccordionPrimitive.Content>
                </AccordionPrimitive.Item>
              ))}
            </AccordionPrimitive.Root>
          </div>

        </div>
      </div>
    </section>
  );
}
