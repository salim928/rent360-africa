import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Download, TrendingUp, TrendingDown, DollarSign } from "lucide-react";

export default function TransactionsPage() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Transaction History</h1>
          <p className="text-gray-600 mt-1">Complete income and expense tracking</p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Total Income</div>
              <div className="text-2xl font-bold mt-2 text-green-600">GHS 52,340</div>
              <div className="text-sm text-green-600 mt-1">+18% from last month</div>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Total Expenses</div>
              <div className="text-2xl font-bold mt-2 text-red-600">GHS 15,890</div>
              <div className="text-sm text-red-600 mt-1">+8% from last month</div>
            </div>
            <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center">
              <TrendingDown className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Net Balance</div>
              <div className="text-2xl font-bold mt-2">GHS 36,450</div>
              <div className="text-sm text-blue-600 mt-1">Available balance</div>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-wrap gap-4">
          <Input placeholder="Search transactions..." className="flex-1 min-w-[200px]" />
          <select className="px-4 py-2 border rounded-md">
            <option>All Categories</option>
            <option>Rental Income</option>
            <option>Maintenance</option>
            <option>Utilities</option>
            <option>Insurance</option>
            <option>Other</option>
          </select>
          <Input type="date" className="w-auto" />
          <Input type="date" className="w-auto" />
        </div>
      </Card>

      {/* Transactions Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Transactions</TabsTrigger>
          <TabsTrigger value="income">Income</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    { date: "2024-12-05", desc: "Rental Payment - Apartment #APT-101", category: "Rental Income", type: "Credit", amount: 2500, balance: 36450 },
                    { date: "2024-12-05", desc: "Maintenance - Plumbing Repair", category: "Maintenance", type: "Debit", amount: -450, balance: 33950 },
                    { date: "2024-12-04", desc: "Vehicle Rental Payment", category: "Rental Income", type: "Credit", amount: 800, balance: 34400 },
                    { date: "2024-12-04", desc: "Utility Bill - Electricity", category: "Utilities", type: "Debit", amount: -320, balance: 33600 },
                    { date: "2024-12-03", desc: "Equipment Rental Fee", category: "Rental Income", type: "Credit", amount: 1200, balance: 33920 },
                    { date: "2024-12-03", desc: "Insurance Premium", category: "Insurance", type: "Debit", amount: -850, balance: 32720 },
                    { date: "2024-12-02", desc: "Office Space Rental", category: "Rental Income", type: "Credit", amount: 3500, balance: 33570 },
                  ].map((txn, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm">{txn.date}</td>
                      <td className="px-6 py-4 text-sm font-medium">{txn.desc}</td>
                      <td className="px-6 py-4 text-sm">{txn.category}</td>
                      <td className="px-6 py-4 text-sm">
                        <Badge className={txn.type === "Credit" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                          {txn.type}
                        </Badge>
                      </td>
                      <td className={`px-6 py-4 text-sm font-semibold ${txn.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                        {txn.amount > 0 ? "+" : ""}GHS {Math.abs(txn.amount).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">GHS {txn.balance.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Showing 1 to 7 of 156 transactions
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="outline" size="sm" className="bg-orange-500 text-white">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="income">
          <Card className="p-6 text-center text-gray-500">
            Income transactions filtered view
          </Card>
        </TabsContent>

        <TabsContent value="expenses">
          <Card className="p-6 text-center text-gray-500">
            Expense transactions filtered view
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
