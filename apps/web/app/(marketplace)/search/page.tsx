"use client";

import { SearchBar } from "@/components/marketplace/search-bar";
import { ListingCard } from "@/components/marketplace/listing-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SlidersHorizontal, Grid, List } from "lucide-react";
import { useState } from "react";

export default function SearchPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Sample search results
  const results = [
    {
      id: "1",
      title: "Modern 2BR Apartment in East Legon",
      category: "Property" as const,
      price: 2500,
      period: "month",
      location: "East Legon, Accra",
      rating: 4.8,
      reviewCount: 24,
      image: "/placeholder.svg",
      isVerified: true,
    },
    {
      id: "2",
      title: "Luxury Villa with Pool",
      category: "Property" as const,
      price: 5000,
      period: "month",
      location: "Airport Residential, Accra",
      rating: 4.9,
      reviewCount: 42,
      image: "/placeholder.svg",
      isVerified: true,
    },
    {
      id: "3",
      title: "Cozy Studio Apartment",
      category: "Property" as const,
      price: 1200,
      period: "month",
      location: "Osu, Accra",
      rating: 4.5,
      reviewCount: 18,
      image: "/placeholder.svg",
      isVerified: false,
    },
    {
      id: "4",
      title: "Toyota Camry 2020",
      category: "Vehicle" as const,
      price: 150,
      period: "day",
      location: "Airport, Accra",
      rating: 4.7,
      reviewCount: 31,
      image: "/placeholder.svg",
      isVerified: true,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Search Results</h1>
        <SearchBar />
      </div>

      {/* Filters and View Options */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
          <Select defaultValue="relevance">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Most Relevant</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("grid")}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-sm text-muted-foreground mb-4">
        {results.length} results found
      </p>

      {/* Results Grid/List */}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-4"
        }
      >
        {results.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <Button variant="outline" disabled>
          Previous
        </Button>
        <Button variant="default">1</Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">Next</Button>
      </div>
    </div>
  );
}
