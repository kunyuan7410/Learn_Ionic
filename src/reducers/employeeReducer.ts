import typeEmployee from '../interfaces/employee';

export interface employeeState {
	employees: typeEmployee[];
}

const initialEmployeeState: employeeState = {
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

type employeeAction = {
	type: 'ADD_EMPLOYEE' | 'REMOVE_EMPLOYEE';
	payload: typeEmployee;
};

const employeeReducer = (
	state: employeeState = initialEmployeeState,
	action: employeeAction
): employeeState => {
	switch (action.type) {
		case 'ADD_EMPLOYEE':
			const newEmployee: typeEmployee = {
				name: action.payload.name,
				phonenumber: action.payload.phonenumber,
				email: action.payload.email,
			};
			return {
				...state,
				employees: state.employees.concat(newEmployee),
			};
		case 'REMOVE_EMPLOYEE':
			const removeEmployee: typeEmployee[] = state.employees.filter(
				employee => employee.name !== action.payload.name
			);
			return {
				...state,
				employees: removeEmployee,
			};

		default:
			return state;
	}
};

export default employeeReducer;
