import type { Mongoose } from 'mongoose'
import type { IDBGameEventConfig, IDBGameEventMilestone, IDBGameEventHistory } from '~~/types'

export const DBGameEventConfig = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameEventConfig>({ 
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGame', index: true },

    maintenance: { type: Boolean, default: false },
  }, {
    timestamps: true
  })

  const model = mongoose.model('GameEventConfig', schema, 'GameEventConfig')
  return model 
}

export const DBGameEventMilestone = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameEventMilestone>({ 
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGame', index: true },

    config: { type: mongoose.Schema.Types.ObjectId, ref: 'GameEventConfig', index: true },

    type: { type: String },
    need: { type: Number, index: true },
    gift: [{
      item: { type: mongoose.Schema.Types.ObjectId, ref: 'GameItem', index: true },
      amount: { type: Number, index: true },
    }],

    display: { type: Boolean, default: true },
  }, {
    timestamps: true
  })

  const model = mongoose.model('GameEventMilestone', schema, 'GameEventMilestone')
  return model 
}

export const DBGameEventHistory = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameEventHistory>({ 
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGame', index: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalUser', index: true },

    server: { type: String },
    role: { type: String },

    milestone: { type: mongoose.Schema.Types.ObjectId, ref: 'GameEventMilestone', index: true },
    type: { type: String },
    need: { type: Number, index: true },
  }, {
    timestamps: true
  })

  const model = mongoose.model('GameEventHistory', schema, 'GameEventHistory')
  return model 
}