import localFont from "next/font/local";

// Mabry Pro font for all text
export const fontSans = localFont({
  src: [
    {
      path: "../../public/font/MabryPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/MabryPro-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/font/MabryPro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/MabryPro-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/font/MabryPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/MabryPro-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-mabry",
  display: "swap",
});

// Use same font for headings
export const fontHeading = fontSans;
