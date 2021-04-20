import React, { useEffect, useState } from 'react';
import { Typography, Divider } from '@material-ui/core';
import Avatar from '../Avatar';

const NavHeader = () => {

  const storeString = localStorage.getItem('@IntraAPI');
  const URL = 'http://api.interactive-to.com/images/';
  const [urlPhoto, setUrlPhoto] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  useEffect(() => {
    async function fethData() {
      const storeString = localStorage.getItem('@IntraAPI');
      if (storeString) {
        const store = JSON.parse(storeString);
        setName(store.user.name);
        setUrlPhoto(`${URL}${store.user.collaborator.photoURL}`);
        setEmail(store.user.email);
      }
    }
    fethData();
  }, []);


  return (
    <div style={{ width: "100%", textAlign: "center", padding: 10 }}>

      <Avatar src={urlPhoto}/>  
    
      <Typography variant="h6" noWrap={true}>
        {name}
      </Typography>

      <Typography
        color="textSecondary" gutterBottom noWrap>
        {email}
      </Typography>
      <Divider></Divider>

    </div>
  )

}


export default NavHeader;

