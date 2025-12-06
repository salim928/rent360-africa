import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  MessageSquare, 
  AlertCircle,
  CheckCircle,
  Clock,
  Plus,
  Search
} from "lucide-react";
import { StatsCard } from "@/components/dashboard/stats-card";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Support Center</h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Get help and manage support tickets
              </p>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Plus className="w-4 h-4 mr-2" />
              New Ticket
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Open Tickets"
            value="12"
            change="3 new today"
            trend="up"
            icon={<MessageSquare className="w-5 h-5 text-blue-600" />}
          />
          <StatsCard
            title="In Progress"
            value="8"
            change="Being resolved"
            trend="neutral"
            icon={<Clock className="w-5 h-5 text-yellow-600" />}
          />
          <StatsCard
            title="Resolved"
            value="145"
            change="This month"
            trend="up"
            icon={<CheckCircle className="w-5 h-5 text-green-600" />}
          />
          <StatsCard
            title="Avg Response"
            value="2.3hrs"
            change="Faster than avg"
            trend="up"
            icon={<AlertCircle className="w-5 h-5 text-orange-600" />}
          />
        </div>

        {/* Support Tickets */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Support Tickets</CardTitle>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input placeholder="Search tickets..." className="pl-10 w-64" />
                </div>
                <Button variant="outline">Filter</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="open">
              <TabsList>
                <TabsTrigger value="open">Open (12)</TabsTrigger>
                <TabsTrigger value="in-progress">In Progress (8)</TabsTrigger>
                <TabsTrigger value="resolved">Resolved</TabsTrigger>
                <TabsTrigger value="closed">Closed</TabsTrigger>
              </TabsList>

              <TabsContent value="open" className="space-y-4 mt-4">
                {[
                  {
                    id: "TKT-2024-001",
                    title: "Unable to process payment",
                    description: "Payment gateway showing error when trying to pay monthly rent",
                    priority: "high",
                    category: "Payment Issues",
                    created: "2 hours ago",
                    user: "Kwame Mensah",
                    property: "East Legon Apartment"
                  },
                  {
                    id: "TKT-2024-002",
                    title: "Account verification pending",
                    description: "Submitted documents 3 days ago but account still not verified",
                    priority: "medium",
                    category: "Account",
                    created: "1 day ago",
                    user: "Ama Serwaa",
                    property: "N/A"
                  },
                  {
                    id: "TKT-2024-003",
                    title: "Cannot upload property photos",
                    description: "Getting 'file too large' error when uploading images under 5MB",
                    priority: "low",
                    category: "Technical",
                    created: "2 days ago",
                    user: "Yaw Boateng",
                    property: "Cantonments Villa"
                  },
                ].map((ticket) => (
                  <div key={ticket.id} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium">{ticket.title}</h4>
                        <Badge variant={
                          ticket.priority === "high" ? "destructive" :
                          ticket.priority === "medium" ? "default" :
                          "outline"
                        }>
                          {ticket.priority}
                        </Badge>
                        <Badge variant="outline">{ticket.category}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{ticket.description}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="font-medium">#{ticket.id}</span>
                        <span>•</span>
                        <span>{ticket.user}</span>
                        <span>•</span>
                        <span>{ticket.property}</span>
                        <span>•</span>
                        <span>{ticket.created}</span>
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
                    id: "TKT-2024-010",
                    title: "Listing not appearing in search",
                    description: "Published listing 2 days ago but can't find it in search results",
                    agent: "Support Agent #2",
                    lastUpdate: "30 minutes ago",
                    user: "John Owusu"
                  },
                ].map((ticket) => (
                  <div key={ticket.id} className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium">{ticket.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{ticket.description}</p>
                      </div>
                      <Badge variant="outline" className="text-blue-600 border-blue-600">In Progress</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Assigned to:</span>
                        <p className="font-medium">{ticket.agent}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Last Update:</span>
                        <p className="font-medium">{ticket.lastUpdate}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button variant="outline" size="sm">View Updates</Button>
                      <Button variant="outline" size="sm">Add Note</Button>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="resolved" className="mt-4">
                <div className="space-y-3">
                  {[
                    { id: "TKT-2024-050", title: "Password reset request", resolved: "1 hour ago", rating: 5 },
                    { id: "TKT-2024-051", title: "Booking confirmation not received", resolved: "3 hours ago", rating: 4 },
                    { id: "TKT-2024-052", title: "Question about pricing", resolved: "1 day ago", rating: 5 },
                  ].map((ticket) => (
                    <div key={ticket.id} className="flex items-center justify-between p-4 border border-green-200 bg-green-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{ticket.title}</h4>
                        <p className="text-sm text-gray-600">Resolved {ticket.resolved}</p>
                        <div className="flex items-center gap-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < ticket.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
                          ))}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Find answers to common questions
              </p>
              <Button variant="outline" className="w-full">Browse FAQ</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Live Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Chat with our support team
              </p>
              <Button variant="outline" className="w-full">Start Chat</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Email: support@rent360.africa
                <br />
                Phone: +233 XX XXX XXXX
              </p>
              <Button variant="outline" className="w-full">Send Email</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
