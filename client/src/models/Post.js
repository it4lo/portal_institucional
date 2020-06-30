import api from '../services/api';

export async function createPost(post, imgFile) {
     const data = new FormData();
     data.append('tile', post.title);
     data.append('body', post.body);
     data.append('detail', post.detail);
     data.append('displayName', "Ítalo Almeida");
     data.append('userId', 1);
     data.append('photoURL', imgFile);
     const response = await api.post('/posts', data);;
     return response.data;
}

export async function createComment(comment) {
     const response = await api.post('/posts/comment', comment);;
     return response.data;
}