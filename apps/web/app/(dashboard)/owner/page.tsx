import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Home, 
  DollarSign, 
  Calendar, 
  TrendingUp, 
  Users, 
  Star,
  Building,
  Eye,
  MessageSquare,
  Plus
} from "lucide-react";
import Link from "next/link";

export default function OwnerDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Owner Dashboard</h1>
          <p className="text-gray-600">Manage your properties and rental business</p>
        </div>
        <Link href="/listings/create">
          <Button className="bg-primary">
            <Plus className="mr-2 h-4 w-4" />
            Add New Listing
          </Button>
        </Link>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">GHS 45,600</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+15.8%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              5 pending approval
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.5%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+5.2%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Property Performance & Recent Activity */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Property Performance</CardTitle>
            <CardDescription>Top performing properties this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Modern 2BR Apartment - East Legon", bookings: 8, revenue: "GHS 20,000", rating: 4.9 },
                { name: "Luxury Villa - Airport Residential", bookings: 5, revenue: "GHS 15,000", rating: 4.8 },
                { name: "Cozy Studio - Osu", bookings: 6, revenue: "GHS 7,200", rating: 4.7 },
                { name: "Family House - Tema", bookings: 4, revenue: "GHS 6,800", rating: 4.6 },
              ].map((property, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{property.name}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{property.bookings} bookings</span>
                      <span>•</span>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                        {property.rating}
                      </div>
                    </div>
                  </div>
                  <div className="font-medium">{property.revenue}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions on your properties</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "New booking", property: "Modern 2BR Apartment", time: "2 hours ago", type: "booking" },
                { action: "Review received", property: "Luxury Villa", time: "5 hours ago", type: "review" },
                { action: "Message received", property: "Cozy Studio", time: "1 day ago", type: "message" },
                { action: "Booking completed", property: "Family House", time: "2 days ago", type: "complete" },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`rounded-full p-2 ${
                    activity.type === 'booking' ? 'bg-blue-100' :
                    activity.type === 'review' ? 'bg-yellow-100' :
                    activity.type === 'message' ? 'bg-purple-100' : 'bg-green-100'
                  }`}>
                    {activity.type === 'booking' && <Calendar className="h-4 w-4 text-blue-600" />}
                    {activity.type === 'review' && <Star className="h-4 w-4 text-yellow-600" />}
                    {activity.type === 'message' && <MessageSquare className="h-4 w-4 text-purple-600" />}
                    {activity.type === 'complete' && <TrendingUp className="h-4 w-4 text-green-600" />}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.property}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions & Insights */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tenants">Tenants</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Total Views</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+12%</span> from last week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45</div>
                <p className="text-xs text-muted-foreground">
                  15 unanswered
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Average Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold">4.8</div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Based on 156 reviews
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tenants" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Tenants</CardTitle>
              <CardDescription>Manage your active tenants</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "John Mensah", property: "Modern 2BR Apartment", duration: "6 months", status: "active" },
                  { name: "Sarah Asante", property: "Luxury Villa", duration: "3 months", status: "active" },
                  { name: "Kwame Boateng", property: "Cozy Studio", duration: "12 months", status: "active" },
                ].map((tenant, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{tenant.name}</p>
                      <p className="text-sm text-muted-foreground">{tenant.property}</p>
                      <p className="text-xs text-muted-foreground">Duration: {tenant.duration}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">{tenant.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Requests</CardTitle>
              <CardDescription>Track and manage property maintenance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { issue: "Plumbing leak in bathroom", property: "Modern 2BR Apartment", priority: "high", status: "pending" },
                  { issue: "Air conditioning not working", property: "Luxury Villa", priority: "medium", status: "in-progress" },
                  { issue: "Door lock replacement", property: "Cozy Studio", priority: "low", status: "completed" },
                ].map((request, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{request.issue}</p>
                      <p className="text-sm text-muted-foreground">{request.property}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={
                        request.priority === 'high' ? 'bg-red-100 text-red-800' :
                        request.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }>
                        {request.priority}
                      </Badge>
                      <Badge className={
                        request.status === 'completed' ? 'bg-green-100 text-green-800' :
                        request.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }>
                        {request.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Income Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Rental Income</span>
                  <span className="font-medium">GHS 42,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Service Charges</span>
                  <span className="font-medium">GHS 2,800</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Other Income</span>
                  <span className="font-medium">GHS 800</span>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center font-bold">
                    <span>Total</span>
                    <span className="text-green-600">GHS 45,600</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Expenses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Maintenance</span>
                  <span className="font-medium">GHS 3,200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Utilities</span>
                  <span className="font-medium">GHS 1,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Platform Fees</span>
                  <span className="font-medium">GHS 2,280</span>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center font-bold">
                    <span>Net Profit</span>
                    <span className="text-green-600">GHS 38,620</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
