import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Download, Search } from "lucide-react";

export default function PaymentsPage() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Payment History</h1>
          <p className="text-gray-600 mt-1">Track all your payment transactions</p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="text-sm text-gray-600">Total Paid</div>
          <div className="text-2xl font-bold mt-2">GHS 45,230</div>
          <div className="text-sm text-green-600 mt-1">+12% from last month</div>
        </Card>
        <Card className="p-6">
          <div className="text-sm text-gray-600">Pending</div>
          <div className="text-2xl font-bold mt-2">GHS 8,450</div>
          <div className="text-sm text-orange-600 mt-1">3 payments</div>
        </Card>
        <Card className="p-6">
          <div className="text-sm text-gray-600">Failed</div>
          <div className="text-2xl font-bold mt-2">GHS 1,200</div>
          <div className="text-sm text-red-600 mt-1">2 payments</div>
        </Card>
        <Card className="p-6">
          <div className="text-sm text-gray-600">Refunded</div>
          <div className="text-2xl font-bold mt-2">GHS 2,100</div>
          <div className="text-sm text-blue-600 mt-1">1 refund</div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <Input placeholder="Search payments..." className="w-full" />
          </div>
          <select className="px-4 py-2 border rounded-md">
            <option>All Status</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>Failed</option>
            <option>Refunded</option>
          </select>
          <select className="px-4 py-2 border rounded-md">
            <option>All Methods</option>
            <option>Card</option>
            <option>Mobile Money</option>
            <option>Bank Transfer</option>
          </select>
          <Input type="date" className="w-auto" />
          <Input type="date" className="w-auto" />
        </div>
      </Card>

      {/* Payments List */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Method</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                { date: "2024-12-05", desc: "Booking #BK-1234 - Modern Apartment", method: "Mobile Money", amount: 2500, status: "Completed" },
                { date: "2024-12-04", desc: "Booking #BK-1233 - Toyota Camry Rental", method: "Card", amount: 450, status: "Completed" },
                { date: "2024-12-03", desc: "Booking #BK-1232 - Office Space", method: "Bank Transfer", amount: 3500, status: "Pending" },
                { date: "2024-12-02", desc: "Booking #BK-1231 - Event Equipment", method: "Mobile Money", amount: 800, status: "Completed" },
                { date: "2024-12-01", desc: "Booking #BK-1230 - Construction Equipment", method: "Card", amount: 1200, status: "Failed" },
              ].map((payment, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">{payment.date}</td>
                  <td className="px-6 py-4 text-sm font-medium">{payment.desc}</td>
                  <td className="px-6 py-4 text-sm">{payment.method}</td>
                  <td className="px-6 py-4 text-sm font-semibold">GHS {payment.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm">
                    <Badge 
                      className={
                        payment.status === "Completed" ? "bg-green-100 text-green-800" :
                        payment.status === "Pending" ? "bg-orange-100 text-orange-800" :
                        "bg-red-100 text-red-800"
                      }
                    >
                      {payment.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Receipt
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing 1 to 5 of 124 payments
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="outline" size="sm">1</Button>
            <Button variant="outline" size="sm" className="bg-orange-500 text-white">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
