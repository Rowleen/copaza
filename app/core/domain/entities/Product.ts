export enum ProductEnum {
  COPA = "COPA",
  CERVEZA = "CERVEZA",
  REFRESCO = "REFRESCO",
  CHUPITO = "CHUPITO",
}

export interface Product {
  id: string;
  name: string;
  type: ProductEnum;
  price: number;
  quantity: number;
  image: string;
  description: string;
}
