import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatePickerService {
  private selectedDate: WritableSignal<[string | null, string | null]> = signal([null, null]);
  selectedDateSig: Signal<[string | null, string | null]> = computed(() => this.selectedDate());
  startDate: Signal<string | null> = computed(() => {
    const [year, month, day] = this.selectedDate()[0]!.split('/');
    return `${year}/${+month < 10 ? '0' + month : month}/${+day < 10 ? '0' + day : day}`;
  });
  endDate: Signal<string | null> = computed(() => {
    const [year, month, day] = this.selectedDate()[1]!.split('/');
    return `${year}/${+month < 10 ? '0' + month : month}/${+day < 10 ? '0' + day : day}`;
  });
  dateDifferent: Signal<number> = computed(() => {
    if (this.selectedDate()[0] && this.selectedDate()[1]) {
      const date1 = new Date(this.selectedDate()[0] as string);
      const date2 = new Date(this.selectedDate()[1] as string);
      return (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
    }
    return 0;
  });
  selectSuccess: Signal<boolean> = computed(() => this.selectedDate().every((date) => !!date));

  constructor() {}

  selectDate(date: Date): void {
    if (!date) return;
    const dateStr = date.toLocaleDateString().split('T')[0];
    if (this.selectedDate().includes(dateStr)) return;

    if (this.selectedDate()[0] === null) {
      this.selectedDate.update(() => [dateStr, null]);
    } else if (!!this.selectedDate()[0]) {
      this.selectedDate.update(() => [this.selectedDate()[0], dateStr]);
    }
  }

  clearDate(): void {
    this.selectedDate.update(() => [null, null]);
  }
}
