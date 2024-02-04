import { CommonModule } from '@angular/common';
import { Component, Signal, WritableSignal, computed, inject, signal } from '@angular/core';
import { DatePickerService } from '../../services/date-picker.service';
import { DateOption } from '../../model/DatePicker';

@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.scss',
})
export class CalenderComponent {
  currentYear: WritableSignal<number> = signal(new Date().getFullYear());
  currentMonth: WritableSignal<number> = signal(new Date().getMonth() + 1);
  nextMounth: Signal<number> = computed(() => {
    if (this.currentMonth() === 12) {
      return 1;
    }
    return this.currentMonth() + 1;
  });
  nextYear: Signal<number> = computed(() => {
    if (this.currentMonth() === 12) {
      return this.currentYear() + 1;
    }
    return this.currentYear();
  });

  isToday: Signal<boolean> = computed(() => {
    return this.currentYear() === new Date().getFullYear() && this.currentMonth() === new Date().getMonth() + 1;
  });

  daysOfWeek: string[] = ['日', '一', '二', '三', '四', '五', '六'];
  dates: DateOption[][] = [];
  dates2: DateOption[][] = [];

  selectedDate!: Signal<[string | null, string | null]>;

  datePickerService = inject(DatePickerService);

  ngOnInit(): void {
    this.dates = this.generateDates(this.currentYear(), this.currentMonth());
    this.dates2 = this.generateDates(this.nextYear(), this.nextMounth());

    this.selectedDate = this.datePickerService.selectedDateSig;
  }

  generateDates(year: number, mounth: number): DateOption[][] {
    const daysInMonth = new Date(year, mounth, 0).getDate();
    const firstDayOfMonth = new Date(year, mounth - 1, 1).getDay();

    const tmpDates = Array.from({ length: 42 }).reduce((acc: DateOption[][], _, i) => {
      const day = i - firstDayOfMonth + 1;
      if (day > 0 && day <= daysInMonth) {
        const week = Math.floor(i / 7);
        if (!acc[week]) {
          acc[week] = [];
        }
        acc[week].push({
          date: new Date(year, mounth - 1, day),
          formatDate: new Date(year, mounth - 1, day).toLocaleDateString().split('T')[0],
          isDisabled: new Date(year, mounth - 1, day) < new Date(),
        });
      }
      return acc;
    }, [] as DateOption[][]);

    if (tmpDates[0].length < 7) {
      const emptyDays = 7 - tmpDates[0].length;
      tmpDates[0] = Array(emptyDays).fill('').concat(tmpDates[0]);
    }

    const lastWeekIndex = tmpDates.length - 1;
    if (tmpDates[lastWeekIndex].length < 7) {
      const emptyDays = 7 - tmpDates[lastWeekIndex].length;
      tmpDates[lastWeekIndex] = tmpDates[lastWeekIndex].concat(Array(emptyDays).fill(''));
    }

    return tmpDates;
  }

  onClickPreMounth(): void {
    this.currentMonth.set(this.currentMonth() - 1);
    if (this.currentMonth() < 1) {
      this.currentYear.set(this.currentYear() - 1);
      this.currentMonth.set(12);
    }

    this.dates = this.generateDates(this.currentYear(), this.currentMonth());
    this.dates2 = this.generateDates(this.nextYear(), this.nextMounth());
  }

  onNextMounth(): void {
    this.currentMonth.set(this.currentMonth() + 1);
    if (this.currentMonth() > 12) {
      this.currentYear.set(this.currentYear() + 1);
      this.currentMonth.set(1);
    }
    this.dates = this.generateDates(this.currentYear(), this.currentMonth());
    this.dates2 = this.generateDates(this.nextYear(), this.nextMounth());
  }

  selectDate(dateOption: DateOption): void {
    if (this.smallthenStartDate(dateOption)) return;
    const { date } = dateOption;
    this.datePickerService.selectDate(date);
  }

  inDateRange(dateOption: DateOption): boolean {
    const [startDate, endDate] = this.selectedDate();
    if (!startDate || !endDate) {
      return false;
    }
    const date = dateOption.date;
    return date > new Date(startDate) && date < new Date(endDate);
  }

  smallthenStartDate(dateOption: DateOption): boolean {
    const [startDate] = this.selectedDate();
    if (!startDate) {
      return false;
    }
    const date = dateOption.date;
    return date < new Date(startDate);
  }
}
