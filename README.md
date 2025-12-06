# Rent360 Africa

> **Pan-African AI-powered rental marketplace + management SaaS for properties, vehicles, and assets.**

A comprehensive rental platform that enables users to list, discover, manage, rent, insure, track, and pay for any rentable asset across Africa.

## 🌍 Overview

Rent360 Africa is a multi-tenant SaaS + marketplace platform supporting:

- **Properties**: Homes, apartments, short stays, student housing, commercial real estate
- **Vehicles**: Cars, motorbikes, trucks, heavy equipment (Turo-style)
- **Equipment**: Heavy machinery (excavators, graders), event rentals (chairs, tents, sound systems)
- **Tools & Machinery**: Construction tools, generators, and more

## 🚀 Features

### For Renters (B2C)
- 🔍 One app for every rental need
- 🤖 AI price comparison + recommendations
- 📄 Digital contracts + secure payments
- ✅ Verified listings + fraud prevention
- 📦 Instant booking, delivery & tracking

### For Owners (B2B)
- 🏢 SaaS tools for inventory, bookings, maintenance
- 💰 AI pricing engine
- 📊 Real-time analytics
- 💼 Automated tax/invoicing
- 💳 Payment reconciliation dashboard

### For Agencies / Fleet Owners
- 🏗️ Multi-unit management
- 👥 Staff permissions & roles
- 🔒 Automated tenant screening
- 🔧 Predictive maintenance
- 📍 GPS tracking & telematics

## 🏗️ Architecture

This is a **monorepo** built with:

- **Frontend**: Next.js 15 (web) + Expo 54 (mobile)
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Build System**: Turbo
- **Package Manager**: pnpm

### Project Structure

```
rent360-africa/
├── apps/
│   ├── web/              # Next.js 15 web application
│   └── mobile/           # Expo 54 React Native mobile app
├── packages/
│   ├── config/           # Shared TypeScript configurations
│   ├── types/            # Shared TypeScript types
│   └── utils/            # Shared utility functions
├── package.json          # Root package configuration
└── turbo.json           # Turbo build configuration
```

## 📦 Prerequisites

- Node.js >= 20.0.0
- pnpm >= 9.1.0

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/salim928/rent360-africa.git
cd rent360-africa
```

2. Install dependencies:
```bash
pnpm install
```

## 🚀 Development

### Run all apps in development mode:
```bash
pnpm dev
```

### Run specific apps:

**Web application (Next.js):**
```bash
pnpm dev:web
```

**Mobile application (Expo):**
```bash
pnpm dev:mobile
```

### Build all apps:
```bash
pnpm build
```

### Build specific app:
```bash
pnpm build:web
```

### Linting:
```bash
pnpm lint
```

### Type checking:
```bash
pnpm typecheck
```

### Format code:
```bash
pnpm format
```

## 📱 Web Application

The web application is built with:
- **Next.js 15** with App Router
- **React 19**
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Framer Motion** for animations
- **Lucide React** for icons

### Running the Web App

```bash
cd apps/web
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📲 Mobile Application

The mobile application is built with:
- **Expo 54**
- **React Native 0.76**
- **NativeWind** (Tailwind for React Native)
- **Expo Router** for navigation

### Running the Mobile App

```bash
cd apps/mobile
pnpm dev
```

Then:
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan QR code with Expo Go app

## 🎨 Design System

The project uses a custom design system based on shadcn/ui with:
- Consistent color palette
- Reusable components
- Dark mode support
- Responsive design patterns

## 📚 Core Modules

### MODULE A — Marketplace
- Search & filter across all rental categories
- Map view + geolocation
- Dynamic pricing engine
- AI-powered recommendations
- Built-in wallet integration

### MODULE B — Host Dashboard
- Multi-property management
- Automated guest onboarding
- Revenue analytics + P&L
- Compliance checks

### MODULE C — Fleet Management
- GPS tracking
- Driver behavior analytics
- Usage-based billing
- Predictive maintenance

### MODULE D — Equipment & Event Rentals
- Calendar-based availability
- Delivery scheduling
- AI damage detection

### MODULE E — AI Layer
- AI listing generator
- AI tenant/guest screening
- AI dynamic pricing
- AI fraud prevention
- AI predictive maintenance
- AI concierge

## 🔧 Available Scripts

From the root directory:

| Command | Description |
|---------|-------------|
| `pnpm dev` | Run all apps in development mode |
| `pnpm dev:web` | Run web app only |
| `pnpm dev:mobile` | Run mobile app only |
| `pnpm build` | Build all apps |
| `pnpm build:web` | Build web app |
| `pnpm lint` | Lint all packages |
| `pnpm typecheck` | Type check all packages |
| `pnpm format` | Format code with Prettier |
| `pnpm clean` | Clean all build artifacts |

## 🌐 Supported Regions

Initially targeting:
- 🇬🇭 Ghana
- 🇳🇬 Nigeria
- 🇰🇪 Kenya
- 🇿🇦 South Africa
- 🇺🇬 Uganda
- 🇷🇼 Rwanda

## 💳 Payment Integrations (Planned)

- MTN Mobile Money
- Vodafone Cash
- AirtelTigo Money
- Bank cards
- Paystack / Flutterwave

## 🔐 Security Features

- Verified listings
- AI fraud detection
- Digital contracts
- Secure payments
- Insurance verification
- GPS tracking

## 📈 Revenue Model

### B2C Marketplace
- 7–15% service fee per booking
- Delivery charges
- Premium placement

### B2B SaaS Subscriptions
- **Starter**: Free/Basic
- **Pro**: GHS 200–350/month
- **Enterprise**: GHS 1000–3000/month

### Add-ons
- GPS subscription
- Insurance partnerships
- Maintenance services
- Payment processing

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 👥 Team

Built by the Rent360 Africa team.

## 📞 Contact

- Website: [Coming Soon]
- Email: [Coming Soon]
- Twitter: [Coming Soon]

---

**Made with ❤️ for Africa**
