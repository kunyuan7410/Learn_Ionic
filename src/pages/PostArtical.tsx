import {
	IonButton,
	IonList,
	IonItem,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonMenuButton,
	IonTitle,
	IonContent,
	IonPage,
	IonLabel,
	IonInfiniteScroll,
	IonInfiniteScrollContent,
} from '@ionic/react';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import post from '../interfaces/post';
import PostArticalComponent from '../components/PostArticalComponent/PostArticalComponent';
import typePost from '../interfaces/post';
import InfiniteScrollComponent from '../components/InfiniteScrollComponent/InfiniteScroll';

const defaultPosts: post[] = [];

const UserSearch = () => {
	const [posts, setPosts]: [post[], (posts: post[]) => void] =
		useState(defaultPosts);
	const [loading, setLoading]: [boolean, (loading: boolean) => void] =
		useState<boolean>(true);
	const [error, setError]: [string, (error: string) => void] = useState('');
	const [hasMore, setHasMore] = useState(false);
	const [postShow, setPostShow] = useState(10);

	const observer = useRef<IntersectionObserver>();
	const lastBookElementRef = useCallback(
		node => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver(entries => {
				if (entries[0].isIntersecting) {
					setTimeout(() => {
						setPostShow(prevPostShow => prevPostShow + 5);
					}, 500);
				}
			});
			if (node) observer.current.observe(node);
		},
		[loading, hasMore]
	);
	useEffect(() => {
		// setLoading(true);

		axios
			.get<post[]>(
				`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=${postShow}`,
				{
					headers: {
						'Content-Type': 'application/json',
					},
					timeout: 4000,
				}
			)
			.then(response => {
				// console.log(response);
				setPosts(response.data);
				setHasMore(response.data.length > 0);
				setLoading(false);
			})
			.catch(ex => {
				const error =
					ex.response.status === 404
						? 'Resource Not found'
						: 'An unexpected error has occurred';
				setError(error);
				setLoading(false);
			});
	}, [postShow]);
	const removePost = (post: typePost) => {};

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
				<div className="App">
					<IonList>
						{posts.map((post, index) => {
							if (posts.length === index + 1) {
								return (
									<div key={post.id} ref={lastBookElementRef}>
										<PostArticalComponent
											post={post}
											key={index}
											removePost={removePost}
										/>
									</div>
								);
							} else {
								return (
									<div key={post.id}>
										<PostArticalComponent
											post={post}
											key={index}
											removePost={removePost}
										/>
									</div>
								);
							}
						})}
					</IonList>
					{/* {loading && 'Loading...'} */}
					{error && <p className="error">{error}</p>}
				</div>
				<InfiniteScrollComponent />
			</IonContent>
		</IonPage>
	);
};

export default UserSearch;
