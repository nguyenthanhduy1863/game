import type { Mongoose } from 'mongoose'
import type { IDBGamePaymentGate, IDBGamePayment } from '~~/types'

export const DBGamePaymentGate = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGamePaymentGate>({ 
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGame', index: true },

    type: { type: String },

    bank: {
      name: { type: String },
      person: { type: String },
      number: { type: String },
    },
    
    webhook: {
      key: { type: String },
      qrcode: { type: String },
    },

    bonus: {
      default: { type: Number, index: true },
      limit: {
        number: { type: Number, index: true },
        start: { type: Date },
        end: { type: Date },
      }
    },

    display: { type: Boolean, default: true },
  }, {
    timestamps: true
  })

  const model = mongoose.model('GamePaymentGate', schema, 'GamePaymentGate')
  return model 
}

export const DBGamePayment = (mongoose : Mongoose) => {
  const schema = new mongoose.Schema<IDBGamePayment>({ 
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalGame', index: true },

    gate: { type: mongoose.Schema.Types.ObjectId, ref: 'GamePaymentGate', index: true },

    user: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalUser', index: true },

    card: {
      net: { type: String },
      seri: { type: String },
      pin: { type: String },
    },

    money: { type: Number, index: true },

    code: { type: String },
    token: { type: String },
    qrcode: { type: String },

    status: { type: Number, default: 0, index: true },

    verify: {
      person: { type: mongoose.Schema.Types.ObjectId, ref: 'PortalUser', index: true },
      time: { type: Date },
      reason: { type: String },
    }
  }, {
    timestamps: true
  })

  schema.index({ code: 'text' })
  const model = mongoose.model('GamePayment', schema, 'GamePayment')
  return model 
}