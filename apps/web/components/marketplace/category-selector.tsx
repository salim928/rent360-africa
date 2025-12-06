"use client";

import { Button } from "@/components/ui/button";
import {
  Home,
  Car,
  Wrench,
  Calendar,
  Building2,
  Hotel,
  GraduationCap,
  Bike,
  Truck,
} from "lucide-react";

interface CategorySelectorProps {
  selectedCategory?: string;
  onSelectCategory: (category: string) => void;
}

const categories = [
  { id: "homes", label: "Homes & Apartments", icon: Home },
  { id: "short-stays", label: "Short Stays", icon: Hotel },
  { id: "student", label: "Student Housing", icon: GraduationCap },
  { id: "commercial", label: "Commercial", icon: Building2 },
  { id: "cars", label: "Cars", icon: Car },
  { id: "bikes", label: "Motorbikes", icon: Bike },
  { id: "trucks", label: "Trucks & Logistics", icon: Truck },
  { id: "equipment", label: "Equipment", icon: Wrench },
  { id: "events", label: "Event Rentals", icon: Calendar },
];

export function CategorySelector({
  selectedCategory,
  onSelectCategory,
}: CategorySelectorProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => {
        const Icon = category.icon;
        const isSelected = selectedCategory === category.id;
        return (
          <Button
            key={category.id}
            variant={isSelected ? "default" : "outline"}
            className="flex-shrink-0 gap-2"
            onClick={() => onSelectCategory(category.id)}
          >
            <Icon className="h-4 w-4" />
            {category.label}
          </Button>
        );
      })}
    </div>
  );
}
