"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Check } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "@rent360/utils";

interface ListingCardProps {
  id: string;
  title: string;
  price: number;
  currency?: string;
  period?: string;
  location: string;
  rating?: number;
  reviewCount?: number;
  image: string;
  category: string;
  isVerified?: boolean;
  onFavorite?: (id: string) => void;
}

export function ListingCard({
  id,
  title,
  price,
  currency = "GHS",
  period = "month",
  location,
  rating,
  reviewCount,
  image,
  category,
  isVerified = false,
}: ListingCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg cursor-pointer group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isVerified && (
          <Badge className="absolute top-2 right-2 bg-primary gap-1">
            <Check className="h-3 w-3" />
            Verified
          </Badge>
        )}
        <Badge variant="secondary" className="absolute top-2 left-2">
          {category}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1 mb-2">{title}</h3>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
          <MapPin className="h-4 w-4" />
          <span className="line-clamp-1">{location}</span>
        </div>
        {rating && (
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating.toFixed(1)}</span>
            {reviewCount && (
              <span className="text-muted-foreground">({reviewCount})</span>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div>
          <p className="text-2xl font-bold text-primary">
            {formatCurrency(price, currency)}
          </p>
          <p className="text-sm text-muted-foreground">per {period}</p>
        </div>
        <Button>View Details</Button>
      </CardFooter>
    </Card>
  );
}
