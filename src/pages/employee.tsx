import {
	IonButton,
	IonButtons,
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonIcon,
	IonInput,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenuButton,
	IonModal,
	IonPage,
	IonRow,
	IonText,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import {
	addOutline,
	callOutline,
	mailOutline,
	personAddOutline,
	personCircle,
	personCircleSharp,
} from 'ionicons/icons';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddEmployeeInput } from '../components/AddEmployeeInput/AddEmployeeInput';
import EmployeeListComponent from '../components/EmployeeList';
import { employeeState } from '../reducers/employeeReducer';
import { RootStore } from '../reducers/store';

import typeEmployee from '../interfaces/employee';
import urls from '../urls';
import './styles.css';
import {
	addEmployeeActionCreator,
	deleteEmployeeActionCreator,
} from '../reducers/Employees/createSlice';

interface NavigateURL {
	history: any;
}

const Employee: React.FC<NavigateURL> = ({ history }) => {
	const goTo = (path: string) => {
		history.push(path, { direction: 'forward' });
	};
	useEffect(() => {
		if (sessionStorage.getItem('isLogged') == 'false') {
			goTo(urls.LOGIN);
		} else if (sessionStorage.length === 0) {
			goTo(urls.LOGIN);
		}
	}, []);
	const [myModal, setMyModal] = useState({ isOpen: false });
	// <employeeState, employeeState['employees']>
	const employees = useSelector((state: RootStore) => state.employees);
	// const employees = useSelector((state: State) => state.employees);

	const dispatch = useDispatch();

	const addEmployee = (employee: typeEmployee) => {
		dispatch(addEmployeeActionCreator(employee));
	};
	// const addEmployee = (employee: typeEmployee) => {
	// 	dispatch({ type: 'ADD_EMPLOYEE', payload: employee });
	// };
	const removeEmployee = (employee: typeEmployee) => {
		dispatch(deleteEmployeeActionCreator(employee));
	};

	console.log(employees);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Employee</IonTitle>
					<div className="iconAdd" slot="end">
						<IonIcon
							slot="end"
							icon={personAddOutline}
							onClick={() => setMyModal({ isOpen: true })}
						/>
					</div>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonModal isOpen={myModal.isOpen}>
					<IonHeader>
						<IonToolbar>
							<IonTitle>Add Employee</IonTitle>
							<div className="closeModal" slot="end">
								<IonButtons>
									<IonButton onClick={() => setMyModal({ isOpen: false })}>
										<IonText color="primary">Close</IonText>
									</IonButton>
								</IonButtons>
							</div>
						</IonToolbar>
					</IonHeader>
					<IonContent>
						<AddEmployeeInput addEmployee={addEmployee} />
					</IonContent>
				</IonModal>
				<IonList>
					{employees.employees.map((employee, index) => (
						<div key={index}>
							<IonItem key={index}>
								<EmployeeListComponent
									employee={employee}
									key={index}
									removeEmployee={removeEmployee}
								/>
							</IonItem>
						</div>
					))}
				</IonList>
				{/* <IonButton onClick={() => console.log(employees)}>Testing</IonButton> */}
			</IonContent>
		</IonPage>
	);
};

export default Employee;
