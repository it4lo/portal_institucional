import React, { useState, useEffect } from 'react';
import CardPost from './Card'
import DialogSendPost from './DialogPost';
import { useStyles } from './style';
import api from '../../../services/api';
import { save, find } from '../../../models/Post';

export default function ListPost() {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const handleClickOpenInsertPost = () => {
    setOpen(true);
  };

  const onCreatePostInList = async ({ body, detail, imgFile }) => {
    const post = { body, detail };
    await save(post, imgFile);
    setOpen(false);
  }

  useEffect(() => {
    async function fethData() {
      try {
        setPosts(await find(handleClickOpenInsertPost));
      } catch (error) {
        console.log(error);
      }
    }
    fethData();
  }, [])

  return (
    <div className={classes.root} >
      <div style={{ width: "70%", marginBottom: "20px", marginLeft: "auto", marginRight: "auto"}}>

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