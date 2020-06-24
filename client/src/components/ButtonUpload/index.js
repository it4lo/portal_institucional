import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  cursorPointer: {
    cursor: "pointer"
  }
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <ButtonBase
        focusRipple
        key={"photoUser"}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: '150px',
          height: '100px',
        }}
      >
        <label htmlFor="icon-button-file" className={classes.cursorPointer}>
          <span
            className={classes.imageSrc}
            style={{ 
              backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/voluncode.appspot.com/o/collaborators%2Fadamilton.jpg?alt=media&token=10247f1a-d298-44db-8f64-8d27e4d5aaa2)`,
            }}
          />
          
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>

            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              Foto
              <span className={classes.imageMarked} />
            </Typography>

          </span>
        </label>
      </ButtonBase>

    </div>
  );
}