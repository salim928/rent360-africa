"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, MapPin } from "lucide-react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  onFilterClick?: () => void;
}

export function SearchBar({ onSearch, onFilterClick }: SearchBarProps) {
  return (
    <div className="flex gap-2 w-full">
      <div className="flex-1 flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for properties, vehicles, equipment..."
            className="pl-10 pr-4"
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </div>
        <div className="relative min-w-[200px]">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Location" className="pl-10 pr-4" />
        </div>
      </div>
      <Button variant="outline" size="icon" onClick={onFilterClick}>
        <SlidersHorizontal className="h-4 w-4" />
      </Button>
      <Button size="lg">Search</Button>
    </div>
  );
}
