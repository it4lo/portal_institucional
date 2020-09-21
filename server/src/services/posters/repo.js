import { Post } from '@models'

export async function find(userId) {

  const posts = await Post
    .find()
    .populate({
      path: 'comments',
      populate: { path: 'author', select: 'name photoURL' }
    })
    .populate({
      path: 'favs',
      populate: { path: 'author', select: 'name' }
    })
    .populate('author', 'name photoURL')
    .lean()

  const response = posts.map(post => {
    return {
      ...post,
      photoURL: post.photoURL ? `http://localhost:3333/images/${post.photoURL}` : "",
      sizeFavs: post.favs.length,
      sizeComments: post.comments.length,
      fav: post.favs.some(f => String(f.author._id) === String(userId))
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
