import {
	IonButton,
	IonCol,
	IonGrid,
	IonIcon,
	IonInput,
	IonItem,
	IonRow,
} from '@ionic/react';
import {
	callOutline,
	mailOutline,
	personCircle,
	personCircleSharp,
} from 'ionicons/icons';
import React, { ChangeEvent, useState } from 'react';
import typeEmployee from '../../interfaces/employee';

type AddEmployeeInputProps = {
	addEmployee: (employee: typeEmployee | any) => void;
};

export const AddEmployeeInput: React.FC<AddEmployeeInputProps> = ({
	addEmployee,
}) => {
	const [employee, setEmployee] = useState<typeEmployee | {}>();
	const [employeeName, setEmployeeName] = useState('');
	const [employeePhone, setEmployeePhone] = useState('');
	const [employeeEmail, setEmployeeEmail] = useState('');

	const handleEmployeeData = (e: any) => {
		setEmployee({
			...employee,

			[e.target!.id!]: e.detail.value,
		});
		console.log(e.detail.value);
	};

	return (
		<>
			<div className="iconAddEmployee">
				<IonIcon icon={personCircleSharp} />
			</div>
			<div className="employeeModal">
				<IonGrid>
					<IonRow>
						<IonCol>
							<IonItem>
								<IonIcon slot="start" icon={personCircle} />
								<IonInput
									type="text"
									placeholder="Name"
									id="name"
									onIonChange={(e: any) => setEmployeeName(e.target.value)}
								/>
							</IonItem>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<IonItem>
								<IonIcon slot="start" icon={callOutline} />

								<IonInput
									type="text"
									placeholder="Contact Number"
									id="phonenumber"
									onIonChange={(e: any) => setEmployeePhone(e.target.value)}
								/>
							</IonItem>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<IonItem>
								<IonIcon slot="start" icon={mailOutline} />

								<IonInput
									type="text"
									placeholder="Email"
									id="email"
									onIonChange={(e: any) => setEmployeeEmail(e.target.value)}
								/>
							</IonItem>
						</IonCol>
					</IonRow>
				</IonGrid>
			</div>
			<IonButton
				color="danger"
				expand="block"
				onClick={() => {
					addEmployee({
						name: employeeName,
						phonenumber: employeePhone,
						email: employeeEmail,
					});
				}}
			>
				Add
			</IonButton>
		</>
	);
};
