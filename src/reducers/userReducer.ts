import users from "../data/users";
import { userAction, user } from "../@types/user";

const userReducer = (state: user[] = users, action: userAction): user[] => {
  switch (action.type) {
    case "LogIn":
      return state;

    default:
      return state;
  }
};

export default userReducer;
