import {
  LOGIN,
  LOGOUT,
  CREATEACCOUNT,
  EDITACCOUNT,
  DELETEACCOUNT,
  userAction,
} from "./@types/userActions";

export const login = (userName: string, password: string): userAction => ({
  type: LOGIN,
  payload: { userName: userName, password: password },
});

export const logout = (id: number): userAction => ({
  type: LOGOUT,
  payload: { id: id },
});

export const createAccount = (
  email: string,
  userName: string,
  password: string
): userAction => ({
  type: CREATEACCOUNT,
  payload: { userName, password, email },
});

export const editAccount = (
  id: number,
  email?: string,
  userName?: string,
  password?: string
): userAction => ({
  type: EDITACCOUNT,
  payload: { id, email, userName, password },
});

export const deleteAccount = (id: number): userAction => ({
  type: DELETEACCOUNT,
  payload: { id },
});
