import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bell,
  MessageSquare,
  DollarSign,
  Home,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Settings
} from "lucide-react";
import { StatsCard } from "@/components/dashboard/stats-card";

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Notifications Center</h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Manage and view all notifications
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Mark All Read</Button>
              <Button variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                Preferences
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Unread"
            value="23"
            change="12 new today"
            trend="up"
            icon={<Bell className="w-5 h-5 text-orange-600" />}
          />
          <StatsCard
            title="Messages"
            value="8"
            change="3 urgent"
            trend="neutral"
            icon={<MessageSquare className="w-5 h-5 text-blue-600" />}
          />
          <StatsCard
            title="Alerts"
            value="5"
            change="Require action"
            trend="down"
            icon={<AlertTriangle className="w-5 h-5 text-red-600" />}
          />
          <StatsCard
            title="Completed"
            value="156"
            change="This month"
            trend="up"
            icon={<CheckCircle className="w-5 h-5 text-green-600" />}
          />
        </div>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle>All Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All (23)</TabsTrigger>
                <TabsTrigger value="unread">Unread (23)</TabsTrigger>
                <TabsTrigger value="bookings">Bookings</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
                <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-3 mt-4">
                {[
                  {
                    type: "booking",
                    icon: <Calendar className="w-5 h-5" />,
                    title: "New booking request",
                    message: "Kwame Mensah requested to book your East Legon Apartment for 3 nights",
                    time: "2 minutes ago",
                    unread: true,
                    action: "Review Request"
                  },
                  {
                    type: "payment",
                    icon: <DollarSign className="w-5 h-5" />,
                    title: "Payment received",
                    message: "GHS 2,500 payment received for Airport Residential - Rent for December 2024",
                    time: "1 hour ago",
                    unread: true,
                    action: "View Receipt"
                  },
                  {
                    type: "maintenance",
                    icon: <AlertTriangle className="w-5 h-5" />,
                    title: "Maintenance request",
                    message: "Tenant reported leaking faucet at Tema Community 25 - Requires immediate attention",
                    time: "3 hours ago",
                    unread: true,
                    action: "Assign Technician"
                  },
                  {
                    type: "message",
                    icon: <MessageSquare className="w-5 h-5" />,
                    title: "New message from tenant",
                    message: "Ama Serwaa: When will the AC repair be completed?",
                    time: "5 hours ago",
                    unread: true,
                    action: "Reply"
                  },
                  {
                    type: "contract",
                    icon: <Home className="w-5 h-5" />,
                    title: "Contract expiring soon",
                    message: "Lease for Legon Student Housing - Room 204 expires in 15 days",
                    time: "1 day ago",
                    unread: false,
                    action: "Start Renewal"
                  },
                  {
                    type: "review",
                    icon: <CheckCircle className="w-5 h-5" />,
                    title: "New review received",
                    message: "Yaw Boateng left a 5-star review for Cantonments Villa",
                    time: "2 days ago",
                    unread: false,
                    action: "View Review"
                  },
                ].map((notification, i) => (
                  <div 
                    key={i} 
                    className={`flex items-start gap-4 p-4 border rounded-lg ${
                      notification.unread ? 'bg-orange-50 border-orange-200' : 'bg-white'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      notification.type === 'booking' ? 'bg-blue-100 text-blue-600' :
                      notification.type === 'payment' ? 'bg-green-100 text-green-600' :
                      notification.type === 'maintenance' ? 'bg-red-100 text-red-600' :
                      notification.type === 'message' ? 'bg-purple-100 text-purple-600' :
                      notification.type === 'contract' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {notification.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium">{notification.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                        </div>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        )}
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button variant="outline" size="sm">{notification.action}</Button>
                        <Button variant="ghost" size="sm">Dismiss</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="unread" className="mt-4">
                <div className="text-center py-8">
                  <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="font-medium mb-2">23 unread notifications</h3>
                  <p className="text-sm text-gray-600">Filter by category to view specific notifications</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { category: "Booking Requests", email: true, push: true, sms: false },
                { category: "Payment Confirmations", email: true, push: true, sms: true },
                { category: "Maintenance Requests", email: true, push: true, sms: false },
                { category: "Messages", email: false, push: true, sms: false },
                { category: "Contract Renewals", email: true, push: true, sms: true },
                { category: "Reviews & Ratings", email: true, push: false, sms: false },
              ].map((pref, i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                  <span className="font-medium">{pref.category}</span>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" checked={pref.email} readOnly className="rounded" />
                      <span>Email</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" checked={pref.push} readOnly className="rounded" />
                      <span>Push</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" checked={pref.sms} readOnly className="rounded" />
                      <span>SMS</span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button className="bg-orange-500 hover:bg-orange-600">Save Preferences</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
