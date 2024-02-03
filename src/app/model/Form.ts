import { FormControl, FormGroup } from '@angular/forms';

export type SignupFormValue = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  phone: string;
  year: string;
  month: string;
  day: string;
  address: {
    city: string;
    zipcode: string;
    detail: string;
  };
  isReaded: boolean;
};

export type SignupForm = {
  name: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  repeatPassword: FormControl<string>;
  phone: FormControl<string>;
  year: FormControl<string>;
  month: FormControl<string>;
  day: FormControl<string>;
  address: FormGroup<{
    city: FormControl<string>;
    zipcode: FormControl<string>;
    detail: FormControl<string>;
  }>;
  isReaded: FormControl<boolean>;
};

export type LoginFormValue = {
  email: string;
  password: string;
  recordEmail: boolean;
};

export type LoginForm = {
  [key in keyof LoginFormValue]: FormControl<LoginFormValue[key]>;
};
