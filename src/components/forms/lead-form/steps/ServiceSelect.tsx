"use client";

import { Flame, Thermometer, Wind } from "lucide-react";
import { Heading } from "@/components/ui/typography";
import { SelectOptionGroup } from "@/components/ui/select-option-group";
import { ServiceType, serviceLabels, serviceDescriptions } from "@/types/lead-form";

interface ServiceSelectProps {
  value: ServiceType | null;
  onChange: (value: ServiceType) => void;
  onNext: () => void;
  error?: string;
}

const serviceOptions = [
  {
    value: "poele-insert" as const,
    label: serviceLabels["poele-insert"],
    description: serviceDescriptions["poele-insert"],
    icon: Flame,
  },
  {
    value: "pompe-a-chaleur" as const,
    label: serviceLabels["pompe-a-chaleur"],
    description: serviceDescriptions["pompe-a-chaleur"],
    icon: Thermometer,
  },
  {
    value: "climatisation" as const,
    label: serviceLabels["climatisation"],
    description: serviceDescriptions["climatisation"],
    icon: Wind,
  },
];

export function ServiceSelect({
  onChange,
  onNext,
  error,
}: ServiceSelectProps) {
  const handleSelect = (value: ServiceType) => {
    onChange(value);
    // Auto-advance to next step
    setTimeout(() => onNext(), 150);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Heading as="h2" className="mb-2">
          Que recherchez-vous ?
        </Heading>
        <p className="text-muted-foreground">
          Sélectionnez le type d&apos;installation
        </p>
      </div>

      <SelectOptionGroup
        options={serviceOptions}
        value={null}
        onSelect={handleSelect}
        error={error}
      />
    </div>
  );
}
