import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-picker-input',
  standalone: true,
  imports: [],
  templateUrl: './date-picker-input.component.html',
  styleUrl: './date-picker-input.component.scss'
})
export class DatePickerInputComponent {
  @Input() title: string = 'Title';
}
