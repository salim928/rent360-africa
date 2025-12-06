export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file');

  if (!file) {
    return Response.json({ error: 'No file provided' }, { status: 400 });
  }

  return Response.json({
    success: true,
    fileId: "file_" + Date.now(),
    url: "/uploads/placeholder.jpg",
  });
}
