"use client";

import { Euro } from "lucide-react";
import { Heading } from "@/components/ui/typography";
import { SelectOptionGroup } from "@/components/ui/select-option-group";
import { HeatingBudgetType } from "@/types/lead-form";

interface HeatingBudgetSelectProps {
  value: HeatingBudgetType | null;
  onChange: (value: HeatingBudgetType) => void;
  onNext: () => void;
  error?: string;
}

const budgetOptions = [
  { value: "moins-50" as const, label: "Moins de 50€", icon: Euro },
  { value: "50-80" as const, label: "50€ à 80€", icon: Euro },
  { value: "80-120" as const, label: "80€ à 120€", icon: Euro },
  { value: "120-plus" as const, label: "120€ et plus", icon: Euro },
];

export function HeatingBudgetSelect({
  onChange,
  onNext,
  error,
}: HeatingBudgetSelectProps) {
  const handleSelect = (value: HeatingBudgetType) => {
    onChange(value);
    setTimeout(() => onNext(), 150);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Heading as="h2" className="mb-2">
          Vos dépenses de chauffage ?
        </Heading>
        <p className="text-muted-foreground">
          Estimez votre budget mensuel en chauffage
        </p>
      </div>

      <SelectOptionGroup
        options={budgetOptions}
        value={null}
        onSelect={handleSelect}
        error={error}
      />
    </div>
  );
}
