// User Types
export enum UserRole {
  RENTER = "RENTER",
  OWNER = "OWNER",
  AGENT = "AGENT",
  ADMIN = "ADMIN",
}

export enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  SUSPENDED = "SUSPENDED",
  PENDING_VERIFICATION = "PENDING_VERIFICATION",
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  avatar?: string;
  role: UserRole;
  status: UserStatus;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  // Additional profile fields
  bio?: string;
  languages?: string[];
  location?: Location;
}

export interface Location {
  country: string;
  city: string;
  state?: string;
  address?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}
