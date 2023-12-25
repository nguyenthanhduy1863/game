import type { Types } from 'mongoose'

export * from './model'

export interface IRes {
  code? : number
  message?: string
  result?: any
}

export interface IAuth {
  _id : Types.ObjectId
  username: string
  type: number
}

export interface IFormatDate {
  day: number
  month: number
  year: number
  hour: number
  minute: number
  second: number
  timestamp: number
  source: any
}