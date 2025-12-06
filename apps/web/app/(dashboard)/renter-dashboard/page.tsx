import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  Search, 
  Calendar,
  MapPin,
  DollarSign,
  Bell,
  MessageSquare,
  FileText,
  Star
} from "lucide-react";
import { StatsCard } from "@/components/dashboard/stats-card";

export default function RenterDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Renter Dashboard</h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Find your perfect rental and manage bookings
              </p>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Search className="w-4 h-4 mr-2" />
              Search Rentals
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Active Bookings"
            value="2"
            change="1 upcoming"
            trend="neutral"
            icon={<Calendar className="w-5 h-5 text-orange-600" />}
          />
          <StatsCard
            title="Saved Favorites"
            value="15"
            change="+3 this week"
            trend="up"
            icon={<Heart className="w-5 h-5 text-red-600" />}
          />
          <StatsCard
            title="Total Spent"
            value="GHS 8,500"
            change="This year"
            trend="neutral"
            icon={<DollarSign className="w-5 h-5 text-green-600" />}
          />
          <StatsCard
            title="Pending Reviews"
            value="1"
            change="Write review"
            trend="neutral"
            icon={<Star className="w-5 h-5 text-yellow-600" />}
          />
        </div>

        {/* Current Rental */}
        <Card className="mb-8 border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-600" />
              Current Rental
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4">
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                No Image
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">Modern 2BR Apartment in East Legon</h3>
                <p className="text-sm text-gray-600">East Legon, Accra, Ghana</p>
                <div className="flex gap-2 mt-2">
                  <Badge variant="outline" className="text-green-600 border-green-600">Active</Badge>
                  <Badge variant="outline">Property</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div>
                    <span className="text-sm text-gray-600">Monthly Rent</span>
                    <p className="font-semibold">GHS 2,500</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Move-in Date</span>
                    <p className="font-semibold">Jan 1, 2024</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Lease Ends</span>
                    <p className="font-semibold">Dec 31, 2024</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contact Host
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    View Lease
                  </Button>
                  <Button variant="outline" size="sm">
                    Pay Rent
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="favorites" className="mb-8">
          <TabsList>
            <TabsTrigger value="favorites">
              <Heart className="w-4 h-4 mr-2" />
              Favorites ({15})
            </TabsTrigger>
            <TabsTrigger value="history">
              <Calendar className="w-4 h-4 mr-2" />
              Booking History
            </TabsTrigger>
            <TabsTrigger value="reviews">
              <Star className="w-4 h-4 mr-2" />
              My Reviews
            </TabsTrigger>
          </TabsList>

          <TabsContent value="favorites" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  No Image
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">Luxury Villa - Cantonments</h3>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Cantonments, Accra</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-orange-600 font-bold">GHS 5,000</span>
                      <span className="text-sm text-gray-600">/month</span>
                    </div>
                    <Button size="sm">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
