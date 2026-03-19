# Project Instructions for Claude

## Golden Rules

1. **Always use existing components before creating new ones.** Check `src/components/ui/` for available components first. Never recreate functionality that already exists in the project.

2. **Always use `APP_NAME` for the app name.** Never hardcode "Tepio" - import from `@/lib/constants`.

```tsx
import { APP_NAME } from "@/lib/constants";
```

## Component Inventory

### UI (`src/components/ui/`)
`button.tsx`, `typography.tsx` (Heading), `logo.tsx`, `card.tsx`, `badge.tsx`, `input.tsx`, `label.tsx`, `select.tsx`, `textarea.tsx`, `tabs.tsx`, `separator.tsx`, `feature-card.tsx`

### Section layouts (`src/components/sections/`)
`left-carousel-section.tsx`, `center-carousel-section.tsx`, `features-section.tsx`

### Layout (`src/components/layout/`)
`Section.tsx` — max-width (1200px) wrapper with responsive padding, use for every section.

## Icons

Always use **Untitled UI Pro** icons — never Lucide React or custom SVGs.

```tsx
// Line style (default for UI)
import { ChevronDown, ArrowRight } from "@untitledui-pro/icons/line";

// Solid style (for feature cards and filled contexts)
import { ShieldTick, CheckCircle } from "@untitledui-pro/icons/solid";
```

The legacy `<Icon name="..." />` component (`src/components/ui/icons/`) still exists for `FeatureCard` — it now wraps Untitled UI Pro internally. For all other icon usage, import directly from `@untitledui-pro/icons/line` or `/solid`.

Only fall back to Lucide React for icons with no UUI equivalent: `Flame`, `Droplet`, `Leaf`, `TreePine`, `Euro`, `Loader2`.

## Styling
Use semantic color variables from `globals.css` — never raw Tailwind color palette (e.g. `bg-muted` not `bg-slate-50`). Primary/Accent: `#FDF180` (yellow) → `bg-primary`.

---

> **Building pages or sections?** The `marketing-page` skill has detailed component usage, file structure conventions, and the Figma → code workflow.
