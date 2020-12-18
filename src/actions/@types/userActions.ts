export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const CREATEACCOUNT = "CREATEACCOUNT";
export const EDITACCOUNT = "EDITACCOUNT";
export const DELETEACCOUNT = "DELETEACCOUNT";

export type userAction =
	| {
			type: typeof LOGIN;
			payload: {
				userName: string;
				password: string;
			};
	  }
	| {
			type: typeof LOGOUT;
			payload: {
				id: number;
			};
	  }
	| {
			type: typeof CREATEACCOUNT;
			payload: {
				userName: string;
				password: string;
				email: string;
			};
	  }
	| {
			type: typeof EDITACCOUNT;
			payload: {
				id: number;
				userName?: string;
				password?: string;
				email?: string;
			};
	  }
	| {
			type: typeof DELETEACCOUNT;
			payload: {
				id: number;
			};
	  };
