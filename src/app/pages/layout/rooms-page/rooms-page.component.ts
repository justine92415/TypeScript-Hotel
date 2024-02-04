import { Component, inject } from '@angular/core';
import { RoomsService } from '../../../services/rooms.service';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-rooms-page',
  standalone: true,
  imports: [AsyncPipe,DecimalPipe],
  templateUrl: './rooms-page.component.html',
  styleUrl: './rooms-page.component.scss',
})
export default class RoomsPageComponent {
  roomsService = inject(RoomsService);
  rooms$ = this.roomsService.getRooms();
  router = inject(Router);

  loginService = inject(LoginService);

  ngOnInit(): void {
    this.loginService.getUser()?.subscribe();
  }

  routerPage(id:string){
    this.router.navigate(['rooms',id]);
  }


}
