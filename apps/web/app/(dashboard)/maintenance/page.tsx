import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { 
  Wrench, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Plus,
  Calendar,
  DollarSign,
  User
} from "lucide-react";
import { StatsCard } from "@/components/dashboard/stats-card";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Maintenance Management</h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Track and manage property maintenance requests
              </p>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Plus className="w-4 h-4 mr-2" />
              New Request
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Open Requests"
            value="23"
            change="+5 this week"
            trend="up"
            icon={<AlertTriangle className="w-5 h-5 text-yellow-600" />}
          />
          <StatsCard
            title="In Progress"
            value="12"
            change="8 assigned"
            trend="neutral"
            icon={<Wrench className="w-5 h-5 text-blue-600" />}
          />
          <StatsCard
            title="Completed"
            value="145"
            change="This month"
            trend="up"
            icon={<CheckCircle className="w-5 h-5 text-green-600" />}
          />
          <StatsCard
            title="Total Cost"
            value="GHS 12,450"
            change="This month"
            trend="neutral"
            icon={<DollarSign className="w-5 h-5 text-orange-600" />}
          />
        </div>

        {/* Maintenance Requests */}
        <Card>
          <CardHeader>
            <CardTitle>Maintenance Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pending">
              <TabsList>
                <TabsTrigger value="pending">Pending (23)</TabsTrigger>
                <TabsTrigger value="in-progress">In Progress (12)</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
              </TabsList>

              <TabsContent value="pending" className="space-y-4 mt-4">
                {[
                  {
                    id: "MR-001",
                    property: "East Legon Apartment - Unit 3B",
                    issue: "Leaking faucet in kitchen",
                    priority: "medium",
                    reported: "2 hours ago",
                    tenant: "Kwame Mensah",
                    category: "Plumbing"
                  },
                  {
                    id: "MR-002",
                    property: "Airport Residential - Building A",
                    issue: "AC not cooling properly",
                    priority: "high",
                    reported: "5 hours ago",
                    tenant: "Ama Serwaa",
                    category: "HVAC"
                  },
                  {
                    id: "MR-003",
                    property: "Tema Community 25 - House 12",
                    issue: "Gate lock needs replacement",
                    priority: "low",
                    reported: "1 day ago",
                    tenant: "Yaw Boateng",
                    category: "Security"
                  },
                ].map((request) => (
                  <div key={request.id} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium">{request.property}</h4>
                        <Badge variant={
                          request.priority === "high" ? "destructive" : 
                          request.priority === "medium" ? "default" : 
                          "outline"
                        }>
                          {request.priority}
                        </Badge>
                        <Badge variant="outline">{request.category}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{request.issue}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {request.tenant}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {request.reported}
                        </span>
                        <span className="font-medium">#{request.id}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Assign</Button>
                      <Button size="sm">View</Button>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="in-progress" className="space-y-4 mt-4">
                {[
                  {
                    id: "MR-020",
                    property: "Cantonments Villa",
                    issue: "Pool cleaning and maintenance",
                    technician: "John Plumber Services",
                    started: "Dec 5, 2024",
                    estimated: "Dec 7, 2024",
                    progress: 60
                  },
                ].map((request) => (
                  <div key={request.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium">{request.property}</h4>
                        <p className="text-sm text-gray-600">{request.issue}</p>
                      </div>
                      <Badge variant="outline" className="text-blue-600 border-blue-600">In Progress</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Assigned to:</span>
                        <span className="font-medium">{request.technician}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Started:</span>
                        <span>{request.started}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Est. Completion:</span>
                        <span>{request.estimated}</span>
                      </div>
                      <div>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress:</span>
                          <span className="font-medium">{request.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500" style={{ width: `${request.progress}%` }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button variant="outline" size="sm">Update Status</Button>
                      <Button variant="outline" size="sm">Contact Technician</Button>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="scheduled" className="mt-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">Upcoming Scheduled Maintenance</h3>
                      {[
                        { property: "All Properties", task: "Annual fire extinguisher inspection", date: "Dec 15, 2024", contractor: "Safety First Ltd" },
                        { property: "East Legon Complex", task: "Quarterly HVAC servicing", date: "Dec 20, 2024", contractor: "CoolAir Services" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-medium">{item.task}</h4>
                            <p className="text-sm text-gray-600">{item.property}</p>
                            <div className="flex gap-2 mt-2">
                              <Badge variant="outline" className="text-blue-600 border-blue-600">
                                <Calendar className="w-3 h-3 mr-1" />
                                {item.date}
                              </Badge>
                              <Badge variant="outline">{item.contractor}</Badge>
                            </div>
                          </div>
                          <Button variant="outline">Reschedule</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
