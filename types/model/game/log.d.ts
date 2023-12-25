import type { Types } from 'mongoose'

export interface IDBGameLogUser {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date
  
  game: Types.ObjectId
  user: Types.ObjectId
  action: string
}

export interface IDBGameLogAdmin {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date
  
  game: Types.ObjectId
  user: Types.ObjectId
  action: string
}