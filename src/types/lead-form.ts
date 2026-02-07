// Service types for lead form
export type ServiceType = "poele-insert" | "pompe-a-chaleur" | "climatisation";

export type HousingType = "maison" | "appartement";

export type HouseAgeType = "moins-2-ans" | "2-15-ans" | "plus-15-ans";

export type OwnershipType = "proprietaire" | "locataire";

export type HeatingType = "electrique" | "gaz" | "fioul" | "bois" | "autre";

export type HeatingBudgetType = "moins-50" | "50-80" | "80-120" | "120-plus";

// Form data structure
export interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  postalCode: string;
  city: string;
  consent: boolean;
}

export interface LeadFormData {
  service: ServiceType | null;
  housingType: HousingType | null;
  houseAge: HouseAgeType | null;
  ownershipType: OwnershipType | null;
  heatingType: HeatingType | null;
  heatingBudget: HeatingBudgetType | null;
  contact: ContactInfo;
}

// Initial form state
export const initialContactInfo: ContactInfo = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  postalCode: "",
  city: "",
  consent: false,
};

export const initialLeadFormData: LeadFormData = {
  service: null,
  housingType: null,
  houseAge: null,
  ownershipType: null,
  heatingType: null,
  heatingBudget: null,
  contact: initialContactInfo,
};

// Service labels for display
export const serviceLabels: Record<ServiceType, string> = {
  "poele-insert": "Poêle ou insert",
  "pompe-a-chaleur": "Pompe à chaleur",
  climatisation: "Climatisation",
};

export const serviceDescriptions: Record<ServiceType, string> = {
  "poele-insert": "Chauffage au bois ou granulés",
  "pompe-a-chaleur": "Chauffage économique et écologique",
  climatisation: "Confort été comme hiver",
};
