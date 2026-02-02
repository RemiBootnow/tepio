import { Thing, WithContext } from "schema-dts";

interface JsonLdProps<T extends Thing> {
  data: WithContext<T> | WithContext<T>[];
}

/**
 * Component to render JSON-LD structured data
 *
 * Usage:
 * ```tsx
 * <JsonLd data={getOrganizationSchema()} />
 * // or with multiple schemas
 * <JsonLd data={[getOrganizationSchema(), getLocalBusinessSchema()]} />
 * ```
 */
export function JsonLd<T extends Thing>({ data }: JsonLdProps<T>) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
