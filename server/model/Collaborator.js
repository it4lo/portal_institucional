import { Schema, model } from 'mongoose';


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
      required: [true, 'date of adminiatration is required']
    },
    dateOfBirth: {
      type: Date,
      required: [true, 'date of birth is required']
    },
    occupation: {
      type: String
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required']
    },
    photoURL: {
      type: String
    },
    aboutMe: {
      type: String
    },
    gender: {
      type: String
    },
    management: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    },
    linkedin: {
      type: String
    },
    twitter: {
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

schema.set('toJSON', { hide: 'hash' })

schema.index({ email: 1 })


export default model('Collaborator', schema)
