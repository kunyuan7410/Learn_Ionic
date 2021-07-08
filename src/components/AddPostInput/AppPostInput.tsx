import {
	IonButton,
	IonCol,
	IonGrid,
	IonIcon,
	IonInput,
	IonItem,
	IonRow,
} from '@ionic/react';
import {
	bookOutline,
	callOutline,
	mailOutline,
	personCircle,
	personCircleSharp,
} from 'ionicons/icons';
import React, { ChangeEvent, useState } from 'react';
import typePost from '../../interfaces/post';

type AddPostInputProps = {
	addPost: (post: typePost | any) => void;
};

export const AddPostInput: React.FC<AddPostInputProps> = ({ addPost }) => {
	// const [employee, setEmployee] = useState<typeEmployee | {}>();
	const [postUserId, setPostUserId] = useState(0);
	const [postId, setPostId] = useState(0);
	const [postTitle, setPostTitle] = useState('');
	const [postBody, setPostBody] = useState('');

	// const handleEmployeeData = (e: any) => {
	// 	setEmployee({
	// 		...employee,

	// 		[e.target!.id!]: e.detail.value,
	// 	});
	// 	console.log(e.detail.value);
	// };

	return (
		<>
			<div className="iconAddEmployee">
				<IonIcon icon={bookOutline} />
			</div>

			<IonGrid>
				<IonRow>
					<IonCol>
						<IonItem>
							<IonIcon slot="start" icon={personCircle} />
							<IonInput
								type="text"
								placeholder="User ID"
								id="userId"
								onIonChange={(e: any) => setPostUserId(e.target.value)}
							/>
						</IonItem>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol>
						<IonItem>
							<IonIcon slot="start" icon={callOutline} />

							<IonInput
								type="text"
								placeholder="ID"
								id="ID"
								onIonChange={(e: any) => setPostId(e.target.value)}
							/>
						</IonItem>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol>
						<IonItem>
							<IonIcon slot="start" icon={mailOutline} />

							<IonInput
								type="text"
								placeholder="Email"
								id="email"
								onIonChange={(e: any) => setPostTitle(e.target.value)}
							/>
						</IonItem>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol>
						<IonItem>
							<IonIcon slot="start" icon={mailOutline} />

							<IonInput
								type="text"
								placeholder="Email"
								id="email"
								onIonChange={(e: any) => setPostBody(e.target.value)}
							/>
						</IonItem>
					</IonCol>
				</IonRow>
			</IonGrid>

			<IonButton
				color="danger"
				expand="block"
				onClick={() => {
					addPost({
						userId: postUserId,
						id: postId,
						title: postTitle,
						body: postBody,
					});
				}}
			>
				Add Post
			</IonButton>
		</>
	);
};
