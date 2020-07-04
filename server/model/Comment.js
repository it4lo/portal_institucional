import { Schema, model } from 'mongoose';
import { Post } from './';

const schema = new Schema(
  {
    body: {
      type: String
    },
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
    { $push: { comments: this._id } }, { new: true }
  );
  next();
});

schema.post('findOneAndRemove', async function (doc) {
  await Post.findByIdAndUpdate(
    { _id: doc.post },
    {
      $pullAll: { comments: [doc._id] },
    }, { new: true }
  );
});

schema.set('toJSON', { hide: 'hash' })

export default model('Comment', schema)
