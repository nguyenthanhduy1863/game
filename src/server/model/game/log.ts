import type { Mongoose } from 'mongoose'
import type { IDBGameLogUser, IDBGameLogAdmin } from '~~/types'

export const DBGameLogUser = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameLogUser>({ 
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGame', index: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalUser', index: true },
    type: { type: String },
    action: { type: String }
  }, {
    timestamps: true
  })

  schema.index({ 
    'type': 'text', 
    'action': 'text', 
  })

  const model = mongoose.model('GameLogUser', schema, 'GameLogUser')
  return model 
}

export const DBGameLogAdmin = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameLogAdmin>({ 
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGame', index: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalUser', index: true },
    type: { type: String },
    action: { type: String }
  }, {
    timestamps: true
  })

  schema.index({ 
    'type': 'text', 
    'action': 'text', 
  })

  const model = mongoose.model('GameLogAdmin', schema, 'GameLogAdmin')
  return model 
}