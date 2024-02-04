import { DatePickerService } from './../../../services/date-picker.service';
import { RoomsService } from './../../../services/rooms.service';
import { Component, Signal, WritableSignal, inject, signal } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { DatePickerComponent } from '../../../components/date-picker/date-picker.component';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { map, share, shareReplay, switchMap } from 'rxjs';
import { AsyncPipe, CommonModule, DecimalPipe, NgIf } from '@angular/common';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [NgIf,DecimalPipe, ButtonComponent, DatePickerComponent, AsyncPipe],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss',
})
export default class DetailPageComponent {
  totlePeople: WritableSignal<number> = signal(2);
  roomId:string = '';
  loginService = inject(LoginService);
  roomsService = inject(RoomsService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  datePickerService = inject(DatePickerService);
  totalDate:Signal<number> = this.datePickerService.dateDifferent;

  roomDetail$ = this.route.paramMap.pipe(
    map((params) => {
      this.roomId = params.get('id') ?? '';
      return params.get('id');
    }),
    switchMap((id) => this.roomsService.getRoom(id ?? '')),
    map((room) => room),
    shareReplay()
  );

  changeTotlaPeople(action: 'add' | 'sub', maxPeople: number) {
    switch (action) {
      case 'add':
        if (this.totlePeople() < maxPeople) {
          this.totlePeople.set(this.totlePeople() + 1);
        }
        break;
      case 'sub':
        if (this.totlePeople() > 2) {
          this.totlePeople.set(this.totlePeople() - 1);
        }
        break;
    }
  }

  ngOnInit(): void {
    this.loginService.getUser()?.subscribe();
  }

  routerPage() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        peopleNum: this.totlePeople(),
        checkInDate: this.datePickerService.startDate(),
        checkOutDate: this.datePickerService.endDate(),
      },
    };
    this.router.navigate(['confirm',this.roomId], navigationExtras);
  }
}
