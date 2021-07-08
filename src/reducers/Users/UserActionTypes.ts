export const USER_LOADING = 'USER_LOADING';
export const USER_FAIL = 'USER_FAIL';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_LIST_LOADING = 'USER_LIST_LOADING';
export const USER_LIST_FAIL = 'USER_LIST_FAIL';
export const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS';

export type User = {
	id: string;
	name: string;
	username: string;
	email: string;
	phone: string;
};

export type UserList = User[];

export const UserInitialState = {
	id: '',
	name: '',
	username: '',
	email: '',
	phone: '',
};

export const UserListInitialState = [UserInitialState];

export interface UserLoading {
	type: typeof USER_LOADING;
}

export interface UserFail {
	type: typeof USER_FAIL;
}

export interface UserSuccess {
	type: typeof USER_SUCCESS;
	payload: User;
}

export interface UserListLoading {
	type: typeof USER_LIST_LOADING;
}

export interface UserListFail {
	type: typeof USER_LIST_FAIL;
}

export interface UserListSuccess {
	type: typeof USER_LIST_SUCCESS;
	payload: UserList;
}

export type UserDispatchTypes =
	| UserLoading
	| UserFail
	| UserSuccess
	| UserListLoading
	| UserListFail
	| UserListSuccess;
