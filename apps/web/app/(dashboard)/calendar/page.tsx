import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

export default function CalendarPage() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = Array.from({ length: 35 }, (_, i) => i + 1);

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Booking Calendar</h1>
          <p className="text-gray-600 mt-1">Manage your bookings visually</p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600">
          <Plus className="h-4 w-4 mr-2" />
          New Booking
        </Button>
      </div>

      {/* Calendar Controls */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-xl font-bold">December 2024</h2>
            <Button variant="outline" size="sm">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Month</Button>
            <Button variant="outline" size="sm">Week</Button>
            <Button variant="outline" size="sm">Day</Button>
            <Button variant="outline" size="sm" className="bg-orange-500 text-white hover:bg-orange-600">
              Today
            </Button>
          </div>
        </div>

        {/* Legend */}
        <div className="flex gap-4 mb-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-green-500 rounded"></div>
            <span>Confirmed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-orange-500 rounded"></div>
            <span>Pending</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-blue-500 rounded"></div>
            <span>Check-in</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-purple-500 rounded"></div>
            <span>Check-out</span>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="border rounded-lg overflow-hidden">
          {/* Day Headers */}
          <div className="grid grid-cols-7 bg-gray-50 border-b">
            {days.map((day) => (
              <div key={day} className="p-3 text-center text-sm font-medium text-gray-600">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7">
            {dates.map((date) => {
              // Sample booking data for demo
              const hasBooking = date % 7 === 0 || date % 5 === 0;
              const bookingType = 
                date % 7 === 0 ? "confirmed" :
                date % 5 === 0 ? "pending" : "";
              
              return (
                <div
                  key={date}
                  className={`min-h-[100px] p-2 border-r border-b hover:bg-gray-50 cursor-pointer ${
                    date > 30 ? "bg-gray-50 text-gray-400" : ""
                  }`}
                >
                  <div className="font-medium text-sm mb-1">{date <= 30 ? date : date - 30}</div>
                  {hasBooking && date <= 30 && (
                    <div className="space-y-1">
                      <div
                        className={`text-xs p-1 rounded ${
                          bookingType === "confirmed"
                            ? "bg-green-100 text-green-800"
                            : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {bookingType === "confirmed" ? "APT-101" : "VEH-205"}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      {/* Upcoming Bookings */}
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-4">Upcoming Bookings</h3>
        <div className="space-y-3">
          {[
            { property: "Modern Apartment - APT-101", guest: "John Mensah", checkIn: "Dec 12", checkOut: "Dec 15", status: "Confirmed" },
            { property: "Toyota Camry - VEH-205", guest: "Sarah Osei", checkIn: "Dec 14", checkOut: "Dec 16", status: "Pending" },
            { property: "Office Space - OFF-303", guest: "Tech Startup Co.", checkIn: "Dec 18", checkOut: "Dec 25", status: "Confirmed" },
          ].map((booking, i) => (
            <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
              <div>
                <div className="font-medium">{booking.property}</div>
                <div className="text-sm text-gray-600 mt-1">Guest: {booking.guest}</div>
              </div>
              <div className="text-sm text-gray-600">
                {booking.checkIn} → {booking.checkOut}
              </div>
              <Badge className={booking.status === "Confirmed" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"}>
                {booking.status}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
