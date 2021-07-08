import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetUser } from '../reducers/Users/UserActions';
import _ from 'lodash';
import { RootStore } from '../reducers/store';
import { useLocation } from 'react-router-dom';

// interface NavigateURL {
// 	history: any;
// }

const UserSearch: React.FC = () => {
	// const goTo = (path: string) => {
	// 	history.push(path, { direction: 'forward' });
	// };
	const location = useLocation();
	const userName = location.search;
	console.log(`userName=${userName}`);
	// const userName = history.match.params.users;
	const dispatch = useDispatch();
	const userState = useSelector((state: RootStore) => state.users);
	useEffect(() => {
		dispatch(GetUser(userName));
	}, []);

	// const ShowData = () => {
	// 	if (!_.isEmpty(userState.users[userName])) {
	// 		const userData = userState.users[userName];

	// 		return (
	// 			<>
	// 				<h2>{userData.id}</h2>
	// 				<h2>{userData.name}</h2>
	// 				<h2>{userData.username}</h2>
	// 				<h2>{userData.phone}</h2>
	// 			</>
	// 		);
	// 	}
	// 	if (userState.loading) {
	// 		return <p>Loading...</p>;
	// 	}
	// 	if (userState.error !== '') {
	// 		return <p>{userState.error}</p>;
	// 	}
	// 	return <p>error getting user</p>;
	// };
	return (
		<>
			<h1>User Information</h1>
			{/* {ShowData} */}
		</>
	);
};

export default UserSearch;
