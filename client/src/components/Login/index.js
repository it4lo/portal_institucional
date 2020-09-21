import React, { useState, useCallback, useContext } from 'react'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { green } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import api from '../../services/api';

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
		[theme.breakpoints.up('md')]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	buttonLogin: {
		backgroundColor: green[500],
		'&:hover': {
			backgroundColor: green[700],
		},
		marginTop: "4vh"
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
	},
	avatar: {

		//backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		//marginTop: theme.spacing.unit,
	},
	submit: {
		marginTop: theme.spacing(3),
	},
	buttonProgress: {
		color: green[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12,
	},
});

function SignIn(props) {
	const { classes } = props
	const history = props.history;
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [show, setShow] = useState(false)
	const [loading, setLoading] = React.useState(false);

	const handleLogin = useCallback(
		async event => {
			event.preventDefault();
			setLoading(true);
			const { email, password } = event.target.elements;

			try {

				const response = await api.post('/session', {
					email: email.value,
					password: password.value,
					handlerEnabled: false
				});

				const user = response.data;

				localStorage.setItem('@IntraAPI', JSON.stringify(user));
				
				history.push("/");
				setLoading(false);
			} catch (error) {

				setShow(true);
				setLoading(false);
			}
		},
		[history]
	);


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
						Email ou senha inválida
					</Alert>
				</Collapse>

				<Avatar className={classes.avatar} src={require("../../utils/images/logofas.png")}
					style={{
						width: "11vh",
						height: "11vh"
					}}>

				</Avatar>
				<Typography component="h1" variant="h5">

				</Typography>
				<form className={classes.form} onSubmit={handleLogin}>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email" disabled={loading}>Email</InputLabel>
						<Input id="email" name="email" autoComplete="off" autoFocus value={email} onChange={e => setEmail(e.target.value)} />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="password" disabled={loading}>Senha</InputLabel>
						<Input name="password" type="password" id="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)} />
					</FormControl>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						disabled={loading}
						/* onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }} */
						className={classes.buttonLogin}>
						Entrar
						{loading && <CircularProgress size={24} className={classes.buttonProgress} />}
					</Button>


					<div style={{ display: "flex", justifyContent: "space-between", marginTop: "3vh" }}>

						<Link to="/register" className="text-blue-500 hover:text-blue-600">
							Registrar
          	</Link>

						<Link to="/reset" className="text-blue-500 hover:text-blue-600">
							Esqueceu a senha?
          	</Link>


					</div>

				</form>
			</Paper>
		</main>
	)
}

export default withRouter(withStyles(styles)(SignIn))