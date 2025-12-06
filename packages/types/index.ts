// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  avatar?: string;
  role: UserRole;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  RENTER = "RENTER",
  HOST = "HOST",
  ADMIN = "ADMIN",
}

// Listing Types
export interface Listing {
  id: string;
  title: string;
  description: string;
  category: ListingCategory;
  subcategory?: string;
  ownerId: string;
  images: string[];
  price: number;
  currency: string;
  location: Location;
  amenities?: string[];
  specifications?: Record<string, any>;
  availability: boolean;
  rating: number;
  reviewCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export enum ListingCategory {
  PROPERTY = "PROPERTY",
  VEHICLE = "VEHICLE",
  EQUIPMENT = "EQUIPMENT",
  EVENT = "EVENT",
}

// Property specific
export interface PropertyListing extends Listing {
  category: ListingCategory.PROPERTY;
  propertyType: PropertyType;
  bedrooms?: number;
  bathrooms?: number;
  squareMeters?: number;
  furnished?: boolean;
}

export enum PropertyType {
  APARTMENT = "APARTMENT",
  HOUSE = "HOUSE",
  STUDENT_HOUSING = "STUDENT_HOUSING",
  COMMERCIAL = "COMMERCIAL",
  GUEST_HOUSE = "GUEST_HOUSE",
}

// Vehicle specific
export interface VehicleListing extends Listing {
  category: ListingCategory.VEHICLE;
  vehicleType: VehicleType;
  make: string;
  model: string;
  year: number;
  transmission?: string;
  fuelType?: string;
  seats?: number;
  hasGPS?: boolean;
}

export enum VehicleType {
  CAR = "CAR",
  MOTORBIKE = "MOTORBIKE",
  TRUCK = "TRUCK",
  TRICYCLE = "TRICYCLE",
}

// Equipment specific
export interface EquipmentListing extends Listing {
  category: ListingCategory.EQUIPMENT;
  equipmentType: EquipmentType;
  brand?: string;
  model?: string;
  condition?: string;
}

export enum EquipmentType {
  HEAVY_MACHINERY = "HEAVY_MACHINERY",
  TOOLS = "TOOLS",
  EVENT_EQUIPMENT = "EVENT_EQUIPMENT",
}

// Location
export interface Location {
  address: string;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  region?: string;
}

// Booking Types
export interface Booking {
  id: string;
  listingId: string;
  renterId: string;
  ownerId: string;
  startDate: Date;
  endDate: Date;
  status: BookingStatus;
  totalPrice: number;
  currency: string;
  paymentStatus: PaymentStatus;
  createdAt: Date;
  updatedAt: Date;
}

export enum BookingStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export enum PaymentStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  REFUNDED = "REFUNDED",
  FAILED = "FAILED",
}

// Search & Filter Types
export interface SearchFilters {
  category?: ListingCategory;
  location?: string;
  priceMin?: number;
  priceMax?: number;
  startDate?: Date;
  endDate?: Date;
  latitude?: number;
  longitude?: number;
  radius?: number;
  amenities?: string[];
}

// Dashboard Analytics
export interface DashboardStats {
  totalRevenue: number;
  totalBookings: number;
  activeListings: number;
  averageRating: number;
  occupancyRate?: number;
}

// Message Types
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  bookingId?: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

// Review Types
export interface Review {
  id: string;
  listingId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}
