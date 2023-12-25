import type { Types } from 'mongoose'

export interface IDBGameUser {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId
  
  user: Types.ObjectId

  currency: {
    coin: number
  }

  join: {
    landing: Types.ObjectId
    from: Types.ObjectId
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

  spend: {
    total: {
      coin: number
      count: number
    },
    day: {
      coin: number
      count: number
    },
    month: {
      coin: number
      count: number
    }
  }
}

export interface IDBGameUserLogin {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId
  user: Types.ObjectId
}