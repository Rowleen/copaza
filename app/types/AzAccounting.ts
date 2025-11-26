import { ProductEnum } from "@/entities/Product";
import { PaymentMethodEnum } from "@/entities/PaymentMethod";

type AzProductAccountingBase = {
  id: string;
  name: string;
  type: ProductEnum;
  price: number;
  paymentMethod: PaymentMethodEnum;
  createdAt: string;
};

export interface AzDrinkAccounting extends AzProductAccountingBase {
  type: ProductEnum.DRINK;
}
export interface AzShotAccounting extends AzProductAccountingBase {
  type: ProductEnum.SHOT;
}
export interface AzSodaAccounting extends AzProductAccountingBase {
  type: ProductEnum.SODA;
}

export interface AzBeerAccounting extends AzProductAccountingBase {
  type: ProductEnum.BEER;
}

export interface AzAccounting {
  drinks: AzDrinkAccounting[];
  shots: AzShotAccounting[];
  sodas: AzSodaAccounting[];
  beers: AzBeerAccounting[];
}
