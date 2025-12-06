import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rent360 Africa - AI-Powered Rental Marketplace",
  description:
    "Pan-African rental marketplace for properties, vehicles, equipment, and events. Find and list rentals across Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
