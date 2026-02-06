import { z } from "zod";

// French phone number regex
const frenchPhoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;

// French postal code regex
const frenchPostalCodeRegex = /^\d{5}$/;

// Step 1: Service selection
export const serviceSchema = z.object({
  service: z.enum(["poele-insert", "pompe-a-chaleur", "climatisation"], {
    message: "Veuillez sélectionner un service",
  }),
});

// Step 2: Housing type
export const housingSchema = z.object({
  housingType: z.enum(["maison", "appartement"], {
    message: "Veuillez sélectionner votre type de logement",
  }),
});

// Step 3: Ownership type
export const ownershipSchema = z.object({
  ownershipType: z.enum(["proprietaire", "locataire"], {
    message: "Veuillez indiquer si vous êtes propriétaire ou locataire",
  }),
});

// Step 4: Contact information
export const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  phone: z.string().regex(frenchPhoneRegex, "Numéro de téléphone invalide"),
  postalCode: z.string().regex(frenchPostalCodeRegex, "Code postal invalide"),
  city: z.string().min(1, "La ville est requise"),
  consent: z.literal(true, "Vous devez accepter pour continuer"),
});

// Type exports
export type ServiceFormData = z.infer<typeof serviceSchema>;
export type HousingFormData = z.infer<typeof housingSchema>;
export type OwnershipFormData = z.infer<typeof ownershipSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
