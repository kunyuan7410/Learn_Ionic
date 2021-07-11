import {
	WebEmployeeState,
	WebEmployee,
	initialWebEmployeeState,
} from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import typeEmployee from '../../interfaces/employee';

export interface webEmployeeState {
	employees: typeEmployee[];
}

const webEmployeeInitialState: webEmployeeState = {
	employees: [
		{
			name: 'Justin',
			phonenumber: '014-9849910',
			email: 'kunyuan45@gmail.com',
		},
		{
			name: 'Goh',
			phonenumber: '012-9849910',
			email: 'Goh@gmail.com',
		},
	],
};

// export const initialState: WebEmployeeState = {
// 	employees: initialWebEmployeeState,
// };

export const webEmployeeSlice = createSlice({
	name: 'employees',
	initialState: webEmployeeInitialState,
	reducers: {
		add: {
			reducer: (
				state,
				{
					payload,
				}: PayloadAction<{ name: string; phonenumber: string; email: string }>
			) => {
				state.employees.push(payload);
			},
			prepare: ({
				name,
				phonenumber,
				email,
			}: {
				name: string;
				phonenumber: string;
				email: string;
			}) => ({
				payload: {
					name,
					phonenumber,
					email,
				},
			}),
		},
		// edit: (
		// 	state,
		// 	{
		// 		payload,
		// 	}: PayloadAction<{ name: string; phonenumber: string; email: string }>
		// ) => {
		// 	const index = state.findIndex(employee => employee.name === payload.name);
		// 	if (index !== -1) {
		// 		state[index].name = payload.name;
		// 		state[index].phonenumber = payload.phonenumber;
		// 		state[index].email = payload.email;
		// 	}
		// },

		remove: (state, { payload }: PayloadAction<{ name: string }>) => {
			const index = state.employees.findIndex(
				employee => employee.name === payload.name
			);
			if (index !== -1) {
				state.employees.splice(index, 1);
			}
		},
	},
});

// export const counterSlice = createSlice({
// 	name: 'counter',
// 	initialState: 0,
// 	reducers: {},
// 	extraReducers: {
// 		[webEmployeeSlice.actions.add.type]: state => state + 1,
// 		// [webEmployeeSlice.actions.edit.type]: state => state + 1,
// 		[webEmployeeSlice.actions.remove.type]: state => state + 1,
// 	},
// });

export const {
	add: addEmployeeActionCreator,
	// edit: editEmployeeActionCreator,
	remove: deleteEmployeeActionCreator,
} = webEmployeeSlice.actions;
