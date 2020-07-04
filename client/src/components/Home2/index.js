import React from "react"; import ListPost from './ListPost'
import Grid from '@material-ui/core/Grid';
import ListBirthDay from './ListBirthDay';

const Home = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <ListPost />
        </Grid>

        <Grid item xs={12} sm={3}>
          <ListBirthDay />
        </Grid>

        <Grid item xs={12} sm={3}>
          <ListBirthDay />
        </Grid>
      </Grid>
    </>

  );
};

export default Home;