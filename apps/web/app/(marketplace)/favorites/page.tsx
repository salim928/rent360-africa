import { ListingCard } from "@/components/marketplace/listing-card"

export default function FavoritesPage() {
  const favorites = [
    {
      id: "1",
      title: "Modern 2BR Apartment in East Legon",
      category: "Property",
      location: "East Legon, Accra, Ghana",
      price: 2500,
      currency: "GHS",
      period: "month",
      rating: 4.8,
      reviews: 24,
      image: "/placeholder.svg",
      verified: true,
      features: ["2 beds", "2 baths", "WiFi", "Parking"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Favorites</h1>
          <p className="text-gray-600 mt-2">{favorites.length} saved listings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  )
}
