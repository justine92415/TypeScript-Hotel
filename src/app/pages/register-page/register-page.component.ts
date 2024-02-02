import { Component, Signal, WritableSignal, inject, signal, computed } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CheckboxComponent } from '../../components/checkbox/checkbox.component';
import { InputComponent } from '../../components/input/input.component';
import { StepperComponent } from '../../components/stepper/stepper.component';
import { SelectComponent, SelectOption } from '../../components/select/select.component';
import { AbstractControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Stepper } from '../../model/Stepper';
import { cities } from '../../../assets/taiwan-zip-code';

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
  fb = inject(FormBuilder);
  currentStep: WritableSignal<number> = signal(2);
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
  dayList: WritableSignal<SelectOption[]> = signal([]);

  cityList!: SelectOption[];
  regionList!: SelectOption[];

  // regionList:Signal<SelectOption> = computed<SelectOption[]> (()=>{
  //   const city = this.formGroup.get('address')?.get('city')?.value;
  //   return this.cityList.value.filter((cityOption) => cityOption.value === city)[0].children;
  // })

  formGroup = this.fb.group({
    name: this.fb.control('', { nonNullable: true }),
    email: this.fb.control('', { nonNullable: true, validators: this.emailValidator() })!,
    password: this.fb.control('', { nonNullable: true, validators: this.passwordValidator() }),
    repeatPassword: this.fb.control('', { nonNullable: true, validators: this.repetPasswordValidator() }),
    phone: this.fb.control('', { nonNullable: true }),
    year: this.fb.control('1990', { nonNullable: true }),
    month: this.fb.control('1', { nonNullable: true }),
    day: this.fb.control('1', { nonNullable: true }),
    address: this.fb.group({
      city: this.fb.control('100', { nonNullable: true }),
      zipcode: this.fb.control('104', { nonNullable: true }),
      detail: this.fb.control('', { nonNullable: true }),
    }),
  });

  ngOnInit(): void {
    this.setYearList();
    this.setMonthList();
    this.setDayList(this.formGroup.controls.year.value, this.formGroup.controls.month.value);
    this.setCityList();
    this.setRegionList(this.formGroup.controls.address.controls.city.value);

    this.formGroup.controls.year.valueChanges.subscribe((year) => {
      this.setDayList(year, this.formGroup.controls.month.value);
      this.formGroup.controls.day.setValue(this.dayList()[0].value);
    });

    this.formGroup.controls.month.valueChanges.subscribe((month) => {
      this.setDayList(this.formGroup.controls.year.value, month);
      this.formGroup.controls.day.setValue(this.dayList()[0].value);
    });

    this.formGroup.controls.address.controls.city.valueChanges.subscribe((city) => {
      this.setRegionList(city);
      this.formGroup.controls.address.controls.zipcode.setValue(this.regionList[0].value);
    });
  }

  passwordValidator() {
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

  repetPasswordValidator() {
    return (control: AbstractControl) => {
      const value = control.value;
      if (!value) return { errorMsg: '請輸入密碼' };
      const password = this.formGroup.get('password')?.value;
      if (value !== password) {
        return { errorMsg: '密碼不一致' };
      }
      return null;
    };
  }

  emailValidator() {
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
    this.dayList.set(
      Array.from({ length: day }, (_, index) => ({
        label: `${index + 1} 日`,
        value: `${index + 1}`,
      }))
    );
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
}
