import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./AuthProvider";

const auth = getAuth(app);

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { currentUser } = useContext(AuthContext);
	// const [currentUser, setCurrentUser] = useState(null);
	const redirect = useNavigate();

	const handleEmailChange = (e) => setEmail(e.target.value);
	const handlePasswordChange = (e) => setPassword(e.target.value);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			createUserWithEmailAndPassword(auth, email, password)
				.then((val) => alert("Created Successfully"))
				.catch((err) => console.log(err));
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		if (currentUser) {
			redirect("/login");
		}
	}, [currentUser]);
	// console.log(currentUser);
	return (
		<>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
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
				<button type='submit'>Submit</button>
			</form>
			<Link to='/signup'>Already have an account</Link>
		</>
	);
};

export default SignUp;
