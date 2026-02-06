"use client";

import { Home, Building2 } from "lucide-react";
import { Heading } from "@/components/ui/typography";
import { SelectOptionGroup } from "@/components/ui/select-option-group";
import { HousingType } from "@/types/lead-form";

interface HousingSelectProps {
  value: HousingType | null;
  onChange: (value: HousingType) => void;
  onNext: () => void;
  error?: string;
}

const housingOptions = [
  { value: "maison" as const, label: "Une maison", icon: Home },
  { value: "appartement" as const, label: "Un appartement", icon: Building2 },
];

export function HousingSelect({
  onChange,
  onNext,
  error,
}: HousingSelectProps) {
  const handleSelect = (value: HousingType) => {
    onChange(value);
    setTimeout(() => onNext(), 150);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Heading as="h2" className="mb-2">
          Votre logement ?
        </Heading>
        <p className="text-muted-foreground">
          Sélectionnez votre type de logement
        </p>
      </div>

      <SelectOptionGroup
        options={housingOptions}
        value={null}
        onSelect={handleSelect}
        error={error}
      />
    </div>
  );
}
