"use client";

import { Zap, Flame, Droplet, TreePine, HelpCircle } from "lucide-react";
import { Heading } from "@/components/ui/typography";
import { SelectOptionGroup } from "@/components/ui/select-option-group";
import { HeatingType } from "@/types/lead-form";

interface HeatingSelectProps {
  value: HeatingType | null;
  onChange: (value: HeatingType) => void;
  onNext: () => void;
  error?: string;
}

const heatingOptions = [
  { value: "electrique" as const, label: "Électrique", icon: Zap },
  { value: "gaz" as const, label: "Gaz", icon: Flame },
  { value: "fioul" as const, label: "Fioul", icon: Droplet },
  { value: "bois" as const, label: "Bois", icon: TreePine },
  { value: "autre" as const, label: "Autre", icon: HelpCircle },
];

export function HeatingSelect({
  onChange,
  onNext,
  error,
}: HeatingSelectProps) {
  const handleSelect = (value: HeatingType) => {
    onChange(value);
    setTimeout(() => onNext(), 150);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Heading as="h2" className="mb-2">
          Votre chauffage actuel ?
        </Heading>
        <p className="text-muted-foreground">
          Sélectionnez votre type de chauffage
        </p>
      </div>

      <SelectOptionGroup
        options={heatingOptions}
        value={null}
        onSelect={handleSelect}
        error={error}
      />
    </div>
  );
}
