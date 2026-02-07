import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

// Create Supabase client for server-side use (untyped for flexibility)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn("Supabase environment variables not configured");
}

const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

// Strip HTML tags to prevent stored XSS
const sanitize = (val: string) => val.replace(/<[^>]*>/g, "").trim();
const safeString = (min: number, max: number) =>
  z.string().min(min).max(max).transform(sanitize);

// Rate limiting: simple in-memory store (per serverless instance)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // max 5 submissions per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// Validation schema for lead submission
const leadSchema = z.object({
  service: z.enum(["poele-insert", "pompe-a-chaleur", "climatisation"]),
  housingType: z.enum(["maison", "appartement"]),
  houseAge: z.enum(["moins-2-ans", "2-15-ans", "plus-15-ans"]),
  ownershipType: z.enum(["proprietaire", "locataire"]),
  heatingType: z.enum(["electrique", "gaz", "fioul", "bois", "autre"]),
  heatingBudget: z.enum(["moins-50", "50-80", "80-120", "120-plus"]),
  contact: z.object({
    firstName: safeString(2, 50),
    lastName: safeString(2, 50),
    email: z.string().email().max(254).transform(sanitize),
    phone: z.string().min(10).max(15).regex(/^[\d\s+()-]+$/, "Numéro invalide"),
    postalCode: z.string().regex(/^\d{5}$/, "Code postal invalide"),
    city: safeString(1, 100),
    consent: z.literal(true),
  }),
  // Optional tracking fields
  sourceUrl: z.string().max(500).optional(),
  utmSource: z.string().max(100).optional(),
  utmMedium: z.string().max(100).optional(),
  utmCampaign: z.string().max(100).optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Trop de demandes. Veuillez patienter." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate input
    const result = leadSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    let lead: Record<string, unknown> | null = null;

    // Insert into Supabase if configured
    if (supabase) {
      const { data: savedLead, error: dbError } = await supabase
        .from("leads")
        .insert({
          service: data.service,
          housing_type: data.housingType,
          house_age: data.houseAge,
          ownership_type: data.ownershipType,
          heating_type: data.heatingType,
          heating_budget: data.heatingBudget,
          first_name: data.contact.firstName,
          last_name: data.contact.lastName,
          email: data.contact.email,
          phone: data.contact.phone,
          postal_code: data.contact.postalCode,
          city: data.contact.city,
          consent: data.contact.consent,
          status: "new",
          source_url: data.sourceUrl || null,
          utm_source: data.utmSource || null,
          utm_medium: data.utmMedium || null,
          utm_campaign: data.utmCampaign || null,
        })
        .select()
        .single();

      if (dbError) {
        console.error("Supabase error:", dbError);
        return NextResponse.json(
          { error: "Failed to save lead" },
          { status: 500 }
        );
      }

      lead = savedLead;
    } else {
      // If Supabase not configured, create a mock lead for development
      lead = {
        id: crypto.randomUUID(),
        created_at: new Date().toISOString(),
        service: data.service,
        housing_type: data.housingType,
        house_age: data.houseAge,
        ownership_type: data.ownershipType,
        heating_type: data.heatingType,
        heating_budget: data.heatingBudget,
        first_name: data.contact.firstName,
        last_name: data.contact.lastName,
        email: data.contact.email,
        phone: data.contact.phone,
        postal_code: data.contact.postalCode,
        city: data.contact.city,
      };
      console.log("Supabase not configured. Lead data:", lead);
    }

    // Send to Zapier webhook if configured
    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL;
    if (zapierWebhookUrl && lead) {
      try {
        await fetch(zapierWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        });
      } catch (webhookError) {
        // Log but don't fail the request if webhook fails
        console.error("Zapier webhook error:", webhookError);
      }
    }

    return NextResponse.json({ success: true, id: lead?.id });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
