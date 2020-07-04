import React, { useState, useEffect } from 'react';
import CardCss from './CardCss';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import * as Collaborator from '../../models/Collaborator';
import { useHistory } from 'react-router-dom';
import { useStyles } from '../../style'

export default function ListCollarator() {

  const classes = useStyles();
  const [collaborators, setCollaborators] = useState([]);
  const [colls, setColls] = useState([]);
  /* const [textSerch, setTextSearch] = useState(""); */
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await Collaborator.find();
      setCollaborators(data);
      setColls(data);
    };
    fetchData();

  }, []);

  /*  useEffect(() => {
 
      if (textSerch !== "") {
       setCollaborators(colls.filter(coll =>
         coll.nomeCompleto.toLowerCase().includes(textSerch.toLowerCase())));
     } else {
       setCollaborators(colls);
     } 
 
   }, [colls, textSerch]); */

  return (
    <div style={{margin:"10px"}}>
      <Grid container className={classes.root} spacing={4}>

        {collaborators.map(col => (
          <CardCss key={col._id}
            collaborator={col} />
        ))}

      </Grid>

      <Fab style={{ position: "fixed", right: 35, bottom: 25 }} color="secondary" aria-label="add">
        <AddIcon onClick={(e) => { history.push('/collaborator/add') }} />
      </Fab>

    </div>


  );
}