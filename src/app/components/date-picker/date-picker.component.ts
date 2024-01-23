import { Component } from '@angular/core';
import { DatePickerInputComponent } from '../date-picker-input/date-picker-input.component';
import { CalenderComponent } from '../calender/calender.component';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [DatePickerInputComponent,CalenderComponent],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent {

}
