"use client";

import { Star, StarHalf } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
}

export function RatingStars({
  rating,
  size = "md",
  showValue = false,
}: RatingStarsProps) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={i}
          className={`${sizeClasses[size]} fill-yellow-400 text-yellow-400`}
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          className={`${sizeClasses[size]} fill-yellow-400 text-yellow-400`}
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className={`${sizeClasses[size]} text-gray-300`}
        />
      );
    }

    return stars;
  };

  return (
    <div className="flex items-center gap-1">
      {renderStars()}
      {showValue && (
        <span className="text-sm font-medium ml-1">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}
