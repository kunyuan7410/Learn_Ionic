export type typeUser = {
	id: string;
	name: string;
	username: string;
	email: string;
	phone: string;
};

export interface webUserState {
	users: typeUser[];
	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
	error: string | null;
	user: typeUser[];
}

export type webUserList = typeUser[];
