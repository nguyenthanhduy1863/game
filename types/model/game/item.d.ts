import type { Types } from 'mongoose'

export interface IDBGameItem {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId

  code: string
  name: string
  image: string
  type: string
}

export interface IDBGameItemBox {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date
  
  game: Types.ObjectId

  name: string
  
  gift: Array<{
    item: Types.ObjectId | IDBGameItem,
    amount: number
  }>
}