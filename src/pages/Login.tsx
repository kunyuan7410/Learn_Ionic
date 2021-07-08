import {
	IonButton,
	IonCheckbox,
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonIcon,
	IonInput,
	IonItem,
	IonLabel,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import React, { useContext, useEffect, useState } from 'react';
import {
	eye,
	eyeOff,
	lockClosedOutline,
	personCircleOutline,
} from 'ionicons/icons';
import Logo from '../components/Logo';
import { toast } from '../components/Toast/toast';
import { Loading } from '../components/Loading/loading';
import { userLogin } from '../database/firebaseConfig';

import urls from '../urls';
import { Redirect } from 'react-router-dom';

interface NavigateURL {
	history: any;
}

const Login: React.FC<NavigateURL> = ({ history }) => {
	const goTo = (path: string) => {
		history.push(path, { direction: 'forward' });
	};
	useEffect(() => {
		if (sessionStorage.getItem('isLogged') == 'true') {
			goTo(urls.APP_HOME);
		} else if (sessionStorage.length === 0) {
			goTo(urls.LOGIN);
		}
	}, []);
	const [checked, setChecked] = useState<boolean>(false);
	const [eyeVisibility, setEyeVisibility] = useState<boolean>(false);
	const [showPassword, setShowPassword] = useState<boolean>(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const toggleTextPassword = () => {
		setEyeVisibility(!eyeVisibility);
		setShowPassword(!showPassword);
	};
	async function loginToSystem() {
		Loading();
		const verifyResult = await userLogin(email, password);
		if (verifyResult) {
			toast('Login Successfully');
			sessionStorage.setItem('isLogged', 'true');
			goTo(urls.APP_HOME);
		}
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>WESS Login</IonTitle>
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

					<IonItem
						lines="none"
						onClick={() => {
							setChecked(!checked);
						}}
					>
						<IonLabel>Remember Me</IonLabel>
						<IonCheckbox color="primary" slot="start"></IonCheckbox>
					</IonItem>

					<IonButton expand="block" color="danger" onClick={loginToSystem}>
						Login
					</IonButton>

					<IonRow>
						<IonCol className="ion-text-center">
							<p>
								Don't have an account yet?
								<a
									href="#/"
									onClick={e => {
										e.preventDefault();
										goTo('/Register');
									}}
								>
									Sign Up
								</a>
							</p>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Login;
