// Payment Types
export enum PaymentMethod {
  MOBILE_MONEY = "MOBILE_MONEY",
  CARD = "CARD",
  BANK_TRANSFER = "BANK_TRANSFER",
  WALLET = "WALLET",
}

export enum PaymentProvider {
  MTN_MOBILE_MONEY = "MTN_MOBILE_MONEY",
  VODAFONE_CASH = "VODAFONE_CASH",
  AIRTEL_MONEY = "AIRTEL_MONEY",
  STRIPE = "STRIPE",
  PAYSTACK = "PAYSTACK",
  FLUTTERWAVE = "FLUTTERWAVE",
}

export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  currency: string;
  method: PaymentMethod;
  provider: PaymentProvider;
  status: "PENDING" | "PROCESSING" | "COMPLETED" | "FAILED" | "REFUNDED";
  transactionId?: string;
  createdAt: Date;
  updatedAt: Date;
  metadata?: Record<string, any>;
}
