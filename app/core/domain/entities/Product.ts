export enum ProductEnum {
  DRINK = "DRINK",
  SHOT = "SHOT",
  SODA = "SODA",
  BEER = "BEER",
}

export enum SubTypeProduct {
  SODA = "SODA",
  BEER = "BEER",
  SHOT = "SHOT",
  RUM = "RUM",
  GIN = "GIN",
  WHISKEY = "WHISKEY",
  VODKA = "VODKA",
  OTHER = "OTHER",
}

export interface Product {
  id: string;
  name: string;
  type: ProductEnum | SubTypeProduct;
  price: number;
  image: string;
  description: string;
}

export interface Drink extends Product {
  subType:
    | SubTypeProduct.RUM
    | SubTypeProduct.GIN
    | SubTypeProduct.WHISKEY
    | SubTypeProduct.VODKA;
}

export interface Shot extends Product {
  subType: SubTypeProduct.SHOT;
}

export interface Soda extends Product {
  subType: SubTypeProduct.SODA;
}

export interface Beer extends Product {
  subType: SubTypeProduct.BEER;
}

export interface Other extends Product {
  subType: SubTypeProduct.OTHER;
}
