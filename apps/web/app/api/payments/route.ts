import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { bookingId, amount, currency, paymentMethod } = body

  if (!bookingId || !amount) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const payment = {
    id: Date.now().toString(),
    bookingId,
    amount,
    currency,
    paymentMethod,
    status: "pending",
    createdAt: new Date().toISOString(),
  }

  return NextResponse.json(payment, { status: 201 })
}
