import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';
import userReducer from './Users/UserReducer';
import { webEmployeeSlice } from './Employees/createSlice';
import { userSlice, userSearchSlice } from './Users/createSlice';

const RootReducer = combineReducers({
	// users: userReducer,
	users: userSlice.reducer,
	userSearch: userSearchSlice.reducer,
	// employees: employeeReducer,
	employees: webEmployeeSlice.reducer,
});

export default RootReducer;
