import type { Metadata, Viewport } from "next";
import { fontSans, fontHeading } from "@/lib/fonts";
import { defaultMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getWebSiteSchema,
} from "@/lib/seo/schemas";
import { cn } from "@/lib/utils";
import { Agentation } from "agentation";
import "./globals.css";

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Structured Data for entire site */}
        <JsonLd
          data={[
            getOrganizationSchema(),
            getLocalBusinessSchema(),
            getWebSiteSchema(),
          ]}
        />
        {/* Register smooth corners paint worklet for iOS-style squircles */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof CSS !== 'undefined' && CSS.paintWorklet) {
                CSS.paintWorklet.addModule('/smooth-corners.js');
              }
            `,
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        {children}
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
