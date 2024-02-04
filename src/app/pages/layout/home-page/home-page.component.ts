import { LoginService } from './../../../services/login.service';

import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { ButtonHeroComponent } from '../../../components/button-hero/button-hero.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, ButtonHeroComponent, ButtonComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export default class HomePageComponent implements OnInit {
  loginService = inject(LoginService);
  router = inject(Router);
  ngOnInit(): void {
    this.loginService.getUser()?.subscribe();
  }

  routerPage(): void {
    this.router.navigate(['/rooms']);
  }
}
