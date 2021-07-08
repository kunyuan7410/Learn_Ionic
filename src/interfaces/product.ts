export default interface typeProduct {
	title: string;
	img: string;
	price: number;
}
export interface CartActions {
	type: 'add_product' | 'remove_product';
	payload: typeProduct;
}

export interface CartState {
	products: { [key: string]: typeProduct[] };
}
