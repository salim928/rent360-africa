"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Home as HomeIcon,
  Car,
  Wrench,
  Calendar,
  Search,
  MapPin,
  Star,
  Shield,
  Zap,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    icon: HomeIcon,
    name: "Properties",
    description: "Apartments, houses, commercial spaces",
    count: "5,000+",
  },
  {
    icon: Car,
    name: "Vehicles",
    description: "Cars, motorbikes, trucks",
    count: "2,500+",
  },
  {
    icon: Wrench,
    name: "Equipment",
    description: "Heavy machinery, tools",
    count: "1,200+",
  },
  {
    icon: Calendar,
    name: "Events",
    description: "Tents, chairs, sound systems",
    count: "800+",
  },
];

const features = [
  {
    icon: Shield,
    title: "Verified Listings",
    description: "All listings are verified for your safety and security",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    description: "Book instantly with our streamlined process",
  },
  {
    icon: TrendingUp,
    title: "AI-Powered Pricing",
    description: "Get the best deals with our smart pricing engine",
  },
  {
    icon: MapPin,
    title: "Pan-African Coverage",
    description: "Find rentals across all major African cities",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="text-primary"
            >
              <HomeIcon className="h-6 w-6" />
            </motion.div>
            <span className="text-xl font-bold">Rent360 Africa</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/properties"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Properties
            </Link>
            <Link
              href="/vehicles"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Vehicles
            </Link>
            <Link
              href="/equipment"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Equipment
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Host Dashboard
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button>List Your Property</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Rent Anything, Anywhere in{" "}
              <span className="text-primary">Africa</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Your AI-powered marketplace for properties, vehicles, equipment,
              and events. One platform for all your rental needs.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto max-w-2xl"
            >
              <div className="flex gap-2 rounded-lg border bg-white p-2 shadow-lg">
                <Input
                  placeholder="What are you looking for?"
                  className="flex-1 border-0 focus-visible:ring-0"
                />
                <Input
                  placeholder="Location"
                  className="w-40 border-0 focus-visible:ring-0"
                />
                <Button size="lg">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-12 text-center text-3xl font-bold">
              Browse by Category
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="cursor-pointer transition-shadow hover:shadow-lg">
                      <CardHeader>
                        <Icon className="mb-2 h-10 w-10 text-primary" />
                        <CardTitle>{category.name}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm font-semibold text-primary">
                          {category.count} listings
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-12 text-center text-3xl font-bold">
              Why Choose Rent360 Africa?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="mb-4 rounded-full bg-primary/10 p-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl bg-primary p-12 text-center text-primary-foreground"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Start Renting?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Join thousands of renters and hosts across Africa
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary">
                Browse Listings
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent">
                Become a Host
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-semibold">About Rent360</h3>
              <p className="text-sm text-muted-foreground">
                Pan-African AI-powered rental marketplace for properties,
                vehicles, and equipment.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">For Renters</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#">Browse Listings</Link>
                </li>
                <li>
                  <Link href="#">How It Works</Link>
                </li>
                <li>
                  <Link href="#">Safety Tips</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">For Hosts</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#">List Your Property</Link>
                </li>
                <li>
                  <Link href="#">Host Dashboard</Link>
                </li>
                <li>
                  <Link href="#">Pricing Guide</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#">Help Center</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Rent360 Africa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
