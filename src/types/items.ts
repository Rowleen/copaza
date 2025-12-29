export enum ItemType {
  DRINK = 'DRINK',
  BEER = 'BEER',
  SODA = 'SODA',
  SHOT = 'SHOT',
}

export enum SubType {
  RUM = 'RUM',
  WHISKY = 'WHISKY',
  GIN = 'GIN',
  VODKA = 'VODKA',
}

export interface Item {
  id: number
  name: string
  type: ItemType
  subType?: SubType
  price: number
  extra?: boolean
}

export interface Consumption {
  id: number
  consumption: string
  type: ItemType
}
