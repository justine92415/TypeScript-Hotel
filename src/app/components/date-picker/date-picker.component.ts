import { Component, Signal, inject } from '@angular/core';
import { DatePickerInputComponent } from '../date-picker-input/date-picker-input.component';
import { CalenderComponent } from '../calender/calender.component';
import { DatePickerService } from '../../services/date-picker.service';
import { DatePipe } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [DatePickerInputComponent, CalenderComponent,DatePipe,ButtonComponent],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
})
export class DatePickerComponent {
  isOpen = false;
  selectedDate!: Signal<[string | null, string | null]>;

  datePickerService = inject(DatePickerService);

  ngOnInit(): void {
    this.selectedDate = this.datePickerService.selectedDateSig;
  }

  onClickDatePicker():void {
    this.isOpen = !this.isOpen;
  }

  clearDate():void {
    this.datePickerService.clearDate();
  }
}
