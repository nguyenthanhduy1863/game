import type { Types } from 'mongoose'

export interface IDBPortalUser {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  auth: {
    username: string
    password: string
    type: number
    block: boolean
  }

  profile: {
    fullname: string
    email: string
    phone: string
    avatar: string
    address: string
  }
  
  referral: {
    code: string
    person: Types.ObjectId
    count: number
  }

  currency: {
    bean: number
    diamond: number
    exp: number
  }

  login: {
    month: number
    total: number
  }

  pay: {
    day: {
      money: number
      count: number
    }
    month: {
      money: number
      count: number
    }
    total: {
      money: number
      count: number
    }
  }
}

export interface IDBPortalUserLogin {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  user: Types.ObjectId
}