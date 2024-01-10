import {
  Component,
  ViewChild,
  ElementRef,
  ViewContainerRef,
  TemplateRef,
} from '@angular/core';
import {
  OverlayModule,
  Overlay,
  OverlayConfig,
  OverlayRef,
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [OverlayModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  @ViewChild('test') test!: ElementRef;
  @ViewChild('dropdown') dropdown!: TemplateRef<any>;

  overlayRef!: OverlayRef;

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef
  ) {}

  openDropdown() {
    console.log('我有被點擊唷');
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    } else {
      const positionStrategy = this.overlay
        .position()
        .flexibleConnectedTo(this.test.nativeElement)
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
          },
        ])
        .withPush(false);

      const overlayConfig = new OverlayConfig({
        positionStrategy,
        hasBackdrop: true,
        backdropClass: 'cdk-overlay-transparent-backdrop',
        scrollStrategy: this.overlay.scrollStrategies.close(),
        maxWidth: this.test.nativeElement.offsetWidth,
        panelClass: 'w-full',
      });

      this.overlayRef = this.overlay.create(overlayConfig);
      this.overlayRef.attach(
        new TemplatePortal(this.dropdown, this.viewContainerRef)
      );
      this.overlayRef.backdropClick().subscribe(() => {
        this.overlayRef.detach();
      });
    }
  }

  closeDropdown() {}
}
