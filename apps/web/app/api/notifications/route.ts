import { NextRequest, NextResponse } from 'next/server';

// GET /api/notifications - Get user notifications
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get('page') || '1');
  const perPage = parseInt(searchParams.get('perPage') || '20');
  const unreadOnly = searchParams.get('unreadOnly') === 'true';
  const category = searchParams.get('category');

  try {
    // TODO: Replace with actual database queries
    const notifications = [
      {
        id: '1',
        type: 'booking_request',
        title: 'New Booking Request',
        message: 'Sarah Johnson requested to book your Modern 2BR Apartment for Jan 15-30, 2025',
        read: false,
        createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
        data: {
          bookingId: 'B-12345',
          listingId: 'L-789',
          userId: 'U-456',
        },
        actionUrl: '/bookings/B-12345',
      },
      {
        id: '2',
        type: 'payment_received',
        title: 'Payment Received',
        message: 'You received GHS 2,500 for booking #B-12344',
        read: false,
        createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
        data: {
          amount: 2500,
          currency: 'GHS',
          bookingId: 'B-12344',
        },
        actionUrl: '/bookings/B-12344',
      },
      {
        id: '3',
        type: 'review_received',
        title: 'New Review',
        message: 'Michael Brown left you a 5-star review',
        read: true,
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
        data: {
          rating: 5,
          reviewId: 'R-789',
          listingId: 'L-789',
        },
        actionUrl: '/listings/L-789',
      },
    ];

    // Filter by unread if requested
    let filteredNotifications = unreadOnly 
      ? notifications.filter(n => !n.read)
      : notifications;

    // Filter by category if provided
    if (category) {
      filteredNotifications = filteredNotifications.filter(n => n.type === category);
    }

    // Pagination
    const total = filteredNotifications.length;
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const paginatedNotifications = filteredNotifications.slice(start, end);

    return NextResponse.json({
      success: true,
      data: paginatedNotifications,
      pagination: {
        page,
        perPage,
        total,
        totalPages: Math.ceil(total / perPage),
      },
      unreadCount: notifications.filter(n => !n.read).length,
    });
  } catch (error) {
    console.error('Notifications error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch notifications' },
      { status: 500 }
    );
  }
}

// POST /api/notifications - Create notification
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, type, title, message, data, actionUrl } = body;

    if (!userId || !type || !title || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Save notification to database
    const notification = {
      id: `N-${Date.now()}`,
      userId,
      type,
      title,
      message,
      data: data || {},
      actionUrl: actionUrl || null,
      read: false,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      data: notification,
      message: 'Notification created successfully',
    }, { status: 201 });
  } catch (error) {
    console.error('Create notification error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create notification' },
      { status: 500 }
    );
  }
}

// PATCH /api/notifications - Mark notification as read
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, read } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Notification ID is required' },
        { status: 400 }
      );
    }

    // TODO: Update notification in database
    const updatedNotification = {
      id,
      read: read ?? true,
      readAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      data: updatedNotification,
      message: 'Notification updated successfully',
    });
  } catch (error) {
    console.error('Update notification error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update notification' },
      { status: 500 }
    );
  }
}
