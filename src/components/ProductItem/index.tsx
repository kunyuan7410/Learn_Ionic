import {
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonCol,
	IonIcon,
	IonItem,
	IonTitle,
} from '@ionic/react';

import React, { useContext } from 'react';
import CartContext from '../../contexts/cart';
import typeProduct from '../../interfaces/product';
import { cartOutline, cart } from 'ionicons/icons';

export interface productItemProps {
	product: typeProduct;
}

const ProductItemComponent: React.FC<productItemProps> = props => {
	const { product } = props;
	const cartContext = useContext(CartContext);
	return (
		<IonCol className="ion-text-center">
			<IonCard>
				<img
					src={product.img}
					alt="product"
					style={{ width: '100%', height: '250px' }}
				/>
				<IonCardHeader>
					<IonCardTitle>{product.title}</IonCardTitle>
				</IonCardHeader>
				<IonCardContent>
					<h3 style={{ color: 'black', fontWeight: 'bold' }}>
						RM{product.price}
					</h3>
				</IonCardContent>

				<IonButton
					color="warning"
					expand="block"
					onClick={() => {
						// let _products = { ...cartContext.products };
						// if (_products[product.title]) {
						// 	_products[product.title].push(product);
						// } else {
						// 	_products[product.title] = [product];
						// }
						// cartContext.updateProducts(_products);
						cartContext.cartDispatch({ type: 'add_product', payload: product });
					}}
				>
					<IonIcon slot="start" icon={cartOutline} />
					<h6 style={{ fontWeight: 'bold' }}>Add to Cart</h6>
				</IonButton>
			</IonCard>
		</IonCol>
	);
};

export default ProductItemComponent;
