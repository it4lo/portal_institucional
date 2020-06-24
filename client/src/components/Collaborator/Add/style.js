import { makeStyles } from '@material-ui/core/styles';
import { green , blue, red} from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
  imageSrc: {
    width: "100px",
    height: "100px",
    cursor:"pointer"
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonState: {
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
    },
  },
  buttonCancel: {
    backgroundColor: red[900],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));



