"use client";

import { ListingCard } from "@/components/marketplace/listing-card";
import { SearchBar } from "@/components/marketplace/search-bar";
import { CategorySelector } from "@/components/marketplace/category-selector";
import { useState } from "react";

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>();

  // Sample listing data
  const sampleListings = [
    {
      id: "1",
      title: "Modern 2BR Apartment in Accra",
      price: 2500,
      currency: "GHS",
      period: "month",
      location: "East Legon, Accra",
      rating: 4.8,
      reviewCount: 24,
      image: "/placeholder-property.jpg",
      category: "Properties",
      isVerified: true,
    },
    {
      id: "2",
      title: "Toyota Corolla 2020",
      price: 300,
      currency: "GHS",
      period: "day",
      location: "Osu, Accra",
      rating: 4.9,
      reviewCount: 45,
      image: "/placeholder-car.jpg",
      category: "Vehicles",
      isVerified: true,
    },
    {
      id: "3",
      title: "Event Tent & Chairs Package",
      price: 500,
      currency: "GHS",
      period: "day",
      location: "Tema, Greater Accra",
      rating: 4.7,
      reviewCount: 18,
      image: "/placeholder-event.jpg",
      category: "Events",
      isVerified: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Explore Rentals</h1>
        <SearchBar />
      </div>

      <div className="mb-8">
        <CategorySelector
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      <div className="mb-4 flex items-center justify-between">
        <p className="text-muted-foreground">
          {sampleListings.length} listings found
        </p>
        <select className="border rounded-md px-3 py-2 text-sm">
          <option>Most Relevant</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleListings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
    </div>
  );
}
