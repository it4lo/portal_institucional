import React, { useState } from 'react'
import { Typography, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { save } from '../../models/User';

function Register(props) {

	const { classes, setMessage, setShow, history } = props;
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = React.useState(false);

	const createUserWithEmailAndPasswordHandler = async (event) => {
		event.preventDefault();
		setLoading(true);
		try {
			const user = { name, email, password }
			const response = await save(user);

			if (response.status) {
				setMessage(response.error);
				setShow(true);
				setLoading(false);
				return;
			}

			setLoading(false);
			history.push("/");
		}
		catch (error) {
			setShow(true);
			setLoading(false);
		}
		setName("");
		setEmail("");
		setPassword("");
	};

	return (

		<>
			<Avatar src={require("../../utils/images/logofas.png")}
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
					<Input id="name" name="name" autoComplete="off" autoFocus value={name} onChange={e => setName(e.target.value)} />
				</FormControl>
				<FormControl margin="normal" required fullWidth>
					<InputLabel htmlFor="email">Email</InputLabel>
					<Input id="email" name="email" autoComplete="off" value={email} onChange={e => setEmail(e.target.value)} />
				</FormControl>
				<FormControl margin="normal" required fullWidth>
					<InputLabel htmlFor="password">Senha</InputLabel>
					<Input name="password" type="password" id="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)} />
				</FormControl>

				<Button
					type="submit"
					fullWidth
					variant="contained"
					disabled={loading}
					color="primary"
					onClick={event => {
						createUserWithEmailAndPasswordHandler(event);
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
		</>
	)
}

export default Register