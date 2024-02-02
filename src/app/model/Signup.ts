export type SignupReq = {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  address: Address;
};

export type Address = {
  zipcode: number;
  detail: string;
}
