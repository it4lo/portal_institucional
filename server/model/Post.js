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
    photoURL: {
      type: String
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User is required']
    },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    favs: [{ type: Schema.Types.ObjectId, ref: 'Fav' }]
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

export default model('Post', schema)
