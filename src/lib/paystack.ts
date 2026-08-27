import { PAYSTACK_PUBLIC_KEY } from "./firebase";

declare global {
  interface Window {
    PaystackPop?: {
      setup: (config: PaystackConfig) => { openIframe: () => void };
    };
  }
}

export interface PaystackConfig {
  key: string;
  email: string;
  amount: number;
  currency: string;
  ref: string;
  metadata: {
    custom_fields: { display_name: string; variable_name: string; value: string }[];
  };
  callback: (response: PaystackResponse) => void;
  onClose: () => void;
}

export interface PaystackResponse {
  reference: string;
  status: string;
  trans: string;
  transaction: string;
  message: string;
}

let scriptLoaded = false;
let scriptLoading: Promise<void> | null = null;

export function loadPaystackScript(): Promise<void> {
  if (scriptLoaded) return Promise.resolve();
  if (scriptLoading) return scriptLoading;

  scriptLoading = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => {
      scriptLoaded = true;
      resolve();
    };
    script.onerror = () => reject(new Error("Failed to load Paystack script"));
    document.head.appendChild(script);
  });

  return scriptLoading;
}

export interface DonateParams {
  email: string;
  name: string;
  amountKobo: number;
  currency: string;
  metadata?: { label: string; value: string }[];
}

export async function initiatePaystack(
  params: DonateParams,
  onSuccess: (response: PaystackResponse) => void,
  onClose: () => void,
): Promise<void> {
  await loadPaystackScript();

  if (!window.PaystackPop) {
    throw new Error("Paystack script loaded but PaystackPop not found");
  }

  const reference = `ENV-${Date.now()}-${Math.floor(Math.random() * 1000000)}`;

  const config: PaystackConfig = {
    key: PAYSTACK_PUBLIC_KEY,
    email: params.email,
    amount: params.amountKobo,
    currency: params.currency,
    ref: reference,
    metadata: {
      custom_fields: [
        { display_name: "Donor Name", variable_name: "donor_name", value: params.name },
        ...(params.metadata ?? []),
      ],
    },
    callback: onSuccess,
    onClose,
  };

  const handler = window.PaystackPop.setup(config);
  handler.openIframe();
}

export function nairaToKobo(naira: number): number {
  return Math.round(naira * 100);
}
