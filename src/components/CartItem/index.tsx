import {
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonCol,
	IonTitle,
} from '@ionic/react';
import React, { useContext } from 'react';
import CartContext from '../../contexts/cart';
import typeProduct from '../../interfaces/product';

export interface CartItemProps {
	product: typeProduct;
	quantity: number;
}

const CartItemComponent: React.FC<CartItemProps> = props => {
	const { product, quantity } = props;
	const cartContext = useContext(CartContext);

	return (
		<IonCol className="ion-text-center">
			<IonCard>
				<IonCardHeader>
					<IonCardTitle>
						{product.title} x {quantity}
					</IonCardTitle>
				</IonCardHeader>
				<IonCardContent>
					<h5>RM{product.price * quantity}</h5>
				</IonCardContent>
				<IonButton
					onClick={() => {
						// let _products = { ...cartContext.products };
						// _products[product.title].pop();
						// if (_products[product.title].length === 0) {
						// 	delete _products[product.title];
						// }
						// cartContext.updateProducts(_products);
						cartContext.cartDispatch({
							type: 'remove_product',
							payload: product,
						});
					}}
				>
					Remove
				</IonButton>
			</IonCard>
		</IonCol>
	);
};

export default CartItemComponent;
