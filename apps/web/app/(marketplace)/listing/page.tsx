"use client";

import { ImageGallery } from "@/components/shared/image-gallery";
import { HostCard } from "@/components/shared/host-card";
import { BookingWidget } from "@/components/shared/booking-widget";
import { MapView } from "@/components/shared/map-view";
import { RatingStars } from "@/components/shared/rating-stars";
import { VerifiedBadge } from "@/components/shared/verified-badge";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  Users,
  Bed,
  Bath,
  Wifi,
  Car,
  Wind,
  Tv,
  Star,
} from "lucide-react";

export default function ListingDetailPage() {
  // Sample listing data
  const listing = {
    id: "1",
    title: "Modern 2BR Apartment in East Legon",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    price: 2500,
    currency: "GHS",
    period: "month",
    rating: 4.8,
    reviewCount: 24,
    isVerified: true,
    category: "Property",
    propertyType: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    description:
      "Beautiful modern apartment in the heart of East Legon. Fully furnished with contemporary amenities, perfect for professionals or small families. Close to shopping centers, restaurants, and major businesses.",
    amenities: [
      "High-speed WiFi",
      "Air Conditioning",
      "Smart TV",
      "Parking",
      "24/7 Security",
      "Backup Generator",
      "Kitchen Appliances",
      "Laundry",
    ],
    rules: [
      "No smoking",
      "No pets",
      "No parties or events",
      "Quiet hours: 10 PM - 7 AM",
    ],
    location: {
      address: "East Legon, Accra, Ghana",
      latitude: 5.6467,
      longitude: -0.1531,
    },
    host: {
      id: "host1",
      name: "Kwame Mensah",
      avatar: "",
      rating: 4.9,
      reviewCount: 156,
      isVerified: true,
      joinedDate: "2020",
      responseRate: 98,
      responseTime: "within an hour",
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold">{listing.title}</h1>
          <VerifiedBadge isVerified={listing.isVerified} />
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{listing.rating}</span>
            <span className="text-muted-foreground">
              ({listing.reviewCount} reviews)
            </span>
          </div>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground">
            {listing.location.address}
          </span>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mb-8">
        <ImageGallery images={listing.images} alt={listing.title} />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Property Info */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">
                {listing.propertyType} in {listing.location.address.split(",")[0]}
              </h2>
              <div className="flex items-center gap-6 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{listing.maxGuests} guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bed className="h-4 w-4" />
                  <span>{listing.bedrooms} bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-4 w-4" />
                  <span>{listing.bathrooms} bathrooms</span>
                </div>
              </div>
              <p className="text-muted-foreground">{listing.description}</p>
            </CardContent>
          </Card>

          {/* Amenities & Rules */}
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="amenities">
                <TabsList className="w-full">
                  <TabsTrigger value="amenities" className="flex-1">
                    Amenities
                  </TabsTrigger>
                  <TabsTrigger value="rules" className="flex-1">
                    House Rules
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="amenities" className="mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    {listing.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <Wifi className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="rules" className="mt-4">
                  <ul className="space-y-2">
                    {listing.rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span className="text-sm">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Location */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Location</h2>
            <MapView
              latitude={listing.location.latitude}
              longitude={listing.location.longitude}
              address={listing.location.address}
            />
          </div>

          {/* Host */}
          <HostCard
            hostId={listing.host.id}
            name={listing.host.name}
            avatar={listing.host.avatar}
            rating={listing.host.rating}
            reviewCount={listing.host.reviewCount}
            isVerified={listing.host.isVerified}
            joinedDate={listing.host.joinedDate}
            responseRate={listing.host.responseRate}
            responseTime={listing.host.responseTime}
          />
        </div>

        {/* Right Column - Booking Widget */}
        <div className="lg:col-span-1">
          <BookingWidget
            listingId={listing.id}
            price={listing.price}
            currency={listing.currency}
            period={listing.period}
            maxGuests={listing.maxGuests}
          />
        </div>
      </div>
    </div>
  );
}
