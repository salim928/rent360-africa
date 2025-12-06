import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Star, ThumbsUp, Flag } from "lucide-react";

export default function ReviewsPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Reviews & Ratings</h1>
          <p className="text-gray-600 mt-1">Manage customer feedback and ratings</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="text-sm text-gray-600">Average Rating</div>
          <div className="text-2xl font-bold mt-2 flex items-center gap-2">
            4.8 <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          </div>
          <div className="text-sm text-green-600 mt-1">+0.2 from last month</div>
        </Card>
        <Card className="p-6">
          <div className="text-sm text-gray-600">Total Reviews</div>
          <div className="text-2xl font-bold mt-2">1,234</div>
          <div className="text-sm text-blue-600 mt-1">+45 this month</div>
        </Card>
        <Card className="p-6">
          <div className="text-sm text-gray-600">Positive</div>
          <div className="text-2xl font-bold mt-2 text-green-600">1,156</div>
          <div className="text-sm text-gray-600 mt-1">93.7%</div>
        </Card>
        <Card className="p-6">
          <div className="text-sm text-gray-600">Pending Reply</div>
          <div className="text-2xl font-bold mt-2 text-orange-600">23</div>
          <div className="text-sm text-orange-600 mt-1">Needs attention</div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex flex-wrap gap-4">
          <Input placeholder="Search reviews..." className="flex-1 min-w-[200px]" />
          <select className="px-4 py-2 border rounded-md">
            <option>All Ratings</option>
            <option>5 Stars</option>
            <option>4 Stars</option>
            <option>3 Stars</option>
            <option>2 Stars</option>
            <option>1 Star</option>
          </select>
        </div>
      </Card>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Reviews</TabsTrigger>
          <TabsTrigger value="pending">Pending Reply</TabsTrigger>
          <TabsTrigger value="flagged">Flagged</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-4">
          {[
            { user: "Kwame Mensah", rating: 5, property: "Modern Apartment", date: "2024-12-05", text: "Excellent place! Clean, modern, and great location.", helpful: 12 },
            { user: "Sarah Osei", rating: 4, property: "Toyota Camry", date: "2024-12-04", text: "Good car, smooth ride. Minor delay at pickup.", helpful: 8 },
            { user: "John Doe", rating: 5, property: "Office Space", date: "2024-12-03", text: "Perfect for our team meetings. Professional setup.", helpful: 15 },
          ].map((review, i) => (
            <Card key={i} className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-600">
                    {review.user.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{review.user}</span>
                      <div className="flex">
                        {Array.from({ length: review.rating }).map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{review.property} • {review.date}</div>
                    <p className="mt-3 text-gray-700">{review.text}</p>
                    <div className="flex gap-4 mt-4">
                      <Button variant="ghost" size="sm">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        Helpful ({review.helpful})
                      </Button>
                      <Button variant="ghost" size="sm">Reply</Button>
                      <Button variant="ghost" size="sm">
                        <Flag className="h-4 w-4 mr-1" />
                        Flag
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
