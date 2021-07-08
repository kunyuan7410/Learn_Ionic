import React, { useState, useContext, useReducer } from 'react';
import './theme/variables.css';
import { Redirect, Route } from 'react-router-dom';
import {
	IonApp,
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
} from '@ionic/react';
import { home, grid, personCircle, personCircleOutline } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Product from './pages/Product';
import Employee from './pages/employee';
import Cart from './pages/cart';
import urls from './urls';
import typeProduct from './interfaces/product';
import {
	CartContextProvider,
	initialCartState,
	cartReducer,
} from './contexts/cart';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import {
	EmployeeContextProvider,
	initialEmployeeState,
	employeeReducer,
} from './contexts/EmployeeContext';
import Post from './pages/Post';
import PostArtical from './pages/PostArtical';
import User from './pages/User';

import UserSearch from './pages/UserSearch';
import UserListSearch from './pages/UserListSearch';

export interface appProps {}

const Tabs = () => {
	// const [products, setProducts] = useState<{ [key: string]: typeProduct[] }>(
	// 	{}
	// );
	// const updateProducts = (_products: { [key: string]: typeProduct[] }) => {
	// 	setProducts(_products);
	// };
	const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
	const cartContextValues = {
		// products,
		// updateProducts,
		cartState,
		cartDispatch,
	};
	const [employeeState, employeeDispatch] = useReducer(
		employeeReducer,
		initialEmployeeState
	);
	const employeeContextValues = {
		employeeState,
		employeeDispatch,
	};
	return (
		<>
			<CartContextProvider value={cartContextValues}>
				<EmployeeContextProvider value={employeeContextValues}>
					<IonTabs>
						<IonRouterOutlet>
							<Route path={urls.APP_HOME} component={Home} exact />
							<Route path={urls.APP_PRODUCT} component={Product} exact />
							<Route path={urls.APP_EMPLOYEE} component={Employee} exact />
							<Route path={urls.APP_USER} component={User} exact />
							<Route
								path={urls.APP_USER_SEARCH}
								component={UserListSearch}
								exact
							/>
							<Route path={urls.APP_CART} component={Cart} exact />
							<Route path={urls.APP_POST} component={Post} exact />
							<Route path={urls.APP_ARTICAL} component={PostArtical} exact />
						</IonRouterOutlet>

						<IonTabBar slot="bottom">
							<IonTabButton tab="home" href={urls.APP_HOME}>
								<IonIcon icon={home} />
								<IonLabel>Home</IonLabel>
							</IonTabButton>
							<IonTabButton tab="product" href={urls.APP_PRODUCT}>
								<IonIcon icon={grid} />
								<IonLabel>Product</IonLabel>
							</IonTabButton>
							<IonTabButton tab="employee" href={urls.APP_EMPLOYEE}>
								<IonIcon icon={personCircle} />
								<IonLabel>Employees</IonLabel>
							</IonTabButton>
						</IonTabBar>
					</IonTabs>
				</EmployeeContextProvider>
			</CartContextProvider>
		</>
	);
};

export default Tabs;
