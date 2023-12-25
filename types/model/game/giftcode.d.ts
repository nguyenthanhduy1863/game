import type { Types } from 'mongoose'

export interface IDBGameGiftcode {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId

  code: string
  limit: number
  server: Array<string>
  gift: Array<{
    item: Types.ObjectId
    amount: number
  }>

  time: {
    start: Date
    end: Date
  }
  display: boolean
}

export interface IDBGameGiftcodeHistory {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId
  user: Types.ObjectId

  server: string
  role: string

  giftcode: Types.ObjectId
  code: string
}