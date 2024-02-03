import { OverlayModule, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent,OverlayModule],
  template: `
    <header
      class="absolute z-50 w-full bg-black px-20 py-6 flex justify-between items-center"
      [class]="{
      'bg-transparent': currentPage === 'home' || currentPage === 'rooms',
     }"
    >
      <img
        class="w-[12.25rem] h-[4.5rem] cursor-pointer"
        (click)="routerPage('/home')"
        src="/assets/images/desktop/logo.png"
        alt=""
      />
      <div class="flex items-center gap-4">
        <app-button [buttonType]="'ghost'" (click)="routerPage('rooms')">客房旅宿</app-button>
        @if(loginService.isLoggedIn()){
          <div #profileBtn>
            <app-button [buttonType]="'ghost'" [leftIcon]="'profile'" (click)="openDropdown()">{{loginService.user()!.name}}</app-button>
          </div>
        }
        @if(loginService.isLoggedOut()){<app-button [buttonType]="'ghost'" (click)="routerPage('login')">會員登入</app-button>}
        <app-button [buttonType]="'primary'" (click)="routerPage('rooms')">立即訂房</app-button>
      </div>
    </header>

    <ng-template #dropdown>
      <ul class="w-[16.25rem] py-3 bg-white rounded-[1.25rem] shadow-sm overflow-hidden translate-x-[110px]">
        <li class="px-6 py-4 hover:text-primary-base hover:bg-[#F7F2EE] cursor-pointer" (click)="selectItem('profile')">我的帳戶</li>
        <li class="px-6 py-4 hover:text-primary-base hover:bg-[#F7F2EE] cursor-pointer" (click)="selectItem('logout')">登出</li>
      </ul>
    </ng-template>
  `,
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @ViewChild('profileBtn') profileBtn!: ElementRef;
  @ViewChild('dropdown') dropdown!: TemplateRef<any>;

  currentPage!: string;
  router = inject(Router);
  loginService = inject(LoginService);
  overlayRef!: OverlayRef;

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.currentPage = this.router.url.replace('/', '');

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPage = event.url.replace('/', '');
      }
    });
  }

  routerPage(path: string): void {
    this.router.navigate([path]);
  }

  openDropdown() {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    } else {
      const positionStrategy = this.overlay
        .position()
        .flexibleConnectedTo(this.profileBtn.nativeElement)
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
          },
        ])
        .withPush(false);

      const overlayConfig = new OverlayConfig({
        positionStrategy,
        hasBackdrop: true,
        backdropClass: 'cdk-overlay-transparent-backdrop',
        scrollStrategy: this.overlay.scrollStrategies.close(),
      });

      this.overlayRef = this.overlay.create(overlayConfig);
      this.overlayRef.attach(new TemplatePortal(this.dropdown, this.viewContainerRef));
      this.overlayRef.backdropClick().subscribe(() => {
        this.overlayRef.detach();
      });
    }
  }

  selectItem(action:'profile'|'logout'){
    if(action === 'profile'){
      this.router.navigate(['profile']);
    }else{
      this.loginService.logout();
      this.router.navigate(['/home']);
    }
    this.overlayRef.detach();
  }
}
