# Rent360 Africa - Technical Documentation

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Guidelines](#development-guidelines)
- [Deployment](#deployment)

## 🎯 Project Overview

Rent360 Africa is a comprehensive Pan-African rental marketplace and SaaS management platform that enables users to:
- List, discover, and manage rentable assets
- Handle properties, vehicles, equipment, and event rentals
- Process payments and bookings
- Track assets with GPS and IoT integration
- Utilize AI-powered features for pricing, fraud detection, and recommendations

## 🏗️ Architecture

### Monorepo Structure
The project uses a **Turborepo** monorepo architecture with the following packages:

```
rent360-africa/
├── apps/
│   ├── web/              # Next.js 15 web application
│   └── mobile/           # Expo 54 React Native mobile app
├── packages/
│   ├── config/           # Shared TypeScript configurations
│   ├── types/            # Shared TypeScript type definitions
│   └── utils/            # Shared utility functions
```

### Technology Decisions

**Why Monorepo?**
- Code sharing between web and mobile apps
- Consistent tooling and dependencies
- Atomic commits across multiple packages
- Better developer experience with Turbo's caching

**Why Next.js 15?**
- App Router for improved performance
- Server Components for better SEO
- Built-in optimization features
- Great TypeScript support
- Easy deployment on Vercel

**Why Expo 54?**
- Simplified React Native development
- OTA updates capability
- Expo Router for type-safe navigation
- Great developer experience
- Easy deployment with EAS

## 💻 Technology Stack

### Frontend (Web)
- **Framework**: Next.js 15.5.7
- **React**: 19.0.0
- **Styling**: Tailwind CSS 3.4.1
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion 11.5.4
- **Icons**: Lucide React
- **Type System**: TypeScript 5.3.3

### Frontend (Mobile)
- **Framework**: Expo 54.0.0
- **React Native**: 0.76.0
- **Navigation**: Expo Router 4.0.0
- **Styling**: NativeWind 4.0.1 (Tailwind for RN)
- **Type System**: TypeScript 5.3.3

### Build & Dev Tools
- **Monorepo**: Turborepo 2.6.3
- **Package Manager**: pnpm 9.1.0
- **Linting**: ESLint 8.57.1
- **Formatting**: Prettier 3.7.4

### Shared Packages
- **Types**: Centralized TypeScript definitions
- **Utils**: Shared utility functions (currency, dates, validation)
- **Config**: Shared TypeScript and build configurations

## 🚀 Getting Started

### Prerequisites
- Node.js >= 20.0.0
- pnpm 9.1.0

### Installation

1. Clone the repository:
```bash
git clone https://github.com/salim928/rent360-africa.git
cd rent360-africa
```

2. Install dependencies:
```bash
pnpm install
```

### Development

Run all apps:
```bash
pnpm dev
```

Run specific apps:
```bash
# Web application
pnpm dev:web

# Mobile application
pnpm dev:mobile
```

### Building

Build all apps:
```bash
pnpm build
```

Build specific app:
```bash
pnpm build:web
```

### Other Commands

```bash
# Linting
pnpm lint

# Type checking
pnpm typecheck

# Format code
pnpm format

# Clean build artifacts
pnpm clean
```

## 📁 Project Structure

### Web Application (`apps/web`)

```
apps/web/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── globals.css        # Global styles
│   │   ├── properties/        # Properties listing page
│   │   └── dashboard/         # Host dashboard
│   ├── components/
│   │   └── ui/                # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── input.tsx
│   └── lib/
│       └── utils.ts           # Utility functions
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

### Mobile Application (`apps/mobile`)

```
apps/mobile/
├── app/
│   ├── _layout.tsx           # Root layout
│   └── index.tsx             # Home screen
├── components/               # Reusable components
├── assets/                   # Images, fonts, etc.
├── app.json                  # Expo configuration
├── babel.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

### Shared Packages

**Types Package** (`packages/types`)
- User, Listing, Booking types
- Enums for categories, statuses
- Location, Review, Message types

**Utils Package** (`packages/utils`)
- Currency formatting
- Date utilities
- Distance calculations
- Validation functions
- String utilities

**Config Package** (`packages/config`)
- TypeScript base configuration
- Next.js specific config
- React Native specific config

## 👨‍💻 Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow ESLint rules
- Use Prettier for formatting
- Use meaningful variable names
- Write self-documenting code

### Component Guidelines

**Web Components:**
- Use "use client" directive for interactive components
- Prefer Server Components when possible
- Keep components small and focused
- Use shadcn/ui components for consistency

**Mobile Components:**
- Use NativeWind for styling
- Follow React Native best practices
- Optimize for performance
- Test on both iOS and Android

### State Management

Currently using React state. Future considerations:
- Zustand for global state
- React Query for server state
- Context API for theme/auth

### Naming Conventions

- Components: PascalCase (e.g., `PropertyCard.tsx`)
- Files: kebab-case (e.g., `use-auth.ts`)
- Variables/Functions: camelCase (e.g., `getUserData`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_UPLOAD_SIZE`)

### Git Workflow

1. Create feature branch from main
2. Make changes with descriptive commits
3. Run tests and linting
4. Create pull request
5. Get code review
6. Merge to main

### Commit Messages

Follow conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

## 📱 Pages & Features

### Implemented Pages

**Web Application:**
1. **Homepage** (`/`)
   - Hero section with search
   - Category browsing
   - Features showcase
   - Call-to-action sections
   
2. **Properties Listing** (`/properties`)
   - Grid view of properties
   - Filters sidebar (price, bedrooms, amenities)
   - Search and sort functionality
   - Property cards with details
   
3. **Host Dashboard** (`/dashboard`)
   - Revenue and booking statistics
   - Recent bookings overview
   - Listings performance
   - Quick actions panel

**Mobile Application:**
1. **Home Screen**
   - Search interface
   - Category cards
   - Features display
   - Call-to-action buttons

### Planned Features

**Phase 4: Marketplace Enhancement**
- Property detail pages
- Map view integration
- Advanced filters
- Booking flow
- Payment integration
- Review system

**Phase 5: Host Features**
- Listing management
- Calendar availability
- Pricing tools
- Analytics dashboard
- Guest communication

**Phase 6: Fleet Management**
- Vehicle tracking
- GPS integration
- Driver management
- Maintenance scheduling

**Phase 7: AI Features**
- Dynamic pricing engine
- Fraud detection
- Smart recommendations
- Auto-generated descriptions
- Predictive maintenance

## 🚢 Deployment

### Web Application

**Recommended: Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**Environment Variables:**
```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_MAPBOX_TOKEN=
DATABASE_URL=
```

### Mobile Application

**Using Expo EAS:**
```bash
# Install EAS CLI
npm i -g eas-cli

# Configure
eas build:configure

# Build for production
eas build --platform all
```

**App Stores:**
- iOS: Submit to Apple App Store via EAS Submit
- Android: Submit to Google Play via EAS Submit

## 🔒 Environment Setup

### Development
```env
# Web (.env.local)
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Mobile
EXPO_PUBLIC_API_URL=http://localhost:3000/api
```

### Production
```env
NEXT_PUBLIC_API_URL=https://api.rent360africa.com
NEXT_PUBLIC_SITE_URL=https://rent360africa.com
DATABASE_URL=postgresql://...
```

## 📊 Performance

### Web Metrics
- Lighthouse score target: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Core Web Vitals: All green

### Mobile Metrics
- App size target: < 50MB
- Startup time: < 2s
- Smooth 60fps animations
- Offline capability for core features

## 🧪 Testing (Planned)

### Unit Tests
- Jest for unit testing
- React Testing Library for components
- Vitest for utilities

### Integration Tests
- Playwright for web E2E
- Detox for mobile E2E

### Performance Tests
- Lighthouse CI
- Bundle size monitoring

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Expo Documentation](https://docs.expo.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Turborepo Documentation](https://turbo.build/repo/docs)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

This project is proprietary software. All rights reserved.

## 👥 Team

Built by the Rent360 Africa team.

---

**Last Updated**: December 2024
**Version**: 0.1.0
