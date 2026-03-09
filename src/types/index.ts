
export type TBin = {
  prefix: string;
  iin: number;
  phone: string;
  type: "CREDIT" | "DEBIT" | "PREPAID";
  brand: string;
  country: string;
  issuer: string;
  network: "MASTERCARD" | "VISA" | "AMEX" | "DISCOVER" | "JCB" | "UNIONPAY" | "TROY" | "DINERS" | "UNIONPAY";
};

export type TCard = {
  name: string;
  pan: string;
  month: string;
  year: string;
  cvv: string;
};
