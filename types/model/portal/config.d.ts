import type { Types } from 'mongoose'

export interface IDBPortalConfig {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  name: string
  short_name: string
  description: string
  image: {
    og: string
    app: string
    logo: string
  }
  about: string

  contact: {
    name: string
    phone: string
    email: string
    address: string
  }
  
  social: {
    fanpage: string
    group: string
    messenger: string
    zalo: string
    tiktok: string
  }
}