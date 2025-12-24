export enum ItemType {
  DRINK,
  BEER,
  SODA,
  SHOOT
}

export enum SubType {
  RUM,
  WHISKY,
  GIN,
  VODKA,
}

export interface Item {
  id: number
  name: string
  type: ItemType
  subType?: SubType
  price: number
  extra?: boolean
}
