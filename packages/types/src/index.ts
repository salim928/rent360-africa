// Export all types
export * from "./user";
export * from "./listing";
export * from "./booking";
export * from "./review";
export * from "./payment";
export * from "./message";

// Additional shared types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
  meta?: {
    page?: number;
    totalPages?: number;
    totalItems?: number;
  };
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface SearchFilters {
  category?: string;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  [key: string]: any;
}
