import { ReactNode } from "react";

export default function MarketplaceLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="border-b sticky top-0 bg-background z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R3</span>
            </div>
            <span className="text-xl font-bold">Rent360 Africa</span>
          </div>
          <nav className="flex items-center gap-4">
            <a href="/" className="text-sm hover:text-primary">
              Home
            </a>
            <a href="/marketplace" className="text-sm hover:text-primary">
              Browse
            </a>
            <a href="/dashboard" className="text-sm hover:text-primary">
              Dashboard
            </a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
