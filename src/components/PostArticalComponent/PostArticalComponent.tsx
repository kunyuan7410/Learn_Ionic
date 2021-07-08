import {
	IonActionSheet,
	IonButton,
	IonIcon,
	IonItem,
	IonLabel,
} from '@ionic/react';
import { ellipsisVertical } from 'ionicons/icons';
import React, { useState } from 'react';
import typePost from '../../interfaces/post';
type postListProps = {
	post: typePost;
	removePost: (post: typePost | any) => void;
};

const PostArticalComponent: React.FC<postListProps> = ({
	post,
	removePost,
}) => {
	const [showActionSheet, setShowActionSheet] = useState(false);
	return (
		<>
			<IonItem>
				<IonLabel>
					<h2>{`${post.id}. ${post.title}`}</h2>
					<p>{post.body}</p>
				</IonLabel>
				{/* <IonButton color="danger" onClick={() => removePost(post)}>
					Delete
				</IonButton> */}
				<IonIcon
					slot="end"
					icon={ellipsisVertical}
					onClick={() => {
						setShowActionSheet(true);
					}}
				/>
				<IonActionSheet
					isOpen={showActionSheet}
					onDidDismiss={() => setShowActionSheet(false)}
					header="Options"
					buttons={[
						{
							text: 'Edit',

							handler: () => {
								console.log('Edit clicked');
							},
						},
						{
							text: 'Delete',
							role: 'delete',
							handler: () => {
								removePost(post);
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
				></IonActionSheet>
			</IonItem>
		</>
	);
};

export default PostArticalComponent;
