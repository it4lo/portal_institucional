import React, { useState } from 'react';
import Register from '../../components/Register';
import { Paper, Collapse, IconButton } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';

import { styles } from './style';

export default function PageRegister(props) {

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const classes = styles();

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>

        <Collapse in={show}>
          <Alert severity={"error"}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setShow(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {message}
          </Alert>
        </Collapse>

        <Register classes={classes} setMessage={setMessage} setShow={setShow} history={props.history}></Register>

      </Paper>
    </main>


  );
}