/**
 * API Client Configuration for Rent360 Africa
 * Centralized configuration for API calls, timeouts, and error handling
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
const API_TIMEOUT = 30000; // 30 seconds

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  pagination?: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiClientOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
  timeout?: number;
  requiresAuth?: boolean;
}

/**
 * Centralized API client for making HTTP requests
 * Handles authentication, error handling, and response formatting
 */
class ApiClient {
  private baseURL: string;
  private timeout: number;
  private authToken: string | null = null;

  constructor(baseURL: string = API_BASE_URL, timeout: number = API_TIMEOUT) {
    this.baseURL = baseURL;
    this.timeout = timeout;
  }

  /**
   * Set authentication token
   */
  setAuthToken(token: string | null) {
    this.authToken = token;
  }

  /**
   * Get authentication token
   */
  getAuthToken(): string | null {
    return this.authToken;
  }

  /**
   * Make an API request
   */
  async request<T = any>(
    endpoint: string,
    options: ApiClientOptions = {}
  ): Promise<ApiResponse<T>> {
    const {
      method = 'GET',
      headers = {},
      body,
      timeout = this.timeout,
      requiresAuth = false,
    } = options;

    const url = `${this.baseURL}${endpoint}`;

    // Build headers
    const requestHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      ...headers,
    };

    // Add auth token if required
    if (requiresAuth && this.authToken) {
      requestHeaders['Authorization'] = `Bearer ${this.authToken}`;
    }

    // Build request options
    const requestOptions: RequestInit = {
      method,
      headers: requestHeaders,
    };

    // Add body for non-GET requests
    if (body && method !== 'GET') {
      requestOptions.body = JSON.stringify(body);
    }

    try {
      // Create abort controller for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, {
        ...requestOptions,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Parse response
      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.error || `HTTP ${response.status}: ${response.statusText}`,
        };
      }

      return data;
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          return {
            success: false,
            error: 'Request timeout',
          };
        }
        return {
          success: false,
          error: error.message || 'Network error',
        };
      }
      return {
        success: false,
        error: 'Unknown error occurred',
      };
    }
  }

  /**
   * GET request
   */
  async get<T = any>(
    endpoint: string,
    options: Omit<ApiClientOptions, 'method' | 'body'> = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  /**
   * POST request
   */
  async post<T = any>(
    endpoint: string,
    body: any,
    options: Omit<ApiClientOptions, 'method' | 'body'> = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'POST', body });
  }

  /**
   * PUT request
   */
  async put<T = any>(
    endpoint: string,
    body: any,
    options: Omit<ApiClientOptions, 'method' | 'body'> = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'PUT', body });
  }

  /**
   * PATCH request
   */
  async patch<T = any>(
    endpoint: string,
    body: any,
    options: Omit<ApiClientOptions, 'method' | 'body'> = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'PATCH', body });
  }

  /**
   * DELETE request
   */
  async delete<T = any>(
    endpoint: string,
    options: Omit<ApiClientOptions, 'method' | 'body'> = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export class for custom instances
export default ApiClient;

/**
 * API Endpoints
 * Centralized endpoint definitions
 */
export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  
  // Listings
  LISTINGS: {
    LIST: '/listings',
    GET: (id: string) => `/listings/${id}`,
    CREATE: '/listings',
    UPDATE: (id: string) => `/listings/${id}`,
    DELETE: (id: string) => `/listings/${id}`,
  },
  
  // Bookings
  BOOKINGS: {
    LIST: '/bookings',
    GET: (id: string) => `/bookings/${id}`,
    CREATE: '/bookings',
    UPDATE: (id: string) => `/bookings/${id}`,
    CANCEL: (id: string) => `/bookings/${id}/cancel`,
  },
  
  // Users
  USERS: {
    ME: '/users/me',
    GET: (id: string) => `/users/${id}`,
    UPDATE: (id: string) => `/users/${id}`,
  },
  
  // Reviews
  REVIEWS: {
    LIST: '/reviews',
    GET: (id: string) => `/reviews/${id}`,
    CREATE: '/reviews',
    UPDATE: (id: string) => `/reviews/${id}`,
  },
  
  // Payments
  PAYMENTS: {
    INITIALIZE: '/payments',
    VERIFY: (reference: string) => `/payments/verify/${reference}`,
    HISTORY: '/payments/history',
  },
  
  // Analytics
  ANALYTICS: {
    OVERVIEW: '/analytics',
    REVENUE: '/analytics?type=revenue',
    BOOKINGS: '/analytics?type=bookings',
    LISTINGS: '/analytics?type=listings',
    USERS: '/analytics?type=users',
    EXPORT: '/analytics/export',
  },
  
  // Notifications
  NOTIFICATIONS: {
    LIST: '/notifications',
    GET: (id: string) => `/notifications/${id}`,
    MARK_READ: '/notifications',
    DELETE: (id: string) => `/notifications?id=${id}`,
  },
};
