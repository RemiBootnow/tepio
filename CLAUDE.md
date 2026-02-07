# Project Instructions for Claude

## Golden Rules

1. **Always use existing components before creating new ones.** Check `src/components/ui/` for available components first. Never recreate functionality that already exists in the project.

2. **Always use `APP_NAME` for the app name.** Never hardcode "Tepio" - import from `@/lib/constants`.

```tsx
import { APP_NAME } from "@/lib/constants";

// Use in JSX
<title>{APP_NAME}</title>
<p>Welcome to {APP_NAME}</p>
```

### Available Components (`src/components/ui/`)
- `button.tsx` - Button component
- `typography.tsx` - Heading component
- `logo.tsx` - Logo component (icon or full, default or white color)
- `card.tsx` - Card, CardContent, etc.
- `badge.tsx` - Badge component
- `input.tsx` - Input component
- `label.tsx` - Label component
- `select.tsx` - Select component
- `textarea.tsx` - Textarea component
- `tabs.tsx` - Tabs component
- `separator.tsx` - Separator component

### Layout Components (`src/components/layout/`)
- `Section.tsx` - Section layout component with max-width and responsive padding

## Components Usage

### Headings
Always use the `<Heading>` component from `@/components/ui/typography` for all headings (h1, h2, h3, h4).

```tsx
import { Heading } from "@/components/ui/typography";

<Heading as="h1">Title</Heading>
<Heading as="h2">Subtitle</Heading>
```

### Buttons
Always use the `<Button>` component from `@/components/ui/button`. Available variants: `default`, `primary`, `neutral`, `neutral-soft`, `secondary`, `destructive`, `outline`, `ghost`, `link`.

### Sections
Always use the `<Section>` component from `@/components/layout/Section` for page sections. It provides consistent max-width (1200px) and responsive padding.

```tsx
import { Section } from "@/components/layout/Section";

// Basic usage
<Section className="py-20">Content</Section>

// With background color
<Section background="bg-muted" className="py-20">Content</Section>

// As different HTML element
<Section as="header" background="bg-primary">Header content</Section>
```

**Responsive padding:**
- <375px: 16px (px-4)
- 375px-394px: 20px (px-5)
- ≥395px: 24px (px-6)

## Styling
- Use semantic color variables from `globals.css` instead of Tailwind color palette (e.g., `bg-muted` not `bg-slate-50`)
- Font: Figtree for all text
- Primary/Accent color: `#FDF180` (yellow)

---

## Figma Integration Rules

### Icons
**When reading Figma files, always try to use Lucide icons first.** The project uses `lucide-react` which has 1000+ icons. Only create custom icons in `src/components/ui/icons/` if no suitable Lucide icon exists.

```tsx
// Prefer this (Lucide)
import { ChevronRight, Check, ArrowRight } from "lucide-react";

// Only if no Lucide equivalent exists
import { CustomIcon } from "@/components/ui/icons";
```

Browse Lucide icons: https://lucide.dev/icons

---

## Figma → Code Token Mapping

### Colors
| Figma Token | CSS Variable | Tailwind Class |
|-------------|--------------|----------------|
| Accent/Background/Bold | `--primary` | `bg-primary` |
| Neutral/Text/Bold | `--foreground` | `text-foreground` |
| Neutral/Background/Soft | `--muted` | `bg-muted` |
| Neutral/Background/Bold | `--neutral` | `bg-neutral` |
| Danger | `--destructive` | `bg-destructive` |
| Success | `--success` | `bg-success` |
| Warning | `--warning` | `bg-warning` |

### Typography (Figma → Heading component)
| Figma Style | Component | Mobile | Desktop |
|-------------|-----------|--------|---------|
| Headline 1 | `<Heading as="h1">` | 40px/40px | 60px/60px |
| Headline 2 | `<Heading as="h2">` | 32px/40px | 36px/40px |
| Headline 3 | `<Heading as="h3">` | 20px/24px | 24px/28px |
| Headline 4 | `<Heading as="h4">` | 20px/24px | 20px/24px |

### Button Sizes (Figma → Button component)
| Figma Size | Component Prop | Height | Padding | Radius |
|------------|----------------|--------|---------|--------|
| Large | `size="lg"` | 54px | 32px | 12px |
| Medium | `size="default"` | 36px | 12px | 6px |
| Small | `size="sm"` | 24px | 6px | 6px |
