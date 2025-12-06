import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  Calendar, 
  DollarSign,
  User,
  Download,
  AlertCircle,
  CheckCircle,
  Plus
} from "lucide-react";
import { StatsCard } from "@/components/dashboard/stats-card";

export default function ContractsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Contract Management</h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Manage leases, agreements, and rental contracts
              </p>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Plus className="w-4 h-4 mr-2" />
              New Contract
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Active Contracts"
            value="45"
            change="+3 this month"
            trend="up"
            icon={<FileText className="w-5 h-5 text-blue-600" />}
          />
          <StatsCard
            title="Expiring Soon"
            value="8"
            change="Within 30 days"
            trend="down"
            icon={<AlertCircle className="w-5 h-5 text-yellow-600" />}
          />
          <StatsCard
            title="Total Value"
            value="GHS 2.4M"
            change="Annual"
            trend="neutral"
            icon={<DollarSign className="w-5 h-5 text-green-600" />}
          />
          <StatsCard
            title="Renewals"
            value="12"
            change="Pending"
            trend="neutral"
            icon={<CheckCircle className="w-5 h-5 text-orange-600" />}
          />
        </div>

        {/* Contracts List */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Contracts & Leases</CardTitle>
              <div className="flex gap-2">
                <Input placeholder="Search contracts..." className="w-64" />
                <Button variant="outline">Filter</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="active">
              <TabsList>
                <TabsTrigger value="active">Active (45)</TabsTrigger>
                <TabsTrigger value="expiring">Expiring Soon (8)</TabsTrigger>
                <TabsTrigger value="pending">Pending Renewal (12)</TabsTrigger>
                <TabsTrigger value="expired">Expired</TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="space-y-4 mt-4">
                {[
                  {
                    id: "CNT-2024-001",
                    property: "East Legon Apartment - Unit 3B",
                    tenant: "Kwame Mensah",
                    type: "Residential Lease",
                    startDate: "Jan 1, 2024",
                    endDate: "Dec 31, 2024",
                    monthlyRent: "GHS 2,500",
                    status: "active",
                    daysLeft: 25
                  },
                  {
                    id: "CNT-2024-002",
                    property: "Airport Commercial Plaza - Shop 5",
                    tenant: "ABC Trading Ltd",
                    type: "Commercial Lease",
                    startDate: "Mar 1, 2024",
                    endDate: "Feb 28, 2027",
                    monthlyRent: "GHS 8,000",
                    status: "active",
                    daysLeft: 450
                  },
                  {
                    id: "CNT-2024-003",
                    property: "Cantonments Villa",
                    tenant: "Ama Serwaa",
                    type: "Short-term Rental",
                    startDate: "Dec 1, 2024",
                    endDate: "Jan 31, 2025",
                    monthlyRent: "GHS 5,000",
                    status: "active",
                    daysLeft: 56
                  },
                ].map((contract) => (
                  <div key={contract.id} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium">{contract.property}</h4>
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          {contract.status}
                        </Badge>
                        <Badge variant="outline">{contract.type}</Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Tenant:</span>
                          <p className="font-medium">{contract.tenant}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Monthly Rent:</span>
                          <p className="font-medium text-green-600">{contract.monthlyRent}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Start Date:</span>
                          <p className="font-medium">{contract.startDate}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">End Date:</span>
                          <p className="font-medium">{contract.endDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                        <span>Contract ID: {contract.id}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {contract.daysLeft} days remaining
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button size="sm">View</Button>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="expiring" className="space-y-4 mt-4">
                {[
                  {
                    id: "CNT-2023-089",
                    property: "Tema Community 25 - House 12",
                    tenant: "Yaw Boateng",
                    endDate: "Dec 20, 2024",
                    daysLeft: 14,
                    monthlyRent: "GHS 1,800"
                  },
                  {
                    id: "CNT-2023-092",
                    property: "Legon Student Housing - Room 204",
                    tenant: "Akosua Mensah",
                    endDate: "Dec 31, 2024",
                    daysLeft: 25,
                    monthlyRent: "GHS 800"
                  },
                ].map((contract) => (
                  <div key={contract.id} className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-medium">{contract.property}</h4>
                          <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            Expires in {contract.daysLeft} days
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Tenant:</span>
                            <p className="font-medium">{contract.tenant}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Expiry:</span>
                            <p className="font-medium">{contract.endDate}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Rent:</span>
                            <p className="font-medium">{contract.monthlyRent}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Renew</Button>
                        <Button variant="outline" size="sm">Contact Tenant</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="pending" className="mt-4">
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-medium mb-4">Pending Renewal Approvals</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        12 contracts require renewal action within the next 60 days
                      </p>
                      <Button>Review All Renewals</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Contract Templates */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Contract Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "Residential Lease Agreement", uses: 234 },
                { name: "Commercial Lease Agreement", uses: 89 },
                { name: "Short-term Rental Agreement", uses: 156 },
              ].map((template, i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <FileText className="w-8 h-8 text-orange-600" />
                      <Badge variant="outline">{template.uses} uses</Badge>
                    </div>
                    <h4 className="font-medium mb-2">{template.name}</h4>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">Use Template</Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
