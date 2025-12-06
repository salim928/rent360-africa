"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Home,
  Car,
  Wrench,
  Calendar,
  Building,
  Truck,
  Bike,
  Settings,
  PartyPopper,
} from "lucide-react";

export default function CategoriesPage() {
  const categories = [
    {
      id: "properties",
      title: "Properties",
      icon: Home,
      description: "Houses, apartments, and commercial spaces",
      count: 1234,
      subcategories: [
        "Homes & Apartments",
        "Short Stays",
        "Student Housing",
        "Commercial Real Estate",
      ],
    },
    {
      id: "vehicles",
      title: "Vehicles",
      icon: Car,
      description: "Cars, motorcycles, trucks, and logistics",
      count: 856,
      subcategories: [
        "Cars",
        "Motorbikes/Tricycles",
        "Trucks & Logistics",
      ],
    },
    {
      id: "equipment",
      title: "Equipment",
      icon: Wrench,
      description: "Heavy equipment, tools, and machinery",
      count: 432,
      subcategories: ["Heavy Equipment", "Tools & Machinery", "Event Equipment"],
    },
    {
      id: "events",
      title: "Events",
      icon: Calendar,
      description: "Event venues and equipment rentals",
      count: 289,
      subcategories: ["Event Venues", "Event Equipment"],
    },
  ];

  const getIcon = (Icon: any) => <Icon className="h-12 w-12 text-primary" />;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Browse Categories</h1>
        <p className="text-lg text-muted-foreground">
          Explore our wide range of rental categories across Africa
        </p>
      </div>

      {/* Main Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {categories.map((category) => (
          <Link key={category.id} href={`/marketplace?category=${category.id}`}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  {getIcon(category.icon)}
                  <h3 className="font-bold text-xl mt-4 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <Badge variant="secondary">{category.count} listings</Badge>
                  <div className="mt-4 space-y-1 w-full">
                    {category.subcategories.map((sub, index) => (
                      <p key={index} className="text-xs text-muted-foreground">
                        • {sub}
                      </p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Featured Subcategories */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Popular Subcategories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { name: "Homes & Apartments", icon: Building, count: 678 },
            { name: "Cars", icon: Car, count: 523 },
            { name: "Motorbikes", icon: Bike, count: 234 },
            { name: "Trucks", icon: Truck, count: 189 },
            { name: "Heavy Equipment", icon: Settings, count: 156 },
            { name: "Short Stays", icon: Home, count: 445 },
            { name: "Event Venues", icon: PartyPopper, count: 178 },
            { name: "Tools & Machinery", icon: Wrench, count: 198 },
            { name: "Student Housing", icon: Building, count: 267 },
            { name: "Commercial", icon: Building, count: 123 },
          ].map((sub, index) => (
            <Link key={index} href={`/marketplace?subcategory=${sub.name}`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <sub.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="font-medium text-sm mb-1">{sub.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {sub.count} items
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Location-based Browse */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Browse by Location</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: "Accra", count: 1234 },
            { name: "Lagos", count: 987 },
            { name: "Nairobi", count: 654 },
            { name: "Johannesburg", count: 543 },
            { name: "Cairo", count: 432 },
            { name: "Cape Town", count: 389 },
            { name: "Abidjan", count: 278 },
            { name: "Dar es Salaam", count: 234 },
            { name: "Addis Ababa", count: 198 },
            { name: "Casablanca", count: 176 },
            { name: "Dakar", count: 154 },
            { name: "Kampala", count: 132 },
          ].map((location, index) => (
            <Link key={index} href={`/marketplace?location=${location.name}`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <p className="font-medium">{location.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {location.count} listings
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
