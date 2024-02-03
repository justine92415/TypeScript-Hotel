import { BaseRes, User } from './Common';

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

export interface SignupRes extends BaseRes<User> {
  token: string;
}
