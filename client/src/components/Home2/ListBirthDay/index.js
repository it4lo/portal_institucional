import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import CakeIcon from '@material-ui/icons/Cake';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function ListCollaborator() {
  const classes = useStyles();
  const [birthDays, setBirthDays] = useState([]);

  useEffect(() => {
    let values = [{}];
    const fetchData = async () => {
      //const data = await firestore.collection("collaborators").get();
      /* const data = [{}];
      setBirthDays((data.docs.map(doc => ({ ...doc.data(), id: doc.id })))); */
      setBirthDays([{
        nomeCompleto: "Ítalo",
        photoURL: "http://localhost:3050/images/a234d3f5e8b6-italo.jpg",
        dia: "15",
        mes: "08"
      },
      {
        nomeCompleto: "Maria",
        photoURL: "http://localhost:3050/images/16df92d2da1b-maria.jpg",
        dia: "16",
        mes: "08"
      }])


    };
    fetchData();

  }, []);

  function getDate(day, month) {
    return `${day}/${month}`
  }

  return (

    <List className={classes.root}>
      {birthDays.map((b, i) => (
        <div key={i}>
          <ListItem  alignItems="flex-start">
            <ListItemAvatar>
              <img src={b.photoURL} alt="Avatar"
                style={{ width: "45px", height: "45px", borderRadius: "50%" }}></img>
            </ListItemAvatar>
            <ListItemText
              primary={b.nomeCompleto}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >

                  </Typography>
                  {` Faz aniverário em ${getDate(b.dia, b.mes)} `}
                  <CakeIcon style={{ color: green[400] }} />
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />
        </div>
      ))}

    </List>
  );
}