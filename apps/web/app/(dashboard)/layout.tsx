import { ReactNode } from "react";
import { Home, LayoutDashboard, ListPlus, MessageSquare, Settings } from "lucide-react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R3</span>
            </div>
            <span className="text-xl font-bold">Rent360</span>
          </div>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="/dashboard"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors"
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>Overview</span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard/listings"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors"
              >
                <Home className="h-5 w-5" />
                <span>My Listings</span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard/bookings"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors"
              >
                <ListPlus className="h-5 w-5" />
                <span>Bookings</span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard/messages"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Messages</span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard/settings"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors"
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        <header className="border-b bg-background">
          <div className="px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-4">
              <a href="/marketplace" className="text-sm hover:text-primary">
                Browse Marketplace
              </a>
              <div className="w-8 h-8 bg-primary rounded-full"></div>
            </div>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
