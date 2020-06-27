import { Schema, model } from 'mongoose'

const schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'FirstName is required']
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required']
    },
    password: {
      type: String,
      unique: true,
      required: [true, 'Email is required']
    }
  },
  {
    timestamps: true,
    minimize: false,
    versionKey: false,
    toJSON: {
      virtuals: true,
      versionKey: false
    },
    toObject: {
      virtuals: true
    }
  }
)



schema.set('toJSON', { hide: 'hash' })

schema.index({ email: 1 })

export default model('user', schema)
