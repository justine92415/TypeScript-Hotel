import { Component, WritableSignal, inject, signal } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CheckboxComponent } from '../../components/checkbox/checkbox.component';
import { InputComponent } from '../../components/input/input.component';
import { StepperComponent } from '../../components/stepper/stepper.component';
import { SelectComponent, SelectOption } from '../../components/select/select.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Stepper } from '../../model/Stepper';
import { cities } from '../../../assets/taiwan-zip-code';
import { SignupForm, SignupFormValue } from '../../model/Form';
import {
  emailValidator,
  passwordValidator,
  phoneValidator,
  repetPasswordValidator,
  requiredValidator,
} from '../../validators';
import { RegisterService } from '../../services/register.service';
import { SignupReq, SignupRes } from '../../model/Signup';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
    StepperComponent,
    SelectComponent,
    ReactiveFormsModule,
    JsonPipe,
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export default class RegisterPageComponent {
  currentStep: WritableSignal<number> = signal(1);
  stepperArray: WritableSignal<Stepper[]> = signal<Stepper[]>([
    {
      step: 1,
      stepDesc: '輸入信箱及密碼',
      completed: false,
    },
    {
      step: 2,
      stepDesc: '填寫基本資料',
      completed: false,
    },
  ]);
  yearList!: SelectOption[];
  monthList!: SelectOption[];
  dayList: SelectOption[] = [];
  cityList!: SelectOption[];
  regionList!: SelectOption[];
  formGroup!: FormGroup<SignupForm>;
  isOpenMenu = false;


  fb = inject(FormBuilder);
  registerService = inject(RegisterService);
  router = inject(Router);

  ngOnInit(): void {
    this.initFormGroup();

    this.setYearList();
    this.setMonthList();
    this.setDayList(this.formGroup.controls.year.value, this.formGroup.controls.month.value);
    this.setCityList();
    this.setRegionList(this.formGroup.controls.address.controls.city.value);

    this.formGroup.controls.year.valueChanges.subscribe((year) => {
      this.setDayList(year, this.formGroup.controls.month.value);
      this.formGroup.controls.day.setValue(this.dayList[0].value);
    });

    this.formGroup.controls.month.valueChanges.subscribe((month) => {
      this.setDayList(this.formGroup.controls.year.value, month);
      this.formGroup.controls.day.setValue(this.dayList[0].value);
    });

    this.formGroup.controls.address.controls.city.valueChanges.subscribe((city) => {
      this.setRegionList(city);
      this.formGroup.controls.address.controls.zipcode.setValue(this.regionList[0].value);
    });
  }

  onNextStep(): void {
    this.stepperArray.update((stepperArray) => {
      const currentStep = stepperArray.find((step) => step.step === this.currentStep());
      if (currentStep) currentStep.completed = true;
      return stepperArray;
    });
    this.currentStep.set(this.currentStep() + 1);
  }

  setYearList(): void {
    const currentYear: number = new Date().getFullYear();
    const startYear: number = 1990; // 可根據需求調整
    this.yearList = Array.from({ length: currentYear - startYear + 1 }, (_, index) => ({
      label: `${startYear + index} 年`,
      value: `${startYear + index}`,
    }));
  }

  setMonthList(): void {
    const startMonth: number = 1; // 可根據需求調整
    this.monthList = Array.from({ length: 12 }, (_, index) => ({
      label: `${startMonth + index} 月`,
      value: `${startMonth + index}`,
    }));
  }

  setDayList(year: string, month: string): void {
    const day = new Date(Number(year), Number(month), 0).getDate();
    this.dayList = Array.from({ length: day }, (_, index) => ({
      label: `${index + 1} 日`,
      value: `${index + 1}`,
    }));
  }

  setCityList(): void {
    this.cityList = cities.map((city) => ({
      label: city.name,
      value: city.code.toString(),
    }));
  }

  setRegionList(city: string): void {
    this.regionList = cities
      .find((cityOption) => cityOption.code.toString() === city)!
      .region.map((region) => {
        return {
          label: region.name,
          value: region.code.toString(),
        };
      });
  }

  initFormGroup(): void {
    this.formGroup = this.fb.group<SignupForm>({
      name: this.fb.control('王大明', { nonNullable: true, validators: requiredValidator('請輸入姓名') }),
      email: this.fb.control('test@gmail.com', { nonNullable: true, validators: emailValidator() })!,
      password: this.fb.control('1qazXSW2', { nonNullable: true, validators: passwordValidator() }),
      repeatPassword: this.fb.control('1qazXSW2', { nonNullable: true }),
      phone: this.fb.control('0987654321', { nonNullable: true, validators: phoneValidator() }),
      year: this.fb.control('1990', { nonNullable: true }),
      month: this.fb.control('1', { nonNullable: true }),
      day: this.fb.control('1', { nonNullable: true }),
      address: this.fb.group({
        city: this.fb.control('100', { nonNullable: true }),
        zipcode: this.fb.control('104', { nonNullable: true }),
        detail: this.fb.control('全家就是你家', { nonNullable: true, validators: requiredValidator('請輸入地址') }),
      }),
      isReaded: this.fb.control(false, { nonNullable: true }),
    });

    this.formGroup.controls.repeatPassword.setValidators(repetPasswordValidator(this.formGroup));
  }

  onSubmit(): void {
    const { name, email, password, phone, year, month, day, address } = this.formGroup.value as SignupFormValue;
    const { zipcode, detail } = address;
    const signupReq: SignupReq = {
      name,
      email,
      password,
      phone,
      birthday: `${year}/${month}/${day}`,
      address: {
        zipcode: +zipcode,
        detail,
      },
    };

    this.registerService.postSignup(signupReq).subscribe({
      next: (res: SignupRes) => {
        console.log(res);
        if (res.status) {
          this.router.navigate(['/login']);
        }
      },
      error: (err: HttpErrorResponse) => {
        alert(err.error.message);
      },
    });
  }

  routerPage(path:string): void {
    this.router.navigate([path]);
    this.isOpenMenu = false;
  }
}
