import type { Types } from 'mongoose'

export interface IDBGameNewsCategory {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId
  
  name: string
  color: string
}

export interface IDBGameNews {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  game: Types.ObjectId
  
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
