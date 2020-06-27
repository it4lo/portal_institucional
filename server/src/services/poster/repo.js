import { Post } from '@models'

export async function index() {
  const posts = await Post.find().lean();
  const response = posts.map(post => {
    return { ...post, photoURL: `http://localhost:3333/images/${post.photoURL}` };
  });
  return response;
}

export async function store(post) {
  const data = await new Post(post).save();
  return data;
}

export async function update(id, post) {
  const data = await Post.findByIdAndUpdate(id, post, { new: true });
  return data;
}







