import type { Mongoose } from 'mongoose'
import type { IDBPortalConfig } from '~~/types'

export const DBPortalConfig = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBPortalConfig>({ 
    name: { type: String, default: 'CVV Studio' },
    short_name: { type: String, default: 'CVV' },
    description: { type: String, default: 'Cổng game giải trí trực tuyến' },
    image: {
      og: { type: String },
      app: { type: String },
      logo: { type: String },
    },
    about: { type: String },

    contact: {
      name: { type: String, default: 'CVV Studio' },
      phone: { type: String, default: '0888888888' },
      email: { type: String, default: 'hotro@cvv.com' },
      address: { type: String },
    },
    
    social: {
      fanpage: { type: String },
      group: { type: String },
      messenger: { type: String },
      zalo: { type: String },
      tiktok: { type: String }
    },
  }, {
    timestamps: true
  })

  const model = mongoose.model('PortalConfig', schema, 'PortalConfig')
  return model 
}