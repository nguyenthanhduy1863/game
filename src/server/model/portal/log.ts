import type { Mongoose } from 'mongoose'
import type { IDBPortalLogUser, IDBPortalLogAdmin } from '~~/types'

export const DBPortalLogUser = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBPortalLogUser>({ 
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

  const model = mongoose.model('PortalLogUser', schema, 'PortalLogUser')
  return model 
}

export const DBPortalLogAdmin = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBPortalLogAdmin>({ 
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

  const model = mongoose.model('PortalLogAdmin', schema, 'PortalLogAdmin')
  return model 
}