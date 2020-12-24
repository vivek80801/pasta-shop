import { productItems } from "../data/product";
import {
	productAction,
	ADDTOCART,
	REMOVEFROMCART,
	CREATEPRODUCT,
	EDITPRODUCT,
	DELETEPRODUCT,
} from "../actions/@types/productAction";
import { ProductI } from "../@types/product";

const productReducer = (
	state: ProductI[] = productItems,
	action: productAction
): ProductI[] => {
	switch (action.type) {
		case ADDTOCART:
			return [
				...state.map((product) =>
					product.id === action.payload.id
						? { ...product, inCart: true }
						: { ...product }
				),
			];
		case REMOVEFROMCART:
			return [
				...state.map((product) =>
					product.id === action.payload.id
						? { ...product, inCart: false }
						: { ...product }
				),
			];
		case CREATEPRODUCT:
			return [
				...state,
				{
					id: state.length <= 0 ? 1 : state[state.length - 1].id + 1,
					count: 0,
					des: action.payload.des,
					img: "",
					inCart: false,
					name: action.payload.name,
					price: action.payload.price,
					slug: action.payload.name,
					total: 0,
				},
			];
		case EDITPRODUCT:
			return [
				...state.map((product) =>
					product.id === action.payload.id
						? {
								...product,
								name: action.payload.name,
								des: action.payload.des,
								price: action.payload.price,
						  }
						: { ...product }
				),
			];
		case DELETEPRODUCT:
			return [...state.filter((product) => product.id !== action.payload.id)];

		default:
			return state;
	}
};

export default productReducer;
