import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  AlertTriangle,
  Shield,
  FileText,
  Activity,
  BarChart
} from "lucide-react";
import { StatsCard } from "@/components/dashboard/stats-card";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Platform overview and system management
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Users"
            value="12,450"
            change="+324 this month"
            trend="up"
            icon={<Users className="w-5 h-5 text-blue-600" />}
          />
          <StatsCard
            title="Active Listings"
            value="3,245"
            change="+156 this week"
            trend="up"
            icon={<Activity className="w-5 h-5 text-green-600" />}
          />
          <StatsCard
            title="Platform Revenue"
            value="GHS 245K"
            change="+22% from last month"
            trend="up"
            icon={<DollarSign className="w-5 h-5 text-orange-600" />}
          />
          <StatsCard
            title="Pending Reviews"
            value="45"
            change="12 flagged"
            trend="down"
            icon={<AlertTriangle className="w-5 h-5 text-red-600" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Platform Health</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-green-500" />
                    <span className="text-sm">API Status</span>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">Operational</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Security</span>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">Secure</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <BarChart className="w-4 h-4 text-orange-500" />
                    <span className="text-sm">Server Load</span>
                  </div>
                  <Badge variant="outline" className="text-orange-600 border-orange-600">65% CPU</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Active Users</span>
                  </div>
                  <Badge variant="outline">1,234 online</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pending Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { title: "Verification Requests", count: 23, priority: "high" },
                  { title: "Reported Listings", count: 12, priority: "medium" },
                  { title: "Dispute Cases", count: 5, priority: "high" },
                  { title: "Payment Issues", count: 8, priority: "medium" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.count} pending</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={item.priority === "high" ? "destructive" : "outline"}>
                        {item.priority}
                      </Badge>
                      <Button variant="outline" size="sm">Review</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>User Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Users</TabsTrigger>
                <TabsTrigger value="owners">Owners</TabsTrigger>
                <TabsTrigger value="renters">Renters</TabsTrigger>
                <TabsTrigger value="agencies">Agencies</TabsTrigger>
                <TabsTrigger value="suspended">Suspended</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4 mt-4">
                {[
                  { name: "Kwame Mensah", email: "kwame@example.com", role: "Owner", listings: 12, joined: "Jan 2024", status: "active" },
                  { name: "Ama Serwaa", email: "ama@example.com", role: "Renter", listings: 0, joined: "Feb 2024", status: "active" },
                  { name: "ABC Properties Ltd", email: "info@abcprops.com", role: "Agency", listings: 45, joined: "Dec 2023", status: "verified" },
                ].map((user, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-gray-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">{user.name}</h4>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="outline">{user.role}</Badge>
                          <Badge variant="outline" className="text-green-600 border-green-600">{user.status}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">{user.listings} listings</p>
                      <p className="text-xs text-gray-500">Joined {user.joined}</p>
                      <Button variant="outline" size="sm" className="mt-2">Manage</Button>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Revenue This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-600">GHS 245,680</p>
              <p className="text-sm text-gray-600 mt-1">+22% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Transaction Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600">5,234</p>
              <p className="text-sm text-gray-600 mt-1">+15% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Platform Fee</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-orange-600">GHS 36,850</p>
              <p className="text-sm text-gray-600 mt-1">15% commission</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
