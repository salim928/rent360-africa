"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PriceDisplayProps {
  amount: number;
  currency?: string;
  period?: string;
  size?: "sm" | "md" | "lg";
  showBadge?: boolean;
}

export function PriceDisplay({
  amount,
  currency = "GHS",
  period,
  size = "md",
  showBadge = false,
}: PriceDisplayProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  };

  const formattedPrice = new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: currency,
  }).format(amount);

  return (
    <div className="flex items-baseline gap-2">
      <span className={`font-bold text-primary ${sizeClasses[size]}`}>
        {formattedPrice}
      </span>
      {period && (
        <span className="text-sm text-muted-foreground">/ {period}</span>
      )}
      {showBadge && (
        <Badge variant="secondary" className="ml-2">
          Best Value
        </Badge>
      )}
    </div>
  );
}
