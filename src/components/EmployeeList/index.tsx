import React, { useContext, useState } from 'react';
import EmployeeContext from '../../contexts/EmployeeContext';
import typeEmployee from '../../interfaces/employee';
import { cartOutline, cart, ellipsisVertical } from 'ionicons/icons';
import {
	IonActionSheet,
	IonButton,
	IonIcon,
	IonItem,
	IonLabel,
	useIonActionSheet,
} from '@ionic/react';

type employeeListProps = {
	employee: typeEmployee;
	removeEmployee: (employee: typeEmployee | any) => void;
};

const EmployeeListComponent: React.FC<employeeListProps> = ({
	employee,
	removeEmployee,
}) => {
	// const [showActionSheet, setShowActionSheet] = useState(false);
	return (
		<>
			<IonLabel>
				<h2>{employee.name}</h2>
				<h3>{employee.phonenumber}</h3>
				<h3>{employee.email}</h3>
			</IonLabel>
			<IonButton color="danger" onClick={() => removeEmployee(employee)}>
				Delete
			</IonButton>
			{/* <IonIcon
				slot="end"
				icon={ellipsisVertical}
				onClick={() => {
					setShowActionSheet(true);
				}}
			/>
			<IonActionSheet
				isOpen={showActionSheet}
				onDidDismiss={() => setShowActionSheet(false)}
				buttons={[
					{
						text: 'Delete',
						role:'delete',
						handler: () => {
							// 	removeEmployee(employee);
							console.log('Delete clicked');
						},
					},

					{
						text: 'Cancel',
						role: 'cancel',
						handler: () => {
							console.log('Cancel clicked');
						},
					},
				]}
			></IonActionSheet> */}
		</>
	);
};

export default EmployeeListComponent;
