import { Schema, model } from 'mongoose';

const schema = new Schema(
  {
    title: {
      type: String
    },
    body: {
      type: String,
      required: [true, 'Body is required']
    },
    detail: {
      type: String,
    },
    displayName: {
      type: String
    },
    userId: {
      type: String
    },
    photoURL: {
      type: String
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

export default model('post', schema)
