import { Schema, model } from 'mongoose'

const schema = new Schema(
  {
    socialName: {
      type: String,
      required: [true, 'socialName is required']
    },
    fullName: {
      type: String,
      required: [true, 'fullName is required']
    },
    day: {
      type: Number,
      required: [true, 'day is required']
    },
    month: {
      type: Number,
      required: [true, 'month is required']
    },
    dateOfAdministration: {
      type: Date,
      required: [true, 'Email is required']
    },
    dateOfBirth: {
      type: Date,
      required: [true, 'Email is required']
    },
    occupation: {
      type: String
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required']
    },
    aboutMe: {
      type: String
    },
    gender: {
      type: String
    },
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

schema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`
})

schema.set('toJSON', { hide: 'hash' })

schema.index({ email: 1 })

export default model('user', schema)
