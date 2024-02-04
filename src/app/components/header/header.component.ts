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
  templateUrl: './header.component.html',
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
