"use client";

import { KeyRound, Users } from "lucide-react";
import { Heading } from "@/components/ui/typography";
import { SelectOptionGroup } from "@/components/ui/select-option-group";
import { OwnershipType } from "@/types/lead-form";

interface OwnershipSelectProps {
  value: OwnershipType | null;
  onChange: (value: OwnershipType) => void;
  onNext: () => void;
  error?: string;
}

const ownershipOptions = [
  { value: "proprietaire" as const, label: "Propriétaire", icon: KeyRound },
  { value: "locataire" as const, label: "Locataire", icon: Users },
];

export function OwnershipSelect({
  onChange,
  onNext,
  error,
}: OwnershipSelectProps) {
  const handleSelect = (value: OwnershipType) => {
    onChange(value);
    setTimeout(() => onNext(), 150);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Heading as="h2" className="mb-2">
          Propriétaire ou locataire ?
        </Heading>
        <p className="text-muted-foreground">
          Sélectionnez votre situation
        </p>
      </div>

      <SelectOptionGroup
        options={ownershipOptions}
        value={null}
        onSelect={handleSelect}
        error={error}
      />
    </div>
  );
}
