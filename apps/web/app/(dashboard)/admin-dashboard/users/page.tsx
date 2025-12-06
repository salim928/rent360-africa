import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">User Management</h1>
        <p className="text-muted-foreground">Manage platform users, roles, and permissions</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Users</CardDescription>
            <CardTitle className="text-3xl">12,450</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-green-600">+324 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Active Users</CardDescription>
            <CardTitle className="text-3xl">9,234</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">74% of total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>New Today</CardDescription>
            <CardTitle className="text-3xl">45</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-green-600">+12% from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Pending Verification</CardDescription>
            <CardTitle className="text-3xl">128</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-orange-600">Requires review</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <Input placeholder="Search users by name, email, or ID..." className="max-w-md" />
        <Button variant="outline">Filters</Button>
        <Button variant="outline">Export</Button>
        <Button>Add User</Button>
      </div>

      {/* Users List */}
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Users</TabsTrigger>
          <TabsTrigger value="owners">Owners</TabsTrigger>
          <TabsTrigger value="renters">Renters</TabsTrigger>
          <TabsTrigger value="agencies">Agencies</TabsTrigger>
          <TabsTrigger value="suspended">Suspended</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback>KM</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">Kwame Mensah</p>
                        <Badge variant="outline">Owner</Badge>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">Verified</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">kwame.mensah@email.com</p>
                      <p className="text-xs text-muted-foreground">ID: USER-{1000 + i} • Joined: Jan {15 + i}, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-medium">{5 + i} Listings</p>
                      <p className="text-sm text-muted-foreground">GHS {12000 + i * 1000} revenue</p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">Actions</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit User</DropdownMenuItem>
                        <DropdownMenuItem>View Activity</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Suspend User</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Pagination */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Showing 1-5 of 12,450 users</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <span className="px-2">...</span>
              <Button variant="outline" size="sm">2,490</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
