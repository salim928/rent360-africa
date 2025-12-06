# Rent360 Africa - Project Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     RENT360 AFRICA PLATFORM                      │
│                  Pan-African Rental Marketplace                  │
└─────────────────────────────────────────────────────────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
              ┌─────▼─────┐           ┌──────▼──────┐
              │    WEB    │           │   MOBILE    │
              │ (Next.js) │           │   (Expo)    │
              └─────┬─────┘           └──────┬──────┘
                    │                        │
                    └────────────┬───────────┘
                                 │
                    ┌────────────▼────────────┐
                    │   SHARED PACKAGES       │
                    │  (Types, Utils, Config) │
                    └─────────────────────────┘
```

## 🏗️ Monorepo Structure

```
rent360-africa/
│
├── 📁 apps/                           # Applications
│   │
│   ├── 🌐 web/                       # Next.js 15 Web Application
│   │   ├── src/
│   │   │   ├── app/                  # App Router Pages
│   │   │   │   ├── layout.tsx       # Root layout
│   │   │   │   ├── page.tsx         # Homepage
│   │   │   │   ├── globals.css      # Global styles
│   │   │   │   ├── properties/      # Properties listing
│   │   │   │   ├── vehicles/        # Vehicles listing
│   │   │   │   └── dashboard/       # Host dashboard
│   │   │   │
│   │   │   ├── components/          # React Components
│   │   │   │   └── ui/              # shadcn/ui components
│   │   │   │       ├── button.tsx
│   │   │   │       ├── card.tsx
│   │   │   │       ├── input.tsx
│   │   │   │       └── badge.tsx
│   │   │   │
│   │   │   └── lib/                 # Utilities
│   │   │       ├── utils.ts         # Helper functions
│   │   │       └── mock-data.ts     # Mock data
│   │   │
│   │   ├── next.config.js           # Next.js config
│   │   ├── tailwind.config.js       # Tailwind config
│   │   ├── tsconfig.json            # TypeScript config
│   │   └── package.json             # Dependencies
│   │
│   └── 📱 mobile/                    # Expo 54 Mobile Application
│       ├── app/                      # Screens (Expo Router)
│       │   ├── _layout.tsx          # Root layout
│       │   └── index.tsx            # Home screen
│       │
│       ├── components/              # React Native Components
│       ├── assets/                  # Images, fonts
│       ├── app.json                 # Expo config
│       ├── babel.config.js          # Babel config
│       ├── tailwind.config.js       # NativeWind config
│       ├── tsconfig.json            # TypeScript config
│       └── package.json             # Dependencies
│
├── 📦 packages/                      # Shared Packages
│   │
│   ├── 📘 types/                     # TypeScript Type Definitions
│   │   ├── index.ts                 # All types exported
│   │   │   ├── User types
│   │   │   ├── Listing types
│   │   │   ├── Property types
│   │   │   ├── Vehicle types
│   │   │   ├── Equipment types
│   │   │   ├── Booking types
│   │   │   ├── Location types
│   │   │   ├── Search types
│   │   │   ├── Dashboard types
│   │   │   └── Message types
│   │   │
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   ├── 🔧 utils/                     # Utility Functions
│   │   ├── index.ts                 # All utils exported
│   │   │   ├── formatCurrency()
│   │   │   ├── formatDate()
│   │   │   ├── daysBetween()
│   │   │   ├── calculateDistance()
│   │   │   ├── isValidEmail()
│   │   │   ├── isValidGhanaPhone()
│   │   │   ├── slugify()
│   │   │   ├── truncate()
│   │   │   ├── calculateAverageRating()
│   │   │   ├── generateId()
│   │   │   └── debounce()
│   │   │
│   │   ├── constants.ts             # Shared constants
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   └── ⚙️ config/                    # Shared Configurations
│       ├── base.json                # Base TypeScript config
│       ├── nextjs.json              # Next.js specific
│       ├── react-native.json        # React Native specific
│       └── package.json
│
├── 📄 Documentation Files
│   ├── README.md                    # Main documentation
│   ├── TECHNICAL_DOCS.md            # Architecture & tech details
│   ├── QUICKSTART.md                # Setup guide
│   ├── COMPONENTS.md                # UI components guide
│   └── IMPLEMENTATION_SUMMARY.md    # Complete summary
│
├── 🔧 Configuration Files
│   ├── package.json                 # Root package
│   ├── pnpm-workspace.yaml          # pnpm workspace config
│   ├── turbo.json                   # Turborepo config
│   ├── .gitignore                   # Git ignore rules
│   ├── .prettierrc                  # Prettier config
│   └── .npmrc                       # npm config
│
└── 📊 Build Outputs (ignored)
    ├── node_modules/
    ├── .next/
    ├── .expo/
    └── dist/
```

## 🔄 Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        USER LAYER                            │
│  ┌──────────────┐              ┌──────────────┐            │
│  │   Browser    │              │    Mobile    │            │
│  │  (Desktop/   │              │    Device    │            │
│  │   Mobile)    │              │  (iOS/And.)  │            │
│  └──────┬───────┘              └──────┬───────┘            │
└─────────┼──────────────────────────────┼───────────────────┘
          │                              │
          │                              │
┌─────────▼──────────────────────────────▼───────────────────┐
│                   APPLICATION LAYER                         │
│                                                             │
│  ┌─────────────────────┐      ┌──────────────────────┐    │
│  │   Next.js 15 App    │      │   Expo 54 App        │    │
│  │                     │      │                      │    │
│  │  • Pages/Routes     │      │  • Screens           │    │
│  │  • Components       │      │  • Components        │    │
│  │  • Layouts          │      │  • Navigation        │    │
│  │  • Animations       │      │  • Gestures          │    │
│  └──────────┬──────────┘      └──────────┬───────────┘    │
│             │                            │                 │
│             └──────────┬─────────────────┘                 │
└────────────────────────┼───────────────────────────────────┘
                         │
                         │
┌────────────────────────▼───────────────────────────────────┐
│                  SHARED LAYER                               │
│                                                             │
│  ┌──────────────────────────────────────────────────┐     │
│  │            @rent360/types                         │     │
│  │  • User types                                     │     │
│  │  • Listing types (Property, Vehicle, Equipment)  │     │
│  │  • Booking types                                  │     │
│  │  • Location types                                 │     │
│  └──────────────────────────────────────────────────┘     │
│                                                             │
│  ┌──────────────────────────────────────────────────┐     │
│  │            @rent360/utils                         │     │
│  │  • Currency formatting                            │     │
│  │  • Date handling                                  │     │
│  │  • Validation                                     │     │
│  │  • Distance calculations                          │     │
│  └──────────────────────────────────────────────────┘     │
│                                                             │
│  ┌──────────────────────────────────────────────────┐     │
│  │            @rent360/config                        │     │
│  │  • TypeScript configs                             │     │
│  │  • Build configurations                           │     │
│  └──────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
                         │
                         │
┌────────────────────────▼───────────────────────────────────┐
│                  FUTURE: BACKEND LAYER                      │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐     │
│  │   Node.js    │  │   Python     │  │  Database   │     │
│  │ Microservices│  │  AI Services │  │ PostgreSQL  │     │
│  └──────────────┘  └──────────────┘  └─────────────┘     │
│                                                             │
│  • REST/GraphQL APIs                                        │
│  • Authentication                                           │
│  • Payment Processing                                       │
│  • AI/ML Models                                             │
└─────────────────────────────────────────────────────────────┘
```

## 🎯 Component Hierarchy

### Web Application

```
App (layout.tsx)
│
├── Header (Sticky Navigation)
│   ├── Logo
│   ├── Navigation Menu
│   │   ├── Properties Link
│   │   ├── Vehicles Link
│   │   ├── Equipment Link
│   │   └── Dashboard Link
│   └── Auth Buttons
│       ├── Sign In
│       └── List Property
│
├── Page Content
│   │
│   ├── Homepage (/)
│   │   ├── Hero Section
│   │   │   ├── Title
│   │   │   ├── Subtitle
│   │   │   └── Search Bar
│   │   ├── Categories Section
│   │   │   └── Category Cards (x4)
│   │   ├── Features Section
│   │   │   └── Feature Cards (x4)
│   │   └── CTA Section
│   │
│   ├── Properties (/properties)
│   │   ├── Filters Sidebar
│   │   │   ├── Price Range
│   │   │   ├── Bedrooms
│   │   │   ├── Property Type
│   │   │   └── Amenities
│   │   └── Property Grid
│   │       ├── Search Bar
│   │       ├── Sort Dropdown
│   │       └── Property Cards (x6)
│   │
│   ├── Vehicles (/vehicles)
│   │   ├── Filters Sidebar
│   │   │   ├── Daily Rate
│   │   │   ├── Vehicle Type
│   │   │   ├── Transmission
│   │   │   ├── Fuel Type
│   │   │   └── Features
│   │   └── Vehicle Grid
│   │       └── Vehicle Cards (x6)
│   │
│   └── Dashboard (/dashboard)
│       ├── Stats Cards (x4)
│       ├── Recent Bookings
│       ├── Listings Performance
│       └── Quick Actions
│
└── Footer
    ├── About Section
    ├── Links Sections (x4)
    └── Copyright
```

### Mobile Application

```
App (_layout.tsx)
│
└── Home Screen (index.tsx)
    ├── Header
    │   ├── Title
    │   └── Subtitle
    │
    ├── Search Section
    │   ├── What Input
    │   ├── Location Input
    │   └── Search Button
    │
    ├── Categories
    │   └── Category Cards (x4)
    │
    ├── Features
    │   └── Feature Items (x4)
    │
    └── CTA Section
        ├── Title
        ├── Subtitle
        └── Action Buttons (x2)
```

## 🔗 Package Dependencies

```
┌──────────────────────────────────────┐
│         @rent360/web                 │
│  • next 15.5.7                       │
│  • react 19.0.0                      │
│  • tailwindcss 3.4.1                 │
│  • framer-motion 11.5.4              │
│  • @radix-ui/* (shadcn/ui)           │
│  • lucide-react                      │
│  └─► @rent360/types                  │
│  └─► @rent360/utils                  │
│  └─► @rent360/typescript-config      │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│        @rent360/mobile               │
│  • expo 54.0.0                       │
│  • react-native 0.76.0               │
│  • expo-router 4.0.0                 │
│  • nativewind 4.0.1                  │
│  └─► @rent360/types                  │
│  └─► @rent360/utils                  │
│  └─► @rent360/typescript-config      │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│       @rent360/types                 │
│  • TypeScript type definitions       │
│  • No external dependencies          │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│       @rent360/utils                 │
│  • Pure TypeScript utilities         │
│  • No external dependencies          │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│  @rent360/typescript-config          │
│  • TypeScript configuration files    │
│  • No external dependencies          │
└──────────────────────────────────────┘
```

## 🚀 Build Process Flow

```
Developer Types Code
        │
        ▼
┌───────────────────┐
│  TypeScript Check │
│  (tsc --noEmit)   │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│   ESLint Check    │
│   (Code Quality)  │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│  Prettier Format  │
│  (Code Style)     │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│  Turborepo Build  │
│  (Parallel Tasks) │
└─────────┬─────────┘
          │
          ├─► Web Build (Next.js)
          │   ├── Compile TypeScript
          │   ├── Bundle JavaScript
          │   ├── Optimize Assets
          │   ├── Generate Static Pages
          │   └── Output to .next/
          │
          └─► Mobile Build (Expo)
              ├── Compile TypeScript
              ├── Bundle JavaScript
              ├── Optimize Assets
              └── Output to dist/
```

## 📱 Deployment Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    PRODUCTION                            │
└─────────────────────────────────────────────────────────┘
                          │
          ┌───────────────┴───────────────┐
          │                               │
    ┌─────▼──────┐                 ┌──────▼─────┐
    │   Vercel   │                 │  Expo EAS  │
    │ (Web Host) │                 │  (Mobile)  │
    └─────┬──────┘                 └──────┬─────┘
          │                               │
          ├─► CDN (Static Assets)         ├─► iOS App Store
          ├─► Edge Functions              └─► Google Play Store
          └─► Analytics
```

---

**Last Updated:** December 2024  
**Version:** 0.1.0  
**Status:** Foundation Complete ✅
