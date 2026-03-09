export enum EPaymentMethodNetwork {
  MASTERCARD = "MASTERCARD",
  VISA = "VISA",
  AMEX = "AMEX",
  DISCOVER = "DISCOVER",
  JCB = "JCB",
  UNIONPAY = "UNIONPAY",
  TROY = "TROY",
  DINERS = "DINERS"
}

export type TBin = {
  prefix: string;
  iin: number;
  phone: string;
  type: "CREDIT" | "DEBIT" | "PREPAID";
  brand: string;
  country: string;
  issuer: string;
  network: EPaymentMethodNetwork;
};

export type TCard = {
  scheme: string;
  name: string;
  pan: string;
  month: string;
  year: string;
  cvv: string;
};
