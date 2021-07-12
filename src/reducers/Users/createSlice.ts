import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { webUserState, webUserList } from './types';
import client from '../../client';

const initialAllState: webUserState = {
	users: [],
	loading: 'idle',
	error: null,
	user: [],
};

/*
Fetch data
 */

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	const response = await client.get('/users');
	return response.data;
});

export const fetchSearchUser =
	//  = (user: string) =>
	createAsyncThunk('user/searchUser', async (user: string) => {
		console.log(`user===${user}`);
		const response = await client.get(`/users?name=${user}`);
		return response.data;
	});

export const userSlice = createSlice({
	name: 'users',
	initialState: initialAllState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchUsers.pending, state => {
			state.loading = 'pending';
		});
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.loading = 'succeeded';
			state.users = action.payload;
		});
		builder.addCase(fetchUsers.rejected, state => {
			state.loading = 'failed';
			state.error = 'failed to get user data';
		});

		// builder.addCase(fetchUsers.fulfilled, (state, action) => {
		// 	return action.payload;
		// });
	},
});

/*
End Fetch data
 */

export const userSearchSlice = createSlice({
	name: 'user',
	initialState: initialAllState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchSearchUser.pending, state => {
			state.loading = 'pending';
		});
		builder.addCase(fetchSearchUser.fulfilled, (state, action) => {
			state.loading = 'succeeded';
			state.user = action.payload;
		});
		builder.addCase(fetchSearchUser.rejected, state => {
			state.loading = 'failed';
			state.error = 'failed to view user data';
		});

		// builder.addCase(fetchUsers.fulfilled, (state, action) => {
		// 	return action.payload;
		// });
	},
});
