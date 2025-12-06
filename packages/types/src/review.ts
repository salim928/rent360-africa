// Review Types
export interface Review {
  id: string;
  listingId: string;
  bookingId: string;
  reviewerId: string;
  revieweeId: string;
  rating: number; // 1-5
  comment: string;
  images?: string[];
  createdAt: Date;
  updatedAt: Date;
  // Response from owner
  response?: {
    comment: string;
    createdAt: Date;
  };
  helpful?: number; // count of helpful votes
}

export interface RatingBreakdown {
  overall: number;
  cleanliness?: number;
  communication?: number;
  accuracy?: number;
  location?: number;
  value?: number;
}
