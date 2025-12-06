"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, User, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function BookingsPage() {
  // Sample bookings data
  const bookings = [
    {
      id: "1",
      listingTitle: "Modern 2BR Apartment in East Legon",
      listingImage: "/placeholder.svg",
      renterName: "John Doe",
      checkIn: "2024-01-15",
      checkOut: "2024-02-15",
      status: "confirmed",
      amount: 2500,
      nights: 31,
    },
    {
      id: "2",
      listingTitle: "Toyota Camry 2020 - Automatic",
      listingImage: "/placeholder.svg",
      renterName: "Jane Smith",
      checkIn: "2024-01-10",
      checkOut: "2024-01-17",
      status: "pending",
      amount: 1050,
      nights: 7,
    },
    {
      id: "3",
      listingTitle: "Modern 2BR Apartment in East Legon",
      listingImage: "/placeholder.svg",
      renterName: "Michael Johnson",
      checkIn: "2023-12-20",
      checkOut: "2024-01-05",
      status: "completed",
      amount: 2000,
      nights: 16,
    },
  ];

  const getStatusBadge = (status: string) => {
    const config = {
      confirmed: { variant: "default", label: "Confirmed" },
      pending: { variant: "secondary", label: "Pending" },
      completed: { variant: "outline", label: "Completed" },
      cancelled: { variant: "destructive", label: "Cancelled" },
    };
    const { variant, label } = config[status as keyof typeof config];
    return <Badge variant={variant as any}>{label}</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Bookings</h1>
        <p className="text-muted-foreground">
          Manage your rental bookings and reservations
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Bookings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Bookings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Currently ongoing</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Approval
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Needs action</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">GHS 5,550</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Bookings Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Bookings</TabsTrigger>
          <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {bookings.map((booking) => (
            <Card key={booking.id}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-24 w-32 overflow-hidden rounded-lg">
                    <Image
                      src={booking.listingImage}
                      alt={booking.listingTitle}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">
                          {booking.listingTitle}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {booking.renterName}
                          </span>
                        </div>
                      </div>
                      {getStatusBadge(booking.status)}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Check-in</p>
                          <p className="text-sm font-medium">{booking.checkIn}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Check-out</p>
                          <p className="text-sm font-medium">{booking.checkOut}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div>
                          <p className="text-xs text-muted-foreground">Total Amount</p>
                          <p className="text-sm font-semibold">GHS {booking.amount}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {booking.status === "pending" && (
                        <>
                          <Button size="sm">Approve</Button>
                          <Button size="sm" variant="outline">
                            Decline
                          </Button>
                        </>
                      )}
                      <Button size="sm" variant="outline" className="gap-2">
                        <MessageCircle className="h-4 w-4" />
                        Message Renter
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="confirmed">
          <p className="text-center text-muted-foreground py-8">
            Confirmed bookings will appear here
          </p>
        </TabsContent>

        <TabsContent value="pending">
          <p className="text-center text-muted-foreground py-8">
            Pending bookings will appear here
          </p>
        </TabsContent>

        <TabsContent value="completed">
          <p className="text-center text-muted-foreground py-8">
            Completed bookings will appear here
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
