import { Schema, model } from 'mongoose';

const schema = new Schema(
  {
    name: {
      type: String
    },
    hierarchy: {
      type: String,
      required: [true, 'Body is required']
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

export default model('Management', schema)
