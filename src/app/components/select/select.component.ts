import {
  Component,
  ViewChild,
  ElementRef,
  ViewContainerRef,
  TemplateRef,
  WritableSignal,
  signal,
  Input,
  forwardRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { OverlayModule, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule, FormGroup } from '@angular/forms';

export type SelectOption = {
  label: string;
  value: string;
};

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [OverlayModule, ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  @ViewChild('test') test!: ElementRef;
  @ViewChild('dropdown') dropdown!: TemplateRef<any>;
  @Input() placeholder: string = '請選擇';
  @Input({ required: false }) options: SelectOption[] = [];
  @Input({ required: true }) formGroup!: FormGroup;
  @Input({ required: true }) name!: string;

  controlValue = new FormControl();
  currentOption: WritableSignal<SelectOption | null> = signal(null);
  overlayRef!: OverlayRef;

  onTouched: any = () => {};
  onChange: any = () => {};

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.setDefaultValue();

    this.formGroup.controls[this.name].valueChanges.subscribe((value) => {
      setTimeout(() => {
        this.setDefaultValue();
      }, 0);
    });
  }

  setDefaultValue(): void {
    const defaultValue = this.formGroup.controls[this.name].value;
    const defaultOption = this.options.find((option) => option.value === defaultValue);
    if (defaultOption) {
      this.currentOption.set(defaultOption);
    } else {
      this.currentOption.set(null);
    }
  }

  openDropdown() {
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
      this.overlayRef.attach(new TemplatePortal(this.dropdown, this.viewContainerRef));
      this.overlayRef.backdropClick().subscribe(() => {
        this.overlayRef.detach();
      });
    }
  }

  selectOption(option: SelectOption): void {
    this.currentOption.set(option);
    this.onChange(option.value);
    this.onTouched();
    this.overlayRef.detach();
  }

  // 實作 ControlValueAccessor 介面的方法
  writeValue(selectOption: SelectOption): void {
    // this.value = selectOption.value;
    this.controlValue.setValue(selectOption.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
