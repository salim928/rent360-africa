export async function GET() {
  const messages = [
    { id: "1", senderId: "user_1", text: "Is the apartment available?", timestamp: new Date().toISOString() },
  ];

  return Response.json({ messages });
}

export async function POST(request: Request) {
  const body = await request.json();
  
  return Response.json({
    success: true,
    messageId: "msg_" + Date.now(),
    timestamp: new Date().toISOString(),
  });
}
