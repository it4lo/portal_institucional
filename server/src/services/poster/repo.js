import { Post } from '@models'

export async function find() {
  const posts = await Post
    .find()
    .populate('author', 'name email').lean();
  const response = posts.map(post => {
    return {
      ...post,
      photoURL: `http://localhost:3333/images/${post.photoURL}`
    }
  });
  return response;
}

export async function save(post) {
  const data = await new Post(post).save();
  return data;
}

export async function update(id, post) {
  const data = await Post.findByIdAndUpdate(id, post, { new: true });
  return data;
}







