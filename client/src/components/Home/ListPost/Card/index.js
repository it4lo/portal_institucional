import React, { useState, useContext } from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ReplyIcon from '@material-ui/icons/Reply';
import Divider from '@material-ui/core/Divider';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import SendIcon from '@material-ui/icons/Send';
import { useStyles } from './styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';



export default function CardPost({ header, fnHandleClickOpenInsertPost, post, currentUserUrl }) {

  const classes = useStyles();
  const [expanded, setExpanded] = useState(post.detailPost ? true : false);
  const [expandedComment, setExpandedComment] = useState(false);
  const [comment, setComment] = useState("");
  

  const regEx = /\w+/;

  const handleExpandDetailPost = () => {
    setExpanded(!expanded);
  };

  const handleExpandComment = () => {
    setExpandedComment(!expandedComment);
  };

  const handleChangeComment = (event) => {

    setComment(event.target.value);

  };

  function getDateUtil(date) {

    if (date) {
      /* const dia = date.getDay();
      const mes = date.getMonth();
      const ano = new date.getFullYear();
      const hora = new date.getHours(); */
      return /* `${dia}/${mes}/${ano}` */ date.toDate().toString();
    }

    //console.log(date ? date.toDate() : "Undefined");

  }

  return (

    <Card elevation={3} className={classes.root}>
      <Collapse in={post.header} timeout="auto" unmountOnExit>

        <Grid container className={classes.contentHeader} style={{ margin: "10px" }}>
          <Grid item xs={2}>
            <Avatar aria-label="recipe" src="" className={classes.avatarLarge}>
              R
            </Avatar>
          </Grid>
          <Grid item xs={10}>

            <Button onClick={post.method}
              classes={{
                label: classes.comment,
                root: classes.button
              }}>
              <strong className={classes.comment}>Envie uma mensagem</strong>
            </Button>
          </Grid>

          <Grid item xs={12}>

            <div style={{ height: "5px", width: "95%", marginTop: "10px" }}>
              <Divider />
            </div>
          </Grid>

        </Grid>

      </Collapse>

      <Collapse in={!post.header} timeout="auto" unmountOnExit>

        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={post.photoUserURL} className={classes.avatar}>

            </Avatar>
          }

          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }

          title={post.displayName}
          subheader={getDateUtil(post.createdAt)}
        />
        <CardMedia
          component="img"
          className={post.photoURL ? classes.media : classes.media0}
          image={post.photoURL}
          title="Foto" />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.commentPost}
          </Typography>
        </CardContent>

        <div style={{ height: "5px", width: "95%", marginTop: "10px" }}>
          <Divider />
        </div>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {post.detailPost}
            </Typography>

          </CardContent>
        </Collapse>
        <CardActions disableSpacing>

          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>

          <IconButton
            onClick={handleExpandComment}
            aria-expanded={expanded}
            aria-label="reply">
            <ReplyIcon />
          </IconButton>

          <IconButton style={{ display: post.detailPost ? "" : "none" }}
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandDetailPost}
            aria-expanded={expanded}
            aria-label="show more">

            <ExpandMoreIcon />
          </IconButton>

        </CardActions>

        <Collapse  in={expandedComment} timeout="auto" unmountOnExit>

          <CardContent>

            <FormControl fullWidth>
              <Input
                fullWidth
                multiline
                value={comment}
                onChange={handleChangeComment}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton style={{ display: regEx.test(comment) ? "" : "none" }}>
                      <SendIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

          </CardContent>

        </Collapse>

      </Collapse>
    </Card>
  );
}