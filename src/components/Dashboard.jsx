import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase";
import { AuthContext } from "./AuthProvider";

const auth = getAuth(app);

const Dashboard = () => {
	const redirect = useNavigate();
	const { currentUser } = useContext(AuthContext);

	const signout = () => {
		signOut(auth);
	};
	useEffect(() => {
		if (!currentUser) {
			redirect("/login");
		}
	}, [currentUser]);
	return (
		<div>
			<h1>Welcome to user DashBoard</h1>
			<h1>Hello {currentUser?.email}</h1>
			<button onClick={signout}> Sign Out</button>
		</div>
	);
};

export default Dashboard;
