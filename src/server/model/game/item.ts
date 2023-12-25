import type { Mongoose } from 'mongoose'
import type { IDBGameItem, IDBGameItemBox } from '~~/types'

export const DBGameItem = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameItem>({ 
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGame', index: true },

    code: { type: String },
    name: { type: String },
    image: { type: String },
    type: { type: String },
  }, {
    timestamps: true
  })

  schema.index({ 
    name: 'text', 
    code: 'text' 
  })

  const model = mongoose.model('GameItem', schema, 'GameItem')
  return model 
}

export const DBGameItemBox = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameItemBox>({ 
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGame', index: true },

    name: { type: String },
    
    gift: [{
      item: { type: mongoose.Schema.Types.ObjectId, ref: 'GameItem', index: true },
      amount: { type: Number, index: true }
    }]
  }, {
    timestamps: true
  })

  const model = mongoose.model('GameItemBox', schema, 'GameItemBox')
  return model 
}
