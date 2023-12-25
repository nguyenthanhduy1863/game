import type { Mongoose } from 'mongoose'
import type { IDBPortalLogUser, IDBPortalLogAdmin } from '~~/types'

export const DBPortalLogUser = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBPortalLogUser>({ 
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalUser', index: true },
    action: { type: String }
  }, {
    timestamps: true
  })

  const model = mongoose.model('PortalLogUser', schema, 'PortalLogUser')
  return model 
}

export const DBPortalLogAdmin = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBPortalLogAdmin>({ 
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalUser', index: true },
    action: { type: String }
  }, {
    timestamps: true
  })

  const model = mongoose.model('PortalLogAdmin', schema, 'PortalLogAdmin')
  return model 
}