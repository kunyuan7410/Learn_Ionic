import {
	IonBackButton,
	IonButtons,
	IonContent,
	IonGrid,
	IonHeader,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import React, { useContext, useEffect } from 'react';
import CartContext from '../contexts/cart';
import CartItemComponent from '../components/CartItem';
import urls from '../urls';
import './styles.css';

export interface CartPageProps {}
interface NavigateURL {
	history: any;
}

const CartPage: React.FC<NavigateURL> = ({ history }) => {
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
	const cartContext = useContext(CartContext);
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton defaultHref={`/`} />
					</IonButtons>
					<IonTitle>Cart</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				{Object.keys(cartContext.cartState.products).length > 0 ? (
					<IonGrid>
						{Object.keys(cartContext.cartState.products).map((value, index) => {
							let _products = cartContext.cartState.products[value];
							if (_products.length > 0) {
								return (
									<IonRow key={index}>
										<CartItemComponent
											key={index}
											product={_products[0]}
											quantity={_products.length}
										/>
									</IonRow>
								);
							} else {
								return null;
							}
						})}
					</IonGrid>
				) : (
					<div className="cartEmpty">
						<img src="https://www.razencustoms.com/includes/img/empty-cart.png" />
					</div>
				)}
			</IonContent>
		</IonPage>
	);
};

export default CartPage;
