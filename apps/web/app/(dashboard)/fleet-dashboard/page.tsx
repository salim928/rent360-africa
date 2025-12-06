import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Truck, TrendingUp, DollarSign, AlertTriangle, Wrench, Plus } from "lucide-react";
import { StatsCard } from "@/components/dashboard/stats-card";

export default function FleetDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Fleet Dashboard</h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Manage your vehicle fleet operations
              </p>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Plus className="w-4 h-4 mr-2" />
              Add Vehicle
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Fleet"
            value="24"
            change="2 added this month"
            trend="up"
            icon={<Car className="w-5 h-5 text-orange-600" />}
          />
          <StatsCard
            title="Active Rentals"
            value="18"
            change="75% utilization"
            trend="up"
            icon={<TrendingUp className="w-5 h-5 text-green-600" />}
          />
          <StatsCard
            title="Monthly Revenue"
            value="GHS 42,000"
            change="+18% from last month"
            trend="up"
            icon={<DollarSign className="w-5 h-5 text-blue-600" />}
          />
          <StatsCard
            title="Maintenance Due"
            value="3"
            change="2 overdue"
            trend="down"
            icon={<AlertTriangle className="w-5 h-5 text-red-600" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Fleet Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Available</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: "25%" }}></div>
                    </div>
                    <span className="text-sm font-medium">6</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Rented</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500" style={{ width: "75%" }}></div>
                    </div>
                    <span className="text-sm font-medium">18</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Maintenance</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500" style={{ width: "12.5%" }}></div>
                    </div>
                    <span className="text-sm font-medium">3</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Urgent Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { vehicle: "Toyota Camry 2020", plate: "GH-1234-20", issue: "Oil change overdue", days: "5 days" },
                  { vehicle: "Mercedes C-Class", plate: "GH-5678-21", issue: "Tire replacement", days: "2 days" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border border-red-200 bg-red-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">{item.vehicle}</h4>
                      <p className="text-sm text-gray-600">{item.plate} • {item.issue}</p>
                    </div>
                    <Badge variant="destructive">{item.days}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Fleet Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Vehicles</TabsTrigger>
                <TabsTrigger value="cars">Cars</TabsTrigger>
                <TabsTrigger value="trucks">Trucks</TabsTrigger>
                <TabsTrigger value="bikes">Motorcycles</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4 mt-4">
                {[
                  { name: "Toyota Camry 2020", type: "Sedan", status: "Rented", rate: "GHS 150/day", renter: "Kwame Mensah", return: "Dec 15" },
                  { name: "Mercedes-Benz C-Class", type: "Sedan", status: "Maintenance", rate: "GHS 250/day", renter: "-", return: "-" },
                  { name: "Toyota Hilux 2021", type: "Pickup", status: "Available", rate: "GHS 300/day", renter: "-", return: "-" },
                ].map((vehicle, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center">
                        <Car className="w-8 h-8 text-gray-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">{vehicle.name}</h4>
                        <p className="text-sm text-gray-600">{vehicle.type} • {vehicle.rate}</p>
                        <div className="flex gap-2 mt-2">
                          <Badge variant={vehicle.status === "Rented" ? "default" : vehicle.status === "Available" ? "outline" : "destructive"}>
                            {vehicle.status}
                          </Badge>
                        </div>
                        {vehicle.renter !== "-" && (
                          <p className="text-xs text-gray-500 mt-1">Renter: {vehicle.renter} • Returns: {vehicle.return}</p>
                        )}
                      </div>
                    </div>
                    <Button variant="outline">Manage</Button>
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
