import React, { useContext, useState } from 'react';
import typePost from '../../interfaces/post';
import { cartOutline, cart, ellipsisVertical } from 'ionicons/icons';
import {
	IonActionSheet,
	IonButton,
	IonIcon,
	IonItem,
	IonLabel,
	useIonActionSheet,
} from '@ionic/react';
import { useDispatch } from 'react-redux';

type postListProps = {
	post: typePost;
	// removePost: (post: typePost | any) => void;
};

const PostListComponent: React.FC<postListProps> = ({
	post,
	// removePost
}) => {
	const dispatch = useDispatch();

	// const [showActionSheet, setShowActionSheet] = useState(false);
	return (
		<>
			<IonLabel>
				{/* <h2>{post.userId}</h2> */}
				<h3>{post.id}</h3>
				<h3>{post.title}</h3>
				<h3>{post.body}</h3>
			</IonLabel>
			{/* <IonButton
				color="danger"
				// onClick={() => removePost(post)}
			>
				Delete
			</IonButton> */}
			{/* <IonIcon
				slot="end"
				icon={ellipsisVertical}
				onClick={() => {
					setShowActionSheet(true);
				}}
			/>
			<IonActionSheet
				isOpen={showActionSheet}
				onDidDismiss={() => setShowActionSheet(false)}
				buttons={[
					{
						text: 'Delete',
						role:'delete',
						handler: () => {
							// 	removeEmployee(employee);
							console.log('Delete clicked');
						},
					},

					{
						text: 'Cancel',
						role: 'cancel',
						handler: () => {
							console.log('Cancel clicked');
						},
					},
				]}
			></IonActionSheet> */}
		</>
	);
};

export default PostListComponent;
