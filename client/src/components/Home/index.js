import React from 'react';
import clsx from 'clsx';
import Drawer from '../Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListBirthDay from './ListBirthDay'
import ListPost from './ListPost'
import Grid from '@material-ui/core/Grid';
import AppBar from '../AppBar'

import { useStyles } from '../../style'

export default function HomeComponent() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (

    <div className={classes.root}>
      <CssBaseline />
      <AppBar open={open} handleDrawer={handleDrawer} />
      <Drawer open={open} handleDrawer={handleDrawer} />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        <>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <ListPost />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ListBirthDay />
            </Grid>
          </Grid>
        </>

      </main>

    </div>

  );
}