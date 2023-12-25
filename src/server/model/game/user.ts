import type { Mongoose } from 'mongoose'
import type { IDBGameUser, IDBGameUserLogin } from '~~/types'

export const DBGameUser = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameUser>({ 
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGame', index: true },

    user: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalUser', index: true },

    currency: {
      coin: { type: Number, default: 0, index: true },
    },

    login: {
      month: { type: Number, default: 0, index: true },
      total: { type: Number, default: 0, index: true },
    },

    pay: {
      day: {
        money: { type: Number, default: 0, index: true },
        count: { type: Number, default: 0, index: true },
      },
      month: {
        money: { type: Number, default: 0, index: true },
        count: { type: Number, default: 0, index: true },
      },
      total: {
        money: { type: Number, default: 0, index: true },
        count: { type: Number, default: 0, index: true },
      }
    },

    spend: {
      total: {
        coin: { type: Number, default: 0, index: true },
        count: { type: Number, default: 0, index: true },
      },
      day: {
        coin: { type: Number, default: 0, index: true },
        count: { type: Number, default: 0, index: true },
      },
      month: {
        coin: { type: Number, default: 0, index: true },
        count: { type: Number, default: 0, index: true },
      }
    }
  }, {
    timestamps: true
  })

  const model = mongoose.model('GameUser', schema, 'GameUser')
  return model 
}

export const DBGameUserLogin = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameUserLogin>({ 
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGame' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalUser' },
  }, {
    timestamps: true
  })

  const model = mongoose.model('GameUserLogin', schema, 'GameUserLogin')
  return model 
}