import axios from 'axios';
import { Dispatch } from 'redux';
import {
	UserDispatchTypes,
	USER_SUCCESS,
	USER_FAIL,
	USER_LOADING,
} from './UserActionTypes';

export const GetUserList =
	(page: number) => async (dispatch: Dispatch<UserDispatchTypes>) => {
		try {
			dispatch({
				type: 'USER_LIST_LOADING',
			});

			const perPage = 5;
			const offset = page * perPage - perPage;
			const res = await axios.get(
				`https://jsonplaceholder.typicode.com/users?_page=${offset}&_limit=${perPage}`
			);

			dispatch({
				type: 'USER_LIST_SUCCESS',
				payload: res.data,
			});
		} catch (e) {
			dispatch({
				type: 'USER_LIST_FAIL',
			});
		}
	};

export const GetUser =
	(user: string) => async (dispatch: Dispatch<UserDispatchTypes>) => {
		try {
			dispatch({
				type: USER_LOADING,
			});

			const res = await axios.get(
				`https://jsonplaceholder.typicode.com/users?name=${user}`
			);

			dispatch({
				type: USER_SUCCESS,
				payload: res.data,
				userName: user,
			});
		} catch (e) {
			dispatch({
				type: USER_FAIL,
			});
		}
	};
export const PostUser =
	(user: string) => async (dispatch: Dispatch<UserDispatchTypes>) => {
		try {
			dispatch({
				type: USER_LOADING,
			});

			const res = await axios.post(
				`https://jsonplaceholder.typicode.com/users`
			);

			dispatch({
				type: USER_SUCCESS,
				payload: res.data,
				userName: user,
			});
		} catch (e) {
			dispatch({
				type: USER_FAIL,
			});
		}
	};
