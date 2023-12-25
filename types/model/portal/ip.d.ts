import type { Types } from 'mongoose'

export interface IDBPortalIPUser {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date
  
  user: Types.ObjectId
  ip: string
}

export interface IDBPortalIPAdmin {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date
  
  ip: string
}

export interface IDBPortalIPBlock {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date
  
  ip: string
}
