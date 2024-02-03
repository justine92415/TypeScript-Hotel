import { Component, OnInit, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <header
      class="absolute z-50 w-full bg-black px-20 py-6 flex justify-between items-center"
      [class]="{
      'bg-transparent': currentPage === 'home' || currentPage === 'rooms',
     }"
    >
      <img
        class="w-[12.25rem] h-[4.5rem] cursor-pointer"
        (click)="routerPage('/')"
        src="/assets/images/desktop/logo.png"
        alt=""
      />
      <div class="flex items-center gap-4">
        <app-button [buttonType]="'ghost'" (click)="routerPage('rooms')">客房旅宿</app-button>
        <app-button [buttonType]="'ghost'" (click)="routerPage('login')">會員登入</app-button>
        <app-button [buttonType]="'primary'" (click)="routerPage('order')">立即訂房</app-button>
      </div>
    </header>
  `,
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  currentPage!: string;
  router = inject(Router);

  ngOnInit(): void {
    this.currentPage = this.router.url.replace('/', '');

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPage = event.url.replace('/', '');
      }
      console.log(this.currentPage);
    });
  }

  routerPage(path: string): void {
    this.router.navigate([path]);
  }
}
