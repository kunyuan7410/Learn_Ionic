import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';
import userReducer from './Users/UserReducer';

const RootReducer = combineReducers({
	users: userReducer,
	employees: employeeReducer,
});

export default RootReducer;
