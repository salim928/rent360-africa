// Shared constants for filter options across the application

export const PROPERTY_TYPES = [
  "Apartment",
  "House",
  "Studio",
  "Commercial",
  "Guest House",
] as const;

export const VEHICLE_TYPES = [
  "Sedan",
  "SUV",
  "Minivan",
  "Luxury",
  "4WD",
  "Electric",
] as const;

export const TRANSMISSION_TYPES = ["Automatic", "Manual"] as const;

export const FUEL_TYPES = ["Petrol", "Diesel", "Hybrid", "Electric"] as const;

export const AMENITIES = ["AC", "WiFi", "Parking", "Pool", "Security"] as const;

export const VEHICLE_FEATURES = [
  "GPS",
  "AC",
  "Bluetooth",
  "USB",
  "Child Seat",
] as const;

export const BEDROOM_OPTIONS = ["Any", "1+", "2+", "3+"] as const;

export const SEAT_OPTIONS = ["4+", "5+", "7+"] as const;
