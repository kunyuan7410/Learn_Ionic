import {
	IonBadge,
	IonButtons,
	IonContent,
	IonGrid,
	IonHeader,
	IonIcon,
	IonItem,
	IonMenuButton,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import React, { useContext, useEffect, useState } from 'react';
import typeProduct from '../interfaces/product';
import ProductItemComponent from '../components/ProductItem';
import Logo from '../components/Logo';
import { cartOutline, cart } from 'ionicons/icons';
import './styles.css';
import urls from '../urls';
import { number } from 'yargs';
import CartContext from '../contexts/cart';
import { productData } from '../contexts/cart';

interface NavigateURL {
	history: any;
}

const Product: React.FC<NavigateURL> = ({ history }) => {
	const goTo = (path: string) => {
		history.push(path, { direction: 'forward' });
	};
	const [count, setCount] = useState<number>(0);
	const cartContext = useContext(CartContext);
	useEffect(() => {
		if (sessionStorage.getItem('isLogged') == 'false') {
			goTo(urls.LOGIN);
		} else if (sessionStorage.length === 0) {
			goTo(urls.LOGIN);
		}
	}, []);

	useEffect(() => {
		let _count = 0;
		for (let key in cartContext.cartState.products)
			_count += cartContext.cartState.products[key].length;
		if (_count === count) return;
		setCount(_count);
	}, [cartContext]);
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<div className="iconCart" slot="end">
						<IonItem>
							<IonIcon
								slot="start"
								icon={cartOutline}
								onClick={() => goTo('./cart')}
							/>
							x
							{count >= 0 && (
								<IonBadge color="danger" onClick={() => goTo('./cart')}>
									{count}
								</IonBadge>
							)}
						</IonItem>
					</div>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Product</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonGrid>
					{productData.map((product, index) => (
						<IonRow key={index}>
							<ProductItemComponent product={product} key={index} />
						</IonRow>
					))}
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Product;
