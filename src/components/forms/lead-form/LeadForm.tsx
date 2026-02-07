"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  HousingSelect,
  HouseAgeSelect,
  OwnershipSelect,
  HeatingSelect,
  HeatingBudgetSelect,
  ContactInfo,
} from "./steps";
import {
  ServiceType,
  HousingType,
  HouseAgeType,
  OwnershipType,
  HeatingType,
  HeatingBudgetType,
  LeadFormData,
  initialContactInfo,
} from "@/types/lead-form";
import { contactSchema } from "@/lib/validations/lead-form";
import { StepIndicator } from "./StepIndicator";
import { TrustSection } from "./TrustSection";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ArrowLeft } from "lucide-react";

interface LeadFormProps {
  service: ServiceType;
}

const slideVariants = {
  initial: (direction: number) => ({
    x: 40 * direction,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.1, ease: "easeOut" as const, delay: 0.02 },
  },
  exit: (direction: number) => ({
    x: -40 * direction,
    opacity: 0,
    transition: { duration: 0.1, ease: "easeOut" as const },
  }),
};

export function LeadForm({ service }: LeadFormProps) {
  const router = useRouter();

  // Form state - service is now passed as prop
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [formData, setFormData] = useState<LeadFormData>({
    service,
    housingType: null,
    houseAge: null,
    ownershipType: null,
    heatingType: null,
    heatingBudget: null,
    contact: initialContactInfo,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Steps: 1=housing, 2=houseAge, 3=ownership, 4=heating, 5=budget, 6=contact
  const totalSteps = 6;

  // Validation for contact step
  const validateContact = useCallback(() => {
    const result = contactSchema.safeParse(formData.contact);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  }, [formData.contact]);

  // Navigation handlers
  // For steps 1-3, selection auto-advances so validation is implicit
  const handleNext = useCallback(() => {
    setErrors({});
    setDirection(1);
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  }, [currentStep]);

  const handleBack = useCallback(() => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  }, [currentStep]);

  const handleSubmit = useCallback(async () => {
    if (!validateContact()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: formData.service,
          housingType: formData.housingType,
          houseAge: formData.houseAge,
          ownershipType: formData.ownershipType,
          heatingType: formData.heatingType,
          heatingBudget: formData.heatingBudget,
          contact: formData.contact,
          sourceUrl: typeof window !== "undefined" ? window.location.href : undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      // Redirect to confirmation page
      router.push(`/estimation/${service}/confirmation`);
    } catch {
      setErrors({ submit: "Une erreur est survenue. Veuillez réessayer." });
    } finally {
      setIsSubmitting(false);
    }
  }, [validateContact, router, formData, service]);

  // Map step number to logical step
  // 1=housing, 2=houseAge, 3=ownership, 4=heating, 5=budget, 6=contact
  const steps = ["housing", "houseAge", "ownership", "heating", "budget", "contact"];
  const getLogicalStep = (step: number): string => {
    return steps[step - 1] || "housing";
  };

  // Render current step
  const renderStep = () => {
    const logicalStep = getLogicalStep(currentStep);

    switch (logicalStep) {
      case "housing":
        return (
          <HousingSelect
            value={formData.housingType}
            onChange={(housingType: HousingType) =>
              setFormData({ ...formData, housingType })
            }
            onNext={handleNext}
            error={errors.housingType}
          />
        );
      case "houseAge":
        return (
          <HouseAgeSelect
            value={formData.houseAge}
            onChange={(houseAge: HouseAgeType) =>
              setFormData({ ...formData, houseAge })
            }
            onNext={handleNext}
            error={errors.houseAge}
          />
        );
      case "ownership":
        return (
          <OwnershipSelect
            value={formData.ownershipType}
            onChange={(ownershipType: OwnershipType) =>
              setFormData({ ...formData, ownershipType })
            }
            onNext={handleNext}
            error={errors.ownershipType}
          />
        );
      case "heating":
        return (
          <HeatingSelect
            value={formData.heatingType}
            onChange={(heatingType: HeatingType) =>
              setFormData({ ...formData, heatingType })
            }
            onNext={handleNext}
            error={errors.heatingType}
          />
        );
      case "budget":
        return (
          <HeatingBudgetSelect
            value={formData.heatingBudget}
            onChange={(heatingBudget: HeatingBudgetType) =>
              setFormData({ ...formData, heatingBudget })
            }
            onNext={handleNext}
            error={errors.heatingBudget}
          />
        );
      case "contact":
        return (
          <ContactInfo
            value={formData.contact}
            onChange={(contact) => setFormData({ ...formData, contact })}
            onSubmit={handleSubmit}
            errors={errors}
            isSubmitting={isSubmitting}
          />
        );
      default:
        return null;
    }
  };

  // Can we go back from current step?
  const canGoBack = currentStep > 1;

  return (
    <div className="flex flex-col px-3 pb-3 pt-4 md:p-4 min-h-dvh">
      {/* Header with logo and back button */}
      <header className="relative flex h-9 items-center justify-center mb-4 px-2 shrink-0">
        {canGoBack && (
          <Button
            type="button"
            variant="ghost"
            onClick={handleBack}
            className="absolute left-2"
          >
            <ArrowLeft className="size-5" />
            Retour
          </Button>
        )}
        <Logo height={28} />
      </header>

      {/* White card container */}
      <div className="flex-1 rounded-3xl bg-background px-5 py-10 md:px-10 md:pb-12 md:pt-15 flex flex-col">
        <div className="w-full max-w-110 mx-auto overflow-x-clip flex-1">
          {errors.submit && (
            <div className="mb-6 p-4 bg-destructive/10 text-destructive rounded-lg text-sm text-center">
              {errors.submit}
            </div>
          )}

          <StepIndicator current={currentStep} total={totalSteps} className="mb-6" />

          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>

        <TrustSection />
      </div>
    </div>
  );
}
