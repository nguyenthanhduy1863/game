import type { Mongoose } from 'mongoose'
import type { IDBGameAdsFrom, IDBGameAdsLanding } from '~~/types'

export const DBGameAdsFrom = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameAdsFrom>({ 
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGame', index: true },

    code: { type: String },
    note: { type: String },
    sign: {
      in: { type: Number, default: 0, index: true },
      up: { type: Number, default: 0, index: true }
    }
  }, {
    timestamps: true
  })

  const model = mongoose.model('GameAdsFrom', schema, 'GameAdsFrom')
  return model 
}

export const DBGameAdsLanding = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameAdsLanding>({ 
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGame', index: true },

    code: { type: String },
    source: { type: String },
    sign: {
      in: { type: Number, default: 0, index: true },
      up: { type: Number, default: 0, index: true }
    }
  }, {
    timestamps: true
  })

  const model = mongoose.model('GameAdsLanding', schema, 'GameAdsLanding')
  return model 
}