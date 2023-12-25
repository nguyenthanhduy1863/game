import type { Mongoose } from 'mongoose'
import type { IDBGameGiftcode, IDBGameGiftcodeHistory } from '~~/types'

export const DBGameGiftcode = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameGiftcode>({ 
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGame', index: true },

    code: { type: String, index: true },
    limit: { type: Number, default: 0, index: true },
    server: [{ type: String }],
    gift: [{
      item: { type: mongoose.Schema.Types.ObjectId, ref: 'GameItem', index: true },
      amount: { type: Number, index: true },
    }],
    time: {
      start: { type: Date },
      end: { type: Date }
    },

    display: { type: Boolean, default: true },
  }, {
    timestamps: true
  })

  schema.index({ code: 'text' })
  const model = mongoose.model('GameGiftcode', schema, 'GameGiftcode')
  return model 
}

export const DBGameGiftcodeHistory = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameGiftcodeHistory>({ 
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGame', index: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalUser', index: true },

    server: { type: String },
    role: { type: String },

    giftcode: { type: mongoose.Schema.Types.ObjectId, ref: 'GameGiftcode', index: true },
    code: { type: String },
  }, {
    timestamps: true
  })

  const model = mongoose.model('GameGiftcodeHistory', schema, 'GameGiftcodeHistory')
  return model 
}