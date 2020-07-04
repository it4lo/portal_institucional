import api from '../services/api';

export async function save(post, imgFile) {

     try {
          const data = new FormData();
          data.append('tile', post.title);
          data.append('body', post.body);
          data.append('detail', post.detail);
          data.append('photoURL', imgFile);
          const response = await api.post('/posts', data);;
          return response.data;
     } catch (error) {
          console.log(error);
     }
}

export async function find(handleClickOpenInsertPost) {

     try {
          let postsData = [];
          const response = await api.get('/posts');
          postsData = response.data;
          if (!postsData) postsData = [];
          postsData.unshift({
               id: "002", header: true,
               method: handleClickOpenInsertPost,
               author: { name: "" }
          });
          return postsData;

     } catch (error) {
          console.log(error);
     }
}

export async function createComment(comment) {
     const response = await api.post('/posts/comment', comment);;
     return response.data;
}