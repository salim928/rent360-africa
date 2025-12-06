"use client";

import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface VerifiedBadgeProps {
  isVerified: boolean;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function VerifiedBadge({
  isVerified,
  size = "md",
  showText = true,
}: VerifiedBadgeProps) {
  if (!isVerified) return null;

  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  return (
    <Badge className="bg-primary gap-1">
      <Check className={sizeClasses[size]} />
      {showText && "Verified"}
    </Badge>
  );
}
