export enum PaymentMethodEnum {
  CASH = "CASH",
  TOKEN = "TOKEN",
  DEBIT_CARD = "DEBIT_CARD",
  INVITATION = "INVITATION",
}

export interface PaymentMethod {
  id: string;
  name: string;
  type: PaymentMethodEnum;
}
