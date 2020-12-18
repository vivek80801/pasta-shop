import {
  ADDTOCART,
  REMOVEFROMCART,
  CREATEPRODUCT,
  EDITPRODUCT,
  DELETEPRODUCT,
  productAction,
} from "./@types/productAction";

export const addToCart = (id: number): productAction => ({
  type: ADDTOCART,
  payload: { id },
});

export const removeFromCart = (id: number): productAction => ({
  type: REMOVEFROMCART,
  payload: { id },
});

export const createProduct = (
  name: string,
  des: string,
  price: number
): productAction => ({ type: CREATEPRODUCT, payload: { des, name, price } });

export const editProduct = (
  id: number,
  des: string,
  name: string,
  price: number
): productAction => ({ type: EDITPRODUCT, payload: { des, id, name, price } });

export const deleteProduct = (id: number): productAction => ({
  type: DELETEPRODUCT,
  payload: { id },
});
