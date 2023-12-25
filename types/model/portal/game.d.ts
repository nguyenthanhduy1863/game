import type { Types } from 'mongoose'

export interface IDBPortalGamePlatform {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  name: string
  icon: string
}

export interface IDBPortalGameCategory {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  name: string
  icon: string
}

export interface IDBPortalGame {
  _id: Types.ObjectId
  createdAt: Date
  updatedAt: Date

  platform: Types.ObjectId
  category: Types.ObjectId

  manager: Array<Types.ObjectId>

  name: string
  name_seo: string
  short_name: string
  description: string
  image: {
    og: string
    app: string
    logo: string
    path: string
  }
  about: string

  social: {
    fanpage: string
    group: string
    messenger: string
    zalo: string
  }

  api: {
    secret: string
    start: string
    server: {
      one: string
      list: string
    }
    role: {
      one: string
      list: string
    }
    send: {
      pay: string
      mail: string
    }
    rank: {
      level: string
      power: string
    }
  }

  app: {
    apk: string
    ios: string
  }
  
  statistic: {
    play: number
    view: number
    download: {
      apk: number
      ios: number
    }
  }
  
  maintenance: boolean
  pin: boolean
  display: boolean
}