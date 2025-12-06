"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, MoreVertical, Eye, Edit, Trash2, Home } from "lucide-react";
import Image from "next/image";

export default function ListingsPage() {
  // Sample listings data
  const listings = [
    {
      id: "1",
      title: "Modern 2BR Apartment in East Legon",
      category: "Property",
      price: 2500,
      status: "active",
      views: 234,
      bookings: 12,
      image: "/placeholder.svg",
      location: "East Legon, Accra",
    },
    {
      id: "2",
      title: "Toyota Camry 2020 - Automatic",
      category: "Vehicle",
      price: 150,
      status: "active",
      views: 156,
      bookings: 8,
      image: "/placeholder.svg",
      location: "Airport, Accra",
    },
    {
      id: "3",
      title: "Construction Equipment - Excavator",
      category: "Equipment",
      price: 800,
      status: "draft",
      views: 0,
      bookings: 0,
      image: "/placeholder.svg",
      location: "Tema, Accra",
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      active: "default",
      draft: "secondary",
      inactive: "outline",
    };
    return (
      <Badge variant={variants[status as keyof typeof variants] as any}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Listings</h1>
          <p className="text-muted-foreground">
            Manage your rental properties, vehicles, and equipment
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Listing
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Listings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">+1 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Listings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              66.7% of total
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Views
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">390</div>
            <p className="text-xs text-muted-foreground">+12% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Bookings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">20</div>
            <p className="text-xs text-muted-foreground">+5 this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Listings Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Listings</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {listings.map((listing) => (
            <Card key={listing.id}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-24 w-32 overflow-hidden rounded-lg">
                    <Image
                      src={listing.image}
                      alt={listing.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">
                          {listing.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {listing.location}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline">{listing.category}</Badge>
                          {getStatusBadge(listing.status)}
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="gap-2">
                            <Eye className="h-4 w-4" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            <Edit className="h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2 text-destructive">
                            <Trash2 className="h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="flex items-center gap-6 mt-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Price</p>
                        <p className="font-semibold">
                          GHS {listing.price}/{listing.category === "Property" ? "mo" : "day"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Views</p>
                        <p className="font-semibold">{listing.views}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Bookings</p>
                        <p className="font-semibold">{listing.bookings}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="active">
          <p className="text-center text-muted-foreground py-8">
            Active listings will appear here
          </p>
        </TabsContent>

        <TabsContent value="draft">
          <p className="text-center text-muted-foreground py-8">
            Draft listings will appear here
          </p>
        </TabsContent>

        <TabsContent value="inactive">
          <p className="text-center text-muted-foreground py-8">
            Inactive listings will appear here
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
