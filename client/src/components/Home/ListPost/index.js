import React, { useState, useContext, useEffect } from 'react';
import CardPost from './Card'
import DialogSendPost from './DialogPost';
import { useStyles } from './style';
import api from '../../../api';


export default function ListPost() {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const handleClickOpenInsertPost = () => {
    setOpen(true);
  };

  const onCreatePostInList = async ({ commentPost, detailPost, imgFile }) => {
    const post = { commentPost, detailPost };
    /* await onCreatePost(post, imgFile, currentUser); */
    setOpen(false);
  }

  /* useEffect(() => {
   return firestore.collection("posts").orderBy("createdAt", "desc").onSnapshot(snapshot => {
     const postsData = [];
     snapshot.forEach(doc => {
       postsData.push({ ...doc.data(), id: doc.id})
     });
     postsData.unshift({ id: "002", header: true, method: handleClickOpenInsertPost });
     //console.log(postsData[2].createdAt);
     setPosts(postsData);
   });
 }, []);  */


  useEffect(() => {
    
    async function fethData() {
      const users = await api.get('/users');
      //console.log(users);
    }

    fethData()

  }, [])

  return (
    <div className={classes.root} >
      <div style={{ width: "100%", marginBottom: "20px" }}>
        {posts.map((post, i) => (
          <CardPost key={post.id}
            post={post}
          />
        ))}
      </div>

      <DialogSendPost open={open} fnSetOpen={setOpen} fnOnCreatePostInList={onCreatePostInList} />

    </div>

  );
}