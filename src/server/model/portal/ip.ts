import type { Mongoose } from 'mongoose'
import type { IDBPortalIPUser, IDBPortalIPAdmin, IDBPortalIPBlock } from '~~/types'

export const DBPortalIPUser = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBPortalIPUser>({ 
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalUser', index: true },
    ip: { type: String }
  }, {
    timestamps: true
  })

  const model = mongoose.model('PortalIPUser', schema, 'PortalIPUser')
  return model 
}

export const DBPortalIPAdmin = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBPortalIPAdmin>({ 
    ip: { type: String }
  }, {
    timestamps: true
  })

  const model = mongoose.model('PortalIPAdmin', schema, 'PortalIPAdmin')
  return model 
}

export const DBPortalIPBlock = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBPortalIPBlock>({ 
    ip: { type: String }
  }, {
    timestamps: true
  })

  const model = mongoose.model('PortalIPBlock', schema, 'PortalIPBlock')
  return model 
}