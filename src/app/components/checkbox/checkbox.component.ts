import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  control: FormControl = new FormControl();
  onTouched: any = () => {};
  onChange: any = () => {};

  writeValue(value: any): void {
    this.control.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.control.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
