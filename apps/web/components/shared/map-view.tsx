"use client";

import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface MapViewProps {
  latitude?: number;
  longitude?: number;
  address: string;
  zoom?: number;
}

export function MapView({
  latitude,
  longitude,
  address,
  zoom = 15,
}: MapViewProps) {
  // Placeholder for map integration (Mapbox, Google Maps, etc.)
  return (
    <Card className="overflow-hidden">
      <div className="relative h-[400px] bg-muted flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Map View</h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            {address}
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            Map integration coming soon (Mapbox)
          </p>
        </div>
      </div>
    </Card>
  );
}
