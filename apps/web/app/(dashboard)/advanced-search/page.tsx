import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star, Heart, Save } from "lucide-react";

export default function AdvancedSearchPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Advanced Search</h1>
          <p className="text-gray-600 mt-1">Find exactly what you're looking for</p>
        </div>
        <Button variant="outline">
          <Save className="h-4 w-4 mr-2" />
          Saved Searches (3)
        </Button>
      </div>

      <Card className="p-6">
        <div className="space-y-6">
          <div className="flex gap-4">
            <Input placeholder="What are you looking for?" className="flex-1" />
            <Input placeholder="Location" className="w-64" />
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>

          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Filters</h3>
              <Button variant="ghost" size="sm">Clear All</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Category</label>
                <select className="w-full px-3 py-2 border rounded-md">
                  <option>All Categories</option>
                  <option>Properties</option>
                  <option>Vehicles</option>
                  <option>Equipment</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Price Range</label>
                <div className="flex gap-2">
                  <Input placeholder="Min" type="number" />
                  <Input placeholder="Max" type="number" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Rating</label>
                <select className="w-full px-3 py-2 border rounded-md">
                  <option>Any Rating</option>
                  <option>4+ Stars</option>
                  <option>3+ Stars</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Verification</label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="text-sm">Verified Only</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Modern 2BR Apartment", location: "East Legon, Accra", price: 2500, rating: 4.8, verified: true },
          { title: "Toyota Camry 2020", location: "Airport, Accra", price: 150, rating: 4.6, verified: true },
          { title: "Office Space", location: "Cantonments", price: 3500, rating: 4.9, verified: true },
        ].map((item, i) => (
          <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute top-2 right-2 h-8 w-8 bg-white rounded-full flex items-center justify-center">
                <Heart className="h-4 w-4" />
              </div>
              {item.verified && (
                <Badge className="absolute top-2 left-2 bg-orange-500">Verified</Badge>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-medium">{item.title}</h3>
              <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                <MapPin className="h-3 w-3" />
                {item.location}
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{item.rating}</span>
                </div>
                <div className="text-lg font-bold">GHS {item.price}/mo</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
