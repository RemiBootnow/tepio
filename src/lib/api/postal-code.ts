interface CommuneResult {
  nom: string;
  code: string;
  codesPostaux: string[];
}

export interface PostalCodeCity {
  name: string;
  code: string;
  postalCode: string;
}

/**
 * Search French communes by postal code or city name using geo.api.gouv.fr
 */
export async function searchCommunes(
  query: string
): Promise<PostalCodeCity[]> {
  const trimmed = query.trim();
  if (trimmed.length < 2) return [];

  try {
    const isPostalCode = /^\d+$/.test(trimmed);
    const url = isPostalCode
      ? `https://geo.api.gouv.fr/communes?codePostal=${trimmed}&fields=nom,code,codesPostaux&limit=10`
      : `https://geo.api.gouv.fr/communes?nom=${encodeURIComponent(trimmed)}&fields=nom,code,codesPostaux&boost=population&limit=7`;

    const response = await fetch(url);
    if (!response.ok) return [];

    const data: CommuneResult[] = await response.json();

    // Flatten: one entry per postal code per commune
    const results: PostalCodeCity[] = [];
    for (const commune of data) {
      for (const cp of commune.codesPostaux) {
        results.push({
          name: commune.nom,
          code: commune.code,
          postalCode: cp,
        });
      }
    }

    return results;
  } catch {
    return [];
  }
}
