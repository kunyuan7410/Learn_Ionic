export type WebEmployee = {
	name: string;
	phonenumber: string;
	email: string;
};

export const initialWebEmployeeState = {
	name: '',
	phonenumber: '',
	email: '',
};

export interface WebEmployeeState {
	employees: WebEmployee;
}

export type AllEmployeeState = {
	employees: WebEmployee[];
	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};
