import { error } from 'console';
import {
	UserDispatchTypes,
	UserList,
	User,
	USER_FAIL,
	USER_LOADING,
	USER_SUCCESS,
	UserInitialState,
	UserListInitialState,
	USER_LIST_FAIL,
	USER_LIST_LOADING,
	USER_LIST_SUCCESS,
} from './UserActionTypes';

interface DefaultState {
	loading: boolean;
	error?: string;
	user: User;
	users: UserList;
	pageNumber?: number;
}

const defaultState: DefaultState = {
	loading: false,
	error: '',
	user: UserInitialState,
	users: UserListInitialState,
	pageNumber: 0,
};

const userReducer = (
	state: DefaultState = defaultState,
	action: UserDispatchTypes
): DefaultState => {
	switch (action.type) {
		case USER_FAIL:
			return {
				...state,
				loading: false,
			};
		case USER_LOADING:
			return {
				...state,
				loading: true,
			};
		case USER_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.payload,
			};
		case USER_LIST_FAIL:
			return {
				...state,
				loading: false,
				error: 'unable to get user list',
			};
		case USER_LIST_LOADING:
			return {
				...state,
				loading: true,
				error: '',
			};
		case USER_LIST_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.payload,
				error: '',
			};
		default:
			return state;
	}
};

export default userReducer;
