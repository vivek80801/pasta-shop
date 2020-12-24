import React from "react";
import { useSelector } from "react-redux";
import { ProductI } from "../../@types/product";
import { UserI } from "../../@types/user";

const Product: React.FC = (): JSX.Element => {
	const test = useSelector(
		(state: { productReducer: ProductI[]; userReducer: UserI[] }) => state
	);
	return (
		<>
			{test.productReducer.map(
				({ id, count, des, img, inCart, name, price }) => (
					<div key={id}>
						Name: {name}
						count: {count}
						des: {des}
						inCart: {inCart}
						Price: {price}
						<img height={"100px"} width={"100px"} src={img} alt={name} />
					</div>
				)
			)}
		</>
	);
};

export default Product;
