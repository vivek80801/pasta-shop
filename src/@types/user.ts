export interface user {
  id: number;
  name: string;
  password: string;
  email: string;
}

export type userAction = {
  type: "LogIn";
};
