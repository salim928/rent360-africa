import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-background">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">R3</span>
            </div>
            <span className="text-2xl font-bold">Rent360 Africa</span>
          </div>
          <p className="text-muted-foreground">
            Your trusted Pan-African rental marketplace
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
