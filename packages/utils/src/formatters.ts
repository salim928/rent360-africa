/**
 * Format currency with proper localization
 */
export function formatCurrency(
  amount: number,
  currency: string = "GHS",
  locale: string = "en-GH"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}

/**
 * Format date with proper localization
 */
export function formatDate(
  date: Date | string,
  format: "short" | "long" | "relative" = "short",
  locale: string = "en-GH"
): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  if (format === "relative") {
    return formatRelativeTime(dateObj);
  }

  const options: Intl.DateTimeFormatOptions =
    format === "long"
      ? { year: "numeric", month: "long", day: "numeric" }
      : { year: "numeric", month: "short", day: "numeric" };

  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Format relative time (e.g., "2 hours ago")
 */
export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "just now";
  if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  }
  if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }
  if (diffInSeconds < 604800) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }

  return formatDate(date, "short");
}

/**
 * Calculate number of days between two dates
 */
export function calculateDays(startDate: Date, endDate: Date): number {
  const diffInMs = endDate.getTime() - startDate.getTime();
  return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
}
