# UI Components Documentation

This document describes the UI components available in the Rent360 Africa web application.

## Component Library

The project uses **shadcn/ui**, a collection of re-usable components built on top of Radix UI primitives with Tailwind CSS.

## Available Components

### Button

A versatile button component with multiple variants and sizes.

**Location**: `apps/web/src/components/ui/button.tsx`

**Usage**:
```tsx
import { Button } from "@/components/ui/button";

// Default button
<Button>Click me</Button>

// Variants
<Button variant="default">Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="default">Default</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>

// As child component
<Button asChild>
  <Link href="/dashboard">Dashboard</Link>
</Button>
```

**Props**:
- `variant`: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
- `size`: "default" | "sm" | "lg" | "icon"
- `asChild`: boolean (renders as child component using Radix Slot)

---

### Card

A flexible card component for displaying content.

**Location**: `apps/web/src/components/ui/card.tsx`

**Usage**:
```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

**Subcomponents**:
- `Card`: Main container
- `CardHeader`: Header section
- `CardTitle`: Title text
- `CardDescription`: Description text
- `CardContent`: Main content area
- `CardFooter`: Footer section with actions

---

### Input

A styled input field component.

**Location**: `apps/web/src/components/ui/input.tsx`

**Usage**:
```tsx
import { Input } from "@/components/ui/input";

<Input type="text" placeholder="Enter your name" />
<Input type="email" placeholder="Email address" />
<Input type="number" placeholder="Price" />
<Input type="password" placeholder="Password" />
```

**Props**:
- All standard HTML input attributes
- `className`: Additional CSS classes

---

### Badge

A badge component for labels and status indicators.

**Location**: `apps/web/src/components/ui/badge.tsx`

**Usage**:
```tsx
import { Badge } from "@/components/ui/badge";

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="success">Success</Badge>
```

**Props**:
- `variant`: "default" | "secondary" | "destructive" | "outline" | "success"

---

## Styling System

### Tailwind CSS

The project uses Tailwind CSS for utility-first styling.

**Configuration**: `apps/web/tailwind.config.js`

**Custom Colors**:
```js
colors: {
  primary: "hsl(var(--primary))",
  secondary: "hsl(var(--secondary))",
  destructive: "hsl(var(--destructive))",
  muted: "hsl(var(--muted))",
  accent: "hsl(var(--accent))",
  // ... more colors
}
```

### CSS Variables

Global CSS variables are defined in `apps/web/src/app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  /* ... more variables */
}
```

### Dark Mode

Dark mode is supported through the `.dark` class:

```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... more variables */
}
```

---

## Utility Functions

### cn (classNames)

Combines Tailwind classes intelligently.

**Location**: `apps/web/src/lib/utils.ts`

**Usage**:
```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  className
)} />
```

---

## Animation with Framer Motion

The project uses Framer Motion for animations.

**Example**:
```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

**Common Patterns**:

Fade in:
```tsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
```

Slide up:
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
```

Stagger children:
```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
  >
    {item.content}
  </motion.div>
))}
```

---

## Icons

The project uses **Lucide React** for icons.

**Usage**:
```tsx
import { Home, Car, Settings } from "lucide-react";

<Home className="h-4 w-4" />
<Car className="h-5 w-5 text-primary" />
<Settings className="h-6 w-6" />
```

**Common Icons**:
- Navigation: `Home`, `Menu`, `ChevronLeft`, `ChevronRight`
- Actions: `Plus`, `Edit`, `Trash`, `Search`, `Filter`
- Status: `Check`, `X`, `AlertCircle`, `Info`
- UI: `Star`, `Heart`, `Eye`, `Calendar`, `Clock`
- Social: `Mail`, `Phone`, `MapPin`, `User`

---

## Layout Patterns

### Responsive Grid

```tsx
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {items.map(item => <Card key={item.id}>...</Card>)}
</div>
```

### Container

```tsx
<div className="container mx-auto px-4 py-8">
  {/* Content */}
</div>
```

### Flex Layout

```tsx
<div className="flex items-center justify-between">
  <div>Left content</div>
  <div>Right content</div>
</div>
```

### Sidebar Layout

```tsx
<div className="grid gap-8 lg:grid-cols-[280px_1fr]">
  <aside>{/* Sidebar */}</aside>
  <main>{/* Main content */}</main>
</div>
```

---

## Best Practices

### 1. Use Semantic HTML

```tsx
// Good
<nav>
  <Link href="/">Home</Link>
</nav>

// Avoid
<div>
  <a href="/">Home</a>
</div>
```

### 2. Keep Components Small

Break down large components into smaller, reusable pieces.

### 3. Use TypeScript Types

```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}
```

### 4. Responsive Design

Always consider mobile, tablet, and desktop views:

```tsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

### 5. Accessibility

- Use semantic HTML elements
- Add ARIA labels when needed
- Ensure keyboard navigation works
- Maintain proper contrast ratios

---

## Adding New Components

### Using shadcn/ui CLI

To add a new shadcn/ui component:

```bash
cd apps/web
npx shadcn-ui@latest add [component-name]
```

Available components:
- accordion
- alert
- alert-dialog
- aspect-ratio
- avatar
- badge ✅ (already added)
- button ✅ (already added)
- calendar
- card ✅ (already added)
- checkbox
- dialog
- dropdown-menu
- input ✅ (already added)
- label
- popover
- radio-group
- select
- separator
- slider
- switch
- tabs
- textarea
- toast
- tooltip
- ... and more

### Creating Custom Components

1. Create file in `apps/web/src/components/`
2. Use TypeScript for props
3. Follow naming conventions
4. Add JSDoc comments
5. Export from index file if needed

Example:
```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface CustomComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "custom";
}

export const CustomComponent = React.forwardRef<
  HTMLDivElement,
  CustomComponentProps
>(({ className, variant = "default", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("base-styles", variant === "custom" && "custom-styles", className)}
      {...props}
    />
  );
});
CustomComponent.displayName = "CustomComponent";
```

---

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)

---

**Last Updated**: December 2024
