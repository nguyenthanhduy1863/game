import type { Mongoose } from 'mongoose'
import type { IDBGameNewsCategory, IDBGameNews } from '~~/types'

export const DBGameNewsCategory = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameNewsCategory>({ 
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGame', index: true },
    
    name: { type: String },
    color: { type: String }
  }, {
    timestamps: true
  })

  const model = mongoose.model('GameNewsCategory', schema, 'GameNewsCategory')
  return model 
}

export const DBGameNews = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGameNews>({ 
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGame', index: true },

    category: { type: mongoose.Schema.Types.ObjectId, ref: 'GameNewsCategory', index: true },

    title: { type: String },
    title_seo: { type: String },
    description: { type: String },
    image: {
      og: { type: String }
    },
    keywords: [{ type: String }],
    content: { type: String },

    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalUser', index: true },
    updater: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalUser', index: true },

    view: { type: Number, default: 0 },
    pin: { type: Boolean, default: false },
    display: { type: Boolean, default: true },
  }, {
    timestamps: true
  })

  schema.index({ 
    title: 'text', 
    title_seo: 'text' 
  })

  const model = mongoose.model('GameNews', schema, 'GameNews')
  return model 
}