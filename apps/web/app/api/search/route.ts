export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  const results = [
    { id: "1", title: "Modern 2BR Apartment", price: 2500, location: "East Legon", rating: 4.8 },
    { id: "2", title: "Toyota Camry 2020", price: 150, location: "Airport", rating: 4.6 },
  ];

  return Response.json({ results, total: results.length });
}
