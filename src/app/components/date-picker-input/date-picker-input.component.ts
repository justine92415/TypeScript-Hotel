import { Component, Input, OnInit, Signal, WritableSignal, inject, signal } from '@angular/core';
import { DatePickerService } from '../../services/date-picker.service';
import { DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-date-picker-input',
  standalone: true,
  imports: [JsonPipe,DatePipe],
  templateUrl: './date-picker-input.component.html',
  styleUrl: './date-picker-input.component.scss'
})
export class DatePickerInputComponent {
  @Input() title: string = 'Title';
  @Input() date!:string | null;
  @Input() placeholder: string = '';

}
