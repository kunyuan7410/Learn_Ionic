import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { toast } from '../components/Toast/toast';

const config = firebase.initializeApp({
	apiKey: 'AIzaSyCtgEERRSalN_EJCnZ6AI_2SnlYD3YMOJE',
	authDomain: 'all-department-register-list.firebaseapp.com',
	databaseURL: 'https://all-department-register-list.firebaseio.com',
	projectId: 'all-department-register-list',
	storageBucket: 'all-department-register-list.appspot.com',
	messagingSenderId: '914556905615',
	appId: '1:914556905615:web:6cf3eb40fed31914e728fa',
	measurementId: 'G-Q44T8WFY3K',
});

export async function userLogin(email: string, password: string) {
	try {
		await config.auth().signInWithEmailAndPassword(email, password);

		return true;
	} catch (error) {
		toast(error.message);
		return false;
	}
}

export async function userRegister(
	email: string,
	password: string
	// name: string,
	// branch: string
) {
	try {
		await config.auth().createUserWithEmailAndPassword(email, password);
		return true;
	} catch (error) {
		toast(error.message);
		return false;
	}
}

export default config;
