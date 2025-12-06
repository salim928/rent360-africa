import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Home, 
  DollarSign, 
  Users, 
  TrendingUp,
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
  Plus
} from "lucide-react";
import { StatsCard } from "@/components/dashboard/stats-card";

export default function OwnerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Owner Dashboard</h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Manage your properties and track performance
              </p>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Plus className="w-4 h-4 mr-2" />
              Add Property
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Properties"
            value="12"
            change="+2 this month"
            trend="up"
            icon={<Home className="w-5 h-5 text-orange-600" />}
          />
          <StatsCard
            title="Monthly Revenue"
            value="GHS 45,600"
            change="+12.5% from last month"
            trend="up"
            icon={<DollarSign className="w-5 h-5 text-green-600" />}
          />
          <StatsCard
            title="Active Tenants"
            value="18"
            change="2 moving out next month"
            trend="down"
            icon={<Users className="w-5 h-5 text-blue-600" />}
          />
          <StatsCard
            title="Occupancy Rate"
            value="85%"
            change="+5% from last month"
            trend="up"
            icon={<TrendingUp className="w-5 h-5 text-teal-600" />}
          />
        </div>

        {/* Quick Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start">
                <Plus className="w-4 h-4 mr-2" />
                List New Property
              </Button>
              <Button variant="outline" className="justify-start">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Maintenance
              </Button>
              <Button variant="outline" className="justify-start">
                <Users className="w-4 h-4 mr-2" />
                Screen Tenant
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Property Portfolio */}
        <Tabs defaultValue="active" className="mb-8">
          <TabsList>
            <TabsTrigger value="active">Active Properties</TabsTrigger>
            <TabsTrigger value="occupied">Occupied</TabsTrigger>
            <TabsTrigger value="vacant">Vacant</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Home className="w-8 h-8 text-gray-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">3-Bedroom Apartment - East Legon</h3>
                        <p className="text-sm text-gray-600">Accra, Ghana</p>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Occupied
                          </Badge>
                          <Badge variant="outline">Property</Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                          <div>
                            <span className="text-gray-600">Monthly Rent:</span>
                            <p className="font-semibold">GHS 2,500</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Tenant:</span>
                            <p className="font-semibold">Kwame Mensah</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Lease Ends:</span>
                            <p className="font-semibold">Dec 2025</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Maintenance Requests */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Recent Maintenance Requests</span>
              <Badge variant="outline">{3} pending</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { property: "East Legon Apartment", issue: "Leaking faucet in kitchen", status: "pending", priority: "medium" },
                { property: "Airport Residential", issue: "AC not cooling properly", status: "in-progress", priority: "high" },
                { property: "Tema Community 25", issue: "Gate lock needs replacement", status: "pending", priority: "low" },
              ].map((request, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{request.property}</h4>
                      <Badge variant={request.priority === "high" ? "destructive" : "outline"}>
                        {request.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{request.issue}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {request.status === "pending" && (
                      <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                        <Clock className="w-3 h-3 mr-1" />
                        Pending
                      </Badge>
                    )}
                    {request.status === "in-progress" && (
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        In Progress
                      </Badge>
                    )}
                    <Button variant="outline" size="sm">Assign</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Financial Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Financial Summary - December 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-600">Total Income</p>
                <p className="text-2xl font-bold text-green-600">GHS 45,600</p>
                <p className="text-xs text-gray-500 mt-1">From 18 properties</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Expenses</p>
                <p className="text-2xl font-bold text-red-600">GHS 8,400</p>
                <p className="text-xs text-gray-500 mt-1">Maintenance & utilities</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Net Profit</p>
                <p className="text-2xl font-bold text-blue-600">GHS 37,200</p>
                <p className="text-xs text-gray-500 mt-1">81.6% margin</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
