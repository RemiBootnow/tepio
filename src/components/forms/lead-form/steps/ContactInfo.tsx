"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heading } from "@/components/ui/typography";
import { FormField } from "../fields/FormField";
import { ContactInfo as ContactInfoType } from "@/types/lead-form";
import {
  fetchCitiesFromPostalCode,
  PostalCodeCity,
} from "@/lib/api/postal-code";

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
  const [cities, setCities] = useState<PostalCodeCity[]>([]);
  const [isLoadingCities, setIsLoadingCities] = useState(false);

  const updateField = <K extends keyof ContactInfoType>(
    field: K,
    fieldValue: ContactInfoType[K]
  ) => {
    onChange({ ...value, [field]: fieldValue });
  };

  // Fetch cities when postal code changes
  useEffect(() => {
    const postalCode = value.postalCode;

    if (postalCode.length !== 5) {
      setCities([]);
      return;
    }

    setIsLoadingCities(true);
    fetchCitiesFromPostalCode(postalCode)
      .then((result) => {
        setCities(result);
        // Auto-select if only one city
        if (result.length === 1 && value.city !== result[0].name) {
          updateField("city", result[0].name);
        }
      })
      .finally(() => setIsLoadingCities(false));
  }, [value.postalCode]);

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
            required
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
            required
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
          required
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
          required
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

        {/* Postal code with city selection */}
        <FormField
          label="Code postal"
          htmlFor="postalCode"
          required
          error={errors.postalCode}
        >
          <Input
            id="postalCode"
            type="text"
            inputMode="numeric"
            placeholder="75001"
            maxLength={5}
            value={value.postalCode}
            onChange={(e) => {
              updateField("postalCode", e.target.value);
              // Reset city when postal code changes
              if (e.target.value.length < 5) {
                updateField("city", "");
              }
            }}
            autoComplete="postal-code"
            aria-invalid={!!errors.postalCode}
          />
        </FormField>

        {/* City selection - only show if we have cities */}
        {value.postalCode.length === 5 && (
          <FormField
            label="Ville"
            htmlFor="city"
            required
            error={errors.city}
          >
            {isLoadingCities ? (
              <div className="h-10 flex items-center text-sm text-muted-foreground">
                Recherche en cours...
              </div>
            ) : cities.length > 1 ? (
              <select
                id="city"
                value={value.city}
                onChange={(e) => updateField("city", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-invalid={!!errors.city}
              >
                <option value="">Sélectionnez votre ville</option>
                {cities.map((city) => (
                  <option key={city.code} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            ) : cities.length === 1 ? (
              <Input
                id="city"
                type="text"
                value={value.city}
                readOnly
                className="bg-muted"
              />
            ) : (
              <div className="h-10 flex items-center text-sm text-destructive">
                Code postal non trouvé
              </div>
            )}
          </FormField>
        )}

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
              *
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
