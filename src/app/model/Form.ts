import { FormControl, FormGroup } from '@angular/forms';

export type SignupForm = {
  name: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  repeatPassword: FormControl<string>;
  phone: FormControl<string>;
  year: FormControl<string>;
  month: FormControl<string>;
  day: FormControl<string>;
  address: FormGroup<Address>;
  isReaded: FormControl<boolean>;
};

export type Address = {
  city: FormControl<string>;
  zipcode: FormControl<string>;
  detail: FormControl<string>;
};
