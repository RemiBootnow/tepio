import { Figtree } from "next/font/google";

// Figtree font for all text (body and headings)
export const fontSans = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Use same font for headings
export const fontHeading = fontSans;
