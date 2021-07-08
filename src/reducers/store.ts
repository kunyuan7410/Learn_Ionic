import { createStore, combineReducers, applyMiddleware } from 'redux';
import RootReducer from './RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// const employeeLocalStorage = localStorage.getItem('EmployeeData');
// const employeeData = employeeLocalStorage
// 	? JSON.parse(employeeLocalStorage)
// 	: {};
// store.subscribe(() => {
// 	localStorage.setItem('EmployeeData', JSON.stringify(store.getState()));
// });
function saveEmployeeToLocalStorage(state: any) {
	try {
		const employeeData = JSON.stringify(state);
		localStorage.setItem('employeeData', employeeData);
	} catch (e) {
		console.log(e);
	}
}
function loadEmployeeFromLocalStorage() {
	try {
		const employeeData = localStorage.getItem('employeeData');
		if (employeeData === null) return undefined;
		return JSON.parse(employeeData);
	} catch (e) {
		console.log(e);
		return undefined;
	}
}

export const store = createStore(
	RootReducer,
	composeWithDevTools(applyMiddleware(thunk))
	// loadEmployeeFromLocalStorage()
	// postReducer
);

export type RootStore = ReturnType<typeof RootReducer>;

store.subscribe(() => saveEmployeeToLocalStorage(store.getState()));
