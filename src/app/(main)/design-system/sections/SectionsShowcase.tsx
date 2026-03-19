"use client";

import { useState } from "react";
import { Plus, RefreshCcw01, ChevronDown } from "@untitledui-pro/icons/line";
import { HeroSection } from "@/components/sections/hero-section";
import { SplitSection } from "@/components/sections/split-section";
import { LogoSection, type LogoItem } from "@/components/sections/logo-section";
import { LeftCarouselSection } from "@/components/sections/left-carousel-section";
import { CenterCarouselSection } from "@/components/sections/center-carousel-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { FaqSection, type FaqItem } from "@/components/sections/faq-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { testimonials as demoTestimonials } from "@/data/testimonials";
import { FeatureCard } from "@/components/ui/feature-card";
import { type IconName } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ─── Demo card ────────────────────────────────────────────────────────────────

const CARD_COLORS = [
  "bg-primary",
  "bg-[#d4eef0]",
  "bg-[#FAF6F1]",
  "bg-muted",
  "bg-rose-100",
  "bg-amber-100",
  "bg-violet-100",
  "bg-emerald-100",
  "bg-[#01322d]",
];

let colorIndex = 0;
function nextColor() {
  const color = CARD_COLORS[colorIndex % CARD_COLORS.length];
  colorIndex++;
  return color;
}

function DemoCard({ color, index }: { color: string; index: number }) {
  return (
    <div
      className={cn(
        "rounded-3xl w-full h-full min-h-48 flex items-center justify-center",
        color
      )}
    >
      <span className="text-sm font-medium opacity-40">Card {index + 1}</span>
    </div>
  );
}

// ─── Demo feature ─────────────────────────────────────────────────────────────

const FEATURE_ICONS: IconName[] = [
  "lightning",
  "shield-check",
  "check-circle",
  "map-pin",
  "user-circle",
  "clock",
  "building",
  "check-verified",
];

let featureIndex = 0;
function nextIcon(): IconName {
  const icon = FEATURE_ICONS[featureIndex % FEATURE_ICONS.length];
  featureIndex++;
  return icon;
}

// ─── Controls primitives ──────────────────────────────────────────────────────

function Field({
  label,
  type,
  children,
}: {
  label: string;
  type: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-foreground">{label}</span>
        <span className="text-[10px] text-muted-foreground font-mono bg-muted px-1.5 py-0.5 rounded">
          {type}
        </span>
      </div>
      {children}
    </div>
  );
}

const inputCls =
  "border border-input rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring w-full";

function TextInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      type="text"
      className={inputCls}
      value={value}
      placeholder={placeholder ?? "—"}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

function SegmentedToggle<T extends string>({
  value,
  options,
  onChange,
}: {
  value: T;
  options: T[];
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex rounded-lg border border-input overflow-hidden w-fit">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={cn(
            "px-3 py-2 text-sm font-medium transition-colors",
            value === opt
              ? "bg-foreground text-background"
              : "bg-background text-muted-foreground hover:bg-muted"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

// ─── Config types ─────────────────────────────────────────────────────────────

type BaseConfig = {
  eyebrow: string;
  title: string;
  titleLevel: 1 | 2;
  subtitle: string;
  primaryButtonLabel: string;
  primaryButtonLink: string;
  primaryButtonColor: "neutral" | "primary";
  secondaryButtonLabel: string;
  secondaryButtonLink: string;
  colorMode: "light" | "dark";
};

const BASE_DEFAULT: BaseConfig = {
  eyebrow: "",
  title: "Titre de section",
  titleLevel: 2,
  subtitle: "Sous-titre de la section. Il décrit brièvement le contenu.",
  primaryButtonLabel: "CTA primaire",
  primaryButtonLink: "#",
  primaryButtonColor: "neutral",
  secondaryButtonLabel: "",
  secondaryButtonLink: "#",
  colorMode: "light",
};

// ─── Shared controls grid ─────────────────────────────────────────────────────

function BaseControls<T extends BaseConfig>({
  config,
  onChange,
}: {
  config: T;
  onChange: (patch: Partial<T>) => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <Field label="eyebrow" type="string?">
        <TextInput
          value={config.eyebrow}
          onChange={(v) => onChange({ eyebrow: v } as Partial<T>)}
          placeholder="ex: Installateurs"
        />
      </Field>

      <Field label="title" type="string">
        <TextInput
          value={config.title}
          onChange={(v) => onChange({ title: v } as Partial<T>)}
        />
      </Field>

      <Field label="titleLevel" type="1 | 2">
        <SegmentedToggle
          value={String(config.titleLevel) as "1" | "2"}
          options={["1", "2"]}
          onChange={(v) => onChange({ titleLevel: Number(v) as 1 | 2 } as Partial<T>)}
        />
      </Field>

      <Field label="subtitle" type="string?">
        <TextInput
          value={config.subtitle}
          onChange={(v) => onChange({ subtitle: v } as Partial<T>)}
        />
      </Field>

      <Field label="colorMode" type='"light" | "dark"'>
        <SegmentedToggle
          value={config.colorMode}
          options={["light", "dark"]}
          onChange={(v) => onChange({ colorMode: v } as Partial<T>)}
        />
      </Field>

      <Field label="primaryButtonLabel" type="string?">
        <TextInput
          value={config.primaryButtonLabel}
          onChange={(v) => onChange({ primaryButtonLabel: v } as Partial<T>)}
        />
      </Field>

      <Field label="primaryButtonLink" type="string?">
        <TextInput
          value={config.primaryButtonLink}
          onChange={(v) => onChange({ primaryButtonLink: v } as Partial<T>)}
        />
      </Field>

      <Field label="primaryButtonColor" type='"neutral" | "primary"'>
        <SegmentedToggle
          value={config.primaryButtonColor}
          options={["neutral", "primary"]}
          onChange={(v) => onChange({ primaryButtonColor: v } as Partial<T>)}
        />
      </Field>

      <Field label="secondaryButtonLabel" type="string?">
        <TextInput
          value={config.secondaryButtonLabel}
          onChange={(v) => onChange({ secondaryButtonLabel: v } as Partial<T>)}
          placeholder="(optionnel)"
        />
      </Field>

      <Field label="secondaryButtonLink" type="string?">
        <TextInput
          value={config.secondaryButtonLink}
          onChange={(v) => onChange({ secondaryButtonLink: v } as Partial<T>)}
        />
      </Field>
    </div>
  );
}

// ─── Showcase wrapper ─────────────────────────────────────────────────────────

function ShowcaseShell({
  title,
  description,
  items,
  itemLabel,
  onAddItem,
  onRemoveItem,
  onReset,
  controls,
  preview,
}: {
  title: string;
  description?: string;
  items?: unknown[];
  itemLabel?: string;
  onAddItem?: () => void;
  onRemoveItem?: () => void;
  onReset: () => void;
  controls: React.ReactNode;
  preview: React.ReactNode;
}) {
  const noun = itemLabel ?? "card";
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-border">
      {/* Header + controls */}
      <div className="bg-muted">
      <div className="w-full max-w-5xl mx-auto px-5 min-[395px]:px-6 py-8 flex flex-col gap-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold font-heading">{title}</h2>
            <p className="text-sm text-muted-foreground mt-1">
              {items !== undefined
                ? `${items.length} ${noun}${items.length !== 1 ? "s" : ""}`
                : description ?? ""}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="size-9 flex items-center justify-center rounded-lg border border-input bg-background hover:bg-muted transition-colors"
              aria-label={open ? "Masquer les paramètres" : "Afficher les paramètres"}
            >
              <ChevronDown
                className={cn("size-4 text-foreground transition-transform duration-200", open && "rotate-180")}
              />
            </button>
            <Button variant="outline" size="default" onClick={onReset}>
              <RefreshCcw01 className="size-4" />
              Reset
            </Button>
            {onRemoveItem && (
              <Button variant="outline" size="default" onClick={onRemoveItem}>
                Retirer
              </Button>
            )}
            {onAddItem && (
              <Button variant="neutral" size="default" onClick={onAddItem}>
                <Plus className="size-4" />
                Ajouter
              </Button>
            )}
          </div>
        </div>
        {open && controls}
      </div>
      </div>

      {/* Full-width preview */}
      <div>{preview}</div>
    </div>
  );
}

// ─── HeroSection showcase ─────────────────────────────────────────────────────

function HeroSectionShowcase() {
  const [config, setConfig] = useState<BaseConfig>({
    ...BASE_DEFAULT,
    title: "Améliorez votre confort et faites des économies",
    titleLevel: 1,
    colorMode: "dark",
    primaryButtonLabel: "Estimer mon projet",
    primaryButtonColor: "primary",
  });

  function patch(p: Partial<BaseConfig>) {
    setConfig((c) => ({ ...c, ...p }));
  }

  return (
    <ShowcaseShell
      title="HeroSection"
      description="Hero plein écran avec vidéo ou image de fond"
      onReset={() =>
        setConfig({
          ...BASE_DEFAULT,
          title: "Améliorez votre confort et faites des économies",
          titleLevel: 1,
          colorMode: "dark",
          primaryButtonLabel: "Estimer mon projet",
          primaryButtonColor: "primary",
        })
      }
      controls={<BaseControls config={config} onChange={patch} />}
      preview={
        <div className="mt-17">
          <HeroSection
            posterSrc="/home/hero/hero-poster.jpg"
            posterMobileSrc="/home/hero/hero-poster-mobile.jpg"
            eyebrow={config.eyebrow || undefined}
            title={config.title}
            titleLevel={config.titleLevel}
            subtitle={config.subtitle || undefined}
            primaryButtonLabel={config.primaryButtonLabel || undefined}
            primaryButtonLink={config.primaryButtonLink || undefined}
            primaryButtonColor={config.primaryButtonColor}
            secondaryButtonLabel={config.secondaryButtonLabel || undefined}
            secondaryButtonLink={config.secondaryButtonLink || undefined}
            colorMode={config.colorMode}
          />
        </div>
      }
    />
  );
}

// ─── SplitSection showcase ───────────────────────────────────────────────────

type SplitConfig = BaseConfig & {
  imagePosition: "left" | "right";
  imageBg: string;
};

const IMAGE_BG_OPTIONS = ["bg-muted", "bg-primary", "bg-neutral", "bg-[#d4eef0]"] as const;

function SplitShowcase() {
  const [config, setConfig] = useState<SplitConfig>({
    ...BASE_DEFAULT,
    imagePosition: "left",
    imageBg: "bg-muted",
  });

  function patch(p: Partial<SplitConfig>) {
    setConfig((c) => ({ ...c, ...p }));
  }

  return (
    <ShowcaseShell
      title="SplitSection"
      description="Image + texte côte à côte"
      onReset={() =>
        setConfig({ ...BASE_DEFAULT, imagePosition: "left", imageBg: "bg-muted" })
      }
      controls={
        <div className="flex flex-col gap-5">
          <BaseControls config={config} onChange={patch} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="imagePosition" type='"left" | "right"'>
              <SegmentedToggle
                value={config.imagePosition}
                options={["left", "right"]}
                onChange={(v) => patch({ imagePosition: v })}
              />
            </Field>
            <Field label="imageBg" type="string">
              <SegmentedToggle
                value={config.imageBg}
                options={[...IMAGE_BG_OPTIONS]}
                onChange={(v) => patch({ imageBg: v })}
              />
            </Field>
          </div>
        </div>
      }
      preview={
        <SplitSection
          imageSrc="/home/family.jpg"
          imageAlt="Image de démonstration"
          imagePosition={config.imagePosition}
          imageBg={config.imageBg}
          eyebrow={config.eyebrow || undefined}
          title={config.title}
          titleLevel={config.titleLevel}
          subtitle={config.subtitle || undefined}
          primaryButtonLabel={config.primaryButtonLabel || undefined}
          primaryButtonLink={config.primaryButtonLink || undefined}
          primaryButtonColor={config.primaryButtonColor}
          secondaryButtonLabel={config.secondaryButtonLabel || undefined}
          secondaryButtonLink={config.secondaryButtonLink || undefined}
          colorMode={config.colorMode}
        />
      }
    />
  );
}

// ─── LogoSection showcase ─────────────────────────────────────────────────────

const ALL_DEMO_LOGOS: LogoItem[] = [
  { src: "/logo/logo-eco-pret-full-size.png", alt: "Éco-PTZ", width: 169 },
  { src: "/logo/logo-republique-francaise-full-sie.png", alt: "République Française", width: 108 },
  { src: "/logo/logo-cee-full-size.png", alt: "CEE", width: 138 },
  { src: "/logo/logo-ma-prime-renov-full-size.png", alt: "MaPrimeRénov'", width: 206 },
];

function LogoShowcase() {
  const [logos, setLogos] = useState<LogoItem[]>(ALL_DEMO_LOGOS);

  return (
    <ShowcaseShell
      title="LogoSection"
      items={logos}
      itemLabel="logo"
      onAddItem={() =>
        setLogos((prev) => [...prev, ALL_DEMO_LOGOS[prev.length % ALL_DEMO_LOGOS.length]])
      }
      onRemoveItem={
        logos.length > 1 ? () => setLogos((prev) => prev.slice(0, -1)) : undefined
      }
      onReset={() => setLogos(ALL_DEMO_LOGOS)}
      controls={<p className="text-sm text-muted-foreground">Bande horizontale de logos — grille 2×2 sur mobile, ligne unique sur desktop.</p>}
      preview={<LogoSection logos={logos} />}
    />
  );
}

// ─── LeftCarouselSection showcase ────────────────────────────────────────────

function LeftShowcase() {
  const [config, setConfig] = useState<BaseConfig>(BASE_DEFAULT);
  const [cards, setCards] = useState<string[]>([nextColor(), nextColor(), nextColor()]);

  function patch(p: Partial<BaseConfig>) {
    setConfig((c) => ({ ...c, ...p }));
  }

  function addCard() {
    setCards((prev) => [...prev, nextColor()]);
  }

  function reset() {
    setConfig(BASE_DEFAULT);
    setCards([nextColor(), nextColor(), nextColor()]);
  }

  return (
    <ShowcaseShell
      title="LeftCarouselSection"
      items={cards}
      itemLabel="card"
      onAddItem={addCard}
      onReset={reset}
      controls={<BaseControls config={config} onChange={patch} />}
      preview={
        <LeftCarouselSection
          eyebrow={config.eyebrow || undefined}
          title={config.title}
          titleLevel={config.titleLevel}
          subtitle={config.subtitle || undefined}
          primaryButtonLabel={config.primaryButtonLabel || undefined}
          primaryButtonLink={config.primaryButtonLink || undefined}
          primaryButtonColor={config.primaryButtonColor}
          secondaryButtonLabel={config.secondaryButtonLabel || undefined}
          secondaryButtonLink={config.secondaryButtonLink || undefined}
          colorMode={config.colorMode}
        >
          {cards.map((color, i) => (
            <DemoCard key={i} color={color} index={i} />
          ))}
        </LeftCarouselSection>
      }
    />
  );
}

// ─── CenterCarouselSection showcase ──────────────────────────────────────────

function CenterShowcase() {
  const [config, setConfig] = useState<BaseConfig>({ ...BASE_DEFAULT });
  const [cards, setCards] = useState<string[]>([nextColor(), nextColor(), nextColor()]);

  function patch(p: Partial<BaseConfig>) {
    setConfig((c) => ({ ...c, ...p }));
  }

  function addCard() {
    setCards((prev) => [...prev, nextColor()]);
  }

  function reset() {
    setConfig({ ...BASE_DEFAULT });
    setCards([nextColor(), nextColor(), nextColor()]);
  }

  return (
    <ShowcaseShell
      title="CenterCarouselSection"
      items={cards}
      itemLabel="card"
      onAddItem={addCard}
      onReset={reset}
      controls={<BaseControls config={config} onChange={patch} />}
      preview={
        <CenterCarouselSection
          eyebrow={config.eyebrow || undefined}
          title={config.title}
          titleLevel={config.titleLevel}
          subtitle={config.subtitle || undefined}
          primaryButtonLabel={config.primaryButtonLabel || undefined}
          primaryButtonLink={config.primaryButtonLink || undefined}
          primaryButtonColor={config.primaryButtonColor}
          secondaryButtonLabel={config.secondaryButtonLabel || undefined}
          secondaryButtonLink={config.secondaryButtonLink || undefined}
          colorMode={config.colorMode}
        >
          {cards.map((color, i) => (
            <DemoCard key={i} color={color} index={i} />
          ))}
        </CenterCarouselSection>
      }
    />
  );
}

// ─── FeaturesSection showcase ─────────────────────────────────────────────────

function FeaturesShowcase() {
  const [config, setConfig] = useState<BaseConfig>({ ...BASE_DEFAULT });
  const [icons, setIcons] = useState<IconName[]>([nextIcon(), nextIcon(), nextIcon()]);

  function patch(p: Partial<BaseConfig>) {
    setConfig((c) => ({ ...c, ...p }));
  }

  function addFeature() {
    setIcons((prev) => [...prev, nextIcon()]);
  }

  function reset() {
    setConfig({ ...BASE_DEFAULT });
    setIcons([nextIcon(), nextIcon(), nextIcon()]);
  }

  return (
    <ShowcaseShell
      title="FeaturesSection"
      items={icons}
      itemLabel="feature"
      onAddItem={addFeature}
      onReset={reset}
      controls={<BaseControls config={config} onChange={patch} />}
      preview={
        <FeaturesSection
          eyebrow={config.eyebrow || undefined}
          title={config.title}
          titleLevel={config.titleLevel}
          subtitle={config.subtitle || undefined}
          primaryButtonLabel={config.primaryButtonLabel || undefined}
          primaryButtonLink={config.primaryButtonLink || undefined}
          primaryButtonColor={config.primaryButtonColor}
          secondaryButtonLabel={config.secondaryButtonLabel || undefined}
          secondaryButtonLink={config.secondaryButtonLink || undefined}
          colorMode={config.colorMode}
        >
          {icons.map((icon, i) => (
            <FeatureCard
              key={i}
              icon={icon}
              title={`Feature ${i + 1}`}
              description="Description courte de cette fonctionnalité ou avantage clé."
              colorMode={config.colorMode}
            />
          ))}
        </FeaturesSection>
      }
    />
  );
}

// ─── FaqSection showcase ──────────────────────────────────────────────────────

const DEFAULT_FAQ_ITEMS: FaqItem[] = [
  {
    question: "Est-ce vraiment gratuit de vous consulter ?",
    answer: "Oui, à 100%. Vous ne nous payez rien. Nous sommes rémunérés par nos partenaires artisans. Zéro frais cachés, zéro engagement.",
  },
  {
    question: "Qui sont vos artisans partenaires ?",
    answer: "Des professionnels RGE certifiés, locaux, avec un historique prouvé et des produits de marques reconnues (Daikin, Atlantic, Bosch, etc.).",
  },
  {
    question: "Et si je change d'avis ?",
    answer: "Tant que vous n'avez pas signé de devis avec l'artisan, vous êtes libre. Et même après signature, vous bénéficiez d'un délai de rétractation légal de 14 jours.",
  },
];

function FaqShowcase() {
  const [label, setLabel] = useState("FAQ");
  const [title, setTitle] = useState("Questions posées régulièrement");
  const [items, setItems] = useState<FaqItem[]>(DEFAULT_FAQ_ITEMS);

  function addItem() {
    setItems((prev) => [
      ...prev,
      { question: `Question ${prev.length + 1}`, answer: "Réponse à cette question." },
    ]);
  }

  function reset() {
    setLabel("FAQ");
    setTitle("Questions posées régulièrement");
    setItems(DEFAULT_FAQ_ITEMS);
  }

  return (
    <ShowcaseShell
      title="FaqSection"
      description="Accordéon FAQ — étiquette + titre à gauche, questions à droite"
      items={items}
      itemLabel="question"
      onAddItem={addItem}
      onRemoveItem={items.length > 1 ? () => setItems((prev) => prev.slice(0, -1)) : undefined}
      onReset={reset}
      controls={
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="label" type="string">
            <TextInput value={label} onChange={setLabel} placeholder="ex: FAQ" />
          </Field>
          <Field label="title" type="string">
            <TextInput value={title} onChange={setTitle} />
          </Field>
        </div>
      }
      preview={<FaqSection label={label} title={title} items={items} />}
    />
  );
}

// ─── TestimonialsSection showcase ─────────────────────────────────────────────

function TestimonialsShowcase() {
  const [config, setConfig] = useState<BaseConfig>({
    ...BASE_DEFAULT,
    title: "+1500 projets accompagnés",
    subtitle: "Profitez d'équipements haut de gamme, livrés et installés chez vous, avec garantie incluse.",
    primaryButtonLabel: "Estimer mon projet",
    primaryButtonColor: "primary",
  });

  function patch(p: Partial<BaseConfig>) {
    setConfig((c) => ({ ...c, ...p }));
  }

  function reset() {
    setConfig({
      ...BASE_DEFAULT,
      title: "+1500 projets accompagnés",
      subtitle: "Profitez d'équipements haut de gamme, livrés et installés chez vous, avec garantie incluse.",
      primaryButtonLabel: "Estimer mon projet",
      primaryButtonColor: "primary",
    });
  }

  return (
    <ShowcaseShell
      title="TestimonialsSection"
      description="Carousel de témoignages avec texte à gauche"
      onReset={reset}
      controls={<BaseControls config={config} onChange={patch} />}
      preview={
        <TestimonialsSection
          testimonials={demoTestimonials}
          eyebrow={config.eyebrow || undefined}
          title={config.title}
          titleLevel={config.titleLevel}
          subtitle={config.subtitle || undefined}
          primaryButtonLabel={config.primaryButtonLabel || undefined}
          primaryButtonLink={config.primaryButtonLink || undefined}
          primaryButtonColor={config.primaryButtonColor}
          secondaryButtonLabel={config.secondaryButtonLabel || undefined}
          secondaryButtonLink={config.secondaryButtonLink || undefined}
          colorMode={config.colorMode}
        />
      }
    />
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function SectionsShowcase() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="w-full max-w-5xl mx-auto px-5 min-[395px]:px-6 py-10">
        <h1 className="text-4xl font-heading font-bold mb-2">Section Components</h1>
        <p className="text-muted-foreground">
          Showcase interactif — modifiez les props en temps réel et ajoutez des éléments.
        </p>
      </div>

      <HeroSectionShowcase />
      <SplitShowcase />
      <LogoShowcase />
      <LeftShowcase />
      <CenterShowcase />
      <FeaturesShowcase />
      <FaqShowcase />
      <TestimonialsShowcase />
    </div>
  );
}
