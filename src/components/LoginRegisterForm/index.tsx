import React, { useState } from 'react';
import {
	IonButton,
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonIcon,
	IonInput,
	IonItem,
	IonLoading,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import './styles.css';
import {
	eye,
	eyeOff,
	lockClosedOutline,
	personCircleOutline,
} from 'ionicons/icons';

const Form: React.FC = () => {
	const [eyeVisibility, setEyeVisibility] = useState<boolean>(false);
	const [showPassword, setShowPassword] = useState<boolean>(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const toggleTextPassword = () => {
		setEyeVisibility(!eyeVisibility);
		setShowPassword(!showPassword);
	};

	return (
		<>
			<IonGrid>
				<IonRow>
					<IonCol>
						<IonItem>
							<IonIcon slot="start" icon={personCircleOutline} />
							<IonInput
								type="text"
								placeholder="Email"
								onIonChange={(e: any) => setEmail(e.target.value)}
							/>
						</IonItem>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol>
						<IonItem>
							<IonIcon slot="start" icon={lockClosedOutline} />

							<IonInput
								type={showPassword ? 'password' : 'text'}
								placeholder="Password"
								onIonChange={(e: any) => setPassword(e.target.value)}
							/>
							<IonIcon
								slot="end"
								icon={eyeVisibility ? eye : eyeOff}
								onClick={toggleTextPassword}
							/>
						</IonItem>
					</IonCol>
				</IonRow>
			</IonGrid>
		</>
	);
};

export default Form;
