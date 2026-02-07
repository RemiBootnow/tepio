"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heading } from "@/components/ui/typography";
import { FormField } from "../fields/FormField";
import { CitySearch } from "../fields/CitySearch";
import { ContactInfo as ContactInfoType } from "@/types/lead-form";

interface ContactInfoProps {
  value: ContactInfoType;
  onChange: (value: ContactInfoType) => void;
  onSubmit: () => void;
  errors?: Record<string, string>;
  isSubmitting?: boolean;
}

export function ContactInfo({
  value,
  onChange,
  onSubmit,
  errors = {},
  isSubmitting = false,
}: ContactInfoProps) {
  const updateField = <K extends keyof ContactInfoType>(
    field: K,
    fieldValue: ContactInfoType[K]
  ) => {
    onChange({ ...value, [field]: fieldValue });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Heading as="h2" className="mb-2">
          Vos coordonnées
        </Heading>
        <p className="text-muted-foreground">
          Renseignez vos informations de contact
        </p>
      </div>

      <div className="space-y-4">
        {/* Name fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            label="Prénom"
            htmlFor="firstName"
            error={errors.firstName}
          >
            <Input
              id="firstName"
              type="text"
              placeholder="Votre prénom"
              value={value.firstName}
              onChange={(e) => updateField("firstName", e.target.value)}
              autoComplete="given-name"
              aria-invalid={!!errors.firstName}
            />
          </FormField>

          <FormField
            label="Nom"
            htmlFor="lastName"
            error={errors.lastName}
          >
            <Input
              id="lastName"
              type="text"
              placeholder="Votre nom"
              value={value.lastName}
              onChange={(e) => updateField("lastName", e.target.value)}
              autoComplete="family-name"
              aria-invalid={!!errors.lastName}
            />
          </FormField>
        </div>

        {/* Email */}
        <FormField
          label="Email"
          htmlFor="email"
          error={errors.email}
        >
          <Input
            id="email"
            type="email"
            placeholder="votre@email.fr"
            value={value.email}
            onChange={(e) => updateField("email", e.target.value)}
            autoComplete="email"
            aria-invalid={!!errors.email}
          />
        </FormField>

        {/* Phone */}
        <FormField
          label="Téléphone"
          htmlFor="phone"
          error={errors.phone}
        >
          <Input
            id="phone"
            type="tel"
            inputMode="tel"
            placeholder="06 12 34 56 78"
            value={value.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            autoComplete="tel"
            aria-invalid={!!errors.phone}
          />
        </FormField>

        {/* City search - single autocomplete for postal code + city */}
        <FormField
          label="Ville"
          htmlFor="citySearch"
          error={errors.postalCode || errors.city}
        >
          <CitySearch
            postalCode={value.postalCode}
            city={value.city}
            onSelect={(postalCode, city) => {
              onChange({ ...value, postalCode, city });
            }}
            error={errors.postalCode || errors.city}
          />
        </FormField>

        {/* Consent checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={value.consent}
              onChange={(e) => updateField("consent", e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-primary"
            />
            <span className="text-sm text-muted-foreground">
              J&apos;accepte que mes données soient utilisées pour être
              recontacté dans le cadre de mon projet de rénovation énergétique.
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1 text-sm text-destructive">{errors.consent}</p>
          )}
        </div>
      </div>

      <div className="pt-4">
        <Button
          type="submit"
          size="lg"
          className="w-full"
          onClick={onSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Envoi en cours..." : "Voir mon estimation"}
        </Button>
      </div>
    </div>
  );
}
