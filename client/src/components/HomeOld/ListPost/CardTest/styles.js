import { makeStyles } from '@material-ui/core/styles';
import { red, grey } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '4vh',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '51%',
    }
  },
  media: {
    height: 300,
    // 16:9
  },
  media0: {
    height: 0,
    display: "none"
  },
  mediaNull: {
    height: 300,
    // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  contentHeader: {
    display: "flex",
  },
  avatarHeader: {
    backgroundColor: red[500],
    marginTop: "1vh",
    marginLeft: "2vh"
  },
  comment: {
    color: grey[500],
    textTransform: 'lowercase',
    width: "100%",
  },
  button: {
    margin: theme.spacing(1),
    width: "80%",
    backgroundColor: "#F2F3F5",
    borderRadius: 50,
    textAlign: "center",
    height: 40,
    elevation: 0,
  },
  avatarSmall: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  avatarLarge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },

}));