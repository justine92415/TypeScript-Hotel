export interface BaseRes<T> {
  status: boolean;
  result: T;
}

export type User = {
  address: Address;
  _id: string;
  name: string;
  email: string;
  phone: string;
  birthday: Date;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

export interface Address {
  zipcode: number;
  detail: string;
  city: string;
  county: string;
}
