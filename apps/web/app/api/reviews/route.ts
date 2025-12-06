import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const listingId = searchParams.get("listingId")

  const mockReviews = [
    {
      id: "1",
      listingId: listingId || "1",
      userId: "user-1",
      userName: "John Doe",
      rating: 5,
      comment: "Amazing place!",
      createdAt: new Date("2024-11-15").toISOString(),
    },
  ]

  return NextResponse.json({ reviews: mockReviews, total: mockReviews.length })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { listingId, rating, comment } = body

  if (!listingId || !rating) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  return NextResponse.json({ id: Date.now().toString(), listingId, rating, comment }, { status: 201 })
}
