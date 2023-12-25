import type { Types } from 'mongoose'

export interface IDBGameEventConfig {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId

  maintenance: boolean
}

export interface IDBGameEventMilestone {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId

  config: Types.ObjectId

  type: string
  need: number
  gift: Array<{
    item: Types.ObjectId
    amount: number
  }>

  display: boolean
}

export interface IDBGameEventHistory {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId
  user: Types.ObjectId

  server: string
  role: string

  milestone: Types.ObjectId
  type: string
  need: number
}