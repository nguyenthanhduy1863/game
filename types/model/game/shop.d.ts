import type { Types } from 'mongoose'

export interface IDBGameShopConfig {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId

  maintenance: boolean
  
  discount: {
    number: number
    expired: Date
  }
}

export interface IDBGameShopItem {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId

  config: Types.ObjectId

  item: Types.ObjectId
  amount: number
  price: number
  limit: number

  pin: Boolean
  display: Boolean
}

export interface IDBGameShopHistory {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId
  user: Types.ObjectId

  server: string
  role: string

  item: Types.ObjectId
  amount: number
  price: number
}