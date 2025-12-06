import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  Upload,
  Download,
  Folder,
  File,
  Image,
  FileCheck,
  Plus,
  Search
} from "lucide-react";
import { StatsCard } from "@/components/dashboard/stats-card";

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Document Management</h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Store and organize property documents
              </p>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Upload className="w-4 h-4 mr-2" />
              Upload Document
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Documents"
            value="456"
            change="+23 this month"
            trend="up"
            icon={<FileText className="w-5 h-5 text-blue-600" />}
          />
          <StatsCard
            title="Storage Used"
            value="2.3 GB"
            change="of 10 GB"
            trend="neutral"
            icon={<Folder className="w-5 h-5 text-orange-600" />}
          />
          <StatsCard
            title="Pending Review"
            value="12"
            change="Awaiting approval"
            trend="neutral"
            icon={<FileCheck className="w-5 h-5 text-yellow-600" />}
          />
          <StatsCard
            title="Shared Docs"
            value="89"
            change="With tenants"
            trend="neutral"
            icon={<File className="w-5 h-5 text-green-600" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Folders Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Folders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { name: "Contracts", count: 45, icon: <FileText className="w-4 h-4" /> },
                    { name: "Property Deeds", count: 12, icon: <FileCheck className="w-4 h-4" /> },
                    { name: "Inspection Reports", count: 78, icon: <File className="w-4 h-4" /> },
                    { name: "Insurance", count: 24, icon: <FileText className="w-4 h-4" /> },
                    { name: "Maintenance Records", count: 156, icon: <Folder className="w-4 h-4" /> },
                    { name: "Tenant Documents", count: 89, icon: <File className="w-4 h-4" /> },
                    { name: "Photos", count: 234, icon: <Image className="w-4 h-4" /> },
                  ].map((folder, i) => (
                    <button
                      key={i}
                      className="w-full flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-orange-600">{folder.icon}</div>
                        <span className="text-sm font-medium">{folder.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">{folder.count}</Badge>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Documents</CardTitle>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input placeholder="Search documents..." className="pl-10 w-64" />
                    </div>
                    <Button variant="outline">Sort</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="recent">
                  <TabsList>
                    <TabsTrigger value="recent">Recent</TabsTrigger>
                    <TabsTrigger value="contracts">Contracts</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                    <TabsTrigger value="shared">Shared</TabsTrigger>
                  </TabsList>

                  <TabsContent value="recent" className="space-y-3 mt-4">
                    {[
                      {
                        name: "Lease Agreement - East Legon Apartment.pdf",
                        type: "PDF",
                        size: "2.4 MB",
                        uploaded: "2 hours ago",
                        folder: "Contracts",
                        property: "East Legon Apartment"
                      },
                      {
                        name: "Inspection Report - December 2024.pdf",
                        type: "PDF",
                        size: "1.8 MB",
                        uploaded: "5 hours ago",
                        folder: "Inspection Reports",
                        property: "Airport Residential"
                      },
                      {
                        name: "Property Deed - Cantonments Villa.pdf",
                        type: "PDF",
                        size: "3.2 MB",
                        uploaded: "1 day ago",
                        folder: "Property Deeds",
                        property: "Cantonments Villa"
                      },
                      {
                        name: "Insurance Certificate 2024.pdf",
                        type: "PDF",
                        size: "856 KB",
                        uploaded: "2 days ago",
                        folder: "Insurance",
                        property: "All Properties"
                      },
                      {
                        name: "Tenant ID - Kwame Mensah.jpg",
                        type: "Image",
                        size: "1.2 MB",
                        uploaded: "3 days ago",
                        folder: "Tenant Documents",
                        property: "East Legon Apartment"
                      },
                    ].map((doc, i) => (
                      <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-12 h-12 bg-orange-100 rounded flex items-center justify-center">
                            {doc.type === "PDF" ? (
                              <FileText className="w-6 h-6 text-orange-600" />
                            ) : (
                              <Image className="w-6 h-6 text-orange-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{doc.name}</h4>
                            <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                              <span>{doc.size}</span>
                              <span>•</span>
                              <span>{doc.uploaded}</span>
                              <span>•</span>
                              <Badge variant="outline" className="text-xs">{doc.folder}</Badge>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">{doc.property}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="icon">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">View</Button>
                        </div>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="contracts" className="mt-4">
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <FileText className="w-8 h-8 text-orange-600" />
                              <div>
                                <h4 className="font-medium">Residential Lease Agreement #{i}</h4>
                                <p className="text-sm text-gray-600">Signed on Dec {i}, 2024</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Upload Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Upload</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-medium mb-2">Drop files here to upload</h3>
              <p className="text-sm text-gray-600 mb-4">or click to browse</p>
              <Button>Select Files</Button>
              <p className="text-xs text-gray-500 mt-4">Supported: PDF, DOC, JPG, PNG (Max 10MB)</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
