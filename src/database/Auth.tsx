import React, { useState, useEffect, createContext } from 'react';
import config from './firebaseConfig';

export const AuthContext = createContext<any>('');

const AuthProvider = ({ children }: any) => {
	const [currentUser, setCurrentUser] = useState<any>(null);

	useEffect(() => {
		config.auth().onAuthStateChanged(setCurrentUser);
		console.log(currentUser);
	}, []);
	return (
		<AuthContext.Provider value={{ currentUser }}>
			{children}
		</AuthContext.Provider>
	);
};
export default AuthProvider;
