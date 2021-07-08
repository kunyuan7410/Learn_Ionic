import {
	IonBackButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetUser } from '../reducers/Users/UserActions';
import _ from 'lodash';
import { RootStore } from '../reducers/store';
import { useLocation } from 'react-router-dom';
import User from './User';
import { useParams } from 'react-router-dom';
type ViewUserProps = {
	viewUser: string;
};

const UserListSearch: React.FC<ViewUserProps> = ({ viewUser }) => {
	let { username } = useParams<{ username?: string }>();
	console.log(`username=${username}`);
	// const goTo = (path: string) => {
	// 	history.push(path, { direction: 'forward' });
	// };
	const location = useLocation();
	// const userName = location.pathname;
	// console.log(`userName=${location.state}`);
	const userName: string = location.pathname;
	const dispatch = useDispatch();
	const userState = useSelector((state: RootStore) => state.users);
	// useEffect(() => {
	// 	// console.log(`haha:${GetUser(userName)}`);
	// }, []);

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
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton defaultHref={`/`} />
					</IonButtons>
					<IonTitle>Search Page</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<h1>Search</h1>
			</IonContent>
		</IonPage>
	);
};

export default UserListSearch;
