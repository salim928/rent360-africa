import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rent360 Africa - Your Pan-African Rental Marketplace",
  description:
    "AI-powered rental marketplace for properties, vehicles, equipment, and events across Africa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
