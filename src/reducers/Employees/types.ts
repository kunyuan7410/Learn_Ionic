// export type WebEmployee = {
// 	name: string;
// 	phonenumber: string;
// 	email: string;
// };

import typeEmployee from '../../interfaces/employee';

// export const initialWebEmployeeState = {
// 	name: '',
// 	phonenumber: '',
// 	email: '',
// };

// export interface WebEmployeeState {
// 	employees: WebEmployee;
// }

// export type AllEmployeeState = {
// 	employees: WebEmployee[];
// 	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
// };
export interface webEmployeeState {
	employees: typeEmployee[];
}

export const webEmployeeInitialState: webEmployeeState = {
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
