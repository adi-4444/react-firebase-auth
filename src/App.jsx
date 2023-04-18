import React from "react";
import "./App.css";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import { AuthProvider } from "./components/AuthProvider";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Dashboard />,
		errorElement: <Error />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <SignUp />,
	},
]);
function App() {
	return (
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	);
}

export default App;
