import { Schema, model } from 'mongoose';
import { Post } from './';

const schema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Author is required']
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: [true, 'Post is required']
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

schema.pre('save', async function (next) {
  await Post.findByIdAndUpdate(
    { _id: this.post },
    { $push: { favs: this._id } }
  );
  next();
});

schema.post('findOneAndRemove', async function (doc) {
  await Post.findByIdAndUpdate(
    { _id: doc.post },
    {
      $pullAll: { favs: [doc._id] },
    }, { new: true }
  );
});

schema.set('toJSON', { hide: 'hash' })

export default model('Fav', schema)
