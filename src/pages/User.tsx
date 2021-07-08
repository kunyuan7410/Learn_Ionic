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

// interface NavigateURL {
// 	history: any;
// }

const User: React.FC = () => {
	let history = useHistory();
	// const goTo = (path: string) => {

	// 	history.push(path, { direction: 'forward' });
	// };
	const dispatch = useDispatch();
	const userState = useSelector((state: RootStore) => state.users);
	useEffect(() => {
		FetchData(1);
	}, []);
	const FetchData = (page = 1) => {
		dispatch(GetUserList(page));
	};
	const ShowData = () => {
		if (userState.loading) {
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

										// onClick={() => viewUser(user.name)}
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
		dispatch(GetUser(userName));
	};
	// const handleSearch = () => {
	// 	history.push({
	// 		pathname: `${urls.APP_USER}/${userName}`,

	// 		state:user:{userName},
	// 	});
	// };

	console.log(userState.users);
	const [myModal, setMyModal] = useState({ isOpen: false });
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>User</IonTitle>
					{/* <div className="iconAdd" slot="end">
						<IonIcon
							slot="end"
							icon={personAddOutline}
							onClick={() => setMyModal({ isOpen: true })}
						/>
					</div> */}
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
					<IonContent>
						{/* <AddEmployeeInput addEmployee={addEmployee} /> */}
					</IonContent>
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

				{/* {userState.user && (
					<div>
						{userState.user.map((user, index) => {
							return (
								<div key={index + 1}>
									<p key={index + 2}>{user.id}</p>
									<p key={index + 3}>{user.name}</p>
								</div>
							);
						})}
					</div>
				)} */}
			</IonContent>
		</IonPage>
	);
};

export default User;
