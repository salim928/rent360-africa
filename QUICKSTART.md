# Rent360 Africa - Quick Start Guide

This guide will help you get the Rent360 Africa platform up and running in minutes.

## Prerequisites

Before you begin, ensure you have:
- **Node.js** version 20.0.0 or higher
- **pnpm** version 9.1.0 (we'll install this if you don't have it)
- **Git** installed on your machine

## Step 1: Installation

### Install pnpm (if not already installed)

```bash
npm install -g pnpm@9.1.0
```

### Clone the Repository

```bash
git clone https://github.com/salim928/rent360-africa.git
cd rent360-africa
```

### Install Dependencies

```bash
pnpm install
```

This will install all dependencies for the web app, mobile app, and shared packages.

## Step 2: Running the Applications

### Option A: Run Everything

To run both web and mobile apps simultaneously:

```bash
pnpm dev
```

### Option B: Run Web App Only

To run just the Next.js web application:

```bash
pnpm dev:web
```

Then open your browser to:
- **http://localhost:3000**

You should see the Rent360 Africa homepage!

### Option C: Run Mobile App Only

To run just the Expo mobile app:

```bash
pnpm dev:mobile
```

Then:
1. Press `i` to open iOS Simulator (Mac only)
2. Press `a` to open Android Emulator
3. Scan the QR code with Expo Go app on your phone

## Step 3: Explore the Platform

### Web Application

Navigate to these pages in your browser:

1. **Homepage**: http://localhost:3000
   - Hero section with search
   - Browse categories
   - View features

2. **Properties Listing**: http://localhost:3000/properties
   - Browse available properties
   - Use filters to search
   - View property details

3. **Host Dashboard**: http://localhost:3000/dashboard
   - View statistics
   - Manage bookings
   - Track revenue

### Mobile Application

On your mobile device or emulator:
1. Open the app
2. Browse categories
3. Use search functionality
4. View featured listings

## Step 4: Making Changes

### Edit the Web Homepage

Open `apps/web/src/app/page.tsx` and make changes. The page will hot-reload automatically.

### Edit the Mobile Home Screen

Open `apps/mobile/app/index.tsx` and make changes. The app will reload automatically.

### Add New Shared Types

Add types to `packages/types/index.ts` - they'll be available in both web and mobile apps.

## Common Commands

```bash
# Development
pnpm dev              # Run all apps
pnpm dev:web          # Run web app only
pnpm dev:mobile       # Run mobile app only

# Building
pnpm build            # Build all apps
pnpm build:web        # Build web app only

# Code Quality
pnpm lint             # Lint all code
pnpm typecheck        # Type check all code
pnpm format           # Format code with Prettier

# Cleanup
pnpm clean            # Remove build artifacts
```

## Project Structure Overview

```
rent360-africa/
├── apps/
│   ├── web/                    # Next.js web app
│   │   ├── src/app/           # Pages and routes
│   │   ├── src/components/    # React components
│   │   └── src/lib/           # Utilities
│   └── mobile/                 # Expo mobile app
│       ├── app/               # Screens
│       └── components/        # React Native components
├── packages/
│   ├── types/                  # Shared TypeScript types
│   ├── utils/                  # Shared utility functions
│   └── config/                 # Shared configurations
└── package.json               # Root package
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use:
```bash
# Find and kill the process using port 3000
lsof -ti:3000 | xargs kill -9
```

### Dependencies Not Installing

Try clearing the cache:
```bash
pnpm store prune
rm -rf node_modules
pnpm install
```

### Build Errors

Clear build cache and rebuild:
```bash
pnpm clean
pnpm build
```

### Mobile App Not Starting

Reset Expo:
```bash
cd apps/mobile
rm -rf .expo node_modules
pnpm install
pnpm dev
```

## Next Steps

1. **Read the Technical Documentation**: See `TECHNICAL_DOCS.md` for detailed information
2. **Explore the Code**: Check out the existing pages and components
3. **Add New Features**: Start building out the remaining modules
4. **Customize**: Update branding, colors, and content to match your needs

## Need Help?

- Check the [README.md](./README.md) for more details
- Review [TECHNICAL_DOCS.md](./TECHNICAL_DOCS.md) for architecture info
- Create an issue on GitHub for bugs or questions

## What's Included

✅ **Web Application** (Next.js 15)
- Homepage with hero and categories
- Properties listing page with filters
- Host dashboard with analytics
- Responsive design
- Framer Motion animations

✅ **Mobile Application** (Expo 54)
- Home screen with categories
- Search interface
- Responsive layouts
- NativeWind styling

✅ **Shared Packages**
- Type definitions for all entities
- Utility functions for common tasks
- Shared configurations

✅ **Developer Experience**
- Hot reload for fast development
- TypeScript for type safety
- ESLint and Prettier for code quality
- Turborepo for fast builds

## Building for Production

### Web Application

```bash
pnpm build:web
```

The build output will be in `apps/web/.next`

### Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```

### Mobile Application

```bash
cd apps/mobile

# Install EAS CLI
npm i -g eas-cli

# Login to Expo
eas login

# Configure build
eas build:configure

# Build for production
eas build --platform all
```

---

**Happy Coding! 🚀**

For more information, visit our [GitHub repository](https://github.com/salim928/rent360-africa).
