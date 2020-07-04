import { Comment } from '@models'

export async function find() {
  const data = await Comment
    .find()
    .populate('author', 'name email').lean();
  return data;
}

export async function save(comment) {
  const data = await new Comment(comment).save();
  return data;
}

export async function update(id, comment) {
  const data = await Comment.findByIdAndUpdate(id, comment, { new: true });
  return data;
}

export async function remove(_id) {
  const data = await Comment.findOneAndRemove({ _id });
  return data;
}






