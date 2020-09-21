import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import TextField from '@material-ui/core/TextField';
import { green, grey } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import DetailIcon from '@material-ui/icons/Menu';
import Collapse from '@material-ui/core/Collapse';
import ClearIcon from '@material-ui/icons/Clear';



const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: "80vh"
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function DialogSendPost({ open, fnSetOpen, fnOnCreatePostInList }) {

  const [openDetail, setOpenDetail] = useState(false);
  const [openImg, setOpenImg] = useState(false);
  const [imgResult, setImgResult] = useState("");
  const [imgFile, setImgFile] = useState("");
  const [body, setBody] = useState("");
  const [detail, setDetail] = useState("");

  const regEx = /\w+/;

  const handleClose = () => {
    fnSetOpen(false);
  };

  const handleExpandDetail = () => {
    setOpenDetail(!openDetail);
  };

  const clearImg = () => {
    setImgResult(false);
  }

  const handleImageAsFile = (e) => {
    const image = e.target.files[0]
    setImgFile(image);
    const fileReader = new FileReader();
    fileReader.onloadend = function () {
      setImgResult(fileReader.result);
      setOpenImg(true);
    }

    fileReader.readAsDataURL(image);
  }

  const onCloseVerifyAndCreatePost = () => {
    fnOnCreatePostInList({ body, detail, imgFile });
    setBody("");
    setDetail("");
    setImgFile("");
    setImgResult("");
  }

  return (
    <div>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Publicação
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            id="body"
            label="Texto"
            multiline
            fullWidth
            value={body}
            rows={1}
            onChange={e => setBody(e.target.value)}
            variant="outlined"
          />

          <Divider style={{ marginBottom: "10px", marginTop: "10px" }} />
          <Collapse in={openDetail} timeout="auto" unmountOnExit>

            <TextField
              id="detail"
              label="Detalhes da publicação"
              multiline
              fullWidth
              value={detail}
              rows={5}
              onChange={e => setDetail(e.target.value)}
              variant="outlined"
            />
            <Divider style={{ marginBottom: "10px", marginTop: "10px" }} />
          </Collapse>

          <Collapse in={openImg} timeout="auto" unmountOnExit>
            <img id={"imgPost"} alt="" src={imgResult} style={{ width: "60%", height: "300px", marginLeft: "auto", marginRight: "auto" }}>

            </img>
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={clearImg}>
              <ClearIcon style={{ color: green[500] }} />
            </IconButton>

          </Collapse>

        </DialogContent>
        <DialogActions>
          <Grid container style={{ display: "flex" }}>

            <Grid item xs={4}>
              {/* <IconButton color="primary" aria-label="upload picture" component="span">
                <AddAPhotoIcon style={{ color: green[500] }} />
              </IconButton> */}
              <input accept="image/*"
                id="icon-button-file" type="file" style={{ display: "none" }} onChange={handleImageAsFile} />
              <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <AddAPhotoIcon style={{ color: green[500] }} />
                </IconButton>
              </label>
              <strong style={{ color: grey[500] }}>Foto</strong>
            </Grid>

            <Grid item xs={4}>
              <IconButton
                onClick={handleExpandDetail}
                aria-expanded={openDetail}
                aria-label="Inserir detalhes">
                <DetailIcon />
              </IconButton>
              <strong style={{ color: grey[500] }}>Detalhes</strong>
            </Grid>

          </Grid>

          <Button autoFocus onClick={onCloseVerifyAndCreatePost} style={{ display: regEx.test(body) ? "" : "none" }} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
