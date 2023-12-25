import type { Types } from 'mongoose'

export interface IDBGameAdsLanding {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId

  code: string
  source: string
  sign: {
    in: number
    up: number
  }
}

export interface IDBGameAdsFrom {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId

  code: string
  note: string
  sign: {
    in: number
    up: number
  }
}