import { Result } from "./Common";

export type SignupReq = {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  address: {
    zipcode: number;
    detail: string;
  };
};

export type SignupRes = {
  status: boolean;
  token: string;
  result: Result;
};
