import { Inter, Outfit } from "next/font/google";

// Primary font for body text - excellent readability
export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Display font for headings - modern and professional
export const fontHeading = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700"],
});
