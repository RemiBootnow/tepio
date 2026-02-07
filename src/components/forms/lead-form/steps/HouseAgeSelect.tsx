"use client";

import { Calendar } from "lucide-react";
import { Heading } from "@/components/ui/typography";
import { SelectOptionGroup } from "@/components/ui/select-option-group";
import { HouseAgeType } from "@/types/lead-form";

interface HouseAgeSelectProps {
  value: HouseAgeType | null;
  onChange: (value: HouseAgeType) => void;
  onNext: () => void;
  error?: string;
}

const houseAgeOptions = [
  { value: "moins-2-ans" as const, label: "Moins de 2 ans", icon: Calendar },
  { value: "2-15-ans" as const, label: "Entre 2 et 15 ans", icon: Calendar },
  { value: "plus-15-ans" as const, label: "Plus de 15 ans", icon: Calendar },
];

export function HouseAgeSelect({
  onChange,
  onNext,
  error,
}: HouseAgeSelectProps) {
  const handleSelect = (value: HouseAgeType) => {
    onChange(value);
    setTimeout(() => onNext(), 150);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Heading as="h2" className="mb-2">
          Quel âge a votre maison ?
        </Heading>
        <p className="text-muted-foreground">
          Sélectionnez l'âge de votre maison
        </p>
      </div>

      <SelectOptionGroup
        options={houseAgeOptions}
        value={null}
        onSelect={handleSelect}
        error={error}
      />
    </div>
  );
}
