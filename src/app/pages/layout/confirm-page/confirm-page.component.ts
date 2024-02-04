import { OrderService } from './../../../services/order.service';
import { LoginService } from './../../../services/login.service';
import { RoomsService } from './../../../services/rooms.service';
import { Component, Signal, inject } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { InputComponent } from '../../../components/input/input.component';
import { SelectComponent, SelectOption } from '../../../components/select/select.component';
import { DividerComponent } from '../../../components/divider/divider.component';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { map, switchMap, shareReplay } from 'rxjs';
import { AsyncPipe, DecimalPipe, JsonPipe, NgIf } from '@angular/common';
import { Days } from '../../../model/DatePicker';
import { DatePickerService } from '../../../services/date-picker.service';
import { cities } from '../../../../assets/taiwan-zip-code';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserInfoForm } from '../../../model/Form';
import { requiredValidator } from '../../../validators';
import { OrderReq } from '../../../model/Order';

@Component({
  selector: 'app-confirm-page',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent,
    SelectComponent,
    DividerComponent,
    AsyncPipe,
    NgIf,
    DecimalPipe,
    ReactiveFormsModule,
    JsonPipe,
  ],
  templateUrl: './confirm-page.component.html',
  styleUrl: './confirm-page.component.scss',
})
export default class ConfirmPageComponent {
  roomId: string = '';
  queryParam!: {
    peopleNum: number;
    checkInDate: string;
    checkOutDate: string;
  };
  checkInFormatDate: string = '';
  checkOutFormatDate: string = '';
  cityList!: SelectOption[];
  regionList!: SelectOption[];
  formGroup!: FormGroup<UserInfoForm>;

  orderService = inject(OrderService);
  loginService = inject(LoginService);
  roomsService = inject(RoomsService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  datePickerSerivce = inject(DatePickerService);
  fb = inject(FormBuilder);

  totalDate: Signal<number> = this.datePickerSerivce.dateDifferent;

  roomDetail$ = this.route.paramMap.pipe(
    map((params) => {
      this.roomId = params.get('id') ?? '';
      return params.get('id');
    }),
    switchMap((id) => this.roomsService.getRoom(id ?? '')),
    map((room) => room),
    shareReplay()
  );

  ngOnInit(): void {
    this.loginService.getUser()?.subscribe();
    this.route.queryParamMap.subscribe((params) => {
      this.queryParam = {
        peopleNum: +params.get('peopleNum')!,
        checkInDate: params.get('checkInDate')!,
        checkOutDate: params.get('checkOutDate')!,
      };
      const tmpCheckInDate = new Date(this.queryParam.checkInDate);
      this.checkInFormatDate = `${tmpCheckInDate.getMonth() + 1} 月 ${tmpCheckInDate.getDate()}${
        Days[new Date(this.queryParam.checkInDate).getDay()]
      }`;
      const tmpCheckOutDate = new Date(this.queryParam.checkOutDate);
      this.checkOutFormatDate = `${tmpCheckOutDate.getMonth() + 1} 月 ${tmpCheckOutDate.getDate()}${
        Days[new Date(this.queryParam.checkOutDate).getDay()]
      }`;
    });

    this.initFormGroup();

    this.setCityList();
    this.setRegionList(this.formGroup.controls.address.controls.city.value);

    this.formGroup.controls.address.controls.city.valueChanges.subscribe((city) => {
      this.setRegionList(city);
      this.formGroup.controls.address.controls.zipcode.setValue(this.formGroup.controls.address.controls.zipcode.value);
    });
  }

  initFormGroup(): void {
    this.formGroup = this.fb.group<UserInfoForm>({
      name: this.fb.control('', { nonNullable: true, validators: requiredValidator('請輸入姓名') }),
      phone: this.fb.control('', { nonNullable: true, validators: requiredValidator('請輸入手機號碼') }),
      email: this.fb.control('', { nonNullable: true, validators: requiredValidator('請輸入電子信箱') }),
      address: this.fb.group({
        city: this.fb.control('100', { nonNullable: true }),
        zipcode: this.fb.control('104', { nonNullable: true }),
        detail: this.fb.control('', { nonNullable: true, validators: requiredValidator('請輸入詳細地址') }),
      }),
    });
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

  cityCodeMapping(cityName: string): string {
    return cities.find((cityOption) => cityOption.name === cityName)!.code.toString();
  }

  applyUserInfo(): void {
    const userInfo = this.loginService.userInfo();
    this.formGroup.patchValue({
      name: userInfo!.name,
      phone: userInfo!.phone,
      email: userInfo!.email,
      address: {
        city: this.cityCodeMapping(userInfo!.address.city),
        zipcode: userInfo!.address.zipcode.toString(),
        detail: userInfo!.address.detail,
      },
    });
  }

  Order(): void {
    const orderReq:OrderReq = {
      roomId: this.roomId,
      checkInDate: this.datePickerSerivce.startDate()!,
      checkOutDate: this.datePickerSerivce.endDate()!,
      peopleNum: this.queryParam.peopleNum,
      userInfo: {
        name: this.formGroup.controls.name.value,
        email: this.formGroup.controls.email.value,
        phone: this.formGroup.controls.phone.value,
        address:{
          city: this.formGroup.controls.address.controls.city.value,
          zipcode: +this.formGroup.controls.address.controls.zipcode.value,
          detail: this.formGroup.controls.address.controls.detail.value,
          county: this.formGroup.controls.address.controls.city.value,
        }
      },
    };

    this.orderService.postLogin(orderReq).subscribe({
      next: (res) => {
        if (res.status) {
          let navigationExtras: NavigationExtras = {
            queryParams: {
              ...res.result,
            },
          };
          this.router.navigate(['/success',navigationExtras]);
        }
      },
    });
  }

  routerPage(path:string,roomId?:string){
    if(roomId){
      this.router.navigate([path,roomId]);
    }else{
      this.router.navigate([path]);
    }
  }
}
