"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Home as HomeIcon,
  DollarSign,
  Calendar,
  TrendingUp,
  Users,
  Star,
  Plus,
  Settings,
  BarChart3,
  ChevronLeft,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    title: "Total Revenue",
    value: "GHS 45,800",
    change: "+12.5%",
    icon: DollarSign,
    trend: "up",
  },
  {
    title: "Active Bookings",
    value: "12",
    change: "+3 this week",
    icon: Calendar,
    trend: "up",
  },
  {
    title: "Total Listings",
    value: "8",
    change: "2 pending",
    icon: HomeIcon,
    trend: "neutral",
  },
  {
    title: "Average Rating",
    value: "4.8",
    change: "24 reviews",
    icon: Star,
    trend: "up",
  },
];

const recentBookings = [
  {
    id: "1",
    property: "Modern 3BR Apartment",
    guest: "Kwame Mensah",
    dates: "Dec 10 - Dec 15",
    status: "confirmed",
    amount: "GHS 2,500",
  },
  {
    id: "2",
    property: "Luxury Villa with Pool",
    guest: "Ama Owusu",
    dates: "Dec 12 - Dec 20",
    status: "pending",
    amount: "GHS 5,000",
  },
  {
    id: "3",
    property: "Cozy 2BR House",
    guest: "Kofi Asante",
    dates: "Dec 8 - Dec 10",
    status: "completed",
    amount: "GHS 3,000",
  },
];

const listings = [
  {
    id: "1",
    title: "Modern 3BR Apartment",
    location: "East Legon, Accra",
    status: "active",
    bookings: 18,
    revenue: "GHS 12,500",
  },
  {
    id: "2",
    title: "Luxury Villa with Pool",
    location: "Airport Residential",
    status: "active",
    bookings: 12,
    revenue: "GHS 15,000",
  },
  {
    id: "3",
    title: "Cozy 2BR House",
    location: "Cantonments",
    status: "inactive",
    bookings: 8,
    revenue: "GHS 8,500",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Rent360 Africa</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/properties"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Properties
            </Link>
            <Link
              href="/vehicles"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Vehicles
            </Link>
            <Link
              href="/equipment"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Equipment
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-primary"
            >
              Host Dashboard
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary" />
              <span className="text-sm font-medium">John Doe</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center mb-6 text-sm hover:text-primary">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Host Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your properties and bookings
            </p>
          </div>
          <Button size="lg">
            <Plus className="mr-2 h-4 w-4" />
            Add New Listing
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p
                      className={`text-xs ${
                        stat.trend === "up"
                          ? "text-green-600"
                          : "text-muted-foreground"
                      }`}
                    >
                      {stat.change}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Recent Bookings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Bookings</CardTitle>
                    <CardDescription>
                      Your latest booking requests
                    </CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div className="space-y-1">
                        <p className="font-medium">{booking.property}</p>
                        <p className="text-sm text-muted-foreground">
                          {booking.guest}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {booking.dates}
                        </p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="font-semibold">{booking.amount}</p>
                        <div
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                            booking.status === "confirmed"
                              ? "bg-green-100 text-green-700"
                              : booking.status === "pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {booking.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Listings Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Your Listings</CardTitle>
                    <CardDescription>Performance overview</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">
                    <BarChart3 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {listings.map((listing) => (
                    <div
                      key={listing.id}
                      className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div className="space-y-1">
                        <p className="font-medium">{listing.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {listing.location}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {listing.bookings} bookings
                        </p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="font-semibold">{listing.revenue}</p>
                        <div
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                            listing.status === "active"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {listing.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Manage your properties and settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Button variant="outline" className="h-auto flex-col py-6">
                  <Plus className="mb-2 h-6 w-6" />
                  <span>New Listing</span>
                </Button>
                <Button variant="outline" className="h-auto flex-col py-6">
                  <Calendar className="mb-2 h-6 w-6" />
                  <span>Calendar</span>
                </Button>
                <Button variant="outline" className="h-auto flex-col py-6">
                  <Users className="mb-2 h-6 w-6" />
                  <span>Messages</span>
                </Button>
                <Button variant="outline" className="h-auto flex-col py-6">
                  <BarChart3 className="mb-2 h-6 w-6" />
                  <span>Analytics</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
