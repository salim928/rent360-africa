# Rent360 Africa

> Pan-African AI-powered rental marketplace and management SaaS platform for properties, vehicles, and assets.

## 🌍 Overview

Rent360 Africa is a comprehensive rental marketplace that connects renters with owners across Africa. The platform supports multiple rental categories including properties, vehicles, equipment, and event rentals, with features tailored for African markets.

## 🚀 Tech Stack

### Web Application
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **UI Components**: shadcn/ui (Radix UI)
- **Animations**: Framer Motion
- **State Management**: React Hooks
- **Forms**: React Hook Form + Zod

### Mobile Application
- **Framework**: Expo 54 (React Native)
- **Navigation**: Expo Router
- **Styling**: NativeWind (TailwindCSS for React Native)
- **Language**: TypeScript

### Infrastructure
- **Monorepo**: Turborepo
- **Package Manager**: npm
- **Build Tool**: Turbo

## 📁 Project Structure

```
rent360-africa/
├── apps/
│   ├── web/                    # Next.js 15 web application
│   │   ├── app/
│   │   │   ├── (auth)/         # Authentication routes
│   │   │   ├── (dashboard)/    # Dashboard routes
│   │   │   ├── (marketplace)/  # Marketplace routes
│   │   │   ├── api/            # API routes
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx        # Landing page
│   │   ├── components/
│   │   │   ├── ui/             # shadcn/ui components
│   │   │   ├── marketplace/    # Marketplace components
│   │   │   ├── dashboard/      # Dashboard components
│   │   │   └── shared/         # Shared components
│   │   ├── lib/
│   │   └── hooks/
│   │
│   └── mobile/                 # Expo 54 React Native app
│       ├── app/                # Expo Router file-based routing
│       │   ├── (auth)/
│       │   └── (tabs)/
│       ├── components/
│       └── hooks/
│
├── packages/
│   ├── ui/                     # Shared UI components
│   ├── types/                  # Shared TypeScript types
│   ├── utils/                  # Shared utilities
│   ├── config/                 # Shared TypeScript configs
│   └── eslint-config/          # Shared ESLint config
│
├── turbo.json                  # Turborepo configuration
├── package.json                # Root package.json
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary**: Warm Orange/Terracotta (#F97316) - African sunset inspiration
- **Secondary**: Deep Teal (#2C7A7B) - Natural waters
- **Neutral**: Warm Grays

### Features
- Dark mode support
- Responsive design (mobile-first)
- African-inspired accent colors
- Accessible components (ARIA labels, keyboard navigation)

## 🏗️ Getting Started

### Prerequisites
- Node.js >= 20.0.0
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/salim928/rent360-africa.git
   cd rent360-africa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   For web app:
   ```bash
   cd apps/web
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

### Development

#### Run All Apps
```bash
npm run dev
```

#### Run Web App Only
```bash
npm run dev:web
```

#### Run Mobile App Only
```bash
npm run dev:mobile
```

The web app will be available at `http://localhost:3000`

For mobile, use Expo Go app to scan the QR code.

### Building

#### Build All Apps
```bash
npm run build
```

#### Build Web App Only
```bash
npm run build:web
```

### Code Quality

#### Linting
```bash
npm run lint
```

#### Type Checking
```bash
npm run typecheck
```

#### Formatting
```bash
npm run format
```

## 📱 Rental Categories

The platform supports the following rental categories:

### Properties
- Homes & Apartments
- Short stays & Guest houses
- Student housing
- Commercial real estate

### Vehicles
- Cars
- Motorbikes/Tricycles
- Trucks & logistics vehicles

### Equipment
- Heavy equipment
- Tools & machinery

### Events
- Event venues
- Event equipment and supplies

## 🔑 Key Features

- **AI-Powered Search**: Smart recommendations based on user preferences
- **Verified Listings**: All listings are verified for authenticity
- **Secure Payments**: Multiple payment options including mobile money
- **Multi-Currency Support**: Support for GHS and other African currencies
- **Real-time Messaging**: Chat with owners and renters
- **Booking Management**: Easy booking and reservation system
- **Review System**: Rate and review listings
- **Multi-Language Support**: Available in multiple African languages
- **Mobile-First Design**: Optimized for mobile devices

## 🛠️ Development Guidelines

### Adding New Components

1. **Web Components** (shadcn/ui style):
   ```tsx
   // apps/web/components/ui/new-component.tsx
   import { cn } from "@/lib/utils";
   
   export function NewComponent({ className, ...props }) {
     return <div className={cn("base-classes", className)} {...props} />;
   }
   ```

2. **Shared Types**:
   ```typescript
   // packages/types/src/new-type.ts
   export interface NewType {
     id: string;
     // ... fields
   }
   ```

3. **Shared Utilities**:
   ```typescript
   // packages/utils/src/new-util.ts
   export function newUtility() {
     // ... implementation
   }
   ```

### Workspace Dependencies

To use a workspace package in an app:

```json
{
  "dependencies": {
    "@rent360/types": "workspace:*",
    "@rent360/utils": "workspace:*"
  }
}
```

## 🌐 Deployment

### Web App (Vercel)
```bash
cd apps/web
vercel deploy
```

### Mobile App
```bash
cd apps/mobile
npx eas build --platform all
```

## 📝 Environment Variables

### Web App
See `apps/web/.env.example` for required environment variables.

Key variables:
- `DATABASE_URL`: Database connection string
- `NEXTAUTH_URL`: NextAuth.js URL
- `NEXTAUTH_SECRET`: NextAuth.js secret
- `PAYSTACK_PUBLIC_KEY`: Payment gateway key
- `CLOUDINARY_CLOUD_NAME`: Cloud storage config

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 👥 Team

Built with ❤️ for Africa

## 🔗 Links

- [Documentation](docs/)
- [Issue Tracker](https://github.com/salim928/rent360-africa/issues)
- [Changelog](CHANGELOG.md)

## 📞 Support

For support, email support@rent360africa.com or join our Slack channel.

---

**Note**: This is a development version. For production deployment, ensure all security measures and environment variables are properly configured.
