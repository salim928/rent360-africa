"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Home as HomeIcon,
  MapPin,
  Star,
  Bed,
  Bath,
  Square,
  Filter,
  ChevronLeft,
} from "lucide-react";
import { motion } from "framer-motion";

// Mock data for properties
const properties = [
  {
    id: "1",
    title: "Modern 3BR Apartment in East Legon",
    location: "East Legon, Accra",
    price: 2500,
    currency: "GHS",
    bedrooms: 3,
    bathrooms: 2,
    size: 120,
    rating: 4.8,
    reviews: 24,
    image: "https://via.placeholder.com/400x300?text=Property+1",
    featured: true,
  },
  {
    id: "2",
    title: "Cozy 2BR House in Cantonments",
    location: "Cantonments, Accra",
    price: 3000,
    currency: "GHS",
    bedrooms: 2,
    bathrooms: 2,
    size: 95,
    rating: 4.6,
    reviews: 18,
    image: "https://via.placeholder.com/400x300?text=Property+2",
    featured: false,
  },
  {
    id: "3",
    title: "Luxury 4BR Villa with Pool",
    location: "Airport Residential, Accra",
    price: 5000,
    currency: "GHS",
    bedrooms: 4,
    bathrooms: 3,
    size: 200,
    rating: 4.9,
    reviews: 31,
    image: "https://via.placeholder.com/400x300?text=Property+3",
    featured: true,
  },
  {
    id: "4",
    title: "Student Housing - 1BR Studio",
    location: "Legon, Accra",
    price: 800,
    currency: "GHS",
    bedrooms: 1,
    bathrooms: 1,
    size: 45,
    rating: 4.4,
    reviews: 12,
    image: "https://via.placeholder.com/400x300?text=Property+4",
    featured: false,
  },
  {
    id: "5",
    title: "Commercial Office Space",
    location: "Ridge, Accra",
    price: 4000,
    currency: "GHS",
    bedrooms: 0,
    bathrooms: 2,
    size: 150,
    rating: 4.7,
    reviews: 8,
    image: "https://via.placeholder.com/400x300?text=Property+5",
    featured: false,
  },
  {
    id: "6",
    title: "Furnished 2BR Guest House",
    location: "Osu, Accra",
    price: 1800,
    currency: "GHS",
    bedrooms: 2,
    bathrooms: 1,
    size: 80,
    rating: 4.5,
    reviews: 19,
    image: "https://via.placeholder.com/400x300?text=Property+6",
    featured: false,
  },
];

export default function PropertiesPage() {
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
              className="text-sm font-medium text-primary"
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

      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center mb-6 text-sm hover:text-primary">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse Properties</h1>
          <p className="text-muted-foreground">
            Find your perfect rental across Africa
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
                    Price Range (GHS)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="Min" type="number" />
                    <Input placeholder="Max" type="number" />
                  </div>
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Bedrooms
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {["Any", "1+", "2+", "3+"].map((bed) => (
                      <Button
                        key={bed}
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        {bed}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Property Type */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Property Type
                  </label>
                  <div className="space-y-2">
                    {[
                      "Apartment",
                      "House",
                      "Studio",
                      "Commercial",
                      "Guest House",
                    ].map((type) => (
                      <label key={type} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Amenities
                  </label>
                  <div className="space-y-2">
                    {["AC", "WiFi", "Parking", "Pool", "Security"].map(
                      (amenity) => (
                        <label
                          key={amenity}
                          className="flex items-center space-x-2"
                        >
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{amenity}</span>
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

          {/* Properties Grid */}
          <div>
            {/* Search and Sort Bar */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input placeholder="Search properties..." className="w-full" />
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
              Showing {properties.length} properties
            </p>

            {/* Properties Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {properties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                    <Link href={`/properties/${property.id}`}>
                      <div className="relative aspect-[4/3] bg-gray-200">
                        {property.featured && (
                          <div className="absolute top-2 left-2 z-10 rounded-md bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                            Featured
                          </div>
                        )}
                        <div className="flex h-full items-center justify-center text-sm text-gray-500">
                          Property Image
                        </div>
                      </div>
                    </Link>
                    <CardContent className="p-4">
                      <Link href={`/properties/${property.id}`}>
                        <h3 className="mb-2 font-semibold line-clamp-1 hover:text-primary">
                          {property.title}
                        </h3>
                      </Link>
                      <div className="mb-2 flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4" />
                        {property.location}
                      </div>
                      <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
                        {property.bedrooms > 0 && (
                          <div className="flex items-center">
                            <Bed className="mr-1 h-4 w-4" />
                            {property.bedrooms}
                          </div>
                        )}
                        <div className="flex items-center">
                          <Bath className="mr-1 h-4 w-4" />
                          {property.bathrooms}
                        </div>
                        <div className="flex items-center">
                          <Square className="mr-1 h-4 w-4" />
                          {property.size}m²
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold">
                            {property.currency} {property.price}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            /month
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">
                            {property.rating}
                          </span>
                          <span className="ml-1 text-sm text-muted-foreground">
                            ({property.reviews})
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full" asChild>
                        <Link href={`/properties/${property.id}`}>
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
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
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
