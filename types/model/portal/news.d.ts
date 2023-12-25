import type { Types } from 'mongoose'

export interface IDBPortalNewsCategory {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date
  
  name: string
  color: string
}

export interface IDBPortalNews {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  category: Types.ObjectId

  title: string
  title_seo: string
  description: string 
  image: {
    og: string
  }
  keywords: string[]
  content: string
  
  creator: Types.ObjectId
  updater: Types.ObjectId
  
  view: number
  pin: boolean
  display: boolean
}
