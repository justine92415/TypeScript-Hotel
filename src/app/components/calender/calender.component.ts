import { CommonModule } from '@angular/common';
import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';

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

  daysOfWeek: string[] = ['日', '一', '二', '三', '四', '五', '六'];
  dates: string[][] = [];
  dates2: string[][] = [];

  constructor() {}

  ngOnInit(): void {
    this.dates = this.generateDates(this.currentYear(), this.currentMonth());
    this.dates2 = this.generateDates(this.nextYear(), this.nextMounth());
  }

  generateDates(year: number, mounth: number): string[][] {
    const daysInMonth = new Date(year, mounth, 0).getDate();
    const firstDayOfMonth = new Date(year, mounth - 1, 1).getDay();

    const tmpDates = Array.from({ length: 42 }).reduce((acc: string[][], _, i) => {
      const day = i - firstDayOfMonth + 1;
      if (day > 0 && day <= daysInMonth) {
        const week = Math.floor(i / 7);
        if (!acc[week]) {
          acc[week] = [];
        }
        acc[week].push(day.toString());
      }
      return acc;
    }, [] as string[][]);

    if (tmpDates[0].length < 7) {
      const emptyDays = 7 - tmpDates[0].length;
      tmpDates[0] = Array(emptyDays).fill('').concat(tmpDates[0]);
    }

    // Fill the last week with empty strings if it's not full
    const lastWeekIndex = tmpDates.length - 1;
    if (tmpDates[lastWeekIndex].length < 7) {
      const emptyDays = 7 - tmpDates[lastWeekIndex].length;
      tmpDates[lastWeekIndex] = tmpDates[lastWeekIndex].concat(Array(emptyDays).fill(''));
    }

    return tmpDates;
  }

  onClickPreMounth() {
    this.currentMonth.set(this.currentMonth() - 1);
    if (this.currentMonth() < 1) {
      this.currentYear.set(this.currentYear() - 1);
      this.currentMonth.set(12);
    }

    this.dates = this.generateDates(this.currentYear(), this.currentMonth());
    this.dates2 = this.generateDates(this.nextYear(), this.nextMounth());
  }

  onNextMounth() {
    this.currentMonth.set(this.currentMonth() + 1);
    if (this.currentMonth() > 12) {
      this.currentYear.set(this.currentYear() + 1);
      this.currentMonth.set(1);
    }
    this.dates = this.generateDates(this.currentYear(), this.currentMonth());
    this.dates2 = this.generateDates(this.nextYear(), this.nextMounth());
  }
}
