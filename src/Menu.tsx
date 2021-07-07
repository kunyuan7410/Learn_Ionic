import {
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
	IonMenuToggle,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import {
	gridOutline,
	homeOutline,
	personCircleOutline,
	logOutOutline,
	bookOutline,
} from 'ionicons/icons';
import React from 'react';
import { useLocation } from 'react-router';
import Logo from './components/Logo';
import { toast } from './components/Toast/toast';
import './Menu.css';
import urls from './urls';

interface menuPages {
	title: string;
	path: string;
	icon: string;
}

const appPages: menuPages[] = [
	{ title: 'Home', path: urls.APP_HOME, icon: homeOutline },
	{ title: 'Product', path: urls.APP_PRODUCT, icon: gridOutline },
	{ title: 'Employees', path: urls.APP_EMPLOYEE, icon: personCircleOutline },
	{ title: 'User', path: urls.APP_USER, icon: personCircleOutline },
	{ title: 'Post', path: urls.APP_POST, icon: bookOutline },
	{ title: 'Artical', path: urls.APP_ARTICAL, icon: bookOutline },
];

const Menu: React.FC = (history: any) => {
	const location = useLocation();
	const goTo = (pathURL: any) => {
		history.push(pathURL, { direction: 'forward' });
	};

	return (
		<IonMenu type="overlay" contentId="main">
			<IonContent>
				<IonList lines="none">
					<IonListHeader>
						<IonToolbar>
							<IonItem lines="full">
								<Logo />
							</IonItem>
						</IonToolbar>
					</IonListHeader>
					{appPages.map((menuPage, keyId) => {
						return (
							<IonMenuToggle autoHide={false} key={keyId}>
								<IonItem
									className={
										location.pathname === menuPage.path ? 'selected' : ''
									}
									routerLink={menuPage.path}
									routerDirection="none"
									lines="none"
									detail={false}
								>
									<IonIcon slot="start" icon={menuPage.icon} />
									<IonLabel>{menuPage.title}</IonLabel>
								</IonItem>
							</IonMenuToggle>
						);
					})}
					<IonMenuToggle autoHide={false}>
						<IonItem
							routerLink="/Login"
							routerDirection="none"
							lines="none"
							detail={false}
							onClick={() => {
								toast('Logout Successfully');
								sessionStorage.setItem('isLogged', 'false');
							}}
						>
							<IonIcon slot="start" icon={logOutOutline} />
							<IonLabel>Logout</IonLabel>
						</IonItem>
					</IonMenuToggle>
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
