import type { Mongoose } from 'mongoose'
import type { IDBPortalWithdraw } from '~~/types'

export const DBPortalWithdraw = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBPortalWithdraw>({ 
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalUser', index: true },

    bank: {
      name: { type: String },
      person: { type: String },
      number: { type: String },
    },

    diamond: { type: Number, index: true },

    code: { type: String },

    status: { type: Number, default: 0, index: true },
    
    verify: {
      person: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalUser', index: true },
      time: { type: Date },
      reason: { type: String }
    }
  }, {
    timestamps: true
  })

  const model = mongoose.model('PortalWithdraw', schema, 'PortalWithdraw')
  return model 
}