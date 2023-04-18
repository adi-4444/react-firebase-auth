import React, { useEffect, useState, createContext } from "react";
import { app } from "../../firebase";
import { onAuthStateChanged, getAuth } from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [currentUser, setCurrentUser] = useState(null);
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});
	}, []);
	if (loading) {
		return <p>Loading...</p>;
	}
	return (
		<AuthContext.Provider value={{ currentUser }}>
			{children}
		</AuthContext.Provider>
	);
};
