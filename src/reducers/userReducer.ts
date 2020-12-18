import users from "../data/users";
import { user } from "../@types/user";
import {
  userAction,
  LOGIN,
  LOGOUT,
  CREATEACCOUNT,
  EDITACCOUNT,
  DELETEACCOUNT,
} from "../actions/@types/userActions";

const userReducer = (state: user[] = users, action: userAction): user[] => {
  switch (action.type) {
    case LOGIN:
      return [
        ...state.map((user) =>
          user.name === action.payload.userName &&
          user.password === action.payload.password
            ? {
                ...user,
                isLogedin: true,
              }
            : { ...user }
        ),
      ];
    case LOGOUT:
      return [
        ...state.map((user) =>
          user.id === action.payload.id
            ? { ...user, isLogedin: false }
            : { ...user }
        ),
      ];
    case CREATEACCOUNT:
      return [
        ...state,
        {
          email: action.payload.email,
          name: action.payload.userName,
          password: action.payload.password,
          id: state.length <= 0 ? 1 : state[state.length].id + 1,
          isAdmin: false,
          isBanned: false,
          isLogedin: false,
        },
      ];
    case EDITACCOUNT:
      return [
        ...state.map((user) =>
          user.id === action.payload.id
            ? {
                ...user,
                email:
                  action.payload.email !== undefined
                    ? action.payload.email
                    : user.email,
                name:
                  action.payload.userName !== undefined
                    ? action.payload.userName
                    : user.name,
                password:
                  action.payload.password !== undefined
                    ? action.payload.password
                    : user.password,
              }
            : { ...user }
        ),
      ];
    case DELETEACCOUNT:
      return [...state.filter((user) => user.id !== action.payload.id)];

    default:
      return state;
  }
};

export default userReducer;
