import { Schema, model } from 'mongoose';

const schema = new Schema(
  {
    name: {
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

export default model('Position', schema)
