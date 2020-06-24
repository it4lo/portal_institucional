import React, { useState } from 'react';
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link, withRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

//import firebase from '../firebase'
const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
		[theme.breakpoints.up("md")]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
	},
	avatar: {
		//margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		//marginTop: theme.spacing.unit,
	},
	submit: {
		marginTop: theme.spacing(3),
	},
})

function Reset(props) {
	const { classes } = props

	const [email, setEmail] = useState('')
	const [show, setShow] = useState(false);
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const [typeMessage, setTypeMessage] = useState("success");

	const sendResetEmail = event => {
		setLoading(true);
		event.preventDefault();
		/* app.auth()
			.sendPasswordResetEmail(email)
			.then(() => {
				//setTimeout(() => { setEmailHasBeenSent(false) }, 3000);
				setLoading(false);
				setMessage("Um email será enviado para você redefinir sua senha");
				setTypeMessage("success");
				setShow(true);
			})
			.catch(() => {
				setLoading(false);
				setShow(true);
				setMessage("Houve um erro ao solicitar a redefinição");
				setTypeMessage("error");
			}); */
	};

	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
				<Collapse in={show}>
					<Alert severity={typeMessage}
						action={
							<IconButton
								aria-label="close"
								color="inherit"
								size="small"
								onClick={() => {
									setShow(false);
								}}
							>
								<CloseIcon fontSize="inherit" />
							</IconButton>
						}
					>
						{message}
					</Alert>
				</Collapse>

				<Avatar src={require("../../utils/images/logofas.png")}
					style={{
						width: "11vh",
						height: "11vh"
					}}>

				</Avatar>
				<Typography component="h1" variant="h5">
					Resetar senha
       			</Typography>
				<form className={classes.form} onSubmit={e => e.preventDefault() && false}>


					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email">Email Address</InputLabel>
						<Input id="email" name="email" autoComplete="off" value={email} onChange={e => setEmail(e.target.value)} />
					</FormControl>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						disabled={loading}
						className={classes.submit}
						onClick={event => {
							sendResetEmail(event);
						}}>
						Enviar
						{loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </Button>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="secondary"
						component={Link}
						to="/login"
						disabled={loading}
						className={classes.submit}>
						Voltar ao login
						{loading && <CircularProgress size={24} className={classes.buttonProgress} />}
					</Button>

				</form>
			</Paper>
		</main>
	)

	/* async function onRegister() {
		try {
			//await firebase.register(name, email, password)
			//await firebase.addQuote(quote)
			props.history.replace('/dashboard')
		} catch (error) {
			alert(error.message)
		}
	} */
}

export default withRouter(withStyles(styles)(Reset))