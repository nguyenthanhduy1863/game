import type { Mongoose } from 'mongoose'
import type { IDBPortalGamePlatform, IDBPortalGameCategory, IDBPortalGame } from '~~/types'

export const DBPortalGamePlatform = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBPortalGamePlatform>({ 
    name: { type: String },
    icon: { type: String },
  }, {
    timestamps: true
  })

  const model = mongoose.model('PortalGamePlatform', schema, 'PortalGamePlatform')
  return model 
}

export const DBPortalGameCategory = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBPortalGameCategory>({ 
    name: { type: String },
    icon: { type: String },
  }, {
    timestamps: true
  })

  const model = mongoose.model('PortalGameCategory', schema, 'PortalGameCategory')
  return model 
}

export const DBPortalGame = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBPortalGame>({ 
    platform: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGamePlatform', index: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGameCategory', index: true },

    manager: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PortalUser', index: true }],

    name: { type: String },
    name_seo: { type: String },
    short_name: { type: String },
    description: { type: String },
    image: {
      og: { type: String },
      app: { type: String },
      logo: { type: String },
      path: { type: String },
    },
    about: { type: String },

    social: {
      fanpage: { type: String },
      group: { type: String },
      messenger: { type: String },
      zalo: { type: String },
    },

    api: {
      secret: { type: String },
      start: { type: String },
      server: {
        one: { type: String },
        list: { type: String },
      },
      role: {
        one: { type: String },
        list: { type: String },
      },
      send: {
        pay: { type: String },
        mail: { type: String },
      },
      rank: {
        level: { type: String },
        power: { type: String },
      }
    },

    app: {
      apk: { type: String },
      ios: { type: String },
    },

    statistic: {
      play: { type: Number, default: 0, index: true },
      view: { type: Number, default: 0, index: true },
      download: {
        apk: { type: Number, default: 0, index: true },
        ios: { type: Number, default: 0, index: true },
      }
    },
    
    maintenance: { type: Boolean, default: false },
    pin: { type: Boolean, default: false },
    display: { type: Boolean, default: true },
  }, {
    timestamps: true
  })

  schema.index({ 
    name: 'text', 
    name_seo: 'text', 
    short_name: 'text' 
  })

  const model = mongoose.model('PortalGame', schema, 'PortalGame')
  return model 
}