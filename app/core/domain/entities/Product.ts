export enum ProductEnum {
  DRINK = "DRINK",
  SHOT = "SHOT",
  SODA = "SODA",
  BEER = "BEER",
}

export interface Product {
  id: string;
  name: string;
  type: ProductEnum;
  price: number;
  image: string;
  description: string;
}
