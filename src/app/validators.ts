import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';
import { SignupForm } from './model/Form';

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value;
    if (!value) return { errorMsg: '請輸入手機號碼' };
    const regex = /^09\d{8}$/;
    if (!regex.test(value)) {
      return { errorMsg: '無效手機號碼格式' };
    }
    return null;
  };
}

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value;
    if (!value) return { errorMsg: '請輸入密碼' };
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!regex.test(value)) {
      return { errorMsg: '密碼需包含大小寫英文及數字，且長度至少8個字元' };
    }
    return null;
  };
}

export function repetPasswordValidator(formGroup: FormGroup<SignupForm>): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value;
    if (!value) return { errorMsg: '請輸入密碼' };
    const password = formGroup.get('password')?.value;
    if (value !== password) {
      return { errorMsg: '密碼不一致' };
    }
    return null;
  };
}

export function requiredValidator(errorMsg: string): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value;
    if (!value) return { errorMsg };
    return null;
  };
}

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value;
    if (!value) return { errorMsg: '請輸入信箱' };
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regex.test(value)) {
      return { errorMsg: '無效信箱格式' };
    }
    return null;
  };
}
