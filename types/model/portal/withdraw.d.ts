import type { Types } from 'mongoose'

export interface IDBPortalWithdraw {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  user: Types.ObjectId

  bank: {
    name: string
    person: string
    number: string
  }

  diamond: number

  code: string

  status: number
  
  verify: {
    person: Types.ObjectId
    time: Date
    reason: string
  }
}