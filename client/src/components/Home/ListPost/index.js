import React, { useState, useEffect } from 'react';
import CardPost from './Card'
import DialogSendPost from './DialogPost';
import { useStyles } from './style';
import api from '../../../services/api';
import { createPost } from '../../../models/Post';

export default function ListPost() {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const handleClickOpenInsertPost = () => {
    setOpen(true);
  };

  const onCreatePostInList = async ({ body, detail, imgFile }) => {
    const post = { body, detail };
    await createPost(post, imgFile);
    setOpen(false);
  }

  useEffect(() => {
    async function fethData() {
      let postsData = [];
      const response = await api.get('/posts');
      postsData = response.data;
      postsData.unshift({ id: "002", header: true, method: handleClickOpenInsertPost });
      setPosts(postsData);
    }
    fethData();
  }, [])

  return (
    <div className={classes.root} >
      <div style={{ width: "100%", marginBottom: "20px" }}>
        {posts.map((post, i) => (
          <CardPost key={i}
            post={post}
          />
        ))}
      </div>

      <DialogSendPost open={open} fnSetOpen={setOpen} fnOnCreatePostInList={onCreatePostInList} />

    </div>

  );
}