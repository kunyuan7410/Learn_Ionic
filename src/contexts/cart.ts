import React, { createContext } from 'react';
import typeProduct, { CartActions, CartState } from '../interfaces/product';

import Product from '../pages/Product';
/*下面是reducer*/
export const productData: typeProduct[] = [
	{
		title: 'Body Cream 60ml',
		img: 'https://wess.wessconnect.com/wess/tenant_data/tenant_tenant_demo_new/product/p_86143.jpg',
		price: 50,
	},
	{
		title: 'Essiential Toner 50ml',
		img: 'https://wess.wessconnect.com/wess/tenant_data/tenant_tenant_demo_new/product/p_3.jpg',
		price: 268,
	},
	{
		title: 'Anti oxidant Toner 50ml',
		img: 'https://wess.wessconnect.com/wess/tenant_data/tenant_tenant_demo_new/product/p_5.jpg',
		price: 268,
	},
	{
		title: 'Shampoo 400ml',
		img: 'https://wess.wessconnect.com/wess/tenant_data/tenant_tenant_demo_new/product/p_52581.jpg',
		price: 50,
	},
	{
		title: 'Lavender Essential Oil 30ml',
		img: 'https://wess.wessconnect.com/wess/tenant_data/tenant_tenant_demo_new/product/p_8.jpg',
		price: 299,
	},
];

export const initialCartState: CartState = {
	products: {},
};

export const cartReducer = (state: CartState, action: CartActions) => {
	console.log(`${action.type} action called`);
	console.log(`payload: ${action.payload.title} `);

	let product = action.payload;
	let products = { ...state.products };

	switch (action.type) {
		case 'add_product':
			if (products[product.title]) {
				products[product.title].push(product);
			} else {
				products[product.title] = [product];
			}

			return { ...state, products };

		case 'remove_product':
			products[product.title].pop();
			if (products[product.title].length === 0) delete products[product.title];

			return { ...state, products };
		default:
			return state;
	}
};

/*青色是context*/

export interface CartProps {
	// products: { [key: string]: typeProduct[] };
	// updateProducts: (products: { [key: string]: typeProduct[] }) => void;
	cartState: CartState;
	cartDispatch: React.Dispatch<CartActions>;
}

const CartContext = createContext<CartProps>({
	// products: {},
	// updateProducts: (products: { [key: string]: typeProduct[] }) => {},
	cartState: initialCartState,
	cartDispatch: () => {},
});

export const CartContextConsumer = CartContext.Consumer;
export const CartContextProvider = CartContext.Provider;
export default CartContext;
