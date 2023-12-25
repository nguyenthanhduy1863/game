import type { Mongoose } from 'mongoose'
import type { IDBGameShopConfig, IDBGameShopItem, IDBGameShopHistory } from '~~/types'

export const DBGameShopConfig = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameShopConfig>({ 
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGame', index: true },

    maintenance: { type: Boolean, default: false },

    discount: {
      number: { type: Number, default: 0, index: true },
      start: { type: Date },
      end: { type: Date },
    }
  }, {
    timestamps: true
  })

  const model = mongoose.model('GameShopConfig', schema, 'GameShopConfig')
  return model 
}

export const DBGameShopItem = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameShopItem>({ 
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGame', index: true },

    config: { type: mongoose.Schema.Types.ObjectId, ref: 'GameShopConfig', index: true },

    item: { type: mongoose.Schema.Types.ObjectId, ref: 'GameItem', index: true },
    amount: { type: Number, default: 1, index: true },
    price: { type: Number, index: true },
    limit: { type: Number, index: true },

    pin: { type: Boolean, default: false },
    display: { type: Boolean, default: true },
  }, {
    timestamps: true
  })

  const model = mongoose.model('GameShopItem', schema, 'GameShopItem')
  return model 
}

export const DBGameShopHistory = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameShopHistory>({ 
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGame', index: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalUser', index: true },

    server: { type: String },
    role: { type: String },

    item: { type: mongoose.Schema.Types.ObjectId, ref: 'GameItem', index: true },
    amount: { type: Number, index: true },
    price: { type: Number, index: true },
  }, {
    timestamps: true
  })

  const model = mongoose.model('GameShopHistory', schema, 'GameShopHistory')
  return model 
}