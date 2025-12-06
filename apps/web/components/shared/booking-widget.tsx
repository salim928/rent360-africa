"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Users } from "lucide-react";
import { PriceDisplay } from "./price-display";
import { useState } from "react";

interface BookingWidgetProps {
  listingId: string;
  price: number;
  currency?: string;
  period?: string;
  minNights?: number;
  maxGuests?: number;
}

export function BookingWidget({
  listingId,
  price,
  currency = "GHS",
  period = "night",
  minNights = 1,
  maxGuests = 4,
}: BookingWidgetProps) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const calculateTotal = () => {
    if (!checkIn || !checkOut) return price;
    const nights = Math.ceil(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
        (1000 * 60 * 60 * 24)
    );
    return price * Math.max(nights, minNights);
  };

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <PriceDisplay amount={price} currency={currency} period={period} />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label htmlFor="checkIn">Check-in</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="checkIn"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="checkOut">Check-out</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="checkOut"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="guests">Guests</Label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="guests"
              type="number"
              min={1}
              max={maxGuests}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="pl-10"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Maximum {maxGuests} guests
          </p>
        </div>

        <Button className="w-full" size="lg">
          Reserve
        </Button>

        <div className="pt-4 border-t space-y-2">
          <div className="flex justify-between text-sm">
            <span>
              {currency} {price} × {minNights} {period}s
            </span>
            <span>{currency} {calculateTotal()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Service fee</span>
            <span>{currency} {(calculateTotal() * 0.1).toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold pt-2 border-t">
            <span>Total</span>
            <span>
              {currency} {(calculateTotal() * 1.1).toFixed(2)}
            </span>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          You won't be charged yet
        </p>
      </CardContent>
    </Card>
  );
}
