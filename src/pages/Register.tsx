import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonIcon,
	IonInput,
	IonItem,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import {
	eye,
	eyeOff,
	lockClosedOutline,
	personCircleOutline,
} from 'ionicons/icons';
import React, { useState } from 'react';
import Form from '../components/LoginRegisterForm';
import Logo from '../components/Logo';
import { toast } from '../components/Toast/toast';
import { userRegister } from '../database/firebaseConfig';
import { Loading } from '../components/Loading/loading';

interface NavigateURL {
	history: any;
}

const Register: React.FC<NavigateURL> = ({ history }) => {
	const [eyeVisibility, setEyeVisibility] = useState<boolean>(false);
	const [showPassword, setShowPassword] = useState<boolean>(true);
	const [eyeVisibility2, setEyeVisibility2] = useState<boolean>(false);
	const [showPassword2, setShowPassword2] = useState<boolean>(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cPassword, setCPassword] = useState('');
	const toggleTextPassword = () => {
		setEyeVisibility(!eyeVisibility);
		setShowPassword(!showPassword);
	};

	const toggleTextPassword2 = () => {
		setEyeVisibility2(!eyeVisibility2);
		setShowPassword2(!showPassword2);
	};

	const goTo = (path: string) => {
		history.push(path, { direction: 'forward' });
	};
	async function signUp() {
		if (email.trim() === '' || password.trim() == '' || cPassword === '') {
			return toast('Please fill in all the information');
		} else if (password.trim() !== cPassword.trim()) {
			return toast('Password and confirm password not match');
		}
		const verifyResult = await userRegister(email, password);
		Loading();
		if (verifyResult) {
			toast('Register Successfully');
			goTo('/Login');
		}
	}
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton defaultHref={`/`} />
					</IonButtons>
					<IonTitle>WESS Register</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<Logo />
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
					<IonRow>
						<IonCol>
							<IonItem>
								<IonIcon slot="start" icon={lockClosedOutline} />

								<IonInput
									type={showPassword2 ? 'password' : 'text'}
									placeholder="Confirm Password"
									onIonChange={(e: any) => setCPassword(e.target.value)}
								/>
								<IonIcon
									slot="end"
									icon={eyeVisibility2 ? eye : eyeOff}
									onClick={toggleTextPassword2}
								/>
							</IonItem>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol className="ion-text-center">
							<IonButton expand="block" color="danger" onClick={signUp}>
								Register
							</IonButton>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol className="ion-text-center"></IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Register;
