import type { Types } from 'mongoose'

export interface IDBGamePaymentGate {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId

  type: string

  bank: {
    name: string
    person: string
    number: string
  }

  webhook: {
    key: string
    qrcode: string
  }
  
  bonus: {
    default: number
    limit: {
      number: number
      start: Date
      end: Date
    }
  }
  
  display: boolean
}

export interface IDBGamePayment {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId

  gate: Types.ObjectId

  user: Types.ObjectId

  card: {
    net: string
    seri: string
    pin: string
  }

  money: number

  code: string
  token: string
  qrcode: string

  status: number,
  
  verify: {
    person: Types.ObjectId
    time: Date
    reason: string
  }
}