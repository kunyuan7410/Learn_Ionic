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

import User from './User';
import { useParams } from 'react-router-dom';

const UserListSearch: React.FC = () => {
	let { username } = useParams<{ username?: any }>();
	console.log(`username=${username}`);

	const dispatch = useDispatch();
	const userState = useSelector((state: RootStore) => state.users);
	useEffect(() => {
		dispatch(GetUser(username));
	}, [username]);

	const ShowData = () => {
		if (!_.isEmpty(userState.user)) {
			return (
				<>
					{userState.user.map((userFind, index) => {
						return (
							<div key={index}>
								<p> {userFind.id}</p>
								<p>{userFind.name}</p>
								<p> {userFind.username}</p>
								<p>{userFind.phone}</p>
								<p>{userFind.email}</p>
							</div>
						);
					})}
					{/* <h2>{userData.id}</h2>
					<h2>{userData.name}</h2>
					<h2>{userData.username}</h2>
					<h2>{userData.phone}</h2> */}
				</>
			);
		}
		if (userState.loading) {
			return <p>Loading...</p>;
		}
		if (userState.error !== '') {
			return <p>{userState.error}</p>;
		}
		return <p>error getting user</p>;
	};
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
			<IonContent fullscreen>{ShowData()}</IonContent>
		</IonPage>
	);
};

export default UserListSearch;
