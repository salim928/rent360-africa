"use client";

import { StatsCard } from "@/components/dashboard/stats-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, DollarSign, Calendar, TrendingUp } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Listings"
          value="12"
          description="3 active"
          icon={Home}
          trend={{ value: 20, isPositive: true }}
        />
        <StatsCard
          title="Total Earnings"
          value="GHS 45,600"
          description="This month"
          icon={DollarSign}
          trend={{ value: 15, isPositive: true }}
        />
        <StatsCard
          title="Bookings"
          value="28"
          description="8 pending"
          icon={Calendar}
          trend={{ value: 8, isPositive: false }}
        />
        <StatsCard
          title="Views"
          value="1,234"
          description="Last 30 days"
          icon={TrendingUp}
          trend={{ value: 35, isPositive: true }}
        />
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-medium">New booking request</p>
                <p className="text-sm text-muted-foreground">
                  Modern 2BR Apartment - 3 nights
                </p>
              </div>
              <span className="text-sm text-muted-foreground">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-medium">Payment received</p>
                <p className="text-sm text-muted-foreground">
                  GHS 1,500 for Toyota Corolla rental
                </p>
              </div>
              <span className="text-sm text-muted-foreground">5 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">New review</p>
                <p className="text-sm text-muted-foreground">
                  5 stars - "Great experience!"
                </p>
              </div>
              <span className="text-sm text-muted-foreground">1 day ago</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border rounded-lg hover:bg-accent transition-colors text-left">
              <h3 className="font-semibold mb-2">Create New Listing</h3>
              <p className="text-sm text-muted-foreground">
                List a new property, vehicle, or equipment
              </p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-accent transition-colors text-left">
              <h3 className="font-semibold mb-2">View Messages</h3>
              <p className="text-sm text-muted-foreground">
                3 unread messages from potential renters
              </p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-accent transition-colors text-left">
              <h3 className="font-semibold mb-2">Manage Bookings</h3>
              <p className="text-sm text-muted-foreground">
                Review and respond to booking requests
              </p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
