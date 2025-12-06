import { Location } from "./user";

// Listing Categories
export enum ListingCategory {
  PROPERTY = "PROPERTY",
  VEHICLE = "VEHICLE",
  EQUIPMENT = "EQUIPMENT",
  EVENT = "EVENT",
}

export enum PropertyType {
  APARTMENT = "APARTMENT",
  HOUSE = "HOUSE",
  GUEST_HOUSE = "GUEST_HOUSE",
  STUDENT_HOUSING = "STUDENT_HOUSING",
  COMMERCIAL = "COMMERCIAL",
}

export enum VehicleType {
  CAR = "CAR",
  MOTORCYCLE = "MOTORCYCLE",
  TRICYCLE = "TRICYCLE",
  TRUCK = "TRUCK",
  HEAVY_EQUIPMENT = "HEAVY_EQUIPMENT",
}

export enum EquipmentType {
  TOOLS = "TOOLS",
  MACHINERY = "MACHINERY",
  EVENT_EQUIPMENT = "EVENT_EQUIPMENT",
  OTHER = "OTHER",
}

export enum ListingStatus {
  DRAFT = "DRAFT",
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BOOKED = "BOOKED",
  SUSPENDED = "SUSPENDED",
}

// Base Listing Interface
export interface BaseListing {
  id: string;
  title: string;
  description: string;
  category: ListingCategory;
  ownerId: string;
  location: Location;
  images: string[];
  price: Price;
  currency: string;
  status: ListingStatus;
  isVerified: boolean;
  rating?: number;
  reviewCount?: number;
  createdAt: Date;
  updatedAt: Date;
  amenities?: string[];
  rules?: string[];
}

export interface Price {
  amount: number;
  period: "HOURLY" | "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";
}

// Property Listing
export interface PropertyListing extends BaseListing {
  category: ListingCategory.PROPERTY;
  propertyType: PropertyType;
  bedrooms?: number;
  bathrooms?: number;
  area?: number; // in square meters
  floor?: number;
  totalFloors?: number;
  furnished: boolean;
  parking?: boolean;
  petFriendly?: boolean;
  utilities?: string[];
}

// Vehicle Listing
export interface VehicleListing extends BaseListing {
  category: ListingCategory.VEHICLE;
  vehicleType: VehicleType;
  make: string;
  model: string;
  year: number;
  color?: string;
  transmission?: "MANUAL" | "AUTOMATIC";
  fuelType?: "PETROL" | "DIESEL" | "ELECTRIC" | "HYBRID";
  seatingCapacity?: number;
  mileage?: number;
  features?: string[];
}

// Equipment Listing
export interface EquipmentListing extends BaseListing {
  category: ListingCategory.EQUIPMENT;
  equipmentType: EquipmentType;
  brand?: string;
  model?: string;
  condition: "NEW" | "LIKE_NEW" | "GOOD" | "FAIR" | "POOR";
  specifications?: Record<string, string>;
}

// Event Listing
export interface EventListing extends BaseListing {
  category: ListingCategory.EVENT;
  eventType: string;
  capacity?: number;
  setupIncluded?: boolean;
  deliveryAvailable?: boolean;
}

// Union type for all listing types
export type Listing =
  | PropertyListing
  | VehicleListing
  | EquipmentListing
  | EventListing;
