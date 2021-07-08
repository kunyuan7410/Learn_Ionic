import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { AuthContext } from '../../database/Auth';

const PrivateRoute = ({ component: RouteComponent, ...rest }: any) => {
	// const { currentUser }: any = useContext(AuthContext);
	return (
		// <Route
		// 	{...rest}
		// 	render={routeProps =>
		// 		!!currentUser ? (
		// 			<RouteComponent {...routeProps} />
		// 		) : (
		// 			<Redirect to={'/Login'} />
		// 		)
		// 	}
		// />
		<h1>123</h1>
	);
};

export default PrivateRoute;
