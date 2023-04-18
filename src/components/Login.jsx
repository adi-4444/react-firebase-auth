import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../firebase";
import {
	getAuth,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import { AuthContext } from "./AuthProvider";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { currentUser } = useContext(AuthContext);
	const redirect = useNavigate();
	const handleEmailChange = (e) => setEmail(e.target.value);
	const handlePasswordChange = (e) => setPassword(e.target.value);

	const handleSignIn = async (e) => {
		e.preventDefault();
		console.log(email, password);
		try {
			signInWithEmailAndPassword(auth, email, password)
				.then((res) => console.log(res))
				.catch((err) => console.log(err));
		} catch (error) {
			console.error(error);
		}
	};
	const handleSignInWithGoogle = async () => {
		try {
			signInWithPopup(auth, googleProvider);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (currentUser) {
			redirect("/");
		}
	}, [currentUser]);

	return (
		<>
			<h1>Log in</h1>

			<form onSubmit={handleSignIn}>
				<input
					type='email'
					placeholder='Email'
					value={email}
					onChange={handleEmailChange}
				/>
				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={handlePasswordChange}
				/>
				<button type='submit'>Sign in</button>
				<button type='button' onClick={handleSignInWithGoogle}>
					Sign in with Google
				</button>
			</form>
			<Link to='/signup'>Don't have an account</Link>
		</>
	);
};

export default Login;
