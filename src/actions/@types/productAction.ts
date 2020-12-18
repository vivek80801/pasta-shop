export const ADDTOCART = "ADDTOCART";
export const REMOVEFROMCART = "REMOVEFROMCART";
export const CREATEPRODUCT = "CREATEPRODUCT";
export const EDITPRODUCT = "EDITPRODUCT";
export const DELETEPRODUCT = "DELETEPRODUCT";

export type productAction =
  | {
      type: typeof ADDTOCART;
      payload: { id: number };
    }
  | {
      type: typeof REMOVEFROMCART;
      payload: { id: number };
    }
  | {
      type: typeof CREATEPRODUCT;
      payload: { name: string; des: string; price: number };
    }
  | {
      type: typeof EDITPRODUCT;
      payload: { id: number; name: string; des: string; price: number };
    }
  | {
      type: typeof DELETEPRODUCT;
      payload: { id: number };
    };
