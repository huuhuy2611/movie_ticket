export interface IParamsLogin {
  email: string;
  password: string;
}

export interface IParamsSignUp {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface IUser {
  name: string;
  email: string;
  phoneNumber: string;
  id: string;
}

export interface IResponseAuth {
  user: IUser;
  authenticationToken: string;
}
