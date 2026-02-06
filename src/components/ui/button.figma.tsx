import figma from "@figma/code-connect";
import { Button } from "./button";

// Main Button component - maps Style and Type to variants
figma.connect(
  Button,
  "https://www.figma.com/design/uVpU2ICaI5jzcgop5Y2nSP?node-id=7:68",
  {
    props: {
      // Map Figma "Style" property to variant
      variant: figma.enum("Style", {
        Bold: "default",
        Soft: "secondary",
        Outlined: "outline",
        Ghost: "ghost",
        Link: "link",
      }),
      // Map Figma "Type" property - overrides variant for specific types
      type: figma.enum("Type", {
        Accent: undefined, // default, no override needed
        Neutral: "neutral",
        Danger: "destructive",
      }),
      disabled: figma.enum("State", {
        Disabled: true,
        Default: false,
        Hover: false,
        Active: false,
        Loading: false,
      }),
      children: figma.textContent("*"),
    },
    example: ({ variant, type, disabled, children }) => (
      <Button variant={type || variant} disabled={disabled}>
        {children}
      </Button>
    ),
  }
);

// Large button variant (54px height, 12px radius) - this is what's used in the Home page
figma.connect(
  Button,
  "https://www.figma.com/design/uVpU2ICaI5jzcgop5Y2nSP?node-id=4047:2188",
  {
    props: {
      children: figma.textContent("*"),
    },
    example: ({ children }) => (
      <Button size="lg" variant="default">
        {children}
      </Button>
    ),
  }
);
