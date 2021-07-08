import {
	IonButton,
	IonButtons,
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonIcon,
	IonInput,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenuButton,
	IonModal,
	IonPage,
	IonRefresher,
	IonRefresherContent,
	IonRow,
	IonText,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import {
	addOutline,
	callOutline,
	mailOutline,
	personAddOutline,
	personCircle,
	personCircleSharp,
} from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddPostInput } from '../components/AddPostInput/AppPostInput';
import PostListComponent from '../components/PostList/PostList';
import { postState } from '../reducers/postReducer';

import typePost from '../interfaces/post';
import urls from '../urls';
import './styles.css';
import axios from 'axios';
import { RefresherEventDetail } from '@ionic/core';

interface NavigateURL {
	history: any;
}
function doRefresh(event: CustomEvent<RefresherEventDetail>) {
	console.log('Begin async operation');

	setTimeout(() => {
		console.log('Async operation has ended');
		event.detail.complete();
	}, 2000);
}

const Post: React.FC<NavigateURL> = ({ history }) => {
	const goTo = (path: string) => {
		history.push(path, { direction: 'forward' });
	};
	useEffect(() => {
		if (sessionStorage.getItem('isLogged') == 'false') {
			goTo(urls.LOGIN);
		} else if (sessionStorage.length === 0) {
			goTo(urls.LOGIN);
		}
	}, []);

	const [myModal, setMyModal] = useState({ isOpen: false });

	const [postList, setPostList] = useState([]);
	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts?_start=5&_limit=5')
			.then(res => {
				console.log(res);
				setPostList(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	function RefreshContent(event: CustomEvent<RefresherEventDetail>) {
		console.log('Begin async operation');

		axios
			.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
			.then(res => {
				console.log(res);
				setPostList(res.data);
			})
			.catch(err => {
				console.log(err);
			});

		setTimeout(() => {
			console.log('Async operation has ended');
			event.detail.complete();
		}, 2000);
	}

	const posts = useSelector<postState, postState['posts']>(
		state => state.posts
	);
	const dispatch = useDispatch();

	const addPost = (post: typePost) => {
		dispatch({ type: 'ADD_POST', payload: post });
	};
	const removePost = (post: typePost) => {
		dispatch({ type: 'REMOVE_POST', payload: post });
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Post</IonTitle>
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
							<IonTitle>Add Post</IonTitle>
							<div className="closeModal" slot="end">
								<IonButtons>
									<IonButton onClick={() => setMyModal({ isOpen: false })}>
										<IonText color="primary">Close</IonText>
									</IonButton>
								</IonButtons>
							</div>
						</IonToolbar>
					</IonHeader>
					<IonContent>{/* <AddPostInput addPost={addPost} /> */}</IonContent>
				</IonModal>
				<div className="RefreshContent">
					<IonRefresher slot="fixed" onIonRefresh={RefreshContent}>
						<IonRefresherContent
							pullingIcon="arrow-dropdown"
							pullingText="Pull to refresh"
							refreshingSpinner="circles"
							refreshingText="Refreshing..."
						></IonRefresherContent>
					</IonRefresher>
				</div>
				<IonList>
					{postList.map((post, index) => (
						<div key={index}>
							<IonItem key={index}>
								<PostListComponent
									post={post}
									key={index}
									// removePost={removePost}
								/>
							</IonItem>
						</div>
					))}
				</IonList>
				{/* <IonButton onClick={() => console.log(postList)}>Testing</IonButton> */}
			</IonContent>
		</IonPage>
	);
};

export default Post;
