"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Home as HomeIcon,
  MapPin,
  Star,
  Users,
  Fuel,
  Settings,
  Filter,
  ChevronLeft,
  Navigation,
} from "lucide-react";
import { motion } from "framer-motion";

// Mock data for vehicles
const vehicles = [
  {
    id: "1",
    title: "Toyota Camry 2022 - Automatic",
    location: "Osu, Accra",
    price: 150,
    priceUnit: "day",
    currency: "GHS",
    make: "Toyota",
    model: "Camry",
    year: 2022,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 5,
    rating: 4.7,
    reviews: 15,
    hasGPS: true,
    image: "https://via.placeholder.com/400x300?text=Toyota+Camry",
    featured: true,
  },
  {
    id: "2",
    title: "Honda CR-V 2023 - SUV",
    location: "East Legon, Accra",
    price: 200,
    priceUnit: "day",
    currency: "GHS",
    make: "Honda",
    model: "CR-V",
    year: 2023,
    transmission: "Automatic",
    fuelType: "Hybrid",
    seats: 7,
    rating: 4.8,
    reviews: 22,
    hasGPS: true,
    image: "https://via.placeholder.com/400x300?text=Honda+CR-V",
    featured: true,
  },
  {
    id: "3",
    title: "Mercedes-Benz E-Class 2023",
    location: "Airport Residential, Accra",
    price: 350,
    priceUnit: "day",
    currency: "GHS",
    make: "Mercedes-Benz",
    model: "E-Class",
    year: 2023,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 5,
    rating: 4.9,
    reviews: 18,
    hasGPS: true,
    image: "https://via.placeholder.com/400x300?text=Mercedes+E-Class",
    featured: false,
  },
  {
    id: "4",
    title: "Nissan Patrol 2022 - 4WD",
    location: "Cantonments, Accra",
    price: 280,
    priceUnit: "day",
    currency: "GHS",
    make: "Nissan",
    model: "Patrol",
    year: 2022,
    transmission: "Automatic",
    fuelType: "Diesel",
    seats: 8,
    rating: 4.6,
    reviews: 12,
    hasGPS: true,
    image: "https://via.placeholder.com/400x300?text=Nissan+Patrol",
    featured: false,
  },
  {
    id: "5",
    title: "Toyota Hiace 2021 - Minibus",
    location: "Tema, Accra",
    price: 250,
    priceUnit: "day",
    currency: "GHS",
    make: "Toyota",
    model: "Hiace",
    year: 2021,
    transmission: "Manual",
    fuelType: "Diesel",
    seats: 14,
    rating: 4.5,
    reviews: 9,
    hasGPS: false,
    image: "https://via.placeholder.com/400x300?text=Toyota+Hiace",
    featured: false,
  },
  {
    id: "6",
    title: "BMW X5 2023 - Luxury SUV",
    location: "Ridge, Accra",
    price: 400,
    priceUnit: "day",
    currency: "GHS",
    make: "BMW",
    model: "X5",
    year: 2023,
    transmission: "Automatic",
    fuelType: "Hybrid",
    seats: 7,
    rating: 4.9,
    reviews: 25,
    hasGPS: true,
    image: "https://via.placeholder.com/400x300?text=BMW+X5",
    featured: true,
  },
];

export default function VehiclesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Rent360 Africa</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/properties"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Properties
            </Link>
            <Link href="/vehicles" className="text-sm font-medium text-primary">
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
            <Button>List Your Vehicle</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center mb-6 text-sm hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse Vehicles</h1>
          <p className="text-muted-foreground">
            Find the perfect vehicle for your journey
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Filters Sidebar */}
          <aside className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Filters</h2>
                <Button variant="ghost" size="sm">
                  Clear
                </Button>
              </div>

              <div className="space-y-4">
                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Daily Rate (GHS)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="Min" type="number" />
                    <Input placeholder="Max" type="number" />
                  </div>
                </div>

                {/* Vehicle Type */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Vehicle Type
                  </label>
                  <div className="space-y-2">
                    {["Sedan", "SUV", "Minivan", "Luxury", "4WD", "Electric"].map(
                      (type) => (
                        <label key={type} className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{type}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                {/* Transmission */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Transmission
                  </label>
                  <div className="space-y-2">
                    {["Automatic", "Manual"].map((trans) => (
                      <label key={trans} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">{trans}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Fuel Type */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Fuel Type
                  </label>
                  <div className="space-y-2">
                    {["Petrol", "Diesel", "Hybrid", "Electric"].map((fuel) => (
                      <label key={fuel} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">{fuel}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Seats */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Seats
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["4+", "5+", "7+"].map((seats) => (
                      <Button key={seats} variant="outline" size="sm">
                        {seats}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Features
                  </label>
                  <div className="space-y-2">
                    {["GPS", "AC", "Bluetooth", "USB", "Child Seat"].map(
                      (feature) => (
                        <label
                          key={feature}
                          className="flex items-center space-x-2"
                        >
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{feature}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>
              </div>

              <Button className="w-full mt-6">
                <Filter className="mr-2 h-4 w-4" />
                Apply Filters
              </Button>
            </Card>
          </aside>

          {/* Vehicles Grid */}
          <div>
            {/* Search and Sort Bar */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input placeholder="Search vehicles..." className="w-full" />
              </div>
              <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>Sort by: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
                <option>Newest</option>
              </select>
            </div>

            {/* Results Count */}
            <p className="mb-4 text-sm text-muted-foreground">
              Showing {vehicles.length} vehicles
            </p>

            {/* Vehicles Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {vehicles.map((vehicle, index) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                    <Link href={`/vehicles/${vehicle.id}`}>
                      <div className="relative aspect-[4/3] bg-gray-200">
                        {vehicle.featured && (
                          <Badge className="absolute top-2 left-2 z-10">
                            Featured
                          </Badge>
                        )}
                        {vehicle.hasGPS && (
                          <Badge
                            variant="secondary"
                            className="absolute top-2 right-2 z-10"
                          >
                            <Navigation className="mr-1 h-3 w-3" />
                            GPS
                          </Badge>
                        )}
                        <div className="flex h-full items-center justify-center text-sm text-gray-500">
                          Vehicle Image
                        </div>
                      </div>
                    </Link>
                    <CardContent className="p-4">
                      <Link href={`/vehicles/${vehicle.id}`}>
                        <h3 className="mb-2 font-semibold line-clamp-1 hover:text-primary">
                          {vehicle.title}
                        </h3>
                      </Link>
                      <div className="mb-2 flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4" />
                        {vehicle.location}
                      </div>
                      <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Users className="mr-1 h-4 w-4" />
                          {vehicle.seats}
                        </div>
                        <div className="flex items-center">
                          <Settings className="mr-1 h-4 w-4" />
                          {vehicle.transmission}
                        </div>
                        <div className="flex items-center">
                          <Fuel className="mr-1 h-4 w-4" />
                          {vehicle.fuelType}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold">
                            {vehicle.currency} {vehicle.price}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            /{vehicle.priceUnit}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">
                            {vehicle.rating}
                          </span>
                          <span className="ml-1 text-sm text-muted-foreground">
                            ({vehicle.reviews})
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full" asChild>
                        <Link href={`/vehicles/${vehicle.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-primary text-primary-foreground"
              >
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
