import type { Mongoose } from 'mongoose'
import type { IDBPortalNewsCategory, IDBPortalNews } from '~~/types'

export const DBPortalNewsCategory = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBPortalNewsCategory>({ 
    name: { type: String },
    color: { type: String }
  }, {
    timestamps: true
  })

  const model = mongoose.model('PortalNewsCategory', schema, 'PortalNewsCategory')
  return model 
}

export const DBPortalNews = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBPortalNews>({ 
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalNewsCategory', index: true },

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

  const model = mongoose.model('PortalNews', schema, 'PortalNews')
  return model 
}