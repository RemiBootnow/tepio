interface CommuneResult {
  nom: string;
  code: string;
  codesPostaux: string[];
}

export interface PostalCodeCity {
  name: string;
  code: string;
}

/**
 * Fetch cities from a French postal code using the geo.api.gouv.fr API
 */
export async function fetchCitiesFromPostalCode(
  postalCode: string
): Promise<PostalCodeCity[]> {
  if (!/^\d{5}$/.test(postalCode)) {
    return [];
  }

  try {
    const response = await fetch(
      `https://geo.api.gouv.fr/communes?codePostal=${postalCode}&fields=nom,code,codesPostaux`
    );

    if (!response.ok) {
      return [];
    }

    const data: CommuneResult[] = await response.json();

    return data.map((commune) => ({
      name: commune.nom,
      code: commune.code,
    }));
  } catch {
    return [];
  }
}
