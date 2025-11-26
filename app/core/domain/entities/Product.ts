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

export interface Drink extends Product {
  type: ProductEnum.DRINK;
}
export interface Shot extends Product {
  type: ProductEnum.SHOT;
}
export interface Soda extends Product {
  type: ProductEnum.SODA;
}
export interface Beer extends Product {
  type: ProductEnum.BEER;
}
