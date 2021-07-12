import {
	IonButton,
	IonButtons,
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonInput,
	IonItem,
	IonMenuButton,
	IonModal,
	IonPage,
	IonRow,
	IonText,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { RootStore } from '../reducers/store';
import { GetUser, GetUserList } from '../reducers/Users/UserActions';
import _ from 'lodash';
import urls from '../urls';
import { fetchUsers } from '../reducers/Users/createSlice';

const User: React.FC = () => {
	let history = useHistory();

	const dispatch = useDispatch();
	const userState = useSelector((state: RootStore) => state.users);
	useEffect(() => {
		const fetchUserData = async () => {
			await dispatch(fetchUsers());
		};
		fetchUserData();
	}, [dispatch]);
	console.log(userState.users);
	// useEffect(() => {
	// 	FetchData(1);
	// }, []);

	// const FetchData = (page = 1) => {
	// 	dispatch(GetUserList(page));
	// };

	const ShowData = () => {
		if (userState.loading == 'pending') {
			return <p>Loading...</p>;
		}

		if (!_.isEmpty(userState.users)) {
			return (
				<>
					{userState.users.map((user, index) => {
						return (
							<div key={index + 1}>
								<IonItem>
									<p key={index + 2}>{user.name}</p>
									<Link
										to={`${urls.APP_USER}/${user.name}`}
										key={index + 3}
										slot="end"
									>
										View
									</Link>
								</IonItem>
							</div>
						);
					})}
				</>
			);
		}
		if (userState.error !== '') {
			return <p>{userState.error}</p>;
		}

		return <p>unable to get data</p>;
	};

	const [userName, setUserName] = useState('');
	const handleChange = (e: CustomEvent) => setUserName(e.detail.value);
	const handleSearch = () => {
		history.push(`${urls.APP_USER}/${userName}`);
	};

	const [myModal, setMyModal] = useState({ isOpen: false });
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>User</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonModal isOpen={myModal.isOpen}>
					<IonHeader>
						<IonToolbar>
							<IonTitle>Add Employee</IonTitle>
							<div className="closeModal" slot="end">
								<IonButtons>
									<IonButton onClick={() => setMyModal({ isOpen: false })}>
										<IonText color="primary">Close</IonText>
									</IonButton>
								</IonButtons>
							</div>
						</IonToolbar>
					</IonHeader>
					<IonContent></IonContent>
				</IonModal>
				<IonGrid>
					<IonRow>
						<IonCol>
							<IonItem>
								<IonInput
									type="text"
									placeholder="Search for name"
									onIonChange={handleChange}
								/>
							</IonItem>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<IonButton onClick={handleSearch}>Search</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
				{ShowData()}
			</IonContent>
		</IonPage>
	);
};

export default User;
