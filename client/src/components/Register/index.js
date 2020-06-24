import React, { useState } from 'react'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link, withRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';


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

function Register(props) {
	const { classes } = props
	const history = props.history;
	const [displayName, setDisplayName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [quote, setQuote] = useState('')
	const [nameSocial, setNameSocial] = useState("");
	const [show, setShow] = useState(false);
	const [loading, setLoading] = React.useState(false);

	const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
		event.preventDefault();
		setLoading(true);
		try {
			/* const { user } = await app.auth().createUserWithEmailAndPassword(email, password);
			await generateUserDocument(user, { displayName, quote, nameSocial }); */
			setLoading(false);
			history.push("/");

		}
		catch (error) {
			setShow(true);
			setLoading(false);
		}

		setDisplayName("");
		setEmail("");
		setPassword("");
		setNameSocial("");
		setQuote("");
	};

	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>

				<Collapse in={show}>
					<Alert severity={"error"}
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
						Erro ao registar usuário
					</Alert>
				</Collapse>

				<Avatar  src={require("../../utils/images/logofas.png")}
					style={{
						width: "11vh",
						height: "11vh"
					}}>

				</Avatar>
				<Typography component="h1" variant="h5">
						Registre sua conta
								</Typography>
				<form className={classes.form}>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="name">Nome</InputLabel>
						<Input id="name" name="name" autoComplete="off" autoFocus value={displayName} onChange={e => setDisplayName(e.target.value)} />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email">Email</InputLabel>
						<Input id="email" name="email" autoComplete="off" value={email} onChange={e => setEmail(e.target.value)} />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="password">Senha</InputLabel>
						<Input name="password" type="password" id="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)} />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="nameSocial">Nome Social</InputLabel>
						<Input name="nameSocial" type="text" id="namesocial" autoComplete="off" value={nameSocial} onChange={e => setNameSocial(e.target.value)} />
					</FormControl>

					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="quote">Sua frase preferia?</InputLabel>
						<Input name="quote" type="text" id="quote" autoComplete="off" value={quote} onChange={e => setQuote(e.target.value)} />
					</FormControl>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						disabled={loading}
						color="primary"
						onClick={event => {
							createUserWithEmailAndPasswordHandler(event, email, password);
						}}
						className={classes.submit}>
						Register
						{loading && <CircularProgress size={24} className={classes.buttonProgress} />}
					</Button>

					<Button
						fullWidth
						variant="contained"
						color="secondary"
						component={Link}
						to="/login"
						className={classes.submit}>
						Voltar para o login
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

export default withRouter(withStyles(styles)(Register))