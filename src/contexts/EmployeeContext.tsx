import React, { createContext, useState } from 'react';
import typeEmployee from '../interfaces/employee';

export interface EmployeeActions {
	type: 'add_employee' | 'remove _employee';
	payload: typeEmployee;
}
export interface EmployeeState {
	employees: { [key: string]: typeEmployee[] };
}

export const initialEmployeeState: EmployeeState = {
	employees: {},
};

export const employeeReducer = (
	state: EmployeeState,
	action: EmployeeActions
) => {
	let employee = action.payload;
	let employees = { ...state.employees };

	switch (action.type) {
		case 'add_employee':
			if (employees[employee.name]) {
				employees[employee.name].push(employee);
			} else {
				employees[employee.name] = [employee];
			}
			return { ...state, employees };
		case 'remove _employee':
			employees[employee.name].pop();
			if (employees[employee.name].length === 0)
				delete employees[employee.name];

			return { ...state, employees };
		default:
			return state;
	}
};

export interface EmployeeProps {
	employeeState: EmployeeState;
	employeeDispatch: React.Dispatch<EmployeeActions>;
}

const EmployeeContext = createContext<EmployeeProps>({
	employeeState: initialEmployeeState,
	employeeDispatch: () => {},
});

export const EmployeeContextConsumer = EmployeeContext.Consumer;
export const EmployeeContextProvider = EmployeeContext.Provider;
export default EmployeeContext;
