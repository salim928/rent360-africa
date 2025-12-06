import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const rateLimit = new Map<string, number[]>();

export function middleware(request: NextRequest) {
  // Rate limiting for API routes
  if (request.nextUrl.pathname.startsWith('/api')) {
    const ip = request.ip || 'unknown';
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minutes
    const max = 100; // 100 requests per window

    const requests = rateLimit.get(ip) || [];
    const recentRequests = requests.filter(time => now - time < windowMs);

    if (recentRequests.length >= max) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      );
    }

    recentRequests.push(now);
    rateLimit.set(ip, recentRequests);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
