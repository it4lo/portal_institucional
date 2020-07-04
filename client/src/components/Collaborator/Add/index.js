import React, { useRef, useState, useContext, useEffect } from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useStyles } from './style';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Input from '../../Form/Input';
import InputFile from '../../Form/inputFile';
import InputDate from '../../Form/inputDate';
import InputSelect from '../../Form/inputSelect';
import * as Coll from '../../../models/Collaborator'


export default function AddCollarator({ managements, positions }) {

  const history = useHistory();
  const formRef = useRef(null);
  const classes = useStyles();
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [typeMessage, setTypeMessage] = useState("success");
  const [collaborator, setCollaborator] = useState({});


  const handleImageAsFile = (e) => {
    const image = e.target.files[0]
    if (image) {
      setImgFile(image);
      setPreview(image);
    }
  }

  const coll = history.location.state ? {
    ...history.location.state.coll,
    dateOfAdministration: formatDate(history.location.state.coll.dateOfAdministration),
    dateOfBirth: formatDate(history.location.state.coll.dateOfBirth)
  } : {};

  useEffect(() => {
    const fetchData = async () => {
      /* const data = history.location.state ? {
        ...history.location.state.coll,
        dateOfAdministration: formatDate(history.location.state.coll.dateOfAdministration),
        dateOfBirth: formatDate(history.location.state.coll.dateOfBirth)
      } : {}; */
      //formRef.current.setFieldValue('fullName', 'John Doe');
      //formRef.current.setData({});
    };
    fetchData();
  }, [history.location.state])

  const [imgFile, setImgFile] = useState(coll.photoURL);

  function formatDate(date) {
    //const dt = new Date(date.substring(0, 10).split('-'));
    return date.substring(0, 10);
  }

  function setPreview(image) {
    const fileReader = new FileReader();
    fileReader.onloadend = function () {
      document.querySelector('#img').setAttribute('src', fileReader.result);
    }

    fileReader.readAsDataURL(image);
  }

  function fnSetLoading() {
    setSuccess(true);
    setLoading(false);
    setShowMessage(true);
    setTypeMessage("success");
  }

  async function handleSubmit(data) {
    setSuccess(false);
    setLoading(true);

    try {

      const schema = Yup.object().shape({
        fullName: Yup.string().required('Nome completo é obrigatório'),
        socialName: Yup.string().required('Seu nome social é obrigatório'),
        email: Yup.string().required('O email é obrigatório'),
        management: Yup.string().required('A Gestão é obrigatória'),
        dateOfAdministration: Yup.string().required('A data de admissão é obrigatório'),
        dateOfBirth: Yup.string().required('A data de nascimento é orbigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const newData = {
        ...coll, ...data,
        day: data.dateOfBirth.split('-')[2],
        month: data.dateOfBirth.split('-')[1],
      };

      if (!newData.photoURL) {
        newData.photoURL = imgFile;
      }

      for (var [key, value] of Object.entries(newData)) {
        if (value === "" || value === "undefined") { delete newData[key] }
      }

      await Coll.save(newData);

      setMessage("Congrats, informações salvas");
      fnSetLoading();
      formRef.current.setErrors({});

      setTimeout(() => {
        history.push('/collaborator');
      }, 3000)


    } catch (err) {

      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        })
        formRef.current.setErrors(errorMessages);
        setLoading(false);
        return;
      }

      setTypeMessage("error");
      setMessage("Erro ao registrar colaborador");
      setLoading(false);
    }

  }

  return (
    <React.Fragment>
      <Container style={{ width: "90%", marginLeft: "auto", marginRight: "auto", marginTop: "5px" }}>

        <Form ref={formRef} initialData={coll}
          onSubmit={handleSubmit}>

          <Collapse in={showMessage}>
            <Alert severity={typeMessage}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setShowMessage(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {message}
            </Alert>
          </Collapse>

          <Grid container spacing={2}>

            <Grid item xs={12}>


            </Grid>
            <Grid item xs={12}>
              <InputFile style={{ display: "none" }} id="icon-button-file" name="photoURL" onChange={handleImageAsFile} />
              <div style={{ position: "relative" }}>
                <label htmlFor="icon-button-file">
                  <div>
                    Clique pra editar
                  </div>
                  <img id="img" className={classes.imageSrc}
                    src={imgFile} alt='Foto'>
                  </img>
                </label>
              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Input name="fullName" label="Nome completo"></Input>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Input name="socialName" label="Como gosta de ser chamado?"></Input>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Input name="email" label="Email"></Input>
            </Grid>

            <Grid item xs={12} sm={3}>
              <InputSelect
                name="management"
                label="Gestão"
                options={managements}
              /* setOption={setOption} */
              ></InputSelect>
            </Grid>

            <Grid item xs={12} sm={3}>
              <InputSelect
                name="occupation"
                label="Cargo"
                options={positions}
              //setOption={setOption}
              ></InputSelect>
            </Grid>

            <Grid item xs={12} sm={3}>
              <InputDate name="dateOfAdministration" label="Data de admissão"></InputDate>

            </Grid>

            <Grid item xs={12} sm={3}>
              <InputDate
                name="dateOfBirth"
                label="Data de nascimento"></InputDate>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Input name="facebook" label="Facebook"></Input>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Input name="instagram" label="Instagram"></Input>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Input name="twitter" label="Twitter"></Input>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Input name="linkedin" label="LinkedIn"></Input>
            </Grid>

            <Grid item xs={12}>
              <Input name="aboutMe" multiline rows={3} label="Coloque uma breve descrição sobre você, essa decrição vai aparecer no seu cartão"></Input>
            </Grid>

            <Grid item xs={12}>
              <div className={classes.root}>
                <div className={classes.wrapper}>
                  <Fab
                    type="submit"
                    aria-label="save"
                    color="primary"
                    className={clsx(classes.buttonState, {
                      [classes.buttonSuccess]: success,
                    })}

                  >
                    {success ? <CheckIcon /> : <SaveIcon />}
                  </Fab>
                  {loading && <CircularProgress size={68} className={classes.fabProgress} />}
                </div>

                <div className={classes.wrapper}>
                  <Fab
                    onClick={(e) => { e.preventDefault(); history.push('/collaborator') }}
                    aria-label="save"
                    color="secondary"
                    className={classes.buttonCancel}>
                    <CloseIcon />
                  </Fab>

                </div>

              </div>

            </Grid>
          </Grid>

        </Form>

      </Container>
    </React.Fragment>
  );
}

