import { useRouteError } from "react-router-dom";

const Error = () => {
	const error = useRouteError();

	return (
		<div>
			<div id='error-page'>
				<h1>Oops!</h1>
				<p>Sorry, an error has occurred.</p>
				<p>
					<h3>{error.statusText || error.message}</h3>
				</p>
			</div>
		</div>
	);
};

export default Error;
