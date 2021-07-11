import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';
import userReducer from './Users/UserReducer';
import { webEmployeeSlice } from './Employees/createSlice';

const RootReducer = combineReducers({
	users: userReducer,
	// employees: employeeReducer,
	employees: webEmployeeSlice.reducer,
	// conterEmployee: counterSlice.reducer,
});

export default RootReducer;
