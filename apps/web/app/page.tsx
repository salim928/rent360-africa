"use client";

import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/marketplace/search-bar";
import { CategorySelector } from "@/components/marketplace/category-selector";
import {
  Home,
  Car,
  Wrench,
  Calendar,
  Shield,
  CreditCard,
  CheckCircle,
  TrendingUp,
  Users,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function LandingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R3</span>
            </div>
            <span className="text-xl font-bold">Rent360 Africa</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm hover:text-primary">
              Features
            </a>
            <a href="#how-it-works" className="text-sm hover:text-primary">
              How It Works
            </a>
            <a href="#categories" className="text-sm hover:text-primary">
              Categories
            </a>
            <Button variant="ghost">Sign In</Button>
            <Button>List Your Rental</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Your Perfect Rental
              <span className="text-primary"> Across Africa</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              AI-powered marketplace for properties, vehicles, equipment, and
              events. Secure, verified, and trusted by thousands.
            </p>
            <div className="max-w-3xl mx-auto">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            What Are You Looking For?
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Explore our wide range of rental categories
          </p>
          <div className="mb-8">
            <CategorySelector
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rentalCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.title}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-muted-foreground mb-12">
            Get started in three simple steps
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {index + 1}
                  </div>
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why Choose Rent360 Africa?
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Built for African markets with features that matter
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">For Renters</h2>
              <p className="mb-6 opacity-90">
                Find verified listings, secure payments, and 24/7 support across
                multiple African countries.
              </p>
              <Button variant="secondary" size="lg">
                Start Searching <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">For Owners</h2>
              <p className="mb-6 opacity-90">
                List your properties, vehicles, or equipment and reach thousands
                of potential renters.
              </p>
              <Button variant="secondary" size="lg">
                List Your Rental <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">R3</span>
                </div>
                <span className="font-bold">Rent360 Africa</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted Pan-African rental marketplace
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Trust & Safety
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Rent360 Africa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const rentalCategories = [
  {
    title: "Properties",
    description: "Homes, apartments, commercial spaces, and student housing",
    icon: Home,
  },
  {
    title: "Vehicles",
    description: "Cars, motorcycles, trucks, and logistics vehicles",
    icon: Car,
  },
  {
    title: "Equipment",
    description: "Heavy machinery, tools, and construction equipment",
    icon: Wrench,
  },
  {
    title: "Events",
    description: "Venues, tents, chairs, and event equipment",
    icon: Calendar,
  },
];

const steps = [
  {
    title: "Search & Browse",
    description:
      "Use our AI-powered search to find exactly what you need in your location",
    icon: Globe,
  },
  {
    title: "Connect & Book",
    description:
      "Chat with owners, view details, and book securely through our platform",
    icon: Users,
  },
  {
    title: "Enjoy & Review",
    description:
      "Complete your rental and leave a review to help the community",
    icon: CheckCircle,
  },
];

const features = [
  {
    title: "AI-Powered Search",
    description:
      "Smart recommendations based on your preferences and search history",
    icon: TrendingUp,
  },
  {
    title: "Secure Payments",
    description:
      "Multiple payment options including mobile money and local payment methods",
    icon: CreditCard,
  },
  {
    title: "Verified Listings",
    description: "All listings are verified for authenticity and quality",
    icon: CheckCircle,
  },
  {
    title: "Trust & Safety",
    description: "Identity verification and secure messaging for peace of mind",
    icon: Shield,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock customer support in multiple languages",
    icon: Users,
  },
  {
    title: "Pan-African",
    description: "Serving multiple African countries with local expertise",
    icon: Globe,
  },
];

