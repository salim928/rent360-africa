import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Users, Home, TrendingUp, DollarSign, Calendar, Plus } from "lucide-react";
import { StatsCard } from "@/components/dashboard/stats-card";

export default function AgencyDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Agency Dashboard</h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Manage portfolio across multiple clients
              </p>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Plus className="w-4 h-4 mr-2" />
              Add Client Property
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Portfolio"
            value="45"
            change="+5 this month"
            trend="up"
            icon={<Building2 className="w-5 h-5 text-orange-600" />}
          />
          <StatsCard
            title="Active Clients"
            value="18"
            change="2 new clients"
            trend="up"
            icon={<Users className="w-5 h-5 text-blue-600" />}
          />
          <StatsCard
            title="Portfolio Value"
            value="GHS 2.4M"
            change="+8% this quarter"
            trend="up"
            icon={<DollarSign className="w-5 h-5 text-green-600" />}
          />
          <StatsCard
            title="Occupancy Rate"
            value="92%"
            change="+3% from last month"
            trend="up"
            icon={<TrendingUp className="w-5 h-5 text-teal-600" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Properties</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Cantonments Villa Complex", client: "ABC Properties Ltd", revenue: "GHS 125,000", occupancy: "100%" },
                  { name: "Airport Residential Area", client: "XYZ Estates", revenue: "GHS 98,000", occupancy: "95%" },
                  { name: "East Legon Apartments", client: "Prime Homes GH", revenue: "GHS 87,500", occupancy: "90%" },
                ].map((property, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{property.name}</h4>
                      <p className="text-sm text-gray-600">{property.client}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">{property.revenue}</p>
                      <Badge variant="outline">{property.occupancy} occupied</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Client Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { client: "ABC Properties Ltd", action: "Added 3 new properties", time: "2 hours ago" },
                  { client: "Prime Homes GH", action: "Requested marketing report", time: "5 hours ago" },
                  { client: "XYZ Estates", action: "Approved tenant screening", time: "1 day ago" },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 border rounded-lg">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.client}</p>
                      <p className="text-sm text-gray-600">{activity.action}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Client Portfolio Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Clients</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4 mt-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">ABC Properties Ltd</h4>
                      <p className="text-sm text-gray-600">12 properties • GHS 345,000/month</p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline" className="text-green-600 border-green-600">Active</Badge>
                        <Badge variant="outline">Commercial</Badge>
                      </div>
                    </div>
                    <Button variant="outline">View Portfolio</Button>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
