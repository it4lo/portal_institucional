import React, { useState, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EditIcon from '@material-ui/icons/Edit';
import { green, blue, pink } from '@material-ui/core/colors';
import { useStyles } from './styles';
import { useHistory } from 'react-router-dom';



function CardCss({ collaborator }) {

  const history = useHistory();

  const classes = useStyles();
  const [rotation, setRotation] = useState(false);
  const setRotationState = () => {
    setRotation(!rotation);
  }

  return (
    <Grid item xs={12} sm={6} md={3}>
      <div className={classes.root}>

        <div className={classes.fliperConainer}>
          <div className={clsx(classes.fliper, {
            [classes.fliperRotation]: rotation,
          })} >

            <div className={classes.front}>
              <div className={classes.container}>
                <img 
                /* src={collaborator.photoURL} */
                src={collaborator.photoURL}  
                alt="Avatar" 
                className={classes.image} onClick={setRotationState}></img>
                <div className={classes.containerText}>
                  <h3><b>{collaborator.fullName}</b></h3>
                  <p>{collaborator.occupation}</p>
                  <div style={{ borderBottom: "1px solid #808080b0", height: 1 }}></div>

                  <div className={clsx(classes.divNetWork, {
                    [classes.divNetWorkHidden]: rotation,
                  })}>

                    <IconButton target="_blank" href={collaborator.linkedin} 
                    style={{ display: collaborator.linkedin ? '' : 'none' }} 
                    color="primary" aria-label="upload picture" component="a">
                      <LinkedInIcon style={{ color: blue[800] }} />
                    </IconButton>

                    <IconButton target="_blank" href={collaborator.facebook}
                      style={{ display: collaborator.facebook ? '' : 'none' }} color="primary"
                      aria-label="upload picture" component="a">
                      <FacebookIcon style={{ color: blue[900] }} />
                    </IconButton>

                    <IconButton target="_blank" href={collaborator.instagram}
                      style={{ display: collaborator.instagram ? '' : 'none' }} color="primary"
                      aria-label="upload picture" component="a">
                      <InstagramIcon style={{ color: pink[800] }} />
                    </IconButton>

                    <IconButton target="_blank" href={collaborator.twitter}
                      style={{ display: collaborator.twitter ? '' : 'none' }} color="primary"
                      aria-label="upload picture" component="a">
                      <TwitterIcon style={{ color: blue[500] }} />
                    </IconButton>

                    <IconButton onClick={() => history.push('/collaborator/add/', { coll: collaborator })}
                      color="primary" aria-label="upload picture" component="span">
                      <EditIcon style={{ color: green[500] }} />
                    </IconButton>

                  </div>

                </div>
              </div>
            </div>
            <div className={classes.back}>
              <div className={classes.container} onClick={setRotationState}>
                <div style={{ margin: "15px", textAlign: "justify" }}>
                  <img src={collaborator.photoURL} alt="Avatar" style={{ width: "60px", height: "60px", borderRadius: "50%" }}></img>
                  {collaborator.aboutMe ?
                    collaborator.aboutMe :
                    'Edite seu perfil e adicione uma descrição breve para que a/o conheçam melhor'}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </Grid>
  );
}


export default memo(CardCss);


