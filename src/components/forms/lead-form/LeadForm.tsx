"use client";

import { useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ServiceSelect,
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

export function LeadForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get initial service from URL params
  const initialService = searchParams.get("service") as ServiceType | null;
  const isValidService =
    initialService &&
    ["poele-insert", "pompe-a-chaleur", "climatisation"].includes(
      initialService
    );

  // Form state
  const [currentStep, setCurrentStep] = useState(isValidService ? 2 : 1);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [formData, setFormData] = useState<LeadFormData>({
    service: isValidService ? initialService : null,
    housingType: null,
    houseAge: null,
    ownershipType: null,
    heatingType: null,
    heatingBudget: null,
    contact: initialContactInfo,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Total steps depends on whether house age step is shown (only for maison)
  const showHouseAgeStep = formData.housingType === "maison";
  const totalSteps = showHouseAgeStep ? 7 : 6;

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
      // Don't go back to step 1 if service was from URL
      if (isValidService && currentStep === 2) {
        return;
      }
      setDirection(-1);
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  }, [currentStep, isValidService]);

  const handleSubmit = useCallback(async () => {
    if (!validateContact()) return;

    setIsSubmitting(true);

    try {
      // TODO: Submit to API
      // For now, simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to confirmation page
      router.push("/devis-gratuit/confirmation");
    } catch {
      setErrors({ submit: "Une erreur est survenue. Veuillez réessayer." });
    } finally {
      setIsSubmitting(false);
    }
  }, [validateContact, router]);

  // Map step number to logical step based on whether house age is shown
  // With house age: 1=service, 2=housing, 3=houseAge, 4=ownership, 5=heating, 6=budget, 7=contact
  // Without house age: 1=service, 2=housing, 3=ownership, 4=heating, 5=budget, 6=contact
  const getLogicalStep = (step: number): string => {
    if (showHouseAgeStep) {
      const steps = ["service", "housing", "houseAge", "ownership", "heating", "budget", "contact"];
      return steps[step - 1] || "service";
    } else {
      const steps = ["service", "housing", "ownership", "heating", "budget", "contact"];
      return steps[step - 1] || "service";
    }
  };

  // Render current step
  const renderStep = () => {
    const logicalStep = getLogicalStep(currentStep);

    switch (logicalStep) {
      case "service":
        return (
          <ServiceSelect
            value={formData.service}
            onChange={(service: ServiceType) =>
              setFormData({ ...formData, service })
            }
            onNext={handleNext}
            error={errors.service}
          />
        );
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
  const canGoBack = currentStep > 1 && !(isValidService && currentStep === 2);

  return (
    <div className="flex flex-col p-4 min-h-dvh">
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
